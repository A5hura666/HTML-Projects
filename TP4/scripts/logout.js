document.querySelector("#logout").addEventListener("click", deconnexion);

const p = document.getElementById('utilisateur');

let userId

function deconnexion(){
    fetch('http://gigondas:1111/sprietna/ihm/tp4/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1//il faudra mettre l'id du mec qui se coco coucou
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
            userId=userId

        })
        .catch((error) => {
            error.text().then((errorMessage) => {
                console.log('Request Failed : ' + errorMessage);
            });
        });
}

function logout() {
    let button = document.getElementById('utilisateur');
    let paraph = document.createElement("p");   
}

