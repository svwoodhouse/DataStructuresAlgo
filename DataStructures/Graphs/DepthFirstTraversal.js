const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function depthFirstTraversal(graph, startingNode){
    const stack = [startingNode]
    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}

function depthFirstTraversalRecursive(graph, startingNode){
    console.log(startingNode)
    for(let neighbor of graph[startingNode]){
        depthFirstTraversal(graph, neighbor)
    }
}

depthFirstTraversal(graph, 'a')
depthFirstTraversalRecursive(graph, 'a')