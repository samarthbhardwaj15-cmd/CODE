let h1 = document.querySelector("h1");
h1.innerHTML = "Hello, World!";                                    
console.dir(h1);

let a = document.querySelector("a");
a.setAttribute("href", "http://www..google.com");
a.href = "htps://www.google.com";
console.dir(a);

let img =  document.querySelector("img");
img.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.rQaWsfDSbd2Fles7Gge1-QHaE7?pid=Api&h=220&P=0");

let d = document.querySelector("a");
console.log(a.getAttribute("href"));

let h2 = document.createElement("h2");
h2.textContent = "Hello, ji";
document.body.append(h2);
console.log(h2);

let h3 = document.createElement("h3");
h3.textContent = "ghar poo"; 
document.querySelector("body").prepend(h3);

let h4 = document.querySelector("h4");
h4.style.color = "red";
h4.classList.add("one"); //toggle
console.log(h4);

let lis = document.querySelectorAll("li");
lis.forEach(function (val) {
    //for (let i = 0; i < lis.length; i++)
    console.log(val.textContent); //lis[i] 
});

let p = document.querySelector("p");
p.innerHTML = "<b>Update</b> by JavaScript";
console.dir(p);

//let btn = document.querySelector("button");
//btn.removeAttribute("disabled");

//document.querySelector("div").removeChild(elmentNode)

let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task";

ul.appendChild(li);

let ig = document.createElement("ig")
ig.setAttribute(
    "src","https://tse2.mm.bing.net/th/id/OIP.5oI9D1_s93ryQFNbqZ1u4wHaHa?pid=Api&h=220&P=0"
)


document.querySelector("div").prepend(ig);








