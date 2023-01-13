var maxProfit = function (prices) {
  let max = 0;

  for (var i = 0; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      if (j > i) {
        let diff = prices[j] - prices[i];
        max = max > diff ? max : diff;
      }
    }
  }

  console.log("max", max);
  return max;
};

// Good hashmap approach, but having an exception case
var maxProfit2 = function (prices) {
  let max = 0;
  const map = new Map();

  for (let i = 0; i < prices.length; i++) {
    map.set(i, prices[i]);
  }
  console.log("map:", map);
  const mapSort = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
  console.log("mapSort:", mapSort);

  const size = mapSort.size;
  let firstEntry = [...mapSort.entries()].shift();
  console.log("firstEntry:", firstEntry);
  for (let i = 0; i < size; i++) {
    let lastKey = [...mapSort.keys()].pop();
    let lastEntry = [...mapSort.entries()].pop();
    console.log("lastEntry:", lastEntry);

    if (lastEntry[0] > firstEntry[0]) {
      console.log(lastEntry[1] - firstEntry[1]);
      max = lastEntry[1] - firstEntry[1];
      break;
    } else {
      mapSort.delete(lastKey);
    }
  }

  return max;
};

// Solution with a lot of help
var maxProfit3 = function (prices) {
  let max = 0;
  let min = 100000000;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let profit = prices[i] - min;
      max = max > profit ? max : profit;
    }
  }
  console.log("max:", max);
  return max;
};

var maxProfit4 = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else {
      max = Math.max(max, prices[i] - min);
    }
  }
  console.log("max:", max);
  return max;
};

maxProfit4([7, 1, 7]);
