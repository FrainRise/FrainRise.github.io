// Navbar sticky effect

let navWrapper = document.getElementById('customHeader')
let stickyNav = navWrapper.offsetTop

let scrollCallback = window.addEventListener('scroll', () => {
    if(window.pageYOffset > stickyNav) {
        navWrapper.classList.add('sticky')
    } else {
        navWrapper.classList.remove('sticky')
    }
})

// Nav links active class

let links = document.querySelectorAll('.list-link a')
let hrefSections = document.getElementsByClassName('href-section')
console.log(hrefSections)

window.addEventListener('scroll', () => {
    let index = hrefSections.length
    
    while(--index && window.scrollY + 50 < hrefSections[index].offsetTop){}
    
    links.forEach(link => {
        link.classList.remove('active')
    })
    
    links[index].classList.add('active')    
})

/*
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(lnk => lnk.classList.remove('active'))
        link.classList.add('active')
    })

})*/


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
    for(let section of sections) {
        section.classList.remove('hidden-section')
    }
}


function loaderDelay() {
    delay = setTimeout(showPages, 2000)
}


/* Sending an info */
let form = document.getElementById('contactForm')

function validateEmail(e) {
    e.preventDefault();
    
    let usernameField = document.getElementById('username')
    let usermailField = document.getElementById('usermail')
    let messageField = document.getElementById('message')
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(usermailField.value.match(regex) && usernameField !== '' && messageField !== '') {
        alert('Thank you! We will contact with you soon')

        usernameField.value = ''
        usermailField.value = ''
        messageField.value = ''
    } else {
        alert('Something goes wrong... Fill all fields or check your email address once again')
    }
}

form.addEventListener('submit', validateEmail)