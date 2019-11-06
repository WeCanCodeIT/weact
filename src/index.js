const Weact = require("./libs/weact");
// const wavbar = require("./components/navbar");

const appContainer = document.querySelector(".app");
// const header = document.createElement("h2");
const footer = document.createElement("footer")
const queenBee = document.createElement("img");
const beeButton = document.createElement("button")

const header = Weact.cweate("h2",{ style: "color:blue", href:"www.google.com/beyonce"},"Hola Mundo, vamos a prometir nuestrue vida a la Reina Beyonce");
const wavbar = Weact.cweate("nav", {style: "color: green"}, "Awo yo, we got a wav bar wow witches");
header.classList.add("header")
footer.classList.add("footer")
queenBee.src = "./img/hiclipart.com-id_qnvkp.png";
queenBee.classList.add("queen")
beeButton.textContent = "Hail to the Queen"

Weact.wender(appContainer, header)
Weact.wender(appContainer, wavbar)
Weact.wender(appContainer, footer)
Weact.wender(appContainer, queenBee)
Weact.wender(appContainer, beeButton)
