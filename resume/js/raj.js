$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });


    $(window).on('scroll load', function(){
        $('menu').romoveClass('fa-times');
        $('header').removeClass('toggle')
    });

    //smoth scrolling

    $('a[href*="#"]').on('click',function(e){
        

        e.prevenDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
          500,
          'linear'
            
        );
    })
});