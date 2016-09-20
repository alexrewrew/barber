$(document).ready(function () {
    $('.select2').select2({
        minimumResultsForSearch: Infinity
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

    // $(function () {
    //     $('a.page-scroll').bind('click', function (event) {
    //         var $anchor = $(this);
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top
    //         }, 1000, 'easeInOutExpo');
    //         event.preventDefault();
    //     });
    // });


    $('.parallax-window').parallax({imageSrc: 'frontend/img/testimonials/basic.jpg'});
    

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    /***************** Wow.js ******************/

    new WOW().init();
});
//
$(document).ready(function () {
     $(document).on("scroll", onScroll);
     $('.page-scroll').on('click', function (e) {
         e.preventDefault();
         $(document).off("scroll");
         $('.page-scroll').each(function () {
             $(this).removeClass('active');
         })
         $(this).addClass('active');
         var target = this.hash;
         $target = $(target);
         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 500, 'swing', function () {
             window.location.hash = target;
             $(document).on("scroll", onScroll);
         });
     });
 });

 function onScroll(event) {
     var scrollPosition = $(document).scrollTop();
     $('.scrolll a').each(function () {
         var currentLink = $(this);
         var refElement = $(currentLink.attr("href"));
         if (refElement.position().top - 40 <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
             $('.scrolll a').removeClass("active");
             currentLink.addClass("active");
         }
         else {
             currentLink.removeClass("active");
         }
     });
 }
//
