'use strict'

function numOfEars(ListOfBunnies: number): number {

    if (ListOfBunnies === 1) {
        return 2;
    } else if (ListOfBunnies % 2 === 0) {
        return 3 + numOfEars(ListOfBunnies - 1);
    } else {
        return 2 + numOfEars(ListOfBunnies - 1);
    }
}
console.log(numOfEars(18));

export { }