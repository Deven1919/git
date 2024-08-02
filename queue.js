///// Queue

class Queue{
constructor(){
    this.queue=[]
}

enqueue(element){
return this.queue.push(element)

}
dequeue(){
    if(queue.isEmpty()){
        return "Not element found to pop"
    }
    return this.queue.shift()
}

isEmpty(){
    return this.queue.length ===0;
}
front(){
    return this.queue[0]
}
display(){
    return this.queue.map(curr=>curr)
}
}

const queue=new Queue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
queue.enqueue(20)
console.log(queue.display())
queue.dequeue()
console.log(queue.front())
console.log(queue.display())

// ///////////////////////////////////////////////////////////////////////////

class MyCircularQueue{
    constructor(k){
        this.queue=[]
        this.size=k
    }
   
enQueue(value) {
    if(this.queue.length === this.size) return false
    this.queue.push(value)
    return true
    
};
deQueue() {

    if(this.queue.length===0) return false
    this.queue.shift()
    return true
    
};
Front(){
    if(this.queue.length === 0) return -1
    return  this.queue[0]
    
}
Rear() {
    if(this.queue.length ===0) return -1
    return this.queue[this.queue.length-1]
};


isEmpty() {
    return this.queue.length === 0
};


isFull() {
    return this.queue.length === this.size
};
display(){
    return this.queue
}
}
const myqueue=new MyCircularQueue(3)
myqueue.enQueue(2)
myqueue.enQueue(4)
myqueue.enQueue(5)

console.log(myqueue.display())
console.log(myqueue.Front())
console.log(myqueue.Rear())
console.log(myqueue.deQueue());
console.log((myqueue.Front()));
console.log(myqueue.Rear());




////////////////////////////////////////////////////////

//// Implement stack using queue

class MyStack{
constructor(){
    this.q1=[]
    this.q2=[]
}

push(value){
while(this.q1.length !==0){
    this.q2.push(this.q1.shift())
} this.q1.push(value)



while(this.q2.length !==0){
     this.q1.push(this.q2.shift())
}

}
pop(){
   return this.q1.shift()
}
front(){
    return this.q1[0]
}
isEmpty(){
    return this.q1.length ===0
}
display(){
    return this.q1
}

}
const que=new MyStack()
que.push(2)
que.push(3)
que.push(4)
que.push(5)
console.log(que.front())
console.log(que.display());
// console.log(que.pop())
console.log((que.front()));
console.log(que.isEmpty());
















