const returnDuplicates = require('./index.js');

it("should return an array of duplicate numbers", () => {
  expect(
    returnDuplicates(
      [
        "possum",
        "trollo",
        12,
        "safari",
        "hotdog",
        92,
        65,
        "grandma",
        "bugati",
        "trojan",
        "yacht"
      ],
      "yacht",
      "possum",
      "trollo",
      "safari",
      "hotdog",
      "grandma",
      "bugati",
      "trojan"
    )
  ).toEqual([12, 92, 65]);
});
