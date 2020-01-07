'use strict'

function adder(n: number): number {

    if (n <= 1) {
        return 1;
    } else {
        return n + adder(n - 1);
    }
}

console.log (adder(5));

export { }