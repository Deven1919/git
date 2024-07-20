const prompt = require('prompt-sync')();
// Generate Function generates three
// different numbers in three calls
function* f1() {
 yield 10;
 yield 20;
 yield 30;
}

// Calling the Generate Function
// let gen = f1();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* f2(num) {
//  while (true) {
//   yield num;
//  }
// }
// const entry = prompt('Enter number:-');

// const val1 = f2(entry);

// for (let i = 1; i <= 10; i++) {
//  console.log(val1.next().value * i);
// }
/////////////////////////////////////////////////////
// function* f3() {
//  let num = 1;
//  while (true) {
//   yield num++;
//  }
// }
// let val2 = f3();
// let i = 0;
// while (i < 10) {
//  console.log(val2.next().value);

//  i++;
// }

function* f4() {
 let num = 1;
 while (true) {
  yield num++;
 }
}
const val3 = f4();
let sum = 0;
for (let index = 0; index < 10; index++) {
 sum += val3.next().value;
}
console.log('Sum of all natural number:-', sum);

/// prime number using generators
function* f5(num) {
 while (true) {
  yield num++;
 }
}
const entry = prompt('Enter number:-');

const val4 = f5(entry);

for (let i = 1; i <= 10; i++) {
 const value = val4.next().value;
 let j = 2;
 let count = 0;
 while (j < value) {
  count = 0;
  if (value % j === 0) {
   count++;
   break;
  }
  j++;
 }
 if (count === 0 && value > 1) {
  console.log(value);
 }
 // console.log(val1.next().value * i);
}
