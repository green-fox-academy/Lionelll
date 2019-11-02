'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star = '';
let space = '';

for (lineCount; lineCount < 4; lineCount++) {
    //lineCount = lineCount + 1;

    for (let i = 0; i < 3; i + 2) {
        star = star + '*';
    }
    for (let j = 0; j < 4; j++) {
        space = space + ' ';

    }
}
console.log(space + star);
export { }