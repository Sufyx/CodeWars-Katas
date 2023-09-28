/**
 * https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
 */

function loop_size(node) {
    let slowLink = node, fastLink = node;

    while (slowLink !== null && fastLink !== null) {
        slowLink = slowLink.next;
        fastLink = fastLink.next.next;
        if (slowLink === fastLink) break;
    }

    let link = slowLink, count = 1;
    while (link.next !== slowLink) {
        count++;
        link = link.next;
    }
    return count;
}