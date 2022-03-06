console.log("Premier Log: " + 50)

let valeur = document.querySelectorAll(".statInput")
let compteur=0

function paragraphe(){
    console.log("Le bouton est cliqué")
    compteur++;
    console.log("compteur=" + compteur)
    document.querySelector('output').innerHTML=compteur
    let paraph=document.createElement('p')
    paraph.textContent="Le bouton est cliqué " + compteur 
    document.querySelector('#step1').appendChild(paraph)
} 
document.querySelector("#step1 button").addEventListener('click',paragraphe)


document.querySelector("#step2 button").addEventListener('click', somme)
document.querySelector("#step2 button").addEventListener('click', produit)
document.querySelector("#step2 button").addEventListener('click', moyenne)
document.querySelector("#step2 button").addEventListener('click', max)
document.querySelector("#step2 button").addEventListener('click', min)

let addition=0
function somme(){
    addition=0
    for(let i=0; i<valeur.length; i++){
        addition+=parseInt(valeur[i].textContent)
        document.querySelector('#statSum').innerHTML=addition
    }
}

function produit(){
    let prod=1
    for(let i=0; i<valeur.length; i++){
        prod=prod*parseInt(valeur[i].textContent)
        document.querySelector('#statProduct').innerHTML=prod
    }
}


function moyenne(){
    let moy=0
    somme();
    moy=addition/valeur.length
    document.querySelector('#statMean').innerHTML=moy
}

/*function moyenne(){
    let moy=0
    for(let i=0; i<valeur.length; i++){
        moy+=(parseInt(valeur[i].textContent))/valeur.length
        document.querySelector('#statMean').innerHTML=moy
    }
}*/

function max(){
    let chiffres =[]
    for (let i=0; i<valeur.length; i++){
        chiffres.push(parseInt(valeur[i].textContent))
    }
    document.querySelector('#statMax').innerHTML=Math.max.apply(null, chiffres)
}
function min(){
    let chiffres =[]
    for (let i=0; i<valeur.length; i++){
        chiffres.push(parseInt(valeur[i].textContent))
    }
    document.querySelector('#statMin').innerHTML=Math.min.apply(null, chiffres)
}