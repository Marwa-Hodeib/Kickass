const SpeechBubble = require('./speechBubble');


describe('SpeechBubble', () => {
  const bubble = new SpeechBubble('wtf', 2)

  test('bubble will give the current level ', () => {
    expect(bubble.getLevel()).toBe(2);
  })

  test('bubble will turn to level 1 after first hit', () => {
    expect(bubble.gotHit()).toBe(1);
  })

  test('bubble hits character', () => {
    expect(bubble.hitCharacter()).toBe(0)
  })
})