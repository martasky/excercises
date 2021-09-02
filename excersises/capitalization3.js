/* Given a single name string in an unknown case, e.g. “peter” or “PETER” - 
create a new string with the same name, where the third letter is uppercase, 
and the rest is lowercase. I.e. “peTer”.

Hint: use substring, toUpperCase, toLowerCase and simple string concatenation */
const unknownName = "MARTA";
const name = unknownName.toLowerCase();

const newName =
  name.substring(0, 2) + name[2].toUpperCase() + name.substring(3);
console.log(newName);

/* const name = "saSia";
 
const small = name.toLowerCase();
 
let newStr = name[0].toUpperCase() + small.substring(1);
console.log(newStr);
 */
/* const LowerName =
  UpperName.substring(0, 2) +
  UpperName[2].toLowerCase() +
  UpperName.substring(3);
console.log(LowerName);
 */
