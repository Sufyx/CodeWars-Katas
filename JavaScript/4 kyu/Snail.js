/**
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 */

function snail(array) {
    const snailArr = [];
    const n = array[0].length;
    let border = 0, index = 0;
    while (index < n * n) {
        for (let i = 0 + border; i < n - border; i++) {
            snailArr.push(array[border][i]);
            index++;
        }
        for (let j = 1 + border; j < n - border; j++) {
            snailArr.push(array[j][n - border - 1]);
            index++;
        }
        for (let i = n - border - 2; i >= 0 + border; i--) {
            snailArr.push(array[n - border - 1][i]);
            index++;
        }
        for (let j = n - border - 2; j >= 0 + border + 1; j--) {
            snailArr.push(array[j][0 + border]);
            index++;
        }
        border++;
    }
    return snailArr;
}