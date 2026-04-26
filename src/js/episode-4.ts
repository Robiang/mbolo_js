// Episode 4 : Permutation de deux variables

let a: number = 10;
let b: number = 25;

console.log(`Avant : a = ${a}, b = ${b}`);

const temp: number = a;
a = b;
b = temp;

console.log(`Après : a = ${a}, b = ${b}`);