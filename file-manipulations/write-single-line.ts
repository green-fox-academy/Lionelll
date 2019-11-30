// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

let fs = require('fs');

function writeName(fileName: string) {

    let array: string[] = [];
    let inputFile: string;
    let outputFile: string;

    try {
        inputFile = fs.readFileSync(fileName, 'utf8');
    } catch (err0) {
        console.log('Unable to read ' + fileName);
        return;
    }

    try {
        array = inputFile.split('\n');
        array.push('Lionel');
        outputFile = array.join('\n');
    } catch (err1) {
        console.log('cannot add user name to the original file');
        return;
    }

    try {
        fs.writeFileSync('./files/my-file.txt', outputFile, 'utf8');
        console.log('my-file.txt successfully created!');
    } catch (err2) {
        console.log('Unable to write file: my-file.txt');
        return;
    }
}
writeName('./files/alma.txt');
export { }