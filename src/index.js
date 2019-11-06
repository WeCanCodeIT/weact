const Weact = require("./libs/weact")

const appContainer = document.querySelector(".app")
const header = document.createElement("h2");
const queenBee = document.createElement("img");
const beeButton = document.createElement("button")
queenBee.src = "./img/beyonce-2.jpg";
queenBee.classList.add("queen")
header.innerHTML = "Hola Mundo, vamos a prometir nuestrue vida a la Reiña Beyonce";
header.classList.add("header")
Weact.wendew(appContainer, header)
Weact.wendew(appContainer, queenBee)
Weact.wendew(appContainer, beeButton)


