const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function breadthFirstTraversal(graph, startingNode){
    const queue = [startingNode]
    while(queue.length > 0){
        const current = queue.shift()
        console.log(current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
}

breadthFirstTraversal(graph, 'a')