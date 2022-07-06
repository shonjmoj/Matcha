import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Joi from "joi";
export interface RegistrationState {
  state: string | Joi.ValidationError;
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
