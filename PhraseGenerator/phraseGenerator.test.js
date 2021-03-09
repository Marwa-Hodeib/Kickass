const SpeechBubble = require('../Objects/SpeechBubble/speechBubble');
const generatePhrase = require('./phraseGenerator')
class SpeechBubbleMock{
  constructor(phrase, level){
    this.phrase = phrase;
    this.level = level;
  }
}

const phrasesDatabase = [
  {phrase:'shutup',level:1},
  {phrase:'Bossy',level:3}, 
  {phrase:'Dumb', level:1}, 
  {phrase:'you can not do this', level:3},
  {phrase:'googoo gaga', level:2}
]

describe('Phrase Generator', () => {

  test('generatePhrase will return an array of speech bubbles', () => {
    const arrOfSpeechBubbles = generatePhrase(SpeechBubbleMock, phrasesDatabase, 1)
    expect(arrOfSpeechBubbles[0] instanceof SpeechBubbleMock).toBe(true);
  })

})