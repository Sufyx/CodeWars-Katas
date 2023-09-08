/**
 * https://www.codewars.com/kata/534eb5ad704a49dcfa000ba6
 */

var hanoi = function (disks) {
    if (disks <= 1) return disks;

    const stack = [];
    stack.push({ disks, source: 'rod1', auxiliary: 'rod2', target: 'rod3' });
    let moves = 0;

    while (stack.length > 0) {
        const { disks, source, auxiliary, target } = stack.pop();

        if (disks === 1) {
            moves++;
        } else {
            stack.push({ disks: disks - 1, source, auxiliary, target });
            stack.push({ disks: 1, source, auxiliary, target });
            stack.push({ disks: disks - 1, source: auxiliary, auxiliary: source, target });
        }
    }
    console.log("solved at ", moves);
    return moves;
};