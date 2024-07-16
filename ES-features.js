// ES 2015
// Object destructuring
const obj1 = {
 name: 'Deva',
 contact: 1234567899,
 address: 'ABCDE',
 city: 'Mumbai',
 native_place: 'Pune',
};
// first way to access the  property inside the object
// console.log(obj1.name, obj1.city);
// // another way to access property inside obj using destructuring
// // alias the variable // name:first_name
// const { name: first_name, city } = obj1;
// console.log(first_name, city);

const obj2 = {
 std_name: 'A',
 roll_no: 1,
 center: 'Mumbai',
 gender: 'M',
};
// console.log(obj2.center, obj2.std_name, obj2.roll_no, obj2.gender);
// // another way using object destructuring
// const { center, std_name, roll_no, gender } = obj2;
// console.log(center, std_name, gender, roll_no);

// // update the values of obj.
// let val = { ...obj1, name: 'Deven', city: 'Gujarat' };
// console.log(val);

// Spread operator
// with the help of spread operator we can copy value of one array into another array
// we can concatinate two array into one array
// let arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const new_arr = [...arr1]; // create copy from original array
// const one_array = [...arr1, ...arr2]; // concatinate two arrays into one array
// console.log(new_arr);
// console.log(one_array);
// const numbers = [23, 55, 21, 87, 56];
// let maxValue = Math.max(...numbers);
// console.log(maxValue);

// Array destructuring
// It extract the values from array and assign the value to declared variable
let arr = [1, 2, 3, 4, 5];
let flat = [
 [2, [4]],
 [5, 7],
 [9, 8],
];
const [[a1, [a2]], [b1, b2], [c1, c2]] = flat;
console.log(a1, a2, b1, b2, c1, c2);
// const [a, b] = arr;
// console.log(a, b);
const [a, b, c, d, e] = arr;
console.log(a, b, c, d);

// rest parameter
// with this operator we can receive all the args rather than receiving individual element
const converter = (...input) => {
 let value = [];
 let i = input.length - 1;
 while (i >= 0) {
  value.push(input[i]);
  i--;
 }

 value.splice(2, 0, 'and');
 console.log('Hi ' + value.join(','));
};
converter('A', 'B', 'C');

// Default parameter
// If not args are passed to function then it use default value
// to avoid uneccesary error during execution..

const greetings = (name = 'Jonas') => {
 console.log(`Hey ${name} `);
};
greetings();

// String literals
// we can get access of value with string literals
let name = 'Deva';
console.log(`Good morning ${name}`);

// Optional chaining
// if works the same as if-else statement but in javascript
// it is one liner to check the given conditions
// first condition if it is true then it return the statement after ? otherwise the
// condition is false then it return the statement after :.
const age = 20;
console.log(age > 30 ? 'The age is greater than 20' : 'not greater than 20');

//Array.flat()
// it combine the group of array into one array
let flat_arr = [
 [1, 2],
 [3, 4],
 [5, 6],
];
console.log(flat_arr.flat());
// Array.flatMap()
// It combine array into one group and iterate through each and every element in array
flat_arr = [1, 2, 3, 4];
console.log(flat_arr.flatMap((curr) => curr * 2));

// Nullish Coalesing operator
//it return the value on the right side when the first operand is null or undefined
// or vice versa.
let num = null;
let str = 'missing';
let result = num ?? str;
console.log(result);

// Logical AND and OR operator assigment

// if both the condition are true then it return the result and assign the value to variable.
let n1 = 5;
let res = (n1 &&= 5);
console.log(res);

n1 = null;
res = n1 &&= 5;
console.log(res);

// OR
// if any one of the condition is true then it return result
n1 = 7;
res = n1 ||= 10;
console.log(res);

n1 = null;
res = n1 ||= 7;
console.log(res);
