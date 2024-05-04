const arttır = document.getElementById('arttır')
const azalt = document.getElementById('azalt')
const counterText = document.getElementById('counter')

let counter: number = 0

if (counter == 0) {
  arttır.addEventListener('click', () => {
    counter++
    console.log(counter)
    if (counterText) {
      counterText.textContent = counter.toString()
    }
  })
}

azalt.addEventListener('click', () => {
  counter--
  console.log(counter)
  if (counterText) {
    counterText.textContent = counter.toString()
  }
})
