'use strict'

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

let map = numList.map(function (value, index) {


    if (index == 3) {

        return 4;

    } else {

        return value;

    }

});

console.log(map[3]);

export { }