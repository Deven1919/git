
let isPalindrome = function(head) {
    let string1 = string2=''
 
    let node=head
    while(node!==null){
     string1=`${string1}${node.val}`
     string2=`${node.val}${string2}`
   
     node=node.next
    }  
    console.log(string1,string2)
 //console.log(string1,string2)
  return string1===string2 ? true : false
 
 };
const val1=isPalindrome([1,2,2,1])
///////////////////////////////////////////
function Count(head, key) {
    // add your code here
  let node=head
   let count=0
   
   while(node){
        if(node.data ===key)count++
       
       node =node.next
   }
     return count

     
     
}
Count([1,2,3,1,5,1,4,1],1)// 4

class Node{
constructor(data){
    this.data=data
    this.next=null
}


}

class Linklist{

constructor(){
    this.head=null
}

addFirst(data){

const newNode= new Node(data)
newNode.next= this.head
this.head=newNode
}
addLast(data){
const newNode= new Node(data)
if(!this.head){
    this.head=newNode
}
let curr=this.head
while(curr.next){
   curr=curr.next
}
curr=newNode
}
addAt(index,data){
   if(index < 0 || index > this.size() ){
    console.error('Invaild Index.')
    return
   }
   if(index ===0){
    const newNode= new Node(data)
    newNode.next=this.head
    this.head=newNode

   }
  let currentNode=this.head
  for (let index = 0; index < index-1; index++) {
     currentNode=currentNode.next
  }
    currentNode.next= newNode.next
    currentNode.next=newNode

}
size(){
let current=this.head
let count=0
while(current.next){
    count++
current=current.next
}
return count

}
removeAt(index){
if(index<0 || index > this.size()){
    console.log("Invalid index")
}
if(index ===0){
    let currentNode=this.head
    currentNode=currentNode.next.next
}
let currenNode=this.head
for (let index = 0; index < index-1; index++) {
    currenNode=currenNode.next
    
}
currenNode=currenNode.next.next
}
removeTop(){
    if(!this.head){
        return
    }
    this.head = this.head.next
}
removeLast(){
    if(!this.head){
        return
    }
let currentNode=this.head
 while (currentNode.next.next) {
    currentNode=currentNode.next
 }
current.next=null

}
}

const linklist=new Linklist()
linklist.addAt(2)
linklist.addAt(4)
linklist.addAt(6)
linklist.addFirst(55)
linklist.removeLast()


// Delte node from linklist
<script> 
// A linked list Node 
class Node 
{ 

	// Utility function to create a new node 
	// with given key 
	constructor(data) 
	{ 
		this.data = data; 
		this.next = null; 
		
	} 
} 

// Function to delete the last occurrence 
function deleteLast(head, x) 
{ 
	let temp = head; 
	let prt = null; 
	while (temp != null) 
	{ 
		//If found key, update 
		if (temp.data == x) 
			ptr = temp; 
		temp = temp.next; 
	} 
	
	// If the last occurrence is the last node 
	if (ptr != null && ptr.next == null) 
	{ 
		temp = head; 
		while (temp.next != ptr) 
		{ 
			temp = temp.next; 
		} 
		temp.next = null; 
	} 
	
	// If it is not the last node 
	if (ptr != null && ptr.next != null) 
	{ 
		ptr.data = ptr.next.data; 
		temp = ptr.next; 
		ptr.next = ptr.next.next; 
		
	} 
	return head; 
	
} 

// This function prints contents of linked 
// list starting from the given Node 
function display(head) 
{ 
	let temp = head 
	if (head == null) 
	{ 
		document.write("NULL<br>"); 
		return; 
	} 
	while (temp != null) 
	{ 
		document.write( temp.data," --> ", end = ""); 
		temp = temp.next; 
	} 
	document.write("NULL<br>") 
} 

// Driver code 
let head = new Node(1) 
head.next = new Node(2) 
head.next.next = new Node(3) 
head.next.next.next = new Node(4) 
head.next.next.next.next = new Node(5) 
head.next.next.next.next.next = new Node(4) 
head.next.next.next.next.next.next = new Node(4); 

document.write("Created Linked list: "); 
display(head) 

// Pass the address of the head pointer 
head = deleteLast(head, 4) 
document.write("List after deletion of 4: ") 
display(head) 

