(function () {
    "use strict";
    $("#hamburger-menu").on("click tap", function () {
        $("#site-nav").toggleClass("head__nav-container--open");
        $("#content").click(function () {
            $("#site-nav").removeClass("head__nav-container--open");
        });
    });

    var offset = 40, duration = 750;

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
        if (scroll >= offset) {
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
