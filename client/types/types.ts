import { MouseEventHandler, ReactNode } from "react";

export interface ResendData {
  email: String;
}
export interface LoginData extends ResendData {
  password: String;
}
export interface RegistrationData {
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  repeat_password: String;
}
export interface ProfileData {
  age: Number;
  gender: String;
  orientation: String;
  interested_in: String;
  bio: String;
  interests: String[];
}

export interface ModalProps {
  title: String;
  content: String;
}
export interface LayoutProps {
  children: ReactNode;
}
export interface BtnProps {
  title: string;
  disabled: boolean;
  onClick: (event: MouseEventHandler) => void;
}
