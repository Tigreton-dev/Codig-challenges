export function solution1(arr) {
  let unique_array = arr.filter((elem, index, self) => {
    return index !== self.indexOf(elem);
  });
  return new Set(unique_array);
}

export function solution2(arr) {
  return arr.filter((elem, index, self) => {
    return self.lastIndexOf(elem) === index && self.indexOf(elem) !== index;
  });
}
