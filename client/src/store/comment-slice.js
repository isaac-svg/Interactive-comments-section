import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PostsSlice from "./posts-slice";
const commentSlice = createSlice({
  name: "post",
  initialState: {
    comments: [],
  },
  reducers: {
    addReply(state, action) {
      const reply = action.payload;
      state.comments.push(reply);
    },
    editPost(state, action) {},
    deletePost(state, action) {},
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;
