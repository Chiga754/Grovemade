$(function () {

    // Header-menu
    $('.header__btn').on('click', function () {
        $('.header__menu').toggleClass('header__menu-show');
    })


    // Slider for Featured Products
    $('.featured-products__items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });
})