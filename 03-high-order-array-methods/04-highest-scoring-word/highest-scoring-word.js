function highestScoringWord(str) {
  const splittedString = str.split(" ");
  console.log(splittedString);
  const scores = splittedString.map((string) => {
    let score = 0;
    for (const letter of string) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });
  const highestScore = Math.max(...scores);
  const highestScoreIndex = scores.indexOf(highestScore);
  return splittedString[highestScoreIndex];
}

module.exports = highestScoringWord;
