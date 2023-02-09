import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PostsSlice from "./posts-slice";
const commentSlice = createSlice({
  name: "post",
  initialState: {
    repliesArr: [],
    avatar: "",
    text: "",
    purpose: "",
    username: "",
    date: "",
    id: "",
    isReplying: false,
  },
  reducers: {
    addReply(state, action) {
      const { addReplyToComment } = PostsSlice.actions;
      console.log(addReplyToComment);
      addReplyToComment(action.payload);
      console.log("object");
    },
    editPost(state, action) {},
    deletePost(state, action) {},
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;
