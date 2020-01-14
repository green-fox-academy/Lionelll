'use strict'

function powerN(base: number, n: number): number {
    let multiple: number;

    if (n === 0) {
        return 1;
    } else {
        return base * powerN(base, n-1);
    }
}
console.log(powerN(2, 3));

export { }