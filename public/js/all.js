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

eval("// Freelancer Theme JavaScript\n\n(function($) {\n    \"use strict\"; // Start of use strict\n\n    // jQuery for page scrolling feature - requires jQuery Easing plugin\n    $('.page-scroll a').bind('click', function(event) {\n        var $anchor = $(this);\n        $('html, body').stop().animate({\n            scrollTop: ($($anchor.attr('href')).offset().top - 120)\n        }, 1250, 'easeInOutExpo');\n        event.preventDefault();\n    });\n\n    // Highlight the top nav as scrolling occurs\n    $('body').scrollspy({\n        target: '.navbar-fixed-top',\n        offset: 121\n    });\n\n    // Closes the Responsive Menu on Menu Item Click\n    $('.navbar-collapse ul li a').click(function(){\n            $('.navbar-toggle:visible').click();\n    });\n\n    // Offset for Main Navigation\n    // $('#mainNav').affix({\n    //     offset: {\n    //         top: 0\n    //     }\n    // })\n\n    var saveSubscriber = function (name, email, token) {\n        $.ajax({\n            url: '/subscribers',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                \"_token\": token\n            }\n        });\n    };\n\n    var sendContactMessage = function (name, email, message, subscribe, token) {\n        $.ajax({\n            url: '/contact',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                message: message,\n                subscribe: subscribe,\n                \"_token\": token\n            }\n        });\n    };\n\n    $('#saveSubscriberButton').click(function ($e) {\n        $e.preventDefault();\n        var token = $('#subscribeForm').children('input[name=_token]').val();\n        saveSubscriber($('#name').val(), $('#email').val(), token);\n\n        $('#subscribeForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#sendContactMessageButton').click(function ($e) {\n        console.log('sending message');\n        $e.preventDefault();\n        var token = $('#contactForm').children('input[name=_token]').val();\n        sendContactMessage($('#name').val(), $('#email').val(), $('#message').val(), $('#subscribe').prop('checked'), token);\n        $('#contactForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#saveSubscriberModalButton').click(function ($e) {\n        $e.preventDefault();\n\n        var token = $('#subscribeModalForm').children('input[name=_token]').val();\n        saveSubscriber($('#modal-name').val(), $('#modal-email').val(), token);\n\n        $('#subscribeModal').modal('hide');\n    });\n\n    $('#no-thanks').click(function ($e) {\n        $('#subscribeModal').modal('hide');\n    });\n\n\n    function createCookie(name,value,hours) {\n        var expires = \"\";\n        if (hours) {\n            var date = new Date();\n            date.setTime(date.getTime() + (hours*60*60*1000));\n            expires = \"; expires=\" + date.toUTCString();\n        }\n        document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n\n    function readCookie(name) {\n        var nameEQ = name + \"=\";\n        var ca = document.cookie.split(';');\n        for(var i=0;i < ca.length;i++) {\n            var c = ca[i];\n            while (c.charAt(0)==' ') c = c.substring(1,c.length);\n            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\n        }\n        return null;\n    }\n\n    function eraseCookie(name) {\n        createCookie(name,\"\",-1);\n    }\n\n    if (readCookie('chronspire') !== 'shownSignup') {\n        $('#subscribeModal').modal();\n        createCookie('chronspire', 'shownSignup', 1);\n    }\n\n    // Floating label headings for the contact form\n    $(function() {\n        $(\"body\").on(\"input propertychange\", \".floating-label-form-group\", function(e) {\n            $(this).toggleClass(\"floating-label-form-group-with-value\", !!$(e.target).val());\n        }).on(\"focus\", \".floating-label-form-group\", function() {\n            $(this).addClass(\"floating-label-form-group-with-focus\");\n        }).on(\"blur\", \".floating-label-form-group\", function() {\n            $(this).removeClass(\"floating-label-form-group-with-focus\");\n        });\n\n    });\n\n    $('#product .supporting-image').click(function ($e) {\n        $e.preventDefault();\n        var imageSrc = $(this).find('img').attr('src');\n        $('#showSupportingImageModal img').attr('src', imageSrc);\n        $('#showSupportingImageModal').modal();\n    });\n\n})(jQuery); // End of use strict\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZyZWVsYW5jZXIuanM/MWZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmVlbGFuY2VyIFRoZW1lIEphdmFTY3JpcHRcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCcucGFnZS1zY3JvbGwgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gMTIwKVxuICAgICAgICB9LCAxMjUwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSB0b3AgbmF2IGFzIHNjcm9sbGluZyBvY2N1cnNcbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KHtcbiAgICAgICAgdGFyZ2V0OiAnLm5hdmJhci1maXhlZC10b3AnLFxuICAgICAgICBvZmZzZXQ6IDEyMVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2VzIHRoZSBSZXNwb25zaXZlIE1lbnUgb24gTWVudSBJdGVtIENsaWNrXG4gICAgJCgnLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy5uYXZiYXItdG9nZ2xlOnZpc2libGUnKS5jbGljaygpO1xuICAgIH0pO1xuXG4gICAgLy8gT2Zmc2V0IGZvciBNYWluIE5hdmlnYXRpb25cbiAgICAvLyAkKCcjbWFpbk5hdicpLmFmZml4KHtcbiAgICAvLyAgICAgb2Zmc2V0OiB7XG4gICAgLy8gICAgICAgICB0b3A6IDBcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG5cbiAgICB2YXIgc2F2ZVN1YnNjcmliZXIgPSBmdW5jdGlvbiAobmFtZSwgZW1haWwsIHRva2VuKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvc3Vic2NyaWJlcnMnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgXCJfdG9rZW5cIjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBzZW5kQ29udGFjdE1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSwgZW1haWwsIG1lc3NhZ2UsIHN1YnNjcmliZSwgdG9rZW4pIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9jb250YWN0JyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgXCJfdG9rZW5cIjogdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoJyNzYXZlU3Vic2NyaWJlckJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgkZSkge1xuICAgICAgICAkZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdG9rZW4gPSAkKCcjc3Vic2NyaWJlRm9ybScpLmNoaWxkcmVuKCdpbnB1dFtuYW1lPV90b2tlbl0nKS52YWwoKTtcbiAgICAgICAgc2F2ZVN1YnNjcmliZXIoJCgnI25hbWUnKS52YWwoKSwgJCgnI2VtYWlsJykudmFsKCksIHRva2VuKTtcblxuICAgICAgICAkKCcjc3Vic2NyaWJlRm9ybScpLmhpZGUoKTtcbiAgICAgICAgJCgnI3RoYW5rLXlvdScpLnNob3coKTtcbiAgICB9KTtcblxuICAgICQoJyNzZW5kQ29udGFjdE1lc3NhZ2VCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgbWVzc2FnZScpO1xuICAgICAgICAkZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdG9rZW4gPSAkKCcjY29udGFjdEZvcm0nKS5jaGlsZHJlbignaW5wdXRbbmFtZT1fdG9rZW5dJykudmFsKCk7XG4gICAgICAgIHNlbmRDb250YWN0TWVzc2FnZSgkKCcjbmFtZScpLnZhbCgpLCAkKCcjZW1haWwnKS52YWwoKSwgJCgnI21lc3NhZ2UnKS52YWwoKSwgJCgnI3N1YnNjcmliZScpLnByb3AoJ2NoZWNrZWQnKSwgdG9rZW4pO1xuICAgICAgICAkKCcjY29udGFjdEZvcm0nKS5oaWRlKCk7XG4gICAgICAgICQoJyN0aGFuay15b3UnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2F2ZVN1YnNjcmliZXJNb2RhbEJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgkZSkge1xuICAgICAgICAkZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciB0b2tlbiA9ICQoJyNzdWJzY3JpYmVNb2RhbEZvcm0nKS5jaGlsZHJlbignaW5wdXRbbmFtZT1fdG9rZW5dJykudmFsKCk7XG4gICAgICAgIHNhdmVTdWJzY3JpYmVyKCQoJyNtb2RhbC1uYW1lJykudmFsKCksICQoJyNtb2RhbC1lbWFpbCcpLnZhbCgpLCB0b2tlbik7XG5cbiAgICAgICAgJCgnI3N1YnNjcmliZU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgICQoJyNuby10aGFua3MnKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJCgnI3N1YnNjcmliZU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWUsdmFsdWUsaG91cnMpIHtcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgICAgICBpZiAoaG91cnMpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3Vycyo2MCo2MCoxMDAwKSk7XG4gICAgICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWRDb29raWUobmFtZSkge1xuICAgICAgICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgZm9yKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzZUNvb2tpZShuYW1lKSB7XG4gICAgICAgIGNyZWF0ZUNvb2tpZShuYW1lLFwiXCIsLTEpO1xuICAgIH1cblxuICAgIGlmIChyZWFkQ29va2llKCdjaHJvbnNwaXJlJykgIT09ICdzaG93blNpZ251cCcpIHtcbiAgICAgICAgJCgnI3N1YnNjcmliZU1vZGFsJykubW9kYWwoKTtcbiAgICAgICAgY3JlYXRlQ29va2llKCdjaHJvbnNwaXJlJywgJ3Nob3duU2lnbnVwJywgMSk7XG4gICAgfVxuXG4gICAgLy8gRmxvYXRpbmcgbGFiZWwgaGVhZGluZ3MgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImlucHV0IHByb3BlcnR5Y2hhbmdlXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgICAgICAgfSkub24oXCJmb2N1c1wiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1c1wiKTtcbiAgICAgICAgfSkub24oXCJibHVyXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgJCgnI3Byb2R1Y3QgLnN1cHBvcnRpbmctaW1hZ2UnKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGltYWdlU3JjID0gJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgJCgnI3Nob3dTdXBwb3J0aW5nSW1hZ2VNb2RhbCBpbWcnKS5hdHRyKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgICQoJyNzaG93U3VwcG9ydGluZ0ltYWdlTW9kYWwnKS5tb2RhbCgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvZnJlZWxhbmNlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);