'use strict';

class Counter {

    integer: number;
    count: number;

    constructor(integer: number = 0) {
        this.integer = integer;
        this.count = integer;

    }
    add(number: number = 1): void {
        this.integer = this.integer + number;
    }
    get(): string {
        return this.integer.toString();
    }
    reset(): void {
        this.integer = this.count;
    }
}
export { }