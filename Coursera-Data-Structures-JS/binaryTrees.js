let notes = `
types are trees, binary treesm and binarya search trees
tree are similar to linked lists in that they are nodes
but they are also have to be in a parent child relationship
cant point to siblings, only points to child
graphs can point to their peers
must also only have one root
siblings - same parent
leaf - no children
edge is connection between parent and child
trees are nonlinear, multiples paths

real application of trees
html DOM
networkinh routing
abstract syntax tree
use in AI
folders in an operating sytem
JSON

tree types
binrary trees
    can have at most 2 children
bionary search trees
    sorted in some sort of way
    usually with data that can be compares/evaluated against each other
    all nums that are less than on node is to the left of it, and the greater are to the right

BST strutucture
    helps to look things up
    and it helps insert things quickly


Big O
insertion O(log n)
searching O(log n)

not guaranteed

log 2 of N

DFS vs BFS
same time complexity

BFS 
- need a queue to check each node
- taller tree, than bfs better for space complexity

DFS
- go all the way down
- if a wide tree, then better for space complexity to use DFS
`;

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        // first create new node
        let insertNode = new Node(value);
        // check if this root is null, and if it is just make it the new node
        if (this.root === null) {
            this.root = insertNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            //check if value is greater then current node value
            if (value > currentNode.value) {
                //check if current node right is not null, if it is null, then make ,right node into new node
                if (currentNode.right === null) {
                    currentNode.right = insertNode;
                    return this;
                }
                //if it is not null then change current node to .right node, to move the current marker down the tree
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = insertNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                return this;
            }
        }
    }
    find(value){
        //first check if there is a root, if no root, not found
        if(this.root===null){
            return this;
        }
        //then we set the current variable to the rrom and the found flag
        let current = this.root;
        let found = false;
        //if the value to find is the root, then we found it and we are good to go
        if(value === current.value){
            found = true;
        } else {
            //but if its not lets search in tree
            while(!found){
                //depending on the value move right or left
                if(value > current.value){
                    current = current.right;
                }else if (value < current.value){
                    current = current.left;
                //if the values match, return found
                } else if (value === current.value){
                    found = true;
                //the only other sition is if != which would be if current value is null
                } else {
                    return;
                }
            }
        }  
        //then return accordingly
        if(found){
            return 'Found!'
        }
        return 'Not there.'

    }
    BFS(){
        let visited = [];
        let queue = [];
        if (this.root===null){
            return visited;
        }
        let current = this.root;
        queue.push(current);
        // for(let i = 0; i < queue; i++){
        while(queue.length>0){
            
            current=queue.shift()
            console.log(current);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            } 
            visited.push(current.value);
        }
        return visited;     
    }
    DFSpreorder(){
        //once you get to a node you add it to visited
        let visited = [];
        
        function traverse(node){
            if(!node){
                return;
            }
            visited.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }
    DFSpostorder(){
        // traverse to tip of branch first then add to data
        let visited = []; 
        function traverse(node){
            if(!node){    
                return;
            }  
            traverse(node.left);
            traverse(node.right);
            visited.push(node.value);
        }
        traverse(this.root)
        return visited;
    }
    DFSinorder(){
        //does it in order
        let visited = [];
        function traverse(node){
            if(!node){    
                return;
            }  
            traverse(node.left);
            visited.push(node.value);
            traverse(node.right);
        }
        traverse(this.root)
        return visited;
    }
}

let tree = new BinarySearchTree;
tree.insert(2);
tree.insert(23);
tree.insert(1);
tree.insert(24);
tree.insert(1);
console.log(tree.DFSinorder());
// console.log(tree);

