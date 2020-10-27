let aboutShelter = document.querySelector('.list__link_active');
let menu = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let closeBurger = document.querySelector('.close-menu');
let closeModalView = document.getElementById('closeModal');
let burgerMenu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.burger');
let widthWin = document.body.clientWidth;
let modal = document.querySelector('.modal-wind');

aboutShelter.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

closeBurger.addEventListener('click', () => {
    closeMenu();
});

closeModalView.addEventListener('click', () => {
    closeModal();
});

menu.addEventListener('click', () => {
    burgerMenu.classList.contains('show') ?
        (burgerMenu.classList.remove('show'), document.body.style.overflowY = 'auto', overlay.classList.remove('show')) :
        (burgerMenu.classList.add('show'), document.body.style.overflowY = 'hidden', overlay.classList.add('show'));
    burgerIcon.classList.contains('rotate') ? burgerIcon.classList.remove('rotate') : burgerIcon.classList.add('rotate');
});

document.body.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'overlay') {
        closeMenu();
        closeModal();
    }
});

function closeMenu() {
    burgerMenu.classList.remove('show');
    document.body.style.overflowY = 'auto';
    overlay.classList.remove('show');
    burgerIcon.classList.remove('rotate');
}

function closeModal() {
    overlay.classList.remove('show');
    modal.classList.remove('show-wind');
    document.body.style.overflowY = 'auto';
}

let pets = [];
let petMass = [];
let startMass = [];
let finalPets = [];
let divMain = document.createElement('div');
let divMainTwo = document.createElement('div');
let divMainFinal = document.createElement('div');
let divMainThird = document.createElement('div');
let idButRight;
let idButLeft;
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
    resizeWin();
    document.querySelector(idButRight).addEventListener('click', (e) => {
        plusSlide();
    });
    document.querySelector(idButLeft).addEventListener('click', (e) => {
        minusSlide();
    });
    let cardsPet = document.querySelectorAll('.our-friends__card');
    showCard(cardsPet);
})

function showCard(cardsPet) {
    cardsPet.forEach(element => {
        element.addEventListener('click', () => {
            if (modal.classList.contains('show-wind')) {
                modal.classList.remove('show-wind');
                document.body.style.overflowY = 'auto';
                overlay.classList.remove('show');
            } else {
                modal.classList.add('show-wind');
                document.body.style.overflowY = 'hidden';
                overlay.classList.add('show');
                console.log(element.childNodes[2].innerText);
                pets.forEach(pet => {
                    if (pet.name === element.childNodes[2].innerText) {
                        let contentModal = document.querySelector('.modal-content');
                        contentModal.innerHTML = `<img src="${pet.img}" alt="${pet.name}">
                            <div class="modal-content-text"> 
                                <h3>${pet.name}</h3>
                                <h4>${pet.type} - ${pet.breed}</h4>
                                <h5>${pet.description}</h5>
                                 <ul class="modal-content-list">
                                    <li><span class="modal-content-list-bold">Age:</span><span class="modal-text"> ${pet.age}</span></li>
                                    <li><span class="modal-content-list-bold">Inoculations:</span><span class="modal-text"> ${pet.inoculations}</span></li>
                                    <li><span class="modal-content-list-bold">Diseases:</span><span class="modal-text"> ${pet.diseases}</span></li>
                                    <li><span class="modal-content-list-bold">Parasites:</span><span class="modal-text"> ${pet.parasites}</span></li>
                                </ul>
                            </div>`;
                    }
                });
            }
        })
    })
}

let block = '';

window.addEventListener('resize', () => {
    document.querySelectorAll('.our-friends__card').forEach((element) => {
        element.remove();
    });
    document.querySelectorAll('.our-friends__cards-slide').forEach((element) => {
        if (element.style.display === 'flex') block = element;
        element.remove();
    });
    resizeWin();
});

function resizeWin() {
    let widthWin0 = document.body.clientWidth;
    if (widthWin0 >= 1280) {
        win1280();
        if (block !== '') block.style.display = 'flex';
    } else if (widthWin0 >= 768) {
        win768();
        if (block !== '') block.style.display = 'flex';
    } else {
        win320();
        if (block !== '') block.style.display = 'flex';
    }
    document.querySelector(idButRight).addEventListener('click', (e) => {
        plusSlide();
    });
    document.querySelector(idButLeft).addEventListener('click', (e) => {
        minusSlide();
    });
}

function win1280() {
    divMainTwo.style.display = 'none';
    divMainFinal.style.display = 'none';
    divMain.className = 'our-friends__cards-slide';
    divMainTwo.className = 'our-friends__cards-slide';
    divMainFinal.className = 'our-friends__cards-slide';
    for (let i = 0; i <= 2; i++) {
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
        divMainTwo.append(div);
    }
    for (let i = 6; i <= 8; i++) {
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
    idButRight = "#butRight";
    idButLeft = "#butLeft";
    if (block !== '') block.style.display = 'flex';
}

function win768() {
    divMainTwo.style.display = 'none';
    divMainFinal.style.display = 'none';
    divMainThird.style.display = 'none';
    divMain.className = 'our-friends__cards-slide';
    divMainTwo.className = 'our-friends__cards-slide';
    divMainFinal.className = 'our-friends__cards-slide';
    divMainThird.className = 'our-friends__cards-slide';
    for (let i = 0; i <= 1; i++) {
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
    for (let i = 2; i <= 3; i++) {
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
    for (let i = 4; i <= 5; i++) {
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
    for (let i = 6; i <= 7; i++) {
        let div = document.createElement('div');
        div.className = 'our-friends__card';
        let blockSlide =
            `<img src="${finalPets[i].img}" alt="pets-${finalPets[i].name}">
                <p class="our-friends__card--text">${finalPets[i].name}</p>
                <button type="button" class="our-friends__card--button">
                    Learn more
                </button>`;
        div.innerHTML = blockSlide;
        divMainThird.append(div);
    }
    arrowRight.before(divMain, divMainTwo, divMainFinal, divMainThird);
    idButRight = "#butRight";
    idButLeft = "#butLeft";
    if (block !== '') block.style.display = 'flex';
}

function win320() {
    for (let i = 0; i < finalPets.length - 1; i++) {
        let div = document.createElement('div');
        let divAll = document.createElement('div');
        divAll.className = 'our-friends__cards-slide';
        divAll.style.display = 'none';
        if (i === 0) divAll.style.display = 'block';
        div.className = 'our-friends__card';
        let blockSlide =
            `<img src="${finalPets[i].img}" alt="pets-${finalPets[i].name}">
            <p class="our-friends__card--text">${finalPets[i].name}</p>
            <button type="button" class="our-friends__card--button">
                Learn more
            </button>`;
        div.innerHTML = blockSlide;
        divAll.append(div);
        arrowRight.before(divAll);
        idButRight = "#butRightMob";
        idButLeft = "#butLeftMob";
    }
    if (block !== '') block.style.display = 'flex';
}

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