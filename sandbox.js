//? Horloge
let heures = document.getElementById("heures");
let minutes = document.getElementById("minutes");
let secondes = document.getElementById("secondes");

//?Alarme
let alarmInput = document.getElementById("alarm-input");
let alarmButton = document.getElementById("alarm-button");
let alarmsContainer = document.getElementById("alarms");

let alarmArray = [];

//? Fonction pour afficher l'heure
//? Conversion en string pour pouvoir ajouter un 0 devant les chiffres inférieurs à 10 avec la méthode padStart() uniquement utilisable sur les strings
function horloge() {
  let date = new Date();

  let currentHour = String(date.getHours()).padStart(2, 0);
  let currentMinute = String(date.getMinutes()).padStart(2, 0);

  let compressedTime = currentHour + ":" + currentMinute;

  

  heures.innerHTML = `${currentHour} :`;
  minutes.innerHTML = `${currentMinute} :`;
  secondes.innerHTML = `${String(date.getSeconds()).padStart(2, 0)}`;

  for (let i = 0; i < alarmArray.length; i++) {
    let element = alarmArray[i];

    
    if (compressedTime == element) {

      let divToDelete = document.getElementById(element);

      if (alarmsContainer.contains(divToDelete)) {
        console.log("l'alarme de " + element + " est déclanché !!!!!");
        alarmsContainer.removeChild(divToDelete);
        alarmArray.splice(i, 1);
        console.log(alarmArray);
        
      }
    }
  }

  setTimeout(horloge, 1000); //? Rappel de la fonction toutes les secondes pour mettre à jour l'heure en temps réel
}

horloge(); //? Initialisation de l'horloge

alarmButton.addEventListener("click", () => {
  let alarmTime = alarmInput.value; //? Récupération de l'heure définie par l'utilisateur
  if (alarmTime) {
    let alarmElement = document.createElement("div"); //? Création d'un élément div pour afficher l'alarme
    alarmElement.setAttribute("id", alarmTime);
    alarmElement.innerHTML = `Alarme définie pour ${alarmTime}`; //? Contenu de l'alarme
    alarmArray.push(alarmTime);
    console.log(alarmArray);

    alarmsContainer.appendChild(alarmElement); //? Ajout de l'alarme à la page
  }
});

let firstNumber = document.getElementById("premier-nombre");
let secondNumber = document.getElementById("deuxieme-nombre");
const myButton = document.getElementById("mon-bouton");
let result = document.getElementById("resultat");

myButton.addEventListener("click", () => {
  let fN = firstNumber.value;
  let sN = secondNumber.value;

  if (fN && sN !== null) {
    if (fN % 1 === 0) {
      fN = parseInt(fN);
    } else {
      fN = parseFloat(fN);
    }

    if (sN % 1 === 0) {
      sN = parseInt(sN);
    } else {
      sN = parseFloat(sN);
    }

    let finalResult = fN + sN;

    result.innerHTML = "Le résultat est : " + finalResult;
    console.log(typeof finalResult);
  } else {
    result.innerHTML =
      "Impossible d'effectuer le calcul, les valeurs sont null.";
  }
});
