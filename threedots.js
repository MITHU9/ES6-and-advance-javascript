const a = [4, 5, 7, 12, 35];
const b = [8, 0, 24, 3];
const c = [64, 56];
//const numbers = a.concat(b).concat([2]).concat(c);
const numbers2 = [...a, ...b, 2, ...c];
console.log(numbers2);
const Number = [56, 53, 73, 23];
const maxNum = Math.max(...Number);
console.log(maxNum);
