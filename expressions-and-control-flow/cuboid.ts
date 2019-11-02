'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l = 10;
let w = 10;
let h = 10;

let cuboidSurface = 2 * (l * w + l * h + w * h);
let cuboidVolume = l * w * h;

console.log('Surface area: ' + cuboidSurface);
console.log('Volume: ' + cuboidVolume);

export { }