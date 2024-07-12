// Their are 3 types of function in javascript

//Function Declaration

//

// let sum = 0;
// function Sum() {
//  let i = 0;
//  while (i <= 10) {
//   console.log(i);
//   sum += i;
//   i++;
//  }
//  return sum;
// }
// const val1 = Sum();
// console.log(val1);
// // With function declaration we declare it with function keyword followed by function name
// //it does not require any variable to store the result, if we return the value
// // then we can save or assign that value to variable
// // It can be executed before they declared in code due to hoisting.

// // Function expression

// // So as every expression produce a value so  the function expression also gonna
// // produce the value and that value we can assign to variable for further use.
// // we don't have to declare name of function after function keyword as it is expression
// // it returns the value and we are assigning that value to the variable
// // i,e table
// let sum2 = 0;
// const table = function (n) {
//  let i = 1;
//  while (i <= 10) {
//   // console.log(n*1)
//   sum += n * i;
//   i++;
//  }
//  return sum;
// };
// const val2 = table(2);
// console.log(val2);

// // Arrow function
// // It work the same as other two functions and it cannot be called before their declaration
// // because they are not hoisted
// // as it is also an expression it returns value and that value
// // we can assign it to variable for further use
// // arrow function with parenthesis directly returns a value
// const addition = (a, b) => a + b;
// const greetings = (name) => {
//  console.log(`Hey, ${name}`);
// };
// greetings('Jonas');
// const val4 = addition(4, 3);
// console.log(val4);

// Higher order function
// Receives the other function as argument
const lowerCase = function (str) {
 return str.replace(/ /g, '').toLowerCase();
};
// console.log(str('Javascript is Best'));

const upperCase = (str) => {
 return str.toUpperCase();
};
// console.log(upperCase('Javascript is Best'));

const transform_function = (fn, str) => {
 console.log(
  `Original string:- ${str} \n String transformation by ${
   fn.name
  } function: - ${fn(str)}`
 );
};

transform_function(upperCase, 'javascript is best');
transform_function(lowerCase, 'javascript is best');
