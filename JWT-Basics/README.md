### Project Setup

### 1. Setup Files & Folders

- app.js --> import middle and setup simple server
- .env --> store sensitive data
- .gitignore --> files to ignore
- /routes --> main.js --> set http routes (http/api/v1/login)
- /public --> front-end files (html,css,js)
- /db --> connect to database
- /middleware --> middleware function
- /errors --> custom error object
- /controllers --> controllers (get,post,patch,delete,)

### 2. Setup /controllers

- create tester controller function to connect to the /routes
- we will implement more features later

```js
const login = async (req, res) => {
  res.status(200).json({ msg: "Fake Login/Register/Signup Route" });
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: "Dashboard response testing" });
};

module.exports = {
  login,
  dashboard,
};
```

### 3. Setup /routes

- set routes for login controller which will be a `post` request because we wil be posting the data, username and password
- set routes for dashboard controller which will be a `get` request because we will be getting the lucky number data from the token assigned to the username and password

```js
const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
```

### 4. Import router to app.js

```js
const express = require("express");
const app = express();

// TODO: import mainRouter from ./routes
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// TODO: use mainRouter on http
app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
```

### 5. login & dashboard features

- check username, password values in post (login) request
- create custom error if username or password dont exists
- if both username and password values exist / create new JWT
- send back to front-end
- setup authentication so only the request with JWT can access the dashboard

```js
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error"); //import custom error object

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    // check for empty values throw custom error
    throw new CustomAPIError("Please provide email and password", 400);
  }

  // DEMO, normally provided by DB
  const id = new Date().getDate();

  //  create token
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: "testing dashboard..." });
};
```

### 6. Set Up authentication

- setup authentication so only the request with JWT can access the dashboard
- setup custom error if authHeader holds no value
- decode token and display desired values

```js
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error"); //import custom error object

const login = async (req, res) => {
  // Code...
};

const dashboard = async (req, res) => {
  //  Look/Add for authorization in headers
  const authHeader = req.headers.authorization;

  // if no value / throw custom error
  if (!authHeader || !authHeader.startWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  // ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."]
  const token = authHeader.split(" ")[1];

  try {
    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401);
  }
};
```
