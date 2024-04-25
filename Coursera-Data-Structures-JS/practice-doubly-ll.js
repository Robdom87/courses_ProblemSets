let notes= `

Doubly LL - still no insertion bc a linked list
simply adds a prev pointer to each node
prev pointer of head is null
next pointer of tail is null
prev pointer allows for easier accesing from either the head or tail, so 2 insertion points rather than just one
reversing a linked list is much easier
code is a little more complicated because it takes up more memeory, and a bit more code

BIG O
insertion & removal = O(1)
searching & access = O(N)

`

class Node {
    constructor(val) {
        this.val = val;
        //pointer, if null its the tail
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
