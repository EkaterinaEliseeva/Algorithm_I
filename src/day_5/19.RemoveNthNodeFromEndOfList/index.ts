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
  let fast = head;
  let slow = head;

  while (n >= 1) {
    fast = fast?.next ?? null;
    n--;
  }

  if (fast === null) {
    head = head?.next ?? null;
  } else {
    while (fast.next !== null) {
      slow = slow?.next ?? null;
      fast = fast.next;
    }

    (slow as ListNode).next = slow?.next?.next ?? null;
  }

  return head;
}