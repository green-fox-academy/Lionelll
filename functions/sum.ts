'use strict'


// Write a function called `sum` that returns the sum of 
// numbers from zero to the given parameter

let number = 5;

function sum(a: number): number {

    let num = 0;

    for (let i = 0; i < a + 1; i++) {

        num = num + i;

    }
    return num;
}
console.log(sum(number));

export { }