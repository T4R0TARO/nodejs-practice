### Under Development...

REGEX EMAIL VALIDATION
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

- Set up auth controller

```js
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  res.send("login testing...");
};

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
  //   res.send("register testing...");
};

module.exports = { login, register };
```

- Set up jobs controller

```js
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};

const getJob = async (req, res) => {
  res.send("get job");
};

const createJob = async (req, res) => {
  res.send("create job");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
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

const { login, register } = require("../controllers/auth");

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
} = require("../controllers/auth");

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
const connectDB = require("../db/connect");

// middleware
const notFoundMiddleware = require("../middleware/not-found");
const errorHandlerMiddleware = require("../middleware/error-handler");

// routes
const authRouter = require("../routes/auth");
const jobsRouter = require("../routes/jobs");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use("/", (req, res) => {
  res.send("jobs api...");
});

app.use(notFoundMiddleware);
app.use(errorHanlderMiddlerware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
```

- define User schema

```js
const mongoose = require("mongoose");

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
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = mongoose.model("User", UserSchema);
```
