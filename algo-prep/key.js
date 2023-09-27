// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';

function reverseString(string) {
  return string.split("").reverse().join("");
}

// Arrow Function
// const reverseString = (string) => string.split('').reverse().join('');

console.log("reverseString()", reverseString("hello"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) return true;
  return false;
}

console.log("isPalindrome()", isPalindrome("racecar"), isPalindrome("hello"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let changeToString = int.toString().split("").reverse().join("");
  let parsedString = parseInt(changeToString);
  return parsedString;
}

console.log("reverseInt()", reverseInt(12345));

//CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  //  const strArr = str.toLowerCase().split(' ');

  //  for(let i = 0; i < strArr.length; i++){
  //     //create substring of index 0 char and capitalize  // create substring of word starting at index 1 // add both substrings together
  //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //  }
  //  // return return updates strArr array and join() the items back to a string
  //  return strArr.join(' ');

  //////map()/////////////
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  //////Regex////////////
  // return str.replace(/\b[a-z]/gi, function(char) {
  //     return char.toUpperCase();
  // });
}

console.log(
  "capitalizeLetters()",
  capitalizeLetters("ina of the mountain what is your wisdom")
);

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  //create empty object
  const charMap = {};
  //create an empty value
  let maxNum = 0;
  //create an empty string
  let maxChar = "";

  //split string by char//forEach char
  str.split("").forEach(function (char) {
    //if char appears increase incremently
    if (charMap[char]) {
      charMap[char]++;
    } else {
      //if char appears once have char equal 1
      charMap[char] = 1;
    }
  });

  // let char in in charMap
  //  if  char is greater than maxNum // have maxNum take the value of char
  //  have maxChar equal the char
  for (let char in charMap) {
    //debugger
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  // return maxChar
  return maxChar;
}

console.log("maxCharacter()", maxCharacter("javascripttttt"));

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("fizzBuzz()", fizzBuzz());

// ARRAY CARDIO 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1

  // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;

  // Loop while index is less than the array length
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length nd push on to the chunked array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }

  return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  // const chunkedArr = [];

  // // Loop through arr
  // arr.forEach(val => {
  //   // Get last element
  //   const last = chunkedArr[chunkedArr.length - 1];

  //   // Check if last and if last length is equal to the chunk len
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push(val);
  //   }
  // });

  // return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => a.concat(b));
  // SOLUTION 2
  // return [].concat.apply([], arrays);
  // SOLUTION 3
  // return [].concat(...arrays);
  // SOLUTION 4
  return arrays.flat(Infinity);
}

//____________________________@missx7________________________

function flatenArray(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}
//____________#______________@missx7____________#___________

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

//___________________________@missx7________________________

function isAnagramx(str1, str2) {
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  return arr1.every((value, index) => value === arr2[index]);
}

const isAnagramx = (str1, str2) =>
  str1
    .split("")
    .sort()
    .every((value, index) => value === str2.split("").sort()[index]);

//____________#______________@missx7____________#___________

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // replace char with char specified by function...
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      // return create string from specificed sequence = char code next following char
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  //mutate newStr replace vowels with uppercase
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

  return newStr;
}

//ARRAY CARDIO 3

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution 1: ES5 arguments & for loop
function addAll() {
  var args = Array.prototype.slice.call(arguments);
  // var args = Array.from(arguments)
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Solution 2:
// let total = 0;
// numbers.forEach(function(num){
//     total += num
// })
// return total;

// Solution 3: ...rest & reduce/forEach
function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr) {
  const args = Array.from(arguments);

  function filterArr(arr) {
    // Return true if NOT in array
    return args.indexOf(arr) === -1;
  }

  return arr.filter(filterArr);
}

// Solution 2: ...rest, filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  // arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

// Call Function
const output = letterChanges("Hello There");

console.log(output);
