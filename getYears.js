function getYears(p, i, t, d, year = 1) {  
  let interestRate = p * i;
  let tax = interestRate * t;
  let annualProfit = p + interestRate - tax;  
  
  // console.log(annualProfit);
  // console.log(year);

  if (annualProfit < d) {
    return getYears(annualProfit, i, t, d, year + 1);
  }
  
  console.log(year);
}

console.log(getYears(1000, 0.05, 0.18, 1100));
console.log(getYears(1000, 0.01625, 0.18, 1200));