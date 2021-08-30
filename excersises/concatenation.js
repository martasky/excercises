const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

let ex1 = n1 + n2;
let ex2 = s1 + s2;

let ex3 = n1 + s2;
let ex4 = s1 + n2;

// if you concatenate number wih a string, it always going to be a sting
// two number they just add

console.log("" + 1 + 0);
console.log("" - 1 + 0); // It cant be a string because there is a -
console.log(true + false); // true is 1 and false is 0
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);

// concatenation happens only when there is a +

//

let number = 56;
let string = String(number);
console.log(string);

let str = "44";
let num = Number(str);
console.log(num);

let notbool = "dog";
let bool = Boolean(notbool);
console.log(bool);

let a = Number.parseInt("343", 10);
console.log(a);

let b = Number.prototype.toString();
console.log(b);
