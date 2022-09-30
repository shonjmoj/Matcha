import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IProfile } from "profile";
import { profile_model } from "../models/profile";
const uploadPictures = async (req: Request, res: Response) => {
  const { pictures } = req.body;

  if (pictures.length < 2)
    return res.send("you should at least upload a picture");
  const token = req.headers["authorization"].split(" ")[1];
  const decoded = jwt.decode(token);
  const { id } = decoded as JwtPayload;

  const profile: IProfile = await profile_model.findOne({ _userId: id });
  if (!profile)
    return res
      .status(404)
      .send("profile not found go to the first step to add a profile");
  profile.images = pictures;
  await profile.save();
  res.status(200).send("images uploaded");
};
export default uploadPictures;
