import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json("user not authorized");

  const authToken = token.split(" ")[1];

  try {
    const isValid = jwt.verify(authToken, process.env.JWT_SECRET);

    if (isValid) next();
  } catch (error: any) {
    return res.json("unauthorized");
  }
};
export { checkAuth };
