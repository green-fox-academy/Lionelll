'use strict'

class Animal {

    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50, eat: boolean, drink: boolean, play: boolean) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eat() {
        this.hunger--;
    }
    drink() {
        this.thirst--;
    }
    play() {
        this.hunger++;
        this.thirst++;
    }
}
export { }