// Async Function Declaration
const myAsyncFunction = async () => {
  // code here...
};

// await promises
// const fetchData = async () => {
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   return data;
// }

// error handling
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

/** Callbacks
 *  pass a callback function as an argument to an async function
 *  and that callback function gets called when the operation is compelte `setTimeout()`
 */
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "Async data";
//     callback(data);
//   }, 1000);
// }

// fetchData((result) => {
//   console.log(result);
// });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Async data";
//       resolve(data);
//     }, 1000);
//   });
// }

// fetchData().then((result) => {
//   console.log(result);
// });

// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Async data";
//       resolve(data);
//     }, 3000);
//   });
// }

// async function fetchDataAndLog() {
//   console.log("hmu");
//   const result = await fetchData();
//   console.log(result);
// }

// fetchDataAndLog();

// const myPromise = new Promise((resolve, reject) => {
//   // Do something asynchronous
//   // If successful, call resolve with the result
//   // If there's an error, call reject with the error
// });

// myPromise
//   .then((result) => {
//     // Do something successful result
//     console.log(result);
//   })
//   .catch((error) => {
//     // Handle the error if the promise is rejected
//     console.error(error);
//   });

//   fetchData()
//     .then((data) => processData(data))
//     .then((processedData) => displayData(processedData))
//     .catch((error) => handlerError(error))
