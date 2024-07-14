prompt = require('prompt-sync')({ sigint: true });
const promise1 = (count) => {
 return new Promise((res, rej) => {
  // resolve the issue by giving msg that we are passing
  if (count >= 1) res('promise resolve inside promise1');
  // throw an error
  else rej('promise not resolve inside promise1');
 });
};
// const num1 = +prompt('Enter number:-');
// const val1 = promise1(num1);
// console.log(val1);
// if promises not resolve then it thorw an error
// and end the function not gracefully

const promise2 = (num) => {
 //  const num = 2;
 return new Promise((res, rej) => {
  if (num * 2 > 1) {
   res('The promise is resolved..');
  } else rej('promise not resolve inside the promise2');
 });
};

// const p2 = +prompt('Enter number:-');

// const val2 = promise2(p2);
// console.log(val);
//Handling the promises using then method
// it receives the  fullfilled promise then we can access and display that data..
// val2.then((res) => console.log(res));

/////To handle the error gracefully we use catch method to stop the abnormal end of function

const promise3 = (name) => {
 return new Promise((res, rej) => {
  setTimeout(() => {
   if (name && typeof name === 'number') {
    rej('promise not resolve inside the promise3');
   } else {
    res(`promise resolved inside the promise3 with output string}`);
   }
  }, 2000);
 });
};
// const str_name = +prompt('Enter str:-');
// const val3 = promise3(str_name);
// val3
//  .then((res) => console.log(res))
//  .catch(() => console.log('Error occured!..'));

const promise4 = () => {
 // using try catch block
 const bool = true;
 return new Promise((res, rej) => {
  try {
   if (bool) res('promise resolve inside the promise4');
   else rej('promise not resolve inside the promise4');
  } catch (err) {
   rej(`${err.message}`);
  }
 });
};

// const p4 = promise4();
// p4.then((res) => console.log(res)).catch((err) => console.log(err));

//// using promise.all()
// It only runs when all the promises are resolved.
const pr1 = Promise.resolve(3);
const pr2 = 42;
const pr3 = new Promise((resolve, reject) => {
 setTimeout(resolve, 100, 'foo');
});

Promise.all([pr1, pr2, pr3])
 .then((values) => {
  console.log(`promise resolve with values:-`, values);
 })
 .catch(() => console.log('ERROR'));

// using Promise.any()

// It resolve only one of the promise if
// first promise is resolve then it print only that one
// and skips others
Promise.any([pr1, pr2, pr3])
 .then((values) => {
  console.log(`promise resolve with values:-`, values);
 })
 .catch(() => console.log('ERROR'));
