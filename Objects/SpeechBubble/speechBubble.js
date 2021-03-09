class SpeechBubble{
  constructor(phrase, level){
    this.phrase = phrase;
    this.level = level;
  }

  getLevel(){
    return this.level;
  }

  gotHit(){
   this.level--;
   return this.level;
  }

  hitCharacter(){
    this.level = 0;
    return this.level;
  }
  
}

module.exports = SpeechBubble;