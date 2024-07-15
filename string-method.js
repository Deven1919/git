////String methods

// String.length
// return the lenght of array
let str = 'Deva';
console.log(str.length); // result=4

//String.charAt()
// return the value of specified index
str = 'ABCD';
console.log(str.charAt(0)); // result='A'

// String.split()
// this method return an array with sperate individual values seperate by commas
// it convert string into array
str = 'A,B,C,D,E,F';
console.log(str.split(' '));
//String.charCodeAt()
str = 'ABCDE';
console.log(str.charCodeAt()); // return the asscii value of first element

//String.at()
//return the value at specifice index
str = 'fsgafdfg';
console.log(str.at(0));

//String.slice()
// return the value from specified range
str = 'ABCDEFGH';
console.log(str.slice(1, 4));

//String.substring()
// return the substring with value specified in method
str = 'Apple, Banana, Kiwi';
console.log(str.substring(7, 13));

// String.toUpperCase()
// return capitalize string
str = 'javascript is best';
console.log(str.toUpperCase());

//// String.toLowerCase()
// return lowerCase string
str = 'JAVASCRIPT';
console.log(str.toLowerCase());

//String.concat()
const str1 = '12345';
const str2 = '678910';

const val = str1
 .concat(str2)
 .split('')
 .map((i, curr) => curr);

console.log(val.slice(1, val.length).join(','));

// String.trim()
// remove spaces in string
str = 'A B C D E    ';
console.log(str.length); // original length of string 13
console.log(str.trim().length); // after removing spaces length 9

// String.padStart()
// add the element till the specified length at the start
str = '1';
console.log(str.padStart(2, '0'));

// String.padEnd()
// add the element till the specified length at the end
str = '1';
console.log(str.padEnd(2, '0'));

// String.repeat()
//repeat() returns a new string with a number of copies of a string
// we have to specify how many time we want to repeat the string
str = 'Deva';
console.log(str.repeat(2));

// String.replace()
// it has two parameter
// first what we want to replace
// second with what value to want to replace

str = '1 2 3 4';
console.log(str.replace(/ /g, '')); // result=1234

//String.replaceAll()
// it replace all the instance with the value we want to replace with
str = 'I love Cats. Cats are very easy to love. Cats are very popular.';
console.log(str.replaceAll('Cats', 'Dogs'));

// String.indexOf()
let text = 'Javascript is Best';
console.log(text.indexOf('is')); // retuns the index of specified value=11

// String.search()
str = 'I love Cats. Cats are very easy to love. Cats are very popular';
console.log(str.search('are')); // returns the first index occurence=18

// String.includes
str = 'Javascript is good';
console.log(str.includes('is')); // returns true if value match with the string value

//String.match()
str = 'Good morning..Good';
const iterator = str.matchAll('Good');
console.log(Array.from(iterator)); // return the how many time the given word occur in string with thier
// index value
