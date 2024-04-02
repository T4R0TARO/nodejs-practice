/* 
    Create a function that accept two arrays of integer as its inputs. Compare the two arr with they share the same frequency of integers and values are equal squared. The output should be a boolean
*/

/**
 * Frequncy Counter Algorithim
 */
function same(arr1, arr2) {
  // if arr1.length is not equal to arr2.length // return false
  if (arr1.length !== arr2.length) return false;

  // create two objects obj1 and obj2
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // populate obj1 w/ arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // popultae obj2 w/ arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // compare obj1 w/ obj2 key//values
  for (let key in frequencyCounter1) {
    // compare keys
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // compare values
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
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
console.log(same([2, 3, 4], [4, 9, 16])); // true

console.clear();
