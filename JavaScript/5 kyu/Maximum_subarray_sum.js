/**
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
 */

function maxSequence(arr) {
    let max = 0, sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        max = Math.max(sum, max);
    }
    return (max > 0) ? max : 0;
}