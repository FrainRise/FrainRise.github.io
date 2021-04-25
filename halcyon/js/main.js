/* BURGER-MENU desktop version */
let btnContainer = document.getElementById('btnContainer')
let navbarList = document.getElementById('navbarList')

btnContainer.addEventListener('click', () => {
    btnContainer.classList.toggle('clicked')
    navbarList.classList.toggle('shown')
})

/* SLIDER */

let sliderItems = document.querySelectorAll('.slider-item');
let sliderDots = document.querySelectorAll('.btn');
let currentSlide = 1;

// manual navigation
let dotNavigation = function(recentSlide){
    sliderItems.forEach((item) => {
        item.classList.remove('active');

    sliderDots.forEach((dot) => {
      dot.classList.remove('active');
    });
  });

  sliderItems[recentSlide].classList.add('active');
  sliderDots[recentSlide].classList.add('active');
}

sliderDots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    dotNavigation(i);
    currentSlide = i;
  });
});

// autoplay for slider
let repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

        sliderItems[i].classList.add('active');
        sliderDots[i].classList.add('active');
        i++;

        if(sliderItems.length == i){
          i = 0;
        }
        if(i >= sliderItems.length){
          return;
        }
        repeater();
      }, 5000);
    }
  repeater();
}

repeat();

/* SCROLL BACK to top btn */

let scrollBtn = document.getElementById('scrollBack')
let scrollWrapper = document.getElementById('scrollWrapper')

window.onscroll = function()  {
  scrollFunction()
}

function scrollFunction() {
  if(document.body.scrollTop > 900 ||  document.documentElement.scrollTop > 900){
    scrollWrapper.style.display = 'block'
  } else {
    scrollWrapper.style.display = "none";
  }
}

//smooth scrolling for links

const links = document.querySelectorAll('a[href*="#"]')

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    const sectionID = link.getAttribute('href')
    document.querySelector('' + sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


/* Email Validation */

let form = document.getElementById('contactForm')
let contactMessage = document.getElementById('contactMessage')
let closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', () => {
  contactMessage.style.display = 'none'
})

function validateEmail(e) {
    e.preventDefault();

    let emailInput = document.getElementById('emailInput')
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(emailInput.value.match(regex)) {
      contactMessage.style.display = 'block'

      setTimeout(() => {
        contactMessage.style.display = 'none'
      }, 5000)
      
      emailInput.value = ''
    }
}

form.addEventListener('submit', validateEmail)

/* LOADER */

let loadingDelay;
let loaderSection = document.getElementById('loader')
let sections = document.getElementsByClassName('section')
console.log(sections)

function showSections() {
  loaderSection.remove()
  
  for(let section of sections) {
    section.classList.remove('hidden-section')
  }
}

function loaderDelay() {
  loaderDelay = setTimeout(showSections, 2500)
}