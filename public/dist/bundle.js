/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/index.json */ \"./src/json/index.json\");\nvar _json_index_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _json_index_json__WEBPACK_IMPORTED_MODULE_0__, {\"default\": _json_index_json__WEBPACK_IMPORTED_MODULE_0__});\n\n\nwindow.onload = function() {\n  const topicContainer = document.getElementById(\"container\");\n  const descriptionContainer = document.getElementById(\"description\");\n  for (const key in _json_index_json__WEBPACK_IMPORTED_MODULE_0__) {\n    const element = document.createElement(\"h1\");\n    const node = document.createTextNode(key);\n    element.appendChild(node);\n    topicContainer.appendChild(element);\n  }\n  const descriptionArray = Object.values(_json_index_json__WEBPACK_IMPORTED_MODULE_0__);\n  const descriptionElement = document.createElement(\"h1\");\n  const descriptionNode = document.createTextNode(descriptionArray[0]);\n  descriptionElement.appendChild(descriptionNode);\n  descriptionContainer.appendChild(descriptionElement);\n\n  const topicText = document.getElementById(\"container\").querySelectorAll(\"h1\");\n  const descriptionText = document.getElementById(\"description\").querySelectorAll(\"h1\");\n  const time = document.getElementById(\"container\").querySelectorAll(\"h2\");\n\n  topicText[0].style.background = \"#1f57a4\";\n  topicText[0].style.color = \"#fff\";\n  topicText[0].style.borderTop = \"1px solid #1f57a4\";\n\n  let count = 1;\n  let min = 1, sec = 30;\n  const timerInterval = setInterval(() => {\n    sec = sec - 1;\n    if(sec < 10) {\n      sec = `${0}${sec}`;\n    }\n    if(sec === \"00\" && min !== 0)\n    {\n      min = 0;\n      sec = 60;\n    }\n    if (min === 0 && sec === \"00\")\n    {\n      min = 1;\n      sec = 30;\n    }\n    time[0].innerHTML = min + \":\" + sec;\n  }, 1000);\n\n  const interval = setInterval(() => {\n    if(count === topicText.length) {\n      clearInterval(interval);\n      clearInterval(timerInterval);\n    } else {\n      let previous = count - 1;\n      topicText[previous].style.background = \"#fff\";\n      topicText[previous].style.color = \"#1f57a4\";\n      topicText[count].style.background = \"#1f57a4\";\n      topicText[count].style.color = \"#fff\";\n      descriptionText[0].innerHTML = descriptionArray[count];\n      count++;\n    }\n  }, 90000);\n};\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/json/index.json":
/*!*****************************!*\
  !*** ./src/json/index.json ***!
  \*****************************/
/*! exports provided: Topic One, Topic Two, Topic Three, Topic Four, Topic Five, Topic Six, Topic Seven, Topic Eight, Topic Nine, default */
/***/ (function(module) {

eval("module.exports = {\"Topic One\":\"This is topic one!\",\"Topic Two\":\"This is topic two!\",\"Topic Three\":\"This is topic three!\",\"Topic Four\":\"This is topic four!\",\"Topic Five\":\"This is topic five!\",\"Topic Six\":\"This is topic six!\",\"Topic Seven\":\"This is topic seven!\",\"Topic Eight\":\"This is topic eight!\",\"Topic Nine\":\"This is topic nine!\"};\n\n//# sourceURL=webpack:///./src/json/index.json?");

/***/ })

/******/ });