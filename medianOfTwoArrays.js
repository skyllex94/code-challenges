var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];
  let median = 0;

  for (let i = 0; i < nums1.length; i++) {
    arr.push(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    arr.push(nums2[i]);
  }
  arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length % 2 === 1) {
    const medVal = Math.floor(arr.length / 2);
    median = arr[medVal];
  } else {
    const medVal = Math.floor(arr.length / 2);
    console.log("medVal:", arr[medVal]);
    median = (arr[medVal - 1] + arr[medVal]) / 2;
  }
  console.log("median:", median);
  console.log("arr", arr);
};

findMedianSortedArrays([1, 3, 4], [2, 5, 11, 8]);
