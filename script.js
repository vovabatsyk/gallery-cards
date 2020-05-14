const img = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg'
]
const cover = document.querySelector('.cover')

randInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
let count = img.length

function init() {
  img.sort(() => Math.random() - 0.5)
  for (let i = 0; i < img.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.style.background = `url('./images/${img[i]}')`
    card.style.backgroundSize = 'cover'
    card.style.transform = `rotate(${randInt(
      -15,
      15
    )}deg) translate(${randInt(-40, 40)}px, ${randInt(-40, 40)}px)`
    cover.append(card)
  }
}

init()

cover.addEventListener('click', (event) => {
  if (event.target.classList.contains('card')) {
    event.target.classList.add('go')
    event.target.remove()
    count--
  }
  if (count == 0) {
    init()
    count = img.length
  }
})
