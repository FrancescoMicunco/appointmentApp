const farmacie = []
let btnRegistrationForm = document.getElementById("btnRegistration")
let nameNewMember = document.getElementById("nameNewMember")
let idMember = farmacie.length;

// CONSTRUCTOR

function Member(Nome, Citta) {
    this.name = Nome;
    this.city = Citta;
};

btnRegistrationForm.addEventListener("click", function(e) {
    farmacie[farmacie.length] = new Member(`${nameNewMember.value}`, "Como");

})

console.log(farmacie)