let url='http://gigondas:1111/sprietna/ihm/tp3/data'

let valeurs = document.querySelector


for (let i = 0; i < data.length; i++) {
    document.querySelector(".products").innerHTML += `<table cellspacing="0" cellpading="0" class="cadre">
    <tbody>
        <tr>
            <td colspan="2">
                <img src="medias/images/${data[i].picture}" alt="cable ethernet">
            </td>
        </tr>
        <tr class="ref">
            <td class="caracteristique">
                <p class="produit">${data[i].name}</p>
                <p class="details">${data[i].description}</p>
                <p class="prix">${data[i].price}</p>
            </td>
            <td>
                <button class="btn">Ajouter au panier</button>
            </td>
        </tr>
    </tbody>
</table>`
}


webrequest()
async function webrequest(){
    let promise = await fetch(url)
    let test = await promise.json()
    console.log(test[2].name)
}