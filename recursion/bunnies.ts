'use strict'

function numOfEars(NumOfBunnies: number, NumOfEars: number): number {

    if (NumOfBunnies === 1) {
        return NumOfEars;
    } else {
        return NumOfEars + numOfEars(NumOfBunnies - 1, NumOfEars);
    }
}
console.log(numOfEars(8, 2));

export { }