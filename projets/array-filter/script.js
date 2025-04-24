let heroes = [];

async function loadHeroes() {
  const response = await fetch("./heroes.json");
  if (!response.ok) throw new Error("Erreur de chargement");
  heroes = (await response.json()).heroes;
  console.log(heroes);
}

async function main() {
  await loadHeroes();
  isActive();
  isMarvel();
  isAlien();
  isStrong();
  isActiveAndHuman();
  isActiveDcStrong();
  isAlienInactive();
  manHeroes();
  oddStrength();
  moreThanTen();
}
main();

// 1
function isActive() {
  console.log(
    "Héros Actifs:",
    heroes.filter((hero) => hero.isActive)
  );
}

//2

function isMarvel() {
  console.log(
    "Héros Marvel:",
    heroes.filter((hero) => hero.universe === "Marvel")
  );
}

//3

let isAlien = () => {
  console.log(
    "Héros Alien:",
    heroes.filter((hero) => hero.isAlien)
  );
};

//4

let isStrong = () => {
  console.log(
    "Héros Forts:",
    heroes.filter((hero) => hero.power > 90)
  );
};

//5

let isActiveAndHuman = () => {
  console.log(
    "Héros Humains:",
    heroes.filter((hero) => hero.isActive && !hero.isAlien)
  );
};

//6

let isActiveDcStrong = () => {
  console.log(
    "Héros DC actifs et Puissants:",
    heroes.filter(
      (hero) => hero.universe === "DC" && hero.isActive && hero.power > 85
    )
  );
};

//7

let isAlienInactive = () => {
  console.log(
    "Héros non Aliens inactifs",
    heroes.filter((hero) => !hero.isActive && !hero.isAlien)
  );
};

//8

let manHeroes = () => {
  console.log(
    "Héros dont le nom contient man",
    heroes.filter((hero) => hero.name.toLowerCase().includes("man"))
  );
};

//9

let oddStrength = () => {
  console.log(
    "Héros dont la puissance est impaire",
    heroes.filter((hero) => hero.strength % 2 !== 0)
  );
};

//10

let moreThanTen = () => {
  console.log(
    "Héros dont le nom fait plus de 10 caractères",
    heroes.filter((hero) => hero.name.length > 10)
  );
};
