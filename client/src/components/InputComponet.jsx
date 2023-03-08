import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../assets/URL";
import { commentActions } from "../store/comment-slice";
import { postsActions } from "../store/posts-slice";
import "../styles/input.css";
const arr = [];
const InputComponet = ({ avatar, purpose, setReply, commentId }) => {
  const posts = useSelector((state) => state.posts.posts);
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const handlePost = (e) => {
    e.preventDefault();

    if (e.target[1].textContent === "SEND") {
      fetch(`${BASE_URL}/comment/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: e.target[0].value }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(postsActions.addPost(data));
          // arr.push(data);
          // setPosts(arr);
        });
    } else if (e.target[1].textContent === "REPLY") {
      fetch(`${BASE_URL}/comment/reply`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: e.target[0].value, commentId }),
      })
        .then((res) => res.json())
        .then((dat) => {
          // console.log(posts);
          console.log(dat, "reply");
          console.log(dat?.reply?.commentId, "commentId");
          const repliedtoComment = posts.filter(
            (post) => post._id == dat?.reply?.commentId
          );
          // repliedtoComment.replies.push(data);
          // console.log(repliedtoComment, "repliedtoComment");
          console.log(repliedtoComment, "repliedtoComment");
          console.log(dat);
        });
    }
    console.log(e.target[0].value);
    e.target[0].value = "";
  };
  return (
    <form className="inputForm" onSubmit={handlePost}>
      <img src={avatar} alt="avatar" />
      <textarea name="" id=""></textarea>
      <button className="send">{purpose}</button>
    </form>
  );
};

export { InputComponet as default };
