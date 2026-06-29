// Récupérer le bouton
const backToTopBtn = document.getElementById("backToTop");

// Afficher/masquer le bouton selon le scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { // seuil en pixels
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Action du bouton : remonter en haut
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//mode sombre et clair
const btnSoleil = document.getElementById("soleil");

btnSoleil.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optionnel : changer l’icône
  const icon = btnSoleil.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

/*verification du formulaire et sauvegarde des donnees*/
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Réinitialiser le message
  formMessage.textContent = "";
  formMessage.className = "";

  // Vérification des champs
  if (!nom || !email || !message) {
    formMessage.textContent = "Tous les champs doivent être remplis !";
    formMessage.classList.add("error");
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "L'adresse email doit contenir '@'.";
    formMessage.classList.add("error");
    return;
  }

  // Stockage dans localStorage
  const contactData = {
    nom: nom,
    email: email,
    message: message
  };

  localStorage.setItem("contactFormData", JSON.stringify(contactData));

  formMessage.textContent = "Merci ${nom} Formulaire enregistré avec succès !";
  formMessage.classList.add("success");

  // Réinitialiser le formulaire
  document.getElementById("contactForm").reset();
});
// bouton menu 
const menuBtn = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
