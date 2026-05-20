// BOTÓN DE MÚSICA



const musicBtn = document.querySelector(".music-btn");

const audio = new Audio("music.mp3");

audio.loop = true;

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        audio.play();
        musicBtn.innerHTML = "❚❚ PAUSAR MÚSICA";
        playing = true;

    }else{

        audio.pause();
        musicBtn.innerHTML = "▶ REPRODUCIR";
        playing = false;
    }
});


// ANIMACIÓN AL HACER SCROLL

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("show");
        }
    });
});


// EFECTO SUAVE AL NAVEGAR

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior: "smooth"
        });
    });
});


// CORAZONES FLOTANDO

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },5000);
}

setInterval(createHeart, 400);