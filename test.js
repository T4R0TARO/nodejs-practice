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

/*
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/
// METHOD 1
// function sameFrequency(num1, num2) {
//   // should i assume that the inputs are always integers? yes
//   // should i assume that the inputs are always positive? yes
//   // should i assume that the inputs are always whole numbers? yes
//   // Frequency Counter Pattern:
//   // Input: num
//   // Output: Boolean

//   // change `num1` and `num2` to strings
//   const reformatStr1 = num1.toString();
//   // split strings in to an arr of characters
//   const reformatStr2 = num2.toString();
//   // ! You do NOT need to split() the string in order to loop through the characters
//   // do i need to change them back to numbers? not really
//   // if the length of `num1` and `num2` are not equal? return false;
//   if (reformatStr1.length !== reformatStr2.length) return false;

//   // create obj `frequencyCounter1`
//   let frequencyCounter1 = {};
//   // create obj `frequencyCounter2`
//   let frequencyCounter2 = {};
//   // populate `frequencyCounter1` w/ `num1`
//   for (let char of reformatStr1) {
//     frequencyCounter1[char]
//       ? (frequencyCounter1[char] += 1)
//       : (frequencyCounter1[char] = 1);
//   }
//   // populate `frequencyCounter2` w/ `num2`
//   for (let char of reformatStr2) {
//     frequencyCounter2[char]
//       ? (frequencyCounter2[char] += 1)
//       : (frequencyCounter2[char] = 1);
//   }
//   // loop through `frequencyCounter1` keys
//   for (let key in frequencyCounter1) {
//     // if key is NOT in `frequencyCounter2? return false
//     if (!key in frequencyCounter2) return false;
//     // if `frequencyCounter2[key]` values are NOT equal to `frequencyCounter1[key]` values? return false
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//   }
//   return true;
// }

// METHOD 2
function sameFrequency(num1, num2) {
  // Convert numbers to strings
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  // Check if lengths are equal
  if (strNum1.length !== strNum2.length) return false;
  // Create frequency Counter
  const frequcnecyCounter = {};
  // Populate frequency counter with digits from num1
  for (let digit of strNum1) {
    frequcnecyCounter[digit]
      ? (frequcnecyCounter[digit] += 1)
      : (frequcnecyCounter[digit] = 1);
  }
  // Compare frequency counter with digits from num2
  for (let digit of strNum2) {
    // if digit not found is num1, return false
    if (!frequcnecyCounter[digit]) return false;
    // if digit is in num1, incremently decrease the value
    frequcnecyCounter[digit]--;
    if (frequcnecyCounter[digit] < 0) return false;
  }
  // if all digits match, return true
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.clear();
/*
 Create a function `twoSum`. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

// METHOD 1
// TIME O(n^2)
// SPACE O(1)
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// METHOD 2
// Map: is an object that holds key value pairs and remembers the original insertion order of keys
// has(): returns a boolean if the "key" is in the Map object
// get(): returns the key of the  Map obj
function twoSum(nums, target) {
  const numMap = new Map(); // Use a hashmap to store the complements

  for (let i = 0; i < nums.length; i++) {
    const complements = target - nums[i];
    // If Map obj has the sum compliments? return pair
    if (numMap.has(complements)) {
      return [numMap.get(complements), i];
    }
    // populate Map obj w/ arr `nums` element and index "key/values"
    numMap.set(nums[i], i);
  }
  return null; // If no solution found
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
