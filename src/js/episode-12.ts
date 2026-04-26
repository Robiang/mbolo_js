// Episode 12 : Somme des 10 premiers entiers (1 à 10)

let somme: number = 0;

for (let i: number = 1; i <= 10; i++) {
  somme += i; // équivalent à somme = somme + i
}

console.log(`La somme des 10 premiers entiers est : ${somme}`);