const farmacie = []
let btnRegistrationForm = document.getElementById("btnRegistration")
let nameNewMember = document.getElementById("nameNewMember")
let cityNewMember = document.getElementById("cityNewMember")
let addressNewMember = document.getElementById("via")
let capNewMember = document.getElementById("cap")
let telefonoNewMember = document.getElementById("telefono")
let emailNewMember = document.getElementById("email")
let idMember = farmacie.length;

// CONSTRUCTOR

function Member(name, city) {
    this.name = name;
    this.city = city;
    this.via = via;
    this.cap = cap;
    this.telefono = telefono;
    this.email = email;
};

btnRegistrationForm.addEventListener("click", function() {

    farmacie[farmacie.length] = new Member(`${nameNewMember.value}`, `${cityNewMember.value}`, `${addressNewMember.value}`,
        `${capNewMember.value}`, `${telefonoNewMember.value}`, `${idMember.value}`);
    console.log(farmacie)
})