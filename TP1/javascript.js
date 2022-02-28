let boutton = document.querySelectorAll(".btn");
let nbarticle=0

function incrementPanier() {
    nbarticle++;
    document.querySelector(".nb_article").innerHTML = nbarticle
}

console.log(boutton)

for(let i=0; i< boutton.length; i++){
    boutton[i].addEventListener('click',incrementPanier)
}