// * CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';
// console.log("reverseString()", reverseString("hello"));

// * CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

// console.log("isPalindrome()", isPalindrome("racecar"), isPalindrome("hello"));

// * CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// console.log("reverseInt()", reverseInt(12345));

// * CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'

// console.log(
//   "capitalizeLetters()",
//   capitalizeLetters("ina of the mountain what is your wisdom")
// );

// * CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// console.log("maxCharacter()", maxCharacter("javascripttttt"));

// * CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// console.log("fizzBuzz()", fizzBuzz());

// ARRAY CARDIO 2
// * CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

// console.log("longestWord()", longestWord("Hello there, my name is Josh"));
// console.log("longestWord()", longestWord("Hello, my name is Josh"));

// * CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// console.log("chunkArray()", chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
// * CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// console.log("flattenArray()", flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// * CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// console.log(formatStr("Dormitory###"));
// console.log("isAnagram()", isAnagram("elbow", "below"));
// console.log("isAnagram()", isAnagram("Dormitory", "dirty room##"));

// * CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

// console.log("letterChanges()", letterChanges("hello there zzz"));

//ARRAY CARDIO 3

// * CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// console.log("addAll", addAll(2, 5, 6, 7));

// * CHALLENGE 2: SUM ALL PRIMES
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

// console.log("sumAllPrimes()", sumAllPrimes(10));

// * CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// function seekAndDestroy(arr) {}

// * CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(a) {}

// * CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters(str) {}

// * CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

// function evenOddSums(arr) {}

// * NEW CHALLENGE
/* input: '?foo=hello&bar=world&baz&foo=again' 
   output: {
       foo: ['hello', 'again'],
       bar: 'world',
       baz: 'true',
   }
*/

// function formatQueryStr(str) {
//   // strip off ?
//   const withoutAmpersand = str.slice(1);
//   // split on &
//   const keyValuePairs = withoutAmpersand.split("&");

//   const output = {};
//   // iterate through key value pairs, split on =
//   for (let pair of keyValuePairs) {
//     const splitPair = pair.split("=").map(decodeURIComponent); // change '%3F' to '?'
//     const key = splitPair[0];
//     // if (splitPair.length === 2) {

//     if (splitPair.length === 1) {
//       splitPair.push("true");
//     }

//     const val = splitPair[1];
//     if (!key) continue; // checks for empty string value

//     // check if output[s] is a string already
//     // if it's a string
//     if (output[key] === undefined) {
//       // if it's undefined
//       output[key] = val;
//       // put the string in an array, make it an array
//     } else if (typeof output[key] === "string") {
//       const newVal = [output[key]];
//       newVal.push(val);
//       output[key] = newVal;
//     } else {
//       // if it's an array
//       // push the new val into the array
//       output[key].push(val);
//     }
//     // } else {
//     //   output[key] = "true";
//     // }
//   }
//   return output;
// }

// console.log(formatQueryStr("?foo=hello&bar=world"));
// console.log(formatQueryStr("?"), {});
// console.log(formatQueryStr("?foo=hello&bar=world&baz"));
// console.clear();
// console.log(formatQueryStr("?foo=hello&bar=world&baz&foo=again"));
// console.log(formatQueryStr("?foo=hello&foo"), {
//   foo: ["hello", "true"],
// });
// console.log(formatQueryStr("?qmark=%3F"), {
//   qmark: "?",
// });
// console.log("---");

// function makeQueryString(parsed) {
//   // queries=array
//   const queries = [];

//   function insert(k, v) {
//     if (v === "true") queries.push(k);
//     else queries.push(k + "=" + v);
//   }

//   // for key, value in parsed
//   for (let [key, val] of Object.entries(parsed)) {
//     if (typeof val === "string") {
//       // if (val === "true") queries.push(key);
//       // else queries.push(key + "=" + val);
//       insert(key, val);
//     } else {
//       for (let individualVal of val) {
//         // queries.push(key + "=" + individualVal);
//         insert(key, individualVal);
//       }
//     }
//   }
//   // if val is a string
//   // append key=val;
//   // else if it's an array
//   // for val in vals
//   // append key=val
//   return "?" + queries.join("&");
// }

// console.log(
//   makeQueryString(formatQueryStr("?foo=hello&bar=world&baz&foo=again")),
//   "?foo=hello&bar=world&baz&foo=again"
// );

// Time Complexity  0(n^2) because it uses nested loops
// function twoSum(arr, sum) {
//   // create a output arr
//   const output = [];
//   // loop through the items of an arr to access the items
//   for (let i = 0; i < arr.length; i++) {
//     // loop throuh the items of an arr to access the  second item
//     for (let j = 1; j < arr.length; j++) {
//       // if item i + j === sum
//       if (arr[i] + arr[j] === sum) {
//         // sum.push(i, j)
//         output.push(arr[i], arr[j]);
//       }
//     }
//   }
//   // return output arr
//   return output;
// }

function twoSum(arr, sum) {
  // Search the arr if any 2 items equal to the sum
  // No items can repeat

  // Declare newSet and init a Set
  const newSet = new Set();
  // Declare output and init arr
  let output = [];
  // Loop through arr and have Set add arr[i]
  for (let i = 0; i < arr.length; i++) {
    // Declare `complement` var  = arr[i]  - sum
    const complement = sum - arr[i];

    // if complement is in Set
    if (newSet.has(complement)) {
      // push item in output arr
      output.push(complement, arr[i]);
    }

    newSet.add(arr[i]);
  }
  // Return output arr
  return output;
}

console.log("twoSum()", twoSum([2, 7, 11, 15], 9)); // Output: [2, 7]
console.log("twoSum()", twoSum([1, 2, 3, 4, 5], 55)); // Ouput: []
