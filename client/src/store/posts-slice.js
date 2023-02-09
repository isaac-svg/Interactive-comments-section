import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state, action) {
      const newPost = { ...action.payload };
      state.posts.push(newPost);
      console.log(state.posts.length);
    },
    addReplyToComment(state, action) {
      console.log("log from addReplyToComment");
      const specificPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      console.log(specificPost);
      specificPost.replied.push(action.payload);
      console.log("Reply added");
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});
export const postsActions = PostsSlice.actions;

export default PostsSlice;
