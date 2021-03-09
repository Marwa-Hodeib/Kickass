


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

const renderer = new Renderer()

window.addEventListener('load', () => {
  resizeCanvas(canvas)
  renderer.renderCharacter({
    source:'./assets/character.png',
    ctx: ctx,
    innerWidth: innerWidth,
    innerHeight: innerHeight
})

})

const resizeCanvas = (canvas) => {
  canvas.width = innerWidth
  canvas.height = innerHeight
}

window.addEventListener('resize', () => {
  resizeCanvas(canvas)
  renderer.renderCharacter({
    source:'./assets/character.png',
    ctx: ctx,
    innerWidth: innerWidth,
    innerHeight: innerHeight
})
})





