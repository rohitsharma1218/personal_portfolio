gsap.registerPlugin(ScrollTrigger);
// GSAP Intro

gsap.from(".logo", {
    y: -60,
    opacity: 0,
    duration: 1
});

gsap.from("nav ul li", {
    y: -60,
    opacity: 0,
    stagger: 0.15,
    duration: 1
});

gsap.from(".left h3", {
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".left h1", {
    x: -100,
    opacity: 0,
    delay: .3,
    duration: 1
});

gsap.from(".left h2", {
    x: -100,
    opacity: 0,
    delay: .6,
    duration: 1
});

gsap.from(".left p", {
    opacity: 0,
    delay: .9,
    duration: 1
});

gsap.from(".buttons", {
    y: 50,
    opacity: 0,
    delay: 1.2,
    duration: 1
});

gsap.from(".profile-circle", {
    scale: 0,
    opacity: 0,
    duration: 1.5
});

// Typing Effect

const words = [
    "Python Developer",
    "Django Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(charIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent=words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        setTimeout(type,300);

    }

}

type();
// Navbar Scroll Effect

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
gsap.from(".about-left",{

    scrollTrigger:{

        trigger:".about-left",

        start:"top 80%"

    },

    x:-100,

    opacity:0,

    duration:1

});

//gsap.from(".stat-card",{

  //  scrollTrigger:{
//
  //      trigger:".about-right",
//
  //      start:"top 80%"
//
  //  },
//
  //  y:80,
//
  //  opacity:0,
//   stagger:.2,
//
  //  duration:1
//
//});
//gsap.from(".skill-card",{

  //  scrollTrigger:{
    //    trigger:".skills",
      //  start:"top 80%"
    //},

    //y:80,

    //opacity:0,

    //stagger:.15,

    //duration:1

//});