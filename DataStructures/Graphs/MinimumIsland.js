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
var minimumIslandCount = function (grid) {
    var visited = new Set();
    var minimumCount = Infinity;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            var size = exploreSize(row, col, grid, visited);
            if (size > 0 && size < minimumCount) {
                minimumCount = size;
            }
        }
    }
    return minimumCount;
};
var exploreSize = function (row, col, grid, visited) {
    var rowInBounds = row >= 0 && row < grid.length;
    var colInBounds = col >= 0 && col < grid[0].length;
    if (!rowInBounds || !colInBounds)
        return 0;
    if (grid[row][col] === 'W')
        return 0;
    var pos = row + ',' + col;
    if (visited.has(pos))
        return 0;
    visited.add(pos);
    var size = 1;
    size += exploreSize(row + 1, col, grid, visited);
    size += exploreSize(row - 1, col, grid, visited);
    size += exploreSize(row, col - 1, grid, visited);
    size += exploreSize(row, col + 1, grid, visited);
    return size;
};
console.log(minimumIslandCount(grid));
