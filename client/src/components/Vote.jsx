import React, { useEffect, useState } from "react";
// styled from index.css
import upVote from "../assets/images/icon-plus.svg";
import downVote from "../assets/images/icon-minus.svg";
import { BASE_URL } from "../assets/URL";
const Vote = ({ vote, id }) => {
  const [voteCount, setVoteCount] = useState(vote);
  const increaseVote = () => {
    setVoteCount((prev) => (prev += 1));
    useEffect(() => {
      fetch(`${BASE_URL}/comment/upVote`, {
        method: "POST",
        credentials: "include",
        "Content-Type": "application/json",
        body: JSON.stringify(id),
      });
    }, [voteCount]);
  };
  const decreaseVote = () => {
    setVoteCount((prev) => (prev -= 1));
    useEffect(() => {
      fetch(`${BASE_URL}/comment/downVote`, {
        method: "POST",
        credentials: "include",
        "Content-Type": "application/json",
        body: JSON.stringify(id),
      });
    }, [voteCount]);
  };
  return (
    <div className="vote">
      <div className="voteWrapper">
        <img src={upVote} alt="upVote" onClick={() => increaseVote()} />
        <span className="count">{voteCount}</span>
        <img src={downVote} alt="downVote" onClick={() => decreaseVote()} />
      </div>
    </div>
  );
};

export default Vote;
