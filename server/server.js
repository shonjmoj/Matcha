const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { register, login, logoutUser } = require("./controllers/UserController");
const {
  confirmEmail,
  resendConfirmation,
} = require("./controllers/confirmEmailController");
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/register", register);
app.post("/api/login", login);
app.get("/confirmation/:email/:token", confirmEmail);
app.post("/api/resendconfirmation", resendConfirmation);
app.get("/logout", logoutUser);
app.post("/api/profilesetup", profileSetup);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
