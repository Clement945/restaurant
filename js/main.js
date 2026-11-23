const formulaire = document.querySelector("#formulaire-reservation");
const champs = formulaire.querySelectorAll("[required]");

champs.forEach((champ) => {
    champ.addEventListener("invalid", () => {
        if (champ.validity.valueMissing) {
            champ.setCustomValidity("Please fill out this field");
        }
    });

    champ.addEventListener("input", () => {
        champ.setCustomValidity("");
    });
});

formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Votre message a bien été envoyé");
});

const boutonMenu = document.querySelector(".menu-mobile");
const navigation = document.querySelector("#navigation-principale");

function afficherMenu(ouvert) {
    boutonMenu.setAttribute("aria-expanded", String(ouvert));
    boutonMenu.textContent = ouvert ? "×" : "☰";
}

boutonMenu.addEventListener("click", () => {
    const ouvert = boutonMenu.getAttribute("aria-expanded") === "true";
    afficherMenu(!ouvert);
});

navigation.querySelectorAll("a").forEach((lien) => {
    lien.addEventListener("click", () => afficherMenu(false));
});