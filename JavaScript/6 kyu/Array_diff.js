/**
 * https://www.codewars.com/kata/523f5d21c841566fde000009
 */

function arrayDiff(a, b) {
    const bMap = {};
    b.forEach(x => bMap[x] = true);
    return a.filter(x => !bMap[x]);
}