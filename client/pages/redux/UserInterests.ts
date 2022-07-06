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
  },
});

export const { setInterests } = UserInterestsSlice.actions;
export default UserInterestsSlice.reducer;
