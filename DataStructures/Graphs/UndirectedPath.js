const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

// Graph Visualization
//  i - j
//  |
//  k - m
//  |
//  l
// 
//  o - n

function buildGraph(edges){
    const graph = {};
    for(let edge of edges){
        const [ a, b ] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

 return graph;
};

function hasPath(graph, src, dest, visited) {
    if(src === dest) return true
    if(visited.has(src)) return false

    visited.add(src)

    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dest, visited) === true){
            return true
        } 
    }

    return false
}

function undirectedPath(edges, nodeA, nodeB){
    const graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}


console.log(undirectedPath(edges, 'j', 'm'))
console.log(undirectedPath(edges, 'j', 'n'))
