/**
 * https://www.codewars.com/kata/54b724efac3d5402db00065e
 */

decodeMorse = function (morseCode) {
    const phrase = [];
    morseCode.trim().split('   ').forEach((word) => {
        phrase.push(word.split(' ').map((char) =>
            MORSE_CODE[char]).join(""));
    });
    return phrase.join(" ");
}