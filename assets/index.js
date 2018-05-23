$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            $('nav').addClass('affix');
        }
        else{
            $('nav').removeClass('affix');
        }
    });
});
