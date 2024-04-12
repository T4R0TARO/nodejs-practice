/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/
// Frequency Counter
function same(arr1, arr2) {
  // are arr1 and arr2 the same length? if NOT return false
  if (arr1.length !== arr2.length) return false;
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
    // are `frequencyCounter1` keys ** 2 in `frequencyCounter2`? if NOT return false
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }
    // are `frequencyCounter2` values EQUAL to `frequencyCounter1` values? if NOT return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
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
  // are str1 and str2 the same length? If NOT return false
  if (str1.length !== str2.length) return false;
  if (typeof str1 && typeof str2 !== "string") return false;
  // create obj1 `frequencyCounter1`
  let frequencyCounter1 = {};
  // create obj2 `frequencyCounter2`
  let frequencyCounter2 = {};
  // populate `frequencyCounter1` with str1
  for (let char of str1) {
    frequencyCounter1[char]
      ? (frequencyCounter1[char] += 1)
      : (frequencyCounter1[char] = 1);
  }
  // populate `frequencyCounter2` with str2
  for (let char of str2) {
    frequencyCounter2[char]
      ? (frequencyCounter2[char] += 1)
      : (frequencyCounter2[char] = 1);
  }
  // loop through `frequncyCounter1` char
  for (let key in frequencyCounter1) {
    // if char is NOT in `frequencyCounter2` return false
    if (!key in frequencyCounter2) return false;
    // if `frequencyCounter2` key/values are NOT equal to `frequencyCounter1` return false
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
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
// console.clear();

/*
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {}

// console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
// console.clear();

//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.clear();
