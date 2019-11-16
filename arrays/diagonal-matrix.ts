'use strinct'

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function diagonalMatrix(size: number, diagonal: number, elements: number) {

    let diagonalMatrix: number[][] = [];

    for (let i = 0; i < size; i++) {

        const row = [];

        for (let j = 0; j < size; j++) {

            if (i + j === size - 1) {

                row.push(diagonal);

            } else {

                row.push(elements);

            }
        }
        diagonalMatrix.push(row);
    }
    return diagonalMatrix;
}
let size: number = 3;
let diagonal: number = 1;
let elements: number = 0;

console.log(diagonalMatrix(size, diagonal, elements));

export { }