class Utils {
  static challenge1(heroes) {
    return heroes.find(
      (h) => h.side === "Lumineux" && h.lightsaberColor === "Bleu"
    );
  }

  static challenge2(heroes) {
    return [...heroes].reverse().find((h) => h.name.includes("Kenobi"));
  }

  static challenge3(heroes) {
    return heroes.findIndex(
      (h) => h.masteryOfForce === "Légendaire" && h.planet === "Dagobah"
    );
  }

  static challenge4(heroes) {
    return (
      heroes
        .map((h, i) => ({ ...h, index: i }))
        .reverse()
        .find((h) => h.planet === "Tatooine" && h.lightsaberColor === "Rouge")
        ?.index ?? -1
    );
  }

  static challenge5(heroes) {
    return heroes.findIndex((h) => h.name === "Yoda");
  }

  static challenge6(heroes) {
    return (
      heroes
        .map((h, i) => ({ ...h, index: i }))
        .reverse()
        .find((h) => h.lightsaberColor === "Vert")?.index ?? -1
    );
  }

  static challenge7(heroes) {
    return heroes.find((h) => h.side !== "Lumineux" && h.species === "Wookiee");
  }

  static challenge8(heroes) {
    return [...heroes]
      .reverse()
      .find((h) => h.name.toLowerCase().includes("solo"));
  }

  static challenge9(heroes) {
    return heroes.find((h) => h.masteryOfForce === "Aucun");
  }

  static challenge10(heroes) {
    return heroes.find((h) => h.name.length > 10);
  }
}
