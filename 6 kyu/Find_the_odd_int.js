/**
 * https://www.codewars.com/kata/54da5a58ea159efa38000836
 */

function findOdd(A) {
    const tracker = {};
    for (let i = 0; i <= A.length; i++) {
        if (!tracker[A[i]]) {
            tracker[A[i]] = 1;
        } else {
            delete tracker[A[i]];
        }
    }
    return Number(Object.keys(tracker)[0]);
}