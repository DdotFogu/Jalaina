let camilla = document.getElementById("camilla")
let dialog = document.getElementById("dialog")
let dialogText = document.getElementById("dialog-text")

let clickCount = -1
let allDialog = [
    "HELLO THIS IS A TEXT TEXT SUP NIGGER MY NAME IS DDOT AND I LIKE TO GO FISHING FOR SOME FISHES BECAUSE I THINK THEY TASTE GOOD"
]

camilla.addEventListener("click", function (e) {
    clickCount += 1
    checkCount()
})

function checkCount() {
    switch (clickCount) {
        case 0:
            dialog.style.display = "block";
            typeDialog(clickCount, allDialog)
    }
}

async function typeDialog(dialogIdx, dialogArray = ["EMPTY"]) {
    let newText = dialogArray[dialogIdx]

    dialogText.textContent = ''
    for (let i = 0; i < newText.length; i++) {
        dialogText.textContent += newText[i]
        await sleep(0.02);
    }
}

async function sleep(seconds) {
    return new Promise(reslove => setTimeout(reslove, seconds * 1000))
}