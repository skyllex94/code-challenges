function multiplyByTwo(...prop) {
  let arr = [...prop];
  return arr.map((curr) => curr * 2);
}

console.log(multiplyByTwo(1, 2, 3, 4, 5)); // return [2,4,6,8,10]

const obj = {
  a: 8,
  say: function () {
    // const foo = this.a;
    console.log(foo);
    setTimeout(function () {
      console.log(this.a);
    }, 1000);
  },
};

obj.say();
