'use strict'

//   Create a function called `printParams`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printParams(...rest: number[]): number {

    console.log(...rest);

    return;
}

printParams(1, 2, 5, 7, 8, 9);
export { }