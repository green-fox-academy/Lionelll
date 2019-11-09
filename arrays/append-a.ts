'use strict'

let animals: string[] = ['koal', 'pand', 'zebr'];

let animalNames = animals.map(function (value) {

    return value + 'a';
});
console.log(animalNames);

export { }