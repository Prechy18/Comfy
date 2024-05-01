let openMenuIcon = document.querySelector(".fa-bars");
let closeMenuIcon = document.querySelector(".fa-x");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

// when i click on  the menu icon
// open the mobile nav
// change openMenuIcon

openMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("fa-x");
});

// let loop = document.getElementById("loop")

// const card = [
//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/light.jpeg",
//     label: "Avant-Garde Lamp",
//     price: "$179.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/chair.jpeg",
//     label: "Chic Chair",
//     price: "$333.9",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/coffee.jpeg",
//     label: "Coffee Table",
//     price: "$179.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/bed.jpeg",
//     label: "Comfy Bed",
//     price: "$129.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/sofa.jpeg",
//     label: "Contemporary Sofa",
//     price: "$159.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/bed2.jpeg",
//     label: "Cutting-Edge Bed",
//     price: "$84.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/book.jpeg",
//     label: "Futuristic Shelves",
//     price: "$94.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/glass.jpeg",
//     label: "Glass Table",
//     price: "$159.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/king.webp",
//     label: "King Bed",
//     price: "$189.99",
//     link: "htttp",
//   },

//   {
//     id:"prod-" + Math.random() * 1000,
//     img: "images/lounge.webp",
//     label: "Lounge Chair",
//     price: "$259.99",
//     link: "htttp",
//   },
// ];

// for (let i = 0; i < 10; i++){
//   loop.innerHTML +=`
//         <a href=${card[i].link}>
//            <div class="loop-img">
//                <img src=${card[i].img} alt="">
//                   <div class="loop-text">
//                     <p class="av">${card[i].label}</p>
//                     <p class="av-p">${card[i].price}</p>
//                   </div>
//             </div>
//             </a>
//   `;
// }
// const slider = document.querySelector("input")
// const value = document.querySelector(".one")

// value.textContent =slider.value
// slider.oninput = function(){
//   value.textContent = ${'1000'}
// }


// let box = document.querySelector(".fa-table-cells")
// let grid = document.querySelector(".fa-list")
// let loopBox = document.querySelector(".loop")
// let loopImg = document.querySelector(".loop-img")
// let loopTx = document.querySelector(".loop-text")


// grid.addEventListener("click", () => {
// loop.classList.toggle("loop-col")
// loopBox.classList.toggle("loop-col")
// loopImg.classList.toggle("loop-imga")
// loopTx.classList.toggle("loop-texta")
// });

// box.addEventListener("click",() => {
//   loopBox.classList.toggle("loop")
//   loopImg.classList.toggle("loop-img")
//   loopTx.classList.toggle("loop-text")
// })
let light = document.querySelector(".fa-sun")
let sign = document.querySelector(".sign")
let head = document.querySelector("header")
let logo = document.querySelector(".logo")
let home = document.querySelector(".home")
let body = document.querySelector("body")
let we = document.querySelector(".we")
let lor = document.querySelector(".lor")
let img = document.querySelector(".firimg")
let probut = document.querySelector(".our")
let featured = document.querySelector(".fea")
let lamp = document.querySelector(".ava")
let coffee = document.querySelector(".coff")
let comfy = document.querySelector(".comf")
let cart = document.querySelector(".car")
let zer02 = document.querySelector(".zero")

light.addEventListener("click", () => {
light.classList.toggle("fa-moon");
sign.classList.toggle("signs")
home.classList.toggle("signs")
head.classList.toggle("header")
logo.classList.toggle("logo2")
probut.classList.toggle("our2")
body.classList.toggle("body")
we.classList.toggle("we2")
lor.classList.toggle("lor2")
img.classList.toggle("firimg2")
featured.classList.toggle("lor2")
lamp.classList.toggle("lor2")
coffee.classList.toggle("lor2")
comfy.classList.toggle("lor2")
cart.classList.toggle("car2")
zer02.classList.toggle("ero2")
});

let bright = document.querySelector(".sunma")
let zero = document.querySelector(".zero")
let activ = document.querySelector(".active")
let mobilenav = document.querySelector(".mobile-nav")
let cartmob = document.querySelector(".car")

bright.addEventListener("click", () => {
bright.classList.toggle("fa-moon")
sign.classList.toggle("signs")
home.classList.toggle("signs")
head.classList.toggle("header")
logo.classList.toggle("logo2")
probut.classList.toggle("our2")
body.classList.toggle("body")
we.classList.toggle("we2")
lor.classList.toggle("lor2")
img.classList.toggle("firimg2")
featured.classList.toggle("lor2")
lamp.classList.toggle("lor2")
coffee.classList.toggle("lor2")
comfy.classList.toggle("lor2")
zero.classList.toggle("ero2")
activ.classList.toggle("signs")
mobilenav.classList.toggle("header")
cartmob.classList.toggle("car2")
})