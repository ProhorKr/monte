
const mobileMenuButton = document.querySelector('.main-nav__toggle')
const menu = document.querySelector('.main-nav')
const menuContainer = document.querySelector('.main-nav__container')

mobileMenuButton.addEventListener('click', elem => {
    if (menu.classList.contains('main-nav__open')){
        menu.classList.toggle('main-nav__open')
        menu.classList.toggle('main-nav__close')
        setTimeout(() => {
            menuContainer.style.display = 'none'
        },500)
    } else{
        menuContainer.style.display = 'block'
        setTimeout(() => {
            menu.classList.toggle('main-nav__open')
        menu.classList.toggle('main-nav__close')
        }, 100)
        
    }
})