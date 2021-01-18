/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_task/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\ndocument.onselectstart = () => { // cancel selecting of images\r\n    return false; \r\n  };\r\n\r\nconst $items = document.getElementsByClassName(\"carousel__item\")\r\nconst $buttonLeft = document.getElementById(\"button_left\")\r\nconst $buttonRight = document.getElementById(\"button_right\")\r\nconst $carousel = document.getElementsByClassName(\"carousel__center\")\r\n\r\nlet activeIndex = 0\r\n\r\n\r\nconst addClass = (element, index) => element[index].classList.add(\"show\")\r\nconst removeClass = (element, index) => {element[index].classList.remove(\"show\")\r\n}  \r\nconst decrement = () => { \r\n    if (activeIndex != 0) {\r\n        removeClass($items, activeIndex)\r\n        activeIndex -= 1\r\n        addClass($items, activeIndex)\r\n    } else {\r\n        removeClass($items, activeIndex)\r\n        activeIndex = $items.length - 1\r\n        addClass($items, activeIndex)\r\n    }\r\n}\r\n\r\nconst increment = () =>  {\r\n    if (activeIndex != $items.length - 1) {\r\n        removeClass($items, activeIndex)\r\n        activeIndex += 1\r\n        addClass($items, activeIndex)\r\n    } else {\r\n        removeClass($items, activeIndex)\r\n        activeIndex = 0\r\n        addClass($items, activeIndex)\r\n    }\r\n}\r\n\r\nconst mouseMove = (event) => {\r\n    const start = event.clientX\r\n\r\n        $carousel[0].onmouseup = (event) => {\r\n            const end = event.clientX\r\n            \r\n            if (start - (end + 40) > 0) {\r\n                increment()\r\n            } else if (end - (start - 40) > 0 && end - start > 2) {\r\n                decrement()\r\n            }\r\n        }   \r\n}\r\n\r\n\r\n\r\n$buttonLeft.addEventListener('click', decrement)\r\n$buttonRight.addEventListener('click', increment)\r\n$carousel[0].addEventListener('mousedown', mouseMove)\r\n\r\n// -------------------- mobile \r\n\r\nconst touchMove = (event) => {\r\n    const start = event.changedTouches[0].clientX\r\n\r\n    $carousel[0].ontouchend = (event) => {\r\n        const end = event.changedTouches[0].clientX\r\n\r\n        if (start - (end + 40) > 0) {\r\n            increment()\r\n        } else if (end - (start - 40) > 0 && end - start > 2) {\r\n            decrement()\r\n        }\r\n    }\r\n}\r\n\r\n$carousel[0].addEventListener('touchstart', touchMove)\r\n\n\n//# sourceURL=webpack://test_task/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;