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

console.log(Math.round(10.5));
console.log(Math.trunc((Math.random()*9000)+1000));

let d = 89.09854;
console.log(d.toFixed(3));

let q = 5
let s = 4
let l = 6

let k = (q + s + l) / 2
console.log(k);

console.log(Math.sqrt(k * (k - q) * (k - s) * (k-l)));

let r = 12;
console.log((2*Math.PI*r).toFixed(2));

let ans = Number(prompt("what is your age?"));
if(isNaN(ans)){
    console.log("wrong input");
}
else if(ans < 18){
    console.log("you are not eligible to vote");}
else{
    console.log("you are eligible to vote");
}

let amount = Number(prompt("Enter your amount"));
let dis = 0;
if(amount > 0 && amount <= 5000){
    dis = 0;}
else if(amount > 5000 && amount <= 7000){
    dis = 5;}
else if(amount > 7000 && amount <= 9000){
    dis = 10;} 
else if (amount > 9000){
    dis = 20;}

console.log(amount - Math.floor((dis * amount)/100));     
  
let unit = Number(prompt("Enter your unit"));
let mount = 0;
if(unit>400){
    mount = (unit - 400) * 13;
    unit = 400;
}
if(unit > 200 && unit <= 400){
    mount += (unit - 200) * 8;
    unit = 200;
}
if(unit>100 && unit <= 200){
    mount += (unit - 100) * 6;
    unit = 100;
}
mount += unit * 4;

console.log(mount);

let money = 5001;
if( money >= 500){
    console.log("500 notes : " + Math.floor(money/500));
    money = money % 500;
}
if( money >= 50){
    console.log("50 notes : " + Math.floor(money/50));
    money = money % 50;
}
if( money === 1){
    console.log("1 notes : " + (money));
}

// ternary operater ?:
12>13 ? console.log("hyeheee") : console.log("huuuuu");
console.log(12>13?"hyehhe":"hee");

// nested ternar operater
let num = 10;
console.log(num>0?"positive":num<0?"negative":"zero");

let day = "harsh";

switch(day){
    case "raj":console.log("monday");
    break

    case "harsh":console.log("tuesday");
    break

    default:console.log("invalid");
}

let ay = 3;

switch (ay) {
    case 1:
    case 2:
    case 3:
        console.log("tuesday");

        break

    default: console.log("invalid");
        
}



  switch (day) {
    case 19>13:
        console.log("tuesday");
        break
    case 10 > 9:
        console.log("day");
        break

    default: console.log("invalid");
        
}

let gun = 0.1 + 0.2

switch(num){
    case 0.3: console.log("heloo");
    break

    case 0.5: console.log("hey");
    break

    default: console.log("namaste");
}

var i = 1
for(; i<=10; i++){
    console.log(i);
}
console.log(i+" fail");


//var pr = prompt("kaha tak add karwaaoge ?");
var n = number(prompt("kaha tak add karwaaoge ?"));

//if(pr === null){console.log)("cancelled")};

//else{var n = number(pr);}
if(isNaN(n)){
    console.log("Invalid input");
}
else{
    if(n>0){
        var sum = 0;
        for(var i = 1; i<=n; i++){
            sum = sum + i;
        }
        //var(fact = 1;) for(var i = 1; i<=n; i++){fact = fact * i;}
        console.log(sum);
        
    }
    else{
        console.log("should be +ve and more than 0");
    }
}








