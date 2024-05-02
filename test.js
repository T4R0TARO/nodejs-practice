/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/
// Frequency Counter
function same(arr1, arr2) {
  // if arr1.length !== arr2.length return false
  if (arr1.length !== arr2.length) return false;
  // create obj1
  let frequencyCounter1 = {};
  // create obj2
  let frequencyCounter2 = {};
  // populate obj1 w/ arr1
  for (val of arr1) {
    frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : (frequencyCounter1[val] = 1);
  }
  // populate obj2 w/ arr2
  for (val of arr2) {
    frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : (frequencyCounter2[val] = 1);
  }
  // loop through obj1 keys
  for (let key in frequencyCounter1) {
    // if obj1 keys are NOT in obj2 keys **2 return false
    if (!(key ** 2 in frequencyCounter2)) return false;
    // if obj2 values are NOT equal to obj1 values return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}
console.log("start...");
console.log(same([1, 2, 3], [1, 4])); // false
console.log(same([1, 2, 3], [1, 4, 4])); // false
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 4, 2, 3, 3], [1, 4, 9, 16, 9])); // true

/*
  Create a function called `validAnagram` that accepts two strings. Check if those those strings are anagrams of each other and return a boolean.
*/

function validAnagram(str1, str2) {
  // should i consider types? yes
  if (typeof str1 && typeof str2 !== "string") return false;
  // if input lengths are NOT equal return false
  if (str1.length !== str2.length) return false;
  //create lookup obj
  const lookup = {};
  // loop through str1 and populate lookup w/ str1
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  // loop through str2
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

console.log("validAnagram()");
console.log(validAnagram("", "")); // true
console.log(validAnagram("qwerty", 100)); // false
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("testtwisttime", "timetwisttest")); // true

/*
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {
  // do something...
}

console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
console.log(sumZero([-4, -3, -1, 0, 1, 2, 5, 9])); // [-1, 1]

//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {
  // if arr is empty return 0
  // set pointer1 `i`
  // set pointer2 `j`
  // loop through arr
  // if pointer1 is NOT equal to pointer2...
  // move pointer1
  // change pointer1 to equal pointer2...
  // return pointer1 + 1 value because arr index starts at 0
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

/*
  Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutuve elements in the array.  
*/

function maxSubarraySum(arr, num) {
  // do something...
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

/*
  create a function called `containsDuplicate` that accepts an array of numbers, the function should return false if the numbers is the array are all unique and return true if there are multiples of the same number.
*/

// Time O(n)
// Space O(n)

function containsDuplicate(arr) {
  // do something...
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

/*
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  // do something...
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

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

// METHOD 2
// Map: is an object that holds key value pairs and remembers the original insertion order of keys
// has(): returns a boolean if the "key" is in the Map object
// get(): returns the key of the  Map obj
function twoSum(nums, target) {
  // do something...
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

/*
  Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.There may be more than one pair that matches the average target.

  Time: O(n)
  Space: O(1)
*/

function averagePair(arr, target) {
  // do something...
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/*
  Write a function called `isSubsequence` which takes in two strings and checks whether the characters in the first string form a subsequency of the characters in the second string. In other words, the function should check wheter the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
  // do something...
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracdabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

/*
  Given an array of integers and a number, write a function called `maxSubarraySum`, which finds the maximum sum of a subarray with the length of the number passed to the function. 
  
  NOTE: a subarray must consist of consecutive elements from the original array.

  Constraints:

  Time Complexity - O(N)
  Space Complexity - O(1) 
*/

function maxSubarraySum(arr, num) {
  // do something...
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

/*
  Write a function called `minSubArrayLen` which accepts two parameters - an array of positive integers and a positive integer.

  This function should return the minimal length of a contiguous subarray of which the sum is greateer than or equal to the integer passed to the function. IF there isn't one, return 0 instead.

  Time Complexity - O(n)
  Space Complexity - O(1)
*/

function minSubArrayLen(arr, sum) {
  // do something...
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
