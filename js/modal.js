const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal-container')
const imgCardModal = modal.querySelector('.img-card')
    
for (let card of cards){
    card.addEventListener('click', () => {
    
        modal.querySelector('img').src = card.querySelector('img').src
        modal.querySelector('h2').innerHTML = card.querySelector('h2').innerHTML
        modal.querySelector('p').innerHTML = card.querySelector('p').innerHTML

        modal.classList.add('active');
    })
}


openImage = () => imgCardModal.classList.toggle('active')
closeImage = () => imgCardModal.classList.remove('active')
closeModal = () => modal.classList.remove('active')