const { Comments } = require("../models/Comment");
const jwt = require("jsonwebtoken");
const { Reply } = require("../models/Reply");
const { StatusCodes } = require("http-status-codes");
module.exports.createComment = async (req, res) => {
  const { content } = req.body;

  try {
    const comment = await Comments.create({
      content,
    });
    res.json({
      success: true,
      message: "Comment created",
      comment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Comment creation failed",
      error: error.message,
    });
  }
};
// Updating comment
module.exports.updateComment = async (req, res) => {
  const { content, commentId } = req.body;

  try {
    const updatedComment = await Comments.findByIdAndUpdate(
      commentId,
      {
        $set: { content },
      },
      { new: true }
    );

    res.json({
      success: true,
      message: "Comment updated",
      updatedComment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Comment update failed",
      error: error.message,
    });
  }
};
// Deleting Comment
module.exports.deleteComment = async (req, res) => {
  const { commentId } = req.body;

  try {
    await Comments.findByIdAndDelete(commentId);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Comment deleted",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Comment deletion failed",
      error: error.message,
    });
  }
};
// Deleting Reply
module.exports.deleteReply = async (req, res) => {
  const { replyId, commentId } = req.body;

  try {
    await Reply.findByIdAndDelete(replyId);
    await Comments.findByIdAndUpdate(commentId, {
      $pull: { replies: replyId },
    });

    res.json({
      success: true,
      message: "Comment deleted",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Comment deletion failed",
      error: error.message,
    });
  }
};
// reply Comment

module.exports.replyComment = async (req, res) => {
  try {
    const { replyContent, commentId } = req.body;

    const reply = await Reply.create({ replyContent, commentId });
    const comment = await Comments.findByIdAndUpdate(
      commentId,
      { $push: { replies: reply._id } },
      { new: true }
    );

    res.json({
      success: true,
      message: "reply Successfull",
      reply,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Reply creation failed",
      error: error.message,
    });
  }
};
// Replying to a  Reply
module.exports.replyReply = async (req, res) => {
  const { content, replyId } = req.body;
  try {
    // create a reply
    const reply = await Reply.create({ content });
    // get the reply document then push the new replyId to it
    const updatedReply = await Reply.findOneAndUpdate(
      replyId,
      {
        $push: { replies: reply._id },
      },
      { new: true }
    );
    res.json({
      success: true,
      message: "You have replied to a reply",
      updatedReply,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "replying to a reply failed",
      error: error.message,
    });
  }
};
module.exports.deleteReplyToReply = async (req, res) => {
  const { replyToReplyId, replyId } = req.body;
  try {
    const reply = await Reply.findByIdAndUpdate(
      replyId,
      {
        $pull: { replies: replyToReplyId },
      },
      { new: true }
    );
    res.json({
      success: true,
      message: "You have deleted a reply to a reply",
      reply,
    });
  } catch (error) {
    res.json({
      success: false,
      message: " deletion of a reply to a reply failed",
      error: error.message,
    });
  }
};
// get All Comments

module.exports.getAllComments = async (req, res) => {
  try {
    // const comments = await Comments.deleteMany();

    const comments = await Comments.find().populate("replies");

    const replies = await Reply.find()
      .populate("replies", ["content", "vote"])
      .limit(5);

    res.json({ replies, comments });
  } catch (error) {
    res.json({
      success: false,
      message: "Getting all users failed",
      error: error.message,
    });
  }
};
