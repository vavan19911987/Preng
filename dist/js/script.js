window.addEventListener('DOMContentLoaded', function () {
    // "user strict";
    // ! hamburger 
    const hamburger = document.querySelector('.hamburger'),
        logo =document.querySelector('.logo'),

        menu = document.querySelector('.navHamburger__menu');

    hamburger.addEventListener('click', function () {
        logo.classList.toggle('logoleft');
        menu.classList.toggle('active');

    });
    
    // ! Первый слайдер
    const slider = tns({
        container: '.about__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false,
        speed: 1300,
        responsive: {
            320: {
                nav: true
            },
            992: {
                nav: false,
                // disable: true
            },
        }
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    // ! Второй слайдер
    const sliderTow = tns({
        container: '.carusel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        controls: false,
        speed: 1300,
        responsive: {
            320: {
                nav: true
            },
            992: {
                nav: true,
            },
        }
    });
    document.querySelector('.prev_2').addEventListener('click', function () {
        sliderTow.goTo('prev');
    });
    document.querySelector('.next_2').addEventListener('click', function () {
        sliderTow.goTo('next');
    });








});




