(function() {
  
    let card = document.getElementById('card'),
        btnOpen = document.getElementById('open'),
        btnClose = document.getElementById('close'),
        backSide = document.getElementById('backSide'),
        typeTitle = document.getElementById('typeTitle'),
        typeFooter = document.getElementById('typeFooter'),
        congratsWrapper = document.getElementById('congratsWrapper')
        rotationTimer = null;

    btnOpen.addEventListener('click', function () {
      card.setAttribute('class', 'half-open');

      if (rotationTimer) clearTimeout(rotationTimer);
      rotationTimer = setTimeout(function () {
        card.setAttribute('class', 'full-open');
        backSide.classList.add('shown')
        typeTitle.classList.add('anim__typing')
      
        setTimeout(() => {
          congratsWrapper.classList.add('fadeIn')
          typeFooter.classList.add('fadeIn')
        }, 2000)

        rotationTimer = null;
      }, 1000);
    });
  
    btnClose.addEventListener('click', () => {
      card.setAttribute('class', 'half-close');

      if (rotationTimer) clearTimeout(rotationTimer);
      rotationTimer = setTimeout(() => {
        card.setAttribute('class', '');
        backSide.classList.remove('shown')
        rotationTimer = null;
      }, 1000);
    });
  
  }());
  