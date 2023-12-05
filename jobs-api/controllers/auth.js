const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // REFACTOR TO MIDDLEWARE
  // const { name, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10); // random byts
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };
  // const user = await User.create({ ...tempUser });

  const user = await User.create({ ...req.body });

  // const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
  //   expiresIn: "30d",
  // });

  // res.status(StatusCodes.CREATED).json({ user });

  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    // .json({ user: { name: user.getName() }, token });
    .json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  // get values for `email` and `password`
  const { email, password } = req.body;

  // if `email` OF `password` do NOT have values throw Error
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // find user w/ `findOne()` with the value `email`
  const user = await User.findOne({ email });

  // if `user` does not have a value throw Error
  // compare password
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // create token from user
  const token = user.createJWT();
  // if NO errors throw success status code and read JSON obj  user w/ token
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
