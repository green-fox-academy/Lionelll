'use strict'

//   Create a function called `factorio`
//   that returns it's input's factorial

let num: number = 3;

function factorio(a: number): number {

    let factor: number = 0;

    for (let i = 1; i < a + 1; i++) {

        factor = a * i;

    }
    return factor;
}

console.log(factorio(num));

export { }