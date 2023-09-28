/**
 * https://www.codewars.com/kata/55d9f257d60c5fd98d00001b
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function removeDuplicates(head) {
    let curr = head;
    while (curr) {
        let next = curr.next;
        while (next && (curr.data === next.data)) {
            next = next.next;
        }
        curr.next = next;
        curr = next;
    }
    return head;
}