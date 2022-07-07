import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InterestsState = string[];

const initialState: InterestsState = [];

export const UserInterestsSlice = createSlice({
  name: "UserInterests",
  initialState,
  reducers: {
    setInterests: (data: InterestsState, action: PayloadAction<string>) => {
      data.push(action.payload);
    },
    unsetInterests: (data: InterestsState, action: PayloadAction<string>) => {
      let index = data.indexOf(action.payload);
      data.splice(index, 1);
    },
  },
});

export const { setInterests, unsetInterests } = UserInterestsSlice.actions;
export default UserInterestsSlice.reducer;
