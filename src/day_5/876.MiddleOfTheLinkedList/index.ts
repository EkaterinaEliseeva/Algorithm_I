// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  let countNodes = 1;
  let copy = head;

  while (copy?.next) {
    copy = copy.next;
    countNodes++;
  }

  let halfNodes = Math.floor(countNodes / 2);

  while (halfNodes) {
    head = head ? head.next : null;
    halfNodes--;
  }

  return head;
}
