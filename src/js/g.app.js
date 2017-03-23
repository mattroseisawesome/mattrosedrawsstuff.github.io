(function () {
    "use strict";
    /*
    var $nav = $("#document-top nav");
    $nav.scrollspy({
        min: $nav.offset().top,
        onEnter: function(element, position) {
            $nav.addClass("head__nav--fixed");
        },
        onLeave: function(element, position){
            $nav.removeClass("head__nav--fixed");
        }
    });
    */

    
    $("#hamburger-menu").on("click tap", function () {
        $("#site-nav").toggleClass("head__nav-container--open");
        $("#content").click(function () {
            $("#site-nav").removeClass("head__nav-container--open");
        });
    });

    
    var offset = 50, duration = 750;
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $("#back-to-top").fadeIn(duration);
            $("#document-top").addClass("sticky");
        } else {
            $("#back-to-top").fadeOut(duration);
            $("#document-top").removeClass("sticky");
        }
    });
    $("#back-to-top").click(function (event) {
        event.preventDefault();
        $("html,body").animate({scrollTop: 0}, duration);
        return false;
 
    });
}());