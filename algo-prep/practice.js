// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';

const reverseString = (str) => str.split("").reverse().join("");

console.log("reverseString()", reverseString("hello"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
};
console.log("isPalindrome()", isPalindrome("racecar"), isPalindrome("hello"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (num) => {
  const reverseNumber = num.toString().split("").reverse().join("");
  return Number(reverseNumber);
};
console.log("reverseInt()", reverseInt(12345));

//CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'

const capitalizeLetters = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

console.log(
  "capitalizeLetters()",
  capitalizeLetters("ina of the mountain what is your wisdom")
);

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

const maxCharacter = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").map((char) => {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
console.log("maxCharacter()", maxCharacter("javascripttttt"));

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
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
};
// console.log("fizzBuzz()", fizzBuzz());

// ARRAY CARDIO 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

const longestWord = (str) => {
  const formatStr = str.toLowerCase().match(/[\w]+/g);
  const sorted = formatStr.sort((a, b) => b.length - a.length);
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

console.log("longestWord()", longestWord("Hello there, my name is Josh"));
console.log("longestWord()", longestWord("Hello, my name is Josh"));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

const chunkArray = (arr, len) => {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
};
console.log("chunkArray()", chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArray = (arr) => arr.reduce((a, b) => a.concat(b));
console.log("flattenArray()", flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

const formatStr = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

// console.log(formatStr("Dormitory"));
console.log("isAnagram()", isAnagram("elbow", "below"));
console.log("isAnagram()", isAnagram("Dormitory", "dirty room##"));
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
const letterChanges = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
  return newStr;
};
console.log("letterChanges()", letterChanges("hello there"));
//ARRAY CARDIO 3

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

const addAll = (...num) => {
  return num.reduce((acc, cur) => acc + cur);
};
console.log("addAll", addAll(2, 5, 6, 7));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

// function sumAllPrimes(num) {
//   // init value to return total
//   let total = 0;

//   // loop through  `num` to check for prime numbers
//   function checkForPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false; // not a prime number
//       }
//     }
//     return true; // prime number
//   }

//   // add prime numbers to `total`
//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   // return total
//   return total;
// }

/**
 * Create a f() that iterates through a num and checks for primes
 * if number pass = 1 the return false
 * Loop through the number with counter starting at `2`
 * if number is divisible by counter return false and exit the f() (not prime)
 * if number is not divisible by any of the counter values return true (prime)
 */

function sumAllPrimes(num) {
  let sum = 0;

  const checkForPrime = (i) => {
    i <= 1 && false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// console.log("sumAllPrimes()", sumAllPrimes(10));
// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr) {}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {}
