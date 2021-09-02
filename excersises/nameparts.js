"use strict";
const name = "Peter Heronimous Hagrid Lind";
/* const arrayOfNames = name.split(" ");
const firstName = arrayOfNames[0];
const middleName = arrayOfNames[1];
const lastName = arrayOfNames[2];
console.log(firstName);
console.log(middleName);
console.log(lastName);
 */

//Firstname:
const indexfirst = name.indexOf(" ");
const firstname = name.substring(0, indexfirst);
console.log(firstname);

//Middlename:
const indexlast = name.lastIndexOf(" ");
const middlename = name.substring(indexfirst + 1, indexlast);
console.log(middlename);

//Lastname:
const lastname = name.substring(indexlast + 1);
console.log(lastname);

console.log(firstName);
