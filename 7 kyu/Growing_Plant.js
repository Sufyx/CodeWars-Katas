/**
 * https://www.codewars.com/kata/58941fec8afa3618c9000184
 */

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    const heightDiff = desiredHeight - upSpeed;
    const growth = upSpeed - downSpeed;
    let res = (heightDiff / growth) + 1;
    if (!Number.isInteger(res)) {
        res = parseInt(res) + 1;
    }
    if (res <= 0) return 1;
    return res;
}