import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./RegistrationState";
import UserInterests from "./UserInterests";
import profilePictures from "./profilePictures";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    interests: UserInterests,
    profilePictures,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
