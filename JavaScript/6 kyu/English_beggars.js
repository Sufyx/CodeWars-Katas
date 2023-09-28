/**
 * https://www.codewars.com/kata/59590976838112bfea0000fa
 */

function beggars(values, n, beggarIndex = 0, arrIndex = 0, sums = []) {
    if (arrIndex === values.length) {
        return sums;
    }

    if (sums.length === 0) {
        sums.length = n;
        sums.fill(0);
    }

    if (sums[beggarIndex] !== undefined)
        sums[beggarIndex] += values[arrIndex];

    beggarIndex++;
    if (beggarIndex >= n) {
        beggarIndex = 0;
    }

    arrIndex++;
    return beggars(values, n, beggarIndex, arrIndex, sums)
}