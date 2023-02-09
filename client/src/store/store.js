import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comment-slice";
import PostsSlice from "./posts-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
    posts: PostsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;

// mongodb+srv://<username>:<password>@interactive-commnets-se.okfdtev.mongodb.net/?retryWrites=true&w=majority
//
// mongodb+srv://isaacsvg:<password>@interactivesection.bkqjee8.mongodb.net/?retryWrites=true&w=majority
