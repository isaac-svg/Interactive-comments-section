import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../assets/URL";
import { commentActions } from "../store/comment-slice";
import { postsActions } from "../store/posts-slice";
import "../styles/input.css";

const InputComponet = ({ avatar, purpose, setReply, commentId }) => {
  const dispatch = useDispatch();
  const postsArr = useSelector((state) => state.posts.posts);
  const id = useParams();
  console.log(id);
  const handlePost = (e) => {
    e.preventDefault();
    console.log(e.target[1]);
    // if (!e.target.value.trim()) return;
    if (e.target[1].textContent === "SEND") {
      fetch(`${BASE_URL}/comment/create`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: e.target[0].value }),
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
        .then((data) => console.log(data, "from api"));
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
