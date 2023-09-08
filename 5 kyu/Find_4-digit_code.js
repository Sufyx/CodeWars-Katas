/**
 * https://www.codewars.com/kata/638b042bf418c453377f28ad
 */

let allCodes;
let prevCode;

function game(matches) {
    if (matches === -1) {
        allCodes = [];
        for (let i = 123; i <= 9876; i++) {
            const numString = (i < 1000) ? ("0" + i.toString()) : i.toString();
            const digitArray = numString.split('').map((digit) => Number(digit));
            if ((new Set(digitArray)).size === 4)
                allCodes.push(digitArray);
        }
    } else {
        allCodes = allCodes.filter(code => {
            let matchCount = 0;
            code.forEach((digit, i) => {
                if (digit === prevCode[i])
                    matchCount++;
            });
            return matchCount === matches;
        });
    }
    prevCode = allCodes[0];
    return allCodes[0];
}