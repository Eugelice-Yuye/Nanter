

const peca1 = document.querySelector(".peca1");
const camp1 = document.querySelector(".camp1");

var pos = camp1.getBoundingClientRect();
peca1.offsetX = `${pos.x}px`;

console.log(peca1.x," ",pos.left);