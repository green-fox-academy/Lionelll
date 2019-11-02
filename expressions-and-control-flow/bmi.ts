'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

let BMI = massInKg / heightInM;

let roundedBMI = Math.round(BMI);

console.log('The body mass indedx is ' + BMI);
console.log('The body mass index is ' + roundedBMI);

export { }