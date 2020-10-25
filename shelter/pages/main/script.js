let aboutShelter = document.querySelector('.list__link_active');
let menu = document.querySelector('.burger');

aboutShelter.addEventListener('click', () => {
    window.scrollTo(0,0);
});

menu.addEventListener('click', () => {
    let burgerMenu = document.querySelector('.burger-menu');
    let burgerIcon = document.querySelector('.burger');
    burgerMenu.classList.contains('show') ? burgerMenu.classList.remove('show') : burgerMenu.classList.add('show');
    burgerIcon.classList.contains('rotate') ? burgerIcon.classList.remove('rotate') : burgerIcon.classList.add('rotate');
});