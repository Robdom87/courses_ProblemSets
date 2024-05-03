let notes = `
4 common way tp traverse amound trees
two main approaches
1. breadth firs search
    going aross
2. depth first seach
    going all the way down first
    InOrder
    preorder
    post order

Breadth for search - we want to look at every sobling node befpre we look at a child
how to implment , use a queue


depth first seach
go down before seeing sibling nodes`

function dfs(node){
    if (node === null){return;}
    dfs(node.left);
    dfs(node.right);
    return;
}
