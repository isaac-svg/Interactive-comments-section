import React from "react";
import "../styles/homePage.css";
import Nav from "./Nav";
import "../styles/homePage.css";
import Comment from "./Comment";
import Avatar from "../assets/images/avatars/image-amyrobson.png";
import InputComponet from "./InputComponet";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useComment } from "../CommentContext";
import { BASE_URL } from "../assets/URL";

const HomePage = () => {
  const Posts = useSelector((state) => state.posts.posts);
  const [reply, setReply] = useState(false);
  const showReply = (e) => {
    setReply(!reply);
  };
  const [posts, setPosts] = useState([]);
  const { newPost, setNewPost } = useComment();
  useEffect(() => {
    fetch(`${BASE_URL}/comment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(posts);
  return (
    <>
      <Nav />
      <main className="homepage">
        <div className="mainComments">
          <React.Fragment>
            {posts.length > 0 &&
              posts.map((post, index) => (
                <>
                  {console.log(post)}
                  <Comment
                    key={post._id}
                    avatar={Avatar}
                    purpose={"comment"}
                    username={"rounder Rowsy"}
                    date={post.createdAt}
                    text={post.content}
                    id={post._id}
                  />
                  <div className="replySection" key={index}>
                    {/* REPLIES WILL BE LOOPED OVER HERE */}
                    {/* {console.log(post)} */}
                    {post?.replies.map((reply) => (
                      <Comment
                        key={reply._id}
                        avatar={Avatar}
                        purpose={"reply"}
                        username={"Cipher"}
                        date={reply.createdAt}
                        text={reply.content}
                        id={reply._id}
                      />
                    ))}
                  </div>
                </>
              ))}
            {}
          </React.Fragment>
        </div>
        <InputComponet avatar={Avatar} purpose={"SEND"} />
      </main>
    </>
  );
};

export default HomePage;

/*
 <Comment
              avatar={Avatar}
              purpose={"comment"}
              username={"amyrosbe-son"}
              date={"1 month ago"}
              text={
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Estaccusamus nobis quisquam at iure neque consectetur dicta Nulla, dolore quisquam Lorem ipsum dolor sit, amet consectetur adipisicing elit. Estaccusamus nobis quisquam at iure neque consectetur dicta Nulla, dolore quisquam!"
              }
            />


*/
