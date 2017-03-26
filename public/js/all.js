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

eval("// Freelancer Theme JavaScript\n\n(function($) {\n    \"use strict\"; // Start of use strict\n\n    // jQuery for page scrolling feature - requires jQuery Easing plugin\n    $('.page-scroll a').bind('click', function(event) {\n        var $anchor = $(this);\n        $('html, body').stop().animate({\n            scrollTop: ($($anchor.attr('href')).offset().top - 50)\n        }, 1250, 'easeInOutExpo');\n        event.preventDefault();\n    });\n\n    // Highlight the top nav as scrolling occurs\n    // $('body').scrollspy({\n    //     target: '.navbar-fixed-top',\n    //     offset: 51\n    // });\n\n    // Closes the Responsive Menu on Menu Item Click\n    $('.navbar-collapse ul li a').click(function(){\n            $('.navbar-toggle:visible').click();\n    });\n\n    // Offset for Main Navigation\n    // $('#mainNav').affix({\n    //     offset: {\n    //         top: 0\n    //     }\n    // })\n\n    var saveSubscriber = function (name, email, token) {\n        $.ajax({\n            url: '/subscribers',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                \"_token\": token\n            }\n        });\n    };\n\n    var sendContactMessage = function (name, email, message, token) {\n        $.ajax({\n            url: '/contact',\n            method: 'POST',\n            data: {\n                name: name,\n                email: email,\n                message: message,\n                \"_token\": token\n            }\n        });\n    };\n\n    $('#saveSubscriberButton').click(function ($e) {\n        $e.preventDefault();\n        var token = $('#subscribeForm').children('input[name=_token]').val();\n        saveSubscriber($('#name').val(), $('#email').val(), token);\n\n        $('#subscribeForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#sendContactMessageButton').click(function ($e) {\n        console.log('sending message');\n        $e.preventDefault();\n        var token = $('#contactForm').children('input[name=_token]').val();\n        sendContactMessage($('#name').val(), $('#email').val(), $('#message').val(), token);\n        $('#contactForm').hide();\n        $('#thank-you').show();\n    });\n\n    $('#saveSubscriberModalButton').click(function ($e) {\n        $e.preventDefault();\n\n        var token = $('#subscribeModalForm').children('input[name=_token]').val();\n        saveSubscriber($('#modal-name').val(), $('#modal-email').val(), token);\n\n        $('#subscribeModal').modal('hide');\n    });\n\n    $('#no-thanks').click(function ($e) {\n        $('#subscribeModal').modal('hide');\n    });\n\n\n    function createCookie(name,value,hours) {\n        var expires = \"\";\n        if (hours) {\n            var date = new Date();\n            date.setTime(date.getTime() + (hours*60*60*1000));\n            expires = \"; expires=\" + date.toUTCString();\n        }\n        document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n\n    function readCookie(name) {\n        var nameEQ = name + \"=\";\n        var ca = document.cookie.split(';');\n        for(var i=0;i < ca.length;i++) {\n            var c = ca[i];\n            while (c.charAt(0)==' ') c = c.substring(1,c.length);\n            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\n        }\n        return null;\n    }\n\n    function eraseCookie(name) {\n        createCookie(name,\"\",-1);\n    }\n\n    if (readCookie('chronspire') !== 'shownSignup') {\n        $('#subscribeModal').modal();\n        createCookie('chronspire', 'shownSignup', 1);\n    }\n\n    // Floating label headings for the contact form\n    $(function() {\n        $(\"body\").on(\"input propertychange\", \".floating-label-form-group\", function(e) {\n            $(this).toggleClass(\"floating-label-form-group-with-value\", !!$(e.target).val());\n        }).on(\"focus\", \".floating-label-form-group\", function() {\n            $(this).addClass(\"floating-label-form-group-with-focus\");\n        }).on(\"blur\", \".floating-label-form-group\", function() {\n            $(this).removeClass(\"floating-label-form-group-with-focus\");\n        });\n\n    });\n\n})(jQuery); // End of use strict\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2ZyZWVsYW5jZXIuanM/MWZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmVlbGFuY2VyIFRoZW1lIEphdmFTY3JpcHRcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCcucGFnZS1zY3JvbGwgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gNTApXG4gICAgICAgIH0sIDEyNTAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIHRvcCBuYXYgYXMgc2Nyb2xsaW5nIG9jY3Vyc1xuICAgIC8vICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgIC8vICAgICB0YXJnZXQ6ICcubmF2YmFyLWZpeGVkLXRvcCcsXG4gICAgLy8gICAgIG9mZnNldDogNTFcbiAgICAvLyB9KTtcblxuICAgIC8vIENsb3NlcyB0aGUgUmVzcG9uc2l2ZSBNZW51IG9uIE1lbnUgSXRlbSBDbGlja1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZTp2aXNpYmxlJykuY2xpY2soKTtcbiAgICB9KTtcblxuICAgIC8vIE9mZnNldCBmb3IgTWFpbiBOYXZpZ2F0aW9uXG4gICAgLy8gJCgnI21haW5OYXYnKS5hZmZpeCh7XG4gICAgLy8gICAgIG9mZnNldDoge1xuICAgIC8vICAgICAgICAgdG9wOiAwXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuXG4gICAgdmFyIHNhdmVTdWJzY3JpYmVyID0gZnVuY3Rpb24gKG5hbWUsIGVtYWlsLCB0b2tlbikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3N1YnNjcmliZXJzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIFwiX3Rva2VuXCI6IHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgc2VuZENvbnRhY3RNZXNzYWdlID0gZnVuY3Rpb24gKG5hbWUsIGVtYWlsLCBtZXNzYWdlLCB0b2tlbikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2NvbnRhY3QnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBcIl90b2tlblwiOiB0b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJCgnI3NhdmVTdWJzY3JpYmVyQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCRlKSB7XG4gICAgICAgICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB0b2tlbiA9ICQoJyNzdWJzY3JpYmVGb3JtJykuY2hpbGRyZW4oJ2lucHV0W25hbWU9X3Rva2VuXScpLnZhbCgpO1xuICAgICAgICBzYXZlU3Vic2NyaWJlcigkKCcjbmFtZScpLnZhbCgpLCAkKCcjZW1haWwnKS52YWwoKSwgdG9rZW4pO1xuXG4gICAgICAgICQoJyNzdWJzY3JpYmVGb3JtJykuaGlkZSgpO1xuICAgICAgICAkKCcjdGhhbmsteW91Jykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgJCgnI3NlbmRDb250YWN0TWVzc2FnZUJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgkZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBtZXNzYWdlJyk7XG4gICAgICAgICRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB0b2tlbiA9ICQoJyNjb250YWN0Rm9ybScpLmNoaWxkcmVuKCdpbnB1dFtuYW1lPV90b2tlbl0nKS52YWwoKTtcbiAgICAgICAgc2VuZENvbnRhY3RNZXNzYWdlKCQoJyNuYW1lJykudmFsKCksICQoJyNlbWFpbCcpLnZhbCgpLCAkKCcjbWVzc2FnZScpLnZhbCgpLCB0b2tlbik7XG4gICAgICAgICQoJyNjb250YWN0Rm9ybScpLmhpZGUoKTtcbiAgICAgICAgJCgnI3RoYW5rLXlvdScpLnNob3coKTtcbiAgICB9KTtcblxuICAgICQoJyNzYXZlU3Vic2NyaWJlck1vZGFsQnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCRlKSB7XG4gICAgICAgICRlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIHRva2VuID0gJCgnI3N1YnNjcmliZU1vZGFsRm9ybScpLmNoaWxkcmVuKCdpbnB1dFtuYW1lPV90b2tlbl0nKS52YWwoKTtcbiAgICAgICAgc2F2ZVN1YnNjcmliZXIoJCgnI21vZGFsLW5hbWUnKS52YWwoKSwgJCgnI21vZGFsLWVtYWlsJykudmFsKCksIHRva2VuKTtcblxuICAgICAgICAkKCcjc3Vic2NyaWJlTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgJCgnI25vLXRoYW5rcycpLmNsaWNrKGZ1bmN0aW9uICgkZSkge1xuICAgICAgICAkKCcjc3Vic2NyaWJlTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZSx2YWx1ZSxob3Vycykge1xuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiXCI7XG4gICAgICAgIGlmIChob3Vycykge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzKjYwKjYwKjEwMDApKTtcbiAgICAgICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lKSB7XG4gICAgICAgIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICBmb3IodmFyIGk9MDtpIDwgY2EubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVyYXNlQ29va2llKG5hbWUpIHtcbiAgICAgICAgY3JlYXRlQ29va2llKG5hbWUsXCJcIiwtMSk7XG4gICAgfVxuXG4gICAgaWYgKHJlYWRDb29raWUoJ2Nocm9uc3BpcmUnKSAhPT0gJ3Nob3duU2lnbnVwJykge1xuICAgICAgICAkKCcjc3Vic2NyaWJlTW9kYWwnKS5tb2RhbCgpO1xuICAgICAgICBjcmVhdGVDb29raWUoJ2Nocm9uc3BpcmUnLCAnc2hvd25TaWdudXAnLCAxKTtcbiAgICB9XG5cbiAgICAvLyBGbG9hdGluZyBsYWJlbCBoZWFkaW5ncyBmb3IgdGhlIGNvbnRhY3QgZm9ybVxuICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJib2R5XCIpLm9uKFwiaW5wdXQgcHJvcGVydHljaGFuZ2VcIiwgXCIuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLXZhbHVlXCIsICEhJChlLnRhcmdldCkudmFsKCkpO1xuICAgICAgICB9KS5vbihcImZvY3VzXCIsIFwiLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzXCIpO1xuICAgICAgICB9KS5vbihcImJsdXJcIiwgXCIuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IC8vIEVuZCBvZiB1c2Ugc3RyaWN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9mcmVlbGFuY2VyLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);