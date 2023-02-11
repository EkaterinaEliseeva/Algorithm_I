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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let result = null;
  const array = [];

  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val > list2.val) {
        array.push(list2.val);
        list2 = list2?.next ?? null;
      } else {
        array.push(list1.val);
        list1 = list1?.next ?? null;
      }
    }

    if (list1 && !list2) {
      array.push(list1.val);
      list1 = list1?.next ?? null;
    }

    if (!list1 && list2) {
      array.push(list2.val);
      list2 = list2?.next ?? null;
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    result = new ListNode(array[i], result);
  }

  return result;
}
*/

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 && list2) {
    if (list1.val >= list2.val) {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    } else {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    }
  }

  if (list1 && !list2) {
    return list1;
  }

  if (!list1 && list2) {
    return list2;
  }

  return null;
}
