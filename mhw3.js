const Thorfinn = document.querySelector("#section3 img");
Thorfinn.addEventListener("click", ClickThorfinn);

function ClickThorfinn(event) {
    console.log("Thorfinn Clicked");
    const el = event.currentTarget;
    el.src = "https://www.animeclick.it/immagini/personaggio/Thorfinn/gallery_original/Thorfinn-5d6f842d8fe9c.jpg";
    const p = document.querySelector("#section3 p");
    p.textContent = "YOU have no enemies";
    const section3 = document.querySelector("#section3");
    section3.classList.add("black");
}

const B = document.querySelectorAll("nav .bottone");

B.forEach(button => {
    button.addEventListener("click", ClickB);
});

function ClickB(event) {
    const Thorfinn = document.querySelector("#section3 img");
    Thorfinn.src = "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/vinland-saga-events-thorfinn-season-2-cropped.jpg";
    const p = document.querySelector("#section3 p");
    p.textContent = "I have no enemies";
    const section3 = document.querySelector("#section3");
    section3.classList.remove("black");
}


const info = document.querySelector("#info");
info.addEventListener("click", finfo);

function finfo() {
    console.log("accedi");
    const el = document.querySelector("article .accedi");
    if (el.classList.contains("hidden")) {
        el.classList.remove("hidden");
    } else { console.log("non accesso"); }
}


const x = document.querySelector("#x");
x.addEventListener("click", fx);

function fx(event) {
    console.log("x");
    const el = document.querySelector("article .accedi");
    el.classList.add("hidden");
}



const passion = document.querySelector("section button");
passion.addEventListener("click", fpassion);

function fpassion(event) {
    const sect = document.querySelector("section");
    sect.dataset.grandezza = "grande";
    const terzop = document.querySelector("#terzopaio");
    terzop.classList.remove("hidden");
    const button = event.currentTarget;
    button.textContent = "Torna indietro";
    passion.removeEventListener("click", fpassion);
    passion.addEventListener("click", passionindietro);
}

function passionindietro(event) {
    const sect = document.querySelector("section");
    sect.dataset.grandezza = "piccolo";
    const terzop = document.querySelector("#terzopaio");
    terzop.classList.add("hidden");
    const button = event.currentTarget;
    button.textContent = "Tutte le mie Passioni";
    passion.removeEventListener("click", passionindietro);
    passion.addEventListener("click", fpassion);
}



