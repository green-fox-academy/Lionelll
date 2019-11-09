'use strict'

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