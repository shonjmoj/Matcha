const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    sex_pref: String,
    interests: [{ type: String }],
    bio: String,
  },
  { collection: "user_profile" }
);

const profile_model = mongoose.model("ProfileSchema", ProfileSchema);

module.exports = profile_model;
