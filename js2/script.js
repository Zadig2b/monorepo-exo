function RandomNumber() {
    return Math.floor(Math.random() * 100); 
}

const secret = RandomNumber();
console.log(secret); 

let attemptCount = 0;
let found = false;

while (!found) {
    const attempt = prompt("Devine un nombre entre 0 et 100 :");
    const userNumber = parseInt(attempt, 10);
    attemptCount++;

    if (isNaN(userNumber)) {
        alert("Ce n'est pas un nombre valide !");
    } else if (userNumber === secret) {
        alert(`Bravo ! Tu as trouvé en ${attemptCount} tentative(s).`);
        found = true;
    } else if (userNumber < secret) {
        alert("C'est plus !");
    } else {
        alert("C'est moins !");
    }
}

