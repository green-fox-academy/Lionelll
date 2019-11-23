'use strict';

let list: string[] = [];

console.log(list.length);

console.log('\n');

list.push('William');

if (list.length > 0) {

    console.log('list is not empty');

} else {

    console.log('list is empty');

}

console.log('\n');

list.push('John');
list.push('Amanda');

console.log(list.length);

console.log('\n');

console.log(list[2]);

for (let i = 0; i < list.length; i++) {

    console.log(list[i]);
}

console.log('\n');

for (let i = 0; i < list.length; i++) {

    console.log(i + 1 + '. ' + list[i]);
}

list.splice(1, 1);

console.log('\n');

for (let i = list.length - 1; i > -1; i--) {

    console.log(list[i]);

}

list.splice(0, list.length);

export { }