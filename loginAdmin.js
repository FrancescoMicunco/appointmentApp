const farmacie = []
let btnRegistrationForm = document.getElementById("btnRegistration")
let nameNewMember = document.getElementById("nameNewMember")
let idMember = farmacie.length;

// CONSTRUCTOR

function Member(name, city) {
    this.name = name;
    this.city = city;
};

btnRegistrationForm.addEventListener("click", function() {
    farmacie[farmacie.length] = new Member(`${nameNewMember.value}`, "Como");
})
console.log(farmacie)