let accordeonLabel = document.querySelectorAll('.accordeon__label')
console.log(accordeonLabel);
accordeonLabel.forEach(elem => {
    elem.addEventListener('click', e =>{
        e.currentTarget.children[0].children[0].classList.toggle('accordeon__label-text--active')
    })
})