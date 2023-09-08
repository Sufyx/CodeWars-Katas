/**
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
 */

function solution(list) {
    let range = [], formatted = [];
    for (let i = 0; i < list.length; i++) {
        range.push(list[i]);
        if ((i === list.length - 1) || (list[i] + 1) !== list[i + 1]) {
            if (range.length >= 3) {
                formatted.push(`${range[0]}-${list[i]}`);
            } else {
                formatted = formatted.concat(range);
            }
            range = [];
        }
    }
    return formatted.join(",");
}