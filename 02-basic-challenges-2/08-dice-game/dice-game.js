function diceGameSimulation(numSimulations) {
  const results = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    const sum = dice1 + dice2;
    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 11) {
      result = "loose";
    } else {
      result = "roll again";
    }
    results.push({ dice1, dice1, sum, result });
  }
  return results;
}

module.exports = diceGameSimulation;
