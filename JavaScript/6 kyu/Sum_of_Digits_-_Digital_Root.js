/**
 * https://www.codewars.com/kata/541c8630095125aba6000c00
 */

const numToDigitsArr = (num) =>
    num.toString().split("").map((x) => Number(x));
const numArraySum = (numArr) =>
    numArr.reduce((total, value) => total + value, 0);

function digitalRoot(n) {
    let digits = numToDigitsArr(n);
    while (digits[1] !== undefined) {
        digits = numToDigitsArr(numArraySum(digits));
    }
    return digits[0];
}