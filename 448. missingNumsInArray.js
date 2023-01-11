// Beats 27% Runtime, 85% Memory Results
var findDisappearedNumbers2 = function (nums) {
  var resultArr = [];

  for (var i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) resultArr.push(i);
  }
  return resultArr;
};

findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]);

var findDisappearedNumbers = function (nums) {
  var sortArr = Array.from(new Set(nums));
  var resultArr = [];

  sortArr.sort(function (a, b) {
    return a - b;
  });
  console.log("sortArr", sortArr);

  for (var i = 0; i <= nums.length; i++) {
    console.log("sortArr[i]", sortArr[i], i);
    if (sortArr[i] !== i) {
      sortArr.splice(i, 0, i);
      resultArr.push(i);
      console.log("resultArr:", resultArr);
    }
  }

  resultArr.shift();
  console.log("resultArr:", resultArr);
  return resultArr;

  // return an array on nums missing
};
