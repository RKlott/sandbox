

let age = 19;

let access = age >= 18 ? "autorisé" : "refusé";

console.log(access);

//////

const askNameButton = document.getElementById("askNameButton");
let askNameInput = document.getElementById("askName");

askNameButton.addEventListener("click", () => {
    let nameValue = askNameInput.value;

    let finalMsg = nameValue !== "" ? `Bonjour ${nameValue} !` : "Aucun prénom saisi";

    alert(finalMsg);
});

//////

const askNumberButton = document.getElementById("askNumberButton");
let askNumberInput = document.getElementById("askNumber");
let askNumberResult = document.getElementById("askNumberResult");

askNumberButton.addEventListener("click", () => {
    let askNumberValue = askNumberInput.value;

    let stringResult = askNumberValue % 2 === 0 ? "Pair" : "Impair";
    
    askNumberResult.innerHTML = "Résultat : "+ stringResult;
});

//////

const askNoteButton = document.getElementById("askNoteButton");
let askNoteInput = document.getElementById("askNote");
let askNoteResult = document.getElementById("askNoteResult");

askNoteButton.addEventListener("click", () => {
    let askNoteValue = askNoteInput.value;

    let stringResult = askNoteValue >= 16 ? "Excellent" : askNoteValue >= 12 ? "Bien" : askNoteValue >= 10 ? "Moyen" : "Insuffisant";

    askNoteResult.innerHTML = "Résultat : "+ stringResult;
});

//////

const numbersArray = [-1, -3, 6, 0, 2, 0, -7];
let modifiedArray = [];

 modifiedArray = numbersArray.map((x) => x < 0 ? modifiedArray.push("-") : (x) > 0 ? modifiedArray.push("+") : modifiedArray.push(0));
console.log([modifiedArray]);
