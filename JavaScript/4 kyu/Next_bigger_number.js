/**
 * https://www.codewars.com/kata/55983863da40caa2c900004e
 */

function nextBigger(n) {
    const digits = Array.from(n.toString()).map(Number);

    let i = digits.length - 2;
    while ((i > -1) && (digits[i] >= digits[i + 1]))
        i--;

    if (i < 0)
        return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i])
        j--;

    [digits[i], digits[j]] = [digits[j], digits[i]];
    const arranged = digits.slice(i + 1).reverse();
    const nextBigger = digits.slice(0, i + 1).concat(arranged);

    return Number(nextBigger.join(''));
}