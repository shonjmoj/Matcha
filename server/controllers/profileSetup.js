require("dotenv").config();
const jwt = require("jsonwebtoken");
const profile_model = require("../models/profile");
const { userModel } = require("../models/user");

const profileSetup = async (req, res) => {
  const { age, gender, orientation, interested_in, bio } = req.body;
  const token = req.cookies["x-access-token"];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = decoded;
    userModel.findOne({ email }, async (err, user) => {
      if (!user) {
        return res.status(401).send({
          msg: "We were unable to find a user with this email",
        });
      }
      profile_model.findOne({ _userId: id }, async (err, profile) => {
        if (profile)
          return res
            .status(200)
            .json({ msg: "a user with this id already set his profile" });
        await profile_model.create(
          {
            _userId: id,
            age,
            gender,
            orientation,
            interested_in,
            bio,
          },
          (response, err) => {
            if (response) console.log(response);
          }
        );
        user.isCompleted = true;
        user.save(function (err) {
          if (err) console.log(err);
        });
      });
    });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = profileSetup;
