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
      console.log(state.posts.length, "from redux store");
    },

    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});
export const postsActions = PostsSlice.actions;

export default PostsSlice;
