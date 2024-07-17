// CARACTERES POSSIVEIS
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

// FILTROS PARA A GERAÇÃO DAS SENHAS
const checkUpper = document.querySelector("#checkUpper");
const checkLower = document.querySelector("#checkLower");
const checkNumber = document.querySelector("#checkNumber");
const checkSpecial = document.querySelector("#checkSpecial");

// ELEMENTOS DO HTML
const slider = document.querySelector(".slider");
const sliderDisplay = document.querySelector(".sliderDisplay");
const showPassword = document.querySelector(".password");
const generateBtn = document.querySelector(".generateBtn");
const copyBtn = document.querySelector("#copy");
// VALOR DO SLIDER EM INTEIRO
let sliderValue = parseInt(slider.value);

// VARIAVEL QUE JUNTARA OS POSSIVEL CARACTERES
let poolChar = "";

// SENHA FINAL
let generatedPassword = "";

slider.addEventListener("input", () => {
    sliderValue = parseInt(slider.value);
    sliderDisplay.textContent = sliderValue;
});

generateBtn.addEventListener("click", () => {
    generatedPassword = "";
    poolChar = "";
    if (checkUpper.checked) poolChar += upper;
    if (checkLower.checked) poolChar += lower;
    if (checkNumber.checked) poolChar += numbers;
    if (checkSpecial.checked) poolChar += specialCharacters;
    if (poolChar === "") return;
    for (let i = 0; i < sliderValue; i++) {
        generatedPassword +=
            poolChar[Math.floor(Math.random() * poolChar.length)];
    }

    showPassword.textContent = generatedPassword;
});

copyBtn.addEventListener("click", () => {
    if (generatedPassword !== "") {
        navigator.clipboard.writeText(generatedPassword);
        alert("Senha copiada");
    }
});
