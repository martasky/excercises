"use strict";
/* let person1 = {
  firstName: "peter",
  age: 29,
  student: false,
};
console.log(person1.lastName);
person1.lastName = "Lind";
console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;
console.log(person1.lastName);
console.log(person1.middleName);
delete person1.lastName;
console.log(person1.lastName);
 */

const person1 = {
  firstName: "peter",
  age: 29,
  student: false,
};
person1.age += 10;
console.log(person1);
delete person1.age;
console.log(person1);

const person2 = {
  firstName: "marta",
  age: 29,
  student: true,
};

person1 = person2;
