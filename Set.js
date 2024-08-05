function f1(...inputs){
console.log([...new Set(inputs)])// removes the duplicates
const set= new Set()
set.add("Pizza").add('Roti').add("Pizza").add("Browniee")//result [pizza,roti,browniee]

console.log(set.has("Roti"));
console.log(set.size);
console.log(set.delete('Browniee'))
console.log(set.size)

}
f1(2,5,7,2,6,4,5)
/////////////////////////////////////////////////////

function f2(){

    let set1 = new Set();

    set1.add(50);
    set1.add(30);
    set1.add(40);
    set1.add(20);
    set1.add(10);
    
    // using entries to get iterator
    let getEntriesArry = set1.entries();
    
    // each iterator is array of [value, value]
set1.forEach((i,curr)=>console.log(`${curr}`))
const val=[...new Set(set1)].map((i,curr)=>`[${i+1} : ${curr}]`)
console.log(val)
    


}
f2()
/////////////////////////////////////////////////////

function f3(){
    let set1 = new Set();

// adding element to the set
set1.add(50);
set1.add(30);
set1.add(40);
set1.add("Hello");
set1.add("Hi");

// getting all the values
let getValues = set1.values();

console.log(getValues)
for(let key of getValues){
    console.log(key)
}


}
f3()


function f4(){
    let set1 = new Set();

    set1.add(50);
    set1.add(30);
    set1.add(40);
    set1.add(20);
    set1.add(10);
    const values= set1.entries()
    // using Object.entries()
       
    for(let [_,key] of values ){
        console.log(key)
    }


}
f4()

////////////////////////////////////////

function f5(){
// sorting set element
// Insert new elements in the
// set using add() method
let myset= new Set()
myset.add(3);
myset.add(2);
myset.add(9);
myset.add(6);

// Print the values stored in set
console.log(myset);

// Create a new array to store set elements


let myArray = Array.from(myset)
console.log(myArray)
myArray.sort()
console.log(myArray)
// myset.clear()
// myset = new Set(myArray);
// console.log(myset)



}
f5()