const choixPossibles = ["pierre", "feuille", "ciseaux"];
let scoreJoueur = 0;
let scoreOrdi = 0;

const imgChoices = document.querySelectorAll(".img-choices");
const botChoiceDiv = document.getElementById("botChoice");
const playerChoiceDiv = document.getElementById("playerChoice");
const resultDiv = document.getElementById("result");
const scoreJoueurSpan = document.getElementById("scoreJoueur");
const scoreOrdiSpan = document.getElementById("scoreOrdi");
const boutonRejouer = document.getElementById("rejouer");

imgChoices.forEach((img, index) => {
  img.addEventListener("click", () => {
    const choixJoueur = choixPossibles[index];
    jouerManche(choixJoueur);
  });
});

function choixAleatoire() {
  const index = Math.floor(Math.random() * 3);
  return choixPossibles[index];
}

function jouerManche(choixJoueur) {
  const choixOrdi = choixAleatoire();
  //   const choixJoueur = choixJoueur
  botChoiceDiv.innerHTML = `<p>L'ordinateur</p>
  <div id="card-img">
  <img src="${getImagePath(
    choixOrdi
  )}" alt="${choixOrdi}" class="img-choices">
  </div>`;

  playerChoiceDiv.innerHTML = `<p>Le joueur</p>
    <div id="card-img">

  <img src="${getImagePath(
    choixJoueur
  )}" alt="${choixJoueur}" class="img-choices">
  </div>`;
  let resultat = "";

  if (choixJoueur === choixOrdi) {
    resultat = "Égalité !";
  } else if (
    (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
    (choixJoueur === "feuille" && choixOrdi === "pierre") ||
    (choixJoueur === "ciseaux" && choixOrdi === "feuille")
  ) {
    resultat = "Vous gagnez !";
    scoreJoueur++;
  } else {
    resultat = "L'ordinateur gagne !";
    scoreOrdi++;
  }

  resultDiv.textContent = resultat;
  scoreJoueurSpan.textContent = scoreJoueur;
  scoreOrdiSpan.textContent = scoreOrdi;

  // Affiche le bouton rejouer (optionnel)
  boutonRejouer.style.display = "inline-block";
}

function getImagePath(choix) {
  switch (choix) {
    case "pierre":
      return "./assets/pierre.jpg";
    case "feuille":
      return "./assets/feuille.png";
    case "ciseaux":
      return "./assets/ciseaux.png";
    default:
      return "";
  }
}

boutonRejouer.addEventListener("click", () => {
  botChoiceDiv.textContent = "";
  playerChoiceDiv.textContent = "";
  resultDiv.textContent = "";
  boutonRejouer.style.display = "none";
  scoreJoueur = 0;
  scoreOrdi = 0;
  scoreJoueurSpan.textContent = `${scoreJoueur}`;
  scoreOrdiSpan.textContent = `${scoreOrdi}`;
});
