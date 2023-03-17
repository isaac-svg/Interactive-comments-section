import React from "react";
import "../styles/homePage.css";
import Nav from "./Nav";
import "../styles/homePage.css";
import Comment from "./Comment";
import Avatar from "../assets/images/avatars/image-amyrobson.png";
import InputComponet from "./InputComponet";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useComment } from "../CommentContext";
import { BASE_URL } from "../assets/URL";
import { postsActions } from "../store/posts-slice";

const HomePage = () => {
  const [reply, setReply] = useState(false);
  const dispatch = useDispatch();
  const showReply = (e) => {
    setReply(!reply);
  };
  const [posts, setPosts] = useState([]);
  // const { newPost, setNewPost } = useComment();
  useEffect(() => {
    fetch(`${BASE_URL}/comment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => dispatch(postsActions.addPost(data)))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(posts);
  return (
    <>
      <Nav />
      <main className="homepage">
        <div className="mainComments">
          <React.Fragment></React.Fragment>
        </div>
        <div className="baseInput">
          <InputComponet avatar={Avatar} purpose={"SEND"} />
        </div>
      </main>
    </>
  );
};

export default HomePage;
