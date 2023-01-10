function pyramid(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    line += " ".repeat(n - i) + "*".repeat(i + (i + 1)) + "\n";
  }
  console.log(line);
}

pyramid(10);
