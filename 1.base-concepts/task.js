"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percent = parseInt(percent) / 100 / 12;
	let contribution = parseInt(contribution); 
	let amount = parseInt(amount);
	let countMonths = parseInt(countMonths);
	
	let s = amount - contribution;
    	let pay = s * (percent + percent / (((1 + percent) ** cm) - 1));
   	let totalAmount = (pay * cm).toFixed(2);
    	console.log(totalAmount);
    	return +totalAmount;
}
