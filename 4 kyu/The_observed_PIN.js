/**
 * https://www.codewars.com/kata/5263c6999e0f40dee200059d
 */

const adjacents = {
    "1": ["1", "2", "4"],
    "2": ["1", "2", "3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3", "5", "6", "9"],
    "7": ["4", "7", "8"],
    "8": ["5", "7", "8", "9", "0"],
    "9": ["6", "8", "9"],
    "0": ["8", "0"],
}

function getPINs(observed) {
    const options = [];
    for (let i = 0; i < observed.length; i++) {
        options.push([...adjacents[observed[i]]]);
    }
    const res = [];
    function findCombinations(arrays, current = [], index = 0) {
        if (index === arrays.length) {
            res.push(current.join(""));
            return;
        }
        const currentArray = arrays[index];
        for (let i = 0; i < currentArray.length; i++) {
            const next = [...current, currentArray[i]];
            findCombinations(arrays, next, index + 1);
        }
    }
    findCombinations(options);
    return res;
}