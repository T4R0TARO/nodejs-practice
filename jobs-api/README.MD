### Under Development...

REGEX EMAIL VALIDATION
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

- Set up auth controller

```js
const User = require("./models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcrypths");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  /* hash a password
   * generate random byts `bcrypt.genSalt(10)`
   * hash password `bcrypt.hash(password, salt)`
   * createa tempUser that inlcudes the hashedPassword
   * Create new User obj with the values of the tempUser
   * Now we should have a new user obj created with the values of the schema and an hashed password
   ** REFACTOR and move feature to middleware in UserSchema
   */

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashedPassword };
  // const user = await User.create({ ...tempUser });

  /** implement jsonwebtokens w/ the UserSchema
   *  create a token that and sign
   *  token should have...
   *  user id
   *  user name
   *  process.env.JWT_SECRET but for now "jwtSecret"
   *  option expireIn: "30d"
   *  json({ user: {name: user.name}, token})
   *  BUT we can clean up the code and move this feature to the UserSchema
   * So when we create a new User it will also include the include this feature
   */

  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userID: user._id, name: user.name }, "jwtSecret", {
    expiresIn: "30d",
  });

  // res.status(StatusCodes.CREATED).json(user);
  res.status(StatusCodes.CREATED).json({ user: { name: user.name } }, token);
};

const login = async (req, res) => {
  res.send("login testing...");
};

module.exports = {
  register,
  login,
};
```

- Set up jobs controller

```js
const getAllJobs = async (req, res) => {
  res.send("get all jobs...");
};

const getJob = async (req, res) => {
  res.send("get job...");
};

const createJob = async (req, res) => {
  res.send("create job...");
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

// why post? we want to `post` data to the db
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
} = require("./controllers/jobs");

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
// Error Handlers
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// Routes
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// app.get("/", (req, res) => {
//     res.send("jobs api...")
// })

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      await connectDB = process.env.MONGO_URI;
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()
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
      "Please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: 6,
    // maxlength: 13,
  },
});

/*
  UserSchema.pre("save", async function(){
      // hash password
  })
*/

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/* We can move the jwt feature to the UserSchema
 * using the `Schema.methods()` helper
 * we can name it `createJWT`
 * we will call `createJWT` when we create a token
 * `createJWT` should  sign the token
 *  have userID
 *  have name
 *  process.env.JWT_SECRET but for now "jwtSecret"
 *  options expiresIn: "30d"
 */

module.exports = mongoose.model("User", UserSchema);
```
