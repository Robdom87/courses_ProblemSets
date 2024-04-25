// BIG O NOTATION
// Insertion O(1)
// remobval O(1) or O(N)
// Searching or Accessing O(N)


//peice of data - val
//reference to node - next
class Node {
    constructor(val) {
        this.val = val;
        //pointer, if null its the tail
        this.next = null;
    }
}

//how to make linked list with just nodes
var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("friend");
//bad way to create, should makes structures with inherent methods to interact with

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //insert at the end
    //create a new node with that value
    //if empty, set head and tail to newly created node
    //set next property in the list to be a nw node and the new tail
    //increment length by one
    //return linked list
    push(val) {
        let newNode = new Node(val);
        //if head is null or nonexistent, make node tail and head
        if (!this.head) {
            this.tail = this.head = newNode;
        } else {
            //make pointer to the new node from the original tail
            this.tail.next = newNode;
            //then make the tail the new mode
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //if empty return undefined
    //loop thru enire list until u reach the tail
    //set variable to hold second to last node
    // //set tail to second to last node
    // decrement length by 1
    // return the value of the node removed
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        //edge case if one item
        if (this.head === this.tail) this.head = this.tail = null;
        this.length--;
        return current;
    }
    //remove node from beginning
    //if no nnodes return undefined
    //store currented head property variable
    //set the head property to be the currrent heads next property
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        //to fix bug that holds a node in this.tail when a 1 length list is shifted
        if (this.length===0) this.tail = null;
        return oldHead;
    }
    //add new node at the beginning of the linked list
    //function should accept val
    //create node
    //set newling crated node next property to current heafd
    //set head to newnode
    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.tail = this.head = newNode;
        } else {
            let oldHead = this.head;
            newNode.next=oldHead;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    //retrieve value by its position
    get(index){
        if(index<0 || index >= this.length){
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    reverse(){
        if(!this.head){
            return;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        // console.log(node);
        // console.log(this.head);
        // console.log(this.tail);
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
       
    }
}

//how we want to call it later on
var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.unshift('new');
list.reverse();
// console.log(list.get(0));
console.log(list);