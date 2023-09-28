/**
 * https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
 */

function firstNonRepeatingLetter(s) {
    const str = s.toLowerCase();
    for (let char = 0; char < str.length; char++) {
        if ((str.indexOf(str[char]) === str.lastIndexOf(str[char])))
            return s[char];
    }
    return "";
}