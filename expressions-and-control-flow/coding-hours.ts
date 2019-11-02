'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codeHoursDaily = 6;
let semesterWeeks = 17;
let workHoursWeekly = 52;

let numberOfWeekends = semesterWeeks * 2;

let semesterWorkDays = (semesterWeeks * 7) - numberOfWeekends;

let semesterCodingHours = semesterWorkDays * codeHoursDaily;

let semesterWorkHours = (semesterWeeks * workHoursWeekly);

let percentageInSemester = Math.round((semesterCodingHours / semesterWorkHours) * 100);


console.log(semesterCodingHours + ' hours spent with coding in a semester by an attendee');

console.log(percentageInSemester + '% is coding hours in a semester');

export { }

