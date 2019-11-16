'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['koal', 'pand', 'zebr'];

let animalNames = animals.map(function (value) {

    return value + 'a';
});
console.log(animalNames);

export { }