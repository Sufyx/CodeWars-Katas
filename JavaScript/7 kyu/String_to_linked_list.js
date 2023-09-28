/**
 * https://www.codewars.com/kata/582c5382f000e535100001a7
 */

function parse(string) {
    return getList(string.split(" -> "));
}

function getList(nodeArr, index = 0) {
    if ((index >= nodeArr.length - 1)) return null;
    return new Node(Number(nodeArr[index]), getList(nodeArr, index + 1));
}