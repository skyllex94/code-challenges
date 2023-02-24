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

for (let i = 0; i < arr.length; i++) {
  if (!nums.includes(i)) console.log(i);
}

// Diffrent prepping solution
function missingNums3(arr) {
  const nums = [...arr];
  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] - 1) return console.log(nums[i] + 1);
  }
}

missingNums3([3, 0, 1, 2, 7]);
