import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserInterestsSlice = createSlice({
  name: "UserInterests",
  initialState: [],
  reducers: {
    setInterests: (data: string[], action: PayloadAction<string>) => {
      data = [...data, action.payload];
    },
  },
});

export const { setInterests } = UserInterestsSlice.actions;
export default UserInterestsSlice.reducer;
