var missingNumber = function (nums) {
  let sorted = [...nums];
  sorted.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length + 1; i++) {
    if (sorted[i] !== i) return i;
  }
};
// Runtime optimized solution

var missingNumber2 = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) console.log(i);
  }
};
// Memory optimized solution

missingNumber2([3, 0, 1]);
