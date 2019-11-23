'use strict';

let map = {};

if (Object.keys(map).length > 0) {

    console.log('map is not empty');

} else {

    console.log('map is empty');

}

console.log('\n');

map = {

    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C',

}

for (let i = 0; i < Object.keys(map).length; i++) {

    console.log(Object.keys(map)[i]);

}
console.log('\n');

for (let i = 0; i < Object.keys(map).length; i++) {

    console.log(Object.values(map)[i]);

}

console.log('\n');

map[68] = 'D';

console.log('\n');

console.log(Object.keys(map).length);

console.log('\n');

console.log(map[99]);

console.log('\n');

delete map[97];

if (map[100]) {

    console.log('there is an associated value with key 100');

} else {

    console.log('there is no associated value with key 100');

}

console.log('\n');

for (let i = 0; i < Object.keys(map).length; i++) {

    delete map[Object.keys(map)[i]];
    
}

console.log(map);

export { }