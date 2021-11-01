const farmacie = [{
        id: 001,
        "nome": "Farm1",
        "indirizzo": {
            "citta": "Como",
            "via": "Da Bari",
            "civico": 21,
            cap: 21100
        },
        "telefono": 031223322,
        "email": "info@farm1.com"
    },

    {
        id: 002,
        "nome": "Farm2",
        "indirizzo": {
            "citta": "Como",
            "via": "Porchetta",
            "civico": 69,
            "cap": 70100
        },
        "telefono": "031909090",
        "email": "info@farm2.com"
    },
    {
        id: 003,
        "nome": "Farm3",
        "indirizzo": {
            "citta": "Como",
            "via": "Rufus",
            "civico": 11,
            cap: 20022
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
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
           <th scope="col">Indirizzo</th>
           <th scope="col">Cap</th>
           <th scope="col">Città</th>
           <th scope="col">Telefono</th>
           <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${e.nome}</td>
      <td>via ${e.indirizzo.via} ${e.indirizzo.civico} </td>
      <td>${e.indirizzo.citta}</td>
      <td>${e.indirizzo.cap}</td>
      <td>${e.telefono}</td>
      <td>${e.email}</td>
      
    </tr>
    
  </tbody>
</table>
                     `
        } else {
            ("non esistono farmacie disponibili in questa zona")
        }
    })
}