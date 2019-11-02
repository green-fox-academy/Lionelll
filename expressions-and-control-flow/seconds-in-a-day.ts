'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHoursInSeconds: number = currentHours * 3600;
let currentMinutesInSeconds: number = currentMinutes * 60;

let currentSecondsAll: number = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;

let dayInSeconds: number = 86400;

let remainingSeconds: number = dayInSeconds - currentSecondsAll;

console.log('Remaining seconds in the day ' + remainingSeconds);

export { }