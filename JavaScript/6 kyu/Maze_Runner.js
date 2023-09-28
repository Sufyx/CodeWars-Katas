/**
 * https://www.codewars.com/kata/58663693b359c4a6560001d6
 */

function mazeRunner(maze, directions) {
    let x, y;
    for (let i = 0; i < maze[0].length; i++) {
        if (maze[i].indexOf(2) != -1) {
            y = i;
            x = maze[i].indexOf(2);
            break;
        }
    }
    for (let i = 0; i < directions.length; i++) {
        if (directions[i] === 'N') y--;
        if (directions[i] === 'E') x++;
        if (directions[i] === 'S') y++;
        if (directions[i] === 'W') x--;
        if (!maze[y]) return 'Dead';
        if (maze[y][x] === undefined || maze[y][x] === 1) return 'Dead';
        if (maze[y][x] === 3) return 'Finish';
    }
    return 'Lost';
}