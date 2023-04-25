let init = false;
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');

    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.brand-swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                grabCursor: true,
                slidesPerView: 1.2,
                // spaceBetween: 16,
            });
        }

    }
    else if ((tablet.matches) && (init)) {
        swiper.destroy();
        init = false;
    }

}

window.addEventListener('load', function () {
    swiperMode();
});

window.addEventListener('resize', function () {
    swiperMode();
});



const btnShowMoreBrand = document.querySelector('.button-show-more--brand');
const sliderBrands = document.querySelector('.brand-slider');

btnShowMoreBrand.addEventListener('click', function () {
    if (btnShowMoreBrand.textContent != 'Скрыть') {
        btnShowMoreBrand.textContent = 'Скрыть';
    } else {
        btnShowMoreBrand.textContent = 'Показать всё'
    }
    sliderBrands.classList.toggle('brand-slider__big-height')
    btnShowMoreBrand.classList.toggle('button-show-rotate')
})
