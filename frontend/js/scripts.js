$(document).ready(function () {
    $('.barber-select').click(function () {
        var type = $(this).data('barber');
        var img = $(this).data('img');
        $('.barber-select').removeClass('text-green');
        $(this).addClass('text-green');
        console.log(type);
        if (type == 'basic') {
            $('#barbos_premium').hide();
            $('#barbor-premium').hide();
            $('#barbos_basic').show();
            $('#barbor-basic').show();
        }
        else {
            $('#barbos_basic').hide();
            $('#barbor-basic').hide();
            $('#barbos_premium').show();
            $('#barbor-premium').show();
        }
        $('.parallax-slider').attr('src', img);
        $('.language-list').toggleClass('visible');
    });
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (!isMobile.any()) {
        $("#jumbo_video").show();
    }
    else {
        $("#jumbo").show();
    }
});
$(window).on('load resize', function () {
    var ww = $(window).width();
    if (ww < 768) {
        $('.portfolio-box').click(function () {
            $('.project-name').css('display', 'none');
            $('.project-name', $(this)).css('display', 'block');
        });
    }
    else {
        /*$('.project-name').css('display', 'block');*/
    }
});