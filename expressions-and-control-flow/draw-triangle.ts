'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star = '';

for (let i = 0; i <= 3; i++) {
    star = star + '*';
    console.log(star);
}
export { }