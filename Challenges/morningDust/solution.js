export function solution1(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter((elem) => !args.includes(elem));
}
