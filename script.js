let catMeow = document.getElementById("cat-meow")
let catPurr = document.getElementById("cat-purr")
let buttonClick = document.getElementById("button-click")
let typeSound = document.getElementById("type-sound")
typeSound.volume = 0.3;

let question = document.getElementById("question")
let noButton = document.getElementById("no-button")
let yesButton = document.getElementById("yes-button")

let buttonGroup = document.getElementById("button-group")
let feedButton = document.getElementById("feed-button")
let petButton = document.getElementById("pet-button")
let playButton = document.getElementById("play-button")

let camilla = document.getElementById("camilla")
let dialog = document.getElementById("dialog")
let dialogText = document.getElementById("dialog-text")
let dialogNext = document.getElementById("dialog-next")

let clickCount = -1
let curentDialog = [
    "I had to get up from my 6th nap of the day for this, so it better be worth it.",
    "You might know me as camilla, or the one you took Jr away from... eh it's whatever he was too clingy anyway.",
    "Your boyfriend programmed this website to give you a note... but if you want to see it you'd have to do some things for me.",
    "Go ahead and give these buttons a try, click enough of them and ill share you the note.",
]

let isTyping = false;
let currentText = "";

let fed = false
let pet = false
let played = false
let done = false

noButton.addEventListener("click", async function (e) {
    buttonClick.currentTime = 0;
    buttonClick.play();

    await sleep(0.25)

    window.close()
})

yesButton.addEventListener("click", async function (e) {
    buttonClick.currentTime = 0;
    buttonClick.play();

    await sleep(1)

    window.location.href = 'note.html';
})

feedButton.addEventListener("click", async function (e) {
    document.getElementById("food").style.display = "block";

    buttonClick.currentTime = 0;
    buttonClick.play();

    await sleep(0.25)

    if (fed) {
        curentDialog = [
            "I don't think I can eat anymore.",
        ]
        clickCount = 0;
        checkCount();
        return;
    }

    curentDialog = [
        "Yummy! That treat tasted really yummy!",
        "You are one step closer from the note.",
    ]
    clickCount = 0;
    checkCount();
    fed = true;
    feedButton.remove()
})

petButton.addEventListener("click", async function (e) {
    buttonClick.currentTime = 0;
    buttonClick.play();

    catPurr.currentTime = 0;
    catPurr.play();

    await sleep(0.25)

    if (pet) {
        curentDialog = [
            "Okay okay, thats enough petting for now.",
        ]
        clickCount = 0;
        checkCount();
        return;
    }

    curentDialog = [
        "Thank you for the pets, I feel much better now. I absolutly love being pet.",
        "You're even closer to the note now. Keep going, and you'll recieve.",
    ]
    clickCount = 0;
    checkCount();
    pet = true;
    petButton.remove()
})


playButton.addEventListener('click', async function (e) {
    document.getElementById("play").style.display = "block";

    buttonClick.currentTime = 0;
    buttonClick.play();

    await sleep(0.25)

    if (played) {
        curentDialog = [
            "Im too tired to play now. I think i'll sleep after im done with this."
        ]
        clickCount = 0;
        checkCount();
        return;
    }

    curentDialog = [
        "I love to play with my toys. They always make me so happy!",
        "You're so close to the note. You should get it soon."
    ]
    clickCount = 0;
    checkCount();
    played = true;
    playButton.remove()
})

camilla.addEventListener("click", function (e) {
    catMeow.currentTime = 0;
    catMeow.play();

    if (isTyping) {
        dialogText.textContent = currentText
        isTyping = false

        return;
    }

    clickCount += 1
    checkCount()
})

function checkCount() {

    if (clickCount >= 0) {
        console.log(clickCount);
        if (clickCount > curentDialog.length - 1) {
            dialog.style.display = "none";
            if (done) {
                question.style.display = 'block';
                return
            }
            if (fed && pet && played) {
                curentDialog = [
                    "Okay I think you've done enough. I'll go ahead and give up the note.",
                    "But first you must answer one question. Once you give your answer you will be redirected accordingly."
                ]
                clickCount = 0;
                checkCount();

                done = true
                return;
            }

            buttonGroup.style.display = 'block';

            return;
        }

        buttonGroup.style.display = 'none';
        dialog.style.display = "block";
        typeDialog(clickCount, curentDialog);
    }
}


async function typeDialog(dialogIdx, dialogArray = ["EMPTY"]) {
    let newText = dialogArray[dialogIdx]
    dialogNext.style.display = 'none';
    currentText = newText
    isTyping = true

    dialogText.textContent = ''
    for (let i = 0; i < newText.length; i++) {
        if (!isTyping) { break; }

        dialogText.textContent += newText[i]

        if (i % 2) {
            typeSound.currentTime = 0;
            typeSound.play();
        }

        if (newText[i] == '.') {
            await sleep(0.75);
        }
        else {
            await sleep(0.04);
        }
    }

    dialogNext.style.display = 'block';
    dialogText.textContent = currentText;
    isTyping = false
}

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}