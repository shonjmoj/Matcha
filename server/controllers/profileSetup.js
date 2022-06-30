require("dotenv").config();
const profile_model = require("../models/profile");

const profileSetup = async (req, res) => {
  const profile = new profile_model({});
};
