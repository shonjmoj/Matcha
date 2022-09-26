import jwt, { JwtPayload } from "jsonwebtoken";
import { profile_model } from "../models/profile";
import { userModel } from "../models/user";
import dotnev from "dotenv";
import { Request, Response } from "express";
import { Error } from "mongoose";
import { IUser } from "auth";
import { IProfile } from "profile";
dotnev.config();
const profileSetup = async (req: Request, res: Response) => {
  const { age, gender, orientation, interested_in, bio, interests } = req.body;
  const token = req.cookies["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = decoded as JwtPayload;
    userModel.findOne({ email }, async (err: Error, user: IUser) => {
      if (!user) {
        return res.status(401).send({
          msg: "We were unable to find a user with this email",
        });
      }
      profile_model.findOne(
        { _userId: id },
        async (err: Error, profile: IProfile) => {
          if (profile)
            return res
              .status(406)
              .json({ msg: "a user with this id already set his profile" });
          await profile_model.create(
            {
              _userId: id,
              age,
              gender,
              orientation,
              interested_in,
              bio,
              interests,
            },
            (err) => {
              if (err) console.log(err);
            }
          );
          user.isCompleted = true;
          user.save(function (err) {
            if (err) console.log(err);
          });
        }
      );
    });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

export { profileSetup };
