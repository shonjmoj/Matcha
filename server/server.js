import express from "express";
import cors from "cors";
import cookies from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { register, login } from "./controllers/UserController.js";
import {
  resendConfirmation,
  confirmEmail,
} from "./controllers/confirmEmailController.js";
import { profileSetup } from "./controllers/profileSetup.js";
import { upload, uploadImage } from "./controllers/uploadImage.js";
const PORT = process.env.PORT || 3003;
const app = express();
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookies());
const connect = mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/confirmation/:email/:token", confirmEmail);
app.post("/api/resendconfirmation", resendConfirmation);
app.post("/api/profilesetup", profileSetup);
app.post("/api/uploadimg", upload.single("profilePhoto"), uploadImage);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
export { connect };
