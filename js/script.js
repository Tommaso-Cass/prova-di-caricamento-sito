document.addEventListener("DOMContentLoaded", creaTitolo);


let l1 = document.querySelector("#l1");
let l2 = document.querySelector("#l2");
let l3 = document.querySelector("#l3");
let l4 = document.querySelector("#l4");
let l5 = document.querySelector("#l5");
let l6 = document.querySelector("#l6");
let l7 = document.querySelector("#l7");
let l8 = document.querySelector("#l8");
let l9 = document.querySelector("#l9");
let l10 = document.querySelector("#l10");
let l11 = document.querySelector("#l11");
let l12 = document.querySelector("#l12");
let l13 = document.querySelector("#l13");
let l14 = document.querySelector("#l14");

let imgProfilo = document.querySelector(".img-profilo");

let neonBlu = document.querySelectorAll(".neonH1");



function creaTitolo() {


setTimeout(() => { l1.classList.add("neon"); }, 2300);
setTimeout(() => { l2.classList.add("neon"); }, 2000);
setTimeout(() => { l3.classList.add("neon"); }, 1700);
setTimeout(() => { l4.classList.add("neon"); }, 1400);
setTimeout(() => { l5.classList.add("neon"); }, 1100);
setTimeout(() => { l6.classList.add("neon"); }, 800);
setTimeout(() => { l7.classList.add("neon"); }, 500);
setTimeout(() => { l8.classList.add("neon"); }, 500);
setTimeout(() => { l9.classList.add("neon"); }, 800);
setTimeout(() => { l10.classList.add("neon"); }, 1100);
setTimeout(() => { l11.classList.add("neon"); }, 1400);
setTimeout(() => { l12.classList.add("neon"); }, 1700);
setTimeout(() => { l13.classList.add("neon"); }, 2000);
setTimeout(() => { l14.classList.add("neon"); }, 2300);


    

    setTimeout(() => {
        neonBlu.forEach(elemento => elemento.classList.add("neon-blu"));
    }, 2600);

    setTimeout(() => { imgProfilo.classList.add("img-led"); }, 2950);
    setTimeout(() => { imgProfilo.classList.add("img-illuminata"); }, 2950);



}



