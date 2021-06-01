
const mobileMenuButton = document.querySelector('.main-nav__toggle')
const menu = document.querySelector('.main-nav')
const menuContainer = document.querySelector('.main-nav__container')
const menuLinks = document.querySelectorAll('.main-nav__link')

if(window.innerWidth < 1200){
    mobileMenuButton.addEventListener('click', elem => {
        if (menu.classList.contains('main-nav__open')){
            closeMenu()
        } else{
            openMenu()        
        }
    })

    menuLinks.forEach(elem => {
        elem.addEventListener('click', closeMenu)
    })

}

function closeMenu(){
    menu.classList.toggle('main-nav__open')
    menu.classList.toggle('main-nav__close')
    setTimeout(() => {
        menuContainer.style.display = 'none'
    },500)
}

function openMenu(){
    menuContainer.style.display = 'block'
    setTimeout(() => {
        menu.classList.toggle('main-nav__open')
        menu.classList.toggle('main-nav__close')
    }, 100)
}