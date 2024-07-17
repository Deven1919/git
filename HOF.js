// higher order function using filter()
// As filter is method it receives callback function as
// args so its also an higher order function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let prime = [];
const val = arr.filter((curr) => {
 let j = 2;
 let count = 0;
 while (j < curr) {
  count = 0;
  if (curr % 2 == 0) {
   count++;
   break;
  }
  j++;
 }
 if (curr > 1 && count == 0) {
  prime.push(curr);
 }
});
console.log(prime);

// Using map()

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;
const res_map = arr
 .map((curr) => curr * 2)
 .map((curr) => {
  max = Math.max(max, curr);
  min = Math.min(min, curr);
 });

console.log(`Max : ${max} \nMin : ${min}`);

// Using reduce()
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res_reduce = arr
 .map((curr) => curr * 2)
 .reduce((acc, curr) => {
  acc += curr;
  return acc;
 });
console.log(res_reduce);
/////////////////////

function Initial(arr, fn) {
 const nameList = [];
 for (let i = 0; i < arr.length; i++) {
  nameList.push(fn(arr[i]));
 }
 return nameList;
}
const names = ['Deva', 'John', 'Sam', 'Vk', 'Ms'];
const nameLength = Initial(names, (item) => {
 return item.at(0).toUpperCase();
});
console.log(nameLength);

const transform = (fn, str) => {
 console.log(`Original String:- ${str}`);
 console.log(`Transform String with function:- ${fn(str)}`);
};

transform((str) => {
 const [first, ...others] = str.split(' ');
 return [first.toUpperCase(), ...others].join(' ');
}, 'Javascript is best');
