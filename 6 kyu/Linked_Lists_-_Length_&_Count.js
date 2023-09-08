/**
 * https://www.codewars.com/kata/55beec7dd347078289000021
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    if (!head) return 0;
    return length(head.next) + 1;
}

function count(head, data) {
    if (!head) return 0;
    const add = head.data == data ? 1 : 0;
    return count(head.next, data) + add;
}