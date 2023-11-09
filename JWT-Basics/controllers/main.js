// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    // check for empty values throw custom error
    throw new CustomAPIError("Please provide email and password", 400);
  }

  // just for demo, normally provided by DB!!
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
  //   console.log(req.headers);
  const authHeader = req.headers.authorization;
  // console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];
  // console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401);
  }
};

module.exports = {
  login,
  dashboard,
};
