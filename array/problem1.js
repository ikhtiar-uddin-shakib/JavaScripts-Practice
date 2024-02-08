function countNumber(number, find) {
  let i,
    count = 0;
  for (i = 0; i < number.length; i++) {
    if (number[i] === find) {
      count++;
    }
  }
  return count;
}

let number = [5, 6, 11, 12, 98, 5];
let find = 5;
console.log(countNumber(number, find));
