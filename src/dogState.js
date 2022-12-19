import { createSlice } from "@reduxjs/toolkit";

export const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    dogs: [],
    isLoading: false,
  },
  reducers: {
    getDogsFetch: (state) => {
      state.isLoading = true;
    },
    getDogsSuccess: (state, action) => {
      state.dogs = action.payload;
      state.isLoading = false;
    },
    getDogsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getDogsFetch, getDogsSuccess, getDogsFailure } =
  dogsSlice.actions;

export default dogsSlice.reducer;
