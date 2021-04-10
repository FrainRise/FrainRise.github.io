
// Burger-menu for mobile version
let btnContainer = document.getElementById('btnContainer')
let navMenu = document.getElementById('navMenu')
let navbar = document.getElementById('navbar')

btnContainer.addEventListener('click', () => {
    btnContainer.classList.toggle('clicked')
    navMenu.classList.toggle('shown')

    console.log(btnContainer)
})

for(let link of navbar.children) {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        btnContainer.classList.remove('clicked')
        navMenu.classList.remove('shown')
    })
}

// Scrolling for section
let anchorLinks = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchorLinks) {
    anchor.addEventListener('click',  (e) => {
    e.preventDefault()

    let sectionID = anchor.getAttribute('href')
    document.querySelector('' + sectionID).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
  })
};

/* Navbar features */
let navHeader = document.getElementById('customHeader');
let stickyNav = navHeader.offsetTop;

const scrollCallback = window.addEventListener('scroll', () => {
    if(window.pageYOffset > stickyNav) {
        navHeader.classList.add('sticky')
    } else {
        navHeader.classList.remove('sticky');
    }
})

/* Sending an email */
function validateEmail() {
    let field = document.getElementById('inputField')

    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(field.value.match(regex)) {
        alert('Thank you! We will contact with you soon')

        field.value = ''
    } else {
        alert('Something goes wrong... Check your email address once again')
    }
}

