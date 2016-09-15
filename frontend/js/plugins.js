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
                src: "frontend/img/jumbo-slider/jumbo1.png"
            }
            , {
                src: "frontend/img/jumbo-slider/jumbo2.jpg"
            }
            , {
                src: "frontend/img/jumbo-slider/jumbo3.jpg"
            }
            , {
                src: "frontend/img/jumbo-slider/jumbo4.jpg"
            }
            , {
                src: "frontend/img/jumbo-slider/jumbo5.jpg"
            }
    ]
    });
});