// Episode 13 : Trouver la bonne réponse

const nb1: number = 5;
const nb2: number = 1;
const bonneReponse: number = nb1 + nb2; // 6

let reponse: number;

do {
  const saisie = prompt(`Combien font ${nb1} + ${nb2} ?`);
  reponse = Number(saisie);

  if (reponse !== bonneReponse) {
    alert("Mauvaise réponse, réessayez !");
  }
} while (reponse !== bonneReponse);

alert("Bravo ! Bonne réponse !");