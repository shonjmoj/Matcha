import { IUser } from "auth";
import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IProfile } from "profile";
import { userModel } from "../models/user";
import { profile_model } from "../models/profile";
const uploadPictures = async (req: Request, res: Response) => {
  const { pictures } = req.body;
  if (pictures.length < 2)
    return res.json({
      type: "IMG_LESS",
      msg: "you should at least upload 2 pictures",
    });
  const token = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.decode(token);
  const { id } = decoded as JwtPayload;

  const profile: IProfile = await profile_model.findOne({ _userId: id });

  if (!profile)
    return res.status(404).json({
      type: "PROFILE_NOTFOUND",
      msg: "profile not found go to the first step to add a profile",
    });
  profile.images = pictures;
  await profile.save();
  const user: IUser = await userModel.findOne({ id: id });
  user.imagesUploaded = true;
  await user.save();
  res
    .status(200)
    .json({ type: "UPLOADED", msg: "images uploaded successfully" });
};
export default uploadPictures;
