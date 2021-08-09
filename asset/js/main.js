/**
 * Template Name: MyResume - v2.1.0
 * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
    ("use strict");

    // Toggle dark image in light theme
    $(document).ready(function () {
        $("#hero-img-dark").toggle();
        $("#profile-img-dark").toggle();
    });

    // Change to dark theme or light theme
    $("#btn-change-theme").click(function () {
        document.body.classList.toggle("dark-theme");
        if ($("#btn-change-theme").hasClass("bx-sun")) {
            $("#btn-change-theme").removeClass("bx-sun");
            $("#btn-change-theme").addClass("bx-moon");
        } else {
            $("#btn-change-theme").removeClass("bx-moon");
            $("#btn-change-theme").addClass("bx-sun");
        }

        $("#hero-img-dark").toggle();
        $("#hero-img").toggle();
        $("#profile-img-dark").toggle();
        $("#profile-img").toggle();
    });

    // Preloader
    $(window).on("load", function () {
        if ($("#preloader").length) {
            $("#preloader")
                .delay(5)
                .fadeOut("slow", function () {
                    $(this).remove();
                });
        }
    });

    // Hero typed
    if ($(".typed").length) {
        var typed_strings = $(".typed").data("typed-items");
        typed_strings = typed_strings.split(",");
        new Typed(".typed", {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });
    }

    $(document).ready(function () {
        $(".nav-link").click(function () {
            $(".navbar div").removeClass("show");
        });
        $(".single").click(function () {
            $(".navbar div").removeClass("show");
        });
    });

    // Close Navbar when clicked outside
    $(window).on("click", function (event) {
        // element over which click was made
        var clickOver = $(event.target);
        if (
            $(".navbar .navbar-toggler").attr("aria-expanded") == "true" &&
            clickOver.closest(".navbar").length === 0
        ) {
            // Click on navbar toggler button
            $('button[aria-expanded="true"]').click();
        }
    });
    
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on("click", ".navbar a, .scrollto", function (e) {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top;

                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".container").length) {
                    $(".navbar .active").removeClass("active");
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    1500,
                    "easeInOutExpo"
                );
            }
        }
    });

    $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
        );
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($("body").hasClass("mobile-nav-active")) {
                $("body").removeClass("mobile-nav-active");
                $(".mobile-nav-toggle i").toggleClass(
                    "icofont-navigation-menu icofont-close"
                );
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".nav-item, #mobile-nav");

    $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop() + 300;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find("li").removeClass("active");
                }
                main_nav
                    .find('a[href="#' + $(this).attr("id") + '"]')
                    .parent("li")
                    .addClass("active");
            }
            if (cur_pos < 200) {
                $(".nav-menu ul:first li:first").addClass("active");
            }
        });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // jQuery counterUp
    // $('[data-toggle="counter-up"]').counterUp({
    //   delay: 10,
    //   time: 1000
    // });

    // Skills section
    // $('.skills-content').waypoint(function() {
    //   $('.progress .progress-bar').each(function() {
    //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //   });
    // }, {
    //   offset: '80%'
    // });

    // Init AOS
    // function aos_init() {
    //     AOS.init({
    //         duration: 1000,
    //         once: true,
    //     });
    // }

    $(document).ready(function () {
        $(".filter-button").click(function () {
            var value = $(this).attr("data-filter");

            if (value == "*") {
                $(".portfolio-item").show("1000");
            } else {
                $(".portfolio-item").not("." + value).hide("3000");
                $(".portfolio-item").filter("." + value).show("3000");
            }
        });
    });

    // Porfolio isotope and filter
    $(window).on("load", function () {
        // var portfolioIsotope = $(".portfolio-container").isotope({
        //     itemSelector: ".portfolio-item",
        // });

        $("#portfolio-flters li").on("click", function () {
            $("#portfolio-flters li").removeClass("filter-active");
            $(this).addClass("filter-active");

        //     portfolioIsotope.isotope({
        //         filter: $(this).data("filter"),
        //     });
            // aos_init();
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(".venobox").venobox({
            share: false,
        });

        // Initiate aos_init() function
        // aos_init();
    });

    // Testimonials carousel (uses the Owl Carousel library)
    // $(".testimonials-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     items: 1,
    // });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
    });
})(jQuery);
