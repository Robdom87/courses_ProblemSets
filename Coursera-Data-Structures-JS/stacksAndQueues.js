let notes = `
Stacks - definition - data collections, abstract, needs to abide by lifo principal
last element added to a stack is the first to be removed
no built in data type for JS

use cases:
manage function invocatons
undo and redo functionality
history pages, usually treated like a stack
works with trees and graphs

Implement operatons
could use linked list to implement

Queue - FIFO
a line
remove from the front in linked list with temp to hold list, make current into this.next
then reduce length by 1
insertion or removal is O(1) for both stacks and queues
`;

//Use array to implement stack
//just need to add and remove using push and pop
//or just use shift and unshift (but it is a slower process because indexes need to be updated)
var stack = [];
stack.push('google');
stack.push('ig');
stack.push('yt');
stack.pop();