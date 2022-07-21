$(document).ready(function () {

    $('.bars').click(function () {
        $(this).toggleClass('toggle-ico'); // bar icon
        $('.nav-bar').toggleClass('nav-show-hide'); // mobile nav
        $('header').toggleClass('header-bg') //header-bg
    });

    $('.nav--links').click(function () {
        $('.bars').removeClass('toggle-ico'); // bar icon
        $('.nav-bar').removeClass('nav-show-hide'); // mobile nav
        $('header').removeClass('header-bg') // header-bg
    });

    $(window).on('load scroll', function () {
        $('.bars').removeClass('toggle-ico'); // bar icon
        $('.nav-bar').removeClass('nav-show-hide'); // mobile nav
        $('header').removeClass('header-bg') // header-bg

        if ($(window).scrollTop() > 30) {
            $('header').removeClass('header-bg'); // header-bg
            $('header').addClass('bg-for-header');
        } else {
            $('header').removeClass('header-bg'); // header-bg
            $('header').removeClass('bg-for-header'); // main header-bg
        }
    });

    $(' .accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(0);
        $(this).next('.accordion-body').slideDown(500);

        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600,
        speedAsDuration: true
    });

    new WOW().init();
});