const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { register, login } = require("./utils");
require("dotenv").config();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/register", register);
app.post("/api/login", login);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
