let newMap = new Map()

newMap.set("Cricket", "sport").set("Apple", "fruit");

for (let [key, value] of newMap) {
    console.log(key + " is " + value);
}

/////////////////////////////////////////////
// Creating a map using Map object
let map = new Map();

// Adding values to the map
map.set("Monday", 1).set("Tuesday", 2).set("Wednesday", 3);

// Logging map object to console
map.forEach((values, keys) => {
    console.log(values, keys);
});
///////////////////////////////////////
//using while loop
let myMap = new Map([['a', 1],
    ['b', 3], ['d', 10]])
let keys = myMap.keys();

while (true) {
    let result = keys.next();
    if (result.done) break;
    console.log(result.value);
}

//////////////////////
// Map.entries()
function iterateMap() {
    let myMap = new Map();
    myMap.set("Cricket", "sport");
    myMap.set("Apple", "fruit");

    Array.from(myMap.entries()).forEach(([key, value]) => {
        console.log(key + " is " + value);
    });
}

iterateMap();
///////////////////////////////////

// Map.values()
let my = new Map();
my.set("Dog", "animal");
my.set("Banana", "fruit");
my.set("Car", "vehicle");

for (let value of my.values()) {
    console.log(value);
}
