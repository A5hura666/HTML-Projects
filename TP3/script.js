let url='http://gigondas:1111/sprietna/ihm/tp3/data'

let valeurs = document.querySelector


function create_article(x){
    for (let i = 0; i < x.length; i++) {
        document.querySelector(".products").innerHTML += `<table cellspacing="0" cellpading="0" class="cadre">
        <tbody>
            <tr>
                <td colspan="2">
                    <img src="medias/images/${x[i].picture}" alt="cable ethernet">
                </td>
            </tr>
            <tr class="ref">
                <td class="caracteristique">
                    <p class="produit">${x[i].name}</p>
                    <p class="details">${x[i].description}</p>
                    <p class="prix">${x[i].price}</p>
                </td>
                <td>
                    <button class="btn">Ajouter au panier</button>
                </td>
            </tr>
        </tbody>
    </table>`
    }
}

create_article(data)

webrequest()
async function webrequest(){
    let promise = await fetch(url)
    let test = await promise.json()
    console.log(test[1].name)
    create_article(test)

    //modal
    let modalclass = document.querySelector(".modal");
    modalclass.classList.add("modalnul");
}