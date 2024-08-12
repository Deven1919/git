

//Type annotation
// Implicit way
 let firstName='Deva'
 // ts has feature Type inference which 
 // automatically detect the type of value 
 // is assign to variable
 
 // Explicit way
let lastName:string='Smith'
// here we define the type annotation
// that we want this value to hold
// only string type of values

// other special types
// any type
let value 
// if we not assign value to variable and
// not define it's type then the variable
// has by default of type any
// which is not ideal way
// their is an alternate way to handle this

// unknown type
let new_value:unknown
// we don't to set any type to variable
// rather than let that variable to be 
// of type any assign the type as unknown
// as we dont want any type of value.
// it an alternate way to to allow
// ts to do it' static type checking

// never type
let num:never
// it throw an error and end the execution
// of program
// it help to reduce the union type till 
// thier nothing left to perform 
// then the type of that funtion is of
// type never.

// Arrays
// We can declare arrays in ts in two ways
// Implicit and explicit way

// Implicit way
const arr=[]
//the usual way to defining the array as 
// same in javascirpt
// ts does type inference and automatically
// determine the type of expression that
// we are assigning to the variable.

// Explicit way

const new_arr:number[]=[]
// We define this array with type
// of number[] as we only allow to 
// number value inside the array
// not any other type of value
const str_arr:string[]=[]
// Here we can add only string type of values


// Tuples
const tuples:[number,string,boolean]=[25,'A',true]
// Same as defining the array
// only difference is that with tuples
// we can predefined the size of array
// and it allows to enter the values with types
// also we can add values with type of sequence
// ex: what to enter values in sequence
// [number,string,boolean]
// If mess with sequence then it gives us the 
// error
// as with tuples we predefined the size
// so we are allowed to enter the value exceed 
// the size of tuples


// Object types
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  // same as object declaration 
  // but here we object declaration
  // for setting and adding values to 
  // properties
  // also it allow us to define the optional 
  // properties as well
  const new_car:{
    name:string,
    model:string,
    year:number,
    manufacturer?:string|number
  }={
  name:'TATA',
  model:"Nexon",
  year:2024
  }
  // as we define one of the properties to 
  // optional and we not assign any value to 
  // it ts not gives us the error as it is 
  // set as optional

// Index signature
const nameAgeMap: { [index: string]: number } = {};
// the key is of type string and the value is
// of type number
// also it is the other way to declare 
// key and value pair with objects.
nameAgeMap.Jack = 25; // no error

//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);


// Enums
// It define the set of name constant
// or it allow us to define the name constant
// the declaration of enum same as class declaration
// only difference is that enum keyword is used with namespace
// thier are 2 type of Enums in ts
// numeric and string
// Numeric
enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  console.log(CardinalDirections.North,CardinalDirections.East,CardinalDirections.South,CardinalDirections.West)
// Numeric enums are auto increment
// if they are not initialize then
// the first enum property set its value 0
// by default and its not compulsory
// to initialize the numeric enum

// String enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // 404
  console.log(StatusCodes.NotFound);
  //  200
  console.log(StatusCodes.Success)
// have to set the value of string enum
// other wise it going to throw an error

// Type alias
// allow us to define the type with custom names
// type alias can be of any type primitive or non-primitive
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}


// Interface
// The Interface declaration is same as enum and class
// declaration only the interface keyword is used with
// custom name
interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle);
// also it allow us to add properties 
// on interface, and we can implement 
// the interface on class and other interface as well


// Union type
// it allow us to add more than one type
// but their is catch the type we use with union
// if both type have same method available 
// on both of them then we can peform the 
// operation other wise it give us the error
// to handle this we use the concept 
// narrowing to handle it.
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  
  printStatusCode(404);
  printStatusCode('404');

//   function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`)
 // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
//   }

// Classes in ts
// Has same declaration as class in javascript

class Person {
    name:string
   constructor(name){
    this.name=name
   }
  }
        
  const person = new Person("Jonas");
 
  
  console.log(person);

  // Generics

  // allow to create multiple reusable block
  // which accepst any type of data as input and
  // return the output according to the type of data that
  // it receive
  // if we want to receive more than one value
  // then we can use the The initial of character as parameter
  // for receiving the data 
  function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
  //