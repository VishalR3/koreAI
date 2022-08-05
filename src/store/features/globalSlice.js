import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  selectedTemplate: -1,
  paths: [
    "./template1.png",
    "./template2.jpg",
    "./template3.png",
    "./template4.png",
    "./template5.png",
  ],
  posts: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    selectTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    createPost: (state, action) => {
      state.posts.push(action.payload);
      Cookies.set("posts", state.posts, { expires: 1 });
    },
    deletePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      Cookies.set("posts", state.posts, { expires: 1 });
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectTemplate, createPost, deletePost } = globalSlice.actions;

export default globalSlice.reducer;
