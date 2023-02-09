import React from "react";
// styled from index.css
import upVote from "../assets/images/icon-plus.svg";
import downVote from "../assets/images/icon-minus.svg";
const Vote = ({ vote }) => {
  return (
    <div className="vote">
      <div className="voteWrapper">
        <img src={upVote} alt="upVote" />
        <span className="count">{vote}</span>
        <img src={downVote} alt="downVote" />
      </div>
    </div>
  );
};

export default Vote;
