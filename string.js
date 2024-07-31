
// // Strings
const mergeAlternately = function(word1, word2) {
    let loop_array= word1.length >word2.length ? word1.length:word2.length
//console.log(loop_array)
let str=''
let i=0

while(i<loop_array){
    if(word1[i]) str+=word1[i]
    if(word2[i])str+=word2[i]
    i++
}
return console.log(str)
};

mergeAlternately("ab","pqrs")//apbqrs
/////////////////////////////////////////////////////////////////////
const isSubsequence = function(s, t) {
    const t_length = t.length;
     let subsequence = 0;
     for (let i = 0; i < t_length; i++) {
       if (s[subsequence] === t[i]) {
         // ! if it is matching, increment subsequence
         subsequence++;
       }
     }
     return console.log( subsequence === s.length
 )  };
  
   isSubsequence("abc","ahbgdc")

//    /////////////////////////////////////////////////
// Anagram

function toString(str){
return [...str].sort((a,b)=>a.localeCompare(b)).join("")

}

function f3(str1,str2){

let s=toString(str1)
let t=toString(str2)
return s===t ? console.log("True") : console.log('false')
}

f3('anagram','nagaram')
f3('cat','rat')


// calculate the ascii of alphabhet

function f4(input){

let i=0
let arr=[]
while(i<input.length){
 arr.push(input[i].charCodeAt())
i++
}

return arr

}

const ascii=f4('Hello')
console.log(ascii)

/////////////////////////////////////
const strStr = function(haystack, needle) {
    const val=haystack.match(needle)
    return haystack.match(needle) ? val['index'] : -1

};

const str=strStr("leetCode","leeto")// -1
const str1=strStr('hello','ll')// first occurence at index 2
console.log(str,str1)