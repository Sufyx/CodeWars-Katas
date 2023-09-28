/**
 * https://www.codewars.com/kata/5264d2b162488dc400000001
 */

function spinWords(string) {
    let spunSentence = "";
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            spunSentence += reverseString(words[i]);
        } else {
            spunSentence += words[i];
        }
        if (i < words.length - 1) {
            spunSentence += " ";
        }
    }
    return spunSentence;
}
function reverseString(word) {
    let spunWord = "";
    for (let i = 0; i < word.length; i++) {
        spunWord += word[word.length - i - 1];
    }
    return spunWord;
}