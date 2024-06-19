const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

const connectedComponentsCount = (graph) => {
    let visited = new Set()
    let largestComponent = 0
    for(let node in graph){
        const componentSize = explore(graph, node, visited) 
        if(componentSize > largestComponent){
            largestComponent = componentSize
        }
    }

    return largestComponent
}

const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return 0;

    visited.add(String(current));

    let size = 1; 

    for(let neighbor of graph[current]){
        size += explore(graph, neighbor, visited);
    }

    return size

}

console.log(connectedComponentsCount(graph))