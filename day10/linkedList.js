class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

// ------------------------------------------------------------------------------------------

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
            this.tail=node;
        }
        this.length++
        return this
    }
    // pop(val){
    //     if(!this.head) return undefined;
    //     var current= this.head;
    //     var newTail= current;
    //     while(current.next){
    //         newTail=current;
    //         current=current.next;
            
    //     }
    //     this.tail=newTail;
    //     this.tail.next=null;
    //     this.length--;
        
        
    // }

    pop(val){
        if(!this.head) return undefined;
        var currentHead=this.head;
        var newTail = currentHead;

        while(currentHead.next){
            newTail=currentHead;
            currentHead=currentHead.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
    }
    unshift(val){
        var currentVal=new Node(val);
        if(!this.head){
            this.head=currentVal;
            this.tail= this.head;
        }
        else{
            this.head=currentVal;
            this.head.next=this.head;
            this.length++
        }
        return this
    }
}

// ------------------------------------------------------------------------------------------

var list=new SinglyLinkedList();
list.push("hai")
list.push("hello")
list.push("wru")
// list.pop()
// list.shift()
list.unshift("I am from Unshift")
console.log(list);
