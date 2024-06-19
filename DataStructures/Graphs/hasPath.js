const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function hasPathRecursive(graph, src, des) {
    if(src === des){
        return true
    }
    for(let neighbors of graph[src]){
        if(hasPathRecursive(graph, neighbors, des) === true){
            return true
        }
    }
    return false
}

function hasPathBFS(graph, src, des) {
    const queue = [src]

    while(queue.length > 0){
        const current = queue.shift()
        if(current === des){
            return true
        }
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }

    return false
}

function hasPathDFS(graph, src, des) {
    const stack = [src]
    while(stack.length > 0){
        const current = stack.pop();
        if(current === des){
            return true
        }
        for(let neighbors of graph[current]){
            stack.push(neighbors)
        }
    }
    return false
}

console.log(hasPathRecursive(graph, 'a', 'f'))
console.log(hasPathRecursive(graph, 'c', 'f'))

console.log(hasPathBFS(graph, 'a', 'f'))
console.log(hasPathBFS(graph, 'c', 'f'))

console.log(hasPathDFS(graph, 'a', 'f'))
console.log(hasPathDFS(graph, 'c', 'f'))