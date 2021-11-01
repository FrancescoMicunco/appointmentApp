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
let registrationForm = document.getElementById("registrationForm")
let btnRegistrationForm = document.getElementById("btnRegistration")
let nameNewMember = document.getElementById("nameNewMember")
let cityNewMember = document.getElementById("cityNewMember")
let addressNewMember = document.getElementById("via")
let capNewMember = document.getElementById("cap")
let telefonoNewMember = document.getElementById("telefono")
let email = document.getElementById("email")
let emailValue = email.value;
let idMember = farmacie.length;
let unregistered = document.getElementById("unregistered")

function expression() {
    registrationForm.classList.toggle("d-block")
}



// CONSTRUCTOR

function Member(name, city, via, cap, telefono, email) {
    this.name = name;
    this.city = city;
    this.via = via;
    this.cap = cap;
    this.telefono = telefono;
    this.email = email;
};

btnRegistrationForm.addEventListener("click", function() {
    console.log(emailValue)
    const checkEmail = farmacie.find(e => e.email == emailValue)
    console.log(checkEmail)
    if (!checkEmail) {
        farmacie[farmacie.length] = new Member(`${nameNewMember.value}`, `${cityNewMember.value}`, `${addressNewMember.value}`,
            `${capNewMember.value}`, `${telefonoNewMember.value}`, `${email.value}`);
        console.log(farmacie)
    } else { alert("Esiste già un utente con questi dati") }

    console.log(farmacie)

})