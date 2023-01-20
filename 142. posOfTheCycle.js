/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Runtime - >56%, Memory - > 54%
var detectCycle = function (head) {
  var set = new Set();
  if (!head) return null;
  while (head.next) {
    // console.log(head.val);
    if (set.has(head)) {
      // var idx = [...set].indexOf(head);
      // console.log('idx: ', idx)
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};

// Best solution for time and space from leetcode

var detectCycleBest = function (head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while (show != fast) {
        show = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
