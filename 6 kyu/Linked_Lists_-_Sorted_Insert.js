/**
 * https://www.codewars.com/kata/55cc33e97259667a08000044
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    const node = new Node(data);
    if (!head || head.data > data) {
        node.next = head;
        return node;
    }
    let curr = head, prev = null;
    while (curr != null) {
        if ((!prev || data >= prev.data) && (data <= curr.data)) {
            break;
        }
        prev = curr;
        curr = curr.next;
    }
    if (prev) {
        prev.next = node;
    }
    node.next = curr;
    return head;
}