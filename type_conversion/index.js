let age = window.prompt("How old are you?");

age = Number(age); // can not add a number to a string
age +=1;

console.log(age);




let x = "pizza";
let y = "burger";
let z = "chicken";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);