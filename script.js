const body = document.querySelector('body')
const hoverFadeBtns = body.querySelectorAll('.hover-fade')
const modal = body.querySelector('.modal')
const overlay = body.querySelector('.overlay')
const projOneBtn = body.querySelector('.proj-one-btn')
const projTwoBtn = body.querySelector('.proj-two-btn')
const closeModalBtns = body.querySelectorAll('.btn-close')

const lowerOpacity = (hoveredButton) => {
    //find the button we're not hovering, add full-opacity class to it.
    const targetedButton = hoveredButton.currentTarget
    targetedButton.setAttribute('id', 'full-opacity')

    const allButtons = document.querySelectorAll('.hover-fade')
    const allButtonsArray = [...allButtons]
    const notHovering = allButtonsArray.filter(element => element.id !== 'full-opacity')

    notHovering.forEach(node => {
        node.classList.add('lower-opacity')
    })
}

const resetOpacity = () => {
    hoverFadeBtns.forEach(btn => {
        btn.classList.remove('lower-opacity')
        btn.removeAttribute('id')
    })

}

const openOverlay = () => {
    overlay.classList.remove('hidden')
}

const openModal = (modal) => {
    const modalToOpen = body.querySelector(`${modal}`)
    modalToOpen.classList.remove('hidden')
}

const closeModalsAndOverlay = () => {
    const allModals = document.querySelectorAll('.modal')
    allModals.forEach(modal => modal.classList.add('hidden'))
    overlay.classList.add('hidden')
}

hoverFadeBtns.forEach(node => {
    node.addEventListener('mouseenter', (e) => lowerOpacity(e))
    node.addEventListener('mouseleave', resetOpacity)
    node.addEventListener('click', openOverlay)
})

closeModalBtns.forEach(btn => btn.addEventListener('click', closeModalsAndOverlay))

projOneBtn.addEventListener('click', () => openModal('.proj-one-modal'))
projTwoBtn.addEventListener('click', () => openModal('.proj-two-modal'))
overlay.addEventListener('click', closeModalsAndOverlay)



