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
  // should i consider types? assume inputs are always string
  if (typeof str1 || typeof str2 !== "string") return false;
  // should i consider special characters? assume the input are alpha char
  // should i consider spaces? assume the strings contain no spaces
  // should i consider upppercase character? assume input are always lowercase
  // let str1Reformat = str1.toLowercase().replace(/[^a-z]/g, "")
  // let str2Reformat = str1.toLowercase().replace(/[^a-z]/g, "")

  // if input length are NOT equal return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create lookup obj
  const lookup = {};
  // loop through str1
  for (let i = 0; i < str1.length; i++) {
    // populate lookup obj w/ str1 elements
    let char = str1[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  // loop through str2
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    // if elements of str2 are NOT in lookup obj return false
    if (!lookup[char]) {
      return false;
    } else {
      // else element is in str2 ARE in lookup obj  -1
      lookup[char] -= 1;
    }
  }
  return true;
}

/*
  Lookup Obj:
 {
  a: 3, -1 -1 -1
  n: 1, -1
  g: 1, -1
  r: 1, -1
  m: 1, -1
 }

 Loop Char str1 
 [n,a,g,a,r,a,m]


 {
  r: 1, -1
  a: 1, -1
  t: 1, -1 false
 }

 [r,a,t,t]
*/
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

// Time Complexity O(n^2)
// Space Complexity O(n)
// function sumZero(arr) {
//   // is the arr always sorted?
//   // is the input always an arr?
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// MULTIPLE POINT COUNTER
function sumZero(arr) {
  // do something...
  // init left pointer
  let left = 0;
  // init right pointer
  let right = arr.length - 1;
  // loop arr while left < right
  while (left < right) {
    // init sum = left + right === 0
    let sum = arr[left] + arr[right];
    // if sum === 0 return arr pair
    if (sum === 0) {
      return [arr[left], arr[right]];
      // else if sum is greater than 0 move pointer right
    } else if (sum > 0) {
      right--;
      // else if move pointer left
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 4])); // [-2, 2]
console.log(sumZero([-3, -2, -1, 0, 4, , 5, 6])); // undefined
