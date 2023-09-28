/**
 * https://www.codewars.com/kata/513e08acc600c94f01000001
 */

const hexVals = {
    0: "0", 1: "1", 2: "2", 3: "3", 4: "4",
    5: "5", 6: "6", 7: "7", 8: "8", 9: "9",
    10: "A", 11: "B", 12: "C", 13: "D",
    14: "E", 15: "F"
};
const roundNum = (num) => {
    if (num < 0) return 0;
    if (num > 255) return 255;
    return parseInt(num);
}
const getHex = (num) => {
    const hex = parseInt(num / 16);
    return (hexVals[hex] + hexVals[((num / 16 - hex) * 16)]);
}

function rgb(r, g, b) {
    return (getHex(roundNum(r)) + getHex(roundNum(g)) + getHex(roundNum(b)));
}