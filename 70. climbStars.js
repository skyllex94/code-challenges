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

// First working approach hitting runtime issues with scaling
var climbStairs = function (n) {
  var start = 0;
  var result = newPath(start, n);
  console.log("result:", result);
};

function newPath(step, limit) {
  if (step > limit) return 0;
  if (step === limit) return 1;

  return newPath(step + 1, limit) + newPath(step + 2, limit);
}

// Second approach wt initial recurssion - hitting runtime issues
var climbStairs2 = function (limit, step = 0) {
  if (step > limit) return 0;
  if (step === limit) return 1;

  let result = climbStairs2(limit, step + 1) + climbStairs2(limit, step + 2);
  console.log("result:", result);
  return result;
};

climbStairs0(10);
