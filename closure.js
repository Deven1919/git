function numberGenerator() {
 let num = 1;
 // Inner function can access the variable declared in parent function.
 function checkNumber() {
  console.log(num);
  console.log(name);
 }
 const name = 'Deva';
 num++;

 return checkNumber;
}
// We are able to access the value of parent function inside the child function as if the parent
// function is called and finish its execution but the

const number = numberGenerator();
number(); // 2

let x = 10;
function A(a) {
 let b = 20;

 function B(c) {
  let d = 30;
  return C(x + a + b + c + d);
 }

 function C(e) {
  return e * -1;
 }

 return B;
}

let res = B(5); // Closure
res(); // result
