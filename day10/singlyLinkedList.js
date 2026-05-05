class Node{
    constructor(val){
        this.node=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var node=new Node(val)
        if(!this.head){
            this.head=node;
            this.tail=this.head;
        }
        else{
            this.tail.next=node;
            this.tail=node
        }
        this.length++
    }
    pop(){
        if(!this.head) return undefined
        var current=this.head;
        var nextNode=current
        while(current.nextNode){
            nextNode=current;
            current=current.next
        }
        this.tail=nextNode;
        this.tail.next=null;
        this.length--;
        
        
    }
    shift(){
        var newNode=this.head;
        this.head=newNode.next;
        this.length--
    }
    unshift(val){
        var node=new Node(val);
        if(!this.head){
            this.head=node;
            this.tail=this.head
        }
        else{
            node.next=this.head;
            this.head=node;
        }
    }
    get(val){
        if(val>this.length) return null;
        var current=this.head;
        var counter=0;
        while(counter!==val){
            current=current.next;
            counter++
        }
        return current
    }

}

var list=new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
// list.pop()
list.get(2)
console.log(list)