const {
  create,

  replyComment,
  updateComment,
  deleteComment,
  deleteReply,
  getAllComments,
  createComment,
  replyReply,
  deleteReplyToReply,
} = require("../controllers/postController");
const { verifyToken, verifyUser } = require("../middlewares/verifyToken");

const router = require("express").Router();

router.route("/").post(verifyToken, createComment);
router.route("/reply").post(verifyToken, replyComment);
router.route("/update").patch(verifyUser, updateComment);
router.route("/delete").delete(verifyUser, deleteComment);
router.route("/delete/reply").delete(verifyUser, deleteReply);
router.route("/reply/reply").post(verifyUser, replyReply);
router.route("/reply/delete").delete(verifyUser, deleteReplyToReply);
router.route("/").get(verifyToken, getAllComments);

module.exports = router;
