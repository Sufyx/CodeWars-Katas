/**
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd
 */

function sumIntervals(intervals) {
    const sorted = [...intervals.sort((a, b) => a[0] - b[0])];
    let sum = 0, prev = sorted[0];
    for (let i = 1; i < sorted.length; i++) {
        const interval = sorted[i];
        if (interval[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            sum += prev[1] - prev[0];
            prev = interval;
        }
    }
    sum += prev[1] - prev[0];
    return sum;
}