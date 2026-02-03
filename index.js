const button = document.getElementById("sendingButton");

/**@type {string} */
const userQuestion = document.getElementById("text");

const botResponse = document.getElementById("botResponse");

//////////////////////////////////Playlist//////////////////////////////////
let playlist = [];
const songContainer = document.getElementById("song-container");
let songModifier = document.getElementById("song-modifier");
const inputButton = document.getElementById("input-button");
let songInput = document.getElementById("song-input");

let warningTitle = document.createElement("h3");

class Etudiant {
  constructor(age, nom) {
    this.age = age;
    this.nom = nom;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getNom() {
    return this.nom;
  }

  setNom(nom) {
    this.nom = nom;
  }
}

let etudiant1 = new Etudiant(21, "Etudiant1");
let etudiant2 = new Etudiant(24, "Etudiant2");

const studentButton = document.getElementById("etudiant");

etudiant1.setAge(26);

studentButton.addEventListener("click", () => {
  alert(etudiant1.getNom() + ", age: " + etudiant1.getAge());
});

/////////////////////////////////////

function playlistActivation() {
  if (playlist.length !== 0) {
    songContainer.innerHTML = "";
    for (let a of playlist) {
      //pour chaque element de l'array playlist
      let songDiv = document.createElement("div"); //creation d'une div qui contiendra le son parcouru
      let songSpan = document.createElement("span"); //creation d'un span qui contiendra le nom du son
      let songPosition = playlist.indexOf(a) + 1; //récupération de la position du son dans la playlist avec +1 pour que ça commence visuellement à 1
      songSpan.innerText = songPosition + " " + a; //définition du contenu du span avec du texte comprenant la position du son et son nom
      songSpan.className = "song"; //ajout d'une classe "song" au son pour le css
      let songIndex = playlist.indexOf(a) + "-song"; //creation d'une variable dynamique avec la position du son actuel
      songDiv.setAttribute("id", songIndex); //ajout d'un id dynamique au conteneur du son actuel grace a la variable ci-dessus qui sera utile pour target avec précision le son lors de la gestion de modification/suppression
      let songDeleteIcon = document.createElement("i"); //creation d'une icone de poubelle
      songDeleteIcon.className = "fa-solid fa-trash deleteIcon " + songIndex; //ajout de la classe qui définira le type d'icone

      songDeleteIcon.addEventListener("click", () => {
        songDiv.remove(); //suppression de la div parente

        const index = playlist.indexOf(a); //suppression de la playlist ici
        if (index > -1) {
          playlist.splice(index, 1);
        }

        playlistActivation(); //rafraichissement de la liste
        console.log("Supprimé : " + a);
      });

      let songModifyIcon = document.createElement("i"); //creation d'une icone de modification
      songModifyIcon.className = "fa-solid fa-pen"; //ajout de la classe qui définira le type d'icone

      if (playlist.indexOf(a) === 1) {
        //si on est au deuxième élément de la playlist
        songDiv.appendChild(songModifyIcon); //on défini l'icone de modif, qui est uniquement possible pour le deuxième élément
      }

      songDiv.append(songSpan, songDeleteIcon); //ici on ajoute nos éléments standard (le son et une icone de suppression)
      songContainer.appendChild(songDiv); //on ajoute notre conteneur custom au conteneur principal déjà présent dans l'html
      console.log(playlist);
    }
    warningTitle.innerText = ""; //si la playlist n'est pas vide, on efface le contenu du title de warning
  } else {
    warningTitle.innerText = "Aucun son n'est actuellement enregistré."; //si la playlist est vide, on défini du contenu dans le title de warning
    songContainer.appendChild(warningTitle); //et on ajoute le title de warning toujours dans ce cas précis
  }
}

playlistActivation();

inputButton.addEventListener("click", () => {
  let songName = songInput.value;
  if (!playlist.includes(songName)) {
    playlist.push(songName);
    playlistActivation();
  } else {
    alert("La playlist contient déjà ce son !");
    return;
  }
});

//////////////////////////////////Playlist//////////////////////////////////

//TODO: un bouton qui rappelle la fonction playlistActivation pour "rafraîchir" en cas d'ajout
//TODO: faire la logique du 'bouton' supprimer
/* Au clique sur une icone portant la classe deleteIcon
 *for of loop sur la playlist
 *récupérer chaque l'id correspondant à l'indexOf+"-song"
 *le supprimer du conteneur principal
 */
//TODO: faire la logique du 'bouton' modifier
//TODO: faire en sorte que le navigateur garde en mémoire le contenu de la liste (localStorage ?)

//TODO: modifier le comportement du texte de warning, peut-être le définir dans le dom et lui ajouter/retirer une class visibility hidden en fonction de s'il y a des elements ou non dans le tableau

button.addEventListener("click", () => {
  let managedMsg = userQuestion.value;

  switch (managedMsg) {
    case "oui":
      botResponse.innerHTML = "Cool !";
      break;

    default:
      botResponse.innerHTML = "Je n'ai pas compris, désolé..";
      break;
  }
});
///////////////////////////////////////////////////////////////////
//TODO: Exo 3
const repContainer = document.getElementById("rep-container");

let nombre;

function threedMultiple(nombre) {
  return nombre % 3 === 0;
}

function fiveMultiple(nombre) {
  return nombre % 5 === 0;
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i <= 199; i++) {
    let customSpan = document.createElement("span");
    customSpan.innerText = i;
    customSpan.className = "reps";
    repContainer.appendChild(customSpan);

    if (threedMultiple(i)) {
      customSpan.innerText = "Fizz";
    }

    if (fiveMultiple(i)) {
      customSpan.innerText = "Buzz";
    }

    if (threedMultiple(i) && fiveMultiple(i)) {
      customSpan.innerText = "FizzBuzz";
    }
  }
});
///////////////////////////////////////////////////////////////////
//TODO: Exo5

//? Fonction: diviser par deux
function divPar2(arg1) {
  return arg1 / 2;
}

//?  Fonction: retourne la somme de deux parametres
function additions2(arg1, arg2) {
  return arg1 + arg2;
}

//? Fonction: fonction qui s'appelle 'signe' qui retourne le type (positif, négatif ou nul) d'un parametre

function whatTypeIs(arg1) {
  switch (Math.sign(arg1)) {
    case -1:
      console.log("The result is negative");
      break;

    case 1:
      console.log("The result is positive");
      break;

    case 0:
      console.log("The result is null (equal to zero)");
      break;

    default:
      break;
  }
}
//*whatTypeIs(0);
//////////////////////////////////////////////////////////////////
//? Jeu de choix de chiffre aléatoire

const rgBtn = document.getElementById("rg-btn");
let trysArea = document.getElementById("rg-try");
let rgInput = document.getElementById("rg-input");
let rgResponse = document.getElementById("rg-response");

let trysLeft = 10;
const gameChoosedNumber = Math.floor(Math.random() * 20);

console.log("Le nombre choisi pour le jeu est : " + gameChoosedNumber);

trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

// rgBtn.addEventListener("click", () => {
//   if (trysLeft > 0) {
//     if (rgInput.value == gameChoosedNumber) {
//       rgResponse.innerHTML = "Félicitation ! Vous avez trouvé le nombre !";
//       trysLeft = 10;
//     } else {
//         if (rgInput.value < gameChoosedNumber) {
//             rgResponse.innerHTML = "Trop petit ! Essayez encore !";
//             trysLeft --;
//             trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

//         } else if(rgInput.value > gameChoosedNumber){
//             rgResponse.innerHTML = "Trop grand ! Essayez encore !";
//             trysLeft --;
//             trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";

//         }
//     }

//   } else {
//     alert("Dommage ! Plus d'essais restants !")
//   }
// });

rgBtn.addEventListener("click", () => {
  for (trysLeft; trysLeft > 0; trysLeft--) {
    if (rgInput.value == gameChoosedNumber) {
      rgResponse.innerHTML = "Félicitations ! Vous avez trouvé le nombre !";
      trysLeft = 10;
      trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      return;
    } else {
      if (rgInput.value < gameChoosedNumber) {
        rgResponse.innerHTML = "Trop petit ! Essayez encore !";
        trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      } else if (rgInput.value > gameChoosedNumber) {
        rgResponse.innerHTML = "Trop grand ! Essayez encore !";
        trysArea.innerHTML = "Essais restant : " + trysLeft + " essais";
      }
    }
  }
});
