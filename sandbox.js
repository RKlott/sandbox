let firstNumber = document.getElementById("premier-nombre");
let secondNumber = document.getElementById("deuxieme-nombre");
const myButton = document.getElementById("mon-bouton");
let result = document.getElementById("resultat");

myButton.addEventListener("click", () => {
    let fN = firstNumber.value;
    let sN = secondNumber.value;

    if(fN && sN !== null){
    if(fN % 1 === 0){
        fN = parseInt(fN);
    } else {
        fN = parseFloat(fN);
    }

    if(sN % 1 === 0){
        sN = parseInt(sN);
    } else {
        sN = parseFloat(sN);
    }

    let finalResult = fN + sN;

    result.innerHTML = "Le résultat est : " + finalResult;
    console.log(typeof finalResult);
    
} else {
    result.innerHTML = "Impossible d'effectuer le calcul, les valeurs sont null."
}


});