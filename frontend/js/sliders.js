$(document).ready(function () {
    $('.main_page').vegas({
        slides: [
            {
                src: 'img/slide1.jpg'
            }
            , {
                src: 'img/slide2.jpg'
            }
            , {
                src: 'img/slide3.jpg'
            }
            , {
                src: 'img/slide4.jpg'
            }
            , {
                src: 'img/slide5.jpg'
            }
        ]
    });
});
/*$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});*/
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true
        , margin: 0
        , nav: true
        , items: 1
        , autoWidth: true
    })
});