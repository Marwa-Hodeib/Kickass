class PrincipleCharacter{
  constructor(name, goal, gender){
    this.name = name
    this.goal = goal
    this.gender = gender
    this.confidence = 15
    this.score = 0
  }

  getCharacteristics() {
    return {name: this.name, goal: this.goal, gender: this.gender}
  }

  getConfidence() { 
    return this.confidence
  }


  changeConfidence(rate){
    this.confidence += rate
  }

  getScore() {
    return this.score
  }

  attack(score) {
    this.score += score
  }

}



module.exports = PrincipleCharacter;