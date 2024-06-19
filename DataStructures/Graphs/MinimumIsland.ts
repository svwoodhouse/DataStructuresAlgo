import { Grid } from "./NumberofIslands";

const grid: Grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
]

const minimumIslandCount = (grid: Grid): number => {
    const visited: Set<String> = new Set()
    let minimumCount = Infinity;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            const size = exploreSize(row, col, grid, visited)
            if(size > 0 && size < minimumCount){
                minimumCount = size
            }
        }
    }
    return minimumCount
}

const exploreSize = (row: number, col: number, grid: Grid, visited: Set<String>): number => {
    const  rowInBounds = row >= 0 && row < grid.length
    const  colInBounds = col >= 0 && col < grid[0].length

    if(!rowInBounds || !colInBounds) return 0
    if(grid[row][col] === 'W') return 0

    const pos = row + ',' + col

    if(visited.has(pos)) return 0
    visited.add(pos)
    
    let size = 1

    size += exploreSize(row + 1, col, grid, visited)
    size += exploreSize(row - 1, col, grid, visited)
    size += exploreSize(row, col - 1, grid, visited)
    size += exploreSize(row, col + 1, grid, visited)

    return size
}
console.log(minimumIslandCount(grid))