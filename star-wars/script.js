async function fetchHeroes() {
  try {
    const response = await fetch("heroes.json");
    if (!response.ok)
      throw new Error("Erreur lors du chargement de heroes.json");

    const data = await response.json();
    const heroes = data.heroes;

    setupChallengeButtons(heroes);
  } catch (error) {
    document.getElementById(
      "results"
    ).innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
  }
}

function setupChallengeButtons(heroes) {
  const container = document.getElementById("results");

  const buttons = [
    { label: "Challenge 1", fn: Utils.challenge1 },
    { label: "Challenge 2", fn: Utils.challenge2 },
    { label: "Challenge 3", fn: Utils.challenge3 },
    { label: "Challenge 4", fn: Utils.challenge4 },
    { label: "Challenge 5", fn: Utils.challenge5 },
    { label: "Challenge 6", fn: Utils.challenge6 },
    { label: "Challenge 7", fn: Utils.challenge7 },
    { label: "Challenge 8", fn: Utils.challenge8 },
    { label: "Challenge 9", fn: Utils.challenge9 },
    { label: "Challenge 10", fn: Utils.challenge10 },
  ];

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group mb-4 flex-wrap";

  buttons.forEach((btn, index) => {
    const b = document.createElement("button");
    b.className = "btn btn-primary m-1";
    b.textContent = btn.label;
    b.addEventListener("click", () => {
      const result = btn.fn(heroes);
      console.log(`Résultat Challenge ${index + 1} :`, result);
      renderResult(result, index + 1);
    });

    btnGroup.appendChild(b);
  });

  container.appendChild(btnGroup);

  // Création du tableau (vide au départ)
  const table = document.createElement("table");
  table.className = "table table-bordered table-striped";
  table.id = "result-table";

  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  [
    "Nom",
    "Côté",
    "Planète",
    "Espèce",
    "Couleur de sabre",
    "Maîtrise de la force",
    "index",
  ].forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  tbody.id = "table-body";

  container.appendChild(table);
}

function renderResult(data, challengeNum) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = ""; // reset

  const row = tbody.insertRow();

  if (data === -1 || data === undefined) {
    const cell = row.insertCell();
    cell.colSpan = 7;
    cell.textContent = `❌ Aucun résultat pour le challenge ${challengeNum}`;
    cell.className = "text-center text-danger fw-bold";
  } else if (typeof data === "number") {
    const hero = document.createElement("tr");
    const indexCell = row.insertCell();
    indexCell.colSpan = 7;
    indexCell.textContent = `Index trouvé : ${data}`;
    indexCell.className = "text-center fw-bold";
  } else {
    [
      "name",
      "side",
      "planet",
      "species",
      "lightsaberColor",
      "masteryOfForce",
    ].forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = data[key] ?? "—";
    });

    const indexCell = row.insertCell();
    indexCell.textContent = data.index !== undefined ? data.index : "—";
  }
}

document.addEventListener("DOMContentLoaded", fetchHeroes);
