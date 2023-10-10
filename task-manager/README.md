# Task Manager Backend Server

- Create a backend server that can store and display data from the frontend of our Task Manager App
- Create, Remove, Update, and Destroy Items from it's database
- Create API data JSON that can be used to display to the frontend
- Route URL paths to specific items from the API JSON data
- Custom Error Handling / 404 Not Found response

# Task Manager Backend Setup

1. Setup npm & npm packages/ dependencies

- express
- mongoose
- dotenv : hide sensitive data

2. Setup simple server w/ Express
   - assign port and listen to port
   - set tester route
3. Setup the Router and middleware w/ Express for our Controllers
   -express.Router()
   -route()
   - REST API HTTP METHODS: GET, POST, PATCH/PUT, DELETE
4. Setup the Controllers that will Create, Remove, Update, and Destroy Items in our app/database
   -getAllItems()
   -createItem()
   -getItem()
   -updateItem()
   -removeItem()

### Postman

- Allows up to test our API data without the need of a frontend
- We can test our controllers and routes w/ GET, POST, PATCH/PUT, DELETE

### MongoDB

- No SQL, Non Relational DB
- Store JSON data

5. MongoDB Setup
   - Connect your application: MongoDB provides a connection string w/password and name of database required
   - Create Database name and Collection name in MongoDB for your application

### Mongoose

- Object modeling for data node.js
- We can create Schema of a object / They are like blueprints on how to format our objects

6. Mongoose Setup

   - Connect mongoose to MongoDB using the connection string
   - The connection string has sensitive data use `dotenv` to hide the data in an .env when connecting

7. Create task Schema that will be used for object modeling for our data and import to our controllers

   - The object Schema willl be used in our controller to model the items that we are Getting, Creating, Deleting...etc
   - We can setup the requirments for the Schema model and if NOT send a custom error msg
   - find()
   - create()
   - findOne()
   - findOneAndUpdate()
   - findOneAndDelete()
   - 200 Success
   - 500 Error
   - 404 Not Found

8. Refactor Controllers to async f() w/ error handling w/ try/catch
9. Add middleware /w express to use display the static file of the frontend by moving them to the ./public folder
   - app.use(express.static('./public))
10. We can create custom error handling w/ middleware and Refactor our code
    - notFound:404
    - errorHandlingMiddleware: errorHandling refactor
    - asyncWrapper: controllers refactor
