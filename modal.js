const button1 = document.querySelector('#button1')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__content--close')

button1.addEventListener('click', () => {
  console.log('button')
  modal.classList.remove('hidden')
  modal.classList.add('visible')
})

closeButton.addEventListener('click', () => {
  console.log('close')
  modal.classList.add('hidden')
  modal.classList.remove('visible')
})