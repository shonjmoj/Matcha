const bcrypt = require("bcryptjs");
const userModel = require("./models/user");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  console.log(req.body);
  const {
    username,
    email,
    password: plainTextPassword,
    firstname,
    lastname,
  } = req.body;
  const password = await bcrypt.hashSync(plainTextPassword, 10);

  try {
    const response = await userModel.create({
      firstName: firstname,
      lastName: lastname,
      email,
      password,
      userName: username,
    });
  } catch (error) {
    if (error.code === "11000") {
      return res.json({
        status: "error",
        error: "username or email already in use",
      });
    }
  }
  res.json({ status: "ok" });
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
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );
    return res.json({ status: "ok", data: token });
  }
  res.json({ status: "error", error: "invalid email / password" });
};
module.exports = { register, login };
