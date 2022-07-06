import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./RegistrationState";
import UserInterests from "./UserInterests";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    interests: UserInterests,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
