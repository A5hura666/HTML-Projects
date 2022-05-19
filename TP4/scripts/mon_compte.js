search()

async function search(){
    let userID;
    for (let i = 0; i < document.cookie.split(";").length; i++) {
        if(document.cookie.split(";")[i].split('=')[0] == "UserID"){
            userID = document.cookie.split(";")[i].split('=')[1]
        }
    }
    let req = await (await fetch(`https://gigondas.iut-valence.fr:1112/sprietna/ihm/tp4/users/info/${userID}`)).json();
    console.log(req)
    info_utilisateur(req)
}


function info_utilisateur(req){
    document.querySelector(".mail").value = req.mail
    document.querySelector(".adresse").value = req.address.number + '  ' + req.address.street + '  ' + req.address.postcode+ '  ' + req.address.city
    document.querySelector(".password").value = req.mail
    document.querySelector(".nom").value = req.surname
    document.querySelector(".prenom").value = req.firstname
}

//console.cookie.split(";")