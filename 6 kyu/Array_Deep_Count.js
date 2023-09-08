/**
 * https://www.codewars.com/kata/596f72bbe7cd7296d1000029
 */

function deepCount(a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        counter++;
        if (Array.isArray(a[i])) {
            counter += deepCount(a[i]);
        }
    }
    return counter;
}