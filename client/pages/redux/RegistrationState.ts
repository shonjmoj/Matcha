import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegistrationState {
  state: string;
}

const initialState: RegistrationState = {
  state: "pending",
};

export const registrationSlice = createSlice({
  name: "registrationState",
  initialState,
  reducers: {
    setMessage: (data: RegistrationState, action: PayloadAction<string>) => {
      data.state = action.payload;
    },
  },
});

export const { setMessage } = registrationSlice.actions;

export default registrationSlice.reducer;
