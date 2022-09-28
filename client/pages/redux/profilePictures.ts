import { createSlice } from "@reduxjs/toolkit";

export type ProfilePictures = Array<string>;

const initialState: ProfilePictures = [];
const profilePicturesSlice = createSlice({
  name: "profilePictures",
  initialState,
  reducers: {
    addPicture: (state: ProfilePictures, action) => {
      state.push(action.payload);
    },
  },
});
export const { addPicture } = profilePicturesSlice.actions;
export default profilePicturesSlice.reducer;
