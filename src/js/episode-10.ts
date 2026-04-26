// Episode 10 : Remise de 10% si facture > 40000 F

const montant: number = Number(prompt("Montant de la facture (en F) :"));

let total: number;

if (montant > 40000) {
  const remise: number = montant * 0.10;
  total = montant - remise;

  alert(`Remise de 10% appliquée ! Total à payer : ${total} F`);
} else {
  total = montant;

  alert(`Aucune remise. Total à payer : ${total} F`);
}