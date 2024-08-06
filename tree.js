
class Node{
    constructor(data,left=null,right=null){
        this.data=data
        this.left=left
        this.right=right
    }
}

class BST{
constructor(){
    this.root=null
}
add(data){
const node=this.root
if(node ===null){
this.root =new Node(data)
return
}else{
const searchTree=function(data){
if(data<node.data){
if(node.left ===null){
    node.left = new Node(data)
    return
}
else if(node.left !==null){
    return searchTree(node.left)
}
}
if(data>node.data){
    if(node.right ===null){
        node.right = new Node(data)
        return
    }
    else if(node.right !==null){
        return searchTree(node.right)
    }
}
else{
    return null
}
}
}
}
//////////////////
findMin(){
    let currentNode= this.root
    let min= Number.MAX_VALUE
    while(currentNode !==null){
      min=Math.min(min,currentNode.left)
    }
    return min
}
///////////////////
findMax(){
    let currentNode= this.root
    let max= Number.MIN_VALUE
    while(currentNode !==null){
      max=Math.max(max,currentNode.right)
    }
    return max
}
/////////////////////////////////////
find(data){
let current= this.root
while(current.data!==data){
if(data<current.data){
    current =current.left
}else if(data>current.dat){
    current=current.right
}
if(current=== null){
    return null
}
}
return current
}
isPresent(element){
let currentNode= this.root
while(currentNode){
    if(element === currentNode.data){
        return true
    }
    if(currentNode<element){
        currentNode=currentNode.left
        return true
    }else{
        currentNode = currentNode.right
    }

}
 return false

}
remove(data){
const removeNodes=function(node,data){

    if(node ===null){
        return null
    }
    if(data ===node.data){
        if(node.left === null && node.right ===null){
            return null
        }

        if(node.left === null){
            return node.left
        }
        let tempNode=node.right
        while(tempNode.left !==null){
            tempNode=tempNode.left
        }
        node.data=tempNode.data
        node.right=removeNodes(node,tempNode.data)
        return node
    }


    else if(data< node.data){
      node.left=removeNodes(node.left,data)
    }else{
        node.right=removeNodes(node.right,data)
        return node;
    }
} 
this.root=removeNodes(this.root,data)
}


}
const tree=new BST()
tree.add(2)
tree.add(4)
tree.add(6)
tree.add(8)
console.log(tree)
// console.log(tree.findMax());
// console.log(tree.findMin());





class FindMax{
constructor(){
    this.root=null
}
    findMax(){
        let currentNode= this.root
        let max= Number.MIN_VALUE
        while(currentNode !==null){
          max=Math.max(max,currentNode.right)
        }
        return max
    }

}
let max=new FindMax()
console.log(max.findMax())


class FindMin{
constructor(){
    this.root=null
}
findMin(){
    let currentNode= this.root
    let min= Number.MAX_VALUE
    while(currentNode !==null){
      max=Math.min(min,currentNode.left)
    }
    return min
}

}
let min=new FindMin()
console.log(min.findMin())