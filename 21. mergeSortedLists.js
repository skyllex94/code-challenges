/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// ** ListNode => Head -> { val: "1", next: {val: "2", next: {val: "4", next: null}}}

// ------------------------------------------------------------------------------------
//  Working - beating only 5% in Runtime and Memory
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;

  let sum = new ListNode();
  sum = mergeLists(list1, list2, sum);

  removeLastNode(sum);
  return sum;
};

function removeLastNode(head) {
  if (!head) return null;

  if (head.next == null) {
    return null;
  }

  // Find the second last node
  var second_last = head;
  while (second_last.next.next != null) second_last = second_last.next;

  // Change next of second last
  second_last.next = null;

  return head;
}

function mergeLists(l1, l2, sum) {
  if (!l1 && !l2) return sum;

  if (!l1) {
    sum.val = l2.val;
    console.log("sum:", sum);
    sum.next = new ListNode();
    mergeLists(l1, l2.next, sum.next);
    return sum;
  }

  if (!l2) {
    sum.val = l1.val;
    console.log("sum:", sum);
    sum.next = new ListNode();
    mergeLists(l1.next, l2, sum.next);
    return sum;
  }

  if (l1.val < l2.val) {
    sum.val = l1.val;
    console.log("sum:", sum);
    sum.next = new ListNode();
    mergeLists(l1.next, l2, sum.next);
    return sum;
  }

  if (l1.val >= l2.val) {
    sum.val = l2.val;
    console.log("sum:", sum);
    sum.next = new ListNode();
    mergeLists(l1, l2.next, sum.next);
    return sum;
  }
}

// Best Runtime solution
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
