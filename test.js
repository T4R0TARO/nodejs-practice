/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/
// Frequency Counter
function same(arr1, arr2) {
  // do something...
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
console.clear();

/*
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {
  // do something...
}

console.log("sumZero");
console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
console.log(sumZero([-4, -3, -1, 0, 1, 2, 5, 9])); // [-1, 1]

console.clear();

//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {
  // do something...
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
  // do something...
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

function containsDuplicate(arr) {
  // do something...
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

function sameFrequency(num1, num2) {
  // do something...
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

/*
  Write a function called `averagePair`. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.There may be more than one pair that matches the average target.

  Time: O(n)
  Space: O(1)
*/

function averagePair(arr, target) {
  // can i assume there will only be one match? no, the arr can have multiple pair values that equal target
  // if arr.length equal 0 return false
  if (arr.length === 0) return false;
  // can i assume that all numbers are positive? no, the function can accepts negatives and decimals
  // create pointerA `start`
  let start = 0;
  // create pointerB `end`
  let end = arr.length - 1;
  // loop through `arr`
  while (start < end) {
    // create var `average`= (start + end) / 2
    const average = arr[start] + arr[end] / 2;
    // if `average` === `target` return true
    if (average === target) {
      return true;
    }

    // if `average` is less than `target`
    if (average < target) {
      // move pointer `start` i++
      start++;
      // else
    } else {
      // move pointer `end` j--
      end--;
    }
  }
  return false;
  /*
     i
    [1,2,3], 2.5
         j
      
    average = 1 + 3 = 4 / 2 = 2 
    if average > target pointer j--
    else i++
  */
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.clear();
/*
  Write a function called `isSubsequence` which takes in two strings and checks whether the characters in the first string form a subsequency of the characters in the second string. In other words, the function should check wheter the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
  // do something
  // if str1.length > str2.length return false
  if (str1.length > str2.length) return false;
  // if str1.length === 0 return false
  if (str1.length === 0) return false;
  // create pointerA `i`
  let i = 0;
  // create pointerB `j`
  let j = 0;
  // loop through `str2`;  while j < str2.length
  while (j < str2.length) {
    // move pointer `i` if pointer `j` equal pointer `i`
    if (str1[i] === str2[j]) {
      i++;
    }
    // if all chars in str1 have been found return true
    if (i === str1.length) {
      return true;
    }
    // incremently increase counter `j`
    j++;
  }
  // if not all chars in str1 are found and the loop ends return false
  return false;
  /*
     i
    [a,b,r,a,c,d,a,b,r,a]
     j
  */
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracdabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
