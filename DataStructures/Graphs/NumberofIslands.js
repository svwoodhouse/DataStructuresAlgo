"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
];
var islandCount = function (grid) {
    var visited = new Set();
    var count = 0;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            if (explore(row, col, grid, visited) === true) {
                count += 1;
            }
        }
    }
    return count;
};

var explore = function (row, col, grid, visited) {
    var rowInBounds = row >= 0 && row < grid.length;
    var colInBounds = col >= 0 && col < grid[0].length;
    if (!rowInBounds || !colInBounds)
        return false;
    if (grid[row][col] === 'W')
        return false;
    var pos = row + ',' + col;
    if (visited.has(pos))
        return false;
    visited.add(pos);
    explore(row + 1, col, grid, visited);
    explore(row - 1, col, grid, visited);
    explore(row, col - 1, grid, visited);
    explore(row, col + 1, grid, visited);
    return true;
};
console.log(islandCount(grid));
