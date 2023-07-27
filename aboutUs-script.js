const openButton = document.getElementById('letter-icon')
const closeButton = document.getElementById('close-button')
const popup = document.getElementById('popup1')
const overlay = document.getElementById('overlay')

openButton.addEventListener('click', () =>{
    popup.classList.add('active')
    overlay.classList.add('active')
})

closeButton.addEventListener('click', ()=>{
    popup.classList.remove('active')
    overlay.classList.remove('active')
})



