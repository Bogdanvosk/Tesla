$(document).ready(function() {
    // ! Slider
    $('.slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        fade: true
    })


    // ! Menu Navigation
    const menuBtn = document.querySelector('.header-btn'),
        menuBlock = document.querySelector('.menu'),
        sliderDots = document.querySelector('.slick-dots'),
        closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', () => {
        menuBlock.classList.add('active');
    })

    closeBtn.addEventListener('click', () => {
        menuBlock.classList.remove('active');
    })



    $('.header-content__title').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated fadeInLeft',
        offset: 100
    });

    $('.header-content__text').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated fadeInRight delay-1s',
        offset: 100
    });

    $('.stats-item').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated bounceIn',
        offset: 100
    });

    $('.benefits-row__image').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated fadeInRight',
        offset: 100
    });

    $('.benefits-row-content__title').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated fadeInRight delay-1s initial',
        offset: 100
    });

    $('.benefits-row-content__text').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated fadeInRight delay-1s ',
        offset: 100
    });

    $('.design-row__item').addClass('hidden').viewportChecker({
        classToAdd: 'visibility animated bounceIn',
        offset: 100
    });


});