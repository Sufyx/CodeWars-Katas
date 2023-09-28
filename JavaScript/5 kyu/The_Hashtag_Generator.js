/**
 * https://www.codewars.com/kata/52449b062fb80683ec000024
 */

function generateHashtag(str) {
    if (str.trim().length === 0) return false;
    const capitalized = str.split(" ").map((word) =>
        (word.charAt(0).toUpperCase() + word.substring(1, word.length)));
    const res = ("#" + capitalized.join(""));
    return (res.length > 140) ? false : res;
}