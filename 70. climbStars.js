// Primary tryout - non-working / working after a bit of iterations
var climbStairs0 = function (n) {
  let result = newPath(0, n, 0);
  console.log("result", result);
};

function newPath(step, limit, ways) {
  console.log("step:", step, "limit:", limit);

  if (step > limit) return 0;
  if (step === limit) return 1;

  if (step < limit)
    newPath(step + 1, limit, ways) + newPath(step + 2, limit, ways);
}

// Second approach wt initial recurssion - hitting runtime issues
var climbStairs2 = function (limit, step = 0) {
  if (step > limit) return 0;
  if (step === limit) return 1;

  let result = climbStairs2(limit, step + 1) + climbStairs2(limit, step + 2);
  console.log("result:", result);
  return result;
};

// Third approach - working - Runtime >64%, Memory >76%
var climbStairs = function (n) {
  var start = 0;
  var memo = [];
  var result = newPath(start, n, memo);
  console.log("result:", result);
  return result;
};

function newPath(step, limit, memo) {
  if (step > limit) return 0;
  if (step === limit) return 1;
  if (memo[step]) return memo[step];

  memo[step] = newPath(step + 1, limit, memo) + newPath(step + 2, limit, memo);
  // You can add additional steps as you please - newPath(step + 3, limit, memo);

  return memo[step];
}

// Forth Approach - Runtime >94%, Memory >7%
var climbStairs4 = function (n) {
  var sum = 0,
    first = 0,
    second = 0;

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      first = i;
      second = i + 1;
    }

    sum = first + second;
    first = second;
    second = sum;
  }
  console.log("sum:", sum);
  return sum;
};

climbStairs(10);
