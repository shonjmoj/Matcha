import { ReactNode } from "react";

export type LoginData = {
  email: String;
  password: String;
};
export type RegistrationData = {
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  repeat_password: String;
};
export type ProfileData = {
  age: Number;
  gender: String;
  orientation: String;
  interested_in: String;
  bio: String;
};
export type ResendData = {
  email: String;
};
export type ModalProps = {
  title: String;
  content: String;
};
export type LayoutProps = {
  children: ReactNode;
};
