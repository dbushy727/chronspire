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

eval("// Freelancer Theme JavaScript\n\n(function($) {\n    \"use strict\"; // Start of use strict\n\n    // jQuery for page scrolling feature - requires jQuery Easing plugin\n    $('.page-scroll a').bind('click', function(event) {\n        var $anchor = $(this);\n        $('html, body').stop().animate({\n            scrollTop: ($($anchor.attr('href')).offset().top - 50)\n        }, 1250, 'easeInOutExpo');\n        event.preventDefault();\n    });\n\n    // Highlight the top nav as scrolling occurs\n    // $('body').scrollspy({\n    //     target: '.navbar-fixed-top',\n    //     offset: 51\n    // });\n\n    // Closes the Responsive Menu on Menu Item Click\n    $('.navbar-collapse ul li a').click(function(){\n            $('.navbar-toggle:visible').click();\n    });\n\n    // Offset for Main Navigation\n    // $('#mainNav').affix({\n    //     offset: {\n    //         top: 0\n    //     }\n    // })\n\n    var saveSubscriber = function (name, email, token) {\n        $.ajax({\n            url: '/subscribers',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                \"_token\": token\n            }\n        });\n    };\n\n    $('#saveSubscriberButton').click(function ($e) {\n        $e.preventDefault();\n        var token = $('#subscribeForm').children('input[name=_token]').val();\n        saveSubscriber($('#name').val(), $('#email').val(), token);\n\n        $('#subscribeForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#saveSubscriberModalButton').click(function ($e) {\n        $e.preventDefault();\n\n        var token = $('#subscribeModalForm').children('input[name=_token]').val();\n        saveSubscriber($('#modal-name').val(), $('#modal-email').val(), token);\n\n        $('#subscribeModal').modal('hide');\n    });\n\n    $('#no-thanks').click(function ($e) {\n        $('#subscribeModal').modal('hide');\n    });\n\n    // launch subscribe modal\n    // $('#subscribeModal').modal();\n\n    // Floating label headings for the contact form\n    $(function() {\n        $(\"body\").on(\"input propertychange\", \".floating-label-form-group\", function(e) {\n            $(this).toggleClass(\"floating-label-form-group-with-value\", !!$(e.target).val());\n        }).on(\"focus\", \".floating-label-form-group\", function() {\n            $(this).addClass(\"floating-label-form-group-with-focus\");\n        }).on(\"blur\", \".floating-label-form-group\", function() {\n            $(this).removeClass(\"floating-label-form-group-with-focus\");\n        });\n\n    });\n\n})(jQuery); // End of use strict\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZyZWVsYW5jZXIuanM/MWZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmVlbGFuY2VyIFRoZW1lIEphdmFTY3JpcHRcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCcucGFnZS1zY3JvbGwgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gNTApXG4gICAgICAgIH0sIDEyNTAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIHRvcCBuYXYgYXMgc2Nyb2xsaW5nIG9jY3Vyc1xuICAgIC8vICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgIC8vICAgICB0YXJnZXQ6ICcubmF2YmFyLWZpeGVkLXRvcCcsXG4gICAgLy8gICAgIG9mZnNldDogNTFcbiAgICAvLyB9KTtcblxuICAgIC8vIENsb3NlcyB0aGUgUmVzcG9uc2l2ZSBNZW51IG9uIE1lbnUgSXRlbSBDbGlja1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZTp2aXNpYmxlJykuY2xpY2soKTtcbiAgICB9KTtcblxuICAgIC8vIE9mZnNldCBmb3IgTWFpbiBOYXZpZ2F0aW9uXG4gICAgLy8gJCgnI21haW5OYXYnKS5hZmZpeCh7XG4gICAgLy8gICAgIG9mZnNldDoge1xuICAgIC8vICAgICAgICAgdG9wOiAwXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuXG4gICAgdmFyIHNhdmVTdWJzY3JpYmVyID0gZnVuY3Rpb24gKG5hbWUsIGVtYWlsLCB0b2tlbikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3N1YnNjcmliZXJzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIFwiX3Rva2VuXCI6IHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcjc2F2ZVN1YnNjcmliZXJCdXR0b24nKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRva2VuID0gJCgnI3N1YnNjcmliZUZvcm0nKS5jaGlsZHJlbignaW5wdXRbbmFtZT1fdG9rZW5dJykudmFsKCk7XG4gICAgICAgIHNhdmVTdWJzY3JpYmVyKCQoJyNuYW1lJykudmFsKCksICQoJyNlbWFpbCcpLnZhbCgpLCB0b2tlbik7XG5cbiAgICAgICAgJCgnI3N1YnNjcmliZUZvcm0nKS5oaWRlKCk7XG4gICAgICAgICQoJyN0aGFuay15b3UnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2F2ZVN1YnNjcmliZXJNb2RhbEJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgkZSkge1xuICAgICAgICAkZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciB0b2tlbiA9ICQoJyNzdWJzY3JpYmVNb2RhbEZvcm0nKS5jaGlsZHJlbignaW5wdXRbbmFtZT1fdG9rZW5dJykudmFsKCk7XG4gICAgICAgIHNhdmVTdWJzY3JpYmVyKCQoJyNtb2RhbC1uYW1lJykudmFsKCksICQoJyNtb2RhbC1lbWFpbCcpLnZhbCgpLCB0b2tlbik7XG5cbiAgICAgICAgJCgnI3N1YnNjcmliZU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgICQoJyNuby10aGFua3MnKS5jbGljayhmdW5jdGlvbiAoJGUpIHtcbiAgICAgICAgJCgnI3N1YnNjcmliZU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICB9KTtcblxuICAgIC8vIGxhdW5jaCBzdWJzY3JpYmUgbW9kYWxcbiAgICAvLyAkKCcjc3Vic2NyaWJlTW9kYWwnKS5tb2RhbCgpO1xuXG4gICAgLy8gRmxvYXRpbmcgbGFiZWwgaGVhZGluZ3MgZm9yIHRoZSBjb250YWN0IGZvcm1cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImlucHV0IHByb3BlcnR5Y2hhbmdlXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgICAgICAgfSkub24oXCJmb2N1c1wiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1c1wiKTtcbiAgICAgICAgfSkub24oXCJibHVyXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvZnJlZWxhbmNlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);