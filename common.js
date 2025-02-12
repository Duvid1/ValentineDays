document.addEventListener("DOMContentLoaded", () => {
    const noBnt = document.getElementById("No_Button");
    if (!noBnt) {
        console.error("Button mit ID 'No_Button' nicht gefunden!");
        return;
    }

    const height = window.innerHeight / 2;
    const width = window.innerWidth / 2;
    noBnt.addEventListener("click", () => {
        let randX = Math.floor((Math.random() * width / 2) + 1);
        let randY = Math.floor((Math.random() * height / 2) + 1);
        noBnt.style.transform = `translate(${randX}px, ${randY}px)`;
    });
})
const messages = [
    "Are you sure?",
    "Are you sure sure??",
    "Are you sure sure sure???",
    "WHYYYYY NOT!!!! D:",
    "If you say no, I will be really sadge...",
    "Pretty Pleaseeeee!!!!!!!",
    "Ok I will stop asking ",
    "JK SAY YES PLEASE!!!!!!!!"
];
let messagesIndex = 0;

const gifs = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif",

]
let gifsIndex = 0;

function handleNoClick() {
    const noBnt = document.getElementById("No_Button");
    const yesBnt = document.getElementById("Yes_Button");
    noBnt.textContent = messages[messagesIndex];
    messagesIndex = (messagesIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesBnt).fontSize);
    yesBnt.style.fontSize = `${currentSize * 1.5}px`;

    const gifBnt = document.getElementsByClassName("gif_container");
    gifBnt.textContent = gifs[gifsIndex];
    gifsIndex = (gifsIndex + 1) % gifs.length;


}

function handleYesClick() {
    window.location.href = "yes_page.html";
}