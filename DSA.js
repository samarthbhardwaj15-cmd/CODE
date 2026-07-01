//type coercion.
console.log("1"+1);
console.log("1"-1);


//Accept and print the answer
let age = prompt("What is your age?"); 
age = Number(age); 
console.log(typeof age);


//swap two numbers without using a third variable
let a = 10;
let b = 20;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//swap two variable

let x = 5;
let y = 10;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y); 

let w = 10;
let e = 20;

[w, e] = [e, w];

console.log(w, e);


//num
let z = 1234;
console.log(Math.floor(z/10))
console.log(Math.floor(z * 10))

