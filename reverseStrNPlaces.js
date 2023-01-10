// Second Approach - Beats 70% Runtime and 35% Memory
var reverseStr2 = function (s, k) {
  let toReverse = "";
  let result = "";

  for (let i = 0; i < s.length; i = i + k) {
    // if (i % k === 0) {
    //   toReverse = s.substring(i, i + k);
    //   result += toReverse.split("").reverse().join("");
    //   i = i + k;
    // }
    // if (s[i]) result += s[i];
    console.log(s[i]);
  }
  return result;
};

reverseStr2("abcdefg", 2);

// First Approach - Beats 5% only from each runtime and memory
var reverseStr1 = function (s, k) {
  let toReverse = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i % k === 0) {
      for (let j = i; j < i + k; j++) {
        console.log("*", s[j]);
        toReverse.push(s[j]);
      }
      result += toReverse.reverse().join("");
      toReverse = [];
      i = i + k;
    }

    if (s[i]) result += s[i];
  }
  console.log("result", result);
  return result;
};
