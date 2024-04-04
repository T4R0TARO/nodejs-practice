/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/

/**
 * Frequncy Counter Algorithim
 */
function same(arr1, arr2) {
  // if arr1 and arr2 are NOT equal in length return false
  if (arr1.length !== arr2.length) return false;
  // create obj1 and obj2 for comparison
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // populate obj1 w/ arr1 `for...of`
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // populate obj2 w/ arr2 `for...of`
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // loop through the keys in obj1 `for...in`
  for (let key in frequencyCounter1) {
    // if the keys **2 in obj1 are NOT in obj2 return false
    if (!(key ** 2 in frequencyCounter2)) return false;

    // if the values **2 in obj2 are not equal to obj1 values return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

// Edgecases
// what if the length are not equal
console.log(same([1, 2, 3], [4, 9])); // return false
// what if the frequency is not the same
console.log(same([2, 3, 3], [4, 9, 4])); // return false
// what if the square is not in arr2
console.log(same([3, 4, 5], [9, 16, 20])); // return false
// return true
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([2, 3, 4, 4], [4, 9, 16, 16])); // true
console.clear();

/* 
  ANAGRAMS:
  Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  TESTCASE: 
  validAnagram("","") // true
  validAnagram("aaz","zza") // false
  validAnagram("anagram","nagaram") // true
  validAnagram("rat","car") // false
  validAnagram("awesome","awesom") // false
  validAnagram("qwerty","qeywrt") // true
  validAnagram("texttwisttime","timetwisttest") // true
*/

// METHOD 1
// Time Complexity O(n)
// Space Complexity O(n)
// function validAnagram(str1, str2) {
//   if (typeof str1 && typeof str2 !== "string") return false;
//   if (str1.length !== str2.length) return false;

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   let reformatStr1 = str1.split("");
//   let reformatStr2 = str2.split("");

//   for (let char of reformatStr1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }

//   for (let char of reformatStr2) {
//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) return false;
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//   }

//   return true;
// }

// METHOD 2
/**
 * Time Complexity: O(n log n)
 * Space Complexity:O(n)
 */

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false; // O(1)
//   if (typeof str1 && typeof str2 !== "string") return false; // O(1)
//   let reformatStr1 = str1.split("").sort().join(""); // O(n), O(n log n), O(n)
//   let reformatStr2 = str2.split("").sort().join(""); // O(n), O(n log n), O(n)
//   return reformatStr1 === reformatStr2; // O(n)
// }

// METHOD 3
function validAnagram(str1, str2) {
  // if lengths of str1 and str2 are NOT equal return false
  if (str1.length !== str2.length) return false;
  // create frequency counter obj
  const lookup = {};
  // loop through str1
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    // if char exists, increment, otherwise set to 1; "populate obj w/ str1 for comparison"
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  // loop through str2
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    // check if char is in lookup obj
    // can't find char or char is zero, then it's NOT an anagram return false
    if (!lookup[char]) {
      return false;
    } else {
      // if char is in lookup obj, -1  value
      // why? if the key and values are equal the values will perfectly 0 out returning true
      lookup[char] -= 1;
    }
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
