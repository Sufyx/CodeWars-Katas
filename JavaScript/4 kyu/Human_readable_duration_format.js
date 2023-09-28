/**
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a
 */

function formatDuration(seconds) {
    const timeUnitNumbers = [365, 24, 60, 60, 1];
    const timeUnitWords = ["year", "day", "hour", "minute", "second"];
    let secondsLeft = seconds;
    const vals = [];

    while (secondsLeft > 0) {
        const secondsInUnit = timeUnitNumbers.reduce((total, val) => total * val, 1);
        const unitVal = secondsLeft >= secondsInUnit ? parseInt(secondsLeft / secondsInUnit) : 0;
        if (unitVal > 0) {
            vals.push(parseInt(secondsLeft / secondsInUnit));
            secondsLeft -= vals[vals.length - 1] * secondsInUnit;
            vals.push(timeUnitWords[0] + (vals[vals.length - 1] > 1 ? "s," : ","));
        }
        timeUnitNumbers.shift();
        timeUnitWords.shift();
    }

    if (vals.length <= 2) {
        return (vals.length === 0 ? "now" : vals.join(" ").slice(0, -1));
    }
    return vals.slice(0, vals.length - 2).join(" ").slice(0, -1)
        + " and " + vals[vals.length - 2] + " "
        + vals[vals.length - 1].slice(0, -1);
}