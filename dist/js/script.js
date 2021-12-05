window.addEventListener('DOMContentLoaded', function () {
    "user strict";

    //  ! МАСКА ДЛЯ ТЕЛЕФОНА

    let selector = document.querySelector('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');

    im.mask(selector);

    // ! ВАЛИДАЦИЯ

    let validateForms = function (selector, rules, successModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,

            messages: {
                name: {
                    required: 'Введите Ваше Имя',
                    minLength: 'Слишком короткое Имя',

                },
                name2: {
                    required: 'Введите Ваш логин',

                },
                password: {
                    required: 'Введите пароль',
                    minLength: 'Слишком короткое Имя',

                },
                email: {
                    // remote: 'В веденные данные не верна',
                    email: 'Введенные данные не верны!',
                    required: 'Введите Вашу почту'

                },
                tel: {
                    required: 'В ведите номер телефона',
                    minLength: 'Введите сообшение минимум 20 символов',
                },
                checkbox: {
                    required: 'Пожалуйста, подтвердите согласие',
                }
            },


            submitHandler: function (form) {
                let formData = new FormData(form);
                let xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    // if (xhr.readyState === 4) {

                    //     if (xhr.status === 200) {
                    //         let modal = document.querySelector('.overlay');
                    //         modal.classList.add('thanks');
                    //         let closes = document.querySelector('.modal__close');
                    //         closes.addEventListener('click', function () {
                    //             modal.classList.remove('thanks');
                    //         });
                    //     }
                    // }
                };
                // xhr.open('POST', 'mailer/smart.php', true);
                // xhr.send(formData);

                form.reset();
            },

        });

    };

    validateForms('.modal__form', '.modal__form2', {
        checkbox: {
            required: true,
        },
        text: {
            required: true,
            minLength: 20,
        },
        tel: {
            required: true,
        },
        password: {
            required: true,
        }
    }, 'thanks-popup', 'send goal');


    validateForms('.modal__form2', {
        name2: {
            required: true,
        },
        password: {
            required: true,
        }
    }, 'thanks-popup', 'send goal');




    // ! модалки вход регистрация

    const close = document.querySelector('.modal__close');
    const del = document.querySelector('.overlay');
    const entrance = document.querySelector('.entrance');
    const registration = document.querySelector('.registration');
    const mFe = document.querySelector('.modal__form');
    const mFe2 = document.querySelector('.modal__form2');
    const weight = document.querySelector('.modal__descr');
    const btn = document.querySelector('.btn');
    const overlay = document.querySelector('.overlay');



    btn.onclick = function () {
        overlay.style.display = 'block';
    };

    close.onclick = function () {
        del.style.display = 'none';
    };
    entrance.onclick = function () {
        entrance.style.fontWeight='900';
        mFe.style.display='none';
        mFe2.style.display = 'block';
        weight.style.fontWeight='400';
    };

    registration.onclick = function () {
        entrance.style.fontWeight='400';
        mFe2.style.display = 'none';
        weight.style.fontWeight='900';
        mFe.style.display='block';
    };


    // ! Запускае модалку автономно
    
    // function showModal() {
    //     overlay.style.display = 'block';
    // }

    // setTimeout(showModal, 10000);

    



    // ! hamburger 
    const hamburger = document.querySelector('.hamburger'),
        logo = document.querySelector('.logo'),

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





