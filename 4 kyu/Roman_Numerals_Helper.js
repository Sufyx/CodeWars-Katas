/**
 * https://www.codewars.com/kata/51b66044bce5799a7f000003
 */

const numerals = {
    "I": 1, "V": 5,
    "X": 10, "L": 50,
    "C": 100, "D": 500,
    "M": 1000
}


class RomanNumerals {
    static fromRoman(str) {
        const arr = str.split("");
        let newNum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] && (numerals[arr[i]] < numerals[arr[i + 1]])) {
                newNum += numerals[arr[i + 1]] - numerals[arr[i]];
                i++;
            } else {
                newNum += numerals[arr[i]];
            }
        }
        return newNum;
    }

    static toRoman(num) {
        const arr = num.toString().split('').map(digit => Number(digit));
        const numbers = Object.fromEntries(Object.entries(numerals).map(([key, value]) => [value, key]));
        let newNum = arr.length > 3 ? (numbers[1000]).repeat(arr[0]) : '';
        for (let i = arr.length > 3 ? 1 : 0; i < arr.length; i++) {
            const mult = 10 ** (arr.length - i - 1);
            if (arr[i] % 5 === 4) {
                newNum += numbers[mult] + numbers[(Number(arr[i]) + 1) * mult];
            } else {
                newNum += numbers[mult * 5].repeat((parseInt(arr[i] / 5)));
                newNum += numbers[mult].repeat(arr[i] % 5);
            }
        }
        return newNum;
    }
}