/**
 * https://www.codewars.com/kata/598106cb34e205e074000031
 */

var countDeafRats = function (town) {
    const spacedTown = town.replace(/(~O|O~)/g, ' $1 ')

    const leftRats = spacedTown.substring(0, spacedTown.indexOf('P'));
    const rightRats = spacedTown.substring(spacedTown.indexOf('P') + 1);

    const leftMatches = (leftRats.match(/(O~)/g) || []).length;
    const righttMatches = (rightRats.match(/(~O)/g) || []).length;

    return leftMatches + righttMatches;
}