
const swiper = new Swiper('.swiper', {

    //! Основные настройки 
    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
    speed: 500, // скорость переключения слайдов
    effect: 'slider', // cards, coverflow, flip, fade, cube
    // initialSlide: 2, // Начинаем со 2 слайдера
    // freeMode: true, // можно перетаскивать как ленту
    slidesPerView: 1, // кол-во активных слайдов
    // centeredSlides: true, // центрирование слайдов

    //! Пагинация (точки)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // true - Пагинация становится кликабельной
    },

    //! Кнопки вперед и назад 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // ! Автоматическое перелистывание
    // autoplay: {
    //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
    // },
});



var elements = document.querySelectorAll('.circle');
var hints = document.querySelectorAll('.hint');
// console.log(elements);
var currentSlide = swiper.realIndex + 1;

swiper.on('slideChange', function () {
    currentSlide = swiper.realIndex + 1;
    console.log('Текущий слайд: ' + currentSlide);
    for (let i = 0; i < elements.length; i++) {
        if (currentSlide !== 1) {
            elements[i].classList.add('hidden')
            console.log(elements);
        }
        if (currentSlide == 1) {
            elements[i].classList.remove('hidden');
        }

    }
    for (let i = 0; i < hints.length; i++) {
        if (currentSlide !== 1) {
            hints[i].classList.add('hidden')
            console.log(elements);
        }
        if (currentSlide == 1) {
            hints[i].classList.remove('hidden');
        }

    }
});
