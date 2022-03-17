// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function myFun(num){
//     return num*2;
// }

// function type ES6

const doubleIt = num => num*2;
const add = (x, y) => x + y;  
const total = add(5, 7);
console.log(total);
const result = doubleIt(5);
console.log(result);

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    return sum*diff;
}
const result1 = doMath(8, 6);
console.log(result1);