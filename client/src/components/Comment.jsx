import React from "react";
import Vote from "./Vote";
import ReplyImage from "../assets/images/icon-reply.svg";
import "../styles/comment.css";
// import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import InputComponet from "./InputComponet";
import { uiActions } from "../store/ui-slice";

const Comment = ({ purpose, avatar, username, date, text, id }) => {
  const [reply, setReply] = useState(false);
  const handleReply = (e) => {};
  return (
    <>
      <div className="postWrapper" data-id={`${id}`} onClick={handleReply}>
        <div className={`${purpose} post`}>
          <Vote vote={0} id={id} />
          <div className="content">
            <div className="head">
              <div className="author">
                <img src={`${avatar}`} alt="avatar" className="avatar" />
                <span className="username">{username}</span>
                <time className="time">{date}</time>
              </div>
              <div className="reply replyFeature">
                {" "}
                <img
                  src={ReplyImage}
                  alt="reply image"
                  className="replyFeature"
                />
                <span className="replyFeature"> Reply</span>
              </div>
            </div>
            <div className="postText">
              <span className="text">{text}</span>
            </div>
          </div>
        </div>
        {reply && (
          <InputComponet
            purpose={"REPLY"}
            avatar={avatar}
            setReply={setReply}
            commentId={id}
          />
        )}
      </div>
    </>
  );
};

export { Comment as default };

/**
 * 
 {isReplying && PostID == id ? (
        <Input purpose={"REPLY"} avatar={avatar} />
      ) : (
        ""
      )}
 */
