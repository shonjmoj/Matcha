import { Document, Mongoose, ObjectId } from "mongoose";

export interface IProfile extends Document {
  _userId: ObjectId;
  age: number;
  gender: string;
  orientation: string;
  interested_in: string;
  bio: string;
  interests: Array<string>;
  age_range: number;
  images: Array<string>;
}
