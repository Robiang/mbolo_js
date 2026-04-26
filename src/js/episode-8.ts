// Episode 8 : Civilité selon le sexe

const nom: string = prompt("Quel est votre nom ?")!;
const sexe: string = prompt("Quel est votre sexe ? (M/F)")!;

if (sexe === 'M' || sexe === 'm') {
  alert(`Bonjour monsieur ${nom}`);
} else {
  alert(`Bonjour madame ${nom}`);
}

