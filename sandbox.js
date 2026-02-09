//Exo 5
class heroClass {
  static DEFAULT_POWER_LEVEL = 50;
  static DEFAULT_STRENGTH_RATIO = 50;
  static DEFAULT_HEALTH = 500;
  static DEFAULT_NAME = "Unknown";

  constructor(
    name = heroClass.DEFAULT_NAME,
    health = heroClass.DEFAULT_HEALTH,
    strength = heroClass.DEFAULT_STRENGTH_RATIO,
    power = heroClass.DEFAULT_POWER_LEVEL,
  ) {
    //? Devrais-je laisser le constructeur vide ?
    this.name = name;
    this.basicHealth = health;
    this.strengthRatio = strength;
    this.powerLevel = power;
    this.weapon = null; //arme par défaut nulle, le héro n'en n'a pas tant qu'on en équipe pas
    this.spells = []; //tableau vide qui contiendra le(s) sort(s) du héro
    this.spellsList = []; //tableau vide qui contiendra le(s) nom(s) du/des sort(s) du héro
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

  equipWeapon(newWeapon) {
    if (!newWeapon) {
      //On vérifie si l'arme existe
      console.log("Erreur : l'arme entrée n'existe pas.");
      return;
    }

    if (!(newWeapon instanceof Weapon)) {
      //Si l'arme existe, on vérifie qu'elle est bien un objet de la classe Weapon
      console.error(
        "Erreur : Cette instance n'est pas classifiée comme étant une arme.",
      );
      return;
    }

    //Si tout est bon, la logique primaire est exécutée
    this.weapon = newWeapon;
    console.log(`${this.name} s'équipe de : ${newWeapon.weaponName}`);
  }

  getAttackPower() {
    let totalPower = this.strengthRatio;
    if (this.weapon) {
      totalPower += this.weapon.damage;
    }
    console.log(
      `Puissance d'attaque de ${this.name} : ${this.strengthRatio}. Puissance d'attaque combinée avec son équipement : ${totalPower}.`,
    );

    return totalPower;
  }

  learnSpell(newSpell) {
    if (!newSpell) {
      console.log("Erreur : le sort n'existe pas.");
      return;
    }

    if (!(newSpell instanceof Spell)) {
      console.error(
        "Erreur : Cette instance n'est pas classifiée comme étant un sort.",
      );
    }

    this.spells.push(newSpell);
    console.log(
      `${this.name} viens d'apprendre le sort : ${newSpell.spellName}.`,
    );
  }

  getMagicalPower() {
    let magicPower = this.powerLevel;
    if (this.spells !== undefined || this.spells.length !== 0) {
      this.spells.forEach((e) => {
        magicPower += e.getSpellMagicalLevel();
      });
    }
    console.log(
      `Puissance magique de ${this.name} : ${this.powerLevel}. Puissance magique combinée avec ses sorts : ${magicPower}`,
    );
  }

  getSpells() {
    if (this.spells !== undefined || this.spells.length !== 0) {
      for (let i = 0; i < this.spells.length; i++) {
        //On itère dans l'entièreté du tableau des sorts
        const element = this.spells[i]; //On récupère l'élément sur lequel le tableau est à l'instant T
        this.spellsList.push(element.getSpellName()); //On ajoute à notre tableau vide précisément le nom de chaque sort du tableau des sorts
      }
      console.log(
        `Liste des sorts de ${this.name} : ${this.spellsList.join(", ")}`,
      ); //On affiche le contenu de notre nouveau tableau contenant uniquement les noms de nos sorts
    } else {
      console.error("Le tableau est vide, il ne contient aucun sort.");
    }
  }

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

  rename(newName) {
    this.name = newName;
  }
}

class Weapon {
  constructor(
    weaponName = "Arme Inconnue",
    weaponDesc = "Description mystère.. l'arme n'est pas reconnue",
    damage = 10,
  ) {
    this.weaponName = weaponName;
    this.weaponDesc = weaponDesc;
    this.damage = damage;
  }

  //? Getters

  getWeaponName() {
    console.log(`${this.weaponName}.`);
    return this.weaponName;
  }

  getWeaponDesc() {
    console.log(`${this.weaponName}, ${this.weaponDesc}.`);
    return this.weaponDesc;
  }

  getWeaponDamage() {
    console.log(`Dégâts d'attaque de "${this.name}" : ${this.damage}`);
    return this.damage;
  }

  //? Setters

  renameThisWeapon(arg) {
    console.log(`L'arme "${this.weaponName}" a été renommé en "${arg}"`);
    this.weaponName = arg;
  }

  setWeaponDesc(arg) {
    console.log(
      `La description de l'arme "${this.weaponName}" a été modifiée.`,
    );
    this.weaponDesc = arg;
  }

  setWeaponDamage(arg) {
    console.log(
      `Les dégâts de l'arme ${this.weaponName} sont passés de ${this.damage} à ${arg}.`,
    );
    this.damage = arg;
  }
}

class Spell {
  constructor(
    spellName = "Sort Inconnu",
    spellDesc = "Description mystère.. le sort n'est pas reconnu",
    magicalPower = 5,
  ) {
    this.spellName = spellName;
    this.spellDesc = spellDesc;
    this.magicalPower = magicalPower;
  }

  //? Getters

  getSpellName() {
    return this.spellName;
  }

  getSpellDesc() {
    console.log(this.spellDesc);

    return this.spellDesc;
  }

  getSpellMagicalLevel() {
    return this.magicalPower;
  }
  //? Setters

  renameThisSpell(arg) {
    this.spellName = arg;
  }

  setSpellDesc(arg) {
    this.spellDesc = arg;
  }

  setSpellMagicalPower(arg) {
    this.magicalPower = arg;
  }
}

///* combatClass
class Warrior extends heroClass {
  static WARRIOR_BONUS_HEALTH = 200;
  static WARRIOR_BONUS_STRENGTH = 250;

  /* Utilisation de variable statique pour éviter d'utiliser "this" dans le constructeur (qu'il ne reconnait jamais puisque "super" n'est jamais appelé avant)
   * pas la peine d'initialiser à nouveau les variables passé en constructeur (this.name = name..) puisque le parent (heroClass) le fait déjà, il suffit de passer les variables au "super"
   *le "super" DONNE les éléments customs de la classe Warrior au parent (heroClass) pour que le parent construise la logique de base (là où se situe les this.name = name..)
   *puis renvois les éléments à l'enfant (ex: class Warrior) pour que lui continue à rajouter ses valeurs personnelles
   *l'utilisation des variables statiques permettent d'effectuer les calculs dynamiques avec les éléments stockés aussi bien dans le parent que dans l'enfant sans utiliser "this" dans le constructeur
   */

  constructor(
    name = heroClass.DEFAULT_NAME,
    basicHealth = heroClass.DEFAULT_HEALTH + Warrior.WARRIOR_BONUS_HEALTH,
    strengthRatio = heroClass.DEFAULT_STRENGTH_RATIO +
      Warrior.WARRIOR_BONUS_STRENGTH,
  ) {
    super(name, basicHealth, strengthRatio);
    this.title = "Guerrier";
  }

  getHeroName() {
    console.log(`Le nom du personnage est : "${this.name}"`);
    return this.name;
  }

  getHealth() {
    console.log(
      `[${this.title}: ${this.name}] Points de vies : ${this.basicHealth}`,
    );
    return this.basicHealth;
  }

  getStrengthRatio() {
    console.log(
      `[${this.title}: ${this.name}] Points de forces : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }

  getTitle() {
    console.log(`Titre de ${this.name}: [${this.title}]`);
    return this.title;
  }

  //? Setters

  setHeroName(arg) {
    this.name = arg;
    console.log(
      `Le nom du [${this.title}] à été défini comme étant désormais : ${this.name}`,
    );
  }

  setHealth(arg) {
    this.basicHealth = this.basicHealth + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de vies à été additionné avec votre valeur custom. les points de vies sont maintenant de : ${this.basicHealth}`,
    );
  }

  setStrengthRatio(arg) {
    this.strengthRatio = this.strengthRatio + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de forces à été additionné avec votre valeur custom. les points de forces sont maintenant de : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }
}

class Tank extends heroClass {
  static TANK_BONUS_HEALTH = 3500;
  static TANK_BONUS_STRENGTH = 20;

  /* Utilisation de variable statique pour éviter d'utiliser "this" dans le constructeur (qu'il ne reconnait jamais puisque "super" n'est jamais appelé avant)
   * pas la peine d'initialiser à nouveau les variables passé en constructeur (this.name = name..) puisque le parent (heroClass) le fait déjà, il suffit de passer les variables au "super"
   *le "super" DONNE les éléments customs de la classe Warrior au parent (heroClass) pour que le parent construise la logique de base (là où se situe les this.name = name..)
   *puis renvois les éléments à l'enfant (ex: class Tank) pour que lui continue à rajouter ses valeurs personnelles
   *l'utilisation des variables statiques permettent d'effectuer les calculs dynamiques avec les éléments stockés aussi bien dans le parent que dans l'enfant sans utiliser "this" dans le constructeur
   */

  constructor(
    name = heroClass.DEFAULT_NAME,
    basicHealth = heroClass.DEFAULT_HEALTH + Tank.TANK_BONUS_HEALTH,
    strengthRatio = heroClass.DEFAULT_STRENGTH_RATIO + Tank.TANK_BONUS_STRENGTH,
  ) {
    super(name, basicHealth, strengthRatio);
    this.title = "Tank";
  }

  getHeroName() {
    console.log(`Le nom du personnage est : "${this.name}"`);
    return this.name;
  }

  getHealth() {
    console.log(
      `[${this.title}: ${this.name}] Points de vies : ${this.basicHealth}`,
    );
    return this.basicHealth;
  }

  getStrengthRatio() {
    console.log(
      `[${this.title}: ${this.name}] Points de forces : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }

  getTitle() {
    console.log(`Titre de ${this.name}: [${this.title}]`);
    return this.title;
  }

  //? Setters

  setHeroName(arg) {
    this.name = arg;
    console.log(
      `Le nom du [${this.title}] à été défini comme étant désormais : ${this.name}`,
    );
  }

  setHealth(arg) {
    this.basicHealth = this.basicHealth + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de vies à été additionné avec votre valeur custom. les points de vies sont maintenant de : ${this.basicHealth}`,
    );
  }

  setStrengthRatio(arg) {
    this.strengthRatio = this.strengthRatio + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de forces à été additionné avec votre valeur custom. les points de forces sont maintenant de : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }
}

class Mage extends heroClass {
  static MAGE_BONUS_HEALTH = 400;
  static MAGE_BONUS_STRENGTH = 50;
  static MAGE_BONUS_POWER_LEVEL = 500;

  /* Utilisation de variable statique pour éviter d'utiliser "this" dans le constructeur (qu'il ne reconnait jamais puisque "super" n'est jamais appelé avant)
   * pas la peine d'initialiser à nouveau les variables passé en constructeur (this.name = name..) puisque le parent (heroClass) le fait déjà, il suffit de passer les variables au "super"
   *le "super" DONNE les éléments customs de la classe Warrior au parent (heroClass) pour que le parent construise la logique de base (là où se situe les this.name = name..)
   *puis renvois les éléments à l'enfant (ex: class Tank) pour que lui continue à rajouter ses valeurs personnelles
   *l'utilisation des variables statiques permettent d'effectuer les calculs dynamiques avec les éléments stockés aussi bien dans le parent que dans l'enfant sans utiliser "this" dans le constructeur
   */

  constructor(
    name = heroClass.DEFAULT_NAME,
    basicHealth = heroClass.DEFAULT_HEALTH + Mage.MAGE_BONUS_HEALTH,
    strengthRatio = heroClass.DEFAULT_STRENGTH_RATIO + Mage.MAGE_BONUS_STRENGTH,
    powerLevel = heroClass.DEFAULT_POWER_LEVEL + Mage.MAGE_BONUS_POWER_LEVEL,
  ) {
    super(name, basicHealth, strengthRatio, powerLevel);
    this.title = "Mage";
  }

  getHeroName() {
    console.log(`Le nom du personnage est : "${this.name}"`);
    return this.name;
  }

  getHealth() {
    console.log(
      `[${this.title}: ${this.name}] Points de vies : ${this.basicHealth}`,
    );
    return this.basicHealth;
  }

  getStrengthRatio() {
    console.log(
      `[${this.title}: ${this.name}] Points de forces : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }

  getTitle() {
    console.log(`Titre de ${this.name}: [${this.title}]`);
    return this.title;
  }

  //? Setters

  setHeroName(arg) {
    this.name = arg;
    console.log(
      `Le nom du [${this.title}] à été défini comme étant désormais : ${this.name}`,
    );
  }

  setHealth(arg) {
    this.basicHealth = this.basicHealth + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de vies à été additionné avec votre valeur custom. les points de vies sont maintenant de : ${this.basicHealth}`,
    );
  }

  setStrengthRatio(arg) {
    this.strengthRatio = this.strengthRatio + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de forces à été additionné avec votre valeur custom. les points de forces sont maintenant de : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }
}

class Assassin extends heroClass {
  static ASSASSIN_BONUS_HEALTH = 100;
  static ASSASSIN_BONUS_STRENGTH = 920;

  /* Utilisation de variable statique pour éviter d'utiliser "this" dans le constructeur (qu'il ne reconnait jamais puisque "super" n'est jamais appelé avant)
   * pas la peine d'initialiser à nouveau les variables passé en constructeur (this.name = name..) puisque le parent (heroClass) le fait déjà, il suffit de passer les variables au "super"
   *le "super" DONNE les éléments customs de la classe Warrior au parent (heroClass) pour que le parent construise la logique de base (là où se situe les this.name = name..)
   *puis renvois les éléments à l'enfant (ex: class Tank) pour que lui continue à rajouter ses valeurs personnelles
   *l'utilisation des variables statiques permettent d'effectuer les calculs dynamiques avec les éléments stockés aussi bien dans le parent que dans l'enfant sans utiliser "this" dans le constructeur
   */

  constructor(
    name = heroClass.DEFAULT_NAME,
    basicHealth = heroClass.DEFAULT_HEALTH + Assassin.ASSASSIN_BONUS_HEALTH,
    strengthRatio = heroClass.DEFAULT_STRENGTH_RATIO +
      Assassin.ASSASSIN_BONUS_STRENGTH,
  ) {
    super(name, basicHealth, strengthRatio);
    this.title = "Assassin";
  }

  getHeroName() {
    console.log(`Le nom du personnage est : "${this.name}"`);
    return this.name;
  }

  getHealth() {
    console.log(
      `[${this.title}: ${this.name}] Points de vies : ${this.basicHealth}`,
    );
    return this.basicHealth;
  }

  getStrengthRatio() {
    console.log(
      `[${this.title}: ${this.name}] Points de forces : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }

  getTitle() {
    console.log(`Titre de ${this.name}: [${this.title}]`);
    return this.title;
  }

  //? Setters

  setHeroName(arg) {
    this.name = arg;
    console.log(
      `Le nom du [${this.title}] à été défini comme étant désormais : ${this.name}`,
    );
  }

  setHealth(arg) {
    this.basicHealth = this.basicHealth + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de vies à été additionné avec votre valeur custom. les points de vies sont maintenant de : ${this.basicHealth}`,
    );
  }

  setStrengthRatio(arg) {
    this.strengthRatio = this.strengthRatio + arg;
    console.log(
      `[${this.title}] [${this.name}] La valeur de base des points de forces à été additionné avec votre valeur custom. les points de forces sont maintenant de : ${this.strengthRatio}`,
    );
    return this.strengthRatio;
  }
}

let defaultPlayer = new Assassin();
defaultPlayer.getHeroName();
defaultPlayer.getHealth(); 
defaultPlayer.getStrengthRatio(); 

// Test classe Warrior avec nom uniquement
let rowin = new Warrior("Rowin");
rowin.getHeroName();
rowin.getHealth();
rowin.getStrengthRatio();

// Test classe Tank avec nom uniquement
let hephaistos = new Tank("Hephaistos");
hephaistos.getHeroName();
hephaistos.getHealth();
hephaistos.getStrengthRatio();

let eastin = new Mage("Eastin");
eastin.getHeroName();
eastin.getHealth();
eastin.getStrengthRatio();
console.log(
  `Puissance magique de ${eastin.name} : ${eastin.getBasicPowerLevel()}`,
);

let excalin = new Weapon("Excalin", "L'arme Primordiale", 1500);
hephaistos.equipWeapon(excalin);
hephaistos.getAttackPower();
excalin.getWeaponDesc();

let fireBall = new Spell("Boule de feu", "Sort de boule de feu", 300);
eastin.learnSpell(fireBall);

let iceBall = new Spell("Boule de glace", "Sort de boule de glace", 200);
eastin.learnSpell(iceBall);
eastin.getMagicalPower();
eastin.getSpells();

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
