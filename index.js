const farmacie = [{
        id: "001",
        "nome": "Farm1",
        "indirizzo": {
            "citta": "Como",
            "via": "Da Bari",
            "civico": 21,
            cap: 21100
        },
        "telefono": "031223322",
        "email": "info@farm1.com"
    },

    {
        id: "002",
        "nome": "Farm2",
        "indirizzo": {
            "citta": "Como",
            "via": "Porchetta",
            "civico": "69",
            "cap": "70100"
        },
        "telefono": "031909090",
        "email": "info@farm2.com"
    },
    {
        id: "001",
        "nome": "Farm3",
        "indirizzo": {
            "citta": "Como",
            "via": "Rufus",
            "civico": "11",
            cap: "20022"
        },
        "telefono": "031808080",
        "email": "info@farm3.com"
    }

]
let capBtn = document.querySelector("#btnSearchGeo")
let capIndex = document.getElementById("capInput")
let showArea = document.querySelector("#row")
console.log(showArea)



capBtn.onclick = function() {
    let cap = capIndex.value;
    farmacie.filter(e => {
        let selectedCap = e.indirizzo.cap;
        if (cap == selectedCap) {
            showArea.innerHTML = `
            <div>
            <h3>Farmacia ${e.nome}</h3>
            <p>${e.indirizzo.via}</p>
            <p>${e.indirizzo.civico}</p>
            <p>${e.indirizzo.citta}</p>
            <p>${e.telefono}</p>
            <p>${e.email}</p>
            </div>
             `

        }
    })
}