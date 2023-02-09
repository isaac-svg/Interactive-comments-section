import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showForm: false,
  },
  reducers: {
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
