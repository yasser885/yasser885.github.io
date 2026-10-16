// 1. Menu burger (mobile)
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  const ouvert = menu.classList.toggle("ouvert");
  burger.setAttribute("aria-expanded", ouvert);
});

// Fermer le menu quand on clique sur un lien
menu.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => {
    menu.classList.remove("ouvert");
    burger.setAttribute("aria-expanded", false);
  });
});

// 2. Petite ombre sous l'en-tête quand on descend
const entete = document.querySelector(".entete");
window.addEventListener("scroll", () => {
  entete.classList.toggle("ombre", window.scrollY > 10);
});

// 3. Formulaire de contact : vérification puis ouverture de la messagerie
const formulaire = document.getElementById("formulaire");
const erreur = document.getElementById("erreur");

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  const nom = formulaire.nom.value.trim();
  const entreprise = formulaire.entreprise.value.trim();
  const email = formulaire.email.value.trim();
  const message = formulaire.message.value.trim();
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  erreur.classList.remove("ok");

  if (nom === "" || email === "" || message === "") {
    erreur.textContent = "Remplissez votre nom, votre e-mail et votre message.";
    erreur.hidden = false;
    return;
  }
  if (!emailValide) {
    erreur.textContent = "L'adresse e-mail n'est pas valide. Exemple : nom@entreprise.fr";
    erreur.hidden = false;
    return;
  }

  const sujet = "Contact depuis le portfolio" + (entreprise ? " : " + entreprise : "");
  const corps = message + "\n\n" + nom + (entreprise ? ", " + entreprise : "") + "\n" + email;

  window.location.href =
    "mailto:yassertabya22@gmail.com?subject=" + encodeURIComponent(sujet) +
    "&body=" + encodeURIComponent(corps);

  erreur.textContent = "Votre messagerie s'ouvre avec le message prêt. Il ne reste qu'à l'envoyer.";
  erreur.classList.add("ok");
  erreur.hidden = false;
  formulaire.reset();
});

// 4. Année automatique dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();
