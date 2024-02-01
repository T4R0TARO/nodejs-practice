const { sum, myFunction, fetchData, fetchPromise } = require("./sum");
const Stack = require("./stack");
// * MATCHERS
/** Table of Contents
 * toBe()
 * toEqual()
 * toBeFalsy()
 * toBeTruthy()
 * toThrow()
 */

/** toBe()
 * when dealing with primative values like...
 * numbers
 * strings
 * booleans
 */

// test("add 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

/** toEqual()
 *  recursively checks every field of an object or array
 *  when dealing with objects or arrays
 */

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

/** toBeFalsy()
 * when dealing with falsy values
 * null
 * undefined
 * 0
 * ""
 * NaN
 */

// test("null is falsy", () => {
//   const n = null;
//   expect(n).toBeFalsy;
// });

/** toBeTruthy()
 *  when dealing with truthy values
 * true
 * present value
 */

// test("one is truthy", () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// });

/** toThrow()
 * error handling test
 */

// test("throws on invalid input", () => {
//   expect(() => {
//     myFunction("asdfgjkl");
//     // myFunction(99);
//   }).toThrow();
// });

// ASYNC/PROMISES/CALLBACKS

//* TRY/CATCH
// test("ina of the mountain, what is your wisdom", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("wah");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

// * REJECT/RESOLVE
// test("ina of the mountain what is your wisdom", () => {
//   return expect(fetchPromise()).resolves.toBe("wah");
// });

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).reject.toThrow("error");
// });

// * ASYNC/AWAIT
// test("the data is wah", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("wah");
// });

// * MOCK FUNCTIONS
// test("mock implementation of a basic function", () => {
//   const mock = jest.fn((x) => 42 + x);
//   expect(mock(1)).toBe(43);
//   expect(mock).toHaveBeenCalledWith(1);
// });

// * SPY
// tracks function behavior

// test("spying on a method of an object", () => {
//   const video = {
//     play() {
//       return true;
//     },
//   };

//   const spy = jest.spyOn(video, "play");
//   video.play();

//   expect(spy).toHaveBeenCalled(); // checks if `play()` was called
//   spy.mockRestore();
// });

// UNIT TESTING
// Testing the validation of individual behaviors of functions, methods, or units of code

// INTEGRATION TESTING
// Testing multiple units of code together

// END TO END TESTING
// Runs application in a simulated enviorment and attempts to emulate user behavior (Cypress)

let stack;
// instead of initializing a new Stack object implicitly for each test...
// dynamically initialize a new Stack object whenever `stack` is called
beforeEach(() => {
  stack = new Stack();
});

/*
  describe("description of the test", () => {
    `it === test`
    it("testing for..", () => {
      expect(value)toBe(expectedValue) // pass || fail
      expect(value).toEqual(expectedDataStructure) // pass || or fail
    })
    it.todo("does not run test and marks as pending test")
  })
*/
// * STACK
// describe("My Stack", () => {
//   it("is created empty", () => {
//     // const stack = new Stack();
//     expect(stack.top).toBe(-1);
//     expect(stack.items).toEqual({});
//   });

//   it("can push to the top", () => {
//     stack.push("🍠");
//     expect(stack.top).toBe(0);
//     expect(stack.peek).toBe("🍠");
//   });

//   it("can pop off", () => {
//     stack.push("🍠");
//     const poppedValue = stack.pop();
//     expect(stack.top).toBe(-1);
//     expect(poppedValue).toBe("🍠");
//   });

//   it("returns null when popping from an empty stack", () => {
//     const poppedValue = stack.pop();
//     expect(stack.top).toBe(-1);
//     expect(poppedValue).toBeNull();
//   });
// });

// You can  also test for the opposite of a matcher using `not`:
// it("adding positive numbers is not zero", () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0); // checks for value NOT to be 0
//     }
//   }
// });

// it("two plus two", () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// You can check strings against regular expressions with `toMatch`
// it("there is no I in team", () => {
//   expect("team").not.toMatch(/I/);
// });

// it("but there is a 'stop' in Christoph", () => {
//   expect("Christoph").toMatch(/stop/);
// });

// Arrays and and iterables
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
  "akai kitsune",
];

// You can check if an array or iterable contains a particular item using `toContain`
// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("akai kitsune");
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milk");
// });

// Exceptions
// If you want to test whether a particular function throws an error when it's called, use `toThrow`
function compileAndriodCode() {
  throw new Error("you are using the wrong JDK");
}

// it("compiling android goes as expected", () => {
//   expect(() => compileAndriodCode()).toThrow();
//   expect(() => compileAndriodCode()).toThrow(Error);
//   // you can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndriodCode()).toThrow("you are using the wrong JDK");
//   expect(() => compileAndriodCode()).toThrow(/JDK/);
//   // Or you can match an exact error message using a regexp like below
//   // expect(() => compileAndriodCode()).toThrow(/^you are using the wrong JDK!$/); // Test fails
//   expect(() => compileAndriodCode()).toThrow(/^you are using the wrong JDK$/); // Test Pass
// });

// TESTING ASYNCRONOUS CODE

// * PROMISES
// it("ina of the mountain what is your wisdom", (done) => {
//   // define function
//   function callBack(data) {
//     try {
//       expect(data).toBe("wah");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callBack);
// });

function fetchPromisePeanutButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

// it("the data is peanut butter", () => {
//   return expect(fetchPromisePeanutButter()).resolves.toBe("peanut butter");
// });

// it("the data is async peanut butter", async () => {
//   const data = await fetchPromisePeanutButter();
//   expect(data).toBe("peanut butter");
// });

// * SCOPING
beforeAll(() => console.log("1 - beforeAll 🥓"));
afterAll(() => console.log("1 - afterAll 🍜"));

beforeEach(() => console.log("1 - beforeEach ☕"));
afterEach(() => console.log("1 - afterEach 🍡"));

it("", () => console.log("1 - test"));

describe("Scoped / Nested Block", () => {
  beforeAll(() => console.log("2 - beforeAll 🥞"));
  afterAll(() => console.log("2 - afterAll 🍛"));

  beforeEach(() => console.log("2 - beforeEach 🍵"));
  afterEach(() => console.log("2 - afterEach 🍪"));

  it("", () => console.log("2 - test"));
});
