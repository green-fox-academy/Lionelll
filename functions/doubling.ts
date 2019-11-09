'use strict'

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123;

let result: number = 0;

function doubling(a: number): number {
    let x = a * 2;
    return x;
}
result = doubling(baseNum);

console.log(result);

export { }