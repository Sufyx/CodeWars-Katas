/**
 * https://www.codewars.com/kata/54d81488b981293527000c8f
 */

function sumPairs(ints, s) {
    const tracker = {};
    for (let i = 0; i < ints.length; i++) {
        const diff = s - ints[i];
        if ((typeof tracker[diff] !== 'undefined')) {
            return ([diff, ints[i]]);
        }
        if (!tracker[ints[i]]) {
            tracker[ints[i]] = i;
        }
    }
    return undefined;
}