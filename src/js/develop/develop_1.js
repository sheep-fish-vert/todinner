
/* header show/hide form */

    function headerShowHideForm(){

        $(document).on('click', '.header-button>.button:not(.active)', function(e){

            e.preventDefault();

            $(this).addClass('active');

            $('.header-popup').stop().slideDown(300);

        });

        $(document).on('click','.header-close-popup', function(){

            $('.header-button>.button').removeClass('active');

            $('.header-popup').stop().slideUp(300);

        });

    }

/* header show/hide form */


$(document).ready(function(){

    headerShowHideForm();

});

$(window).load(function(){

});

$(window).resize(function(){

});