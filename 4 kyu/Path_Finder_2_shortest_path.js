/**
 * https://www.codewars.com/kata/57658bfa28ed87ecfa00058a
 */

const movements = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function pathFinder(maze) {
    const mazeArr = maze.split('\n');
    const N = mazeArr.length;
    const stepTracker = Array.from({ length: N }, () => Array(N).fill(Infinity));

    findMinSteps(0, 0, 0, stepTracker, mazeArr);
    const shortPath = stepTracker[N - 1][N - 1] < Infinity ? stepTracker[N - 1][N - 1] : false;
    return shortPath;
}

function findMinSteps(row, col, steps, stepTracker, mazeArr) {
    const N = mazeArr.length;

    if (row < 0 || row >= N || col < 0 || col >= N
        || (mazeArr[row][col] === 'W')
        || (steps >= stepTracker[row][col]))
        return;

    stepTracker[row][col] = steps;

    for (const [x, y] of movements) {
        findMinSteps(row + x, col + y, steps + 1, stepTracker, mazeArr);
    }
}