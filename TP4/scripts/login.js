/*const fs = require('fs')
  
fs.readFile('../database.json', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})*/

document.querySelector('#valider').addEventListener('click', webrequest);
//sam.etegal@test.com
//http://gigondas:1111/sprietna/ihm/tp4/users
//http://gigondas:1111/sprietna/ihm/tp4/users/info/${id}
async function webrequest() {
    let enteredepass = document.getElementById('password').value
    let enteredemail = document.getElementById('identifiant').value
    if (enteredepass === '' || enteredemail === '') {
        document.querySelector('.error').classList.remove('hidden');
        document.querySelector('.error>p').innerHTML = "Merci d'entrer un mail et mot de passe";
         
    } else {
        fetch('http://gigondas:1111/sprietna/ihm/tp4/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail: enteredemail,
                password: enteredepass
            })
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw response;
                }
            })
            .then((userId) => {
                console.log(userId);
                                
                let cookies = (document.cookie).split(';')
                let trouve = false
                for(let i = 0; i < cookies.length; i++) {
                    if(cookies[i].split('=')[0] == "UserID"){
                        document.cookie = `UserID=${userId}; expires=30; path=/`;
                        trouve=true;
                    }
                }
                if(!trouve){
                    document.cookie = "UserID" + "=" + userId + ";" + 30 + "; path=/";
                }

                
               window.location.replace(`/`)
            })
            .catch((error) => {
                error.text().then((errorMessage) => {
                    document.querySelector('.error').classList.remove('hidden');
                    document.querySelector('.error>p').innerHTML = "Erreur: " + errorMessage;
                });
            });
    }
}
