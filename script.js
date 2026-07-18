const words = [
"Data Analyst",
"Data Scientist",
"Machine Learning Enthusiast",
"Power BI Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typingEffect() {

current = words[i];

if (!isDeleting) {

document.querySelector(".typing").textContent =
current.substring(0, j++);

if (j > current.length) {

isDeleting = true;

setTimeout(typingEffect, 1200);

return;

}

}

else {

document.querySelector(".typing").textContent =
current.substring(0, j--);

if (j < 0) {

isDeleting = false;

i++;

if (i == words.length)

i = 0;

}

}

setTimeout(typingEffect, isDeleting ? 60 : 120);

}

typingEffect();

window.addEventListener("scroll", function () {

document.querySelectorAll(".card,.project").forEach(el => {

const position = el.getBoundingClientRect().top;

if(position < window.innerHeight-100){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.project").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

});