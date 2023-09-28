/**
 * https://www.codewars.com/kata/55ec80d40d5de30631000025
 */

function decompose(num) {
    let total = 0;
    const kVals = [];
    let base = 2;
    let run = true;
    while (run) {
        let power = 2;
        if (total + Math.pow(base, power) > num) {
            const res = [[...kVals], (num - total)];
            return res;
        }
        while (total + Math.pow(base, power) <= num) {
            power++;
        }
        kVals.push(power - 1);
        total += Math.pow(base, power - 1);
        base++;
    }
}