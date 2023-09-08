/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f
 */

function pigIt(str) {
    const words = str.split(" ");
    let res = '';
    for (let i = 0; i < words.length; i++) {
        if (!words[i].match(/[a-zA-Z]/)) {
            res += " " + words[i]
        } else {
            res += " " + words[i].substring(1) + words[i].charAt(0) + 'ay';
        }
    }
    return res.substring(1);
}