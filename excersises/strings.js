"use strict";

const name = "Peter";
const drink = "pepsi";
console.log(`Hello ${name}, would you like a ${drink}`);
console.log("HellO " + name + ", would you like a " + drink + "?");

const myName = "Peter";
const animal = "Mandu";
console.log(`My name is ${myName}. 
I have a cat called ${animal}.`);

console.log(`My name is ${myName}.\nI have a cat called ${animal}.`);

const len = name.length;
console.log(`${name} is ${len} characters long`);

const letter = name[1];
console.log(`The first letter of ${name} is ${letter}`);

const newName = "Albus Percival Wulfric Brian Dumbledore";

const bus = newName.substring(2, 6);
console.log(bus);
const dumbe = newName.substring(29);
console.log(dumbe);
const firstQ = newName.length;
console.log(`total number of characters is ${firstQ}`);
const secondQ = newName[2];
console.log(`character at index 2 is ${secondQ}`);

const thirdQ = newName[6];
console.log(`character at index 6 is ${thirdQ}`);

const searchTerm = "Dumbledore";
const indexOfFirst = newName.indexOf(searchTerm);
console.log(`The index of the first D in Dumblefore is ${indexOfFirst}`);

const indexOflast = newName.charAt(firstQ - 1);
console.log(`The index of the last letter in Dumblefore is ${indexOflast}`);

const str1 = "  there is            space here \n       ";
const str2 = str1.trim();
console.log(str2);
console.log(`_${str2}_`);

const fullName = "Peter Heronious Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(16);
console.log(`first name is:_${firstName}_`);
console.log(`last name is:_${lastName}_`);

const lowerCase = "marta";
let upperCase = lowerCase[0].toUpperCase();
console.log(upperCase);
let newWord = lowerCase[0].toUpperCase() + lowerCase.substring(1);
console.log(newWord);
