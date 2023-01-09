var containsDuplicate = function (nums) {
  let buffer = new Set();
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    if (buffer.has(nums[i])) result = true;
    buffer.add(nums[i]);
  }
  return result;
};

// var containsDuplicate = function (nums) {
//     let copy = false;
//     let buffer = [];

//     for (let i = 0; i < nums.length; i++) {
//       buffer.push(nums[i]);
//       for (let j = 0; j < buffer.length - 1; j++) {
//         if (buffer[j] === nums[i]) {
//           copy = true;
//           break;
//         }
//       }
//     }
//     return copy;
//   };
