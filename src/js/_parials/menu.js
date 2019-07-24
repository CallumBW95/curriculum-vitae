document.addEventListener('click', e => e.target.matches('.menu__icon') && document.querySelector('.menu').classList.toggle('menu--active'))

document.addEventListener('click', e => e.target.matches('.menu__link') && document.querySelector('.menu').classList.toggle('menu--active'))