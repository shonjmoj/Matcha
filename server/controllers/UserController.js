const bcrypt = require("bcryptjs");
const { userModel, tokenModel } = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
const register = async (req, res) => {
  const {
    username,
    email,
    password: plainTextPassword,
    firstname,
    lastname,
  } = req.body;
  const password = await bcrypt.hashSync(plainTextPassword, 10);

  try {
    await userModel.create(
      {
        firstName: firstname,
        lastName: lastname,
        email,
        password,
        userName: username,
      },
      (err, response) => {
        if (!response) {
          return res.status(409).json({
            status: 409,
            error: "username or email already in use",
          });
        }
        const token = new tokenModel({
          _userId: response._id,
          token: crypto.randomBytes(16).toString("hex"),
        });
        token.save(function (err) {
          if (err) return res.status(500).send({ msg: err.message });
          const transporter = nodemailer.createTransport({
            service: "Sendgrid",
            auth: {
              user: process.env.SENDGRID_EMAIL,
              pass: process.env.SENDGRID_PASS,
            },
          });
          const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: response.email,
            subject: "Account Verification Link",
            text:
              "Hello " +
              req.body.username +
              ",\n\n" +
              "Please verify your account by clicking the link: \nhttp://" +
              req.headers.host +
              "/confirmation/" +
              response.email +
              "/" +
              token.token +
              "\n\nThank You!\n",
          };
          transporter.sendMail(mailOptions, function (err) {
            if (err) {
              return res.status(500).send({
                msg: "Technical Issue!, Please click on resend for verify your Email.",
              });
            }
            return res
              .status(200)
              .send(
                "A verification email has been sent to " +
                  response.email +
                  ". It will be expire after one day. If you not get verification Email click on resend token."
              );
          });
        });
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        status: "error",
        error: "username or email already in use",
      });
    }
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).lean();

  if (!user) {
    return res.json({
      status: "error",
      error: "user doesn't exist",
    });
  }
  if (await bcrypt.compare(password, user.password)) {
    if (!user.isVerified) {
      return res
        .status(401)
        .json({ status: "error", error: "your account has not been verified" });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    return res.json({
      status: "ok",
      data: token,
      message: "User successfully Logged In",
    });
  }
  res.json({ status: "error", error: "invalid email / password" });
};

module.exports = { register, login };
