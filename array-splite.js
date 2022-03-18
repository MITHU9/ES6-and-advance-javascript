const nums = [2, 3, 4, 6, 8, 9, 12, 23];

const newArray = nums.slice(3, 6);
// console.log(newArray);
// console.log(nums);

const part = nums.splice(2, 4, 15, 10);
console.log(part);
console.log(nums);

const add = nums.join(" ");
console.log(add);