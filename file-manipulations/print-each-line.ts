// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

'use strict';

try {

    let fs = require('fs');

    let fileContent: string = fs.readFileSync('/files/my-fileContent.txt', 'utf8');

    console.log(fileContent);

} catch (err) {

    console.log('Unable to read file: my-file.txt');

}
export { }