// show hide menu on icon click
document.addEventListener('click', e => e.target.matches('.menu__icon') && document.querySelector('.menu').classList.toggle('menu--active'))

// show/hide menu on link click
document.addEventListener('click', e => e.target.matches('.menu__link') && document.querySelector('.menu').classList.toggle('menu--active'))

// change color based on background
window.addEventListener('scroll', e => window.scrollY > document.querySelector('.section--dark').offsetTop ? document.querySelector('.menu__icon').classList.add('menu__icon--light') : document.querySelector('.menu__icon').classList.remove('menu__icon--light'));
