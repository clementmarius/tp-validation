const visibilitePasswordButton = document.getElementById("btn-visibilite-password")
let inputPw = document.getElementById("mdp");

let imgOeil = document.getElementById("oeil");

let boutonDeValidation = document.getElementById("valider");

visibilitePasswordButton.addEventListener("click", visibilitePassword);
inputPw.addEventListener("input", buttonValidate);


function visibilitePassword() {


    if (inputPw.type === "password") {

        inputPw.type = "Text";

        imgOeil.src = "images/eye-open.png";

    } else {

        inputPw.type = "password";

        imgOeil.src = "images/eye-close.png";

    }



}


let smallCharacter = document.getElementById("minuscule");
let upperCharacter = document.getElementById("majuscule");
let numbers = document.getElementById("chiffre");
let nbCharacter = document.getElementById("nbCaracteres");

function buttonValidate() {

    const hasbiggerCaseLetter = /[A-Z]/.test(inputPw.value);
    const hasLowerCaseLetter = /[a-z]/.test(inputPw.value);
    const hasNumbers = /[0-9]/.test(inputPw.value);
    const hasEightCaracter = inputPw.value.length >= 8;

    if (hasLowerCaseLetter) {

        smallCharacter.style.color = "green";
    } else {
        smallCharacter.style.color = "red";
    }


    if (hasbiggerCaseLetter) {

        upperCharacter.style.color = "green";
    } else {
        upperCharacter.style.color = "red";
    }

    if (hasNumbers) {

        numbers.style.color = "green";
    } else {
        numbers.style.color = "red";
    }

    if (hasEightCaracter) {
        nbCharacter.style.color = "green";
    } else {
        nbCharacter.style.color = "red";
    }

    if (hasEightCaracter && hasLowerCaseLetter && hasNumbers && hasbiggerCaseLetter) {
        boutonDeValidation.disabled = false;
    } else {
        boutonDeValidation.disabled = true;
    }
}



