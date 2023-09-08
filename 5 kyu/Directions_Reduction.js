/**
 * https://www.codewars.com/kata/550f22f4d758534c1100025a
 */

const reductor = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
};

function dirReduc(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] === reductor[arr[i + 1]]) {
            arr.splice(i, 2);
            i = (i === 0) ? 0 : (i - 1);
        } else
            i++;
    }
    return [...arr];
}