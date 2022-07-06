const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserSchema",
    },
    age: Number,
    gender: String,
    orientation: String,
    interested_in: String,
    bio: String,
    interests: [String],
    age_range: { type: Number, default: 18 },
  },
  { collection: "user_profile" }
);

const profile_model = mongoose.model("ProfileSchema", ProfileSchema);

module.exports = profile_model;
