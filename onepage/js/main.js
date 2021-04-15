// Navbar sticky effect

let navWrapper = document.getElementById('customHeader')
let stickyNav = navWrapper.offsetTop

let scrollCallback = window.addEventListener('scroll', () => {
    if(window.pageYOffset >= stickyNav) {
        navWrapper.classList.add('sticky')
    } else {
        navWrapper.classList.remove('sticky')
    }
})

// Nav links active class

let links = document.querySelectorAll('.list-link a')

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(lnk => lnk.classList.remove('active'))
        link.classList.add('active')
    })

})
// Smooth scrolling to sections

let anchorLinks = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchorLinks) {
    anchor.addEventListener('click', (e) =>{
        e.preventDefault()

        let sectionID = anchor.getAttribute('href')
        document.querySelector('' + sectionID).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    })
}

// Burger-menu 

let btnContainer = document.getElementById('btnContainer')
let navMenu = document.getElementById('navMenu')

btnContainer.addEventListener('click', () => {
    btnContainer.classList.toggle('clicked')
    navMenu.classList.toggle('shown')
})

for(let link of navMenu.children) {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        btnContainer.classList.remove('clicked')
        navMenu.classList.remove('shown')
    })
}

/* Page loading */

let delay;
let loaderSection = document.getElementById('loaderSection')
let sections = document.getElementsByClassName('section')

function showPages() {
    loaderSection.remove()
    console.log(sections)
    for(let section of sections) {
        section.classList.remove('hidden-section')
    }
}


function loaderDelay() {
    delay = setTimeout(showPages, 2000)
}
