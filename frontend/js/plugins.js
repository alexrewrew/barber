$(document).ready(function () {
    $('.fancybox').fancybox({});
});
$(document).ready(function () {
    /* sumo slect plugin */
    $('.search_select').SumoSelect({
        search: true
        , searchText: 'Поиск...'
    });
    $('.sumo-select').SumoSelect({});
    $('.select2').select2({
        minimumResultsForSearch: Infinity
    });
    /* iCheck plugin */
    $('.icheck_input').iCheck({
        checkboxClass: 'icheckbox_square'
        , radioClass: 'iradio_square'
        , increaseArea: '20%' // optional
    });
});
$(document).ready(function () {
    $("#jumbo").vegas({
        autoplay:true,
        slides: [
            {
                src: "frontend/img/jumbo-slider/main.jpg"
            }
            // , {
            //     src: "frontend/img/jumbo-slider/jumbo2.jpg"
            // }
            // , {
            //     src: "frontend/img/jumbo-slider/jumbo3.jpg"
            // }
            // , {
            //     src: "frontend/img/jumbo-slider/jumbo4.jpg"
            // }
            // , {
            //     src: "frontend/img/jumbo-slider/jumbo5.jpg"
            // }
    ]
    });
});


$(document).ready(function () {

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    /***************** Wow.js ******************/

    new WOW().init();
});

