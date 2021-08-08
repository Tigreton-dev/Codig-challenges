const vowelCount = require('./index.js');

const str = "I Am awesome and so are you";

it("Should return an object with the time of each vowel appears in the string", () => {
  expect(vowelCount(str)).toEqual({ i: 1, a: 4, e: 3, o: 3, u: 1 });
});
