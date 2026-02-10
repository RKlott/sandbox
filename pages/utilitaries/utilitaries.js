

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

////// Exo 5

const numbersArray = [-1, -3, 6, 0, 2, 0, -7];
let modifiedArray = [];

 modifiedArray = numbersArray.map((x) => x < 0 ? "-" : (x) > 0 ? "+" : 0);
console.log(modifiedArray);

/// Exo 6 non necessaire ici
const pairArray = numbersArray.filter((x) => x % 2 === 0 ? true : false);
console.log("pairArray: "+pairArray);

/// Exo 7 non necessaire ici

const longWords = ["longtemps", "ok", "treslongtemps", "sale", "wow"];
const filtredWords = longWords.filter((x) => x.length >= 5 ? true : false);
console.log("filtredWords: " + filtredWords);

/// Exo 8 non necessaire ici

let personnes = [
    {nom: "Alice", age: 22},
    {nom: "Bob", age: 17},
    {nom: "Charlie", age: 30}
];

const filteredPersonnes = personnes.filter((x) => x.age >= 18 ? true : false).map(y => y.nom);
console.log("personnes majeures filtrées: " + filteredPersonnes.join(", "));

/// Exo 9 

let tableauDeNombre = [2, 4, 76, 2];

const resultAcc = tableauDeNombre.reduce((acc, obj) => acc + obj);

console.log("Résultat du calcul :" + resultAcc);

/// Exo 10





