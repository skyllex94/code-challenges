var findMedianSortedArrays = function (nums1, nums2) {
  const sum = [...nums1, ...nums2];
  sum.sort(function (a, b) {
    return a - b;
  });

  if (sum.length % 2 === 1) {
    const medVal = Math.floor(sum.length / 2);
    median = sum[medVal];
  } else {
    const medVal = Math.floor(sum.length / 2);
    median = (sum[medVal - 1] + sum[medVal]) / 2;
  }
  console.log("median:", median);
  console.log("sum", sum);
};

findMedianSortedArrays([1, 3, 4], [2, 5, 11]);
