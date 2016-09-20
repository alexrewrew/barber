$(document).ready(function () {

    $('.barber-select').click(function(){
        var type = $(this).data('barber');
        var img = $(this).data('img');

        $('.barber-select').removeClass('text-green');
        $(this).addClass('text-green');

        if ( type == 'basic')
        {
            $('h2').html('barboss basic');
            $('#barbor-premium').hide();
            $('#barbor-basic').show();
        }else{
            $('h2').html('barboss premium');
            $('#barbor-premium').show();
            $('#barbor-basic').hide();
        }

        $('.parallax-slider').attr('src', img);


        $('.language-list').toggleClass('visible');
    });

});

