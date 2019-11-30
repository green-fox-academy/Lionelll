// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

let num: number = 0;

function divide(num: number): number {

    let result: number;

    result = 10 / num;

    if (num === 0) {

        throw new Error('fail');
    }

    return result;
}

try {

    divide(num);

} catch (err) {

    console.log(err.message);

}

export { }