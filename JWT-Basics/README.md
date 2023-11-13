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

### REFACTOR dashboard

- REFACTOR DASHBOARD TO DYNAMICALLY DECODE TOKEN
- In the `dashboard()`, we have a feature that access our headers.authorization
- `authHead4er` header.authorization holds the value of your encrypted token data string
- we then have a try/catch that decodes the token with the encrypted data or throws a custom error 401
- Move this feature to a seperate middleware function `authenticationMiddleware()` in auth.js
- `dashboard()` is refactored and simplified to only have a RNG generator and a success response status 200
- The success status 200 will display the RNG number and display the the username value
  How will we access the username value when we moved the encrpted token data to the function `authenticationMiddleware()`?

```js
// controllers/main.js REFACTORED
const dashboard = async (req, res) => {
  /* Move to ➡ authenticationMiddleware()
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomAPIError("No token provided", 401);
    }
    const token = authHeader.split(" ")[1];
  */

  /* Move to ➡ authenticationMiddleware()
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new CustomAPIError("Not authorized to acess this route", 401);
    }
  */

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
```

### create authenticationMiddleware

- Create authenticationMiddleware to dynamically decode token
- Move the features from `dashboard()` to `authenticationMiddleware()`
- We want to add `next()` as a param so that if the function is successful we will run the next function `dashboard()` next
- Once we check if headers.authroization has a proper value we will decode the token in our try/catch or throw an error
- We will also deconstruct the data from the decoded token `id` and `username`
- And `req.user` to hold the values of `id` and `username` so that we can request theses values in the `dashboard()`
- So when we run the success status 200 we can access the `req.user.username` to display the username value from the token

So now I need this `authenticationMiddle()` to run first and if the token is successfull decoded run the `next()` function `dashboard()`.

```js
// middleware/auth.js
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // destructure token values
    const { id, username } = decoded;
    // set req.user values
    req.user = { id, username };
    next(); // run dashboard()
  } catch (error) {
    throw new CustomAPIError("Not authorized to acess this route", 401);
  }
};

module.exports = authenticationMiddleware;
```

### Set authMiddleware in route /dashboard

- Import authMiddleware
- Set authMiddleware in route "/dashboard"
- authMiddleware will run before dashboard and if succesful
- run dashboard else run Error

```js
// /routes/main.js
const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

// import authMiddleware
const authMiddleware = require("../middleware/auth");

// when accessing route /dashboard
// run authMiddleware, next()
// run dashboard
// OR run ERROR
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);
```

### REFACTOR error handlers

We have a custom error class that creates custom error object that displays an error message and a status code

```js
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomAPIError;
```

- We can refactor this code so that we have a more implicity custom error handling.
- For example instead of writing status code 400, We can throw a BadRequestError with a message so the user knows its a bad request
- We wil create new error handlers classes that are more implicity by name
- apply the npm package `http-status-codes` to use the name of the status code instead of the number
- then we will refactor our existing code to uses the new error handlers

In /errors create files for new error handlers

- badrequest.js -> bad request error handler
- unauthenticated.js -> unauthenticated error handler
- index.js - export error handlers

Exports the error handlers in one file
Because we have multiple custom error files we can allocate all the errors into one index.js file and export the file so we can access the custom errors in one place.

```js
// /errors/index.js

const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
```

Refactor CustomAPIError

- Removed `this.statusCode = statusCode` from the class CustomAPIError
- We will be using `http-status-code` for more specified errors
- We can still use class CustomAPIError for custom error messages

```js
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;
```

Refactor error-handler.js

```js
const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("https-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong try again later");
};

module.exports = errorHandleMiddleware;
```

Create BadRequest class

- Implement `StatusCode` in the class

```js
const CustomAPIError = require("./custom-error");
const { StatusCode } = require("http-status-codes");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = 400;
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}
```

Create UnauthenticatedError

- Implement `StatusCode` in the class

```js
const CustomAPIError = require("./custom-error");
const { StatusCode } = require("http-status-codes");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
```

Now that we have new error handlers that are more implicit. We can refactor our existing code and implement these new error handlers.

- Refactor auth.js error handlers
- Refactor /controllers.main.js error handlers
- Refactor /middleware/error-handlers
- Import `UnauthenticatedError` and Refactor to use class UnauthenticatedError

```js
// auth.js

const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
```

Refactor and implement BadRequestError object

```js
// controllers/main.js

const jwt = require(jsonwebtoken);
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password){
    throw new BadRequestError("Please provide email and password")
  }

  const id = new Date().getDate();

  const tokem = jwt.sign({id, username}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
  res.status(200).json({msg: "user created", token})
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
  })

}

module.exports {
  login,
  dashboard,
}
```
