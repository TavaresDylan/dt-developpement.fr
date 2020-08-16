// Variable modal définie sur null
let modal = null;
//constante OPEN
const openModal = function (e){
    e.preventDefault()
    // constante target : vise 
    //const target = document.querySelector(e.target.getAttribute('href'))
    const target = document.getElementById('modal1')
    console.log(target);
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}
//constante CLOSE
const closeModal = function (e){
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-close-modal').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal =  null
}
// Evite de fermer la modal en cliquant dedans
const stopPropagation = function(e){
    e.stopPropagation()
}
document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})


// Permet de fermer la modal avec la touche Escape
window.addEventListener('keydown', function(e){
    if(e.key === "Escape" || e.key === "Esc"){
        closeModal(e)
    }
})