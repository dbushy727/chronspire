/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("// Freelancer Theme JavaScript\n\n(function($) {\n    \"use strict\"; // Start of use strict\n\n    // jQuery for page scrolling feature - requires jQuery Easing plugin\n    $('.page-scroll a').bind('click', function(event) {\n        var $anchor = $(this);\n        $('html, body').stop().animate({\n            scrollTop: ($($anchor.attr('href')).offset().top - 120)\n        }, 1250, 'easeInOutExpo');\n        event.preventDefault();\n    });\n\n    // Highlight the top nav as scrolling occurs\n    $('body').scrollspy({\n        target: '.navbar-fixed-top',\n        offset: 121\n    });\n\n    // Closes the Responsive Menu on Menu Item Click\n    $('.navbar-collapse ul li a').click(function(){\n            $('.navbar-toggle:visible').click();\n    });\n\n    // Offset for Main Navigation\n    // $('#mainNav').affix({\n    //     offset: {\n    //         top: 0\n    //     }\n    // })\n\n    var saveSubscriber = function (name, email, token) {\n        $.ajax({\n            url: '/subscribers',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                \"_token\": token\n            }\n        });\n    };\n\n    var sendContactMessage = function (name, email, message, token) {\n        $.ajax({\n            url: '/contact',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                message: message,\n                \"_token\": token\n            }\n        });\n    };\n\n    $('#saveSubscriberButton').click(function ($e) {\n        $e.preventDefault();\n        var token = $('#subscribeForm').children('input[name=_token]').val();\n        saveSubscriber($('#name').val(), $('#email').val(), token);\n\n        $('#subscribeForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#sendContactMessageButton').click(function ($e) {\n        console.log('sending message');\n        $e.preventDefault();\n        var token = $('#contactForm').children('input[name=_token]').val();\n        sendContactMessage($('#name').val(), $('#email').val(), $('#message').val(), token);\n        $('#contactForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#saveSubscriberModalButton').click(function ($e) {\n        $e.preventDefault();\n\n        var token = $('#subscribeModalForm').children('input[name=_token]').val();\n        saveSubscriber($('#modal-name').val(), $('#modal-email').val(), token);\n\n        $('#subscribeModal').modal('hide');\n    });\n\n    $('#no-thanks').click(function ($e) {\n        $('#subscribeModal').modal('hide');\n    });\n\n\n    function createCookie(name,value,hours) {\n        var expires = \"\";\n        if (hours) {\n            var date = new Date();\n            date.setTime(date.getTime() + (hours*60*60*1000));\n            expires = \"; expires=\" + date.toUTCString();\n        }\n        document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n\n    function readCookie(name) {\n        var nameEQ = name + \"=\";\n        var ca = document.cookie.split(';');\n        for(var i=0;i < ca.length;i++) {\n            var c = ca[i];\n            while (c.charAt(0)==' ') c = c.substring(1,c.length);\n            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\n        }\n        return null;\n    }\n\n    function eraseCookie(name) {\n        createCookie(name,\"\",-1);\n    }\n\n    if (readCookie('chronspire') !== 'shownSignup') {\n        $('#subscribeModal').modal();\n        createCookie('chronspire', 'shownSignup', 1);\n    }\n\n    // Floating label headings for the contact form\n    $(function() {\n        $(\"body\").on(\"input propertychange\", \".floating-label-form-group\", function(e) {\n            $(this).toggleClass(\"floating-label-form-group-with-value\", !!$(e.target).val());\n        }).on(\"focus\", \".floating-label-form-group\", function() {\n            $(this).addClass(\"floating-label-form-group-with-focus\");\n        }).on(\"blur\", \".floating-label-form-group\", function() {\n            $(this).removeClass(\"floating-label-form-group-with-focus\");\n        });\n\n    });\n\n    $('#product .supporting-image').click(function ($e) {\n        $e.preventDefault();\n        var imageSrc = $(this).find('img').attr('src');\n        $('#showSupportingImageModal img').attr('src', imageSrc);\n        $('#showSupportingImageModal').modal();\n    });\n\n})(jQuery); // End of use strict\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZyZWVsYW5jZXIuanM/MWZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmVlbGFuY2VyIFRoZW1lIEphdmFTY3JpcHRcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCcucGFnZS1zY3JvbGwgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMTIwKVxuICAgICAgICB9LCAxMjUwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSB0b3AgbmF2IGFzIHNjcm9sbGluZyBvY2N1cnNcbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KHtcbiAgICAgICAgdGFyZ2V0OiAnLm5hdmJhci1maXhlZC10b3AnLFxuICAgICAgICBvZmZzZXQ6IDEyMVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2VzIHRoZSBSZXNwb25zaXZlIE1lbnUgb24gTWVudSBJdGVtIENsaWNrXG4gICAgJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlOnZpc2libGUnKS5jbGljaygpO1xuICAgIH0pO1xuXG4gICAgLy8gT2Zmc2V0IGZvciBNYWluIE5hdmlnYXRpb25cbiAgICAvLyAkKCcjbWFpbk5hdicpLmFmZml4KHtcbiAgICAvLyAgICAgb2Zmc2V0OiB7XG4gICAgLy8gICAgICAgICB0b3A6IDBcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG5cbiAgICB2YXIgc2F2ZVN1YnNjcmliZXIgPSBmdW5jdGlvbiAobmFtZSwgZW1haWwsIHRva2VuKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvc3Vic2NyaWJlcnMnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgXCJfdG9rZW5cIjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBzZW5kQ29udGFjdE1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSwgZW1haWwsIG1lc3NhZ2UsIHRva2VuKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvY29udGFjdCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIFwiX3Rva2VuXCI6IHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcjc2F2ZVN1YnNjcmliZXJCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRva2VuID0gJCgnI3N1YnNjcmliZUZvcm0nKS5jaGlsZHJlbignaW5wdXRbbmFtZT1fdG9rZW5dJykudmFsKCk7XG4gICAgICAgIHNhdmVTdWJzY3JpYmVyKCQoJyNuYW1lJykudmFsKCksICQoJyNlbWFpbCcpLnZhbCgpLCB0b2tlbik7XG5cbiAgICAgICAgJCgnI3N1YnNjcmliZUZvcm0nKS5oaWRlKCk7XG4gICAgICAgICQoJyN0aGFuay15b3UnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2VuZENvbnRhY3RNZXNzYWdlQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIG1lc3NhZ2UnKTtcbiAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRva2VuID0gJCgnI2NvbnRhY3RGb3JtJykuY2hpbGRyZW4oJ2lucHV0W25hbWU9X3Rva2VuXScpLnZhbCgpO1xuICAgICAgICBzZW5kQ29udGFjdE1lc3NhZ2UoJCgnI25hbWUnKS52YWwoKSwgJCgnI2VtYWlsJykudmFsKCksICQoJyNtZXNzYWdlJykudmFsKCksIHRva2VuKTtcbiAgICAgICAgJCgnI2NvbnRhY3RGb3JtJykuaGlkZSgpO1xuICAgICAgICAkKCcjdGhhbmsteW91Jykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgJCgnI3NhdmVTdWJzY3JpYmVyTW9kYWxCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgdG9rZW4gPSAkKCcjc3Vic2NyaWJlTW9kYWxGb3JtJykuY2hpbGRyZW4oJ2lucHV0W25hbWU9X3Rva2VuXScpLnZhbCgpO1xuICAgICAgICBzYXZlU3Vic2NyaWJlcigkKCcjbW9kYWwtbmFtZScpLnZhbCgpLCAkKCcjbW9kYWwtZW1haWwnKS52YWwoKSwgdG9rZW4pO1xuXG4gICAgICAgICQoJyNzdWJzY3JpYmVNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjbm8tdGhhbmtzJykuY2xpY2soZnVuY3Rpb24gKCRlKSB7XG4gICAgICAgICQoJyNzdWJzY3JpYmVNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lLHZhbHVlLGhvdXJzKSB7XG4gICAgICAgIHZhciBleHBpcmVzID0gXCJcIjtcbiAgICAgICAgaWYgKGhvdXJzKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoaG91cnMqNjAqNjAqMTAwMCkpO1xuICAgICAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkQ29va2llKG5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc2VDb29raWUobmFtZSkge1xuICAgICAgICBjcmVhdGVDb29raWUobmFtZSxcIlwiLC0xKTtcbiAgICB9XG5cbiAgICBpZiAocmVhZENvb2tpZSgnY2hyb25zcGlyZScpICE9PSAnc2hvd25TaWdudXAnKSB7XG4gICAgICAgICQoJyNzdWJzY3JpYmVNb2RhbCcpLm1vZGFsKCk7XG4gICAgICAgIGNyZWF0ZUNvb2tpZSgnY2hyb25zcGlyZScsICdzaG93blNpZ251cCcsIDEpO1xuICAgIH1cblxuICAgIC8vIEZsb2F0aW5nIGxhYmVsIGhlYWRpbmdzIGZvciB0aGUgY29udGFjdCBmb3JtXG4gICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJpbnB1dCBwcm9wZXJ0eWNoYW5nZVwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtdmFsdWVcIiwgISEkKGUudGFyZ2V0KS52YWwoKSk7XG4gICAgICAgIH0pLm9uKFwiZm9jdXNcIiwgXCIuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gICAgICAgIH0pLm9uKFwiYmx1clwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1c1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgICQoJyNwcm9kdWN0IC5zdXBwb3J0aW5nLWltYWdlJykuY2xpY2soZnVuY3Rpb24gKCRlKSB7XG4gICAgICAgICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpbWFnZVNyYyA9ICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjJyk7XG4gICAgICAgICQoJyNzaG93U3VwcG9ydGluZ0ltYWdlTW9kYWwgaW1nJykuYXR0cignc3JjJywgaW1hZ2VTcmMpO1xuICAgICAgICAkKCcjc2hvd1N1cHBvcnRpbmdJbWFnZU1vZGFsJykubW9kYWwoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2ZyZWVsYW5jZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);