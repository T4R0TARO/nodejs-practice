### Under Development...

REGEX EMAIL VALIDATION
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

- Set up auth controller

```js
const User = require("./models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtokens");

const register = async (req, res) => {
  //   res.send("register testing...");

  // hash password // REFACTORED // moved to UserSchema
  // const { name, email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };
  // const user = await User.create({ ...tempUser });

  const user = await User.create({ ...req.body });
  // sign token // REFACTORED // moved to UserSchema
  // const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
  //   expiresId: "30d",
  // });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name, token } });
};

const login = async (req, res) => {
  // res.send("login testing...");
  /*
   * get values for `email` and `password`
   * if `email` OF `password` do NOT have values throw Error
   * find user w/ `findOne()` with the value `email`
   * if `user` does not have a value Error throw Error
   * create user token
   * response success status code of user object and token
   */

  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // ✨ compare password else throw Error
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name, token } });
};

module.exports = {
  register,
  login,
};
```

- Set up jobs controller

```js
const getAllJobs = (req, res) => {
  res.send("get all jobs...");
};

const getJob = (req, res) => {
  res.send("get job...");
};

const createJob = (req, res) => {
  res.send("create job...");
};

const updateJob = (req, res) => {
  res.send("update job...");
};

const deleteJob = (req, res) => {
  res.send("deleteJob...");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
```

- Set up auth routes

```js
const express = require("express");
const router = express.Router();

const { register, login } = require("./controllers/auth");

router.post("/register", register);
router.post("/login", login);

moudle.exports = router;
```

- Set up jobs routes

```js
const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("./controller/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
```

- import routes in app.js

```js
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// connectDB
const connectDB = require("./db/connect");

// routes
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("...jobs api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
```

- define User schema
- hash password
- jwt

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true;
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 5,
    maxlength: 12,
  },
});

UserSchema.pre("save", async function (){
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypy.hash(this.password, salt)
})

UserSchema.methods.createJWT = async funciton (){
  // REFACTORED
  // return jwt.sign({userId: this._id, name: this.name}, "jwtSecret", {expiresId: "30d"})

  return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME,})
}

//✨ comparePassword method
// compare passwords to check for match
//  bycrypt.compare() user.password with this.password
UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch
}

module.exports = mongoose.model("User", UserSchema);
```

- ✨ middleware/authentication.js

```js
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors");

/* auth middleware
 * init header.authroization
 * if header.authorization has no value throw error
 * create token from authHeader string
 * verify payload token
 * request user data `id` and `name`
 * else throw error
 */

const auth = async (req, res, next) => {
  const authHeader = req.header.authorization;
  if (!authHeader || !authHeader.startsWith(" Bearer")) {
    throw new UnauthenticatedError("Authentication invalid...");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid...");
  }
};

module.exports = auth;
```
