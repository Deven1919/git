// Implementing stack using classes
// performing push-pop operations 
// class Stack{
//     constructor(){
//         this.stack=[]
        
//     }
//     push(element){
//      return this.stack.push(element)
        
//     }
//     pop(){
//         if(this.isEmpty()){
//            console.log("Stack is empty");
//         }else{
//          return this.stack.pop()
//         }
//     }
//     peek(){
    
//         if (this.isEmpty()){
//         console.log("Stack is empty")
//         }
//         else
//         {
//             return this.stack[this.stack.length-1]
//         }
    
    
//     }
//     size(){
//         return this.stack.length
//     }
//     isEmpty(){
//        return this.stack.length === 0
//     }
//     printStack(){
//         return this.stack.map(curr=>curr)
//     }
//     }
    
//     const stack=new Stack()
//     stack.push(10)
//     stack.push(20)
//     stack.push(30)
//     //console.log(stack.peek())
//     stack.pop()
    
//     console.log(stack.peek())
//     console.log(stack.printStack())
//     console.log(stack.size())
    
//     ///////////////////////////////////////////////////////////////

//     /// Reverse the string using stack

// function Reverse(str){
// const s=str.split(' ')
// console.log(s)
// let stack=[]

// for(let key of s){
//     // console.log(key)
//     stack.push(key)
      
// }
// let finals=''
// while(stack.length){
// const current= stack.pop()
// if(current){
//     finals+=" "+current
// }


// }
// return finals.trim()
// }
// const rev=Reverse('the sky is blue')
// console.log(rev)

///////////////////////////////////////////////////////////////////////////
class Stack {
    constructor() {
      this.items = [];
      this.maxStack = [];
      this.minStack = [];
    }
  
    // Pushes an element onto the stack
    push(element) {
      this.items.push(element);
  
      if (this.maxStack.length == 0 || element >= this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.push(element);
      }
  
      if (this.minStack.length == 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
    }
  
    // Removes the top element from the stack and returns it
    pop() {
      if (this.items.length == 0)
        return "Underflow";
      
      const poppedElement = this.items.pop();
  
      if (poppedElement == this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop();
      }
  
      if (poppedElement == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return poppedElement;
    }
  
    // Returns the top element of the stack
    peek() {
      if (this.items.length == 0)
        return "No elements in Stack";
      return this.items[this.items.length - 1];
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length == 0;
    }
  
    // Returns the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Find the maximum value in the stack
    getMax() {
      if (this.maxStack.length == 0)
        return "No elements in Stack";
      return this.maxStack[this.maxStack.length - 1];
    }
  
    // Find the minimum value in the stack
    getMin() {
      if (this.minStack.length == 0)
        return "No elements in Stack";
      return this.minStack[this.minStack.length - 1];
    }
  
    displayStack(stack) {
      console.log("Stack elements are:");
      let str = "";
      for (let i = 0; i < stack.items.length; i++)
        str += stack.items[i] + " ";
      return str.trim();
    }
  }
  
  console.log("Initialize a stack:")
  let stack = new Stack();
  console.log("Input some elements on the stack:")
  stack.push(1);
  stack.push(9);
  stack.push(3);
  stack.push(4);
  stack.push(7);
  console.log(stack.displayStack(stack));
  console.log("Maximum value in the stack:");
  console.log(stack.getMax());
  console.log("Minimum value in the stack:");
  console.log(stack.getMin());
  console.log("Remove one element from the stack:")
  stack.pop();
  console.log(stack.displayStack(stack));
  console.log("Maximum value in the stack:");
  console.log(stack.getMax());
  console.log("Minimum value in the stack:");
  console.log(stack.getMin());
/////////////////////////////////////////////////////////////////////////
class Asc{
 constructor(){
    this.stack=[]
 }

push(element){
    return this.stack.push(element)
}

pop(){
    if(this.stack.isEmpty()){
        return 'NO ELEMENT PRESENT TO POP '
    }
    else{
        return this.stack.pop()
    }
}

 isEmpty(){
   if(this.stack.length===0){
    return 'Stack is empty'
   }
 }

 stack(){
    return this.stack
 }
displayStack(){
    console.log("Stack sorted in ascending order..")
    return this.stack.sort((a,b)=>a-b)
}

}

const asc=new Asc()
asc.push(2)
asc.push(4)
asc.push(25)
asc.push(8)
asc.push(7)
console.log(asc.stack)
console.log(asc.displayStack())


//////////////////////////////////////////////////////////////////////////////////////////
class Desc{
    constructor(){
       this.stack=[]
    }
   
   push(element){
       return this.stack.push(element)
   }
   
   pop(){
       if(this.stack.isEmpty()){
           return 'NO ELEMENT PRESENT TO POP '
       }
       else{
           return this.stack.pop()
       }
   }
   
    isEmpty(){
      if(this.stack.length===0){
       return 'Stack is empty'
      }
    }
   
    stack(){
       return this.stack
    }
   displayStack(){
       console.log("Stack sorted in descending order..")
       return this.stack.sort((a,b)=>b-a)
   }
   
   }
   
   const desc=new Desc ()
   desc.push(2)
   desc.push(4)
   desc.push(25)
   desc.push(8)
   desc.push(7)
   console.log(desc.stack)
   console.log(desc.displayStack())