import UI from './UI.js';
const instance = new UI();

let date = new Date();
let overlay = document.querySelector('.overlay');
let message = overlay.querySelector(".ml9 > .text-wrapper > .letters");

overlay.style.display = "flex";
message.textContent = greet(date.getHours());

message.innerHTML = message.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

setTimeout(() => {
    overlay.style.animationName = "greetAnimationReverse";
    overlay.style.animationDuration = "1s";
    overlay.style.animationFillMode = "forwards";
}, 2000);

(function() {
    instance.render("homepage");
}());

function greet(h) {
    if (h < 12) return "Good morning!";
    if (h < 18) return "Good afternoon!";
    return "Good evening";
} 