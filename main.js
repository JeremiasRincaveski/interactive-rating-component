const input = document.querySelector('.input')
const output = document.querySelector('.output')
const button = document.querySelector('button[type="button"]')
const buttons = document.querySelectorAll('button[data-note]')
let nota
const result = document.querySelector('.output-result')

const validaID = () => {
  buttons.forEach(button => {
    if (button.id === 'selected') {
      button.removeAttribute('id')
    }
  })
}

buttons.forEach(button => button.addEventListener('click', () => {
    nota = button.getAttribute('data-note')
    validaID()
    button.id = 'selected'
    console.log(button);
}))

button.addEventListener('click', () => {
  if (nota > 0) {
    input.setAttribute('style', 'display: none')
    output.setAttribute('style', 'display: flex')
    result.innerHTML = `You selected ${nota} out of 5`
  }
})