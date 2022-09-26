import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "users" }
);

const TokenSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserSchema",
  },
  token: { type: String, required: true },
  expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } },
});

const userModel = mongoose.model("UserSchema", UserSchema);
const tokenModel = mongoose.model("TokenModel", TokenSchema);
export { userModel, tokenModel };
