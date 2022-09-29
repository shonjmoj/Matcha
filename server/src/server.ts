import express from "express";
import cors from "cors";
import cookies from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { register, login } from "./controllers/UserController";
import {
  resendConfirmation,
  confirmEmail,
} from "./controllers/confirmEmailController";
import { profileSetup } from "./controllers/profileSetup";
import { checkAuth } from "./middleware/auth";
const PORT = process.env.PORT || 3003;
const app = express();
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookies());
const connect = mongoose.connect(process.env.URI);
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/confirmation/:email/:token", confirmEmail);
app.post("/api/resendconfirmation", resendConfirmation);
app.post("/api/profilesetup", profileSetup);
app.post("/api/uploadpictures", checkAuth, (req, res) => res.send("testing"));
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
export { connect };
