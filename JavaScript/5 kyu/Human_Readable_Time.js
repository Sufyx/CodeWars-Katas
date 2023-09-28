/**
 * https://www.codewars.com/kata/52685f7382004e774f0001f7
 */

function humanReadable(seconds) {
    const hours = parseInt(seconds / 60 / 60);
    const minutes = parseInt((seconds - (hours * 60 * 60)) / 60);
    const leftSeconds = seconds - (hours * 60 * 60) - (minutes * 60)
    return ((hours < 10 ? '0' + hours : hours)
        + ':' + (minutes < 10 ? '0' + minutes : minutes)
        + ':' + (leftSeconds < 10 ? '0' + leftSeconds : leftSeconds));
}