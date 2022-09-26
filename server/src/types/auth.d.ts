import { JwtPayload } from "jsonwebtoken";
import mongoose, { Document } from "mongoose";

export interface ResponseError {
  status: "error";
  message: string;
}
export interface IToken {
  _userId: mongoose.Schema.Types.ObjectId;
  token: string;
  expireAt: mongoose.Schema.Types.Date;
}
export interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isVerified: boolean;
  isCompleted: boolean;
  createdAt: mongoose.Schema.Types.Date;
  __v: number;
}
interface UserPayload extends JwtPayload {
  id: string;
  email: string;
}
