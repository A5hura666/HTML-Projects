console.log("Premier Log: " + 50);

let valeur = document.querySelectorAll(".statInput");
let compteur = 0;

function paragraphe() {
    compteur++;
    console.log("compteur=" + compteur);
    document.querySelector("output").innerHTML = compteur;
    let paraph = document.createElement("p");
    paraph.textContent = "Le bouton est cliqué " + compteur;
    document.querySelector("#step1").appendChild(paraph);
}
/* Etape 1 */
document.querySelector("#step1 button").addEventListener("click", paragraphe);
/* Etape 2 */
document.querySelector("#step2 button").addEventListener("click", somme);
document.querySelector("#step2 button").addEventListener("click", produit);
document.querySelector("#step2 button").addEventListener("click", moyenne);
document.querySelector("#step2 button").addEventListener("click", max);
document.querySelector("#step2 button").addEventListener("click", min);
/* Etape 3 */
document.querySelector("#boldOn").addEventListener("click", boldOn);
document.querySelector("#boldOff").addEventListener("click", boldOff);

document.querySelector("#italicOn").addEventListener("click", italicTextOn);
document.querySelector("#italicOff").addEventListener("click", italicTextOff);

document.querySelector("#underlineOn").addEventListener("click", underlineTextOn);
document.querySelector("#underlineOff").addEventListener("click", underlineTextOff);

document.querySelector("#underlineOn").addEventListener("click", underlineTextOn);
document.querySelector("#underlineOff").addEventListener("click", underlineTextOff);

document.querySelector("#redTextOn").addEventListener("click", redTextOn);
document.querySelector("#redTextOff").addEventListener("click", redTextOff);

/* Bonus */
let bonuscheck = document.querySelector("#bonusStep output")

let addition = 0;
function somme() {
    addition = 0;
    for (let i = 0; i < valeur.length; i++) {
        addition += parseInt(valeur[i].textContent);
        document.querySelector("#statSum").innerHTML = addition;
    }
}

function produit() {
    let prod = 1;
    for (let i = 0; i < valeur.length; i++) {
        prod = prod * parseInt(valeur[i].textContent);
        document.querySelector("#statProduct").innerHTML = prod;
    }
}

function moyenne() {
    let moy = 0;
    somme();
    moy = addition / valeur.length;
    document.querySelector("#statMean").innerHTML = moy;
}

/*function moyenne(){
    let moy=0
    for(let i=0; i<valeur.length; i++){
        moy+=(parseInt(valeur[i].textContent))/valeur.length
        document.querySelector('#statMean').innerHTML=moy
    }
}*/

let chiffres = [];
for (let i = 0; i < valeur.length; i++) {
    chiffres.push(parseInt(valeur[i].textContent));
}

function max() {
    document.querySelector("#statMax").innerHTML = Math.max.apply(null, chiffres);
}
function min() {
    document.querySelector("#statMin").innerHTML = Math.min.apply(null, chiffres);
}




let texte = document.querySelector("#step3 p");

function boldOn() {
    texte.classList.add("boldText");
}

function boldOff() {
    texte.classList.remove("boldText");
}

function italicTextOn() {
    texte.classList.add("italicText");
}

function italicTextOff() {
    texte.classList.remove("italicText");
}

function underlineTextOn() {
    texte.classList.add("underlineText");
}

function underlineTextOff() {
    texte.classList.remove("underlineText");
}

function redTextOn() {
    texte.classList.add("redText");
}

function redTextOff() {
    texte.classList.remove("redText");
}



/*Bonus*/

document.querySelector("#bonusStep button").addEventListener("click", jeu);
let compteur1 = 0;
let nb_alea = parseInt(Math.random() * 100)

function jeu() {
    compteur1++;

    let input = document.getElementById("userAnswer").value;

    if (input < nb_alea) {
        bonuscheck.innerHTML = "le nombre " + input + " est trop petit";
    }

    if (input == nb_alea) {
        bonuscheck.innerHTML = "Braveau! Vous avez trouvé le bon nombre (" + input + ") en " + compteur1 + " essais";
    }

    if (input > nb_alea) {
        bonuscheck.innerHTML = "le nombre " + input + " est trop grand";
    }
    console.log(nb_alea)
}