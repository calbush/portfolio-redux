const body = document.querySelector('body')

const hoverFadeBtns = body.querySelectorAll('.hover-fade')

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

hoverFadeBtns.forEach(node => {
    node.addEventListener('mouseenter', (e) => lowerOpacity(e))
    node.addEventListener('mouseleave', resetOpacity)
})