/*const fs = require('fs')
  
fs.readFile('../database.json', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})*/

document.querySelector('#valider').addEventListener('click', webrequest);

async function webrequest(){
    let enteredepass = document.getElementById('password').value
    let enteredemail = document.getElementById('identifiant').value
    if(enteredepass === '' || enteredemail === ''){
        console.log('Entre qqch fréro');
    }else{
        let promise = await fetch('../ressources/database.json')
        let test = await promise.json()
        test.forEach(element => {
            if(element.password === enteredepass && element.email === enteredemail){
                console.log("Bienvenue salope");
                //break;
            }else{
                console.log('T\'a pas de droits esclave')
            }
        });
    }
}
