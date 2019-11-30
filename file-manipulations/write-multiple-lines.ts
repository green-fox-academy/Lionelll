// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict';

let fs = require('fs');

function writeFile(path: string, word: string, number: number) {

    let inputFile: string;
    let outputFile: string;
    let array: string[] = [];
    let array2: string[] = [];

    try {
        inputFile = fs.readFileSync(path, 'utf8');
    } catch (err0) {
        console.log('Cannot find ' + path);
        return;
    }

    try {
        array = inputFile.split('\n');

        for (let i = 0; i < number; i++) {
            array.push(word);
        }
        array2 = array;
    } catch (err1) {
        console.log('Cannot write ' + word + ' into the input file');
        return;
    }

    try {
        outputFile = array2.join('\n');
        fs.writeFileSync('./files/NEWloremIpsum.txt', outputFile, 'utf8');
    } catch (err2) {
        console.log(err2.message);
        //console.log('Cannot create NEWloremIpsum file');
        return;
    }
}
writeFile('./files/loremIpsum.txt', 'apple', 5);
export { }