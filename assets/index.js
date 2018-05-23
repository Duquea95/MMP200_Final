$(function(){
    $menu = $("div.burger");
    $nav = $("nav");

    // Get the navbar
    $(window).scroll(function(){
        if ($(window).scrollTop() > 150){
            $('nav').addClass('affix');
        }
        else{
            $('nav').removeClass('affix');
        }
    });

    $menu.on('click',function(){
        if($menu.hasClass("change")){
            $menu.removeClass("change");
            closeNav($nav);
        }
        else{
            console.log("Hello world!");
            openNav($nav);
            $menu.addClass("change");
        }

        /* Open */
        function openNav(){
            console.log("Open Nav");
            $nav.css("height", "100%");
            $(".bar").css("background-color", "rgb(255,255,255)");
            $('ul.main-nav').css("display", "block");
            $nav.css("display", "block");
        }
    });

    /* Close */
    function closeNav() {
        $($nav).css("height", "10%");
        $('ul.main-nav').css("display", "none");
    }

});
