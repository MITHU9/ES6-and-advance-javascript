const numbers = [2, 3, 4, 5, 6, 7, 8];

// const result = numbers.map(function(element, index, array){
//     return element*element;
// })
// console.log(result);
// const square = numbers.map(x => x * x);
// console.log(square);

const result = numbers.filter(x => x > 4);
const find = numbers.find(x => x > 5);
console.log(find);
console.log(result);