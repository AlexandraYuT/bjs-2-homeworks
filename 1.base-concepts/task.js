"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } 
  return arr;
}

 function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let loanBody = amount - countMonths;
	let interestRate = percent / 100 / 12;
	let payment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
	return (payment * countMonths).toFixed(2);
 }
