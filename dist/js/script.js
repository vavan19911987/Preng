window.addEventListener('DOMContentLoaded', function () {
    "user strict";
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
                nav: true,
            },
        }

    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });
   
    new WOW().init();

});




