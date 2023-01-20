/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Runtime - >49%, Space - >12%
var hasCycle = function (head) {
  if (!head) return false;
  var set = new Set();
  const result = check(head, set);
  console.log(result);
  return result;
};

function check(curr, set) {
  while (curr.next) {
    if (set.has(curr)) return true;
    set.add(curr);
    curr = curr.next;
  }
  return false;
}

// Original type of logic recursively - Beats 98% Runtime, only 5% Space

var hasCycle = function (head) {
  if (!head) return false;
  var set = new Set();
  const result = check(head, set);
  return result;
};

function check(curr, set) {
  if (!curr.next) return false;
  if (set.has(curr)) return true;
  set.add(curr);
  // console.log(curr);
  return check(curr.next, set);
}

// Optimized and more readable refactored solution
// Runtime - >47%, Space >30%

var hasCycle = function (head) {
  var set = new Set();
  if (!head) return false;
  while (head.next) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
};
