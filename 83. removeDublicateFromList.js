var deleteDuplicates = function (head) {
  var buffer = head;

  while (buffer) {
    while (buffer.next && buffer.val === buffer.next.val)
      buffer.next = buffer.next.next;
    buffer = buffer.next;
  }
  return head;
};

// Almost reached solution by myself, but not truly mine
// Runtime and Space - >~50%
