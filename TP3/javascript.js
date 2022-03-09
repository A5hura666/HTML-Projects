let boutton = document.querySelectorAll(".btn");
let nbarticle=0

function incrementPanier() {
    nbarticle++;
    console.log("cliqué")
    document.querySelector(".nb_article").innerHTML = nbarticle
    easter_egg()
}

for(let i=0; i< boutton.length; i++){
    boutton[i].addEventListener('click',incrementPanier)
}


let video = document.querySelector("body iframe");

function easter_egg(){
    if (nbarticle==10){
        document.querySelector("body").innerHTML += `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&showinfo=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
}