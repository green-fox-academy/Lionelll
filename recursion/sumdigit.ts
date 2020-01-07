'use strict'

function sumDigits(n: number): number {
    n = Math.abs(n);
    let remainder = n % 10;
    let sum = remainder;

    if (n > 0) {
        let rest = Math.floor(n / 10);
        sum += sumDigits(rest);
    }
    return sum;
}

console.log(sumDigits(-84598));

export { }