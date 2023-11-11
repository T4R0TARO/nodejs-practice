// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
// const CustomAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    // check for empty values throw custom error
    // throw new CustomAPIError("Please provide email and password", 400);
    throw new BadRequestError("Please provide email and password");
  }

  // just for demo, normally provided by DB!!
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value for JWT_SECRET!!!
  // create a encrypted token with payload of username and id
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

/* ! REFACTORED
  const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomAPIError("No token provided", 401);
    }
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const luckyNumber = Math.floor(Math.random() * 100);
      res.status(200).json({
        msg: `Hello, ${decoded.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      });
    } catch (error) {
      throw new CustomAPIError("Not authorized to acess this route", 401);
    }
  };
*/

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
