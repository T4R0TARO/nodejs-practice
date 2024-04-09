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
