'use strict'

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

function swap(input: string[], index_A: number, index_B: number): void {

    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}
swap(abc, 0, 2);
console.log(abc);

export { }