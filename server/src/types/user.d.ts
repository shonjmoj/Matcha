import { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";

export interface JwtData extends JwtPayload {
  id: mongoose.Types.ObjectId;
  email: string;
}
