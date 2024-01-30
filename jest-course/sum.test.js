const { sum, myFunction } = require("./sum");
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

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

/** toEqual()
 *  when dealing with objects
 */

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

/** toBeFalsy()
 * when dealing with falsy values
 * null
 * undefined
 * 0
 * ""
 * NaN
 */

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy;
});

/** toBeTruthy()
 *  when dealing with truthy values
 * true
 * present value
 */

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

/** toThrow()
 * error handling test
 */

test("throws on invalid input", () => {
  expect(() => {
    myFunction("asdfgjkl");
    // myFunction(99);
  }).toThrow();
});
