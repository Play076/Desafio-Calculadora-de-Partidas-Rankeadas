function rankedCalculator(qntVictory, qntDefeat) {
  let rankResult = qntVictory - qntDefeat;
  let rank = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Diamante",
    "Lendário",
    "Imortal",
  ];
  let rankLevel;

  if (rankResult < 10) {
    rankLevel = rank[0];
  } else if (rankResult <= 20) {
    rankLevel = rank[1];
  } else if (rankResult <= 50) {
    rankLevel = rank[2];
  } else if (rankResult <= 80) {
    rankLevel = rank[3];
  } else if (rankResult <= 90) {
    rankLevel = rank[4];
  } else if (rankResult <= 100) {
    rankLevel = rank[5];
  } else {
    rankLevel = rank[6];
  }

  console.log(
    "O Herói tem de saldo de " +
      rankResult +
      " está no nível de " +
      rankLevel +
      "."
  );
}
