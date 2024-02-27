const firstName = "Matheus";
const lastName = "Baldança";
let ageUser = 28;
let weightUser = 80;
let numberA = 5;
let numberB = 14;
let numberC = 25;

const nomeComplet = `${firstName} ${lastName}`;

let calculoAB = numberA + numberB;

let calculoAC = numberA * numberC;

const paragraph = document.querySelector(".nomecomplet");
const calculoab = document.querySelector(".calculoab");
const calculoac = document.querySelector(".calculoac");

paragraph.textContent = nomeComplet;
calculoab.textContent = calculoAB;
calculoac.textContent = calculoAC;
