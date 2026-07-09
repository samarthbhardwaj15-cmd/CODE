// let h1 = document.querySelector("h1");
// h1.innerHTML = "Hello, World!";                                    
// console.dir(h1);

// let a = document.querySelector("a");
// a.setAttribute("href", "http://www..google.com");
// a.href = "htps://www.google.com";
// console.dir(a);

// let img =  document.querySelector("img");
// img.setAttribute("src", "https://tse2.mm.bing.net/th/id/OIP.rQaWsfDSbd2Fles7Gge1-QHaE7?pid=Api&h=220&P=0");

// let d = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let h2 = document.createElement("h2");
// h2.textContent = "Hello, ji";
// document.body.append(h2);
// console.log(h2);

// let h3 = document.createElement("h3");
// h3.textContent = "ghar poo"; 
// document.querySelector("body").prepend(h3);

// let h4 = document.querySelector("h4");
// h4.style.color = "red";
// h4.classList.add("one"); //toggle
// console.log(h4);

// let lis = document.querySelectorAll("li");
// lis.forEach(function (val) {
//     //for (let i = 0; i < lis.length; i++)
//     console.log(val.textContent); //lis[i] 
// });

// //let p = document.querySelector("p");
// //p.innerHTML = "<b>Update</b> by JavaScript";
// //                                                                    console.dir(p);

// //let btn = document.querySelector("button");
// //btn.removeAttribute("disabled");

// //document.querySelector("div").removeChild(elmentNode)

// let ul = document.querySelector("ul");
// let li = document.createElement("li");

// li.textContent = "New Task";

// ul.appendChild(li);

// let ig = document.createElement("ig")
// ig.setAttribute(
//     "src","https://tse2.mm.bing.net/th/id/OIP.5oI9D1_s93ryQFNbqZ1u4wHaHa?pid=Api&h=220&P=0"
// )
// document.querySelector("div").prepend(ig);

// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "green"
// });

// //let p  = document.querySelector("p");

// //function dblclick() {
//     //p.style.collor = "yellow";
// //}

// //p.addEventListener("dblclick", dblclick);
// //p.removeEventListener("dblclick", dblclick);

// let input = document.querySelector("input");

// input.addEventListener("input", function (dets) {
//     if (dets.data !== null) {
//         console.log(dets.data);
//     }    
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function (dets) {
//     device.textContent = `${dets.target.value} Device Selected`;
// });

// let h5 = document.querySelector("h2");
// window.addEventListener("keydown", function (dets) {
//     if (dets.key === " ") {
//         h2.textContent = "SPC";
//     }   else {
//         h2.textContent = dets.key;
//     }
// });

// let btn  = document.querySelector("#btn");
// let CODE = document.querySelector("CODE");

// btn.addEventListener("click", function() {
//     CODE.click();

// CODE. const CODE: any("change", function (dets))
//  {
//     const file = dets.target.files[0];
//     if (file) {
//         btn.textContent = file.name;
//     }
// }  
// });  

// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let main = document.querySelector("main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.querySelector("div");
//     card.classList.add("card");   

//     let profile = document.querySelector("div");
//     profile.classList.add("profile");

//     let img = document.querySelector("img");
//     img.setAttribute("src", inputs[0], value);

//     let h3 = document.querySelector("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.querySelector("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function (inp) {
//         if (inp.type !== "submit") {
//             inp.value = "";
//         }
//     })

 // });

//  let div = document.querySelector("div");

//  div.addEventListener("mouseover", function () {
//      div.style.backgroundColor = "yellow";
//  });

//  div.addEventListener("mouseout", function () {
//      div.style.backgroundColor = "red";
// })


// let color = document.querySelector("#color");

//  window.addEventListener("mousemove", function (dets) {
//     //dets.preventDefault();
//      color.style.top = dets.clientY + "px";
//      color.style.left = dets.clientX + "px";
//  });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (dets) {
//     dets.target.style.textDecoration = "line-through";
//     //dets.target.classlist.toggle("lt");
// });

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log("button clicked");
// });

// c.addEventListener("click", function () {
//     console.log("c clicked");
// });

// b.addEventListener("click", function () {
//     console.log("b clicked");
// });

// a.addEventListener(
//     "click", 
//     function () {
//         console.log("a clicked");
//     },
//     true
// );

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input", function () {
//     let left = 20 - inp.value.length;
//     span.textContent = left;

//     //span.textContent = 20 - inp.value.length;
//     if (left < 0) {
//         span.textContent = left;
//         span.style.color = "red";
//     } else {
//         span.textContent = 
//         span.style.color = "white";
//     }
// });

let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    const regex = /^[a-zA-Z0-9] {3,20}$/;
    let ans = regex.text("aa_a");
    console.log(ans);
});
