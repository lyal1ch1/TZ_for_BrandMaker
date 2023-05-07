// "use strict"
//==========================================

//! ============== 1 вариант SWIPER ==============
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

// swiper.on('slideChange', function () {
//     console.log('slide changed');
//     console.log(swiper.activeIndex);
//   });

var elements = document.querySelectorAll('.circle')
// var hidden = document.querySelectorAll('.hidden')
console.log(elements);
var currentSlide = swiper.realIndex + 1;
// console.log('Текущий слайд: ' + currentSlide);

swiper.on('slideChange', function () {
    currentSlide = swiper.realIndex + 1;
    console.log('Текущий слайд: ' + currentSlide);
   for (let i = 0; i < elements.length; i++) {
    if (currentSlide !== 1 ) {
        elements[i].classList.add('hidden')
        console.log(elements);
    }
    if (currentSlide == 1) {
            elements[i].classList.remove('hidden');
    }
    
   }
  });
//! ============== 2 вариант SWIPER ==============

// var mySwiper = new Swiper('.swiper-container', {
//     // настройки Swiper
//   });
  
//   // получаем номер текущего слайда при загрузке страницы
//   var currentSlide = mySwiper.activeIndex + 1;
//   console.log('Текущий слайд: ' + currentSlide);
  
//   // получаем номер текущего слайда при изменении слайдов
//   mySwiper.on('slideChange', function () {
//     currentSlide = mySwiper.activeIndex + 1;
//     console.log('Текущий слайд: ' + currentSlide);
//   });
// const swiper = new Swiper('.swiper', {
//     // ...
//   });
//   swiper.on('slideChange', function () {
//     console.log('slide changed');
//     console.log(swiper.activeIndex);
//   });