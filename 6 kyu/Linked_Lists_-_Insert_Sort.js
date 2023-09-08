/**
 * https://www.codewars.com/kata/55d0c7ee7c0d30a12b000045
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
    let curr = head.next, prev = head;
    while (curr != null) {
        if ((data >= prev.data) && (data <= curr.data))
            break;
        prev = curr;
        curr = curr.next;
    }
    prev.next = node;
    node.next = curr;
    return head;
}

function insertSort(head) {
    let newList = null, curr = head;
    while (curr != null) {
        newList = sortedInsert(newList, curr.data);
        curr = curr.next;
    }
    return newList;
}