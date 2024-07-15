// //// Using array

//1] array.push()
// This method  add the element at the end of an array
const arr1 = [1, 2, 3, 4, 5];
const array1 = arr1.push(6);
console.log(arr1);
console.log(array1);

// array.pop()
// This method remove the element from the end of an array.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = arr2.pop();
console.log(arr2);

//Array.shif()
// This method remove the element from the start
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.shift();
console.log(fruits);

//Array.unshift()
// This array method adds the element add the start of an array.
const sports = ['cricket', 'baseball', 'football', 'videogames'];
sports.unshift('shooting');
console.log(sports);

// Array.delete()
// This method delete element at specific position
// If access the deleted value then given output result is undefined
// reason value is deleted thier is not value so the output is undefined.
// using forEach
const alpha = ['A', 'B', 'C', 'D', 'E'];
// const val = delete alpha[0];
alpha.forEach(() => delete alpha[0]);

console.log(alpha);
// Array.concat()
// It concat/connect the two array and add it into one array
//The concat() method does not change the existing arrays. It always returns a new array.
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const concat = a.concat(b);
console.log(concat);

//Mutate the original array
// length of array not changed after the operation
// not add any new element in the existing array
//// first parameter select the position  and second parameter
/// tells which element gonna copy and change the existing value.
const fruit = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
// const val1 = fruit.copyWithin(2, 0);
console.log(fruit);
const val2 = fruit.copyWithin(2, 0, 3);
console.log(val2);

//Array.flat()
//The flat() method creates a new array with sub-array elements concatenated into one individual array.
const flat_arr = [
 [1, 2],
 [3, 4],
 [5, 6],
];
console.log(flat_arr.flat());

//Array.splice()
// first parameter specify the position where we want to add element
// second parameter denote how many we want to delete at specific position
// third parameter denote element to be added
// It mutate the original array/ changes the values of original array.
let num = ['Banana', 'Orange', 'Apple', 'Mango'];

num.splice(2, 0, 'Lemon', 'Kiwi'); // add the element at position 2
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango'];// new array with added values also change
// the values of original array.
console.log(num);

num.splice(4, 1);
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango'];
// At position 4 we delete the 1 element and get the new array valus.
console.log(num);

// Array.length()
//num=['Banana', 'Orange', 'Apple', 'Mango'];
console.log(num.length);

// Array.slice()
// This method create the copy of original array
// Not change the value of original array
// with help of this method we can extract element from specific range
// ex: 1-10 return the element from 1-9
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number.slice(1, 5)); // return new array

console.log(number); //// Not mutate the original array.

// Array.join() and Array.toString()
//Array.join() method join all the array-element into one string by specifier specified inside join().
//Array.toString() convert array into string

console.log(number.toString(), typeof number.toString()); //convert array into string
console.log(number.join('-')); // convert array into string and join it with specifier.
// Array.at()
// with this method we can get the values of specific index.
console.log(number.at(1));

////////////////////////////////////////////////////////////////////////////////////////////////
// map,filter,reduce

//Array.map()
//It iterate through each and every element in array perform the operation given by user
//and return the new array
//It not change the values of original array
//
const original_arr = [1, 2, 3, 4, 5, 6];
const map_value = original_arr.map((curr) => curr * 2);
[2, 4, 6, 8, 10, 12]; // returns the new array
console.log(map_value);
[1, 2, 3, 4, 5, 6];
console.log(original_arr); // not mutate the values of original array.

// filter
// this method works same as map method not mutate the original array
// returns new array
// if condition become true then it add that element into new array
// or other wise not adds into new array.
const filter_value = original_arr
 .map((curr) => curr * 2)
 .filter((curr) => curr > 4);
console.log(filter_value);

// reduce()
//This method has two args 1]accumulator with collect and all the values
// 2] current element we have to return the value of accumulator also
// we can initialize the value of accumulator with any value.
const reduce_value = original_arr.reduce((acc, curr) => (acc += curr), 0);
console.log(reduce_value);

// forEach()
// This method iterate through all the element in array
// It changes the values of original array
// Not returns the new array

const new_arr = [2, 4, 6, 7];
const forEach_value = new_arr.forEach((curr) => curr * 3);
console.log(forEach_value); // not return the new array ,change the value of original array.

// Array.sort()
// this method arrange the element in ascending or desecding order
// By default it sort element in ascending order.
console.log(original_arr.sort());
console.log(original_arr.sort((a, b) => b - a));

//Array.reverse()
// print array in with all the values in reverse form
console.log(original_arr.reverse());

// every() and some()
//
original_arr.every((curr) => curr >= 1); // this method returns true when all the condition statisfied
original_arr.some((curr) => curr > 4); // this method returns true when one of the condition statisfied

//// Array.entries
//// It give the index value and current values of array
///  with destructuring we can save the values in variable and return that values.
const fruit_arr = ['Banana', 'Orange', 'Apple', 'Mango'];

// for (let key of fruit_arr.entries()) {
//  const [index, value] = key;
//  console.log(index, value);
// }
for (let [key, value] of fruit_arr.entries()) {
 console.log(key, value);
}

// Array.keys
// return the index of array values
for (const key of fruit_arr.keys()) {
 console.log(key);
}

// Array.from()
// It returns the values with of length
// and iterate through all the value and return the value
//
Array.from({ length: 10 }, (_, curr) => {
 console.log(`${curr + 1}`);
});
