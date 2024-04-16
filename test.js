/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/
// Frequency Counter
function same(arr1, arr2) {
  // what if `arr1` is NOT the same length as `arr2`... return false
  if (arr1.length !== arr2.length) return false;
  // can i assume that the inputs are always array of integers? yes
  // create obj1 `frequencyCounter1`
  let frequencyCounter1 = {};
  // create obj2 `frequencyCounter2`
  let frequencyCounter2 = {};
  // populate `frequencyCounter1` w/ arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // populate `frequencyCounter2` w/ arr2
  for (let val of arr2) {
    frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : (frequencyCounter2[val] = 1);
  }
  // loop through `frequencyCounter1` keys
  for (let key in frequencyCounter1) {
    // if `key` ** 2 is NOT in `frequencyCounter2`... return false
    if (!(key ** 2) in frequencyCounter2) return false;
    // if value of `frequencyCounter2` is NOT the same as `frequencyCounter1`... return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4])); // false
console.log(same([1, 2, 3], [1, 4, 4])); // false
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 4, 2, 3, 3], [1, 4, 9, 16, 9])); // true
// console.clear();

/*
  Create a function called `validAnagram` that accepts two strings. Check if those those strings are anagrams of each other and return a boolean.
*/

function validAnagram(str1, str2) {
  // do something...
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("qwerty", 100)); // false
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("testtwisttime", "timetwisttest")); // true
// console.clear();

/*
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {}
console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
console.log(sumZero([-4, -3, -1, 0, 1, 2, 5, 9])); // [-1, 1]

// console.clear();

//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {
  // do something...
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.clear();

/*
  Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutuve elements in the array.  
*/

function maxSubarraySum(arr, num) {
  // sliding window
  // what if the arr.length is less than the num input? return null
  if (arr.length < num) return null;
  // create var to hold max sum value `maxSum`
  let maxSum = 0;
  // create var to hold current sum value `tempSum`
  let tempSum = 0;
  // create start of 'sliding window' loop through arr based on the input number
  for (let i = 0; i < num; i++) {
    // add elements of looped items to var `maxSum`
    maxSum += arr[i];
  }
  // have var `tempSum` = `maxSum` as starting value
  tempSum = maxSum;
  // loop through arr starting at input number index
  for (let i = num; i < arr.length; i++) {
    // subtract last starting item from `tempSum` and add current iteration item  to `tempSum`
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare `tempSum` and `maxSum` values and have maxSum take on the higher value
    maxSum = Math.max(maxSum, tempSum);
  }
  // return `maxSum`
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
