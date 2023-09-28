/**
 * https://www.codewars.com/kata/5a62173ee626c5f0e40000e9
 */

const isOpeningBrace = (char) => {
    return (char === "(" || char === "[" || char === "{");
}
const isClosingBrace = (char) => {
    return (char === ")" || char === "]" || char === "}");
}
const isMathcingBraces = (open, close) => {
    if (open === "(") return close === ")";
    if (open === "[") return close === "]";
    if (open === "{") return close === "}";
}

function isBalanced(string) {
    let bracesStack = [];
    let balancedCount = 0;
    let leftOverCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (isOpeningBrace(string[i])) {
            bracesStack.push(string[i]);
        } else if (isClosingBrace(string[i])) {
            const popped = bracesStack.pop();
            if (isMathcingBraces(popped, string[i])) {
                balancedCount++;
            } else {
                leftOverCount += (popped !== undefined) ? 2 : 1;
                leftOverCount += bracesStack.length;
                bracesStack = [];
            }
        }
    }
    leftOverCount += bracesStack.length;
    return [leftOverCount === 0, balancedCount, leftOverCount];
}