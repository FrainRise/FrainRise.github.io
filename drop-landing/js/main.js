let btnContainer = document.getElementById('btnContainer');
let navMenu = document.getElementById('navMenu')

btnContainer.addEventListener('click', () => {
    btnContainer.classList.toggle('clicked')
    navMenu.classList.toggle('shown')

    console.log(btnContainer)
})