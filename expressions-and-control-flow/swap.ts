'use strict';

// Swap the values of these variables

let a: number = 123;
let b: number = 526;

// stack overflow cheat solution
// b = [a, a = b][0];

let c = a + b;
a = c - a;
b = c - b;

console.log(a);
console.log(b);

export { }