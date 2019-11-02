'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let sum: number = 0;
let avg: number = 0;

for (let i = 0; i <= input; i++) {
    sum = sum + i;
}
console.log(sum);

for (let i = 0; i <= input; i++) {
    avg = sum / i;
}
console.log(avg);

export { }