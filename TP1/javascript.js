let boutton = document.querySelectorAll(".btn");
let nbarticle=0

function easter_egg(){
    if (nbarticle==10){
        video.classList.add("easter");
    }
}

function incrementPanier() {
    nbarticle++;
    document.querySelector(".nb_article").innerHTML = nbarticle
    easter_egg()
}

console.log(boutton)

for(let i=0; i< boutton.length; i++){
    boutton[i].addEventListener('click',incrementPanier)
}

let video = document.querySelector("body iframe");