const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

const buildGraph = (edges) => {
    const graph = {}
    for(let edge of edges){
        const [a, b] = edge

        if(!(a in graph)){
            graph[a] = []
        }
        if(!(b in graph)){
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)

    }
    return graph
}

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const queue = [ [nodeA, 0] ]
    const visited = new Set([nodeA])

    while(queue.length > 0){
        const [current, distance] = queue.shift()
        if(current === nodeB) return distance

        for(let neighbor of graph[current]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
    }

    return -1
}

console.log(shortestPath(edges, 'w', 'z'))