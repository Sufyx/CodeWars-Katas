/**
 * https://www.codewars.com/kata/5877e7d568909e5ff90017e6
 */

const arrSum = (arr) => arr.reduce((total, current) => total + current);
const arrToNum = (arr) => Number(arr.join(''));
const numToArr = (num) => num.split('').map(digit => Number(digit));

function findAll(n, k) {
    const limit = Number(("9").repeat(k));
    let digitArr = numToArr(("1").repeat(k));
    let goodNums = 0, min = -1, max = 0;
    let currentNum = arrToNum(digitArr);
    while (currentNum <= limit) {
        if (arrSum(digitArr) === n) {
            goodNums++;
            if (min === -1) min = currentNum;
            if (max < currentNum) max = currentNum;
        }
        digitArr = numToArr((currentNum + 1).toString());
        for (let digit = 0; digit < digitArr.length - 1; digit++) {
            if (digitArr[digit] > digitArr[digit + 1])
                digitArr[digit + 1] = digitArr[digit];
        }
        currentNum = arrToNum(digitArr);
    }
    return goodNums > 0 ? [goodNums, min.toString(), max.toString()] : [];
}