//type coercion.
console.log("1"+1);
console.log("1"-1);

let age = prompt("What is your age?"); 
age = Number(age); 
console.log(typeof age);

let a = 10;
let b = 20;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let x = 5;
let y = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); 
