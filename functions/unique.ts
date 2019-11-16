'use strict'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(array: number[]) {

    const numArray: number[] = [];

    for (let i = 0; i < array.length; i++) {

        if (numArray.indexOf(array[i]) === -1) {

            numArray.push(array[i]);

        }

    }
    return numArray;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))

export { }