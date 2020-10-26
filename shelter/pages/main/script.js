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
    let shuffled = pets
        .map((a) => ({
            sort: Math.random(),
            value: a
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);   
    finalPets = shuffled.concat(shuffled[1]);
    // console.log(finalPets);
    let divMain = document.createElement('div');
    let divMainTwo = document.createElement('div');
    let divMainFinal = document.createElement('div');
    divMainTwo.style.display = 'none';
    divMainFinal.style.display = 'none';
    divMain.className = 'our-friends__cards-slide';
    divMainTwo.className = 'our-friends__cards-slide';
    divMainFinal.className = 'our-friends__cards-slide';
    for (let i=0; i <= 2; i++) {
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
    for (let i=3; i <= 5; i++) {
        let div = document.createElement('div');
        div.className = 'our-friends__card';
        let blockSlide =
            `<img src="${finalPets[i].img}" alt="pets-${finalPets[i].name}">
                <p class="our-friends__card--text">${finalPets[i].name}</p>
                <button type="button" class="our-friends__card--button">
                    Learn more
                </button>`;
        div.innerHTML = blockSlide;
        divMainTwo.append(div);
    }
    for (let i=6; i <= 8; i++) {
        let div = document.createElement('div');
        div.className = 'our-friends__card';
        let blockSlide =
            `<img src="${finalPets[i].img}" alt="pets-${finalPets[i].name}">
                <p class="our-friends__card--text">${finalPets[i].name}</p>
                <button type="button" class="our-friends__card--button">
                    Learn more
                </button>`;
        div.innerHTML = blockSlide;
        divMainFinal.append(div);
    }
    arrowRight.before(divMain, divMainTwo, divMainFinal);
    document.querySelector("#butRight").addEventListener('click', (e) => {
        plusSlide();
    });
    
    document.querySelector("#butLeft").addEventListener('click', (e) => {
        minusSlide();
    });
})

let currentPage = 0;
let cards = document.querySelectorAll('.our-friends__card');
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("our-friends__cards-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

