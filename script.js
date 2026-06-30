// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn) {
    // console.log("Access granted");
//} else {
   // console.log("Access denied");
//} 


//function rps(user, computer) {
    //if (user === computer) return "draw";

    //if (user ==="rock" && computer === "scissor") return "user";
    //if (user ==="scissor" && computer === "paper") return "user";
    //if (user ==="paper" && computer === "rock") return "user";

    //return "computer";
//}    

//console.log(rps("rock", "paper"));

//for(let i = 1; i<20; i++) {
    //if (i % 2 === 0) {
        //console.log(i);
  //}
//}

//let i = 1;
//while(i<16){
    //if(i%2 === 1){
        //console.log(i);
    //}
    //i++;
//}   

//for(let i = 1; i<10; i++){
    //console.log(`5 * ${i} = ${5 * i}`);
//}

//let sum = 0;
//for(let i = 1; i<5; i++){
    //sum = sum + i;
    //console.log(sum);
//}

//for(let i=1; i<10; i++){
    //if(i%3 === 0)
        //console.log(i);
//}

//let val = prompt("give a nu:");

//for (let i = 1; i <= val; i++) {
    //if (i % 2 === 0) {
        //console.log(`${i} is even`);
    //} else {
        //console.log(`${i} is odd`)
    //}
//}

//for(let i = 1; i<10; i++){
    //if(i % 3 & i % 5 === 0){
        //console.log(i)
    //}
//}
//for(let i = 1; i<10; i++){
    //if(i%7 === 0){
        //break;
    //}
    //console.log(i)
//}

//let count = 0;
//for (let i = 1; i < 10; i++) {
    //if (i % 2 === 1) {
        //count++;
        //console.log(i);
    //}  

    //if (count === 5) break;
//}

//let fnc = function() {
    //console.log("hi");
//}
//fnc();

//function abcd() {
    //return 12;
//}


//let val = abcd(23);
//console.log(val);

//let a = 12;

// function abcd() {
    //console.log("hehehe");
//}

//function hui(){
    //a++;
 //}
//console.log("hui");
//greet();

//function greet() {
    //console.log("hello!");
//}

//function welcome(name) {
    //console.log(name);
//}    
//welcome("harsh");

//function sayHi(name = "Guest") {
    //console.log("Hi", name)
//}
//sayHi();

//function abcd(a,b,c, ...val) {
    //console.log(val);
//}
//abcd(1, 2, 3, 4, 5, 6);

//function checkAge(age) {
    //if (age < 18) return "Too young";
    //return "Allowed";
//}

//console.log(checkAge(12));

//function outer() {
    //let count = 0;
    //return function() {
        //count++;
        //console.log(count);
    //};
//}
//const counter = outer();
//counter();
//counter();

//function bmi(weight, height) {
    //return weight / (height * height);
//}

//console.log(bmi(69, 1.7). toFixed(2));  

//function discountCalculator(discount){
    //return function(price) {
        //return price - (price * (discount / 100));
    //};
//}

//let discounter = discountcalculator(10);
//console.log(discounter(200));

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

function double(val) {
    return val * 2;
}

console.log(double(50));


(function() {
    const password = "secret password";
    console.log("password");
})();

console.log(password);

let arr = [11, 62, 3, 4, 25];
let sr = arr.sort(function(a, b) {
    return a - b;
});
