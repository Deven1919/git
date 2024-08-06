const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
// Displaying the graph representation using adjacent list

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}



// Add edge, undirected
function addEdge(origin, destination) {
   // console.log(origin,destination)
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route)
 )
//console.log(adjacencyList)// show the node connectd with other nodes via edges using undirected graph
///////////////////////////////////////////////////////////////////////////////////////////

// Search element
function bfs(value){
    let validate=new Set()
let queue=[value]
while(queue.length>0){
 const airport=queue.shift()
 const destinations=adjacencyList.get(airport)
 console.log(destinations);

 for(let destination of destinations){
    if(destination ==="BKK"){
        console.log('found it')
    }

    if(!validate.has(destination)){
        validate.add(destination)
        queue.push(destination)
       // console.log(destination)
    }
 }
console.log(validate)
}

}

//bfs("PHX")


//// Traversal

function dfs(val,visit=new Set()){

visit.add(val)
const destination= adjacencyList.get(val)
console.log(destination)
for(let destinations of destination){
    console.log(destinations)
    
    if(destinations ==="BKK"){
        console.log("Get the value")
        return
    }

    if(!visit.has(destinations)){
       dfs(destinations,visit)
     //  console.log(destinations)
    }
}




}
dfs('PHX')