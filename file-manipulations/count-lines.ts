// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

let fs = require('fs');

function lineCount(fileName: string): number {

    let numOfLines: string[] = [];

    try {
        let fileContent: string = fs.readFileSync('./files/' + fileName + '.txt', 'utf8');
        numOfLines = fileContent.split('\n');
        return numOfLines.length;

    } catch (err) {
        return 0;
    }
}
console.log(lineCount('alma'));
export { }