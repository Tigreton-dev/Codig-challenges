export function solution1(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, next) => {
      if (vowels.indexOf(next) !== -1) {
        acc[next] = ++acc[next] || 1;
      }
      return acc;
    }, {});
}
