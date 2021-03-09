const generatePhrase = (SpeechBubble, phrasesDatabase, numberOfPhrases) => {

  const arrayOfSpeechBubbles = []

  for (let index = 0; index < numberOfPhrases; index++) {
    const randomNumber = Math.floor((Math.random() * (phrasesDatabase.length - 1)));
    const randomPhrase = phrasesDatabase[randomNumber];
    const randomSpeechBubble = new SpeechBubble(randomPhrase.phrase, randomPhrase.level);
    arrayOfSpeechBubbles.push(randomSpeechBubble)
    
  }

  return arrayOfSpeechBubbles;
}

module.exports = generatePhrase