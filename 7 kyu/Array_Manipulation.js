/**
 * https://www.codewars.com/kata/58d5e6c114286c8594000027
 */

function arrayManip(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const min = Math.min(...array.slice(i + 1).filter((x) => x > array[i]));
        const leastGreater = (min !== Infinity) ? min : -1;
        newArr.push(leastGreater);
    }
    return newArr;
}