// Episode 11 : Table de multiplication

const nb: number = Number(prompt("Entrez un nombre :"));

// La boucle for : for (initialisation; condition; incrément)
//   i = 1        : on commence à 1
//   i <= 10      : on s'arrête quand i dépasse 10
//   i++          : après chaque tour, on ajoute 1 à i
for (let i: number = 1; i <= 10; i++) {
  const resultat: number = nb * i;
  alert(`${nb} x ${i} = ${resultat}`);
}

for (let i = 1 ; i <= 10 ; i++) {
  //    ─────    ───────   ───
  //      ①        ②       ③
  // ① Initialisation : i démarre à 1
  // ② Condition      : tant que i est <= 10, on continue
  // ③ Incrément      : à la fin de chaque tour, i augmente de 1
}
