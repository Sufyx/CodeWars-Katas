/**
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0
 */

function moveZeros(arr) {
    const zeros = [];
    const cleared = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(0);
        } else {
            cleared.push(arr[i]);
        }
    }
    return cleared.concat(zeros);
}