// Episode 9 : Mention selon la moyenne (0 à 20)

const moyenne: number = Number(prompt("Entrez votre moyenne (0-20) :"));

let mention: string;

if (moyenne >= 16) {
  mention = "Excellent";
} else if (moyenne >= 14) {
  mention = "Très bien";
} else if (moyenne >= 12) {
  mention = "Bien";
} else if (moyenne >= 10) {
  mention = "Assez-bien";
} else {
  mention = "Passable";
}

alert(`Votre mention : ${mention}`);