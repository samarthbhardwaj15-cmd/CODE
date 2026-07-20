// function createToaster(config) {
//     return function (str) { 
//         let div = document.createElement("div");
//         div.textContent = str;
//         dic.classname = 
//         `inline-block ${config.theme === "dark" ? "bg-gray-800 text-while" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
//     }}



//         document.querySelector(".parent").appendChild(div);

//         if (config.positionX !== "left" || positionY !== "top"){
//             document.querySelector(".parent").className +=
//             `${config.positionX === "right"? " right-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}` ;
//         }
//         setTimeout(() => {
//             document.querySelector(".parent").removeChild(div);
//         }, config.duration * 1000);
//     };
// }

// let toaster = createToaster({
//     positionX: "right",
//     positionY: "top",
//     theme: "dark",
//     duration: 3,
//  });
//  toaster("Download Done");
//  setTimeout(() => {
//     toaster("Harsh accepted your request"); 
//  }, 2000);

// console.log(this);

// function abcd() {
//     console.log(this);
// }
// abcd();                                       

// let obj = {
//     name: "harsh",
//     age: 26,
//     sayName: function () {
//         console.log(this.age);
//     },
// };

// document.querySelector("h1").addEventListener("click", function () 
// function () { //alert();
//     console.log((this.style.color = "red"));
// });

// let obj = {
//     name: "harsh",
//     age: 26,
// };

// function abcd(a,b,c,d) {
//     console.log(this, a, b, c);
// }

// let fnc = abcd.bind(obj, 1, 2, 3);
// fnc();'


// class CreatePencil {
// // function CreatePencil(name, price, color, company) {
//     constructor(name, price, color, company){
//         this.name = name;
//         this.price = price;
//         this.color = color;
//         this.company = company;
// }

// erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//         if (elem.style.color === this.color) {
//             elem.remove();
//         }
//     });
// }

// write(text) {
// // CreatePencil.prototype.write = function (text) {
//     let  h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     console.log(h1);
//     document.body.append(h1);
//     // };
//     };
// }

// let p1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
// let p2 = new CreatePencil("Doms", 10 ,"red", "doms");

// console.log("hey1");
// console.log("hey2");
// setTimeout(() => {
//     console.log("hey3");
// }, 2000);
// console.log("hey4");

// function kuchhderBaadChalunga(val) {
//     setTimeout(
//         () => {
//             console.log(val);
//         },
//         Math.floor(Math.random() * 20) * 1000
//     );
// }
// kuchhderBaadChalunga(12);

// function kuchDerBaadChalunga(fnc) {
//     setTimeout(fnc, Math.floor(Math.random() * 20) * 1000)
// }
// kuchDerBaadChalunga(function () {
//     console.log("hey");
// });

function profileLekarAao(username,) {

}

function saarePostLekarAao(id,cb) {

}

function savedPostNikaalo(id, cb){
    console.log("fetching saved posts...");
    setTimeout(() => {
        cb({_id: id, saved: [1,2,3,3,45,4,323]});
    }, 3000);
    
}

profileLekarAao("harsh", function (data)) {
    console.log(data);
    saarePostLekarAao(data._id,function (posts) {
        console.log(posts);
        savedPostsNikaalo(data._id, function (saved) {
            console.log(saved);
            
            
        });
        
    });
    
};

