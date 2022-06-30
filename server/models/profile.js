const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserSchema",
    },
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    orientation: String,
    interested_in: String,
    interests: [{ type: String }],
    bio: String,
    profile_picture: String,
    pictures: [{ type: String }],
  },
  { collection: "user_profile" }
);

const profile_model = mongoose.model("ProfileSchema", ProfileSchema);

module.exports = profile_model;
