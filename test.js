/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/
// Frequency Counter
function same(arr1, arr2) {
  // if the length of the arr1 and arr2 are not equal return false
  if (arr1.length !== arr2.length) return false;
  // create obj1
  const frequencyCounter1 = {};
  // create obj2
  const frequencyCounter2 = {};
  // loop arr1
  for (let val of arr1) {
    // populate obj1 w/ arr1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // loop arr2
  for (let val of arr2) {
    // populate obj2 w/ arr2
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // loop through obj1 key
  for (let key in frequencyCounter1) {
    // if key are NOT obj2 return false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if key ** 2 are NOT equal to obj1 values
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
    Create a function that accepts a sorted array of integers. The function should return the first two integer pairs whos sum equals 0
*/
function sumZero(arr) {
  // create pointer 1
  let left = 0;
  // create pointer 2
  let right = arr.length - 1;
  // loop through arr while pointer1 < pointer2
  while (left < right) {
    // create sum = pointer1 + pointer2
    let sum = arr[left] + arr[right];
    // if sum === 0 return [arr[pointer1], arr[pointer2]]
    if (sum === 0) {
      return [arr[left], arr[right]];
      // else if sum > pointer2
    } else if (sum > 0) {
      // pointer2--
      right--;
      // else
    } else {
      // pointer1++
      left++;
    }
  }
}

console.log(sumZero([-4, -2, -1, 0, 2, 5, 9])); // [-2, 2]
console.clear();
//  Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, BUT it will always be sorted.

function countUniqueValues(arr) {
  // if arr.length === 0 return 0
  if (arr.length === 0) return 0;
  // set pointer 1 `let i = 0`
  let i = 0;
  // set pointer 2 `let j = 1`
  //loop through arr w/ pointer 2
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
  /*
                        i
    [1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]
    
    `j` will scout the arr items and check if they are equal to `i` 
     if they are not equal to `i` the pointer `i` will incremently increase in the arr index
     if they are not equal to `i` then i will equal the unique value replace change the item it is pointing to 
                                      j
    [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
  */
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
