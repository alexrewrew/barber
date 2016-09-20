$(document).ready(function () {

    $('.barber-select').click(function(){
        var type = $(this).data('barber');
        var img = $(this).data('img');

        $('.barber-select').removeClass('text-green');
        $(this).addClass('text-green');

        console.log(type);

        if ( type == 'basic')
        {
            $('#barbos_premium').hide();
            $('#barbor-premium').hide();

            $('#barbos_basic').show();
            $('#barbor-basic').show();
        }else{
            $('#barbos_basic').hide();
            $('#barbor-basic').hide();

            $('#barbos_premium').show();
            $('#barbor-premium').show();
        }

        $('.parallax-slider').attr('src', img);


        $('.language-list').toggleClass('visible');
    });

});

