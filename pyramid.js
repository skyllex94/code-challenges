function pyramid(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    line += " ".repeat(n - i) + "*".repeat(i + (i + 1)) + "\n";
  }
  console.log(line);
}

// pyramid(10);

// Recursively creating the pyramid problem
var pyramid2 = function (n) {
  let line = "";

  for (let i = 0; i < n; i++) {
    let spaces = recursion(n - i, "", "space");
    let astresk = recursion(i + (i + 1), "");
    line += spaces + astresk + spaces + "\n";
  }
  console.log(line);
};

function recursion(num, symbol, type) {
  if (num === 0) return symbol;
  if (type === "space") symbol += " ";
  else symbol += "*";

  return recursion(num - 1, symbol, type);
}

// pyramid2(20);

function remainder(n) {
  let line = "";

  for (let i = 0; i < n; i++) {
    line +=
      " ".repeat(n - i) + "#".repeat(i + (i + 1)) + " ".repeat(n - i) + "\n";
  }

  console.log(line);
}

remainder(5);
