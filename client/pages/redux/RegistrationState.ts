import { createSlice } from "@reduxjs/toolkit";

export interface RegistrationState {
  state: "pending" | "success" | "inUSe" | "techIssue";
}

const initialState: RegistrationState = {
  state: "pending",
};

export const registrationSlice = createSlice({
  name: "registrationState",
  initialState,
  reducers: {
    setMessage: (data: RegistrationState, action) => {
      data.state = action.payload;
    },
  },
});

export const { setMessage } = registrationSlice.actions;

export default registrationSlice.reducer;
