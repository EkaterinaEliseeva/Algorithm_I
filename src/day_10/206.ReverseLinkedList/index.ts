//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
function reverseList(head: ListNode | null): ListNode | null {
  let reversed = null;

  while (head) {
    reversed = reversed ? new ListNode(head.val, reversed) : new ListNode(head.val)
    head = head.next
  }

  return reversed;
};
*/

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const reversed = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reversed;
}
