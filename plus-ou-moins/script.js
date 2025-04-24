function RandomNumber() {
  return Math.floor(Math.random() * 100); 
}

const secret = RandomNumber();
console.log(secret); // Pour test

let attemptCount = 0;
let found = false;

const input = document.getElementById("numInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  if (found) return; // Empêche de continuer une fois trouvé

  const userNumber = parseInt(input.value, 10);
  attemptCount++;

  if (isNaN(userNumber)) {
    message.textContent = "⚠️ Ce n'est pas un nombre valide !";
  } else if (userNumber === secret) {
    message.textContent = `🎉 Bravo ! Tu as trouvé en ${attemptCount} tentative(s).`;
    found = true;
  } else if (userNumber < secret) {
    message.textContent = "🔼 C'est plus !";
  } else {
    message.textContent = "🔽 C'est moins !";
  }

  input.value = ""; // Reset input
  input.focus(); // Pour enchaîner rapidement
});
