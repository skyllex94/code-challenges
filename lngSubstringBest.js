function lngstSub(s) {
  let master = [...s];
  let set = [];
  let max = 0;

  for (let i = 0; i < master.length; i++) {
    if (set.indexOf(master[i]) < 0) {
      set.push(master[i]);
      max = set.length > max ? set.length : max;
    } else {
      set.splice(0, set.indexOf(master[i]) + 1);
      set.push(master[i]);
    }
  }

  console.log("set:", set);
  console.log("max:", max);
}

lngstSub("sadlkhassdflsdjhf[spdfksdf");
