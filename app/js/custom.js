;(function () {
    $(".page-main-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(".latest-news__content").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(".testimonials-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(document).ready(function () {
        var doc = $(document);

        doc.on('click', '.slider-nav', function (e) {
            if ($(this).hasClass("prev")) {
                $(this).closest(".b-latest-news-slider").find(".owl-prev").trigger("click");
            } else {
                $(this).closest(".b-latest-news-slider").find(".owl-next").trigger("click");
            }
        });

        doc.on('click', '.slider-nav', function (e) {
            if ($(this).hasClass("prev")) {
                $(this).closest(".b-reviews-slider").find(".owl-prev").trigger("click");
            } else {
                $(this).closest(".b-reviews-slider").find(".owl-next").trigger("click");
            }
        });

        /*$(document).on("click", '.accordeon-title', function (e) {
            var this_accordeon = $(this).closest(".accordeon");
            var this_item = $(this).closest('.accordeon-item');
            $(this).find('.plus-icon').toggleClass('active');

            if (this_item.hasClass('active') === true) {
                this_accordeon.find(".accordeon-item__content").stop().slideUp(400);
                this_accordeon.find('.accordeon-item').removeClass('active');
            }
            else {
                this_item.addClass('active');
                this_accordeon.find(".accordeon-item__content").stop().slideUp(400);
                console.log('eth');
                $(this).closest('.accordeon-item').find('.accordeon-item__content').stop().slideDown(400);
            }

            e.preventDefault();
        });*/

    });
})();

