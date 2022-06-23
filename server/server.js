const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.URI);

app.get("/", (req, res) => {
  res.send("thanks");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
