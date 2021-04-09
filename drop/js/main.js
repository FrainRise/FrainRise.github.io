
// Burger-menu for mobile version
let btnContainer = document.getElementById('btnContainer');
let navMenu = document.getElementById('navMenu')

btnContainer.addEventListener('click', () => {
    btnContainer.classList.toggle('clicked')
    navMenu.classList.toggle('shown')

    console.log(btnContainer)
})

// Scrolling for section
let anchorLinks = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchorLinks) {
    anchor.addEventListener('click',  (e) => {
    e.preventDefault()

    let sectionID = anchor.getAttribute('href')
    document.querySelector('' + sectionID).scrollIntoView({
      alignToTop: true,
      behavior: 'smooth'
    })
  })
};


let navHeader = document.getElementById('customHeader');
let stickyNav = navHeader.offsetTop;

const scrollCallback = window.addEventListener('scroll', () => {
    if(window.pageYOffset > stickyNav) {
        navHeader.classList.add('sticky')
    } else {
        navHeader.classList.remove('sticky');
    }
})