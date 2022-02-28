var boutton = document.querySelectorAll(".btn");
var nbarticle=0

function incrementPanier() {
    nbarticle++;
    document.querySelector(".nb_article").innerHTML = nbarticle
}

console.log(boutton)

for(var i=0; i< boutton.length; i++){
    boutton[i].addEventListener('click',incrementPanier)
}