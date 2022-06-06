"use strict";

// Ejercicio 1

function showNumbers(num) {
  if (num <= 100) {
    console.log(num);
    showNumbers(num + 1);
  }
}

showNumbers(1);

// Ejercicio 2

const showNumbers2 = (num) => {
  if (num >= 500) {
    console.log(num);
    showNumbers2(num - 2);
  }
};
showNumbers2(1000);

// Ejercicio 3

const marks = [6, 8, 9, 2, 5, 10];

function average(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum / marks.length;
}

console.log(Math.floor(average(marks)));

// Le saque el decimal, se veia feo.

// console.log(average(marks).toFixed(1));

// Asi seria con 1 decimal.
