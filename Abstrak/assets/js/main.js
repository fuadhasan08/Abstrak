;
(function($) {
    'use strict'

    jQuery(document).ready(function() {
        marqueImage();
        tiltAnimation();
        switchToggle();
        fetchDark();
        stickyHeader();
    })

    function marqueImage() {
        $('.shape-3').each(function() {
            var t = 0;
            var i = 1;
            var $this = $(this);
            setInterval(function() {
                t += i;
                $this.css('background-position-x', -t + 'px');
            }, 10);
        });
    }

    function tiltAnimation() {
        var _tiltAnimation = $('.paralax-image');
        if (_tiltAnimation.length) {
            _tiltAnimation.tilt({
                max: 12,
                speed: 1e3,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                transition: !1,
                perspective: 1e3,
                scale: 1
            })
        }
    }

    function fetchDark() {
        localStorage.getItem('dark-mode') ? $('body').addClass('active-dark-mode') : $('body').removeClass('active-dark-mode');
    }

    function switchToggle() {
        $('.my_switcher').on('click', function(event) {
            event.preventDefault();

            let setColor = $('.setColor');


            if (setColor.hasClass('active')) {
                setColor.removeClass('active');
                setColor.html("<i class=\"far fa-moon\"></i>");
            } else {
                setColor.addClass('active');
                setColor.html("<i class=\"far fa-lightbulb\"></i>");
            }

            $('body').toggleClass('active-dark-mode');

            localStorage.setItem('dark-mode', 'true');

            if (!$('body').hasClass('active-dark-mode')) {
                localStorage.removeItem('dark-mode');
            }
        });
    }

    function stickyHeader() {
        $(window).on('scroll', function() {
            const scrollTop = $(window).scrollTop(),
                siteHeader = $('.header');
            if (scrollTop < 200) {
                siteHeader.removeClass('sticky');
            } else {
                siteHeader.addClass('sticky');
            }
        })
    }

})(jQuery)