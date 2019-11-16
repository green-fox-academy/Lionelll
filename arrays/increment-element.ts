'use strict'

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList: number[] = [1, 2, 3, 4, 5];

let increment = numList.map(function (value, index) {

    if (index == 2) {

        return value + 1;

    } else {

        return value;

    }
});
console.log(increment[2]);

export { }