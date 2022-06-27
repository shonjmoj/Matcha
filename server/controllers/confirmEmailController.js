const { userModel, tokenModel } = require("../models/user");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
const confirmEmail = async (req, res) => {
  tokenModel.findOne({ token: req.params.token }, function (err, token) {
    if (!token) {
      return res.status(400).send({
        msg: "Your verification link may have expired. Please click on resend for verify your Email.",
      });
    } else {
      userModel.findOne(
        { _id: token._userId, email: req.params.email },
        function (err, user) {
          if (!user) {
            return res.status(401).send({
              msg: "We were unable to find a user for this verification. Please SignUp!",
            });
          } else if (user.isVerified) {
            return res
              .status(200)
              .send("User has been already verified. Please Login");
          } else {
            user.isVerified = true;
            user.save(function (err) {
              if (err) {
                res.status(200).send({ msg: err.message });
              } else {
                return res
                  .status(200)
                  .send("Your account has been successfully verified");
              }
            });
          }
        }
      );
    }
  });
};
const resendConfirmation = async (req, res) => {
  userModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res
        .status(400)
        .send(
          "We were unable to find a user with that email. Make sure your Email is correct!"
        );
    } else if (user && user.isVerified) {
      return res.status(200).send("a user with this email is already verified");
    } else {
      const token = new tokenModel({
        _userId: user._id,
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
          to: user.email,
          subject: "Account Verification Link",
          text:
            "Hello " +
            req.body.username +
            ",\n\n" +
            "Please verify your account by clicking the link: \nhttp://" +
            req.headers.host +
            "/confirmation/" +
            user.email +
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
                user.email +
                ". It will be expire after one day. If you not get verification Email click on resend token."
            );
        });
      });
    }
  });
};
module.exports = { resendConfirmation, confirmEmail };
