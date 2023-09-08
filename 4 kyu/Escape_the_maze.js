/**
 * https://www.codewars.com/kata/5877027d885d4f6144000404
 */

function convertMoves(moves) {
    const newMoves = [];
    const moveKeys = {
        '^': 0,
        '>': 1,
        'v': 2,
        '<': 3
    }
    for (let i = 1; i < moves.length; i++) {
        if (Math.abs(moveKeys[moves[i - 1]] - moveKeys[moves[i]]) == 2) {
            newMoves.push('B');
        }
        if (moveKeys[moves[i - 1]] - moveKeys[moves[i]] == -1
            || moveKeys[moves[i - 1]] - moveKeys[moves[i]] == 3) {
            newMoves.push('R');
        }
        if (moveKeys[moves[i - 1]] - moveKeys[moves[i]] == 1
            || moveKeys[moves[i - 1]] - moveKeys[moves[i]] == -3) {
            newMoves.push('L');
        }
        newMoves.push('F');
    }
    return [...newMoves];
}

function escape(maze) {
    const body = {
        row: 0,
        col: 0,
        moves: []
    }

    const visited = [];
    for (let i = 0; i < maze.length; i++) {
        const row = [];
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == '#')
                row.push(true);
            else
                row.push(false);
            if (maze[i][j] == '<' || maze[i][j] == '^' || maze[i][j] == '>' || maze[i][j] == 'v') {
                body.row = i;
                body.col = j;
                body.moves = [maze[i][j]];
            }
        }
        visited.push(row);
    }

    const queue = [body];
    visited[body.row][body.col] = true;

    while (queue.length != 0) {
        const step = queue.shift();

        if (step.row == 0 || step.col == 0 || step.row == maze.length - 1 || step.col == maze[0].length - 1)
            return convertMoves(step.moves);

        if (step.row - 1 >= 0 && !visited[step.row - 1][step.col]) {
            queue.push({
                row: step.row - 1,
                col: step.col,
                moves: [...step.moves, '^']
            });
            visited[step.row - 1][step.col] = true;
        }

        if (step.row + 1 < maze.length && !visited[step.row + 1][step.col]) {
            queue.push({
                row: step.row + 1,
                col: step.col,
                moves: [...step.moves, 'v']
            });
            visited[step.row + 1][step.col] = true;
        }

        if (step.col - 1 >= 0 && !visited[step.row][step.col - 1]) {
            queue.push({
                row: step.row,
                col: step.col - 1,
                moves: [...step.moves, '<']
            });
            visited[step.row][step.col - 1] = true;
        }

        if (step.col + 1 < maze[0].length && !visited[step.row][step.col + 1]) {
            queue.push({
                row: step.row,
                col: step.col + 1,
                moves: [...step.moves, '>']
            });
            visited[step.row][step.col + 1] = true;
        }
    }

    return [];
}