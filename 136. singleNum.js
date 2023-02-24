// Runtime - >75%, Memory - >37%
var singleNumber2 = function (nums) {
  var i = 0;
  var set = new Set();

  while (i < nums.length) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
    i++;
  }

  console.log(Array.from(set));
  return Array.from(set);
};

singleNumber2([2, 1, 2, 2, 2, 3, 3, 4, 8]);

var singleNumbereg = function (nums) {
  var total = 0;

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    total ^= num;
  }
  console.log("total:", total);
  return total;
};

singleNumbereg([2, 1, 2, 2, 2, 3, 3, 4, 8]);

// Runtime - >14%, Memory - >7%

var singleNumber = function (nums) {
  var i = 0;
  var buffer = [];

  while (i < nums.length) {
    if (!buffer.includes(nums[i])) {
      buffer.push(nums[i]);
    } else {
      let idx = buffer.indexOf(nums[i]);
      buffer.splice(idx, 1);
      console.log("idx:", idx);
    }

    i++;
  }

  console.log(buffer);
  return buffer;
};
