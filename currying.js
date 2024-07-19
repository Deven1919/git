// Currying in javascript can be acheived using two ways
// Using closure and bind()

// Currying using closure
function f1(b) {
 const a = 5;
 return (b) => {
  console.log(a * b);
 };
}

const val1 = f1();
val1(5);

////////////////////////////////////////

function f2(a, b) {
 const c = 8;
 return (b) => {
  return () => {
   console.log(a + b + c);
  };
 };
}

const val2 = f2(2);
const val = val2(4);
val(8);
///////////////////////////////////////////////////

function f3() {
 return (arr) => {
  let i = 0;
  let max = Number.MIN_VALUE;
  while (i < arr.length) {
   max = Math.max(max, arr[i]);
   i++;
  }
  console.log(`Max: ${max}`);
 };
}
const val3 = f3();
val3([2, 55, 7, 8, 66, 5, 4, 1, 22, 88]);
///////////////////////////////////////////////
function f4(a) {
 return (b) => {
  return (c) => {
   return (a + b) * c;
  };
 };
}
console.log(f4(1)(2)(3)); // 6
////////////////////////////////

function f5(a) {
 return (b) => {
  return (c) => {
   sum = a + b + c;
   if (sum % 2 === 0) {
    console.log("It's even number.");
   } else {
    console.log("It's odd number");
   }
  };
 };
}
f5(1)(2)(3); // 6

// Using bind()
// We can acheive currying using bind()

function b1(b) {
 const a = 5;
 return (b) => {
  console.log(a * b);
 };
}

const value1 = f1().bind();
value1(6);
//////////////////////////////////////////////
function b2(a, b) {
 const c = 8;
 return (b) => {
  return () => {
   console.log(a + b + c);
  };
 };
}

const value2 = b2(2).bind();
const value = value2(4);
value(8);
////////////////////////////////////////////////
function b3() {
 return (arr) => {
  let i = 0;
  let max = Number.MIN_VALUE;
  while (i < arr.length) {
   max = Math.max(max, arr[i]);
   i++;
  }
  console.log(`Max: ${max}`);
 };
}
const value3 = f3().bind();
value3([2, 55, 7, 8, 66, 5, 4, 1, 22, 88]);
////////////////////////////////////////////////
function b4(a) {
 return (b) => {
  return (c) => {
   return (a + b) * c;
  };
 };
}
const a = b4.bind(null, 1);
const b = a();
const c = b(3);
console.log(c(2));
