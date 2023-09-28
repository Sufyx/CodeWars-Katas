/**
 * https://www.codewars.com/kata/51c8e37cee245da6b40000bd
 */

function includesMarkers(input, markers) {
    for (const marker of markers) {
        if (input.includes(marker))
            return marker;
    }
    return false;
}

function solution(input, markers) {
    let marker = includesMarkers(input, markers);
    while (marker) {
        const start = input.slice(0, input.indexOf(marker)).trim();
        const endIndex = input.indexOf("\n", input.indexOf(marker));
        let end = input.slice(endIndex === -1 ? input.length : endIndex).trim();
        if (endIndex !== -1) end = "\n" + end;
        input = start + end;
        marker = includesMarkers(input, markers);
    }
    return input;
};