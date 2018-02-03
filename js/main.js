(function () {
    $(window).load(function () {
        $(window).stellar({
            verticalScrolling: true,
            horizontalScrolling: false,
            responsive: true,
            horizontalOffset: 0,
            verticalOffset: 100
        });

        // nav scrollspy
        $("body").scrollspy({
            target: ".navbar",
            offset: 50
        });
    });

    $(document).ready(function () {
        // jquery easing
        $("nav a, .down-arrow a").bind("click", function () {
            $("html, body").stop().animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1500, "easeInOutExpo");
            event.preventDefault();
        });  

        // initialize WOW.js
        new WOW().init();
    });
})();