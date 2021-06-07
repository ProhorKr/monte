const header = document.querySelector('.header')
let utpHeight = window.innerHeight;
const gradient = 'linear-gradient(90deg, rgba(245,245,245,1) 50%, rgba(255,255,255,1) 50%)'
const bgColor = '#ffffff'

window.addEventListener('scroll', function() {
    if (pageYOffset > utpHeight) {
        header.classList.add('.header--gradient')
    } else {
        header.classList.remove('.header--gradient')
    }
  });