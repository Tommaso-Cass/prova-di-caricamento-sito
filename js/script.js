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



let neonBlu = document.querySelectorAll(".neonH1");



function creaTitolo() {


    setTimeout(() => { l1.classList.add("neon-blu"); }, 2300);
    setTimeout(() => { l2.classList.add("neon-blu"); }, 2000);
    setTimeout(() => { l3.classList.add("neon-blu"); }, 1700);
    setTimeout(() => { l4.classList.add("neon-blu"); }, 1400);
    setTimeout(() => { l5.classList.add("neon-blu"); }, 1100);
    setTimeout(() => { l6.classList.add("neon-blu"); }, 800);
    setTimeout(() => { l7.classList.add("neon-blu"); }, 500);
    setTimeout(() => { l8.classList.add("neon-blu"); }, 500);
    setTimeout(() => { l9.classList.add("neon-blu"); }, 800);
    setTimeout(() => { l10.classList.add("neon-blu"); }, 1100);
    setTimeout(() => { l11.classList.add("neon-blu"); }, 1400);
    setTimeout(() => { l12.classList.add("neon-blu"); }, 1700);
    setTimeout(() => { l13.classList.add("neon-blu"); }, 2000);
    setTimeout(() => { l14.classList.add("neon-blu"); }, 2300);




    setTimeout(() => {
        neonBlu.forEach(elemento => elemento.classList.add("neon"));
    }, 2600);



}




let form = document.querySelector('#contactForm');
let statusDiv = document.querySelector('#status');
let submitButton = document.querySelector('#submitButton');
let scrittaStatus = document.querySelector(".scritta-status-ok");
let svgEnvelope = document.querySelector("#svg-envelope");



form.addEventListener('submit', function (event) {


    event.preventDefault();


    submitButton.disabled = true;



    let data = new FormData(form);


    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {

            if (response.ok) {

                scrittaStatus.textContent = "Messaggio inviato!";
                svgEnvelope.classList.add("bi", "bi-envelope-check");
                statusDiv.classList.add("status-ok");
                setTimeout(() => {
                    statusDiv.classList.remove("status-ok");
                    scrittaStatus.textContent = "";
                    svgEnvelope.classList.remove("bi", "bi-envelope-check");
                }, 5000);
                form.reset();


            } else {

                scrittaStatus.textContent = "Errore nell'invio del messagio, prova più tardi!";
                svgEnvelope.classList.add("bi", "bi-envelope-exclamation");
                statusDiv.classList.add("status-error");
                setTimeout(() => {
                    statusDiv.classList.remove("status-error");
                    scrittaStatus.textContent = "";
                    svgEnvelope.classList.remove("bi", "bi-envelope-exclamation");
                }, 5000);
                form.reset();
            }
        })
        .catch(error => {

            scrittaStatus.textContent = "Errore di rete!";
                svgEnvelope.classList.add("bi", "bi-envelope-exclamation");
                statusDiv.classList.add("status-error");
                setTimeout(() => {
                    statusDiv.classList.remove("status-error");
                    scrittaStatus.textContent = "";
                    svgEnvelope.classList.remove("bi", "bi-envelope-exclamation");
                }, 5000);
                
        })

        .finally(() => {

            submitButton.disabled = false;

        });


    });
