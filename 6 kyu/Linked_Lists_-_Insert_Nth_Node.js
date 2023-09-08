/**
 * https://www.codewars.com/kata/55cacc3039607536c6000081
 */

function Node(data) {
    this.data = data;
    this.next = null;
}

function insertNth(head, index, data) {
    const node = new Node(data);
    if (index === 0) {
        node.next = head;
        return node;
    }
    let curr = head;
    let count = 0, prev = null;
    while ((count !== index) && (curr !== null)) {
        prev = curr;
        curr = curr.next;
        count++;
    }
    if (count < index)
        throw new Error("InvalidArgumentException");
    node.next = curr;
    if (prev) prev.next = node;
    return head;
}