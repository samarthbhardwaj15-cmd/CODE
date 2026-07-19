//type coercion.
//console.log("1"+1);
//console.log("1"-1);


//Accept and print the answer
//let age = prompt("What is your age?"); 
//age = Number(age); 
//console.log(typeof age);


//swap two numbers without using a third variable
//let a = 10;
//let b = 20;
//let c;

//c = a;
//a = b;
//b = c;

//console.log(a);
///console.log(b);

//swap two variable

//let x = 5;
//let y = 10;

//x = x + y;
//y = x - y;
//x = x - y;

//console.log(x, y); 

//let w = 10;
//let e = 20;

//[w, e] = [e, w];

//console.log(w, e);


//num
//let z = 1234;
//console.log(Math.floor(z/10))
//console.log(Math.floor(z * 10))

//console.log(Math.round(10.5));
//console.log(Math.trunc((Math.random()*9000)+1000));

//let d = 89.09854;
//console.log(d.toFixed(3));

//let q = 5
//let s = 4
//let l = 6

//let k = (q + s + l) / 2
//console.log(k);

//console.log(Math.sqrt(k * (k - q) * (k - s) * (k-l)));

//let r = 12;
//console.log((2*Math.PI*r).toFixed(2));

//let ans = Number(prompt("what is your age?"));
//if(isNaN(ans)){
    //console.log("wrong input");
//}
//else if(ans < 18){
    //console.log("you are not eligible to vote");}
//else{
    //console.log("you are eligible to vote");
//}

//let amount = Number(prompt("Enter your amount"));
//let dis = 0;
//if(amount > 0 && amount <= 5000){
    //dis = 0;}
//else if(amount > 5000 && amount <= 7000){
    //dis = 5;}
//else if(amount > 7000 && amount <= 9000){
    //dis = 10;} 
//else if (amount > 9000){
    //dis = 20;}

//console.log(amount - Math.floor((dis * amount)/100));     
  
//let unit = Number(prompt("Enter your unit"));
//let mount = 0;
//if(unit>400){
    //mount = (unit - 400) * 13;
    //unit = 400;
//}
//if(unit > 200 && unit <= 400){
    //mount += (unit - 200) * 8;
    //unit = 200;
//}
//if(unit>100 && unit <= 200){
    //mount += (unit - 100) * 6;
    //unit = 100;
//}
//mount += unit * 4;

//console.log(mount);

//let money = 5001;
//if( money >= 500){
    //console.log("500 notes : " + Math.floor(money/500));
    //money = money % 500;
    //}
//if( money >= 50){
    //console.log("50 notes : " + Math.floor(money/50));
    //money = money % 50;
//}
//if( money === 1){
    //console.log("1 notes : " + (money));
//}

// ternary operater ?:
// 12>13 ? console.log("hyeheee") : console.log("huuuuu");
// console.log(12>13?"hyehhe":"hee");

// // nested ternar operater
// let num = 10;
// console.log(num>0?"positive":num<0?"negative":"zero");

// let day = "harsh";

// switch(day){
//     case "raj":console.log("monday");
//     break

//     case "harsh":console.log("tuesday");
//     break

//     default:console.log("invalid");
// }

// let ay = 3;

// switch (ay) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("tuesday");

//         break

//     default: console.log("invalid");
        
// }



//   switch (day) {
//     case 19>13:
//         console.log("tuesday");
//         break
//     case 10 > 9:
//         console.log("day");
//         break

//     default: console.log("invalid");
        
// }

// let gun = 0.1 + 0.2

// switch(num){
//     case 0.3: console.log("heloo");
//     break

//     case 0.5: console.log("hey");
//     break

//     default: console.log("namaste");
// }

// var i = 1
// for(; i<=10; i++){
//     console.log(i);
// }
// console.log(i+" fail");


// //var pr = prompt("kaha tak add karwaaoge ?");
// //var n = n(prompt("kaha tak add karwaaoge ?"));

// //if(pr === null){console.log)("cancelled")};

// //else{var n = number(pr);}
// //if(isNaN(n)){
//     //console.log("Invalid input");
// //}
// //else{
//     //if(n>0){
//         //var sum = 0;
//         //for(var i = 1; i<=n; i++){
//             //sum = sum + i;
//         //}
//         //var(fact = 1;) for(var i = 1; i<=n; i++){fact = fact * i;}
//         //console.log(sum);
        
//     //}
//     //else{
//         //console.log("should be +ve and more than 0");
//     //}
// //}

// function isprime(n) {
//     if(n<=1) return false;
//     if(n==1) return true;
//     if(n%2==0) return false
//     for(let i=3; i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false 
//     }
//     return true   
// }

// var n = prompt(n);

// if(isNaN(n)){
//     console.log("Invalid input");
// }
// else{
//     if(n > 0){
//         var sum = 0;
//         while(n>0){
//             var rem = n%10;
//             sum = sum + rem;
//             n =  Math.floor(n/10);
//         }
//         console.log((sum));
//     }
//     else{

//         console.log("should be +ve and -ve");
        
//     }
// }


// var O = prompt(O);

// if(O >0){
//     var rev = 4;
//     while(O >0){
//         var rem = O%10
//         while(O>0) {
//             var rem = O%10;
//             rev = rev*10 + rem;
//             O = Math.floor(O/10);
//         }
//         console.log(rev);
//     }
// }

// var as = prompt("kuchh bhi dedo(exit for close)");
// while(as !== 'exit'){
//     as = prompt("kuch bhii dedo(exit for close)");
// } 

// var t = prompt(t);
// if(t > 0){
//     var sum = 0;
//     while(t>0){
//         var rem = t%10;
//         sum = sum + rem;
//         t = Math.floor(n/10);
//     }
//     console.log((sum));
    
// }

// var x = prompt(x)

// if(x > 0){
//     var rev = 0;
//     while(x>0){
//         var rem = x%10;
//         rev = rev*10 + rem;
//         x = Math.floor(x/10);
//     }
//     console.log(rev);
    
// }

// if(n>0){
//     var sum = 0;
//     while(n>0){
//         var rem = n%10;
//         var fact = 1;
//         for(var i = 1; i<=rem; i++){
//             fact = fact*i
//         }
//         sum = sum + fact;
//         n = Math.floor(n/10);
//     }
//     console.log(sum);
    
// }

// let random = Math.floor(Math.random()*100) +1

// let guess = -1;
// while(guess !== random){

//     guess = Number(prompt("Guess the number"))
//     if(isNaN(guess) || guess<1 || guess>100){
//         console.log("try again b/w 1-100");
//         continue
//     }
//     if(guess>random){
//         console.log("too high, try again");
//     }else if(guess<random){
//         console.log("too low, try again");
//     }else{
//         console.log("Congrats and Number was", guess);
//     }
// }

// let a = "hello";
// console.log(a);

// let prompt = require('prompt-sync') ();
// let n = Number(prompt("Enter a number "))
// for(let i=1;i<=n;i++){
//     for(let j =1;j<=n;j++){
//         Process.stdout.write("*")
//     }
//     console.log();
    
// }


// let n = Number(prompt("Enter a number "))
// for(let i=1;i<=n;i++){
//     let ascii = 65;
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j+" ") //(j+" ") (String.fromCharCode(ascii)+" ") 
//         //ascii++
//     }
//     console.log();
// }

// let n = Number(prompt("Enter a Number"))
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write("* ")
//     }
//     console.log();

// let n = Number(prompt("Enter a Number"))
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write("_ ")
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// function twosum(nums, target) {
//     let map = {};
    
//     for (let i=0; i < nums.length; i++) {
//         let diff = target - nums[i];
        
//         if (map[diff] !== undefined) {
//             return [map[diff], i];
//         }
        
//         map[nums[i]] = i;
//     }
// }

// console.log(twosum([2,7,11,15],9));

// function maxSubArray(arr) {
//     let maxSum = arr[0];
//     let current = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//         current = Math.max(arr[i], current + arr[i]);
//         maxSum = Math.max(maxSum, current);
//     }
//     return maxSum;
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// function merge(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;
    
    
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j])
//             result.push(arr1[i++]);
//         else 
//             result.push(arr2[j++]);
//     }
    
//     return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// }
// console.log(merge([1,3,5],[2,4,6]));

// function maxProfit(prices) {
//     let min = prices[0];
//     let profit = 0;
    
//     for (let price of prices) {
//         if (price < min)
//             min = price;
//         else
//             profit = Math.max(profit, price-min);
//     }
//     return profit;
// }
// console.log(maxProfit([7,1,5,3,6,4]));

// function merge(arr1, arr2){
//     let result = [];
//     let i=0, j=0;

//     while(i < arr1.length && j < arr2.length) {
//         if (arr[i] < arr[j])
//             result.push(arr1[i++]);
//         else
//             result.push(arr2[j++]);
//     }
//     return result.concat(arr1.slice(i).concat(arr2.slice(j)));
// }

// console.log(merge([1,3,5],[2,4,6]));

// function maxSubArray(arr) {
//     let maxSum = arr[0];
//     let currnet = arr[0];

//     for(let i =1; i<arr.length; i++) {
//         currnet = Math.max(arr[i], currnet + arr[i]);
//         maxSum =  Math.max(maxSum, currnet);
//     }
//     return maxSum;
// } 
// console.log(maxSubArray([-2,1-3,4,-1,2,1,-5,4]));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));

// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let ch of str) {
//         if (vowels.includes(ch)) count++;
//     }
//     return count;
// }
// console.log(countVowels("JavaScript"));


// function charCount(str) {
//     let map = {};

//     for(let ch of str) {
//         map[ch] = (map[ch] || 0) + 1;
//     }
// }
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));

// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let ch of str) {
//         if (vowels.includes(ch)) count++;
//     }
//     return count;
// }
// console.log(countVowels("JavaScript"));

// function charCount(str) {
//     let map = {};
    
//     for (let ch of str) {
//         map[ch] = (map[ch] || 0) + 1;
//     }
//     return map;
// }
// console.log(charCount("apple"));

// function removeSpaces(str) {
//     return str.replace(/\s/g, "");
// }
// console.log(removeSpaces("Hello World"));

// function firstUnique(str) {
//     let map = {};
    
//     for (let ch of str) {
//         map[ch] = (map[ch] || 0) + 1;
//     }
//     for (let ch of str) {
//         if (map[ch] === 1) return ch;
//     }
//      return null;
// }
// console.log(firstUnique("aabbcdde"));

// let arr = [10,, 5, 12, 3]
// let n = arr.length;
// for(let i=0;i<n-1;i++){
//     for (let j = 0; j<n-1; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1];
//             arr[j+1] = temp
//         }
//     }
// }

// let arr = [10, 5, 12, 1 ,3];
// let n = arr.length;
// for (let i=0; i<n-1;i++){
//     let minIndex = i;
//     for(let j = i+1;j<n; j++){
//         if(arr[minIndex]>arr[i]) minIndex = j;
// }
// if(miinIndex != i){
//     let temp = arr[minIndex];
//     arr[minIndex] = arr[i]
//     arr[i] = temp
//    }
// }
// console.log(arr);

function isAnagram(a, b) {
    return a.split("").sort().join("") ===
           b.split("").sort().join("");
}
console.log(isAnagram("listen", "silent"));
 // function isAnagram(a, b) {


// function longestWord(sentence) {
//     let words =  sentence.split(" ");
//     let longest = "";
    
//     for (let word of words) {
//         if (words.length > longest.length)
//             longest = word;
//     }
//     return longest;
// }
// console.log(longestWord("I love Javascript programming"));
// let n = 5;
// for(let i=0; i<n; i++) {
//     for(let j=i; j<n; j++) {
//         console.log(i, j);
//     }
// }

// let n =5;
// for (let i=0; i<n; i++) {
//     console.log(i);
// }
// for(let j=0; j<n; j++) {
//     console.log(j)
// }

// let n = 5;    
// function fun(n){
//     if(n <= 1) return;
//     fun(n-1);
//     fun(n-1);
//     console.log(n)
// }    

// function bubbleSort(arr) {
//     let n = arr.length;
    
//     for (let i=0; i<n-1; i++){
//         let swapped = false;
        
//         for (let j=0; j<n-i-1; j++){
//             if (arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                 swapped = true;
//             }
//         }
//         if(!swapped) break;
//     }
//     return arr;
// }
// console.log(bubbleSort([5,2,8,1,4]));

// greet()
// function greet(){
// console.log("Good morning pineapple");
//     enjoy()
// }
// function enjoy(){
//     console.log("enjoy ho rha hai...");
//     temp()
// }
// function temp(){
//     console.log("kuch kr rhe ho"); 
// }

// function temp(val){
//     if(val === 0) return
    
//     console.log("hello world");
// } 
// temp(0)

// function temp(n){
//     if(n==0) return
//     console.log("hello world");
//     temp(--n);   //temp(n-1);
// }
// temp(5)

// function temp(n) {
//     if(n == 0) return;
//     console.log(n);
//     temp(n-1);
// }
// temp(10)

// function fact(n){
//     if(n==1) return n;
//     return n * fact(n-1);
// }
// console.log(fact(6))

// let n = 10;
// let first = 0 , second = 1;
// process.stdout.write(first+" "+second+" ")

// for(let i=1;i<=n-2;i++){
//     let third = first + second;
//     first = second;
//     second = third
//     process.stdout.write(third+" ");
// }

function fiboNTerms(n, first, second){
    if(n==0) return
    let third = first+second;
    process.stdout.write(third+" ");
    fiboNTerms(n-1,second, third)
}

let n=10;
process.stdout.write(0+" "+1+" ");
fiboNTerms(n-2, 0, 2)

function fibo(n){
    if(n==0 || n==1) return n;
    reurn fibo(n-1) + fibo(n-2)
}
let n = 7;
console.log(fibo(n));

function selectionsort(arr) {
    let n = arr.length;
    
    for (let i=0; i<n-1; i++) {
        let min = i;
        
        for (let j=i+1; j<n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
console.log(selectionsort([64,25,12,22,11]));

function insertionsort(arr) {
    for (let i=1; i<arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionsort([5,3,8,4,2]));

// let n = 5;
// for(let i=0; i<n; i++){
//     console.log(i);
// }
// for(let j=0; j<n; j++){
//     console.log(j);
// }

// let n = 5;
// function fun(n){
//     if(n <= 1) return;
//     fun(n-1);
//     fun(n-1);
// }

let n = 5;
function fun(n){
    if(n <= 1) return;
    fun(n/2);
}

// let a = 32, b = 20;

// while(a != b){
//     if(a>b) a = a-b;
//     else b = b-a;
// }
// console.log(a);

// function gcd(a , b){
//     if(a==b) return a;
//     if(a>b) return gcd(a-b , b)
//     return gcd(b, b-a)
// }  
// let a = 32 , b = 20;
// console.log(gcd(a, b));

// function gcd(a, b){
//     if(b==0) return a
//     return gcd(b, a%b);
// }
// console.log(gcd(16, 14));

// let n = 30;
// for (let i = 1; i<=Math.floor(Math.sqrt(n)); i++){
//     if(n%i==0) {
//         process.stdout.write(i + " ")
//         if (n / i != i) {
//             process.stdout.write(n / i + " ")
//         }
//     }
// } 

let n = 100;
let arr = new Array(n+1).fill(true)

for (let i=2; i<=Math.floor(Math.sqrt(n)); i++){
    if(arr[i]){
        for(let j=i*i;j<=n; j+=i){
            arr[j] = false;
        }
    }
}
for(let i=2;i<arr.length; i++){
    if(arr[i]) process.stdout.write(i+" ")
}