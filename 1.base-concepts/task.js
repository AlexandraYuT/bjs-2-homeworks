"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percent = parseInt(percent) / 100 / 12; //процентная ставка
	let contribution = parseInt(contribution); //начальный взнос 
	let amount = parseInt(amount); //общая стоимость
	let countMonths = parseInt(countMonths); // срок кредита

	if (isNaN(percent) || percent < 0) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	} else if (isNaN(contribution) || contribution < 0) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	} else if (isNaN(amount) || amount < 0) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	} else {
		if (isNaN(countMonths) || countMonths < 0) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
		}

	}
}
