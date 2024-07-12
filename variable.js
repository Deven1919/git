// // Variable
// // Their are three types of variable in javascirpt
// // let , const , var

// // Normal variable declaration using let
let stack = 'Node.js';
console.log(stack);

// Using let
//1] If we declare any variable using let then we can reassign new value
// to that variable if it is declare using let then type of data doesn't matter
// while assigning the new value;
// // Assign the string value to name variable
let name = 'Deva';
console.log(name);
//Re assign the new value to name variable with different type of data i,e: number
name = 25;
console.log(name);

//2] If we declare variable using let inside the block so it cannot be accessed
//   outside of that block
let num = 1;
if (num >= 1) {
 let num2 = 2;
 console.log(num);
 console.log(num2);
}
//console.log(num2);
// // It throw an error that it is not defined reason it defined inside the
// // block so the scope of that variable is limited to that block where it
// // declared and defined we cannot access it outside the of that block also
// // we are not able to reassign the new value as well to that variable
// // as it is block-scope so it not accessed outside of where it is declare

// with function using let
function result1() {
 let variable_with_let = 'Using let';
 console.log(variable_with_let);
}

result1();
// So if we declare variable using let inside the function scope so cannot be access outside
// scope of that function but if we can re-declare the variable or reassign the new value
// to that variable after that we can access them.

//console.log(variable_with_let);
// Throw and error that it is not defined as it is function scoped

// Re assign the new value to same variable which is declare inside the function
variable_with_let = 'outside the function';
console.log(variable_with_let);
// After that we are able to access it.

// ///////////////////////////////////////////////////////////////////////////////////

// Normal variable declaration using const
// Usually we define the value which is not gonna change through whole
// code execution with const as we usually assign the constant value to const variable
const contact = 1234567899;
console.log(contact);

// Using const
//1] If we declare any variable using const then we cannot  reassign new value
// to that variable as if it is declare using const it also not gonna change
// throught all execution of code
// Assign the const value to pi variable
const pi = 3.14;
console.log(pi);

//2] If we declare variable using const inside the block so it cannot be accessed
//   outside of that block
const num1 = 1;
if (num1 >= 1) {
 const num2 = 2;
 console.log(num);
 console.log(num2);
}

// console.log(num2);
// It throw an error that it is not defined reason it defined inside the
// block so the scope of that variable is limited to that block where it
// declared and defined we cannot access it outside the of that block.

//with function using const

function result2() {
 const variable_with_const = 'Using const';
 console.log(variable_with_const);
}

result2();
// So if we declare variable using const inside the function scope so cannot  access outside
// scope of that function but if we cannot re-declare the variable or reassign the new value
// to that variable if it is declare with const

//console.log(variable_with_let);
// Throw and error that it is not defined as it is function scoped

//////////////////////////////////////////////////////////////////////////////////////

// Using var
//1] If we declare any variable using var then we can reassign new value
// to that variable. if it  declare using var then type of data doesn't matter
// while assigning the new value;
// Assign the string value to name variable
var first_name = 'Deva';
console.log(first_name);

//Re assign the new value to name variable with different type of data i,e: number
first_name = 25;
console.log(first_name);

var num3 = 1;
if (num3 >= 1) {
 var num4 = 4;
 console.log(num3);
 console.log(num4);
}
console.log(num4);
// Here the variable declared using var is not block scope so we are able
// to get access of value which is declared inside the block.
// i,e num4 =4

///with functions using var
function result3() {
 var variable_with_var = 'Using var';
 console.log(variable_with_var);
}

result3();
// console.log(variable_with_var);
variable_with_var = 'outside the function';
console.log(variable_with_var);
// If it is reassign with new value then we are able to access it

// console.log(variable_with_var);
// // It throw an error that it is not defined reason it defined inside the
// // function so the scope of that variable is limited to that function where it
// // declared and defined we cannot access it outside the of that function.
//// if it is declare using var
