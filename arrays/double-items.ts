'use strict'

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

let doubleShots = drinks.map(function (value, index) {

    return value + value;

});
console.log(doubleShots);

export { }