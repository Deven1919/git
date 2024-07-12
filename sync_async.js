// Javascript is synchronous in nature by default
// So due to this behaviour it wait till the previous task to complete
// if the task take more time to execute so it not going to move on next line
// so to handle or resolve this behaviour we use callback to handle the synchronous
// behaviour of javascript and promises as well
console.log('Hello'); // this code going to execute immediately

const first = () => {
 setTimeout(() => {
  console.log('First function');
 }, 2000);
};
const second = () => {
 setTimeout(() => {
  console.log('Second function');
 }, 2000);
};
first();
second();

console.log('Execute async way');
// code outside the function going to execute immediately reason it execute in async way.
// code inside the function take time to execute as
// execution is going in sync way

//// With the help of promise we can execute the code in async way.
const third = () => {
 new Promise((resolve, rej) => {
  let x = 0;
  if (x == 0) {
   resolve('Answer is correct');
  } else {
   rej('Not correct');
  }
 }).then((data) => console.log(data));
};

third();
