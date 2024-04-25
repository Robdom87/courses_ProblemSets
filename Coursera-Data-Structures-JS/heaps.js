let notes = `
another form of tree
we will focus on binary heaps
definition
simialr to bst but
Max tree, parent is greater than the cild
min tree, parent nodes are always smaller,

both of these are also as compact as possible, always takes least ampunt of space possible, left children always hilled out first
no implied ordering between siblings, 

the order does not have to do with left and right


compare and contrast min and max heap
implement max heasp
understand where heaps are used 
priority que using a heap
very commony used data structure

also used very much for graph traversal

stroing heaps
in a list or array
for any indes of an array n, left child is stored at 2n+1, right is 2n+2

to find parent (n-1)/2 - floor it, round to lowest whole num


priority queue-
define - which element has a priority, each elment is serves before elements with lower priorities
use cases
implementation

big o log n for insertion and deletion, search 0 n
`

//heap insert intro

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element){
        //add element to end of heap
        this.values.push(element);
        this.bubbleUp();   
        return this.values;
    }
    bubbleUp(){

        let idx = this.values.length - 1;
        const element = this.values[idx];
        //break out of loop if element gets to top of heap
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            //break out of loop if element is less than parent
            if(element <= parent) break;
            //if greater than, swap the two values and update element index
            this.values[parentIdx] = element;
            this.values[idx]=parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        //pop out last element in heap and push to root
        //max is kicked out , could be added afterwards tho to get back to top
        const max = this.values[0];
        const end = this.values.pop();
        //only do if values has elements within the heap
        if(this.values.length > 0) {
            this.values[0]=end;
            this.bubbleDown();
        }
        return max;
    }
    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            //pull left and right child index
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx +2;
            //dont assign index values just yet, may be out of bouncs
            let leftChild, rightChild;
            //flag to check if any swaps were made
            let swap = null;
            //if inbounds
            if(leftChildIdx<length){
                //if so set to value
                leftChild=this.values[leftChildIdx];
                //check if value is greater than element
                if(leftChild > element){
                    //if so swap
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx];
                //additional checks requiredd as secondary check
                //updaye swap if right is bigger than element and there has been no swap yet
                if((rightChild > element && swap === null) || 
                    //or if alread swapped, update swap if right is bigger than left
                    (rightChild > leftChild && swap !== null)    
                ){
                    swap = rightChildIdx;
                } 
            }
            //if no swaps break out of loop
            if(swap===null) break;
            //otherwise actually swap and update index
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx = swap;
        }
        
    }

}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();

    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx]=parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0]=end;
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx +1;
            let rightChildIdx = 2*idx +2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx<length){
                leftChild=this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx];
                if((rightChild.priority < element.priority && swap === null) || 
                    (rightChild.priority > leftChild.priority && swap !== null)    
                ){
                    swap = rightChildIdx;
                } 
            }
            if(swap===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx = swap;
        }   
    }
}


let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(7);
heap.insert(15);
heap.insert(8);
heap.insert(22);
heap.insert(55);
heap.insert(3);
heap.insert(34);
heap.extractMax();
console.log(heap.values);



