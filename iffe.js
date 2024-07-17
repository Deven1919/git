(function (n) {
 let a = 0,
  b = 1;
 let next;
 let i = 1;
 console.log(`${a}\n${b}`);
 while (i <= n) {
  next = a + b;
  console.log(next);

  a = b;
  b = next;
  i++;
 }
})(5);
/////////////////////////////////

let result = (function () {
 let arr = [1, 2, 3, 4, 5, 6, 7, 8];
 return arr.reduce((acc, curr) => acc + curr);
})();
console.log(`Total:-`, result);

//IFFE helps to create the closure
// this is the example of using IIFE with closure
(function () {
 let count = 1;
 let a = 10,
  b = 10;
 const res = () => {
  let c = 25;
  const sum = a + b + c;
  console.log('Sum of number inside the inner function:', sum);
  console.log('Inside the innter function:', count);
 };
 count++;
 return res;
})()();

//largest and second largest element in array
(function (arr) {
 let max = Number.MIN_VALUE;

 arr.map((curr) => {
  max = Math.max(max, curr);
 });
 const second_largest = arr.sort()[arr.length - 2];
 //  console.log('Max value:', max);
 console.log(`Max: ${max}\nSecond-largest: ${second_largest}`);
})([2, 4, 77, 2, 5, 66, 88, 4]);

//// Transform the string
/// return the first letter of the string into capital..

(function (str) {
 const val = str
  .split(' ')
  .map((curr) => curr.at(0).toUpperCase().concat(curr.slice(1, curr.length)));
 //console.log(str.at(0).concat().slice(str.at(1), str.length));
 console.log(val);
})('javascript is best');
