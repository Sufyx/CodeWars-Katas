/**
 * https://www.codewars.com/kata/55c6126177c9441a570000cc
 */

function compare(n1, n2) {
    const n1Sum = n1.toString().split("").map(Number).reduce((total, val) => total + val);
    const n2Sum = n2.toString().split("").map(Number).reduce((total, val) => total + val);
    if (n1Sum > n2Sum)
        return 1;
    else if (n1Sum < n2Sum)
        return -1;
    else if (n1.toString() >= n2.toString())
        return 1;
    else
        return -1;
}

function orderWeight(strng) {
    if (!strng.trim())
        return "";
    const array = strng.split(" ").map(Number);
    const sorted = mergeSort(array);
    return sorted.join(" ");
}

function mergeSort(array) {
    if (array.length <= 1)
        return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    const merged = [];
    while (left.length > 0 && right.length > 0) {
        if (compare(left[0], right[0]) === 1)
            merged.push(right.shift());
        else
            merged.push(left.shift());
    }
    return [...merged, ...left, ...right];
}