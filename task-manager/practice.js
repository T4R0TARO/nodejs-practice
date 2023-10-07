class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const error = new CustomAPIError(`The route was not found`, 404);

console.log(error);
