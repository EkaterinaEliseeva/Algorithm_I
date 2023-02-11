// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let copy = head;

  for (let i = 0; i < n; i++) {
    copy = copy ? copy.next : null;
  }

  // TODO

  return null;
}
