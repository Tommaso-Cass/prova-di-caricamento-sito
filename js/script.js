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
   



   setTimeout(() => {
    l1.classList.add("neon");
}, 895);

setTimeout(() => {
    l2.classList.add("neon");
}, 350);

setTimeout(() => {
    l3.classList.add("neon");
}, 1175);

setTimeout(() => {
    l3.classList.remove("neon");
}, 2500);
setTimeout(() => {
    l3.classList.add("neon");
}, 2770);
setTimeout(() => {
    l3.classList.remove("neon");
}, 2770);
setTimeout(() => {
    l3.classList.add("neon");
}, 3270);

setTimeout(() => {
    l4.classList.add("neon");
}, 520);

setTimeout(() => {
    l5.classList.add("neon");
}, 1080);

setTimeout(() => {
    l6.classList.add("neon");
}, 300);

setTimeout(() => {
    l7.classList.add("neon");
}, 690);

setTimeout(() => {
    l8.classList.add("neon");
}, 1220);

setTimeout(() => {
    l8.classList.remove("neon");
}, 1400);
setTimeout(() => {
    l8.classList.add("neon");
}, 1700);
setTimeout(() => {
    l8.classList.remove("neon");
}, 2000);
setTimeout(() => {
    l8.classList.add("neon");
}, 2300);

setTimeout(() => {
    l9.classList.add("neon");
}, 660);

setTimeout(() => {
    l9.classList.remove("neon");
}, 1500);
setTimeout(() => {
    l9.classList.add("neon");
}, 1800);
setTimeout(() => {
    l9.classList.remove("neon");
}, 1750);
setTimeout(() => {
    l9.classList.add("neon");
}, 2300);

setTimeout(() => {
    l10.classList.add("neon");
}, 700);

setTimeout(() => {
    l11.classList.add("neon");
}, 770);

setTimeout(() => {
    l12.classList.add("neon");
}, 1125);

setTimeout(() => {
    l13.classList.add("neon");
}, 370);

setTimeout(() => {
    l14.classList.add("neon");
}, 1050);


setTimeout(() => {
    neonBlu.forEach(elemento =>{
    elemento.classList.add("neon-blu");
    })
}, 3400);

setTimeout(() => {
    imgProfilo.classList.add("img-led")
}, 4200);
setTimeout(() => {
    imgProfilo.classList.add("img-illuminata")
}, 4600);


}

