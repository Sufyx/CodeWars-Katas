/**
 * https://www.codewars.com/kata/582c297e56373f0426000098
 */

function stringify(list, str = "") {
    if (!list) return ("null");
    return (str + list.data + " -> " + stringify(list.next));
}