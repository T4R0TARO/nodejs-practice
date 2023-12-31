### Under Development...

REGEX EMAIL VALIDATION
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

- Set up auth controller

```js
const User = require("../models/User");
const {StatusCodes} = require("http-status-codes");
const {BadRequestError} = require("../errors");

// REFACTORED hashed password into UserSchema
// const register = async (req, res) => {
// // hash password
// const {name, email, password} = req.body;
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(password, salt);
// const tempUser = {name, email, password: hashedPassword};
// const user = await User.create({...tempUser})
// res.status(StatusCodes.CREATED).json({user})
// }

// REFACTORED jwt into UserSchema
// const register = async (req, res) => {
// const user = await User.create({...req.body});
// // create and sign jwt
// const token = jwt.sign({userId: user._id, name: user.name}, "jwtSecret", {expiresIn:"30d"},)
// res.status(StatusCodes.CREATED).json({user : {name: user.name}, token})
// }

const register = async (req, res) => {
const user = await User.create({...req.body});
const token = user.createJWT()
res.status(StatusCodes.CREATED).json({user : {name: user.name}, token})
}

const login = async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    throw new BadRequestError("Please provide email and password")
  }
  const user = await User.findOne({email});
  if(!user){
    throw new UnauthenticatedError("Invalid Credentials...")
  }
  const isPasswordCorrect = await user.comparedPassword(password);
  if(!isPasswordCorrect){
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}

module.exports {
  register,
  login,
}
```

- Set up jobs controller

```js
const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

/* getAllJobs()
 * get all the jobs that are created by the associated user token
 * sort the all the jobs by the values `createdAt`
 */
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

/** getJob(): get single job obj by its job id from the associated user
 *  nested destructuring...
 *  get key `userId` and `jobId`
 *  findOne job obj with the `userID` and `jobId`
 *  Error Handler if not found by ID
 */
const getJob = async (req, res) => {
  // nested destructuring obj
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

/* createJob()
    * add key/value `createdBy` to the associated user token 
    * create new obj from Job Schema with the values of the user token 
    * OUTPUT:
    {
      company: 'cover',
      position: 'illustrator',
      createdBy: '6577c33f63bea646622b5b89'
    }
  */

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send("update job...");
};

const deleteJob = async (req, res) => {
  res.send("delete job...");
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

module.exports = router;
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
} = require("./controllers/auth");

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

// connect to DB
const connectDB = require("./db/connect");

// routes
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// errorHandlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("jobs api");
// });
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async (req, res) => {
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
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
    minlength: 3,
    maxlength: 15,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please proivde valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 6,
    maxlength: 15,
  },
});

// hash password
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// create and sign jwt
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
```

- ✨ middleware/authentication.js

```js
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid...");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
```

- JobSchema

```js
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {},
    position: {},
    status: {},
    createdBy: {},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
```

- Update controller createJob()

```js
// controllers
const createJob = async (req, res) => {
  // change the values of prop `createdBy` to equal user.userId
  req.body.createdBy = req.user.userId;
  // create `job` obj with the values of `req.body`
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
```
