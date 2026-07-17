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

console.log(this);

function abcd() {
    console.log(this);
}
abcd();                                       

let obj = {
    name: "harsh",
    age: 26,
    sayName: function () {
        console.log(this.age);
    },
};

document.querySelector("h1").addEventListener("click", function () 
function () { //alert();
    console.log((this.style.color = "red"));
});
