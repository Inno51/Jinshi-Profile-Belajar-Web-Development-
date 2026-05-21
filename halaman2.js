const dialogs = [

    "What do you think of the story so far..?",

    "Jinhsi carries the burden of Jinzhou alone..",

    "Even so, she continues to protect everyone.",

    "I hope you are willing to pull for her though.",

    "Do not worry about your wallet, worry about 'not getting' her.",

    "I hope you have a good day-",

    "Rover."

];

let dialogIndex = 0;
let charIndex = 0;

const textElement = document.getElementById("dialog-text");

function typeText(){

    if(charIndex < dialogs[dialogIndex].length){

        textElement.innerHTML += dialogs[dialogIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 35);
    }
}

function nextDialog(){
    if(dialogIndex < dialogs.length - 1){

dialogIndex++;

        charIndex = 0;

        textElement.innerHTML = "";

        typeText();
    }
    else{
        startSceneTransition();
    }
}

function startSceneTransition(){

    textElement.classList.add("fade-out");

    const video = document.getElementById("bg-video");
    video.classList.add("fade-out");

    setTimeout(() => {

        // GANTI VIDEO / GAMBAR
        video.innerHTML = `
        <source src="images/journey-wuthering-waves.1920x1080.mp4" type="video/mp4">
        `;

        video.load();

        video.play();
        // dialog baru
        textElement.innerHTML =
        "Created by: Innocentius De Castlello";

        textElement.classList.remove("fade-out");

        video.classList.remove("fade-out");

    }, 1000);
}

document.body.addEventListener("click", nextDialog);

typeText();

