$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.tooltip-side-nav').tooltip();

});

$(document).ready(function() {
    $(".fancybox-effects-d").fancybox({
        padding: 0,
        autoSize: true,
        overlayShow: true,
        fitToView: false,
        maxWidth: 940,
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'elastic',
        closeSpeed: 150,
        closeClick: true,
        helpers: {
            overlay: null
        }
    });

});