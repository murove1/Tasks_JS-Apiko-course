function queueTime(customers, tillsCount) {
  if (customers.length === 0) {
    return 0;
  }

  let tills = [];
  for (let i = 0; i < tillsCount; i++) {
    tills.push(0);
  }

  while (customers.length > 0) {
    let indexMin = tills.indexOf(Math.min.apply(null, tills));
    tills[indexMin] += customers.shift();
  }
  return Math.max.apply(null, tills);
}

console.log(queueTime([26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14], 1));
console.log(queueTime([34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47], 4));
console.log(queueTime([19, 1, 27, 35, 16, 4, 45, 49, 41, 25], 5));
