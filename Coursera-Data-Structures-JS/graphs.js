let notes = `
used in netflix recommednations
maps
graphs - collections of nodes and connections
but unlike a tree doesnt necessarily need a root, only one point from one point to another
uses of graphs
social netowrks
mapping
routing visual hierachy
file system optimizations

types of graphs
vertex - is a node
edge - a connection between nodes
weight/unweighted - 
assign value to edges it becomes weighted

directed/undirected -
often has arrows if directed, can only go in a certain direction

typically represented in an adjacecny matix and adjacency list 

adjacecny matrix
only include ones for edges,

list
array with list of connections for each vertix

list vs matrix
list
can take up less space
faster way to iterate over all edeges
slowed for lookup of specifric edges

matrix
quick for look up of specifric edges
slowers for iteriating over all edges
and takes up more space

we will be going by the list
real world data tends to be sparses and or larger graphs

visiting updating/checking each vertix on a graph
need to specify starting point

uses for traversal
finding shortest path
web crawlers
peer to peer networking
recommendations (find the ones with thre most direct commonality)

DFS traversal for a graph
prioritize visit children, deep traversal before widen
we will do it recursively and iteratively


BFS
visit neighbors at current depth first

Dijkistras Algorrithm
shortest path alogorithm
`
//this will be an undirected graph, and unweighted
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(name){
        if(!this.adjacencyList[name]) this.adjacencyList[name]=[];
    }
    removeVertex(vert){
        let connections = this.adjacencyList[vert];
        for(let i = 0; i < connections.length; i++){
            this.removeEdge(vert, connections[i]);
        }
        delete this.adjacencyList[vert];
        return this.adjacencyList;
    }
    addEdge(vert1, vert2){
        //assuming goes in both directions
        this.adjacencyList[vert1].push(vert2);
        this.adjacencyList[vert2].push(vert1);
        return this.adjacencyList;
    }
    removeEdge(vert1, vert2){
        //my solution
        // this.adjacencyList[vert1].splice(this.adjacencyList[vert1].indexOf(vert2),1);
        // this.adjacencyList[vert2].splice(this.adjacencyList[vert2].indexOf(vert1),1);

        //solution from vide
        this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
            v => v !== vert2
        );
        this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
            v => v !== vert1
        );
        return this.adjacencyList;
    }
    depthFirstRecursive(start){   
        let result = []; 
        let visited = {};
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex]=true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    return dfs(neighbor);
                };
            })
        })(start);
        return result;
    }
    //will have different result than recursibve
    depthFirstIteration(start){   
        let toVisit = [start];
        let result = []; 
        let visited = {};
        let adjacencyList = this.adjacencyList;
        visited[start]=true;
        while(toVisit.length){
            let vertex = toVisit.pop();
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    toVisit.push(neighbor);
                };
            })
        }
        return result;
    }
    breadthFirstIteration(start){   
        let toVisit = [start];
        let result = []; 
        let visited = {};
        let adjacencyList = this.adjacencyList;
        visited[start]=true;
        while(toVisit.length){
            let vertex = toVisit.shift();
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor =>{
                if(!visited[neighbor]){
                    visited[neighbor]=true;
                    toVisit.push(neighbor);
                };
            })
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.depthFirstRecursive("A")
console.log(g.breadthFirstIteration("A"))

// let newGraph = new Graph;
// newGraph.addVertex('vertex');
// newGraph.addVertex('vertex2')
// newGraph.addVertex('vertex3');
// newGraph.addEdge('vertex', 'vertex2');
// console.log(newGraph.removeVertex('vertex'));