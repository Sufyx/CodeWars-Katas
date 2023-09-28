/**
 * https://www.codewars.com/kata/54b72c16cd7f5154e9000457
 */

var decodeBits = function (bits) {

    // make array of bits, after trimming 0s
    const bitsArr = bits.substring(bits.indexOf("1"), bits.lastIndexOf("1") + 1).split("");

    // find the shortest sequence of identical bits, that will be the time-unit
    let timeUnit, sequence = 0, tracker = bitsArr[0];
    bitsArr.push("0");
    for (let i = 0; i < bitsArr.length; i++) {
        if (tracker !== bitsArr[i]) { // sequence broken, check if it was the shortest so far
            if (!timeUnit || (sequence < timeUnit))
                timeUnit = sequence;
            tracker = bitsArr[i];
            sequence = 1;
        } else sequence++;
    }

    // convert bit sequences into morse strings, according to length in time-units
    sequence = 0, tracker = bitsArr[0], bitsArr.push("0");
    let morse = "";
    for (let i = 0; i < bitsArr.length; i++) {
        if (tracker !== bitsArr[i]) { // sequence broken, check which morse value it was
            if (tracker === "1") {
                if (sequence === timeUnit) morse += ".";
                if (sequence === timeUnit * 3) morse += "-";
            } else {
                if (sequence === timeUnit * 3) morse += (" ");
                if (sequence === timeUnit * 7) morse += (" ").repeat(3);
            }
            tracker = bitsArr[i];
            sequence = 1;
        } else sequence++;
    }
    return morse;
}

var decodeMorse = function (morseCode) {
    const phrase = [];
    morseCode.trim().split('   ').forEach((word) => {
        phrase.push(word.split(' ').map((char) =>
            MORSE_CODE[char]).join(""));
    });
    return phrase.join(" ");
}