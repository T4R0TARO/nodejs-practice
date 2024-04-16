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
// Space Complexity O(1)
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
// Time Complexity O(n)
// Space Complexity O(1)
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
console.clear();

// MULTIPLE POINTERS
/*
  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

  countUniqueValues([1,1,1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  countUniqueValues([]) // 0
  countUniqueValues([-2,-1,-1,0,1]) // 4
*/

// METHOD 1
// Time Complexity O(n)
// Space Complexity O(n) why?
// the obj `uniqueNumMap` grows in proportion to the input arr O(n)
// the arr `uniqueNumCount` grow in proportion to the input arr O(n)

// function countUniqueValues(arr) {
//   // create obj
//   let uniqueNumMap = {};
//   // create arr
//   let uniqueNumCount = [];
//   // loop through items in input arr
//   arr.map((num) => {
//     // populate obj w/ items of input arr
//     uniqueNumMap[num] ? uniqueNumMap[num]++ : (uniqueNumMap[num] = 1);
//   });

//   // loop through obj keys
//   for (let key in uniqueNumMap) {
//     // push obj key in arr `uniqueNumCount`
//     uniqueNumCount.push(key);
//   }

//   // create var that holds the length of arr `uniqueNumCount`
//   let countOfUniqueNum = uniqueNumCount.length;
//   // return var
//   return countOfUniqueNum;
// }

// METHOD 2
function countUniqueValues(arr) {
  // if arr is empty return 0
  if (arr.length === 0) return 0;
  // set pointer 1 `i`
  let i = 0;
  // loop thorugh arr
  // set pointer 2 `j`
  for (let j = 1; j < arr.length; j++) {
    // if pointer 1 is NOT equal to pointer 2...
    if (arr[i] !== arr[j]) {
      // move pointer 1
      i++;
      // change pointer 1 to equal pointer 2
      arr[i] = arr[j];
    }
  }
  // return pointer 1 + 1 ` value because arr index starts at 0'
  return i + 1;
}
/*
 
                      i   
  [1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]

                                    j
  [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
*/
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.clear();

// Sliding Window Pattern
/**
 * This pattern involves creating a "window" which can wither be an array or numebr form one positon to another
 * Depending on a certain condition, the window either increases or closes (and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc.
 */

/*
  Write a function called `maxSubarraySum` which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutuve elements in the array.  
*/

// METHOD 1:
// TIME O(n^2)
// function maxSubarraySum(arr, num) {
//   // if `num` is greater than the amount of items in the arr return null;
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   /* arr.length - num + 1 ?? "seting the size of the window"
//    * we dont need to loop through the entire array b/c we are count by elements of "4"
//    * if we run out of elements of "4" we do not need to cont. the itteration
//      +  +  +  +
//     [1, 2, 5, 2, 8, 1, 5], 4
//     arr.length - num
//         7     -   4  +  1 "adjust for arr zero index" = 4 iterations
//     * 1, 2, 5, 2
//     * 2, 5, 2, 8
//     * 5, 2, 8, 1
//     * 2, 8, 1, 5
//     *  8, 1, 5 ❌
//   */
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     // temp will store our sum each iteration
//     temp = 0;
//     // loop through the numbers of the window
//     for (let j = 0; j < num; j++) {
//       // add the numbers of the window and hold the sum in var `temp`
//       temp += arr[i + j];
//     }
//     // if `temp` is greater than `max` set the value of `max` to `temp`
//     // if a new sum is greater in the next iterations then set `max` to the greater `temp`
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   // when loop ends return `max` value
//   return max;
// }

/*   +  +
    [1, 2, 5, 2, 8, 1, 5], 2
        7      -  2  + 1 = 6 iterations
    arr.length - num + 1
*/

// METHOD 2
// TIME O(n)

function maxSubarraySum(arr, num) {
  // create var `maxSum` to hold max sum of consecutive elements
  let maxSum = 0;

  // create var `tempSum` to hold the current sum of each iteration when moving the "sliding window"
  let tempSum = 0;

  // what if the input arrays length is less then the number of consecutive elements input number? return null
  if (arr.length < num) return null;

  // set "sliding window", create a loop that iterates the amount of the input number
  for (let i = 0; i < num; i++) {
    // add the elements of the arr to the maxSum
    maxSum += arr[i];
    /* 
     e.g.

     i i i  
    [2,6,9,2,1,8,5,6,3] ,3

    maxSum = 2 + 6 + 9 = 17;
    */
  }

  // set the `tempSum` to the value `maxSum` to start the "sliding window"
  tempSum = maxSum;

  // loop through the arr STARTING at the input number value
  /* e.g. 
           i  
    [2,6,9,2,1,8,5,6,3] ,3
     0 1 2 3 4 5 6 7 0   arr index

     subtract the first element of sliding window `arr[i - num]`
     arr[3 - 3 =  0] =  2

     add the current element of the sliding window `arr[i]`
     arr[3] = 2

    tempSum = tempSum - arr[i - num] + arr[i];
    tempSum =   17    -      2       +    2
  */
  for (let i = num; i < arr.length; i++) {
    // from the current value of `tempSum`...
    // substract the first element from the "sliding window", `arr[i - num]`
    // then add the next iterations last element to the "sliding window", `arr[i]`
    tempSum = tempSum - arr[i - num] + arr[i];
    // compare `maxSum` and `tempSum` values and have `maxSum` hold the highest value
    maxSum = Math.max(maxSum, tempSum);

    /* e.g.
       tempSum = 17

               i  
        [2,6,9,2,1,8,5,6,3] ,3
    */
  }
  // return maxSum
  return maxSum;
}

/* `tempSum = tempSum - arr[i - num] + arr[i]`
 * Instead of recalculting the sum  of all the elements we can substract the first element and add the next iterations last element to calculate the new sum
 */

/* e.g.
    tempSum = [2+6+9] = 17
          first element       new last element
    17       - 2                    + 2             = 17
    17       - 6                    + 1             = 12 
    12       - 9                    + 8             = 11 
    11       - 2                    + 5             = 14 
    14       - 1                    + 6             = 19 * 
    19       - 8                    + 3             = 14 

                 i i i  
    [2,6,9,2,1,8,5,6,3] ,3
    
    Output = 19
  */

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
