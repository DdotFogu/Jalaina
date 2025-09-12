let camilla = document.getElementById("camilla")
let dialog = document.getElementById("dialog")
let dialogText = document.getElementById("dialog-text")

let clickCount = -1
let allDialog = [
    "HELLO THIS IS A TEXT TEXT SUP NIGGER MY NAME IS DDOT AND I LIKE TO GO FISHING FOR SOME FISHES BECAUSE I THINK THEY TASTE GOOD",
    "MY NAME IS D AND I NEED TO FREAKEN PEE"
]

let isTyping = false;
let currentText = "";

camilla.addEventListener("click", function (e) {
    if (isTyping){
        dialogText.textContent = currentText
        isTyping = false
        return;
    }

    clickCount += 1
    checkCount()
})

function checkCount() {
    if (clickCount >= 0){
        console.log(clickCount);
        if (clickCount > allDialog.length - 1){
            dialog.style.display = "none";
            return;}
        dialog.style.display = "block";
        typeDialog(clickCount, allDialog);
    }
 }


async function typeDialog(dialogIdx, dialogArray = ["EMPTY"]) {
    let newText = dialogArray[dialogIdx]
    currentText = newText
    isTyping = true

    dialogText.textContent = ''
    for (let i = 0; i < newText.length; i++) {
        if (!isTyping){break;}

        dialogText.textContent += newText[i]
        await sleep(0.02);
    }

    dialogText.textContent = currentText;
    isTyping = false
}

async function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}