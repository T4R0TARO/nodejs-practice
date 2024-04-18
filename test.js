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
console.clear();

/*
  Create a function called `validAnagram` that accepts two strings. Check if those those strings are anagrams of each other and return a boolean.
*/

function validAnagram(str1, str2) {
  // Assume that the inputs are always string? No there will be a testcase for numbers
  if (typeof str1 && typeof str2 !== "string") return false;
  // If str1 length is NOT equal to str2 length? return false
  if (str1.length !== str2.length) return false;
  // create obj1 `frequencyCounter1`
  let frequcnecyCounter1 = {};
  // create obj2 'frequencyCounter2`
  let frequencyCounter2 = {};
  // populate `frequencyCounter1` w/ `str1`
  for (let char of str1) {
    frequcnecyCounter1[char]
      ? (frequcnecyCounter1[char] += 1)
      : (frequcnecyCounter1[char] = 1);
  }
  // populate `frequencyCounter2` w/ `str2`
  for (let char of str2) {
    frequencyCounter2[char]
      ? (frequencyCounter2[char] += 1)
      : (frequencyCounter2[char] = 1);
  }
  // loop through `frequcnecyCounter1` keys
  for (let key in frequcnecyCounter1) {
    // if key is NOT in `frequencyCounter2`? return false
    if (!key in frequencyCounter2) return false;
    // if frequencyCounter1 values are NOT equal to frequencyCounter2 values? return false
    if (frequencyCounter2[key] !== frequcnecyCounter1[key]) return false;
  }
  // Output: Boolean
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("qwerty", 100)); // false
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("testtwisttime", "timetwisttest")); // true
console.clear();

/*
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {
  // Multiple Pointer
  // Should i assume that the arr is sorted? yes
  // A pair of the first two numbers that equal 0
  // create pointer 1 `left`
  let left = 0;
  // create pointer 2 `right`
  let right = arr.length - 1;
  // loop arr
  while (left < right) {
    // create var `sum`
    let sum = arr[left] + arr[right];
    // if sum equals 0 ? return [arr[left], arr[right]]
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  // Output: Array
}

console.log("sumZero");
console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
console.log(sumZero([-4, -3, -1, 0, 1, 2, 5, 9])); // [-1, 1]

console.clear();

//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {
  // Input: Array of Integers
  // Multiple Pointer
  // what if the input `arr` is empty? return 0
  if (arr.length === 0) return 0;
  // Create pointer1 `i`
  let i = 0;
  // Create pointer2 `j`
  // Loopt through arr
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // Ouput: Integer
  // Pointer 1 `i` will change element whenever Pointer 2 `j` finds a unique element
  // var `i` will incremently increase for every new unique element which will also count how many unique element there are in the array
  // NOTE: Keep in mind the arr 0 index to + 1 when returning `i` value
  return i + 1;
}
/* 
   i
  [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
      j

  if i is NOT equal to j
    i is move `i++`
    i = j
    next iteration
*/
console.log("countUniqueValues");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.clear();

/*
  Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutuve elements in the array.  
*/

function maxSubarraySum(arr, num) {
  // Input: arr, number
  // if arr.length < num ? return false
  if (arr.length < num) return null;
  // Sliding Window
  // create var `maxSum`
  let maxSum = 0;
  // create var `tempSum`
  let tempSum = 0;
  // Start Window
  // loop through `arr` by `num`
  for (let i = 0; i < num; i++) {
    // add elements into `maxSum`
    maxSum += arr[i];
  }
  // `tempSum` takes on `maxSum` value
  tempSum = maxSum;
  // "Slide" Window
  // loop through arr starting at `num`
  for (let i = num; i < arr.length; i++) {
    // `tempSum` substracts first elements and adds current elemnt from sum
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare `maxSum` and `tempSum`, `maxSum` will take on the higher value
    maxSum = Math.max(maxSum, tempSum);
  }
  // Output: number
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.clear();

/*
  create a function called `containsDuplicate` that accepts an array of numbers, the function should return false if the numbers is the array are all unique and return true if there are multiples of the same number.
*/

// Time O(n)
// Space O(n)
// var containsDuplicate = function (nums) {
//   // input: array of numbers
//   // is the array sorted? no
//   // create index obj `indexObj`
//   let indexObj = {};
//   // populate obj `indexObj` w/ arr `nums`
//   for (let val of nums) {
//     indexObj[val] ? (indexObj[val] += 1) : (indexObj[val] = 1);
//   }
//   // loop through `indexObj` key
//   for (let key in indexObj) {
//     // if `indexObj` values are more than 1 return false
//     if (indexObj[key] > 1) return true;
//   }
//   // output: boolean
//   return false;
// };

// Time O(n)
// Space O(n)
// function containsDuplicate(nums) {
//   const newSet = new Set(nums);
//   return newSet.size !== nums.length;
// }

function containsDuplicate(arr) {
  // create index obj `indexObj`
  let indexObj = {};
  // populate `indexObj` w/ arr
  for (let num of arr) {
    indexObj[num] ? (indexObj[num] += 1) : (indexObj[num] = 1);
  }
  // loop through key of `indexObj`
  for (let key in indexObj) {
    // if `indexObj` values are > 1 return true;
    if (indexObj[key] > 1) return true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.clear();
