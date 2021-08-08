import { returnDuplicates } from "./index";

const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8, 1];

it("should return an array of duplicate numbers", () => {
  expect(returnDuplicates(arr)).toEqual([5, 2, 1]);
});
