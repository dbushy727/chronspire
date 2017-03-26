// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 120)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 121
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 0
    //     }
    // })

    var saveSubscriber = function (name, email, token) {
        $.ajax({
            url: '/subscribers',
            method: 'POST',
            data: {
                name: name,
                email: email,
                "_token": token
            }
        });
    };

    var sendContactMessage = function (name, email, message, token) {
        $.ajax({
            url: '/contact',
            method: 'POST',
            data: {
                name: name,
                email: email,
                message: message,
                "_token": token
            }
        });
    };

    $('#saveSubscriberButton').click(function ($e) {
        $e.preventDefault();
        var token = $('#subscribeForm').children('input[name=_token]').val();
        saveSubscriber($('#name').val(), $('#email').val(), token);

        $('#subscribeForm').hide();
        $('#thank-you').show();
    });

    $('#sendContactMessageButton').click(function ($e) {
        console.log('sending message');
        $e.preventDefault();
        var token = $('#contactForm').children('input[name=_token]').val();
        sendContactMessage($('#name').val(), $('#email').val(), $('#message').val(), token);
        $('#contactForm').hide();
        $('#thank-you').show();
    });

    $('#saveSubscriberModalButton').click(function ($e) {
        $e.preventDefault();

        var token = $('#subscribeModalForm').children('input[name=_token]').val();
        saveSubscriber($('#modal-name').val(), $('#modal-email').val(), token);

        $('#subscribeModal').modal('hide');
    });

    $('#no-thanks').click(function ($e) {
        $('#subscribeModal').modal('hide');
    });


    function createCookie(name,value,hours) {
        var expires = "";
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }

    if (readCookie('chronspire') !== 'shownSignup') {
        $('#subscribeModal').modal();
        createCookie('chronspire', 'shownSignup', 1);
    }

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });

    });

    $('#product .supporting-image').click(function ($e) {
        $e.preventDefault();
        var imageSrc = $(this).find('img').attr('src');
        $('#showSupportingImageModal img').attr('src', imageSrc);
        $('#showSupportingImageModal').modal();
    });

})(jQuery); // End of use strict
