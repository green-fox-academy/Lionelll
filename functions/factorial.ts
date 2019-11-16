'use strict'

//   Create a function called `factorio`
//   that returns it's input's factorial

let num: number = 6;

function factorio(a: number): number {

    let factor: number = 1;

    for (let i = a; i > 0; i--) {

        factor = factor * i;

    }
    return factor;
}

console.log(factorio(num));

export { }