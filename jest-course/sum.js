function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input...");
  }
}

//takes a function `callback` as a param and returns "wah"
function fetchData(callback) {
  setTimeout(() => {
    callback("wah");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("wah"), 1000);
  });
}

module.exports = {
  sum,
  myFunction,
  fetchData,
  fetchPromise,
};
