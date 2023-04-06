const buttonDetails = document.querySelector('.main-description__button');
const mainDescriptionContainer = document.querySelector('.main-description__container');
const details = document.querySelector('details');

buttonDetails.addEventListener('click', function () {
    mainDescriptionContainer.classList.add('main-description__container--big');
})

if (window.innerWidth >= 767) {
    details.setAttribute("open", "open");
}

details.addEventListener('click', function () {
    details.removeAttribute("open", "open");
    buttonDetails.classList.add('main-description__button--margin');
})