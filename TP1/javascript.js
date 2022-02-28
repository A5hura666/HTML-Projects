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


var nav= document.querySelectorAll(".navet");

function chgNav(x){
    document.querySelector(".active").classList.remove("active")
}

for(var i=0; i< nav.length; i++){
    boutton[i].addEventListener('click',chgNav(boutton[i]))
}