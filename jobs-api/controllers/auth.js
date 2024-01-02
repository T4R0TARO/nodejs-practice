const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
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
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
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
