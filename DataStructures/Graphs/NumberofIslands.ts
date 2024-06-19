export type Grid = Array<String[]>

const grid: Grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
]

const islandCount = (grid: Grid): number => {
    const visited: Set<String> = new Set()
    let count = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(explore(row, col, grid, visited) === true){
                count+=1
            }
        }
    }
    return count
}

const explore = (row: number, col: number, grid: Grid, visited: Set<String>): boolean => {
    const  rowInBounds = row >= 0 && row < grid.length
    const  colInBounds = col >= 0 && col < grid[0].length

    if(!rowInBounds || !colInBounds) return false
    if(grid[row][col] === 'W') return false
    const pos = row + ',' + col

    if(visited.has(pos)) return false

    visited.add(pos)

    explore(row + 1, col, grid, visited)
    explore(row - 1, col, grid, visited)
    explore(row, col - 1, grid, visited)
    explore(row, col + 1, grid, visited)

    return true
}
console.log(islandCount(grid))