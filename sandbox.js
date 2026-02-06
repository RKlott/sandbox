//Exo 5
class heroClass {
  DEFAULT_POWER_LEVEL = 50;
  DEFAULT_STRENGTH_RATIO = 50;
  DEFAULT_HEALTH = 500;
  DEFAULT_NAME = "Unknown";

  constructor() { //? Devrais-je laisser le constructeur vide ?
    this.name = this.DEFAULT_NAME;
    this.basicHealth = this.DEFAULT_HEALTH;

    this.powerLevel = this.DEFAULT_POWER_LEVEL;
    this.strengthRatio = this.DEFAULT_STRENGTH_RATIO;
  }

  //?Getters

  getName() {
    return this.name;
  }

  getBasicPowerLevel() {
    return this.powerLevel;
  }

  getBasicHealth() {
    return this.basicHealth;
  }

  getBasicStrengthRatio() {
    return this.strengthRatio;
  }

  //?Setters pour les héros

  setPowerLevel(arg) {
    this.powerLevel = arg;
    return;
  }

  setHealth(arg) {
    this.basicHealth = this.basicHealth + arg;
    return;
  }

  setStrengthRatio(arg) {
    this.strengthRatio = this.strengthRatio + arg;
    return;
  }

  rename(arg1, arg2) {
    arg1 = arg2;
    return;
  }
}

class weaponClass extends heroClass {
  constructor(holderName, weaponName, weaponDesc, powerLevel = this.getBasicPowerLevel()) {
    this.holderName = holderName;
    this.powerLevel = powerLevel;
    this.weaponName = weaponName;
    this.weaponDesc = weaponDesc;
  }

  //? Getters

  getWeaponName() {
    return this.weaponName;
  }

  getWeaponDesc() {
    return this.weaponDesc;
  }

  getWeaponPowerLevel() {
    return this.powerLevel;
  }

  getHolderName() {
    return this.holderName;
  }

  //? Setters

  renameThisWeapon(arg) {
    this.weaponName = arg;
  }

  setWeaponDesc(arg) {
    this.weaponDesc = arg;
  }

  setWeaponPowerLevel(arg) {
    this.powerLevel = arg;
  }

  setHolderName(arg) {
    this.holderName = arg;
  }
}

class spellClass extends heroClass {
  constructor(
    holderName,
    spellName,
    spellDesc,
    powerLevel = this.getBasicPowerLevel(),
  ) {
    this.holderName = holderName;
    this.powerLevel = powerLevel;
    this.spellName = spellName;
    this.spellDesc = spellDesc;
  }

  //? Getters

  getSpellName() {
    return this.spellName;
  }

  getSpellDesc() {
    return this.spellDesc;
  }

  getSpellPowerLevel() {
    return this.powerLevel;
  }

  getHolderName() {
    return this.holderName;
  }
  //? Setters

  renameThisSpell(arg) {
    this.spellName = arg;
  }

  setSpellDesc(arg) {
    this.spellDesc = arg;
  }

  setSpellPowerLevel(arg) {
    this.powerLevel = arg;
  }

  setHolderName(arg) {
    this.holderName = arg;
  }
}

///* combatClass
class Warrior extends heroClass {
  constructor(holderName, basicHealth, strengthRatio) {
    super(holderName, basicHealth, strengthRatio);
  }

  warriorBonusHealth = 200;
  warriorBonusStrengthRatio = 250;
  title = "Guerrier";

  getHeroName() {
    return this.getName();
  }

  getHealth() {
    return this.getBasicHealth() + this.warriorBonusHealth;
  }

  getStrengthRatio() {
    return this.getBasicStrengthRatio() + this.warriorBonusStrengthRatio;
  }

  getTitle() {
    return this.title;
  }
}

class Mage extends heroClass {
  constructor(holderName, basicHealth) {
    super(holderName, basicHealth);
  }

  strengthRatio = 50;
}
//////////////////////////////////////////////////////////////////////
//Exo 4
let tableauChiffres = [2, 4, 3, 8, 10];

class arrayCalculator {
  constructor(array) {
    this.array = array;
  }

  calculate() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
    }

    console.log("Total des elements du tableau de l'exo 4 : " + sum);
  }
}

const nda = new arrayCalculator(tableauChiffres);

console.log(nda.calculate());

////////////////////////////////////////////////////////////////////

let modalButton = document.getElementById("modalButton");
let closeModal = document.getElementById("closeModal");
let myModal = document.getElementById("myModal");

modalButton.addEventListener("click", () => {
  myModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  myModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  //TODO: corriger le soucis ici, cette fonction empêche l'utilisation de la modale, sûrement le premier if statement qui fait défaut

  if (e.target === myModal) {
    //! problème, le site analyse qu'il as un display flex depuis le clique du bouton, donc le display none est immédiat
    myModal.style.display = "none"; //? Checker si c'est suffisant
  }
});

//? Feu tricolore
let feuRouge = document.getElementById("rouge");
let feuOrange = document.getElementById("orange");
let feuVert = document.getElementById("vert");
let tricolore = document.getElementById("tricolor");
let feu = document.getElementsByClassName("feu");

function feuTricolore() {
  const delay = 1000;

  setTimeout(() => {
    Array.from(feu)
      .reverse()
      .forEach((element, index) => {
        //ajout du reverse pour que ça commence au vert
        setTimeout(
          () => {
            element.classList.add("brightness");
          },
          index * 2 * delay,
        ); //? calcul dans le temps pour créer un décalage progressif de l'ajout de la class brightness en fonction de la position dans l'array

        //ajout de la classe calculé
        /* index 0: 0 x 2 = 0s
         *  index 1: 1 x 2 = 2s
         *  index 2: 2 x 2 = 4s
         */

        setTimeout(
          () => {
            element.classList.remove("brightness");
          },
          index * 2 * delay + delay,
        );

        //retrait de la classe calculé
        /* index 0: 0 x 2 = 0s + 1(delay) = 1s
         *  index 1: 1 x 2 = 2s + 1(delay) = 3s
         *  index 2: 2 x 2 = 4s + 1(delay) = 5s
         */
      });

    feuTricolore();
  }, 6000); //On loop à la fin à 6 secondes pour recommencer un cycle dynamique
}

feuTricolore();

function pairOrNot($arg) {
  return Number($arg) % 2 === 0;
}

function isPalindrome(str) {
  const reversed = String(str).split("").reverse().join("");
  return str === reversed;
}

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
    //TODO: bonus: rajouter une vérif pour éviter la duplication d'alarmes
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
