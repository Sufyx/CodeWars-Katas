/**
 * https://www.codewars.com/kata/5bc6f9110ca59325c1000254
 */

function count(chessBoard) {
    const checker = Array.from(
        { length: chessBoard.length },
        () => Array(chessBoard.length).fill(0));
    let totalCount = 0;

    for (let i = 0; i < chessBoard.length; i++) {
        for (let j = 0; j < chessBoard.length; j++) {
            if (chessBoard[i][j] === 1) {
                if (i === 0 || j === 0) {
                    checker[i][j] = 1;
                } else {
                    checker[i][j] = Math.min(
                        checker[i - 1][j],
                        checker[i][j - 1],
                        checker[i - 1][j - 1]) + 1;
                }
                totalCount += checker[i][j];
            }
        }
    }

    const result = {};

    for (let size = 2; size <= chessBoard.length; size++) {
        let count = 0;

        for (let i = 0; i < chessBoard.length; i++) {
            for (let j = 0; j < chessBoard.length; j++) {
                if (checker[i][j] >= size) {
                    count++;
                }
            }
        }

        if (count > 0) {
            result[size] = count;
        }
    }

    return result;
}