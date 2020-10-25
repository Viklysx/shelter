let aboutShelter = document.querySelector('.list__link_active');
let menu = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let closeBurger = document.querySelector('.close-menu');
let burgerMenu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.burger');

aboutShelter.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

closeBurger.addEventListener('click', () => {
    closeMenu();
});

menu.addEventListener('click', () => {
    burgerMenu.classList.contains('show') ?
        (burgerMenu.classList.remove('show'), document.body.style.overflowY = 'auto', overlay.classList.remove('show')) :
        (burgerMenu.classList.add('show'), document.body.style.overflowY = 'hidden', overlay.classList.add('show'));
    burgerIcon.classList.contains('rotate') ? burgerIcon.classList.remove('rotate') : burgerIcon.classList.add('rotate');
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'overlay') closeMenu();
});

function closeMenu() {
    burgerMenu.classList.remove('show');
    document.body.style.overflowY = 'auto';
    overlay.classList.remove('show');
    burgerIcon.classList.remove('rotate');
}

let pets = [];
let petMass = [];
let startMass = [];
let finalPets = [];
let arrowRight = document.getElementById('butRight');
const request = new XMLHttpRequest();
fetch('../../pets.json').then(res => res.json()).then(list => {
    pets = list;
    pets.forEach((element, i) => {       
        if (i > 2) {
            petMass.push(pets[i]);
        }
        else startMass.push(pets[i]);
    });
    let shuffled = petMass
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    finalPets = startMass.concat(shuffled);
    let divMain = document.createElement('div');
    divMain.className = 'our-friends__cards-slide';      
    divMain.style.display = 'none';
        
        for (let i = 3; i <= 5; i++) {
            
            let div = document.createElement('div');
            div.className = 'our-friends__card';
            let blockSlide = 
                `<img src="${finalPets[i].img}" alt="pets-${finalPets[i].name}">
                <p class="our-friends__card--text">${finalPets[i].name}</p>
                <button type="button" class="our-friends__card--button">
                    Learn more
                </button>`;
            div.innerHTML = blockSlide;
            divMain.append(div);           
        }  
    arrowRight.before(divMain);
})

let currentPage = 0;
let cards = document.querySelectorAll('.our-friends__card');

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("our-friends__cards-slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 3; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

document.querySelector("#butRight").addEventListener('click', (e) => {
    plusSlide();
});

