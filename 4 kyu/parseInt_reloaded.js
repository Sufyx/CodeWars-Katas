/**
 * https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5
 */

const numbers = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
    "seven": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12,
    "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
    "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "fourty": 40,
    "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
}
const multipliers = { "million": 1000000, "thousand": 1000, "hundred": 100 }

function parseInt(string) {
    const numWords = string.replace(/\band \b/g, '').replace(/\-\b/g, ' ').split(" ");
    let realNum = 0, start = 0;
    for (let key in multipliers) {
        const point = numWords.indexOf(key, start);
        if (point !== -1) {
            realNum += getNum(numWords, start, point - 1) * multipliers[key];
            start = point + 1;
        }
    }
    realNum += getNum(numWords, start, numWords.length - 1);
    return realNum;
}

function getNum(numWords, start, end) {
    let num = 0;
    for (let i = start; i <= end; i++) {
        if (numWords[i] === "hundred") {
            num *= 100;
        } else {
            num += numbers[numWords[i]];
        }
    }
    return num;
}