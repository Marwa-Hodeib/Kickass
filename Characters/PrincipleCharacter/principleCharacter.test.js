const PrincipleCharacter = require('./principleCharacter');

const mainCharacter = new PrincipleCharacter('marwa', 'astronaut', 'female');

describe('PrincipleCharacter', () => {

  test('that maincharacter has name and goal', () => {
    expect(mainCharacter.getCharacteristics()).toEqual({name:'marwa',goal:'astronaut', gender: 'female'})
  })

  test('main characters confidence is 15% on first run', () => {
    expect(mainCharacter.getConfidence()).toBe(15)
  })

  test('main characters confidence increases 5% ', () => {
    mainCharacter.changeConfidence(5)
    expect(mainCharacter.getConfidence()).toBe(20)
  })

  test('main characters confidence decreases 5% ', () => {
    mainCharacter.changeConfidence(-5)
    expect(mainCharacter.getConfidence()).toBe(15)
  })

})

