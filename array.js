// // Search the target element in array

function f1(){
    let arr=[55,4,88,2,7,5,99,100]
let target=5

let i=0
while (i<arr.length) {
    if(arr[i] === target){
        console.log(`Element found at index:- ${i}`)
        break;
    }
    i++
}
}
f1()
//////////////////////////////////////
// Two sum of array element 
function f2(){

    let target =9
let arr=[2,7,11,12,16]
let i=0
while (i<arr.length) {
    if(arr[i]+arr[i+1]===target){ 
        console.log(`Sum of number found at index:- ${i} and ${i+1}`)
        break
    }
    i++
}


}
f2()

function f3(){
    let arr=[1,2,3,4,5,8,4]
let i=0
let new_arr=[]
while(i<arr.length){
    if(!new_arr.includes(arr[i])){
        new_arr.push(arr[i])
       
    } 
    else{
        return console.log('Get the duplicate number:-',arr[i])
    }
    i++
}
}
f3()


// ////////////////////////////////
// This function getting values as string as we passing values
// with space so it removes the spaces and return the true length of the
// string values.
Object.prototype.trueLength=function(){
   return this.trim().length
}
function f4(...input){
const n= input.length
let arr=[]
let i=0
while (i<n) {
    arr.push(input[i].trueLength())
    i++
}
console.log(arr)
/////////////////
//Using map
console.log(input.map(curr=>curr.trueLength()))
}
f4('Deva  ','  Shubh  ',' Sam ')


//////////////////////////////////////////////////
function f5(nums) {
    let l=0,r=1
    let max=0
    while(r<=nums.length){
    if(nums[l]<nums[r]){
        let profit= nums[r]-nums[l]
        max=Math.max(max,profit)
    }
    else{
        l=r
    }
    
    r++
    }
    return console.log( max)
    
    };
    f5([7,1,5,3,6,4])