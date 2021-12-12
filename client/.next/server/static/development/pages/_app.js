module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Home/home.js":
/*!*********************************!*\
  !*** ./components/Home/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/index */ "./components/icons/index.js");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.module.css */ "./components/Home/home.module.css");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/header/index */ "./components/layout/header/index.js");
var _jsxFileName = "D:\\FINity\\client\\components\\Home\\home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import book1 from "./Images/Book1.png";
// import book2 from "./Images/Book2.png";
// import book3 from "./Images/Book3.png";
// import book4 from "./Images/Book4.png";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import ProgressBar from 'react-bootstrap/ProgressBar'



function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.section1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.maindiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.topheading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "Free and open stock market and financial education"), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toptext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, "Think of Finity as your new best friend, helping you towards your journey to Financial Literacy. We have an extensive and in-depth collection of the stock market and financial ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 120
    }
  }, "lessons"), ", along with an extensive collection of ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 79
    }
  }, "Books"), ", ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 124
    }
  }, "Podcasts"), ", ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 172
    }
  }, "Playlists"), ", & ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 223
    }
  }, "Resources"), " specifically curated by our Team to help you navigate to your Best Financially-educated self. It is openly accessible to everyone and is one of the largest financial education resources on the web."), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toptextp2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, "Checkout & be a part of our community. Enter the ", __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 118
    }
  }, "Forum"), ".")), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.topImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx(_icons_index__WEBPACK_IMPORTED_MODULE_1__["Main"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  })))))), __jsx("div", {
    id: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.section2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulediv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.module,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, "Modules"), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.smalltitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, "Basics of Finance and Trading"))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 66
    }
  }, "1."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 66
    }
  }, "2."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 66
    }
  }, "3."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 66
    }
  }, "4."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 66
    }
  }, "5."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 66
    }
  }, "6."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 66
    }
  }, "7."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardsdiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulecards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.no,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 66
    }
  }, "8."), " Introduction to Stock Markets"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chapter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, "15 chapters")), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardtext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, "Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it."))), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkupdate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, "Check updates...")))), __jsx("div", {
    id: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.section3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.modulediv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.module,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 33
    }
  }, "Books"), __jsx("p", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.smalltitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, "Level up by reading the best books in the industry"))), __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookcards,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: (_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.cardbody, _home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookdesdiv),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "book-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, "A Random Walk Down Wall Street"), __jsx("p", {
    className: "book-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }, " Burton Malkiel"), __jsx("div", {
    className: "book-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 45
    }
  }, "Dive in")))), __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "card book-cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "card-body book-des-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "book-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, "The Intelligent Investor"), __jsx("p", {
    className: "book-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }, " Benjamin Graham"), __jsx("div", {
    className: "book-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 45
    }
  }, "Dive in"))))), __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "card book-cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "card-body book-des-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "book-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 41
    }
  }, "One Up on Wall Street"), __jsx("p", {
    className: "book-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, " John Rothchild and Peter Lynch"), __jsx("div", {
    className: "book-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 45
    }
  }, "Dive in"))))), __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "card book-cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "card-body book-des-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 37
    }
  }, __jsx("h4", {
    className: "book-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 41
    }
  }, "Little Book of Common Sense Investing"), __jsx("p", {
    className: "book-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, " John C. Bogle"), __jsx("div", {
    className: "book-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 45
    }
  }, "Dive in"))))))))));
}

/***/ }),

/***/ "./components/Home/home.module.css":
/*!*****************************************!*\
  !*** ./components/Home/home.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "home_section__19_yf",
	"topheading": "home_topheading__3FeHw",
	"toptext": "home_toptext__3Rp-g",
	"toptextp2": "home_toptextp2__18FuX",
	"links": "home_links__1DxFS",
	"main": "home_main__2jfGG",
	"topImage": "home_topImage__3iPJZ",
	"modulediv": "home_modulediv__1NzMg",
	"module": "home_module__2zFfU",
	"smalltitle": "home_smalltitle__2PhxY",
	"row1": "home_row1__3-r1o",
	"cardsdiv": "home_cardsdiv__1tHL6",
	"modulecards": "home_modulecards__1CHXN",
	"title": "home_title__14CRp",
	"no": "home_no__O5dfj",
	"chapter": "home_chapter__1t_Iz",
	"progress": "home_progress__1Pcep",
	"cardtext": "home_cardtext__1wOT1",
	"checkupdate": "home_checkupdate__1Q54Y",
	"bookcards": "home_bookcards__1czNY",
	"bookdesdiv": "home_bookdesdiv__teuOP",
	"booktitle": "home_booktitle__3_wEd",
	"booktext": "home_booktext__1wNiU",
	"bookbtn": "home_bookbtn__14zN6",
	"button": "home_button__2Gxs6"
};


/***/ }),

/***/ "./components/auth-forms/auth-forms.module.css":
/*!*****************************************************!*\
  !*** ./components/auth-forms/auth-forms.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"authModal": "auth-forms_authModal__10tal",
	"logo": "auth-forms_logo__1pJ7M",
	"authSwichMessage": "auth-forms_authSwichMessage__3LfUc"
};


/***/ }),

/***/ "./components/auth-forms/index.js":
/*!****************************************!*\
  !*** ./components/auth-forms/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form */ "./components/auth-forms/login-form/index.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-form */ "./components/auth-forms/signup-form/index.js");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-forms.module.css */ "./components/auth-forms/auth-forms.module.css");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\FINity\\client\\components\\auth-forms\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AuthForms = ({
  screen = 'signup'
}) => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(screen);
  return __jsx("div", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, form == 'login' ? 'Log In' : 'Sign Up', " - FINity")), form === 'login' ? __jsx(_login_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 27
    }
  }) : __jsx(_signup_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }
  }), form === 'login' ? __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Don\u2019t have an account?", ' ', __jsx("a", {
    onClick: () => setForm('signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Sign up")) : __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Already have an account?", ' ', __jsx("a", {
    onClick: () => setForm('login'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Log in")));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthForms);

/***/ }),

/***/ "./components/auth-forms/login-form/index.js":
/*!***************************************************!*\
  !*** ./components/auth-forms/login-form/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form-input */ "./components/form-input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _login_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form.module.css */ "./components/auth-forms/login-form/login-form.module.css");
/* harmony import */ var _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_login_form_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\FINity\\client\\components\\auth-forms\\login-form\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const LoginForm = () => {
  const {
    setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);

      try {
        const {
          data
        } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].post('authenticate', values);
        const {
          token,
          expiresAt,
          userInfo
        } = data;
        setAuthState({
          token,
          expiresAt,
          userInfo
        });
        resetForm({});
        setIsComponentVisible(false);
      } catch (error) {
        setStatus(error.response.data.message);
      }

      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').max(16, 'Must be at most 16 characters long').matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').min(6, 'Must be at least 6 characters long').max(50, 'Must be at most 50 characters long')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    onSubmit: handleSubmit,
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Log in"), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"] // label="Please Enter Username"
  , {
    type: "text",
    name: "username",
    placeholder: "Please Enter Username",
    autoComplete: "off",
    value: values.username,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.username && errors.username,
    errorMessage: errors.username && errors.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"] // label="Please Enter your Password"
  , {
    type: "password",
    name: "password",
    placeholder: "Please Enter Your Password",
    autoComplete: "off",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.password && errors.password,
    errorMessage: errors.password && errors.password,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, status), __jsx(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.submitButton,
    type: "submit",
    isLoading: loading,
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Log in")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/auth-forms/login-form/login-form.module.css":
/*!****************************************************************!*\
  !*** ./components/auth-forms/login-form/login-form.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "login-form_main__1EHwf",
	"submitButton": "login-form_submitButton__2jZxK",
	"form": "login-form_form__3HLmP",
	"status": "login-form_status__173pi"
};


/***/ }),

/***/ "./components/auth-forms/signup-form/index.js":
/*!****************************************************!*\
  !*** ./components/auth-forms/signup-form/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form-input */ "./components/form-input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-form.module.css */ "./components/auth-forms/signup-form/signup-form.module.css");
/* harmony import */ var _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_signup_form_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\FINity\\client\\components\\auth-forms\\signup-form\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SignupForm = () => {
  const {
    setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);

      try {
        const {
          data
        } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].post('signup', values);
        const {
          token,
          expiresAt,
          userInfo
        } = data;
        setAuthState({
          token,
          expiresAt,
          userInfo
        });
        resetForm({});
        setIsComponentVisible(false);
      } catch (error) {
        setStatus(error.response.data.message);
      }

      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').max(16, 'Must be at most 16 characters long').matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').min(6, 'Must be at least 6 characters long').max(50, 'Must be at most 50 characters long'),
      passwordConfirmation: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_2__["ref"]('password'), null], 'Passwords must match')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    onSubmit: handleSubmit,
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Sign Up"), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"] // label="Username"
  , {
    type: "text",
    name: "username",
    placeholder: "Choose an Username",
    autoComplete: "off",
    value: values.username,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.username && errors.username,
    errorMessage: errors.username && errors.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"] // label="Password"
  , {
    type: "password",
    name: "password",
    placeholder: "Choose a Password",
    autoComplete: "off",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.password && errors.password,
    errorMessage: errors.password && errors.password,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"] // label="Password Confirm"
  , {
    type: "password",
    name: "passwordConfirmation",
    placeholder: "Confirm the Password",
    autoComplete: "off",
    value: values.passwordConfirmation,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.passwordConfirmation && errors.passwordConfirmation,
    errorMessage: errors.passwordConfirmation && errors.passwordConfirmation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, status), __jsx(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.submitButton,
    disabled: isSubmitting,
    isLoading: loading,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, "Sign up")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./components/auth-forms/signup-form/signup-form.module.css":
/*!******************************************************************!*\
  !*** ./components/auth-forms/signup-form/signup-form.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "signup-form_main__2ck2O",
	"submitButton": "signup-form_submitButton__zkKhu",
	"form": "signup-form_form__33svz",
	"status": "signup-form_status__1dmtU"
};


/***/ }),

/***/ "./components/button-group/button-group.module.css":
/*!*********************************************************!*\
  !*** ./components/button-group/button-group.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "button-group_container__F0-AA",
	"active": "button-group_active__3Y2Lf",
	"borderBottom": "button-group_borderBottom__2Wu6p"
};


/***/ }),

/***/ "./components/button-group/index.js":
/*!******************************************!*\
  !*** ./components/button-group/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group.module.css */ "./components/button-group/button-group.module.css");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\button-group\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ButtonGroup = ({
  buttons,
  selected,
  setSelected,
  borderBottom = false
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, borderBottom && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderBottom),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, buttons.map(button => __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: button,
    className: selected === button && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,
    onClick: () => setSelected(button),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, button)));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./components/button/button.module.css":
/*!*********************************************!*\
  !*** ./components/button/button.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "button_button__2-1iQ",
	"primary": "button_primary__1mGdL",
	"secondary": "button_secondary__1sgMH",
	"full": "button_full__1VDks",
	"isLoading": "button_isLoading__3lt2o",
	"spin": "button_spin__2xDvi"
};


/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/button/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LinkButton = (_ref) => {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), children));
};

const BaseButton = (_ref2) => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return __jsx("button", _extends({
    type: "button"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), children);
};

const Button = (_ref3) => {
  let {
    primary,
    secondary,
    full = false,
    isLoading = false,
    children,
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["primary", "secondary", "full", "isLoading", "children", "className"]);

  const Comp = props.href ? LinkButton : BaseButton;
  return __jsx(Comp, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, primary && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.primary, secondary && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.secondary, full && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.full, isLoading && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/form-input/form-input.module.css":
/*!*****************************************************!*\
  !*** ./components/form-input/form-input.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "form-input_container__11zdg",
	"label": "form-input_label__2LiRg",
	"inputMessage": "form-input_inputMessage__11D7D",
	"inputContainer": "form-input_inputContainer__2X5G4",
	"input": "form-input_input__vFphl",
	"hasError": "form-input_hasError__3vYdN",
	"alert": "form-input_alert__37sqK",
	"inputInfo": "form-input_inputInfo__WypA7"
};


/***/ }),

/***/ "./components/form-input/index.js":
/*!****************************************!*\
  !*** ./components/form-input/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _form_input_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-input.module.css */ "./components/form-input/form-input.module.css");
/* harmony import */ var _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_input_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\form-input\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FormInput = (_ref) => {
  let {
    label,
    inputInfo,
    hasError = false,
    errorMessage
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "inputInfo", "hasError", "errorMessage"]);

  return __jsx("div", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("label", {
    id: label,
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, label, inputInfo && __jsx("p", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, inputInfo), __jsx("div", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("input", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input, hasError && _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hasError),
    htmlFor: label
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), hasError && __jsx(_icons__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alert,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 24
    }
  }))), hasError && __jsx("p", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 20
    }
  }, errorMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./components/icons/Alert.js":
/*!***********************************!*\
  !*** ./components/icons/Alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Alert.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAlert(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M8 16A8 8 0 118 0a8 8 0 010 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgAlert);

/***/ }),

/***/ "./components/icons/ArrowDown.js":
/*!***************************************!*\
  !*** ./components/icons/ArrowDown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\ArrowDown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowDown(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M2 10h32L18 26 2 10z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowDown);

/***/ }),

/***/ "./components/icons/ArrowUp.js":
/*!*************************************!*\
  !*** ./components/icons/ArrowUp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\ArrowUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgArrowUp(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M2 26h32L18 10 2 26z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowUp);

/***/ }),

/***/ "./components/icons/Close.js":
/*!***********************************!*\
  !*** ./components/icons/Close.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Close.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgClose(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "close_svg__feather close_svg__feather-x"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M18 6L6 18M6 6l12 12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./components/icons/Logo.js":
/*!**********************************!*\
  !*** ./components/icons/Logo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return __jsx("svg", _extends({
    width: "83",
    height: "16",
    viewBox: "0 0 83 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("g", {
    "clip-path": "url(#clip0_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter0_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("ellipse", {
    cx: "18.7622",
    cy: "8.00001",
    rx: "21.7334",
    ry: "9.24",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter1_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M5.46833 3.66605V7.05405H12.8925V10.42H5.46833V15.7H0.711121V0.300049H13.9016V3.66605H5.46833ZM16.1264 0.300049H20.8836V15.7H16.1264V0.300049ZM40.2697 0.300049V15.7H36.3534L28.9293 7.49405V15.7H24.2682V0.300049H28.1844L35.6086 8.50605V0.300049H40.2697Z",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M5.46833 3.31652H5.1188V3.66605V7.05405V7.40358H5.46833H12.5429V10.0705H5.46833H5.1188V10.42V15.3505H1.06065V0.649575H13.552V3.31652H5.46833ZM35.9581 8.50605V0.649575H39.9202V15.3505H36.5085L29.1885 7.25955L28.5797 6.58673V7.49405V15.3505H24.6177V0.649575H28.0293L35.3494 8.74054L35.9581 9.41337V8.50605ZM16.4759 0.649575H20.5341V15.3505H16.4759V0.649575Z",
    stroke: "#00A8A8",
    "stroke-width": "0.699052",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter2_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M5.46833 3.66605V7.05405H12.8925V10.42H5.46833V15.7H0.711121V0.300049H13.9016V3.66605H5.46833ZM16.1264 0.300049H20.8836V15.7H16.1264V0.300049ZM40.2697 0.300049V15.7H36.3534L28.9293 7.49405V15.7H24.2682V0.300049H28.1844L35.6086 8.50605V0.300049H40.2697Z",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M5.46833 3.20898H5.01126V3.66605V7.05405V7.51112H5.46833H12.4354V9.96298H5.46833H5.01126V10.42V15.243H1.16819V0.757121H13.4445V3.20898H5.46833ZM36.0657 8.50605V0.757121H39.8126V15.243H36.5562L29.2682 7.1874L28.4722 6.30755V7.49405V15.243H24.7252V0.757121H27.9816L35.2696 8.8127L36.0657 9.69254V8.50605ZM16.5835 0.757121H20.4265V15.243H16.5835V0.757121Z",
    stroke: "#00A8A8",
    "stroke-width": "0.914145",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter3_ddi_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M5.46833 3.66605V7.05405H12.8925V10.42H5.46833V15.7H0.711121V0.300049H13.9016V3.66605H5.46833ZM16.1264 0.300049H20.8836V15.7H16.1264V0.300049ZM40.2697 0.300049V15.7H36.3534L28.9293 7.49405V15.7H24.2682V0.300049H28.1844L35.6086 8.50605V0.300049H40.2697Z",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M5.46833 3.31652H5.1188V3.66605V7.05405V7.40358H5.46833H12.5429V10.0705H5.46833H5.1188V10.42V15.3505H1.06065V0.649575H13.552V3.31652H5.46833ZM35.9581 8.50605V0.649575H39.9202V15.3505H36.5085L29.1885 7.25955L28.5797 6.58673V7.49405V15.3505H24.6177V0.649575H28.0293L35.3494 8.74054L35.9581 9.41337V8.50605ZM16.4759 0.649575H20.5341V15.3505H16.4759V0.649575Z",
    stroke: "#33E9C6",
    "stroke-opacity": "0.2",
    "stroke-width": "0.699052",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx("g", {
    filter: "url(#filter4_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M5.46833 3.66605V7.05405H12.8925V10.42H5.46833V15.7H0.711121V0.300049H13.9016V3.66605H5.46833ZM16.1264 0.300049H20.8836V15.7H16.1264V0.300049ZM40.2697 0.300049V15.7H36.3534L28.9293 7.49405V15.7H24.2682V0.300049H28.1844L35.6086 8.50605V0.300049H40.2697Z",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M5.46833 3.45096H5.25324V3.66605V7.05405V7.26914H5.46833H12.6774V10.205H5.46833H5.25324V10.42V15.485H0.926214V0.515142H13.6865V3.45096H5.46833ZM35.8237 8.50605V0.515142H40.0546V15.485H36.4489L29.0888 7.34974L28.7142 6.9357V7.49405V15.485H24.4833V0.515142H28.089L35.4491 8.65035L35.8237 9.0644V8.50605ZM16.3415 0.515142H20.6685V15.485H16.3415V0.515142Z",
    stroke: "#33E9E9",
    "stroke-width": "0.430186",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  })), __jsx("g", {
    filter: "url(#filter5_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M5.46833 3.66605V7.05405H12.8925V10.42H5.46833V15.7H0.711121V0.300049H13.9016V3.66605H5.46833ZM16.1264 0.300049H20.8836V15.7H16.1264V0.300049ZM40.2697 0.300049V15.7H36.3534L28.9293 7.49405V15.7H24.2682V0.300049H28.1844L35.6086 8.50605V0.300049H40.2697Z",
    fill: "#01FF85",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M5.46833 3.5585H5.36078V3.66605V7.05405V7.1616H5.46833H12.7849V10.3125H5.46833H5.36078V10.42V15.5925H0.818667V0.407595H13.794V3.5585H5.46833ZM35.7161 8.50605V0.407595H40.1621V15.5925H36.4011L29.009 7.4219L28.8217 7.21487V7.49405V15.5925H24.3757V0.407595H28.1367L35.5288 8.5782L35.7161 8.78522V8.50605ZM16.234 0.407595H20.7761V15.5925H16.234V0.407595Z",
    stroke: "white",
    "stroke-width": "0.215093",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter6_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("ellipse", {
    cx: "57.0356",
    cy: "8.00001",
    rx: "21.1204",
    ry: "9.24",
    fill: "#6360FF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter7_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M43.528 0.300049H48.2852V15.7H43.528V0.300049ZM55.2496 3.75405H50.084V0.300049H65.1485V3.75405H60.0068V15.7H55.2496V3.75405ZM75.5318 10.178V15.7H70.7746V10.112L64.3595 0.300049H69.381L73.3694 6.41605L77.3578 0.300049H81.9708L75.5318 10.178Z",
    fill: "#CBCAFF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M55.5922 3.75405V3.41144H55.2496H50.4266V0.642658H64.1742L64.8059 1.60882V3.41144H60.0068H59.6642V3.75405V15.3574H55.5922V3.75405ZM65.4911 1.4047V0.642658H69.1954L73.0824 6.6032L73.3694 7.04327L73.6564 6.6032L77.5434 0.642658H81.3385L75.2448 9.99096L75.1892 10.0762V10.178V15.3574H71.1172V10.112V10.01L71.0613 9.92457L65.4911 1.4047ZM43.8706 0.642658H47.9426V15.3574H43.8706V0.642658Z",
    stroke: "#FCFCFF",
    "stroke-width": "0.685218",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter8_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M43.528 0.300049H48.2852V15.7H43.528V0.300049ZM55.2496 3.75405H50.084V0.300049H65.1485V3.75405H60.0068V15.7H55.2496V3.75405ZM75.5318 10.178V15.7H70.7746V10.112L64.3595 0.300049H69.381L73.3694 6.41605L77.3578 0.300049H81.9708L75.5318 10.178Z",
    fill: "#CBCAFF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M55.6977 3.75405V3.30602H55.2496H50.532V0.748076H64.1172L64.7004 1.64022V3.30602H60.0068H59.5588V3.75405V15.252H55.6977V3.75405ZM65.5965 1.37329V0.748076H69.1383L72.9941 6.66078L73.3694 7.23626L73.7447 6.66078L77.6005 0.748076H81.144L75.1564 9.93339L75.0837 10.0449V10.178V15.252H71.2226V10.112V9.97859L71.1496 9.86688L65.5965 1.37329ZM43.976 0.748076H47.8371V15.252H43.976V0.748076Z",
    stroke: "#FCFCFF",
    "stroke-width": "0.896054",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })), __jsx("g", {
    style: {
      mixBlendMode: "hard-light"
    },
    filter: "url(#filter9_ddi_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M43.528 0.300049H48.2852V15.7H43.528V0.300049ZM55.2496 3.75405H50.084V0.300049H65.1485V3.75405H60.0068V15.7H55.2496V3.75405ZM75.5318 10.178V15.7H70.7746V10.112L64.3595 0.300049H69.381L73.3694 6.41605L77.3578 0.300049H81.9708L75.5318 10.178Z",
    fill: "#CBCAFF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M55.5922 3.75405V3.41144H55.2496H50.4266V0.642658H64.1742L64.8059 1.60882V3.41144H60.0068H59.6642V3.75405V15.3574H55.5922V3.75405ZM65.4911 1.4047V0.642658H69.1954L73.0824 6.6032L73.3694 7.04327L73.6564 6.6032L77.5434 0.642658H81.3385L75.2448 9.99096L75.1892 10.0762V10.178V15.3574H71.1172V10.112V10.01L71.0613 9.92457L65.4911 1.4047ZM43.8706 0.642658H47.9426V15.3574H43.8706V0.642658Z",
    stroke: "#E3F7FF",
    "stroke-opacity": "0.2",
    "stroke-width": "0.685218",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("g", {
    filter: "url(#filter10_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M43.528 0.300049H48.2852V15.7H43.528V0.300049ZM55.2496 3.75405H50.084V0.300049H65.1485V3.75405H60.0068V15.7H55.2496V3.75405ZM75.5318 10.178V15.7H70.7746V10.112L64.3595 0.300049H69.381L73.3694 6.41605L77.3578 0.300049H81.9708L75.5318 10.178Z",
    fill: "#CBCAFF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M55.4605 3.75405V3.54321H55.2496H50.2948V0.510885H64.2455L64.9376 1.56956V3.54321H60.0068H59.796V3.75405V15.4892H55.4605V3.75405ZM64.9376 0.798988L64.7493 0.510885H64.9376V0.798988ZM65.3593 1.44395V0.510885H69.2668L73.1928 6.53122L73.3694 6.80203L73.546 6.53122L77.472 0.510885H81.5817L75.3551 10.0629L75.3209 10.1154V10.178V15.4892H70.9854V10.112V10.0492L70.951 9.99667L65.3593 1.44395ZM43.7388 0.510885H48.0743V15.4892H43.7388V0.510885Z",
    stroke: "#A6D2E6",
    "stroke-width": "0.421672",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("g", {
    filter: "url(#filter11_f_19_33)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M43.528 0.300049H48.2852V15.7H43.528V0.300049ZM55.2496 3.75405H50.084V0.300049H65.1485V3.75405H60.0068V15.7H55.2496V3.75405ZM75.5318 10.178V15.7H70.7746V10.112L64.3595 0.300049H69.381L73.3694 6.41605L77.3578 0.300049H81.9708L75.5318 10.178Z",
    fill: "#CBCAFF",
    "fill-opacity": "0.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M55.355 3.75405V3.64863H55.2496H50.1894V0.405467H64.3025L65.0431 1.53816V3.64863H60.0068H59.9014V3.75405V15.5946H55.355V3.75405ZM65.0431 1.15287L64.5544 0.405467H65.0431V1.15287ZM65.2539 1.47535V0.405467H69.3239L73.2811 6.47363L73.3694 6.60904L73.4577 6.47363L77.4149 0.405467H81.7763L75.4435 10.1205L75.4264 10.1467V10.178V15.5946H70.88V10.112V10.0806L70.8628 10.0544L65.2539 1.47535ZM43.6334 0.405467H48.1797V15.5946H43.6334V0.405467Z",
    stroke: "white",
    "stroke-width": "0.210836",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx("path", {
    d: "M5.34693 3.9661V7.3541H12.7711V10.7201H5.34693V16.0001H0.589722V0.600098H13.7802V3.9661H5.34693ZM16.005 0.600098H20.7622V16.0001H16.005V0.600098ZM40.1483 0.600098V16.0001H36.232L28.8079 7.7941V16.0001H24.1468V0.600098H28.063L35.4872 8.8061V0.600098H40.1483Z",
    fill: "#01FF85",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M43.9644 0.600098H48.7216V16.0001H43.9644V0.600098ZM55.6861 4.0541H50.5204V0.600098H65.5849V4.0541H60.4433V16.0001H55.6861V4.0541ZM75.9682 10.4781V16.0001H71.211V10.4121L64.796 0.600098H69.8175L73.8059 6.7161L77.7942 0.600098H82.4073L75.9682 10.4781Z",
    fill: "#ECEBFF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("filter", {
    id: "filter0_f_19_33",
    x: "-6.19752",
    y: "-4.46638",
    width: "49.9195",
    height: "24.9328",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.6132",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter1_f_19_33",
    x: "-2.51527",
    y: "-2.92634",
    width: "46.0113",
    height: "21.8527",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.6132",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter2_f_19_33",
    x: "-0.364344",
    y: "-0.775416",
    width: "41.7095",
    height: "17.5508",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.537732",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter3_ddi_19_33",
    x: "-0.686983",
    y: "-0.0225906",
    width: "42.3547",
    height: "18.1961",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dy: "0.699052",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.268866",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0.3 0 0 0 0 0.275 0 0 0 0.7 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "multiply",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dy: "1.07546",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.699052",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 1 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "color-dodge",
    in2: "effect1_dropShadow_19_33",
    result: "effect2_dropShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect2_dropShadow_19_33",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dx: "-0.0699052",
    dy: "0.13981",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0349526",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect3_innerShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter4_f_19_33",
    x: "0.603574",
    y: "0.192502",
    width: "39.7736",
    height: "15.615",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0537732",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter5_f_19_33",
    x: "0.639423",
    y: "0.228351",
    width: "39.7019",
    height: "15.5433",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0358488",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter6_f_19_33",
    x: "32.7526",
    y: "-4.40253",
    width: "48.5659",
    height: "24.8051",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.58127",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter7_f_19_33",
    x: "40.3654",
    y: "-2.86249",
    width: "44.768",
    height: "21.725",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.58127",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter8_f_19_33",
    x: "42.4738",
    y: "-0.754132",
    width: "40.5512",
    height: "17.5083",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.527091",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter9_ddi_19_33",
    x: "42.1575",
    y: "-0.0162055",
    width: "41.1837",
    height: "18.1408",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dy: "0.685218",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.263545",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0.051 0 0 0 0 0.082 0 0 0 0.7 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "multiply",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dy: "1.05418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.685218",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "color-dodge",
    in2: "effect1_dropShadow_19_33",
    result: "effect2_dropShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect2_dropShadow_19_33",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    dx: "-0.0685218",
    dy: "0.137044",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0342609",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "shape",
    result: "effect3_innerShadow_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter10_f_19_33",
    x: "43.4225",
    y: "0.194631",
    width: "38.6537",
    height: "15.6107",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0527091",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  })), __jsx("filter", {
    id: "filter11_f_19_33",
    x: "43.4577",
    y: "0.22977",
    width: "38.5834",
    height: "15.5405",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "0.0351394",
    result: "effect1_foregroundBlur_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  })), __jsx("clipPath", {
    id: "clip0_19_33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "83",
    height: "16",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })))) // <svg width="1em" height="1em" viewBox="0 0 32 37" fill="none" {...props}>
  //   <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB" />
  //   <path
  //     d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z"
  //     fill="#F48024"
  //   />
  // </svg>
  ;
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./components/icons/Main.js":
/*!**********************************!*\
  !*** ./components/icons/Main.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Ma(props) {
  return __jsx("svg", _extends({
    width: "540",
    height: "514",
    viewBox: "0 0 540 514",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M197.852 409.275C311.452 427.909 370.073 390.609 370.371 389.5C373.551 387.72 376.761 385.962 379.771 383.942C384.562 380.729 389.229 377.347 393.885 373.958C396.18 372.287 398.422 370.531 400.52 368.643C402.026 367.286 403.139 365.537 404.628 364.159C408.047 360.995 411.723 358.076 415.051 354.832C421.027 349.005 426.91 343.086 432.669 337.066C437.322 332.202 441.804 327.185 446.233 322.135C449.311 318.624 452.174 314.943 455.126 311.332C457.582 308.326 460.248 305.448 462.42 302.266C464.987 298.503 467.233 294.529 469.417 290.548C471.666 286.448 473.865 282.306 475.734 278.043C477.971 272.94 480.966 268.087 481.206 262.287C481.4 257.58 482.256 252.9 482.542 248.194C482.879 242.661 482.186 237.169 481.148 231.722C480.252 227.019 478.97 222.395 476.536 218.21C473.97 213.796 471.184 209.478 468.202 205.309C464.62 200.302 460.342 195.883 455.13 192.279C450.265 188.913 444.964 186.387 439.436 184.261C434.266 182.273 429.006 180.504 423.816 178.562C420.838 177.448 417.943 176.136 414.978 174.992C410.17 173.137 405.284 171.456 400.522 169.504C393.096 166.459 386.52 162.263 381.101 156.438C377.572 152.644 373.738 149.106 369.998 145.493C366.318 141.937 362.55 138.464 358.89 134.889C357.354 133.388 356.128 131.593 354.535 130.157C352.18 128.033 349.654 126.076 347.145 124.112C344.665 122.17 342.325 119.95 339.554 118.481C333.428 115.235 327.347 111.865 320.51 109.964C314.571 108.313 308.789 106.309 302.606 105.337C296.219 104.333 289.878 103.404 283.402 103.411C275.098 103.42 266.794 103.392 258.49 103.429C256.448 103.438 254.38 103.481 252.37 103.785C246.957 104.603 241.556 105.515 236.172 106.499C231.875 107.284 227.606 108.205 223.335 109.114L223.185 109.146C220.071 109.808 216.954 110.471 213.878 111.269C208.519 112.659 203.181 114.127 197.852 115.618C190.573 117.655 184.109 121.642 176.726 123.507C172.796 124.501 169.011 126.071 165.239 127.56C158.766 130.116 152.334 132.77 145.924 135.467C142.942 136.722 140.147 138.417 137.103 139.487C130.967 141.647 125.242 144.53 119.821 147.935C115.375 150.727 111.222 153.936 106.817 156.791C100.662 160.781 94.812 165.087 90.1472 170.661C86.8072 174.653 83.296 178.568 80.4536 182.871C76.4368 188.95 72.7576 195.253 69.3216 201.65C66.1104 207.629 63.3368 213.826 60.5 219.981C58.6408 224.016 56.7888 228.078 55.3392 232.256C53.652 237.121 52.5472 242.167 50.928 247.055C49.6336 250.965 49.1568 254.924 49.2032 258.974C49.2152 260.064 49.5168 261.151 49.5312 262.241C49.6744 272.871 49.7528 283.502 49.9328 294.132C49.9656 296.03 50.3208 297.93 50.6344 299.812C51.1832 303.105 51.7896 306.391 52.4216 309.671C52.9488 312.408 53.312 315.2 54.1592 317.849C56.5936 325.46 59.724 332.821 63.8888 339.74C66.6312 344.296 69.4784 348.798 72.3952 353.254C73.304 354.643 74.6096 355.792 75.7112 357.068C77.9408 359.652 79.6736 361.882 82.4056 364.81C114.686 399.406 160.39 403.131 197.852 409.275Z",
    fill: "#4642FF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M38.6071 312.435C36.294 307.259 34.4799 302.128 33.5454 296.697C32.803 292.383 31.5855 288.144 30.7572 283.841C30.3122 281.529 30.3208 279.141 29.9863 276.805C29.411 272.788 28.7285 268.786 28.0889 264.777C27.7735 262.8 27.3595 260.833 27.1527 258.847C26.4011 251.623 25.8079 244.391 26.0582 237.12C26.1903 233.286 26.0385 229.423 26.4846 225.623C27.0493 220.812 28.1332 216.057 28.9142 211.266C29.465 207.887 29.7588 204.468 30.3901 201.103C31.4595 195.406 33.2912 189.925 36.3836 184.9C37.7425 182.691 39.2843 180.585 40.7612 178.443C41.759 176.995 44.8857 175.73 46.2312 176.003C48.08 176.378 48.748 177.672 48.5824 179.101C48.2624 181.868 47.7808 184.648 47.0096 187.331C45.4155 192.875 43.3863 198.311 41.9226 203.884C40.8553 207.947 40.3848 212.155 39.6881 216.304C38.8283 221.424 37.9887 226.546 37.1872 231.675C36.9747 233.035 36.8854 234.416 36.8243 235.792C36.6752 239.152 36.5903 242.513 36.4511 245.874C36.3588 248.1 36.0329 250.331 36.1343 252.547C36.3802 257.92 36.7698 263.288 37.1891 268.652C37.4628 272.152 37.8168 275.65 38.2718 279.132C38.6347 281.911 39.2083 284.665 39.6815 287.431C40.1641 290.252 40.5282 293.097 41.149 295.891C41.7116 298.422 42.4729 300.921 43.2823 303.395C45.3883 309.831 47.5224 316.26 49.7352 322.664C51.392 327.458 53.2016 332.204 54.9168 336.979C55.672 339.081 55.1992 340.309 53.4968 340.317C52.14 340.323 51.0432 339.502 50.4432 338.275C49.932 337.229 49.5064 336.144 48.9984 335.096C46.6184 330.183 44.1737 325.297 41.8538 320.358C40.6617 317.821 39.6825 315.192 38.6071 312.435Z",
    fill: "#4642FF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M453.835 136.059C449.014 137.195 444.402 138.463 439.719 139.423C436.386 140.106 432.896 140.98 429.586 140.677C425.487 140.301 421.138 141.485 417.278 139.44C414.737 138.094 412.253 136.612 409.908 134.978C405.529 131.925 402.647 127.706 400.282 123.141C397.734 118.226 396.127 113.014 395.072 107.651C394.671 105.616 394.264 103.509 394.4 101.468C394.605 98.4025 395.238 95.3587 395.774 92.3188C396.439 88.5456 397.842 84.9968 399.515 81.5279C401.815 76.7592 405.938 73.6188 410.247 70.6937C415.292 67.2689 420.803 64.5856 426.734 62.9154C430.237 61.9297 433.952 61.5745 437.596 61.1022C444.64 60.1903 451.464 61.8765 458.15 63.444C467.73 65.6899 473.219 72.37 475.982 81.0092C477.496 85.7407 478.251 90.6957 479.272 95.5641C479.836 98.2557 480.483 100.964 480.646 103.689C480.778 105.903 480.416 108.186 479.967 110.381C479.09 114.678 477.166 118.598 474.635 122.243C472.57 125.218 469.611 127.344 466.778 129.575C462.994 132.555 458.526 134.354 453.835 136.059Z",
    fill: "#4642FF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M471.427 168.872C470.282 167.442 469.032 166.191 468.246 164.717C467.802 163.882 467.812 162.573 468.163 161.669C468.784 160.067 470.558 160.159 471.845 160.515C473.19 160.886 474.509 161.71 475.558 162.627C481.141 167.512 486.056 172.995 490.22 178.996C493.743 184.072 496.497 189.595 497.476 195.705C498.116 199.696 498.678 203.718 498.894 207.744C499.295 215.251 499.606 222.771 499.6 230.285C499.594 236.666 498.462 242.923 495.721 248.835C494.818 250.784 491.788 253.297 489.254 253.157C487.261 253.047 485.319 251.67 485.371 249.79C485.446 247.055 485.788 244.319 486.182 241.605C486.637 238.461 487.317 235.346 487.814 232.207C488.239 229.519 488.794 226.818 488.847 224.114C488.934 219.623 488.946 215.097 488.463 210.637C488.008 206.444 486.986 202.292 486.006 198.167C484.846 193.281 483.635 188.364 480.99 183.969C477.941 178.906 474.684 173.956 471.427 168.872Z",
    fill: "#4642FF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M71.3416 150.809C69.8776 152.388 68.4424 153.836 67.1416 155.385C63.924 159.216 60.7776 163.101 57.5808 166.948C56.6472 168.073 55.3624 168.782 53.94 168.104C52.5288 167.431 52.7232 165.948 52.8 164.676C52.9792 161.736 54.5544 159.285 56.2712 157.028C59.8744 152.292 63.6664 147.669 68.156 143.644C72.8488 139.437 77.7848 135.514 83.1856 132.111C86.0928 130.279 88.8888 128.335 92.4008 127.752C93.1768 127.624 94.5616 127.68 94.7312 128.044C95.0672 128.766 95.0896 129.993 94.6336 130.597C93.6408 131.909 92.3248 133.021 91.0368 134.104C88.788 135.994 86.4096 137.744 84.1776 139.65C79.8952 143.306 75.676 147.029 71.3416 150.809Z",
    fill: "#4642FF",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M451.677 376.623C450.128 381.35 448.318 385.923 447.289 390.65C445.71 397.895 442.39 404.599 440.573 411.75C440.418 412.361 440.135 412.967 440.135 413.575C440.135 413.82 440.721 414.236 441.073 414.271C441.672 414.331 442.296 414.096 442.912 414.079C447.465 413.951 452.018 413.789 456.573 413.769C457.89 413.763 459.223 414.131 460.515 414.451C460.771 414.515 461.081 415.191 461.007 415.51C460.582 417.349 460.062 419.168 459.542 420.986C459.458 421.278 459.247 421.731 459.034 421.765C456.768 422.126 457.061 424.013 456.765 425.378C455.933 429.226 455.326 433.118 454.59 436.986C454.035 439.901 453.454 442.812 452.813 445.711C452.454 447.328 450.997 447.692 449.59 447.703C442.45 447.762 435.308 447.819 428.172 447.672C426.201 447.632 425.1 446.541 424.83 444.92C424.08 440.41 423.208 435.917 422.377 431.419C421.914 428.911 421.457 426.401 420.95 423.901C420.765 422.986 420.299 422.288 419.097 422.481C417.222 422.783 416.254 422.009 415.894 420.228C415.606 418.804 414.958 417.449 414.61 416.032C414.228 414.482 414.917 413.74 416.579 413.736C419.825 413.728 423.071 413.69 426.315 413.747C429.158 413.796 432.002 413.919 434.841 414.092C435.78 414.149 435.985 413.807 435.827 413.063C435.686 412.394 435.633 411.668 435.311 411.082C433.159 407.156 431.026 403.217 428.712 399.379C427.765 397.809 426.462 396.406 425.178 395.05C422.142 391.847 419.047 388.692 415.917 385.571C414.762 384.418 413.43 383.428 412.202 382.34C411.249 381.495 410.246 381.797 409.307 382.251C403.85 384.894 398.512 384.239 393.526 381.337C391.736 380.295 390.312 378.453 389.154 376.715C387.402 374.084 386.179 371.137 384.452 368.489C382.772 365.914 381.036 363.266 378.805 361.144C373.614 356.211 367.22 352.998 360.171 351.202C357.032 350.402 353.728 351.077 350.558 351.901C347.654 352.656 344.739 352.541 341.74 352.19C336.097 351.53 331.229 349.137 326.574 346.361C323.09 344.284 321.147 341.197 320.654 337.078C320.271 333.87 321.005 331.143 322.95 328.803C324.874 326.489 327.122 324.369 330.33 323.504C333.063 322.767 335.74 321.842 338.452 321.029C338.93 320.886 339.456 320.842 339.96 320.84C343.678 320.825 347.41 320.623 351.109 320.878C357.329 321.307 363.581 321.736 369.196 324.842C370.929 325.8 372.89 326.381 374.704 327.217C375.108 327.403 375.334 327.937 375.643 328.31C375.146 328.318 374.59 328.468 374.16 328.309C371.363 327.283 368.475 326.401 365.845 325.066C362.606 323.422 359.105 323.242 355.646 322.901C352.179 322.56 348.668 322.63 345.177 322.514C339.75 322.332 334.643 323.481 329.699 325.591C326.211 327.08 323.883 329.447 322.806 332.88C321.596 336.738 323.129 341.715 326.877 344.449C330.648 347.199 335.016 348.645 339.353 349.961C343.15 351.113 347.298 351.287 351.276 350.107C356.17 348.656 360.782 349.608 365.406 351.285C370.317 353.068 374.926 355.363 378.765 358.746C380.946 360.668 382.789 363.027 384.404 365.421C387.045 369.335 389.376 373.437 391.837 377.462C393.71 380.524 396.979 381.248 400.225 382.121C403.142 382.905 405.734 381.931 408.333 381.038C409.109 380.771 409.938 380.075 410.287 379.371C411.05 377.83 411.861 376.191 412.04 374.532C412.409 371.102 412.145 367.64 411.23 364.28C410.557 361.812 409.996 359.255 408.862 356.973C406.464 352.142 403.706 347.511 399.034 344.182C397.305 342.949 395.917 341.284 394.373 339.817C391.87 337.436 389.342 335.078 386.888 332.653C386.516 332.285 386.482 331.607 386.292 331.072C386.821 331.254 387.373 331.393 387.867 331.637C388.167 331.785 388.374 332.099 388.628 332.334C392.542 335.945 396.215 339.838 400.437 343.088C405.163 346.726 407.919 351.582 410.582 356.459C412.04 359.132 412.498 362.344 413.124 365.366C413.606 367.695 413.88 370.114 413.809 372.481C413.749 374.46 413.108 376.433 412.621 378.385C412.362 379.422 412.386 380.219 413.27 381.043C417.186 384.684 421.064 388.362 424.892 392.087C426.164 393.325 427.186 394.793 428.425 396.067C431.341 399.062 433.114 402.676 434.772 406.363C434.879 406.601 434.955 406.879 435.137 407.054C435.389 407.297 435.726 407.461 436.026 407.659C436.08 407.343 436.232 407.009 436.172 406.714C434.864 400.329 433.618 393.929 431.242 387.792C430.45 385.744 429.829 383.637 429.075 381.576C428.743 380.667 427.982 380.035 426.982 380.441C425.045 381.229 423.354 380.487 421.655 379.87C418.269 378.637 416.199 376.199 415.135 372.977C414.976 372.494 415.27 371.877 415.354 371.322C415.69 371.719 416.126 372.072 416.344 372.52C418.262 376.466 421.39 379.408 426.493 379.076C427.453 379.013 427.905 378.754 427.57 377.766C425.761 372.428 424.05 367.058 421.309 362.056C419.059 357.949 416.826 353.835 414.594 349.722C414.444 349.447 414.217 349.122 414.262 348.858C414.367 348.255 414.619 347.676 414.812 347.086C415.21 347.546 415.717 347.953 415.988 348.472C418.321 352.937 420.382 357.546 422.981 361.863C425.302 365.72 426.543 369.898 428.034 374.019C428.39 375.005 428.594 376.041 428.943 377.03C429.04 377.303 429.41 377.491 429.656 377.717C429.855 377.522 430.095 377.351 430.249 377.126C432.612 373.673 432.996 369.969 432.359 365.916C431.572 360.912 429.482 356.427 427.382 351.871C425.405 347.583 423.106 343.491 420.221 339.724C418.427 337.383 416.706 334.812 413.568 333.853C409.69 332.668 406.002 333.069 402.792 335.605C400.205 337.648 400.81 339.065 402.633 341.249C403.252 341.991 404.056 342.592 404.735 343.293C404.942 343.506 405.012 343.838 405.145 344.115C404.784 344.182 404.278 344.428 404.083 344.287C402.091 342.842 399.49 341.683 399.097 339.113C398.692 336.467 400.526 334.471 402.838 333.345C405.934 331.837 409.212 331.219 412.842 332.042C417.276 333.045 419.686 336.229 421.941 339.311C426.648 345.743 429.787 352.959 432.766 360.273C434.392 364.266 434.648 368.22 434.291 372.232C434.113 374.237 432.947 376.37 431.627 378.009C430.58 379.309 430.455 380.266 430.924 381.655C432.481 386.263 434.003 390.883 435.45 395.523C435.766 396.542 435.674 397.671 435.858 398.737C435.911 399.047 436.266 399.311 436.482 399.596C436.62 399.301 436.87 399.008 436.876 398.711C436.914 396.917 436.803 395.116 436.918 393.328C437.05 391.283 437.312 389.24 437.649 387.217C437.716 386.81 438.373 386.492 438.758 386.132C439.081 386.663 439.7 387.208 439.673 387.721C439.583 389.374 439.198 391.01 439.034 392.663C438.85 394.518 438.728 396.382 438.679 398.244C438.62 400.506 438.707 402.771 438.65 405.033C438.612 406.503 438.424 407.969 438.314 409.438C438.277 409.934 438.253 410.432 438.258 410.929C438.261 411.303 438.318 411.677 438.352 412.051C438.692 411.714 439.233 411.427 439.337 411.034C439.719 409.6 439.813 408.088 440.276 406.684C441.354 403.414 442.586 400.191 443.751 396.947C444.175 395.768 444.732 394.609 444.963 393.395C445.196 392.172 445.177 391.019 443.996 389.926C442.298 388.353 440.851 386.506 439.485 384.65C438.951 383.926 438.822 382.879 438.681 381.954C437.583 374.727 437.998 367.45 437.991 360.189C437.99 358.824 438.486 357.464 438.638 356.09C438.699 355.53 438.666 354.766 438.321 354.391C435.298 351.116 433.666 347.195 432.198 343.155C430.756 339.186 428.904 335.34 427.65 331.323C426.239 326.8 425.238 322.157 424.167 317.544C423.364 314.085 422.726 310.591 422.034 307.108C421.959 306.728 422.039 306.324 422.022 305.931C421.79 300.695 421.702 295.448 421.279 290.226C420.726 283.391 421.551 276.741 423.746 270.251C425.048 266.401 426.294 262.486 428.131 258.859C429.909 255.35 432.384 252.042 436.553 250.739C438.217 250.219 440.188 250.371 441.992 250.52C445.197 250.783 448.211 251.647 450.251 254.273C452.07 256.616 453.402 259.11 453.978 262.079C454.507 264.808 455.989 267.361 456.67 270.078C457.586 273.735 458.154 277.472 458.842 281.18C459.57 285.104 460.174 289.052 460.994 292.959C461.957 297.552 463.122 302.107 464.129 306.693C464.29 307.43 464.394 307.704 464.999 307.059C466.337 305.634 468.019 305.034 469.964 304.598C471.675 304.215 473.158 302.973 474.86 302.473C477.182 301.792 479.609 301.426 482.003 300.986C483.058 300.792 484.143 300.734 485.218 300.638C489.117 300.288 492.476 301.583 495.554 303.724C498.18 305.551 500.925 307.243 503.41 309.229C507.413 312.429 509.49 316.86 511.673 321.266C513.059 324.066 513.923 326.935 513.997 329.917C514.065 332.688 512.296 335.036 510.968 337.442C509.962 339.263 508.759 340.804 506.718 341.721C503.859 343.006 500.356 342.461 498.083 340.482C495.498 338.233 493.588 335.52 491.982 332.61C491.077 330.969 490.141 329.433 488.366 328.492C488.098 328.35 488.036 327.857 487.878 327.526C488.222 327.426 488.582 327.204 488.904 327.247C490.965 327.52 491.842 329.151 492.813 330.568C494.315 332.761 495.434 335.224 497.136 337.256C500.086 340.779 503.495 342.218 507.525 339.17C509.125 337.961 509.934 335.704 510.866 333.82C513.43 328.64 511.368 324.034 508.661 319.559C507.481 317.608 506.392 315.584 505.005 313.771C502.394 310.36 498.881 307.935 495.183 305.602C491.154 303.06 486.906 302.317 482.286 302.666C478.554 302.948 474.923 303.612 471.74 305.677C471.338 305.937 470.882 306.185 470.415 306.281C465.664 307.262 463.225 310.971 460.277 314.055C458.666 315.739 457.066 317.459 455.704 319.324C453.462 322.394 451.02 325.418 449.377 328.777C446.408 334.846 443.668 341.066 442.254 347.667C441.401 351.647 441.054 355.724 440.422 359.75C440.159 361.421 439.713 363.065 439.42 364.733C439.306 365.385 439.338 366.071 439.383 366.737C439.466 367.946 439.68 369.15 439.711 370.359C439.767 372.508 439.452 374.701 439.795 376.801C440.246 379.552 439.902 382.54 441.604 384.98C442.531 386.309 443.91 387.368 445.159 388.473C445.855 389.089 446.23 389.144 446.512 387.936C447.368 384.263 448.5 380.649 449.499 377.006C451.209 370.778 452.846 364.531 454.634 358.323C455.104 356.689 456.002 355.164 456.724 353.597C460.571 345.24 464.375 336.863 468.301 328.538C469.909 325.127 471.79 321.834 473.527 318.478C473.984 317.595 474.25 316.601 474.828 315.807C475.105 315.427 475.908 315.395 476.473 315.206C476.51 315.668 476.738 316.223 476.551 316.579C474.935 319.649 473.09 322.617 471.609 325.743C468.9 331.46 466.427 337.278 463.788 343.025C462.544 345.734 461.191 348.402 459.798 351.046C457.151 356.072 455.273 361.316 454.199 366.859C453.634 369.779 452.606 372.618 451.81 375.499C451.719 375.827 451.777 376.191 451.677 376.623ZM423.794 303.16C424.502 308.209 424.886 313.323 426.004 318.289C427.289 323.993 428.938 329.659 430.954 335.17C433.08 340.983 435.82 346.594 438.308 352.287C438.435 352.578 438.715 352.809 438.923 353.068C439.074 352.734 439.282 352.413 439.364 352.066C440.187 348.574 440.753 345.008 441.86 341.601C443.146 337.648 444.968 333.856 446.438 329.953C448.496 324.491 452.041 319.906 455.845 315.502C457.658 313.404 459.846 311.595 461.906 309.696C462.696 308.968 463.078 308.285 462.484 307.257C462.202 306.769 462.167 306.15 462.034 305.587C461.087 301.586 460.094 297.593 459.218 293.578C458.65 290.978 458.229 288.349 457.792 285.726C457.397 283.35 457.246 280.923 456.678 278.587C455.251 272.718 453.7 266.876 452.098 261.048C451.27 258.033 449.778 255.212 446.926 253.592C445.297 252.668 443.129 252.585 441.191 252.177C440.313 251.992 439.314 251.653 438.524 251.876C433.964 253.162 431.07 256.378 429.18 260.253C427.535 263.626 426.428 267.251 425.274 270.82C423.915 275.022 422.97 279.303 423.066 283.756C423.16 288.129 423.015 292.505 423.118 296.877C423.166 298.863 423.558 300.842 423.794 303.16ZM453.004 429.554C447.934 429.554 442.863 429.572 437.793 429.527C437.256 429.522 436.722 429.142 436.186 428.936C436.742 428.693 437.296 428.246 437.855 428.24C442.63 428.184 447.406 428.206 452.182 428.209C452.588 428.209 453.159 428.074 453.375 428.274C455 429.775 454.754 427.73 454.881 427.408C455.303 426.333 455.321 425.122 455.685 424.02C456.181 422.52 455.831 422.078 454.094 422.107C448.003 422.213 441.909 422.113 435.816 422.164C432.798 422.189 429.782 422.386 426.765 422.479C425.528 422.517 424.283 422.423 423.054 422.523C422.69 422.553 422.039 423.088 422.074 423.311C422.466 425.771 422.953 428.219 423.444 430.663C424.258 434.712 425.009 438.776 425.969 442.793C426.266 444.039 425.874 446.029 428.217 446.038C435.41 446.064 442.602 446.068 449.795 446.005C450.337 446.001 451.206 445.496 451.35 445.054C451.86 443.503 452.15 441.882 452.466 440.277C453.123 436.944 453.747 433.604 454.374 430.265C454.436 429.93 454.42 429.58 454.441 429.237C454.08 429.343 453.719 429.448 453.004 429.554ZM436.01 420.802C442.849 420.802 449.69 420.761 456.528 420.836C457.93 420.852 458.309 420.201 458.49 419.149C458.618 418.412 458.584 417.616 458.875 416.946C459.557 415.373 458.596 415.38 457.448 415.412C453.016 415.535 448.584 415.685 444.151 415.732C442.374 415.751 440.594 415.44 438.814 415.441C436.977 415.443 435.134 415.78 433.302 415.727C428.031 415.577 422.763 415.335 417.498 415.059C416.158 414.989 416 415.483 416.354 416.51C416.73 417.597 417.17 418.678 417.392 419.795C417.597 420.83 418.159 421.204 419.174 421.137C420.777 421.031 422.378 420.837 423.981 420.818C427.872 420.77 431.764 420.802 436.01 420.802Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M461.942 384.365C463.919 382.276 466.05 380.429 467.642 378.231C470.368 374.467 471.568 370.021 472.986 365.71C473.986 362.671 474.892 359.596 475.647 356.495C476.637 352.435 477.265 348.29 478.371 344.261C479.292 340.903 480.637 337.646 481.879 334.374C482.359 333.111 483 331.885 483.731 330.737C483.938 330.413 484.726 330.423 485.246 330.28C485.182 330.664 485.213 331.093 485.037 331.423C482.451 336.25 480.936 341.4 479.714 346.665C477.91 354.432 476.211 362.214 473.429 369.762C471.495 375.007 468.927 379.643 464.874 383.779C460.742 387.994 455.609 390.125 450.234 392.092C449.883 392.221 449.37 391.945 448.931 391.858C449.211 391.52 449.417 391.036 449.782 390.869C452.092 389.813 454.506 388.945 456.749 387.778C458.55 386.842 460.16 385.572 461.942 384.365Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M402.286 369.218C398.239 364.697 394.417 360.141 390.28 355.861C386.802 352.263 382.328 349.827 377.912 347.381C375.77 346.194 373.664 344.946 371.563 343.693C371.174 343.461 370.834 343.106 370.574 342.741C370.406 342.505 370.425 342.147 370.359 341.844C370.678 341.828 371.064 341.693 371.306 341.815C372.469 342.404 373.608 343.041 374.73 343.7C377.97 345.604 381.232 347.475 384.414 349.462C386.244 350.605 388.074 351.806 389.662 353.226C396.022 358.911 401.711 365.157 406.42 372.166C407.538 373.83 408.487 375.603 409.402 377.378C409.638 377.838 409.449 378.497 409.455 379.063C408.97 378.714 408.33 378.457 408.023 377.999C406.099 375.125 404.249 372.206 402.286 369.218Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M503.722 330.341C503.342 329.848 503.11 328.766 502.655 330.177C502.095 331.918 501.56 333.667 500.958 335.394C500.838 335.742 500.47 336.011 500.215 336.316C499.998 335.976 499.522 335.562 499.602 335.308C500.282 333.175 501.076 331.073 501.806 328.953C501.949 328.536 502.171 327.989 502.009 327.656C500.17 323.895 498.322 320.136 496.355 316.435C494.909 313.711 492.462 311.839 489.947 310.029C489.288 309.555 488.418 308.183 488.525 308.085C489.683 307.015 490.298 308.39 490.98 308.862C495.47 311.965 498.503 316.145 500.649 320.971C501.031 321.831 501.59 322.479 502.91 322.596C504.722 322.756 506.254 323.795 507.058 325.473C507.22 325.812 507.022 326.305 506.991 326.728C506.7 326.559 506.382 326.421 506.121 326.216C505.282 325.558 504.494 324.836 503.62 324.224C503.325 324.017 502.832 324.065 502.43 323.996C502.489 324.412 502.458 324.864 502.622 325.237C504.013 328.388 505.458 331.517 506.828 334.676C506.985 335.037 506.78 335.542 506.742 335.98C506.306 335.764 505.607 335.643 505.477 335.318C504.838 333.717 504.351 332.061 503.722 330.341Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M363.871 342.29C363.187 342.48 362.47 342.845 362.014 342.653C358.218 341.055 354.214 340.542 350.125 340.348C346.101 340.156 342.078 339.929 338.06 339.656C337.474 339.615 336.915 339.228 336.344 339.001C336.93 338.667 337.51 338.055 338.104 338.042C343.719 337.918 349.305 338.219 354.823 339.332C356.894 339.749 359.042 339.874 361.072 340.414C362.128 340.695 363.003 341.589 363.871 342.29Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M453.448 386.385C453.242 386.469 453.122 386.452 453.008 386.472C452.514 386.559 452.023 386.657 451.531 386.75C451.742 386.25 451.805 385.574 452.19 385.277C454.505 383.494 456.825 381.704 459.28 380.104C461.169 378.873 463.231 377.871 465.274 376.875C465.801 376.617 466.546 376.766 467.19 376.728C466.802 377.195 466.508 377.801 466.01 378.106C463.608 379.579 461.093 380.891 458.73 382.417C456.913 383.59 455.262 384.997 453.448 386.385Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M467.076 367.704C463.21 369.809 459.435 371.835 455.648 373.841C455.324 374.013 454.918 374.043 454.55 374.139C454.565 373.721 454.4 373.12 454.628 372.918C455.525 372.121 456.451 371.269 457.535 370.763C461.451 368.938 465.422 367.216 469.41 365.539C469.885 365.34 470.601 365.659 471.205 365.738C470.816 366.128 470.5 366.682 470.023 366.872C469.119 367.231 468.123 367.382 467.076 367.704Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M370.333 351.126C369.086 350.148 369.772 349.72 370.771 349.813C373.286 350.049 375.844 350.239 378.273 350.849C380.784 351.48 383.183 352.542 385.586 353.517C386.094 353.724 386.405 354.373 386.806 354.819C386.245 354.852 385.63 355.044 385.129 354.893C381.748 353.875 378.414 352.71 375.014 351.752C373.574 351.345 372.015 351.323 370.333 351.126Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M472.034 353.903C467.718 356.323 463.497 358.668 459.254 360.977C458.891 361.175 458.39 361.143 457.953 361.218C458.006 360.835 457.971 360.414 458.136 360.081C458.302 359.743 458.609 359.398 458.95 359.219C462.879 357.156 466.822 355.116 470.778 353.097C471.153 352.906 471.63 352.851 472.066 352.826C472.374 352.809 472.693 352.95 473.007 353.02C472.712 353.287 472.417 353.553 472.034 353.903Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M442.826 360.298C442.446 359.938 441.965 359.692 441.908 359.377C441.822 358.896 442.029 358.367 442.11 357.858C442.462 358.106 442.89 358.297 443.155 358.612C445.338 361.211 447.48 363.842 449.655 366.446C450.594 367.571 450.851 368.85 450.687 370.227C450.659 370.462 450.412 370.674 450.266 370.896C450.059 370.758 449.703 370.65 449.665 370.477C448.81 366.698 445.696 364.294 443.539 361.31C443.32 361.008 443.122 360.692 442.826 360.298Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M428.753 361.56C428.753 364.072 428.782 366.416 428.725 368.759C428.715 369.169 428.342 369.57 428.136 369.975C427.87 369.628 427.4 369.296 427.37 368.93C427.19 366.752 427.068 364.567 427.023 362.383C427.004 361.481 427.239 360.576 427.33 359.669C427.374 359.229 427.207 358.715 427.394 358.356C427.68 357.806 428.19 357.363 428.604 356.875C428.771 357.422 429.079 357.971 429.075 358.518C429.069 359.477 428.87 360.434 428.753 361.56Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M459.819 334.043C460.262 336.4 460.62 338.671 460.964 340.945C461.006 341.219 461.078 341.568 460.946 341.771C460.721 342.115 460.344 342.368 460.031 342.659C459.872 342.273 459.65 341.899 459.564 341.499C459.07 339.222 458.719 336.91 458.088 334.669C457.8 333.645 456.976 332.759 456.406 331.804C456.224 331.497 456.078 331.171 455.916 330.854C456.437 330.838 457.221 330.609 457.432 330.845C458.294 331.806 458.98 332.909 459.819 334.043Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M445.658 378.475C446.08 379.324 446.548 380.067 446.702 380.864C446.81 381.43 446.496 382.071 446.37 382.678C446.037 382.307 445.591 381.985 445.387 381.558C443.945 378.539 442.531 375.506 441.17 372.453C441 372.072 441.19 371.546 441.213 371.087C441.662 371.338 442.326 371.484 442.523 371.855C443.433 373.564 444.217 375.334 445.035 377.087C445.234 377.513 445.392 377.955 445.658 378.475Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M452.74 359.793C452.238 358.639 451.77 357.416 451.424 356.162C450.784 353.847 449.619 351.851 447.802 350.18C447.535 349.934 447.54 349.421 447.418 349.031C447.905 349.094 448.532 348.993 448.854 349.245C451.786 351.541 452.86 354.764 453.492 358.147C453.579 358.616 453.064 359.186 452.74 359.793Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M394.142 344.479C394.598 344.854 395.256 345.301 395.282 345.778C395.427 348.51 395.489 351.251 395.399 353.984C395.386 354.392 394.425 354.772 393.902 355.165C393.834 354.619 393.714 354.074 393.71 353.527C393.691 351.328 393.68 349.129 393.729 346.931C393.746 346.14 393.941 345.352 394.142 344.479Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M395.47 366.61C397.105 366.752 398.588 366.863 399.61 368.048C399.806 368.276 399.805 368.657 399.894 368.967C399.568 368.993 399.23 369.084 398.917 369.033C396.83 368.691 394.758 368.251 392.662 367.991C391.854 367.891 390.995 368.255 390.158 368.257C389.806 368.259 389.451 367.872 389.097 367.661C389.362 367.423 389.586 367.088 389.902 366.962C391.648 366.266 393.435 365.877 395.47 366.61Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M403.967 359.541C403.378 361.207 402.8 362.71 402.185 364.198C402.078 364.455 401.808 364.652 401.613 364.876C401.454 364.66 401.158 364.443 401.158 364.227C401.161 363.339 401.03 362.368 401.354 361.578C402.204 359.504 402.759 357.425 402.575 355.184C402.548 354.853 402.838 354.499 402.98 354.156C403.31 354.5 403.893 354.824 403.922 355.19C404.034 356.577 403.967 357.978 403.967 359.541Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M468.671 344.309C467.318 345.147 466.06 345.91 464.783 346.644C464.577 346.763 464.289 346.755 464.038 346.805C464.049 346.535 463.94 346.146 464.087 346.012C464.994 345.188 465.866 344.274 466.926 343.67C468.427 342.813 469.926 341.709 471.866 342.062C472.278 342.137 472.629 342.523 473.009 342.765C472.65 342.972 472.316 343.25 471.928 343.37C470.884 343.691 469.818 343.945 468.671 344.309Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M417.423 367.955C419.338 368.822 421.094 369.659 422.802 370.576C423.287 370.836 423.666 371.306 424.016 371.738C424.114 371.859 423.991 372.217 423.862 372.396C423.809 372.469 423.451 372.402 423.267 372.325C421.43 371.551 419.584 370.79 417.777 369.956C417.279 369.726 416.762 369.332 416.506 368.883C416.192 368.332 416.14 367.644 417.423 367.955Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M423.442 353.146C423.559 354.77 423.694 356.225 423.781 357.683C423.797 357.961 423.619 358.248 423.531 358.532C423.181 358.396 422.647 358.348 422.517 358.105C422.2 357.517 421.887 356.833 421.904 356.195C421.946 354.578 422.121 352.959 422.359 351.357C422.408 351.029 422.966 350.769 423.29 350.478C423.458 350.857 423.749 351.231 423.764 351.616C423.782 352.066 423.559 352.523 423.442 353.146Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M494.339 320.243C494.551 319.816 494.619 319.441 494.817 319.143C494.982 318.892 495.298 318.731 495.547 318.53C495.705 318.803 496.007 319.08 495.998 319.348C495.919 321.649 495.798 323.949 495.646 326.246C495.631 326.467 495.32 326.669 495.146 326.881C494.966 326.679 494.656 326.493 494.626 326.274C494.462 325.078 494.341 323.876 494.26 322.672C494.208 321.894 494.25 321.109 494.339 320.243Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M417.774 357.521C417.95 358.366 417.905 358.796 417.017 358.318C416.214 357.886 415.362 357.518 414.624 357.004C414.304 356.781 414.214 356.26 414.018 355.874C414.49 355.75 415.114 355.383 415.402 355.548C416.263 356.038 416.993 356.736 417.774 357.521Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M446.454 314.1C447.206 316.103 447.955 317.939 448.71 319.774C448.729 319.822 448.831 319.86 448.826 319.892C448.693 320.653 448.55 321.412 448.41 322.171C447.876 321.722 446.959 321.328 446.878 320.816C446.588 318.981 445.166 318.189 443.881 317.132C442.786 316.23 441.965 315.007 441.123 313.86C440.917 313.579 441.106 313.036 441.114 312.613C441.482 312.72 441.983 312.72 442.194 312.954C442.806 313.637 443.274 314.435 443.862 315.14C444.047 315.363 444.43 315.437 444.722 315.579C444.724 315.269 444.809 314.934 444.718 314.651C443.898 312.116 442.885 309.627 442.246 307.053C441.378 303.553 440.624 300.013 440.119 296.453C439.292 290.615 438.39 284.767 438.695 278.846C438.726 278.246 439.165 277.664 439.414 277.073C439.637 277.633 439.994 278.179 440.061 278.756C440.571 283.165 441.219 287.571 441.447 291.995C441.704 296.996 442.682 301.85 444.002 306.656C444.678 309.117 445.629 311.509 446.454 314.1Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M449.996 306.695C450.468 305.204 450.938 303.88 451.414 302.558C451.554 302.167 451.604 301.679 451.883 301.416C452.257 301.064 452.814 300.887 453.291 300.636C453.283 301.114 453.366 301.614 453.252 302.068C452.186 306.283 451.105 310.494 449.972 314.693C449.837 315.193 449.369 315.61 449.055 316.067C448.778 315.56 448.193 315.002 448.277 314.558C448.762 311.978 449.406 309.425 449.996 306.695Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M438.044 299.205C438.714 300.178 439.343 301.043 439.846 301.97C440.003 302.26 439.817 302.719 439.788 303.101C439.421 303.015 438.913 303.046 438.712 302.825C437.983 302.021 437.217 301.201 436.72 300.265C435.278 297.542 433.961 294.76 432.588 292.003C432.518 291.862 432.289 291.73 432.307 291.62C432.422 290.947 432.586 290.281 432.733 289.612C433.064 290.096 433.446 290.554 433.72 291.066C435.147 293.744 436.546 296.434 438.044 299.205Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M447.517 296.932C447.281 298.633 447.097 300.174 446.778 301.69C446.678 302.16 446.214 302.56 445.916 302.992C445.742 302.621 445.502 302.264 445.402 301.876C444.732 299.245 445.969 296.8 446.282 294.265C446.422 293.133 446.768 292.002 447.202 290.936C447.415 290.413 448.041 290.042 448.48 289.602C448.616 290.208 448.959 290.852 448.849 291.415C448.495 293.215 447.974 294.984 447.517 296.932Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M442.649 283.553C443.235 282.435 443.666 281.362 444.27 280.386C444.475 280.054 445.118 279.966 445.56 279.767C445.601 280.18 445.771 280.626 445.662 280.999C445.018 283.202 444.326 285.392 443.601 287.571C443.518 287.822 443.132 287.981 442.887 288.181C442.66 287.907 442.232 287.627 442.241 287.359C442.281 286.117 442.442 284.878 442.649 283.553Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M436.274 441.083C440.559 440.887 444.756 440.774 448.954 440.663C449.248 440.655 449.582 440.577 449.83 440.68C450.378 440.906 450.882 441.227 451.405 441.509C450.878 441.787 450.355 442.297 449.822 442.308C446.109 442.378 442.394 442.345 438.678 442.345C437.912 442.345 437.139 442.397 436.381 442.325C435.964 442.284 435.57 442.035 435.166 441.881C435.506 441.642 435.846 441.404 436.274 441.083Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M433.62 433.677C433.432 434.042 433.178 434.54 432.876 434.568C430.885 434.748 428.885 434.886 426.886 434.9C426.356 434.905 425.822 434.429 425.29 434.174C425.738 433.98 426.181 433.631 426.634 433.619C428.931 433.562 431.232 433.594 433.62 433.677Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M135.2 249.057L166 294.691H241.6L245.2 286.705H220.4L192.8 249.057H135.2Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M245.446 317.206C237.719 317.206 230.171 317.25 222.624 317.193C215.624 317.141 208.624 316.991 201.625 316.861C196.537 316.768 191.449 316.64 186.361 316.524C181.512 316.413 176.662 316.34 171.814 316.172C166.834 315.998 161.856 315.74 156.878 315.499C152.495 315.287 148.112 315.088 143.734 314.809C139.16 314.518 134.592 314.132 130.021 313.801C126.716 313.561 123.406 313.374 120.104 313.099C119.051 313.011 118.867 313.355 118.878 314.292C118.935 318.948 118.941 323.606 118.897 328.263C118.802 338.288 118.638 348.313 118.566 358.338C118.549 360.732 118.898 363.129 118.88 365.523C118.846 369.906 118.605 374.288 118.57 378.672C118.552 381.009 118.902 383.348 118.883 385.686C118.815 394.669 118.674 403.652 118.542 412.635C118.438 419.764 118.3 426.892 118.191 434.021C118.158 436.252 116.835 437.501 114.43 437.51C112.426 437.516 111.054 436.087 111.012 434.033C110.91 429.082 110.76 424.131 110.667 419.18C110.622 416.72 110.614 414.256 110.674 411.796C110.721 409.871 111.006 407.95 110.992 406.027C110.972 403.234 110.731 400.443 110.673 397.649C110.613 394.791 110.626 391.931 110.666 389.072C110.766 382.02 110.938 374.968 110.996 367.915C111.015 365.502 110.702 363.087 110.675 360.671C110.621 355.862 110.659 351.053 110.659 346.243C110.659 343.441 110.613 340.637 110.673 337.836C110.731 335.099 110.97 332.365 111.002 329.628C111.058 324.725 111.006 319.821 111.037 314.917C111.039 314.463 111.308 314.009 111.453 313.555C111.579 313.61 111.783 313.637 111.82 313.726C112.007 314.184 112.22 314.647 112.294 315.127C112.404 315.838 112.464 316.566 112.442 317.284C112.346 320.343 112.105 323.402 112.118 326.461C112.139 330.92 112.391 335.378 112.427 339.838C112.446 342.138 112.112 344.439 112.119 346.74C112.128 349.496 112.411 352.25 112.426 355.007C112.437 357.079 112.122 359.154 112.119 361.227C112.117 363.168 112.446 365.11 112.427 367.049C112.393 370.658 112.132 374.264 112.119 377.872C112.109 380.664 112.429 383.456 112.426 386.249C112.422 389.232 112.134 392.213 112.119 395.196C112.108 397.44 112.435 399.685 112.426 401.929C112.414 404.741 112.118 407.553 112.119 410.365C112.121 413.235 112.425 416.103 112.426 418.972C112.426 421.804 112.082 424.637 112.134 427.466C112.176 429.817 112.471 432.179 112.887 434.499C112.98 435.015 114.024 435.675 114.668 435.714C115.216 435.747 115.978 435.08 116.348 434.54C116.689 434.042 116.738 433.301 116.738 432.666C116.758 418.184 116.754 403.701 116.754 389.218C116.754 379.374 116.706 369.529 116.766 359.685C116.826 349.849 117.039 340.015 117.089 330.18C117.109 326.251 116.839 322.323 116.774 318.394C116.756 317.25 117.029 316.105 117.104 314.957C117.238 312.904 116.87 312.587 114.761 312.424C110.844 312.122 106.918 311.86 103.022 311.388C96.6752 310.62 90.2296 310.299 84.1152 308.313C81.6168 307.5 79.1752 306.456 76.844 305.275C74.7728 304.225 74.3248 302.215 74.4728 300.144C74.6128 298.181 75.8728 296.819 77.7344 296.242C81.9008 294.95 86.1008 293.725 90.3528 292.724C92.248 292.279 94.3144 292.539 96.28 292.305C99.3792 291.936 102.453 291.379 105.548 290.978C107.829 290.682 110.122 290.445 112.419 290.3C115.292 290.117 118.182 290.152 121.049 289.92C125.638 289.548 130.212 289.023 134.794 288.584C136.354 288.435 137.919 288.314 139.485 288.246C142.719 288.106 145.957 288.011 149.193 287.897C152.429 287.784 155.666 287.681 158.9 287.541C159.269 287.526 159.627 287.304 159.99 287.177C159.829 286.822 159.718 286.437 159.499 286.118C156.252 281.374 152.973 276.65 149.738 271.898C146.846 267.648 143.991 263.374 141.136 259.1C139.094 256.046 137.033 253.002 135.071 249.9C134.195 248.515 134.514 247.838 136.146 247.519C137.148 247.322 138.22 247.431 139.26 247.451C139.644 247.458 140.025 247.666 140.409 247.673C148.125 247.799 155.842 247.895 163.558 248.028C168.527 248.114 173.53 247.945 178.454 248.453C183.026 248.926 187.395 248.105 191.854 247.748C192.592 247.688 193.694 248.297 194.139 248.916C198.525 255.008 202.776 261.186 207.126 267.3C211.267 273.12 215.456 278.909 219.688 284.669C220.376 285.605 221.256 286.244 222.77 286.247C235.026 286.265 247.282 286.425 259.539 286.53C262.526 286.555 265.514 286.494 268.5 286.543C273.41 286.623 278.318 286.748 283.226 286.879C286.582 286.969 289.938 287.108 293.294 287.214C297.126 287.335 300.962 287.413 304.794 287.564C309.833 287.762 314.871 288 319.909 288.241C324.351 288.454 328.791 288.7 333.233 288.917C335.87 289.045 338.518 289.062 341.147 289.279C345.854 289.668 350.548 290.187 355.251 290.617C358.135 290.881 361.036 290.998 363.912 291.324C368.217 291.812 372.513 292.384 376.8 292.999C380.382 293.512 383.982 293.99 387.509 294.756C390.746 295.461 394.004 296.288 397.052 297.512C399.791 298.611 399.518 299.536 398.794 301.75C398.451 302.796 397.631 303.747 397.487 304.798C397.018 308.226 394.258 308.828 391.502 309.346C386.238 310.331 380.958 311.24 375.664 312.069C373.28 312.443 370.852 312.59 368.438 312.767C363.391 313.136 358.341 313.454 353.293 313.799C350.046 314.021 346.802 314.292 343.553 314.47C338.755 314.733 333.955 314.949 329.154 315.157C323.519 315.401 317.882 315.599 312.247 315.848C307.686 316.05 303.126 316.305 298.565 316.521C295.808 316.652 293.05 316.827 290.29 316.853C275.402 316.993 260.514 317.093 245.446 317.206ZM391.166 297.44C390.155 297.161 389.16 296.805 388.131 296.616C384.529 295.951 380.928 295.262 377.302 294.74C374.735 294.372 372.121 294.308 369.539 294.021C364.763 293.49 360.002 292.832 355.222 292.349C351.868 292.01 348.49 291.897 345.126 291.64C341.03 291.326 336.942 290.911 332.845 290.636C327.022 290.246 321.194 289.917 315.367 289.609C310.39 289.345 305.41 289.124 300.429 288.927C296.656 288.777 292.882 288.68 289.106 288.582C284.198 288.455 279.288 288.341 274.378 288.241C268.274 288.116 262.17 287.943 256.066 287.912C245.312 287.858 234.558 287.891 223.803 287.921C223.37 287.922 222.937 288.276 222.503 288.465C222.917 288.616 223.329 288.897 223.743 288.9C228.403 288.931 233.064 288.899 237.723 288.947C238.268 288.953 238.809 289.337 239.351 289.546C238.922 289.688 238.498 289.845 238.062 289.969C237.636 290.091 237.198 290.266 236.765 290.269C233.479 290.294 230.193 290.293 226.907 290.277C225.917 290.271 224.927 290.191 223.937 290.144C224.537 291.158 225.131 292.174 225.741 293.182C225.827 293.324 225.973 293.448 226.119 293.542C226.395 293.72 226.695 294.016 226.979 294.01C230.276 293.93 233.572 293.76 236.869 293.732C237.451 293.727 238.039 294.265 238.626 294.552C238.041 294.719 237.458 295.027 236.872 295.032C231.953 295.071 227.033 295.014 222.114 295.064C214.456 295.141 206.798 295.326 199.141 295.382C191.314 295.439 183.487 295.395 175.661 295.395C173.708 295.395 171.751 295.461 169.805 295.356C169.196 295.323 168.614 294.83 168.021 294.548C168.61 294.262 169.18 293.929 169.795 293.711C170.11 293.599 170.504 293.691 170.862 293.691C187.293 293.691 203.722 293.692 220.153 293.68C220.578 293.68 221.002 293.524 221.428 293.441C221.239 293.06 221.102 292.647 220.854 292.305C217.35 287.491 213.839 282.681 210.313 277.882C207.462 274.002 204.576 270.146 201.727 266.266C198.364 261.686 195.011 257.1 191.702 252.486C191.461 252.15 191.61 251.562 191.578 251.09C191.969 251.331 192.484 251.487 192.731 251.823C196.106 256.393 199.446 260.987 202.79 265.578C208.158 272.95 213.517 280.326 218.889 287.694C220.307 289.639 221.75 291.57 223.21 293.486C223.354 293.677 223.702 293.728 223.956 293.844C223.971 293.529 224.122 293.136 223.98 292.913C222.965 291.317 221.942 289.722 220.825 288.19C215.187 280.465 209.497 272.775 203.871 265.041C200.442 260.326 197.108 255.549 193.698 250.82C193.158 250.07 192.433 249.568 191.314 249.706C189.702 249.904 188.068 250.064 186.446 250.046C182.85 250.004 179.257 249.825 175.662 249.731C170.752 249.603 165.843 249.48 160.933 249.391C153.634 249.26 146.335 249.159 139.036 249.046C138.916 249.044 138.796 249.055 138.678 249.044C137.846 248.967 137.014 248.887 136.182 248.808C136.636 249.576 137.055 250.365 137.55 251.108C141.178 256.555 144.788 262.013 148.468 267.427C154.226 275.901 160.041 284.341 165.807 292.809C166.066 293.19 166.173 293.714 166.191 294.177C166.202 294.448 165.898 294.73 165.735 295.007C165.539 294.831 165.293 294.686 165.156 294.476C164.303 293.168 163.597 291.751 162.589 290.565C162.05 289.93 160.983 289.288 160.193 289.328C156.33 289.52 152.485 290.006 148.624 290.263C145.454 290.474 142.271 290.495 139.096 290.627C133.937 290.842 128.776 291.045 123.621 291.318C120.668 291.475 117.72 291.726 114.777 291.995C110.132 292.419 105.489 292.863 100.854 293.365C98.8272 293.585 96.8128 293.934 94.8056 294.289C91.5952 294.856 88.3832 295.423 85.196 296.095C82.9704 296.564 80.7632 297.143 78.596 297.815C77.9656 298.01 77.5024 298.693 76.9624 299.152C77.4648 299.569 77.9112 300.08 78.4808 300.382C79.344 300.841 80.2584 301.299 81.2112 301.501C83.7416 302.038 86.3112 302.407 88.8536 302.9C92.8144 303.668 96.7368 304.67 100.728 305.232C106.067 305.985 111.451 306.484 116.828 306.962C121.749 307.399 126.686 307.664 131.616 308.005C134.922 308.232 138.228 308.469 141.535 308.684C146.883 309.033 152.227 309.464 157.581 309.682C163.262 309.913 168.952 309.917 174.638 310.058C177.098 310.119 179.558 310.271 182.017 310.391C186.578 310.614 191.137 310.947 195.701 311.049C204.253 311.24 212.808 311.318 221.362 311.404C225.902 311.45 230.443 311.442 234.984 311.407C247.839 311.309 260.696 311.24 273.55 311.049C280.145 310.951 286.734 310.596 293.328 310.401C295.697 310.331 298.07 310.429 300.441 310.381C304.514 310.299 308.587 310.178 312.659 310.044C315.24 309.959 317.82 309.855 320.397 309.702C325.746 309.384 331.094 309.031 336.442 308.685C339.808 308.466 343.173 308.207 346.541 308.011C350.862 307.758 355.186 307.578 359.506 307.313C362.338 307.138 365.18 306.979 367.989 306.616C372.545 306.028 377.085 305.322 381.618 304.584C386.572 303.778 391.486 302.889 396.173 300.973C397.883 300.274 397.12 299.778 396.395 299.411C394.843 298.626 393.156 298.082 391.166 297.44ZM140.592 312.776C144.256 313.003 147.919 313.256 151.585 313.451C156.323 313.704 161.063 313.936 165.805 314.133C171.918 314.386 178.033 314.592 184.147 314.821C187.085 314.931 190.021 315.08 192.96 315.155C198.406 315.292 203.854 315.499 209.299 315.482C228.786 315.419 248.271 315.293 267.757 315.15C273.682 315.107 279.606 314.946 285.53 314.816C289.723 314.724 293.915 314.596 298.107 314.479C306.193 314.254 314.278 314.028 322.363 313.797C326.078 313.691 329.792 313.57 333.506 313.458C333.745 313.451 333.986 313.475 334.222 313.455C339.282 313.004 344.339 312.524 349.402 312.103C352.703 311.829 356.025 311.741 359.317 311.39C364.943 310.79 370.537 309.777 376.177 309.449C381.222 309.155 386.066 308.142 390.89 306.933C392.351 306.567 394.162 306.717 395.148 305.224C395.376 304.88 395.471 304.455 395.627 304.067C395.184 304.046 394.689 303.89 394.306 304.024C387.988 306.231 381.297 306.636 374.738 307.62C370.194 308.302 365.583 308.582 361.001 309.025C356.182 309.49 351.366 310.014 346.538 310.368C341.986 310.701 337.419 310.858 332.858 311.067C329.802 311.206 326.742 311.268 323.687 311.42C319.782 311.615 315.882 311.912 311.975 312.084C305.922 312.351 299.869 312.656 293.812 312.753C281.974 312.944 270.135 313.004 258.296 313.115C257.2 313.126 256.104 313.125 255.009 313.116C241.676 313.004 228.343 312.908 215.011 312.767C209.504 312.708 203.998 312.561 198.492 312.432C189.689 312.226 180.878 312.832 172.077 311.817C167.082 311.24 162.008 311.29 156.968 311.075C153.852 310.943 150.733 310.878 147.618 310.722C143.773 310.531 139.929 310.301 136.087 310.043C131.394 309.728 126.702 309.403 122.016 309.015C118.634 308.735 115.261 308.361 111.886 308.001C106.696 307.446 101.521 306.573 96.316 306.376C89.8856 306.133 83.9368 304.198 77.8784 302.554C77.6728 302.499 77.3272 302.399 77.2656 302.477C77.1264 302.653 76.9992 302.993 77.0896 303.148C77.3264 303.551 77.6056 304.056 78.0056 304.226C79.516 304.867 81.0352 305.604 82.6352 305.918C86.732 306.724 90.8744 307.319 94.9976 308.005C99.0624 308.682 103.108 309.495 107.195 310.013C111.205 310.521 115.256 310.737 119.29 311.068C120.912 311.201 122.538 311.281 124.159 311.416C129.518 311.862 134.875 312.322 140.592 312.776Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M126.799 289.367C126.799 292.098 122.638 294.691 117.999 294.691C113.36 294.691 109.199 292.098 109.199 289.367C109.199 286.637 107.599 279.1 118.399 281.381C127.999 281.001 126.799 286.637 126.799 289.367Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M130.819 287.654C128.859 288.506 128.274 290.022 127.356 291.68C126.019 294.094 123.391 295.773 120.04 295.667C116.868 295.567 113.674 295.913 110.711 294.328C109.109 293.47 107.978 292.077 107.836 290.631C107.618 288.411 107.961 286.072 108.49 283.876C108.992 281.796 111.065 280.949 113.027 280.545C116.742 279.781 120.481 279.985 124.089 281.201C124.901 281.474 125.55 282.161 126.342 282.522C127.008 282.826 127.89 283.255 128.471 283.065C129.764 282.642 131.021 281.828 132.118 283.147C133.044 284.261 132.491 286.062 131.032 287.451C130.99 287.49 130.949 287.53 130.819 287.654ZM109.487 290.093C110.092 290.935 110.504 292.063 111.335 292.568C114.735 294.639 118.564 294.349 122.222 293.559C125.538 292.844 127.243 289.223 125.839 286.521C125.537 285.939 124.675 285.385 123.991 285.276C123.083 285.132 122.076 285.613 121.146 285.517C118.07 285.202 115.012 284.717 111.938 284.374C111.279 284.3 110.073 284.402 109.984 284.676C109.456 286.312 108.625 287.982 109.487 290.093ZM121.348 282.184C118.682 282.184 116.017 282.172 113.352 282.203C113.124 282.206 112.899 282.49 112.674 282.644C112.927 282.827 113.172 283.157 113.435 283.171C116.285 283.319 119.137 283.455 121.99 283.509C122.894 283.525 123.804 283.289 124.711 283.169C123.767 282.841 122.823 282.511 121.878 282.186C121.826 282.168 121.761 282.184 121.348 282.184ZM130.554 284.203C129.751 284.63 128.631 284.881 128.237 285.532C127.853 286.164 128.211 287.205 128.244 288.067C128.654 287.682 129.064 287.298 129.473 286.913C129.844 286.562 130.338 286.266 130.547 285.843C130.757 285.418 130.681 284.867 130.554 284.203Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M114.09 300.36C112.124 300.006 110.277 299.804 108.573 299.225C107.852 298.979 106.25 298.718 106.992 297.181C107.64 295.837 109.014 295.276 110.249 295.891C110.522 296.027 110.688 296.358 110.903 296.599C110.654 296.731 110.397 296.851 110.157 296.997C109.809 297.209 109.474 297.439 109.133 297.662C109.45 297.797 109.755 297.998 110.087 298.058C113.349 298.645 116.595 298.981 119.934 298.397C121.585 298.109 123.339 298.382 125.044 298.327C126.117 298.291 127.193 297.987 128.252 298.049C128.97 298.091 129.662 298.559 130.366 298.835C129.79 299.119 129.228 299.618 128.635 299.653C123.849 299.938 119.057 300.136 114.09 300.36Z",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M264.446 446.711C258.91 446.257 253.554 445.775 248.194 445.36C245.801 445.175 243.397 445.1 240.996 445.012C237.402 444.88 233.806 444.803 230.214 444.661C224.995 444.455 219.78 444.11 214.56 444.011C208.509 443.897 202.453 443.946 196.4 443.993C185.637 444.076 174.874 444.193 164.112 444.336C160.875 444.379 157.641 444.581 154.404 444.657C152.234 444.708 150.062 444.707 147.891 444.657C144.475 444.578 141.062 444.412 137.646 444.331C131.842 444.196 126.038 444.059 120.232 443.997C115.075 443.94 109.885 444.322 104.77 443.879C100.563 443.515 96.4704 442.092 92.28 441.397C89.988 441.017 88.284 439.985 87.0288 438.302C85.2656 435.939 86.7752 432.139 89.944 430.654C92.3616 429.521 94.7736 428.648 97.496 428.632C98.164 428.629 98.8296 428.332 99.4984 428.324C102.326 428.286 105.156 428.259 107.98 428.359C108.41 428.375 109.007 429.013 109.186 429.482C109.561 430.459 108.728 430.418 108.082 430.344C106.326 430.141 104.581 429.78 102.821 429.707C101.326 429.645 99.7736 429.728 98.3216 430.05C95.8944 430.588 93.4688 431.228 91.1536 432.094C89.492 432.715 88.3776 433.937 88.404 435.896C88.4288 437.654 89.3928 438.708 90.9488 439.184C94.5936 440.299 98.2912 441.26 101.97 442.275C102.135 442.32 102.326 442.278 102.506 442.281C108.848 442.394 115.19 442.589 121.532 442.596C126.918 442.603 132.354 441.901 137.681 442.386C147.926 443.319 158.161 442.765 168.397 442.935C172.009 442.994 175.626 442.718 179.242 442.629C180.993 442.586 182.747 442.635 184.499 442.619C196.218 442.51 207.936 442.318 219.654 442.318C224.334 442.318 229.015 442.714 233.694 442.969C237.241 443.162 240.784 443.412 244.329 443.645C249.437 443.981 254.548 444.285 259.652 444.68C263.094 444.947 266.535 445.273 269.957 445.709C273.724 446.188 277.466 446.852 281.226 447.382C283.268 447.669 285.326 447.853 287.379 448.073C291.661 448.532 295.934 449.089 300.228 449.4C303.019 449.601 305.844 449.349 308.647 449.454C316.386 449.746 324.118 450.267 331.858 450.403C336.413 450.484 340.979 450.02 345.538 449.774C349.323 449.569 353.118 449.44 356.886 449.066C361.313 448.628 365.736 448.083 370.118 447.355C373.808 446.742 377.538 446.08 381.058 444.914C383.587 444.076 386.123 442.707 388.084 440.985C391.912 437.626 390.618 434.391 387.126 432.136C383.121 429.55 378.694 427.599 373.671 427.26C370.585 427.053 367.513 426.621 364.442 426.232C364.178 426.199 363.757 425.694 363.795 425.468C363.851 425.137 364.277 424.585 364.51 424.601C367.332 424.789 370.16 424.976 372.961 425.344C375.183 425.636 377.498 425.875 379.545 426.667C383.662 428.261 387.984 429.629 390.77 433.353C393.199 436.6 392.103 439.314 389.912 441.695C386.714 445.171 382.282 446.747 377.686 447.691C372.878 448.678 368.005 449.391 363.139 450.092C360.515 450.47 357.85 450.643 355.197 450.786C350.042 451.064 344.883 451.274 339.724 451.477C333.432 451.725 327.088 452.508 320.861 452.005C314.486 451.49 308.139 451.248 301.76 451.096C297.72 451 293.68 450.559 289.663 450.09C285.95 449.657 282.277 448.936 278.572 448.432C276.235 448.114 273.868 448.006 271.526 447.72C269.218 447.439 266.925 447.052 264.446 446.711Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M362.668 431.716C362.668 432.965 362.671 434.044 362.667 435.124C362.662 436.758 361.297 437.894 359.394 437.85C357.746 437.813 356.561 436.775 356.59 435.204C356.657 431.71 356.898 428.216 356.906 424.722C356.914 421.817 356.638 418.911 356.588 416.004C356.528 412.502 356.574 408.998 356.574 405.494C356.574 405.097 356.574 404.699 356.574 404.301C356.574 400.155 356.614 396.009 356.558 391.864C356.527 389.581 356.239 387.301 356.232 385.019C356.195 374.152 356.216 363.285 356.216 352.418C356.216 340.51 356.216 328.601 356.216 316.692C356.216 316.295 356.081 315.829 356.254 315.518C356.426 315.206 356.906 315.047 357.25 314.821C357.383 315.068 357.63 315.315 357.632 315.563C357.657 319.274 357.605 322.986 357.665 326.696C357.707 329.358 357.952 332.018 357.993 334.68C358.052 338.561 358.041 342.443 357.991 346.324C357.973 347.831 357.69 349.335 357.675 350.842C357.665 351.986 357.991 353.133 357.993 354.279C358.014 374.099 358.008 393.92 358.008 413.741C358.008 420.576 358.006 427.41 358.01 434.245C358.011 434.947 357.799 435.711 359.008 435.832C360.148 435.946 360.588 435.347 360.856 434.518C360.974 434.155 360.876 433.729 360.876 433.331C360.876 431.116 360.863 428.901 360.878 426.686C360.994 409.184 361.126 391.682 361.217 374.18C361.226 372.354 360.889 370.525 360.902 368.699C360.919 366.133 361.202 363.568 361.208 361.002C361.214 358.721 360.878 356.439 360.898 354.158C360.951 348.071 361.095 341.984 361.244 335.898C361.306 333.35 361.582 330.803 361.567 328.255C361.544 324.326 361.342 320.399 361.246 316.47C361.23 315.803 360.943 314.773 362.14 314.868C363.039 314.939 363.699 315.489 363.054 316.569C362.874 316.87 363.042 317.35 363.024 317.747C362.91 320.426 362.706 323.105 362.694 325.784C362.685 327.915 362.982 330.045 363.001 332.176C363.014 333.681 362.72 335.186 362.693 336.694C362.677 337.61 363.006 338.53 363.01 339.449C363.042 345.639 363.058 351.83 363.01 358.02C362.993 360.302 362.694 362.583 362.694 364.864C362.694 367.146 363.023 369.428 363.007 371.709C362.932 382.396 362.753 393.083 362.69 403.769C362.67 406.922 363.021 410.076 363.002 413.228C362.966 419.334 362.788 425.439 362.668 431.716Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M217.127 427.967C212.518 428.08 208.086 428.15 203.658 428.32C199.157 428.492 194.66 428.781 190.158 428.984C184.645 429.232 179.13 429.457 173.614 429.666C169.962 429.804 166.294 429.757 162.657 430.045C157.04 430.488 151.443 431.15 145.837 431.71C145.423 431.751 145.001 431.715 144.583 431.715C139.089 431.715 133.59 431.818 128.101 431.669C125.613 431.601 123.133 431.073 120.669 430.654C120.27 430.586 119.968 429.997 119.622 429.649C120.033 429.429 120.471 428.986 120.85 429.028C122.592 429.216 124.317 429.545 126.05 429.815C126.556 429.894 127.067 430 127.577 430.003C131.22 430.019 134.872 430.165 138.504 429.978C145.062 429.642 151.608 429.102 158.159 428.651C158.456 428.631 158.756 428.657 159.054 428.647C162.708 428.536 166.362 428.448 170.014 428.301C174.993 428.101 179.999 428.103 184.941 427.572C193.978 426.6 203.03 426.627 212.094 426.588C223.87 426.538 235.657 426.053 247.417 426.414C252.502 426.57 257.604 427.298 262.743 427.309C268.308 427.319 273.874 427.634 279.437 427.588C283.878 427.551 288.315 427.124 292.758 426.955C299.824 426.687 306.896 426.556 313.96 426.241C319.073 426.013 324.174 425.561 329.283 425.248C331.918 425.088 334.561 425.044 337.196 424.893C342.782 424.573 348.37 424.254 353.95 423.851C355.335 423.752 355.222 424.285 354.759 425.08C354.62 425.318 354.225 425.548 353.936 425.561C350.702 425.706 347.466 425.808 344.231 425.922C337.76 426.149 331.234 425.966 324.838 426.744C320.429 427.281 316.067 427.597 311.648 427.642C309.964 427.659 308.284 427.913 306.6 427.956C300.976 428.098 295.35 428.15 289.727 428.32C284.031 428.491 278.338 428.755 272.645 428.993C270.483 429.083 268.323 429.325 266.164 429.307C261.972 429.273 257.718 429.506 253.603 428.913C241.524 427.174 229.4 428.348 217.127 427.967Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M228.8 135.353L241.2 135.734V215.973H230L228.8 135.353Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M228.956 204.742C228.837 203.88 228.614 203.189 228.613 202.498C228.592 189.267 228.614 176.037 228.582 162.806C228.577 160.696 228.269 158.586 228.256 156.475C228.212 149.585 228.268 142.694 228.213 135.804C228.202 134.561 228.561 134.129 229.909 134.168C232.952 134.255 236.002 134.243 239.046 134.177C240.763 134.14 241.787 134.61 241.842 136.988C241.918 140.28 241.862 143.575 241.862 146.868C241.862 150.692 241.862 154.516 241.862 158.34C241.862 161.596 241.862 164.852 241.862 168.108C241.862 172.576 241.862 177.044 241.862 181.512C241.862 185.62 241.902 189.728 241.852 193.835C241.766 200.869 241.568 207.901 241.543 214.934C241.538 216.573 240.326 216.539 239.394 216.626C236.829 216.865 234.243 216.944 231.663 216.996C229.434 217.041 228.709 215.847 228.892 213.712C229.073 211.602 228.69 209.452 228.64 207.318C228.622 206.518 228.844 205.714 228.956 204.742ZM230.032 149.02C230.032 153.126 230.002 157.232 230.038 161.339C230.141 173.495 230.273 185.651 230.388 197.807C230.406 199.699 230.39 201.591 230.39 203.484C230.39 207.023 230.434 210.561 230.365 214.099C230.342 215.252 230.662 215.777 231.943 215.657C233.621 215.501 235.313 215.475 236.986 215.294C240.073 214.961 240.069 214.93 240.069 211.947C240.069 197.454 240.069 182.961 240.069 168.469C240.069 159.16 240.059 149.852 240.085 140.543C240.087 139.682 240.272 138.815 240.435 137.961C240.746 136.329 240.412 135.905 238.698 135.901C236.31 135.895 233.922 135.93 231.534 135.887C230.176 135.863 229.623 136.421 229.661 137.695C229.71 139.359 229.627 141.027 229.685 142.69C229.754 144.688 229.912 146.683 230.032 149.02Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M199.6 150.564H209.6L210.8 215.973H199.6V150.564Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M199.562 149.872C200.349 149.759 200.952 149.579 201.564 149.543C204.02 149.401 206.479 149.302 208.938 149.191C210.087 149.14 210.656 149.629 210.684 150.763C210.779 154.575 210.981 158.387 211.009 162.201C211.025 164.5 210.751 166.799 210.698 169.1C210.678 169.959 211.015 170.822 211.018 171.683C211.043 180.594 210.992 189.507 211.049 198.418C211.084 203.82 211.282 209.222 211.386 214.624C211.418 216.269 210.65 216.99 208.868 217.005C206.182 217.027 203.493 216.955 200.809 217.035C199.565 217.072 199.185 216.706 199.178 215.512C199.097 199.399 198.978 183.287 198.832 167.175C198.81 164.724 198.554 162.275 198.501 159.823C198.441 157.005 198.443 154.182 198.527 151.364C198.542 150.859 199.084 150.37 199.562 149.872ZM200.279 168.105C200.279 173.52 200.239 178.935 200.288 184.349C200.377 194.318 200.518 204.286 200.638 214.254C200.64 214.48 200.539 214.791 200.658 214.918C200.927 215.209 201.309 215.621 201.636 215.613C203.858 215.564 206.077 215.389 208.299 215.319C209.488 215.281 210.033 214.753 209.95 213.659C209.865 212.511 209.632 211.369 209.614 210.222C209.469 201.466 209.313 192.711 209.264 183.955C209.244 180.348 209.565 176.741 209.574 173.133C209.581 170.094 209.302 167.056 209.256 164.015C209.196 160.097 209.212 156.178 209.261 152.26C209.274 151.244 208.942 150.811 207.852 150.887C205.813 151.027 203.77 151.209 201.729 151.203C200.488 151.199 200.24 151.681 200.262 152.713C200.315 155.117 200.279 157.522 200.279 159.927C200.279 162.539 200.279 165.152 200.279 168.105Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M170 169.579H180L181.2 215.973H170V169.579Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M181.28 193.495C181.399 199.461 181.523 205.256 181.635 211.052C181.659 212.318 181.506 213.602 181.671 214.849C181.888 216.496 180.561 216.575 179.62 216.621C176.823 216.756 174.013 216.717 171.21 216.643C170.2 216.618 169.391 216.238 169.426 214.95C169.504 211.963 169.474 208.973 169.446 205.985C169.337 194.157 169.208 182.33 169.095 170.502C169.075 168.468 169.29 168.277 171.391 168.275C173.897 168.274 176.404 168.317 178.908 168.259C180.313 168.225 180.927 168.708 180.946 170.094C180.973 172.203 181.246 174.31 181.263 176.42C181.312 182.054 181.28 187.69 181.28 193.495ZM179.846 184.123C179.726 182.353 179.544 180.584 179.502 178.813C179.443 176.296 179.477 173.777 179.493 171.26C179.5 170.156 178.971 169.584 177.802 169.644C175.999 169.736 174.194 169.99 172.398 169.94C170.921 169.901 170.462 170.294 170.493 171.738C170.678 180.509 170.789 189.282 170.875 198.055C170.926 203.185 170.9 208.314 170.87 213.443C170.864 214.385 171.056 215.262 172.138 215.269C174.237 215.282 176.34 214.97 178.438 215.003C179.858 215.026 180.286 214.622 180.232 213.277C180.042 208.558 179.918 203.835 179.859 199.112C179.799 194.23 179.846 189.346 179.846 184.123Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M116.394 208.15C119.402 209.171 122.338 210.045 124.455 212.254C127.659 215.596 128.338 219.541 127.624 223.92C126.554 230.484 123.183 236.141 120.098 241.916C119.14 243.709 117.93 245.381 116.824 247.102C115.438 249.257 114.119 251.316 114.153 254.094C114.19 257.185 113.432 260.277 113.194 263.381C112.947 266.62 113.716 269.698 115.3 272.593C115.504 272.966 115.449 273.468 115.514 273.91C115.09 273.652 114.562 273.474 114.261 273.122C112.178 270.679 111.656 267.674 111.436 264.72C111.099 260.21 111.632 255.704 112.862 251.333C113.326 249.686 114.206 248.078 115.204 246.648C119.844 240.002 123.803 233.044 125.642 225.211C126.234 222.691 126.75 220.03 125.929 217.362C124.676 213.295 121.526 211.214 117.528 210.246C114.571 209.53 111.502 209.052 108.457 208.883C103.082 208.585 97.6712 208.814 92.3072 208.428C87.464 208.08 82.516 208.36 77.812 206.791C74.7288 205.764 72.9536 203.67 72.3592 200.691C72.2808 200.295 72.976 199.76 73.3128 199.288C73.6928 199.775 74.3416 200.231 74.4064 200.753C74.6752 202.93 76.0744 204.247 78.0448 204.855C80.3792 205.574 82.8208 206.279 85.2432 206.38C92.4128 206.677 99.6016 206.552 106.771 206.841C109.933 206.968 113.068 207.695 116.394 208.15Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M65.4016 221.526C63.4856 220.785 62.2112 219.637 61.8288 217.765C61.7616 217.438 61.968 217.06 62.0488 216.705C62.4568 216.842 62.9896 216.871 63.244 217.14C63.6832 217.602 63.884 218.261 64.2968 218.753C66.4528 221.328 69.5408 220.873 72.3704 220.699C75.3568 220.514 78.3112 219.856 81.2776 219.395C86.368 218.604 91.456 217.802 96.5456 217.012C101.011 216.317 105.223 216.901 109.014 219.376C112.039 221.352 113.258 224.305 113.505 227.618C114.064 235.122 111.81 242.143 109.029 249.015C107.627 252.476 107.073 256.017 107.48 259.625C108.078 264.93 108.953 270.214 112.38 274.719C112.57 274.97 112.785 275.285 112.782 275.57C112.778 275.981 112.586 276.39 112.474 276.8C112.136 276.607 111.684 276.489 111.478 276.208C108.749 272.501 107.163 268.35 106.369 263.917C106.062 262.205 105.835 260.477 105.649 258.749C105.127 253.898 106.918 249.546 108.766 245.16C109.876 242.527 110.75 239.759 111.31 236.976C111.852 234.285 112.083 231.493 112.03 228.753C111.975 225.888 111.54 222.896 108.874 221.026C107.393 219.987 105.582 219.158 103.792 218.776C99.3784 217.833 94.9816 218.627 90.5992 219.379C85.524 220.249 80.4464 221.186 75.3272 221.709C72.0896 222.04 68.7728 221.668 65.4016 221.526Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M150.8 182.508H139.6V215.973H150.8V182.508Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M138.62 197.243C138.62 193.042 138.616 189.011 138.622 184.98C138.626 182.417 139.536 181.566 142.246 181.566C144.814 181.566 147.382 181.606 149.95 181.551C151.407 181.52 151.906 182.113 151.902 183.463C151.869 193.796 151.887 204.129 151.88 214.463C151.879 216.307 151.478 216.668 149.558 216.669C146.633 216.669 143.706 216.647 140.78 216.679C139.524 216.692 138.985 216.193 138.966 214.987C138.874 209.128 138.74 203.271 138.62 197.243ZM149.554 214.965C149.853 214.581 150.392 214.203 150.402 213.813C150.427 212.841 150.095 211.861 150.115 210.888C150.159 208.719 150.418 206.552 150.434 204.383C150.479 197.795 150.44 191.206 150.459 184.618C150.462 183.412 149.913 182.865 148.654 182.928C146.254 183.047 143.85 183.116 141.458 183.313C141.082 183.345 140.487 183.926 140.457 184.288C140.252 186.696 140.075 189.113 140.08 191.528C140.086 194.247 140.361 196.964 140.397 199.683C140.455 203.999 140.413 208.316 140.413 212.633C140.413 215.253 140.412 215.25 143.146 214.969C143.441 214.938 143.742 214.957 144.041 214.967C145.819 215.021 147.597 215.078 149.554 214.965Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M172.319 274.265C170.824 274.107 170.407 273.153 171.028 272.335C172.875 269.902 174.925 267.606 176.953 265.301C177.227 264.99 177.828 264.937 178.278 264.764C178.242 265.225 178.328 265.736 178.149 266.139C177.398 267.829 176.578 269.494 175.762 271.157C175.341 272.013 175.699 272.071 176.478 271.895C176.873 271.806 177.324 271.815 177.722 271.899C178.088 271.976 178.417 272.214 178.762 272.381C178.6 272.655 178.468 272.95 178.271 273.2C176.085 275.973 173.893 278.742 171.686 281.499C171.489 281.746 171.172 281.904 170.911 282.104C170.783 281.795 170.482 281.441 170.555 281.186C171.023 279.561 171.599 277.966 172.087 276.347C172.29 275.671 172.366 274.961 172.319 274.265Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M179.578 254.925C180.086 254.927 180.504 255.014 180.922 255.101C180.817 255.399 180.792 255.762 180.593 255.983C178.262 258.573 175.916 261.15 173.542 263.705C173.274 263.995 172.814 264.126 172.444 264.331C172.485 263.872 172.366 263.316 172.597 262.972C173.266 261.975 174.038 261.033 174.839 260.126C176.363 258.4 177.936 256.713 179.578 254.925Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M163.089 284.234C162.051 284.501 161.573 284.291 162.228 283.361C163.296 281.844 164.371 280.327 165.55 278.889C165.786 278.602 166.498 278.668 166.99 278.571C166.859 279.005 166.839 279.516 166.579 279.862C165.485 281.317 164.318 282.724 163.089 284.234Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M258.8 341.085L265.6 358.198L276 351.733L272.8 339.184L282.8 332.719L286.4 314.085H316.4L309.2 355.536L306.4 376.832L305.2 396.987L309.6 401.55L315.2 404.212H322.8L328 403.071L337.6 383.677L345.599 363.522L356.399 324.733L362.399 321.311C362.399 321.311 367.999 304.959 367.999 296.592C367.999 288.226 371.619 263.379 366.399 245.635C362.054 230.859 347.599 210.649 347.599 210.649L337.6 200.761L339.2 168.057L307.6 164.254L302.4 177.945C302.4 177.945 305.2 189.733 309.6 194.297C312.386 197.187 318.4 196.578 318.4 196.578L322 213.311L318.4 220.156L309.2 242.973L307.6 262.367L279.6 269.592L291.2 276.057L247.6 282.142C247.6 282.142 238 286.705 241.2 304.578C244.4 322.452 252 339.184 252 339.184L258.8 341.085Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M352.801 325.874C356.545 323.864 359.92 323.116 362.375 320.309C369.197 312.128 368.955 246.047 366.001 247.536C363.019 249.04 363.446 261.632 364.001 264.269C366.801 277.578 359.256 308.961 358.601 310.283C358.001 317.128 348.474 319.792 342.001 322.452C338.639 323.833 334.066 324.233 334.001 325.874C333.945 327.304 336.699 328.707 338.639 328.499C343.254 328.003 349.052 327.888 352.801 325.874Z",
    fill: "#E7EAEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M320.914 395.811C319.962 398.154 319.846 400.461 319.738 402.969C321.2 403.694 322.994 404.125 324.609 403.694C325.04 403.58 325.486 403.52 325.922 403.426C326.463 403.309 326.613 403.074 327.022 402.737C327.83 402.07 328.619 401.328 329.221 400.486C331.494 397.303 333.614 393.846 335.054 390.236C335.655 388.731 336.542 387.248 337.384 385.838L337.437 385.75C337.844 385.068 338.032 384.217 338.43 383.5C338.842 382.754 339.054 381.96 339.285 381.147C339.751 379.506 340.648 377.992 341.041 376.313C341.391 374.813 342.194 373.406 342.629 371.929C343.086 370.376 343.624 368.853 343.958 367.269C344.123 366.481 344.516 365.409 344.263 364.619C344.009 363.826 342.872 364.646 342.422 364.945C340.559 366.186 339.382 367.405 338.536 369.446C337.425 372.125 335.61 374.61 333.482 376.633C331.328 378.68 329.503 381.042 327.709 383.369C325.912 385.698 324.097 388.096 322.838 390.73C322.427 391.588 322.03 392.452 321.662 393.329C321.323 394.133 321.239 395.01 320.914 395.811Z",
    fill: "#E7EAEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M261.998 365.804C254.88 372.196 243.102 381.7 247.998 389.762C252.157 396.607 265.558 384.575 273.598 377.973C281.159 371.765 289.432 361.212 285.998 357.057C281.598 351.733 269.198 359.339 261.998 365.804Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M303.709 161.411C305.09 160.596 306.438 159.73 307.887 158.796C308.829 158.893 309.211 159.143 308.21 159.744C305.61 161.306 303.01 162.897 301.546 165.62C301.358 165.969 301.376 166.418 301.394 166.869C301.402 167.075 301.41 167.283 301.398 167.481C301.6 167.423 301.807 167.374 302.015 167.326C302.476 167.218 302.937 167.11 303.341 166.902C303.918 166.605 304.467 166.26 305.017 165.915C305.45 165.643 305.883 165.372 306.33 165.123C306.504 165.026 306.784 165.085 307.034 165.138C307.082 165.149 307.13 165.159 307.175 165.168C307.214 165.175 307.261 165.511 307.187 165.625C306.42 166.816 305.918 168.139 305.416 169.465C304.563 171.716 303.709 173.971 301.55 175.587C300.107 176.668 300.362 178.922 301.69 179.764C302.487 180.27 305.736 179.984 306.498 179.326C306.637 179.206 306.754 179.063 306.871 178.92L306.872 178.919C306.926 178.853 306.979 178.787 307.035 178.724C306.944 178.675 306.853 178.613 306.762 178.551C306.562 178.414 306.361 178.277 306.166 178.285C305.862 178.297 305.558 178.362 305.256 178.427C304.893 178.504 304.531 178.581 304.172 178.567C303.768 178.552 303.369 178.405 302.97 178.257C302.794 178.192 302.618 178.126 302.442 178.072C302.507 177.904 302.564 177.73 302.62 177.555L302.621 177.554C302.746 177.164 302.873 176.775 303.106 176.457C303.33 176.151 303.617 175.88 303.903 175.61C304.297 175.239 304.687 174.871 304.903 174.421C306.192 171.737 307.393 169.009 308.479 166.244C308.934 165.085 309.541 164.407 310.849 164.548C311.334 164.601 311.825 164.639 312.316 164.679C313.656 164.785 315 164.893 316.254 165.269C322.528 167.151 326.722 170.598 327.059 178.192C327.089 178.859 326.997 179.529 326.906 180.2C326.839 180.683 326.773 181.167 326.752 181.651C326.742 181.877 326.883 182.109 327.024 182.341L327.025 182.341C327.089 182.448 327.154 182.554 327.204 182.66C327.306 182.608 327.413 182.564 327.521 182.519C327.762 182.417 328.003 182.316 328.177 182.149C328.402 181.934 328.58 181.675 328.759 181.415C328.862 181.265 328.966 181.115 329.078 180.974C329.309 180.683 329.527 180.375 329.746 180.068C330.278 179.319 330.813 178.569 331.526 178.047C332.275 177.5 333.58 177.204 334.477 177.418C335.368 177.63 335.723 178.657 335.707 179.779C335.682 181.603 334.931 182.963 333.83 184.385L333.738 184.504C332.726 185.807 331.351 187.581 331.654 188.79C332.288 191.322 333.259 193.775 334.232 196.23V196.231C334.75 197.538 335.267 198.846 335.734 200.167C335.946 200.765 335.852 201.793 335.443 202.214C332.502 205.24 329.494 208.206 326.487 211.171L326.477 211.181C325.774 211.874 325.073 212.567 324.371 213.26C324.218 213.411 324.04 213.54 323.862 213.669C323.78 213.729 323.698 213.789 323.617 213.851C323.568 213.762 323.51 213.674 323.451 213.585C323.325 213.397 323.199 213.207 323.169 213.004C322.37 207.747 321.054 202.642 318.546 197.861C318.423 197.626 318.745 196.864 318.966 196.817C321.986 196.181 324.766 195.04 327.287 193.331C327.507 193.182 327.661 192.94 327.814 192.698C327.884 192.586 327.955 192.474 328.033 192.372C327.891 192.352 327.742 192.315 327.593 192.277C327.27 192.196 326.948 192.115 326.699 192.211C325.906 192.516 325.129 192.862 324.351 193.206C323.227 193.705 322.105 194.203 320.938 194.58C315.093 196.47 310.423 195.253 307.516 190.343C306.561 188.729 306.112 186.842 305.662 184.951C305.435 184.001 305.208 183.049 304.917 182.131C304.825 181.84 304.58 181.593 304.336 181.347C304.223 181.233 304.11 181.118 304.012 181.001C303.922 181.144 303.8 181.294 303.678 181.444C303.415 181.769 303.151 182.093 303.208 182.355C303.69 184.6 304.263 186.832 304.934 189.033C306.046 192.684 308.57 195.091 312.249 196.454C312.731 196.632 313.409 197.074 313.453 197.451C313.581 198.56 313.619 199.74 313.366 200.821C312.35 205.155 309.485 208.464 306.624 211.77L305.946 212.553L305.941 212.559L305.935 212.565C304.057 214.735 302.176 216.906 300.428 219.169C299.568 220.283 298.944 221.637 299.702 223.122C300.921 225.509 303.559 225.563 306.36 225.047C310.294 224.321 313.402 222.098 316.338 219.621C316.479 219.503 316.66 219.427 316.841 219.352C316.925 219.317 317.01 219.282 317.09 219.242C317.123 219.353 317.17 219.464 317.217 219.576C317.318 219.819 317.42 220.062 317.39 220.289C317.215 221.634 317.018 222.981 316.703 224.3C316.509 225.116 316.182 225.932 315.751 226.658C315.446 227.172 315.081 227.662 314.717 228.151C314.126 228.945 313.537 229.735 313.21 230.619C311.696 234.712 310.295 238.856 309.114 243.048C307.471 248.882 305.917 254.758 306.71 260.912C306.755 261.262 306.65 261.9 306.454 261.967C305.997 262.122 305.534 262.306 305.07 262.49L305.063 262.493C303.749 263.015 302.418 263.544 301.139 263.457C298.906 263.305 296.946 263.444 294.89 264.285C293.522 264.845 292.041 265.164 290.569 265.481C290.247 265.55 289.926 265.619 289.607 265.691C288.792 265.873 287.968 266.025 287.145 266.178C285.932 266.403 284.719 266.627 283.534 266.947C282.846 267.134 281.762 268.005 281.841 268.363C282.03 269.216 281.712 269.186 281.161 269.133L281.122 269.129C280.178 269.04 279.235 268.953 278.293 268.865C275.691 268.627 273.09 268.387 270.496 268.09C268.713 267.885 266.934 267.64 265.156 267.395C263.503 267.168 261.85 266.94 260.193 266.745C258.759 266.576 257.319 266.454 255.879 266.333L255.87 266.333L255.865 266.332C254.787 266.241 253.71 266.15 252.634 266.04C251.623 265.935 250.614 265.813 249.603 265.692C247.549 265.444 245.494 265.197 243.432 265.096C242.654 265.058 241.379 265.837 241.116 266.519C240.657 267.709 241.941 268.275 242.926 268.41C246.156 268.85 249.406 269.17 252.655 269.465C256.848 269.847 261.044 270.215 265.246 270.491C268.383 270.698 271.522 270.873 274.662 271.047H274.665C277.507 271.206 280.35 271.364 283.191 271.546C284.481 271.629 285.766 271.768 287.051 271.908L287.059 271.908C288.052 272.016 289.045 272.124 290.039 272.205C291.005 272.284 291.999 272.315 292.95 272.175C293.246 272.132 293.506 271.867 293.767 271.603C293.886 271.482 294.004 271.362 294.126 271.263C293.972 271.183 293.82 271.085 293.669 270.987C293.34 270.776 293.011 270.564 292.665 270.533C290.65 270.347 288.63 270.2 286.61 270.053L286.6 270.053C285.507 269.974 284.414 269.894 283.322 269.808C283.118 269.793 282.919 269.714 282.721 269.636C282.628 269.599 282.536 269.563 282.443 269.532C282.53 269.462 282.612 269.379 282.695 269.296C282.874 269.116 283.054 268.935 283.269 268.881L283.688 268.773H283.689C285.164 268.396 286.646 268.017 288.149 267.779C288.713 267.69 289.281 267.614 289.848 267.539C292.218 267.223 294.582 266.908 296.674 265.591C296.854 265.478 297.082 265.371 297.287 265.37C297.741 265.367 298.194 265.362 298.648 265.358H298.657C300.483 265.34 302.31 265.323 304.133 265.387C305.026 265.417 306.489 267.4 306.358 268.259C306.164 269.542 305.95 270.828 305.624 272.084C305.512 272.517 305.098 273.126 304.719 273.206C304.072 273.341 303.425 273.485 302.778 273.628L302.764 273.631L302.755 273.633H302.754C300.337 274.168 297.913 274.705 295.463 274.887C293.506 275.033 291.53 274.917 289.55 274.802C288.418 274.735 287.284 274.669 286.154 274.652C285.798 274.646 285.44 274.846 285.082 275.045C284.917 275.137 284.751 275.228 284.586 275.301C284.752 275.409 284.916 275.541 285.08 275.672C285.437 275.96 285.794 276.247 286.181 276.291C287.236 276.408 288.3 276.457 289.364 276.505C290.336 276.55 291.309 276.594 292.275 276.691C294.569 276.921 296.83 276.602 299.09 276.283C301.607 275.929 304.124 275.574 306.686 275.975C307.57 276.114 308.467 276.187 309.363 276.261C310.582 276.362 311.8 276.461 312.981 276.724L313.498 276.839C319.415 278.156 325.318 279.47 331.452 279.433C333.401 279.422 334.203 280.215 334.214 282.089C334.221 283.303 334.232 284.518 334.243 285.732V285.74C334.282 289.915 334.321 294.093 334.182 298.264C334.098 300.791 333.86 303.313 333.622 305.835C333.454 307.627 333.285 309.419 333.171 311.214C332.858 316.144 332.648 321.082 332.475 326.019C332.454 326.657 332.736 327.5 333.199 327.925C335.31 329.86 337.986 330.736 340.766 330.111L341.486 329.95C345.866 328.971 350.274 327.986 354.281 325.862C354.611 325.687 355.014 325.638 355.418 325.589C355.605 325.566 355.792 325.543 355.972 325.508C355.905 325.632 355.838 325.755 355.77 325.878L355.769 325.88C355.61 326.171 355.451 326.461 355.296 326.753C355.262 326.817 355.225 326.88 355.188 326.943C355.089 327.114 354.988 327.286 354.946 327.469C354.56 329.114 354.195 330.765 353.83 332.415C353.059 335.906 352.287 339.398 351.32 342.838C349.405 349.652 347.25 356.407 345.026 363.136C344.485 364.773 343.809 366.371 343.133 367.969C342.377 369.754 341.622 371.538 341.055 373.378C338.23 382.548 333.608 390.903 328.886 399.236C327.111 402.367 324.22 403.261 320.858 403.183C319.194 403.144 317.531 402.912 315.874 402.68C315.491 402.627 315.109 402.574 314.726 402.523C310.587 401.971 306.213 399.16 306.363 394.267C306.446 391.594 306.51 388.92 306.575 386.246V386.239C306.626 384.104 306.678 381.97 306.738 379.836C306.744 379.636 306.813 379.438 306.882 379.241C306.938 379.079 306.995 378.917 307.018 378.753C307.144 377.854 307.272 376.956 307.4 376.058V376.057C307.79 373.326 308.18 370.595 308.49 367.856C308.595 366.922 308.615 365.976 308.635 365.031C308.662 363.783 308.689 362.536 308.913 361.32C309.74 356.822 310.664 352.34 311.588 347.858L311.59 347.848C311.995 345.885 312.4 343.922 312.796 341.957C313.078 340.561 313.364 339.164 313.65 337.768C314.458 333.822 315.266 329.876 315.986 325.914C316.423 323.505 316.736 321.074 317.049 318.644C317.175 317.657 317.302 316.67 317.438 315.685C317.496 315.262 317.536 314.835 317.577 314.409L317.578 314.403C317.651 313.625 317.726 312.848 317.905 312.094C318.239 310.682 318.626 309.281 319.013 307.881C319.266 306.962 319.52 306.044 319.759 305.122C319.802 304.953 319.74 304.759 319.677 304.565C319.648 304.476 319.618 304.386 319.6 304.299C319.522 304.335 319.437 304.366 319.352 304.397C319.165 304.466 318.978 304.535 318.856 304.662L318.835 304.683C318.5 305.035 318.137 305.416 317.979 305.849C317.398 307.45 316.821 309.06 316.396 310.702C316.102 311.838 315.556 312.535 314.314 312.688C313.781 312.753 313.248 312.823 312.716 312.892H312.714L312.71 312.893C310.013 313.245 307.328 313.595 304.546 313.443C301.817 313.294 299.07 313.437 296.325 313.58C295.306 313.634 294.288 313.687 293.27 313.725C292.922 313.738 292.576 313.809 292.23 313.879C291.852 313.957 291.475 314.034 291.097 314.036C290.85 314.037 290.601 314.042 290.35 314.048C289.236 314.073 288.098 314.098 287.114 313.752C286.774 313.633 286.662 312.916 286.55 312.193C286.497 311.854 286.444 311.514 286.366 311.234C286.348 311.166 286.298 311.105 286.249 311.044C286.227 311.017 286.206 310.991 286.186 310.963C285.96 310.639 285.733 310.315 285.506 309.991L285.23 309.597C285.162 309.762 285.08 309.924 284.997 310.088C284.816 310.445 284.635 310.802 284.615 311.167C284.532 312.726 284.484 314.299 284.606 315.853C284.827 318.676 284.126 321.34 283.424 324.007C283.195 324.875 282.966 325.743 282.77 326.617C282.453 328.024 281.54 328.323 280.251 328.114C276.962 327.579 273.686 327.087 270.335 327.756C269.319 327.959 268.285 328.099 267.251 328.24C265.536 328.472 263.825 328.704 262.207 329.22C259.092 330.212 256.031 331.546 253.226 333.176C251.822 333.991 251.435 333.922 250.914 332.648C250.389 331.364 249.85 330.084 249.311 328.804C248.056 325.822 246.801 322.84 245.718 319.802C245.178 318.286 244.896 316.688 244.614 315.087C244.455 314.182 244.296 313.277 244.09 312.386C243.954 311.797 243.815 311.21 243.678 310.622L243.677 310.62C242.239 304.504 240.808 298.414 241.666 291.997C242.241 287.702 244.782 284.562 248.829 283.187C254.845 281.143 261.11 280.226 267.372 279.31L267.393 279.307C267.876 279.236 268.359 279.166 268.842 279.094C271.604 278.687 274.377 278.346 277.149 278.004L277.159 278.003H277.161C278.902 277.788 280.642 277.574 282.381 277.343C282.572 277.318 282.744 277.162 282.915 277.007C282.995 276.936 283.075 276.863 283.158 276.804C283.082 276.718 283.007 276.61 282.933 276.502C282.772 276.269 282.611 276.034 282.439 276.027C282.249 276.018 282.058 276.009 281.867 276.001C280.45 275.934 279.022 275.866 277.624 276.023C275.056 276.311 272.501 276.705 269.946 277.1C269.368 277.19 268.791 277.279 268.214 277.367C267.566 277.466 266.917 277.562 266.269 277.66C263.681 278.048 261.092 278.436 258.525 278.925C256.906 279.233 255.305 279.621 253.703 280.011L253.702 280.011C252.606 280.278 251.509 280.544 250.406 280.784C246.126 281.718 242.898 283.948 240.785 287.682C239.693 289.613 239.566 291.687 239.606 293.782C239.652 296.194 239.753 298.61 239.97 301.011C240.146 302.962 240.47 304.907 240.837 306.835C241.143 308.45 241.495 310.056 241.847 311.662C242.049 312.582 242.25 313.501 242.443 314.422C242.574 315.048 242.678 315.683 242.781 316.317C242.99 317.611 243.201 318.905 243.648 320.119C244.51 322.455 245.494 324.751 246.478 327.046C247.042 328.365 247.609 329.685 248.151 331.013C248.387 331.591 248.663 332.157 248.939 332.724C249.778 334.444 250.617 336.167 250.346 338.221C250.3 338.563 250.584 338.962 250.85 339.334C250.922 339.435 250.992 339.535 251.054 339.63C252.292 341.53 254.318 341.636 256.256 341.739C256.469 341.749 256.68 341.761 256.889 341.775C258.102 341.852 258.722 342.328 259.087 343.255C259.626 344.621 260.142 345.996 260.658 347.372C261.13 348.632 261.604 349.892 262.094 351.146C262.518 352.23 262.96 353.307 263.403 354.383C263.91 355.615 264.417 356.848 264.894 358.09C265.37 359.328 265.998 359.48 267.148 358.776C268.541 357.924 269.95 357.095 271.359 356.266L271.362 356.264C273.038 355.278 274.714 354.292 276.363 353.266C276.782 353.006 277.154 352.161 277.037 351.707C276.554 349.833 275.993 347.978 275.43 346.123L275.43 346.121V346.12C275.203 345.373 274.977 344.627 274.755 343.878C274.63 343.453 274.476 343.027 274.323 342.6C273.959 341.591 273.596 340.58 273.596 339.57C273.596 338.388 274.516 338.083 275.464 337.768C276.1 337.556 276.749 337.341 277.142 336.854C277.316 336.637 277.632 336.53 277.953 336.422C278.127 336.362 278.303 336.302 278.458 336.225C281.296 334.793 283.77 333.111 284.22 329.686C284.452 327.92 284.939 326.199 285.427 324.477C286.17 321.858 286.912 319.238 286.758 316.456C286.746 316.239 287.138 315.817 287.37 315.798C289.399 315.635 291.434 315.473 293.469 315.442C294.955 315.419 296.442 315.43 297.93 315.441H297.933C299.957 315.456 301.982 315.47 304.002 315.4C305.014 315.364 306.032 315.404 307.05 315.444C309.408 315.536 311.77 315.629 314.082 314.787C314.61 314.594 315.885 314.224 315.657 315.715C315.459 317.007 315.271 318.3 315.082 319.593V319.595C314.698 322.239 314.312 324.885 313.848 327.517C313.364 330.263 312.795 332.997 312.226 335.73L312.226 335.731L312.222 335.751C311.989 336.869 311.756 337.987 311.529 339.106C311.341 340.034 311.149 340.962 310.957 341.89C310.613 343.551 310.269 345.212 309.947 346.877L309.85 347.381C309.378 349.819 308.906 352.259 308.526 354.711C307.882 358.868 307.298 363.034 306.74 367.202C306.66 367.801 306.638 368.411 306.616 369.019C306.584 369.921 306.552 370.822 306.33 371.679C305.265 375.786 304.82 379.929 304.928 384.152C304.97 385.785 304.961 387.42 304.951 389.056C304.945 390.165 304.938 391.273 304.947 392.381C304.952 392.887 304.927 393.404 304.902 393.921C304.841 395.216 304.778 396.517 305.17 397.671C306.437 401.4 309.677 403.319 313.433 404.192C316.603 404.928 319.854 405.323 323.189 404.977C325.821 404.705 328.072 403.749 329.433 401.721C331.555 398.558 333.501 395.246 335.125 391.823C337.791 386.204 340.246 380.486 342.586 374.734C343.61 372.217 344.474 369.642 345.339 367.066L345.346 367.047C345.799 365.697 346.252 364.347 346.729 363.006C347.203 361.67 347.694 360.339 348.184 359.009L348.185 359.007C349 356.798 349.814 354.588 350.554 352.356C351.528 349.418 352.357 346.431 353.137 343.439C354.233 339.237 355.25 335.014 356.245 330.787C356.322 330.459 356.411 330.126 356.502 329.79C356.83 328.563 357.167 327.308 356.95 326.168C356.721 324.965 357.187 324.716 357.928 324.406C358.186 324.299 358.446 324.193 358.705 324.088C360.872 323.212 363.03 322.34 363.975 319.947C364.095 319.642 364.218 319.338 364.34 319.033L364.342 319.029C364.794 317.904 365.246 316.777 365.602 315.624C365.767 315.089 365.938 314.553 366.11 314.017C366.754 312 367.402 309.978 367.735 307.912C368.326 304.26 368.641 300.553 368.832 296.858C369.085 291.977 369.154 287.085 369.199 282.197C369.211 280.858 369.115 279.519 369.019 278.179C368.962 277.375 368.904 276.57 368.87 275.764C368.787 273.827 368.719 271.889 368.652 269.95V269.944C368.514 265.976 368.375 262.008 368.11 258.049C367.847 254.11 367.392 250.162 366.676 246.277C365.653 240.719 364.146 235.252 361.355 230.232C361.105 229.782 360.855 229.331 360.606 228.881C358.094 224.356 355.578 219.823 352.712 215.51C350.837 212.686 348.422 210.076 345.797 207.864C345 207.193 344.159 206.568 343.318 205.943C341.65 204.704 339.98 203.464 338.647 201.854C338.39 201.544 338.232 201.086 338.226 200.694C338.224 200.534 338.743 200.241 339.04 200.223C342.429 200.018 345.032 198.243 347.223 196.052C351.126 192.151 353.714 187.54 355.005 182.181C355.074 181.892 355.145 181.603 355.215 181.315V181.312C356.02 178.021 356.813 174.78 355.997 171.391C354.642 165.763 351.808 160.808 347.626 156.743C341.182 150.48 333.272 148.614 324.356 150.511C323.994 150.589 323.58 150.545 323.21 150.47C322.862 150.399 322.515 150.298 322.17 150.198C321.542 150.015 320.917 149.833 320.29 149.832C318.018 149.827 315.715 149.842 313.482 150.189C311.603 150.481 309.768 151.076 307.948 151.666H307.947C307.719 151.74 307.49 151.814 307.262 151.887C306.922 151.996 306.655 152.314 306.388 152.633C306.266 152.779 306.142 152.926 306.013 153.051C306.194 153.105 306.378 153.178 306.562 153.251C306.966 153.41 307.37 153.57 307.75 153.528C308.639 153.429 309.518 153.252 310.398 153.074C310.947 152.964 311.495 152.853 312.046 152.761C312.289 152.721 312.546 152.763 312.802 152.806C312.92 152.825 313.038 152.844 313.155 152.856C313.069 152.966 312.99 153.09 312.91 153.214C312.739 153.483 312.568 153.752 312.318 153.886C311.712 154.212 311.082 154.503 310.453 154.793C309.434 155.264 308.416 155.734 307.504 156.35C307.181 156.568 306.846 156.779 306.51 156.99C305.02 157.93 303.505 158.885 302.798 160.615C302.719 160.806 302.725 161.029 302.73 161.253C302.733 161.355 302.736 161.459 302.73 161.559C302.834 161.545 302.944 161.541 303.054 161.536C303.293 161.526 303.531 161.516 303.709 161.411ZM342.283 209.167C339.39 212.647 336.75 216.303 335.296 220.608C331.726 226.931 330.518 233.526 331.048 240.401C331.224 242.688 331.577 244.962 331.93 247.236L331.93 247.24C332.106 248.37 332.282 249.503 332.436 250.636C332.536 251.373 332.625 252.112 332.714 252.85V252.851C332.856 254.018 332.998 255.187 333.181 256.348C333.224 256.623 333.43 256.873 333.638 257.124C333.732 257.239 333.828 257.355 333.906 257.473C334.015 257.326 334.151 257.18 334.288 257.034C334.586 256.715 334.885 256.396 334.886 256.076C334.894 254.529 334.731 252.974 334.529 251.436C334.412 250.543 334.258 249.655 334.106 248.767C333.878 247.452 333.652 246.137 333.542 244.813C333.296 241.842 333.198 238.854 333.17 235.871C333.127 231.152 334.422 226.699 336.374 222.409C336.554 222.016 336.731 221.621 336.909 221.226V221.225L336.91 221.224C337.714 219.434 338.519 217.641 339.499 215.943C340.583 214.065 341.904 212.295 343.272 210.589C344.522 209.031 345.305 209.011 346.569 210.553C346.759 210.786 346.95 211.018 347.141 211.25C349.383 213.976 351.614 216.689 353.224 219.894C354.463 222.362 355.875 224.749 357.287 227.137L357.289 227.139C358.582 229.328 359.877 231.516 361.039 233.767C361.93 235.492 362.382 237.44 362.828 239.367C362.926 239.794 363.026 240.22 363.129 240.641C363.846 243.572 364.436 246.534 365.008 249.495C365.118 250.069 365.236 250.643 365.354 251.218L365.354 251.22C365.772 253.259 366.19 255.304 366.314 257.36C366.495 260.388 366.547 263.423 366.599 266.457V266.465C366.633 268.411 366.666 270.357 366.734 272.302C366.8 274.207 366.911 276.113 367.023 278.019V278.02C367.226 281.507 367.43 284.992 367.358 288.473C367.302 291.12 367.002 293.761 366.702 296.402C366.432 298.769 366.163 301.137 366.07 303.51C365.929 307.095 364.872 310.448 363.818 313.795C363.416 315.068 363.015 316.341 362.665 317.625C362.165 319.459 360.792 321.236 358.346 322.049C356.746 322.579 355.233 323.343 353.718 324.107H353.716C352.245 324.85 350.774 325.592 349.224 326.121C347.16 326.826 344.947 327.144 342.744 327.461C342.101 327.553 341.459 327.645 340.822 327.747C339.818 327.907 338.688 328.006 337.744 327.728C334.896 326.893 334.507 326.356 334.598 323.519C334.783 317.727 335.022 311.935 335.31 306.146C335.402 304.306 335.548 302.469 335.694 300.632C335.805 299.251 335.915 297.869 336.002 296.486C336.029 296.056 336.058 295.626 336.086 295.195V295.192C336.228 293.043 336.371 290.891 336.327 288.743C336.283 286.548 335.966 284.35 335.632 282.173C335.31 280.074 336.186 279.451 338.429 279.811C343.369 280.602 348.226 280.161 352.606 277.667C355.372 276.091 356.446 273.231 357.012 270.399C357.297 268.974 357.374 267.512 357.451 266.048C357.524 264.676 357.597 263.303 357.84 261.96C358.899 256.125 358.914 250.258 358.85 244.379C358.833 242.768 358.675 241.153 358.478 239.553C358.44 239.244 358.229 238.956 358.018 238.668L358.017 238.667C357.92 238.535 357.823 238.403 357.743 238.269C357.637 238.397 357.51 238.523 357.382 238.648C357.101 238.925 356.819 239.202 356.77 239.513C356.646 240.283 356.677 241.077 356.708 241.868V241.87V241.872C356.715 242.056 356.722 242.238 356.727 242.42C356.762 243.625 356.818 244.832 356.876 246.038C357.001 248.673 357.126 251.308 357.011 253.932C356.93 255.775 356.594 257.604 356.258 259.435C356.042 260.611 355.826 261.789 355.677 262.97C355.554 263.947 355.517 264.934 355.48 265.92C355.442 266.949 355.402 267.977 355.267 268.994C354.865 272 353.79 274.897 350.946 276.428C349.121 277.41 346.805 277.924 344.694 277.963C342.038 278.013 339.375 277.809 336.713 277.604C335.584 277.518 334.455 277.43 333.326 277.363C332.695 277.325 332.062 277.3 331.428 277.274H331.425C330.081 277.221 328.736 277.167 327.408 276.995C324.888 276.668 322.378 276.273 319.868 275.879C318.64 275.685 317.412 275.492 316.183 275.307C315.547 275.211 314.913 275.107 314.278 275.002L314.268 275C312.558 274.718 310.847 274.436 309.126 274.327C307.599 274.231 307.668 273.383 307.83 272.515C307.932 271.966 308.114 271.429 308.296 270.894C308.51 270.26 308.725 269.628 308.806 268.979C309.002 267.417 308.586 265.968 307.073 265.012C306.025 264.35 305.994 264.161 307.203 263.677C308.422 263.19 309.744 262.691 311.032 262.664C316.266 262.55 321.512 262.447 326.738 262.674C329.578 262.797 332.404 263.224 335.226 263.65C336.067 263.777 336.908 263.903 337.748 264.023C338.025 264.062 338.266 264.295 338.512 264.533C338.658 264.674 338.804 264.816 338.961 264.921C339.215 265.091 339.612 265.349 339.796 265.265C340.039 265.154 340.284 264.742 340.272 264.469C340.181 262.407 340.077 260.342 339.874 258.287C339.817 257.705 339.693 257.128 339.57 256.552C339.431 255.905 339.293 255.26 339.248 254.607C339.121 252.757 339.051 250.903 338.981 249.049V249.043C338.945 248.088 338.909 247.133 338.865 246.179C338.83 245.42 338.769 244.66 338.708 243.901C338.579 242.303 338.45 240.706 338.568 239.124C338.736 236.866 339.117 234.622 339.498 232.378C339.638 231.554 339.778 230.728 339.907 229.903C339.958 229.577 340.004 229.248 340.05 228.92V228.919L340.05 228.918C340.199 227.846 340.349 226.769 340.691 225.756C341.336 223.845 342.397 222.068 344.764 221.856C345.468 221.793 346.189 221.945 346.914 222.098C347.331 222.186 347.75 222.274 348.166 222.322C348.639 222.376 349.119 222.373 349.599 222.37C349.815 222.368 350.03 222.367 350.246 222.371C350.098 222.184 349.964 221.963 349.83 221.743C349.538 221.266 349.247 220.79 348.831 220.648C345.281 219.433 341.742 219.655 339.982 223.682C339.025 225.871 338.206 228.198 337.862 230.535C337.765 231.195 337.662 231.854 337.56 232.514C336.982 236.251 336.402 239.999 336.714 243.815C336.914 246.26 337.086 248.706 337.258 251.152C337.434 253.65 337.61 256.149 337.816 258.645C337.879 259.417 338.037 260.182 338.194 260.948C338.298 261.458 338.403 261.968 338.481 262.48C338.495 262.579 338.049 262.885 337.884 262.844C337.195 262.673 336.51 262.455 335.826 262.236C334.486 261.809 333.148 261.382 331.79 261.314C325.66 261.007 319.511 260.871 313.376 260.989C311.497 261.025 311.337 260.63 311.327 259.068C311.286 252.454 313.056 246.223 315.374 240.089C315.398 240.023 315.458 239.959 315.514 239.898C315.585 239.822 315.65 239.751 315.638 239.689C315.549 239.265 315.429 238.846 315.308 238.428C315.266 238.281 315.224 238.135 315.184 237.988C315.077 238.114 314.955 238.234 314.834 238.354C314.571 238.614 314.308 238.874 314.198 239.184C313.92 239.97 313.63 240.753 313.338 241.537C312.477 243.854 311.614 246.176 311.085 248.563C310.534 251.051 310.253 253.595 309.973 256.139V256.142C309.85 257.251 309.728 258.36 309.584 259.466C309.562 259.633 309.57 259.823 309.58 260.014C309.609 260.632 309.638 261.261 308.634 261.155C308.29 261.118 307.764 259.932 307.847 259.342C307.963 258.523 308.075 257.703 308.186 256.882C308.677 253.281 309.168 249.673 310.008 246.146C310.937 242.25 312.188 238.425 313.438 234.603L313.442 234.586C313.717 233.749 313.99 232.911 314.261 232.074C314.49 231.362 314.937 230.712 315.382 230.066L315.383 230.065V230.064C315.558 229.81 315.734 229.556 315.894 229.299C316.618 228.145 317.354 226.999 318.091 225.853L318.513 225.197C318.76 224.812 319.013 224.43 319.266 224.048C319.382 223.874 319.498 223.699 319.613 223.523C319.722 223.703 319.845 223.88 319.969 224.056C320.242 224.445 320.515 224.834 320.622 225.261C320.775 225.872 320.868 226.497 320.96 227.122C321.074 227.897 321.19 228.67 321.418 229.413C321.647 230.153 322.31 231.207 322.91 231.297C323.698 231.414 324.946 230.957 325.429 230.339C328.431 226.496 331.35 222.592 334.268 218.688C335.04 217.656 335.812 216.623 336.586 215.592C336.778 215.335 336.986 215.056 337.06 214.757C337.102 214.589 337.052 214.399 337.002 214.21C336.98 214.126 336.958 214.042 336.943 213.96C336.866 213.99 336.779 214.014 336.693 214.037C336.507 214.087 336.321 214.138 336.221 214.256L335.948 214.579C334.523 216.26 333.097 217.943 331.733 219.669C330.178 221.637 328.646 223.621 327.114 225.605C326.317 226.639 325.518 227.673 324.718 228.704C324.652 228.788 324.57 228.861 324.488 228.934C324.394 229.016 324.3 229.099 324.232 229.199C324.065 229.444 323.918 229.702 323.77 229.96C323.709 230.067 323.647 230.174 323.585 230.28C323.502 230.115 323.397 229.95 323.292 229.785C323.064 229.426 322.836 229.067 322.837 228.708C322.844 226.65 322.467 224.706 321.353 222.942C321.279 222.825 321.211 222.693 321.142 222.559C320.829 221.949 320.49 221.291 319.423 221.733C319.376 221.752 318.94 221.189 318.889 220.869C318.572 218.908 319.365 217.803 321.15 216.632C323.73 214.943 326.309 213.198 328.604 211.18C330.496 209.516 332.247 207.705 333.999 205.895C334.812 205.054 335.626 204.213 336.453 203.387C336.534 203.306 336.606 203.221 336.674 203.141C337.018 202.736 337.267 202.444 337.934 203.442C338.612 204.459 339.638 205.263 340.665 206.065C341.106 206.41 341.547 206.755 341.961 207.118L341.974 207.129C342.65 207.721 343.134 208.144 342.283 209.167ZM266.794 329.72L267.087 329.659C267.682 329.815 268.337 330.068 268.478 330.482C269.73 334.148 270.918 337.833 272.106 341.518L272.504 342.75C272.646 343.192 272.79 343.634 272.934 344.076C273.484 345.758 274.034 347.441 274.492 349.146C274.811 350.335 274.711 351.339 273.334 352.222C271.894 353.145 270.572 354.238 269.25 355.332C268.53 355.927 267.808 356.523 267.067 357.093C266.19 357.767 265.918 356.973 265.75 356.481C265.73 356.424 265.712 356.37 265.694 356.324C264.9 354.239 264.206 352.119 263.525 349.996C263.414 349.65 263.257 349.259 263.097 348.862C262.668 347.8 262.221 346.69 262.593 346.265C263.378 345.367 264.581 344.805 265.782 344.243C266.262 344.02 266.741 343.795 267.193 343.55C267.298 343.493 267.414 343.452 267.53 343.412C267.674 343.361 267.819 343.31 267.942 343.227C268.243 343.023 268.529 342.796 268.814 342.569C268.931 342.475 269.05 342.381 269.169 342.289C268.964 342.21 268.743 342.094 268.522 341.979C268.04 341.727 267.558 341.476 267.246 341.605C265.731 342.232 264.226 343.006 262.95 344.001C261.906 344.813 261.446 344.733 261.017 343.612L260.846 343.164C259.616 339.945 258.386 336.726 257.19 333.496C257.142 333.367 257.426 333.058 257.624 332.925C260.383 331.069 263.589 330.394 266.794 329.72ZM272.47 336.235C272.418 335.906 272.364 335.572 272.086 335.488C271.808 334.525 271.512 333.693 271.233 332.906C271.054 332.401 270.88 331.913 270.722 331.421C270.177 329.722 270.652 329.066 272.486 329.164C274.329 329.261 276.17 329.409 278.01 329.558C279.151 329.651 280.294 329.743 281.436 329.823C282.512 329.899 282.184 330.398 281.848 330.911L281.844 330.917C280.097 333.581 277.332 334.938 274.577 336.29C274.238 336.457 273.9 336.622 273.564 336.791C272.632 337.258 272.552 336.751 272.47 336.235ZM252.606 338.785C251.778 337.745 251.372 336.877 252.446 335.831C253.647 335.02 254.656 334.354 255.706 333.758C255.873 333.663 256.106 333.678 256.34 333.693C256.448 333.7 256.555 333.706 256.656 333.702C256.633 333.776 256.599 333.852 256.566 333.927C256.494 334.091 256.422 334.253 256.446 334.402C256.501 334.727 256.547 335.056 256.594 335.385C256.734 336.38 256.875 337.378 257.227 338.3C257.654 339.417 257.301 339.756 256.278 339.761C256.07 339.762 255.86 339.77 255.65 339.78C254.556 339.826 253.471 339.872 252.606 338.785Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M306.958 443.977C307.326 443.964 307.695 443.951 308.066 443.939C309.499 443.796 310.843 443.707 312.187 443.69C313.782 443.67 315.088 443.115 315.634 441.645C317.242 437.312 318.777 432.953 320.272 428.582C320.338 428.39 320.46 428.194 320.584 427.996C320.937 427.432 321.307 426.838 320.458 426.193C320.292 426.411 320.11 426.623 319.928 426.836C319.531 427.3 319.134 427.765 318.898 428.295C317.865 430.624 316.861 432.977 316.054 435.385C315.621 436.677 314.69 437.045 313.577 437.142C311.314 437.337 309.035 437.533 306.768 437.484C299.192 437.322 291.614 437.12 284.045 436.789C281.087 436.659 279.028 434.169 279.659 431.386C279.84 430.589 280.795 429.773 281.612 429.374C281.866 429.249 282.424 429.673 282.954 430.075C283.148 430.223 283.339 430.368 283.51 430.482C283.696 430.606 283.866 430.754 284.035 430.901C284.209 431.053 284.382 431.203 284.574 431.329C285.173 431.723 285.615 431.653 285.654 430.852C285.711 429.692 283.599 427.608 282.368 427.561C278.982 427.432 277.869 429.621 277.466 432.228C277.063 434.846 280.162 438.279 283.805 438.53C286.013 438.683 288.225 438.815 290.438 438.871C296.038 439.014 301.64 439.156 307.242 439.201C308.693 439.213 310.144 439.128 311.595 439.043L311.599 439.042L311.62 439.042C312.55 438.987 313.481 438.933 314.412 438.904C314.604 438.898 314.801 439.042 314.998 439.185C315.089 439.251 315.18 439.318 315.271 439.369C315.029 439.639 314.802 439.957 314.574 440.274C314.07 440.978 313.565 441.681 312.906 441.859C311.414 442.262 309.795 442.273 308.197 442.285C307.862 442.287 307.529 442.289 307.197 442.295C304.105 442.35 301.007 442.399 297.918 442.285C297.475 442.269 297.031 442.255 296.586 442.24C293.726 442.145 290.848 442.049 288.054 441.563C284.199 440.892 280.383 440.015 276.569 439.138L276.563 439.137L276.558 439.136L276.553 439.134C275.166 438.816 273.779 438.497 272.391 438.188C272.326 438.174 272.261 438.159 272.195 438.145C270.81 437.841 269.254 437.498 268.943 435.999C268.698 434.819 269.578 434.112 270.442 433.418C270.73 433.187 271.015 432.957 271.258 432.711C271.272 432.697 271.305 432.701 271.339 432.706C271.372 432.711 271.407 432.716 271.43 432.705C271.829 432.522 272.227 432.34 272.626 432.158L272.627 432.157L272.629 432.156H272.63C273.92 431.567 275.21 430.977 276.479 430.348C276.737 430.22 276.934 429.979 277.132 429.739C277.222 429.628 277.314 429.518 277.41 429.418C277.282 429.367 277.145 429.293 277.009 429.22C276.714 429.061 276.42 428.903 276.202 428.971L275.953 429.049C273.154 429.916 270.308 430.799 268.354 433.074C266.283 435.484 266.933 438.345 269.727 439.197C271.73 439.807 273.762 440.335 275.793 440.863L275.797 440.865H275.798L275.799 440.865C277.186 441.226 278.574 441.587 279.954 441.974C285.022 443.397 290.221 443.589 295.419 443.781C297.049 443.841 298.679 443.902 300.306 444C302.496 444.132 304.701 444.055 306.958 443.977Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M260.927 363.351C260.038 364.169 259.143 364.966 258.254 365.757C256.239 367.55 254.256 369.315 252.455 371.237C250.351 373.482 248.573 376.042 246.915 378.619C246.422 379.385 246.302 380.379 246.183 381.36C246.142 381.7 246.101 382.04 246.044 382.367C246.014 382.543 246.146 382.745 246.278 382.945C246.338 383.039 246.399 383.132 246.444 383.221C246.512 383.145 246.588 383.071 246.664 382.997C246.83 382.837 246.996 382.675 247.073 382.482C247.222 382.107 247.339 381.715 247.455 381.323C247.661 380.631 247.866 379.942 248.248 379.358C248.461 379.033 248.673 378.705 248.884 378.376C250.016 376.617 251.166 374.832 252.678 373.43C256.771 369.636 261.005 365.982 265.238 362.327L265.248 362.318L265.254 362.313L265.257 362.31L265.269 362.301C266.458 361.273 267.648 360.246 268.834 359.216C269.065 359.016 269.392 358.919 269.718 358.823C269.87 358.777 270.022 358.732 270.165 358.677C270.127 358.848 270.109 359.039 270.09 359.229C270.05 359.642 270.01 360.055 269.774 360.281C267.91 362.072 266.013 363.846 263.996 365.477C259.766 368.9 255.688 372.423 252.399 376.764C250.631 379.099 249.357 381.574 248.398 384.272C247.759 386.064 248.386 387.671 248.998 389.24L248.999 389.245L249.001 389.249C249.029 389.321 249.057 389.393 249.085 389.466C249.502 390.542 252.106 390.908 253.867 390.361C258.382 388.96 262.234 386.413 265.657 383.409C270.168 379.449 274.53 375.301 278.614 370.938C280.547 368.873 282.122 366.494 283.693 364.121C284.152 363.427 284.611 362.733 285.079 362.049C285.337 361.671 285.409 361.183 285.482 360.688C285.53 360.36 285.58 360.028 285.684 359.725C285.754 359.521 285.966 359.361 286.177 359.201C286.273 359.128 286.37 359.055 286.452 358.978C286.519 359.073 286.599 359.165 286.68 359.257C286.854 359.456 287.029 359.655 287.063 359.874C287.365 361.816 286.737 363.54 285.543 365.083C282.226 369.376 278.818 373.582 274.718 377.248C273.361 378.461 272.102 379.775 270.843 381.089C269.914 382.058 268.985 383.027 268.016 383.957C263.846 387.957 258.768 390.545 253.2 392.203C250.595 392.978 248.095 391.356 247.067 388.771C246.825 388.161 246.498 387.583 246.17 387.005C245.863 386.464 245.556 385.921 245.319 385.354C243.652 381.36 244.862 377.971 247.369 374.566C251.364 369.137 256.573 364.969 261.802 360.786L262.009 360.621C262.331 360.363 262.798 360.22 263.221 360.147C263.485 360.103 263.918 360.214 264.041 360.399C264.152 360.566 264.042 361.041 263.861 361.185C263.272 361.652 262.661 362.093 262.022 362.553L262.022 362.554L262.021 362.555C261.665 362.812 261.3 363.075 260.927 363.351Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 1
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M318.15 426.593C319.119 423.32 320.059 420.04 321.012 416.59C322.178 413.859 322.643 411.164 322.846 408.391C322.857 408.247 322.891 408.096 322.924 407.949C323.026 407.496 323.118 407.089 322.481 407.07C322.004 407.056 321.254 407.787 321.067 408.323C320.914 408.762 320.883 409.243 320.854 409.722C320.82 410.243 320.787 410.764 320.596 411.226C320.288 411.971 319.598 412.779 318.858 413.115C316.23 414.306 313.631 413.827 311.219 412.448C310.77 412.19 310.28 411.432 310.356 410.993C310.483 410.265 310.697 409.551 310.91 408.836C311.126 408.116 311.341 407.397 311.466 406.663C311.529 406.301 311.298 405.893 311.069 405.485C310.964 405.299 310.858 405.113 310.782 404.931C310.657 405.06 310.511 405.183 310.366 405.307C310.047 405.577 309.728 405.847 309.625 406.18C309.417 406.847 309.29 407.536 309.162 408.226C309.053 408.811 308.945 409.395 308.788 409.967C308.541 410.866 308.275 411.762 308.01 412.658V412.659C307.049 415.902 306.089 419.144 305.991 422.571C305.955 423.848 303.986 425.297 302.602 425.116C302.346 425.083 301.918 424.207 302.009 424.114C302.347 423.765 302.737 423.464 303.127 423.162C303.401 422.951 303.674 422.739 303.931 422.511C304.21 422.263 304.447 421.91 304.537 421.566C304.564 421.463 304.049 421.12 303.747 421.065C301.887 420.729 299.13 423.645 299.644 425.387C299.937 426.378 300.259 427.361 300.581 428.345L300.659 428.582C300.761 428.893 300.878 429.2 300.994 429.507C301.048 429.647 301.102 429.787 301.153 429.928C301.251 429.794 301.356 429.664 301.462 429.535C301.692 429.252 301.922 428.969 302.07 428.652C302.857 426.974 305.79 425.895 307.026 427.058C309.293 429.191 312.07 429.15 314.792 428.85C316.074 428.708 317.676 428.192 318.15 426.593ZM307.549 423.969C307.578 423.793 307.609 423.617 307.62 423.449C308.274 420.729 308.778 418.187 309.215 415.633C309.437 414.334 309.975 414.121 311.286 414.57C313.56 415.35 315.89 416.129 318.384 415.249C318.626 415.163 318.941 415.264 319.254 415.364C319.399 415.411 319.545 415.458 319.683 415.486C319.658 415.599 319.634 415.712 319.61 415.825C319.558 416.069 319.506 416.313 319.44 416.554C319.226 417.334 319.006 418.114 318.785 418.893C318.322 420.525 317.861 422.157 317.457 423.802C316.954 425.852 315.526 427.25 313.38 427.564C311.627 427.82 308.114 426.374 307.548 425.046C307.417 424.738 307.483 424.354 307.549 423.969Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M337.23 359.628L337.231 359.626L337.233 359.623C337.926 358.058 338.61 356.512 339.326 354.979C339.53 354.543 339.983 354.201 340.414 353.876C340.503 353.808 340.591 353.742 340.676 353.676C340.817 353.565 341.276 353.591 341.366 353.709C341.52 353.914 341.631 354.299 341.531 354.507C339.711 358.288 337.885 362.066 335.994 365.816C335.371 367.053 334.263 367.691 332.774 367.551C332.165 367.494 331.555 367.44 330.946 367.386L330.943 367.385L330.934 367.384C329.15 367.226 327.366 367.067 325.594 366.835C324.862 366.739 324.108 366.371 323.503 365.945C323.198 365.73 323.002 365.372 322.806 365.014C322.718 364.854 322.631 364.694 322.534 364.547C322.739 364.547 322.958 364.524 323.176 364.501C323.649 364.452 324.121 364.402 324.464 364.581C327.291 366.057 330.355 365.984 333.356 365.727C333.875 365.683 334.337 365.023 334.824 364.328C335.062 363.989 335.305 363.641 335.564 363.351C336.137 362.098 336.686 360.857 337.23 359.628Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M246.19 300.674C246.606 303.02 247.026 305.366 247.535 307.797C247.733 308.568 247.894 309.334 248.052 310.089C248.299 311.268 248.542 312.424 248.912 313.542C249.71 315.95 250.736 318.295 251.774 320.623C251.892 320.889 252.27 321.048 252.649 321.208C252.823 321.282 252.998 321.356 253.147 321.44C253.149 321.274 253.165 321.103 253.182 320.933C253.217 320.554 253.253 320.176 253.127 319.857C252.97 319.454 252.737 319.073 252.506 318.694C252.199 318.191 251.894 317.691 251.766 317.151C251.037 314.051 250.342 310.944 249.649 307.837C249.03 305.071 248.412 302.303 247.769 299.541C247.675 299.14 247.358 298.788 247.042 298.434C246.894 298.27 246.747 298.107 246.622 297.938C246.562 298.097 246.497 298.255 246.43 298.413C246.275 298.787 246.119 299.159 246.042 299.547C245.99 299.804 246.056 300.084 246.122 300.361C246.146 300.466 246.171 300.571 246.19 300.674Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M325.654 351.092C324.945 350.81 324.414 350.529 323.882 350.248C324.043 350.193 324.206 350.117 324.368 350.043C324.72 349.88 325.072 349.718 325.402 349.752C326.456 349.861 327.507 350.011 328.558 350.161L328.558 350.162C330.146 350.389 331.732 350.616 333.327 350.699C335.138 350.793 336.956 350.757 338.774 350.72H338.782C339.973 350.696 341.165 350.672 342.354 350.685C342.777 350.689 343.198 350.856 343.618 351.024C343.812 351.101 344.006 351.178 344.199 351.239C344.06 351.332 343.922 351.45 343.783 351.568C343.484 351.822 343.185 352.076 342.881 352.081L342.145 352.095H342.142C338.81 352.162 335.474 352.228 332.15 352.075C330.761 352.011 329.38 351.755 327.949 351.489H327.948H327.947C327.199 351.35 326.438 351.209 325.654 351.092Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M293.389 285.322C293.082 285.3 292.766 285.277 292.442 285.249C292.277 285.249 292.133 285.25 292.003 285.251C291.76 285.252 291.566 285.254 291.374 285.249C290.409 285.221 289.444 285.192 288.479 285.163H288.475C285.572 285.076 282.668 284.989 279.764 284.923C279.401 284.915 278.991 285.074 278.677 285.266C278.442 285.41 278.249 285.617 278.057 285.824C277.972 285.913 277.888 286.004 277.801 286.089C277.926 286.145 278.05 286.216 278.176 286.287C278.444 286.44 278.713 286.593 278.986 286.599C284.636 286.746 290.287 286.857 295.938 286.948C296.198 286.952 296.459 286.844 296.721 286.736C296.842 286.686 296.964 286.636 297.085 286.597C296.994 286.491 296.907 286.364 296.821 286.236C296.631 285.958 296.442 285.679 296.206 285.634C295.307 285.464 294.387 285.396 293.389 285.322Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M310.162 386.461L310.162 386.451C310.555 383.475 310.934 380.6 311.419 377.741C311.484 377.357 311.854 377.02 312.225 376.683C312.396 376.527 312.567 376.371 312.709 376.21C312.756 376.391 312.826 376.576 312.895 376.76C313.046 377.158 313.195 377.557 313.121 377.91C311.96 383.389 311.245 388.904 311.338 394.507C311.342 394.769 311.136 395.035 310.93 395.301C310.834 395.425 310.739 395.549 310.664 395.672C310.551 395.512 310.408 395.353 310.264 395.194C309.952 394.847 309.64 394.5 309.638 394.151C309.628 392.787 309.722 391.422 309.82 389.998C309.862 389.386 309.906 388.764 309.941 388.128C310.015 387.568 310.089 387.014 310.162 386.461Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M348.89 334.744C348.805 335.18 348.718 335.628 348.599 336.089C348.553 336.37 348.548 336.631 348.543 336.88C348.539 337.108 348.535 337.327 348.499 337.54C348.347 338.427 348.182 339.313 348.018 340.198V340.199C347.688 341.971 347.358 343.741 347.135 345.524C347.118 345.672 347.08 345.834 347.042 346.006C346.872 346.749 346.671 347.632 347.858 347.893C348.003 347.925 348.658 346.425 348.841 345.587C349.374 343.165 349.807 340.72 350.238 338.278C350.531 336.62 350.806 334.955 350.966 333.282C350.987 333.059 350.745 332.814 350.502 332.568C350.39 332.455 350.278 332.341 350.193 332.23C350.092 332.325 349.974 332.415 349.855 332.506C349.595 332.703 349.335 332.9 349.258 333.15C349.101 333.665 348.998 334.195 348.89 334.744Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M274.497 356.15C277.501 354.497 280.604 354.517 283.708 355.257C284.279 355.393 284.776 355.817 285.273 356.241C285.501 356.436 285.729 356.631 285.964 356.798C285.701 356.811 285.434 356.842 285.166 356.873C284.586 356.94 284.006 357.008 283.47 356.89C279.832 356.089 276.558 356.799 273.513 358.789C273.241 358.967 272.915 359.07 272.589 359.172C272.438 359.22 272.287 359.267 272.142 359.322C272.093 359.2 272.022 359.054 271.95 358.907C271.794 358.591 271.639 358.275 271.715 358.21C272.299 357.713 272.93 357.266 273.594 356.796L273.594 356.796L273.596 356.795L273.597 356.794L273.598 356.793C273.891 356.586 274.191 356.374 274.497 356.15Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M315.98 184.774L315.978 184.775C315.901 184.802 315.823 184.83 315.744 184.858C314.937 185.132 314.144 185.379 313.364 185.622C312.435 185.911 311.523 186.195 310.625 186.513C310.264 186.64 309.958 186.911 309.652 187.182C309.512 187.306 309.372 187.43 309.226 187.54C309.394 187.61 309.571 187.71 309.75 187.81C310.134 188.026 310.518 188.242 310.796 188.153C313.445 187.304 316.051 186.331 318.656 185.359L318.83 185.294C319.025 185.222 319.243 184.673 319.202 184.641C319.174 184.619 319.144 184.595 319.114 184.571H319.113C318.832 184.35 318.49 184.081 318.218 184.123C317.485 184.235 316.775 184.489 315.994 184.769L315.98 184.774Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M296.817 428.164C296.695 427.992 296.574 427.827 296.456 427.667C296.082 427.157 295.738 426.689 295.501 426.177C295.294 425.729 295.126 424.864 295.334 424.722C295.794 424.411 296.641 424.171 297.084 424.381C298.375 424.993 299.543 429.801 298.719 430.894C298.594 431.061 297.567 430.932 297.497 430.748C297.315 430.278 297.204 429.782 297.088 429.264C297.009 428.908 296.926 428.541 296.817 428.164Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M290.99 428.243C291.234 428.673 291.487 429.121 291.728 429.621C291.757 429.773 291.78 429.918 291.802 430.056C291.874 430.496 291.933 430.866 292.109 431.175C292.286 431.487 292.553 431.751 292.819 432.015C292.935 432.13 293.052 432.246 293.161 432.365C293.272 432.241 293.405 432.122 293.537 432.002C293.826 431.741 294.116 431.48 294.189 431.172C294.507 429.816 293.193 426.614 291.71 425.722C291.466 425.575 291.076 425.65 290.686 425.726C290.507 425.761 290.329 425.796 290.163 425.808C290.182 425.942 290.192 426.081 290.202 426.219C290.223 426.524 290.244 426.828 290.369 427.087C290.556 427.475 290.77 427.851 290.99 428.243Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M289.228 430.307C289.006 431.222 288.782 431.965 288.56 432.708C288.436 432.505 288.316 432.299 288.197 432.093C287.93 431.634 287.663 431.176 287.35 430.748C287.274 430.646 287.198 430.542 287.122 430.439C286.486 429.568 285.844 428.69 285.08 427.932L285.059 427.911C284.489 427.346 284.407 427.265 285.15 426.844C286.559 426.046 287.434 426.87 288.131 427.838C288.527 428.389 288.766 429.045 289.031 429.773L289.032 429.774C289.095 429.948 289.159 430.125 289.228 430.307Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M323.826 356.167L323.869 355.893C323.812 354.868 323.756 354.014 323.7 353.161V353.159C322.621 353.361 322.516 354.078 322.398 355.003C322.282 355.925 322.073 356.835 321.863 357.746C321.699 358.462 321.535 359.179 321.415 359.901C321.379 360.116 321.936 360.535 322.292 360.653C322.505 360.722 323.075 360.431 323.12 360.228C323.406 358.933 323.606 357.619 323.826 356.167Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M311.816 169.598C311.702 169.503 311.592 169.425 311.491 169.353C311.318 169.23 311.172 169.126 311.074 168.99C310.877 168.716 310.715 168.418 310.554 168.121C310.486 167.996 310.419 167.872 310.349 167.749C310.499 167.736 310.667 167.701 310.836 167.668C311.202 167.593 311.568 167.52 311.741 167.662C313.067 168.752 314.339 169.915 315.504 171.163C315.653 171.323 315.53 171.715 315.409 172.108C315.352 172.289 315.296 172.471 315.266 172.629C315.162 172.558 315.054 172.491 314.946 172.423C314.709 172.275 314.472 172.126 314.27 171.942C313.698 171.419 313.142 170.88 312.554 170.31C312.314 170.078 312.07 169.841 311.816 169.598Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M308.359 171.897C308.148 172.17 307.93 172.453 307.709 172.685C307.67 172.857 307.616 173.038 307.562 173.219C307.316 174.036 307.066 174.868 308.202 175.118C309.689 175.445 310.022 174.185 310.296 173.093C310.302 173.069 310.3 173.041 310.297 173.013C310.294 172.982 310.29 172.952 310.301 172.925C310.662 172.004 310.691 170.932 309.563 170.828C309.209 170.795 308.798 171.328 308.359 171.897Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M319.59 181.17L319.558 181.204C318.914 181.865 318.329 182.465 317.404 181.801C317.004 181.513 316.354 180.965 316.435 180.748C316.687 180.076 317.135 179.385 317.71 178.948C317.994 178.732 318.962 178.883 319.197 179.179C319.518 179.583 319.579 180.178 319.641 180.785C319.651 180.886 319.661 180.986 319.673 181.086C319.645 181.114 319.618 181.142 319.59 181.17Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M331.01 186.258C330.713 185.877 330.415 185.496 329.939 185.115C329.344 185.619 328.928 186.122 328.511 186.626C328.614 186.683 328.722 186.761 328.831 186.839C329.072 187.01 329.313 187.181 329.48 187.13C329.871 187.011 330.225 186.775 330.578 186.538C330.721 186.442 330.865 186.347 331.01 186.258Z",
    fill: "#00160A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M309.402 117.077C310.37 116.156 311.267 115.335 312.117 114.472C312.309 114.277 312.336 113.935 312.439 113.661C312.15 113.771 311.782 113.807 311.586 114.001C309.494 116.077 306.911 117.321 304.039 118.084C302.806 118.411 301.576 118.752 300.326 119.012C300.063 119.066 299.724 118.789 299.42 118.665C299.576 118.424 299.674 118.055 299.898 117.963C301.316 117.378 302.719 116.698 304.206 116.344C307.018 115.675 309.034 113.943 311.29 112.37C314.156 110.369 314.645 107.619 314.988 104.781C315.282 102.348 313.95 100.241 312.533 98.2824C309.847 94.5678 306.175 92.5592 301.406 92.0739C295.882 91.5119 291.607 93.5015 287.958 97.2131C287.561 97.6177 286.894 97.785 286.353 98.0618C286.505 97.3598 286.42 96.4685 286.846 95.9848C291.314 90.9202 299.314 88.7191 306.591 91.6982C312.158 93.9769 315.726 97.9721 316.685 103.411C317.437 107.678 316.146 112.04 313.115 115.537C310.57 118.474 307.478 120.716 303.342 121.449C298.329 122.338 293.723 121.624 289.542 118.809C285.627 116.172 283.322 112.601 282.789 108.042C282.642 106.786 282.456 105.523 282.477 104.266C282.483 103.846 283.077 103.434 283.402 103.02C283.674 103.428 284.133 103.816 284.189 104.251C284.632 107.652 285.427 110.968 287.051 114.033C288.892 117.506 292.398 119.074 296.02 119.971C299.689 120.881 303.462 120.366 306.924 118.681C307.771 118.27 308.518 117.675 309.402 117.077Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M293.808 108.898C293.81 108.386 293.9 107.958 293.991 107.531C294.322 107.678 294.712 107.76 294.972 107.98C296.746 109.482 296.547 109.388 297.689 107.501C298.91 105.483 298.582 103.832 297.538 101.88C296.426 99.7968 297.658 98.9283 299.446 98.2658C299.602 98.208 299.865 98.1776 299.966 98.2597C301.365 99.3945 302.563 95.8168 303.427 97.8467C304.093 99.412 305.48 100.077 306.238 101.338C306.443 101.682 306.25 102.242 306.239 102.703C305.825 102.634 305.316 102.687 305.01 102.476C302.287 100.593 302.279 100.575 301.398 103.589C301.298 103.932 301.461 104.422 301.663 104.756C302.632 106.353 304.39 107.696 302.998 109.904C301.837 111.748 298.354 112.726 296.552 111.463C295.563 110.771 294.776 109.819 293.808 108.898ZM299.274 107.621C299.069 108.157 298.743 108.685 298.698 109.233C298.666 109.612 299.022 110.02 299.204 110.414C299.978 110.02 300.964 109.78 301.449 109.177C301.771 108.775 301.469 107.828 301.27 107.174C301.146 106.764 300.694 106.446 300.389 106.087C300.077 106.542 299.766 106.996 299.274 107.621ZM300.529 101.316C300.551 100.882 300.573 100.449 300.595 100.015C300.062 100.253 299.371 100.379 299.059 100.775C298.895 100.983 299.394 101.662 299.593 102.129C299.846 101.915 300.098 101.701 300.529 101.316Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M295.779 118.271C295.742 117.908 295.795 117.631 295.849 117.353C296.154 117.545 296.459 117.738 296.765 117.931C296.466 118.073 296.168 118.214 295.779 118.271Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M291.478 116.055C291.866 116.058 292.165 116.146 292.463 116.235C292.314 116.458 292.166 116.682 292.017 116.906C291.807 116.651 291.598 116.396 291.478 116.055Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M103.4 197.67C100.693 195.825 99.5568 193.185 98.6768 190.418C98.56 190.051 98.8336 189.571 98.9264 189.142C99.2992 189.332 99.796 189.434 100.022 189.726C100.718 190.624 101.182 191.708 101.967 192.517C104.661 195.292 108.158 195.943 111.712 194.78C115.144 193.656 117.309 190.966 117.762 187.528C118.201 184.208 115.451 178.86 110.513 178.071C107.601 177.606 105.366 178.414 103.051 179.722C102.646 179.95 102.001 179.794 101.466 179.815C101.707 179.376 101.83 178.79 102.206 178.522C108.055 174.33 114.486 176.718 118.054 181.421C119.247 182.995 119.661 185.27 119.913 187.284C120.33 190.606 119.864 193.748 117.174 196.41C114.318 199.237 108.179 200.364 104.695 198.274C104.326 198.052 103.893 197.925 103.4 197.67ZM108.329 197.925C112.069 198.078 115.207 197.01 117.254 193.847C117.639 193.25 117.818 192.533 118.092 191.871C117.593 192.293 117.038 192.668 116.603 193.143C113.224 196.836 109.059 197.306 104.415 195.883C104.129 195.795 103.834 195.734 103.542 195.66C103.724 195.961 103.832 196.426 104.1 196.534C105.366 197.052 106.676 197.471 108.329 197.925Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M110.031 182.164C110.539 182.46 110.958 182.672 111.376 182.882C111.061 183.012 110.755 183.17 110.429 183.266C109.572 183.517 109.175 185.225 109.841 186.054C110.199 186.499 110.598 187.052 111.105 187.227C112.908 187.846 112.168 189.298 112.004 190.216C111.736 191.715 107.955 193.081 106.504 192.428C106.304 192.338 106.01 191.996 106.026 191.976C106.287 191.67 106.543 191.312 106.894 191.132C108.94 190.084 109.075 188.254 107.173 186.943C105.616 185.871 105.583 184.617 106.942 183.186C107.364 182.741 107.503 182.059 107.795 181.497C108.023 181.057 108.286 180.634 108.534 180.204C108.883 180.593 109.251 180.969 109.576 181.377C109.738 181.581 109.822 181.843 110.031 182.164ZM109.942 188.554C109.948 189.128 109.955 189.702 109.962 190.276C110.086 190.259 110.32 190.24 110.32 190.225C110.309 189.651 110.278 189.076 110.241 188.502C110.238 188.46 110.162 188.423 109.942 188.554Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M99.0984 186.253C98.7096 186.016 98.1088 185.637 98.1624 185.382C98.4536 183.999 98.848 182.628 99.3472 181.301C99.4664 180.985 100.127 180.853 100.538 180.636C100.668 181.134 101.026 181.702 100.886 182.116C100.416 183.496 99.768 184.822 99.0984 186.253Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M391.258 170.576C392.155 168.147 393.002 165.812 391.752 163.353C391.611 163.076 391.657 162.677 391.722 162.355C391.785 162.043 391.985 161.757 392.124 161.459C392.382 161.666 392.742 161.824 392.88 162.088C394.319 164.825 394.367 167.66 393.162 170.443C390.725 176.07 385.932 178.263 380.102 177.382C376.078 176.773 373.002 174.391 371.643 170.481C371.534 170.167 371.66 169.779 371.677 169.425C372.049 169.58 372.551 169.64 372.771 169.909C373.71 171.052 374.382 172.444 375.48 173.406C380.554 177.856 388.143 176.369 391.258 170.576Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M382.474 167.508C381.838 166.789 381.258 166.179 380.758 165.513C380.509 165.182 380.146 164.615 380.278 164.388C380.954 163.231 381.946 162.219 381.863 160.763C382.276 160.825 382.994 160.795 383.052 160.966C383.393 161.973 383.75 163.023 383.773 164.064C383.797 165.185 384.092 165.864 385.205 166.396C387.967 167.718 388.11 169.846 385.75 171.777C385.398 172.065 385.43 172.762 385.246 173.257C385.101 173.65 384.896 174.025 384.718 174.407C384.346 174.169 383.939 173.968 383.609 173.686C382.37 172.63 382.737 171.23 382.733 169.899C382.731 169.13 382.624 168.362 382.474 167.508ZM385.253 168.104C384.895 168.219 384.538 168.333 384.18 168.447C384.63 169.267 385.082 170.086 385.533 170.906C385.541 170.068 385.55 169.231 385.551 168.393C385.551 168.354 385.474 168.314 385.253 168.104Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M376.918 158.307C374.292 159.919 372.736 162.051 372.338 164.915C372.289 165.273 372.146 165.632 371.976 165.957C371.857 166.185 371.616 166.354 371.43 166.551C371.258 166.278 370.974 166.022 370.931 165.733C370.586 163.375 371.58 161.398 373.048 159.619C374.862 157.42 377.286 156.064 380.102 155.338C380.49 155.239 380.975 155.217 381.338 155.35C381.841 155.535 382.27 155.901 382.73 156.189C382.326 156.356 381.93 156.542 381.517 156.685C380.017 157.204 378.511 157.71 376.918 158.307Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M384.626 156.602C385.178 156.347 385.978 155.86 386.434 156.065C387.842 156.697 389.141 157.561 390.425 158.413C390.673 158.578 390.663 159.095 390.772 159.449C390.364 159.493 389.852 159.708 389.566 159.55C387.919 158.645 386.326 157.651 384.626 156.602Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M262.653 182.59C261.936 181.112 261.109 179.846 260.55 178.482C260.284 177.834 260.53 176.996 260.544 176.245C261.008 176.826 261.533 177.373 261.924 177.996C263.095 179.855 264.002 181.903 265.398 183.59C268.287 187.081 272.41 187.503 276.698 185.772C281.858 183.688 284.674 179.496 285.373 174.719C285.929 170.919 284.685 166.795 280.854 164.156C280.531 163.934 280.534 163.284 280.386 162.832C280.823 162.829 281.321 162.693 281.687 162.845C284.008 163.803 284.982 165.893 285.91 167.87C287.13 170.468 287.622 173.404 286.897 176.078C286.266 178.403 284.559 180.482 283.222 182.61C280.976 186.185 277.222 187.702 273.219 188.241C271.352 188.493 269.085 187.669 267.347 186.741C265.561 185.789 264.2 184.117 262.653 182.59Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M279.142 165.549C278.674 167.082 276.991 168.438 279.124 169.835C279.226 169.902 279.152 170.445 278.989 170.582C278.834 170.711 278.326 170.71 278.193 170.573C277.114 169.459 276.938 170.521 276.642 171.149C276.179 172.134 276.258 172.942 276.903 174.004C277.663 175.255 278.418 176.888 276.981 178.319C276.518 178.78 275.942 179.438 275.39 179.463C273.736 179.539 272.673 180.141 272.038 181.62C271.857 182.042 271.182 182.271 270.734 182.589C270.669 182.03 270.593 181.474 270.542 180.914C270.481 180.234 270.544 179.525 270.358 178.879C270.218 178.39 269.648 178.012 269.506 177.522C269.402 177.17 269.57 176.601 269.842 176.345C270.018 176.179 270.731 176.266 270.98 176.477C272.308 177.608 272.311 177.238 272.844 175.738C273.388 174.206 273.155 173.489 272.046 172.584C270.901 171.648 270.991 170.339 271.679 169.338C272.207 168.569 273.339 167.663 274.164 167.696C275.943 167.767 276.706 167.014 277.373 165.674C278.102 164.21 278.336 164.219 279.142 165.549ZM274.303 169.298C273.885 169.797 273.281 170.248 273.123 170.813C273.038 171.117 273.718 171.614 274.052 172.024C274.366 171.577 274.671 171.123 275.002 170.686C275.138 170.506 275.409 170.393 275.484 170.201C275.774 169.466 275.45 169.176 274.303 169.298ZM275.558 175.944C275.518 175.678 275.478 175.413 275.439 175.149C275.154 175.268 274.771 175.318 274.606 175.524C274.387 175.799 274.296 176.188 274.224 176.541C274.131 176.997 274.113 177.466 274.062 177.929C274.479 177.685 274.954 177.497 275.292 177.177C275.493 176.986 275.476 176.588 275.558 175.944Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M262.384 166.997C265.263 163.873 269.149 162.735 272.958 161.476C273.329 161.353 273.802 161.389 274.196 161.48C274.554 161.562 274.866 161.818 275.199 161.998C274.907 162.272 274.667 162.663 274.315 162.804C271.682 163.861 269.014 164.841 266.38 165.897C263.672 166.983 262.614 169.225 261.907 171.733C261.752 172.283 261.236 172.741 260.886 173.241C260.684 172.621 260.169 171.905 260.341 171.4C260.846 169.916 261.623 168.516 262.384 166.997Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 1
    }
  }), __jsx("path", {
    d: "M268.657 189.661C266.722 189.44 265.338 188.463 264.306 187.024C264.184 186.854 264.353 186.495 264.386 186.223C264.599 186.261 264.858 186.238 265.018 186.347C266.343 187.251 267.653 188.175 268.949 189.116C268.984 189.141 268.818 189.417 268.657 189.661Z",
    fill: "#FFB61D",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 1
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Ma);

/***/ }),

/***/ "./components/icons/Menu.js":
/*!**********************************!*\
  !*** ./components/icons/Menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgMenu(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "menu_svg__feather menu_svg__feather-menu"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M3 12h18M3 6h18M3 18h18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMenu);

/***/ }),

/***/ "./components/icons/Search.js":
/*!************************************!*\
  !*** ./components/icons/Search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSearch(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),

/***/ "./components/icons/Spinner.js":
/*!*************************************!*\
  !*** ./components/icons/Spinner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSpinner(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.9166666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(30 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.8333333333333334s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(60 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.75s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(90 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.6666666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(120 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5833333333333334s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(150 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(180 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.4166666666666667s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(210 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.3333333333333333s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(240 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.25s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(270 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.16666666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(300 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.08333333333333333s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(330 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSpinner);

/***/ }),

/***/ "./components/icons/World.js":
/*!***********************************!*\
  !*** ./components/icons/World.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\components\\icons\\World.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgWorld(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zM7 14.32a6.4 6.4 0 01-5.23-7.75L6 10.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1V9c0-.44-.56-1-1-1H5V6h1c.44 0 1-.56 1-1V4h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgWorld);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: Alert, ArrowDown, ArrowUp, Close, Logo, Menu, Search, Spinner, World, Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./components/icons/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowDown */ "./components/icons/ArrowDown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return _ArrowDown__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowUp */ "./components/icons/ArrowUp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return _ArrowUp__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Close */ "./components/icons/Close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _Close__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/icons/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/icons/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./components/icons/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/icons/Spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./World */ "./components/icons/World.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "World", function() { return _World__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Main */ "./components/icons/Main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./components/layout/extra/extra.module.css":
/*!**************************************************!*\
  !*** ./components/layout/extra/extra.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "extra_container__1lVpg",
	"tagContainer": "extra_tagContainer__1leJw",
	"popularTags": "extra_popularTags__3CI1X"
};


/***/ }),

/***/ "./components/layout/extra/index.js":
/*!******************************************!*\
  !*** ./components/layout/extra/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/tag */ "./store/tag.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extra.module.css */ "./components/layout/extra/extra.module.css");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_extra_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\FINity\\client\\components\\layout\\extra\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Extra = ({
  marginTop = 24
}) => {
  const {
    tagState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_tag__WEBPACK_IMPORTED_MODULE_1__["TagContext"]);
  return __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tagContainer,
    style: {
      marginTop: `${marginTop}px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Popular Tags"), !tagState && __jsx("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.popularTags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, tagState === null || tagState === void 0 ? void 0 : tagState.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: tag._id,
    count: tag.count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, tag._id)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Extra);

/***/ }),

/***/ "./components/layout/header/header.module.css":
/*!****************************************************!*\
  !*** ./components/layout/header/header.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__1sVnS",
	"container": "header_container__3WFhY",
	"logo": "header_logo__111YJ",
	"homeff": "header_homeff__1WODt",
	"not": "header_not__3CJaO",
	"hide": "header_hide__12J8n",
	"show": "header_show__3a1It",
	"auth": "header_auth__iT3tj",
	"logs": "header_logs__2Bt0p"
};


/***/ }),

/***/ "./components/layout/header/index.js":
/*!*******************************************!*\
  !*** ./components/layout/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _navigation_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navigation-dropdown */ "./components/navigation-dropdown/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.module.css */ "./components/layout/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Home_home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Home/home */ "./components/Home/home.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pages */ "./pages/index.js");
var _jsxFileName = "D:\\FINity\\client\\components\\layout\\header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const Header = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  const {
    handleComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    isAuthenticated,
    authState,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]);
  const {
    0: Logout,
    1: setLogout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: Choice,
    1: setChoice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: Home,
    1: setHome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["default"])();
  {
    Home ? __jsx(_Home_home__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }) : __jsx(_pages__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 23
      }
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (size.width > _constants__WEBPACK_IMPORTED_MODULE_5__["default"].MOBILE_SIZE) {
      setIsComponentVisible(false);
    }
  }, [size]);
  return __jsx("header", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.logo,
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_10__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "finhome",
    style: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      marginRight: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mainpage",
    style: {
      color: "white",
      paddingRight: "8px",
      fontFamily: 'Montserrat',
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "18px",
      lineHeight: "22px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: () => setChoice(true),
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.homeff : _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.not,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 184
    }
  }, "HOME")), __jsx("div", {
    className: "forum",
    style: {
      color: "white",
      paddingRight: "10px",
      fontFamily: 'Montserrat',
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "18px",
      lineHeight: "22px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: () => setChoice(false),
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.not : _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.homeff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 182
    }
  }, "FORUM"))), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.userInfo,
    style: {
      display: "flex",
      marginTop: "6px",
      marginRight: "4%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: `/users/${authState.userInfo.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("a", {
    style: {
      fontFamily: 'Playfair Display',
      color: "white",
      paddingRight: "15px",
      fontWeight: "900",
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "19px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, authState.userInfo.username))), __jsx("div", {
    className: "new-div",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }
  }, __jsx("img", {
    id: "avatar",
    src: authState.userInfo.profilePhoto,
    onClick: () => setLogout(!Logout),
    style: {
      borderRadius: "50%",
      width: "24px",
      height: "24px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }
  }), __jsx("a", {
    className: Logout ? _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.hide : _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.show,
    onClick: () => logout(),
    style: {
      position: "fixed",
      right: "45px",
      top: "70px",
      fontFamily: 'Playfair Display',
      fontWeight: "900",
      fontStyle: "normal",
      fontSize: "14px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Log out"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.logs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.auth,
    secondary: true,
    onClick: () => handleComponentVisible(true, 'login'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Log in"), __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.auth,
    primary: true,
    onClick: () => handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Sign up")))), __jsx("div", {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./components/layout/sidebar/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ "./components/layout/main/index.js");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra */ "./components/layout/extra/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./components/layout/header/index.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\FINity\\client\\components\\layout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Layout = ({
  extra = true,
  children
}) => {
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.layout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.body, !extra && _layout_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.main),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, size.width > _constants__WEBPACK_IMPORTED_MODULE_2__["default"].MOBILE_SIZE && __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 46
    }
  }), __jsx(_main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, children), size.width > _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TABLET_SIZE && extra && __jsx(_extra__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 55
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "layout_body__2IZRo",
	"main": "layout_main__3O2ar",
	"container": "layout_container__2yT5o"
};


/***/ }),

/***/ "./components/layout/main/index.js":
/*!*****************************************!*\
  !*** ./components/layout/main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.module.css */ "./components/layout/main/main.module.css");
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\FINity\\client\\components\\layout\\main\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Main = ({
  border = true,
  children
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main, border && _main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.border),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/layout/main/main.module.css":
/*!************************************************!*\
  !*** ./components/layout/main/main.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"border": "main_border__3hdrZ"
};


/***/ }),

/***/ "./components/layout/sidebar/index.js":
/*!********************************************!*\
  !*** ./components/layout/sidebar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./components/navigation/index.js");
/* harmony import */ var _sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.module.css */ "./components/layout/sidebar/sidebar.module.css");
/* harmony import */ var _sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\layout\\sidebar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Sidebar = (_ref) => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className"]);

  return __jsx("nav", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebar, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/layout/sidebar/sidebar.module.css":
/*!******************************************************!*\
  !*** ./components/layout/sidebar/sidebar.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_sidebar__1R-_j"
};


/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/modal */ "./store/modal.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.module.css */ "./components/modal/modal.module.css");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\FINity\\client\\components\\modal\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Modal = (_ref) => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  const {
    ref,
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modal, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: ref,
    className: _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalDialog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.closeButton,
    onClick: () => setIsComponentVisible(isOpen => !isOpen),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Close"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/modal/modal.module.css":
/*!*******************************************!*\
  !*** ./components/modal/modal.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "modal_modal__2Z3RA",
	"modalDialog": "modal_modalDialog__2PAua",
	"closeButton": "modal_closeButton__2OM9w"
};


/***/ }),

/***/ "./components/navigation-dropdown/index.js":
/*!*************************************************!*\
  !*** ./components/navigation-dropdown/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation */ "./components/navigation/index.js");
/* harmony import */ var _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-dropdown.module.css */ "./components/navigation-dropdown/navigation-dropdown.module.css");
/* harmony import */ var _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\FINity\\client\\components\\navigation-dropdown\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavigationDropdown = () => {
  return __jsx("div", {
    className: _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dialog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationDropdown);

/***/ }),

/***/ "./components/navigation-dropdown/navigation-dropdown.module.css":
/*!***********************************************************************!*\
  !*** ./components/navigation-dropdown/navigation-dropdown.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dialog": "navigation-dropdown_dialog__3DoVn",
	"sidebar": "navigation-dropdown_sidebar__1Vvuq"
};


/***/ }),

/***/ "./components/navigation/index.js":
/*!****************************************!*\
  !*** ./components/navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item */ "./components/navigation/nav-item/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\FINity\\client\\components\\navigation\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("nav", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    selected: router.pathname == '/' || router.pathname.split('/')[1] == 'questions',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["World"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Stack Overflow")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/tags",
    selected: router.pathname == '/tags',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Tags")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/users",
    selected: router.pathname.split('/')[1] == 'users',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Users")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/navigation/nav-item/index.js":
/*!*************************************************!*\
  !*** ./components/navigation/nav-item/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-item.module.css */ "./components/navigation/nav-item/nav-item.module.css");
/* harmony import */ var _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nav_item_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\navigation\\nav-item\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const NavItem = (_ref) => {
  let {
    href,
    children,
    selected
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children", "selected"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navItem, selected && _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navItemSelected)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./components/navigation/nav-item/nav-item.module.css":
/*!************************************************************!*\
  !*** ./components/navigation/nav-item/nav-item.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navItem": "nav-item_navItem__1zKDV",
	"navItemSelected": "nav-item_navItemSelected__2yQW2"
};


/***/ }),

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "navigation_nav__8ntz-"
};


/***/ }),

/***/ "./components/page-title/index.js":
/*!****************************************!*\
  !*** ./components/page-title/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-title.module.css */ "./components/page-title/page-title.module.css");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\FINity\\client\\components\\page-title\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PageTitle = ({
  title,
  button,
  borderBottom = true,
  children
}) => {
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container, borderBottom && _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderBottom),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, button && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/questions/ask' : '/auth',
    pri: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Ask Question"))), children && __jsx("p", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 20
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/page-title/page-title.module.css":
/*!*****************************************************!*\
  !*** ./components/page-title/page-title.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "page-title_container__2y0RO",
	"borderBottom": "page-title_borderBottom__ijYtw",
	"title": "page-title_title__tRISx",
	"summary": "page-title_summary__3wbe9",
	"buttonContainer": "page-title_buttonContainer__13v6e"
};


/***/ }),

/***/ "./components/question/question-stats/index.js":
/*!*****************************************************!*\
  !*** ./components/question/question-stats/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-stats.module.css */ "./components/question/question-stats/question-stats.module.css");
/* harmony import */ var _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_question_stats_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\FINity\\client\\components\\question\\question-stats\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const QuestionStats = ({
  voteCount,
  answerCount,
  view
}) => {
  return __jsx("div", {
    className: _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.vote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, voteCount), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "votes")), __jsx("div", {
    className: _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.answer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, answerCount), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "answers")), __jsx("p", {
    className: _question_stats_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.view,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, view, " views"));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionStats);

/***/ }),

/***/ "./components/question/question-stats/question-stats.module.css":
/*!**********************************************************************!*\
  !*** ./components/question/question-stats/question-stats.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "question-stats_container__3QsQi",
	"vote": "question-stats_vote__yiF6p",
	"answer": "question-stats_answer__1_14E",
	"view": "question-stats_view__2DkGO"
};


/***/ }),

/***/ "./components/question/question-summary/index.js":
/*!*******************************************************!*\
  !*** ./components/question/question-summary/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "date-fns/formatDistanceToNowStrict");
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slug */ "slug");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-summary.module.css */ "./components/question/question-summary/question-summary.module.css");
/* harmony import */ var _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_question_summary_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\FINity\\client\\components\\question\\question-summary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const QuestionSummary = ({
  id,
  title,
  tags,
  author,
  createdTime,
  children
}) => {
  return __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/questions/[slug]",
    as: `/questions/${id}-${slug__WEBPACK_IMPORTED_MODULE_3___default()(title)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, title)), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.excerpt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tagContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, tags.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: tag,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, tag))), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: `https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`,
    alt: author.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.info,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "asked", ' ', date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2___default()(new Date(createdTime), {
    addSuffix: true
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, author.username))))));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionSummary);

/***/ }),

/***/ "./components/question/question-summary/question-summary.module.css":
/*!**************************************************************************!*\
  !*** ./components/question/question-summary/question-summary.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "question-summary_container__2ILnK",
	"link": "question-summary_link__1Za_W",
	"excerpt": "question-summary_excerpt__3dV1l",
	"footer": "question-summary_footer__2fK4q",
	"tagContainer": "question-summary_tagContainer__2hPyr",
	"userDetails": "question-summary_userDetails__rEgH0",
	"info": "question-summary_info__PnzmK"
};


/***/ }),

/***/ "./components/question/question-wrapper.js":
/*!*************************************************!*\
  !*** ./components/question/question-wrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question_wrapper_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-wrapper.module.css */ "./components/question/question-wrapper.module.css");
/* harmony import */ var _question_wrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_question_wrapper_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\FINity\\client\\components\\question\\question-wrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const QuestionWrapper = ({
  children
}) => {
  return __jsx("div", {
    className: _question_wrapper_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionWrapper);

/***/ }),

/***/ "./components/question/question-wrapper.module.css":
/*!*********************************************************!*\
  !*** ./components/question/question-wrapper.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "question-wrapper_container__2bbND"
};


/***/ }),

/***/ "./components/tag/index.js":
/*!*********************************!*\
  !*** ./components/tag/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag.module.css */ "./components/tag/tag.module.css");
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\FINity\\client\\components\\tag\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Tag = (_ref) => {
  let {
    children,
    className,
    count
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "count"]);

  return count ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tag, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), children)), __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.multiplier,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "\xD7"), "\xA0", __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, count)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tag, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./components/tag/tag.module.css":
/*!***************************************!*\
  !*** ./components/tag/tag.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "tag_tag__2CMZ9",
	"multiplier": "tag_multiplier__C-g4G",
	"count": "tag_count__1ssWi"
};


/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  TABLET_SIZE: 980,
  MOBILE_SIZE: 640
});

/***/ }),

/***/ "./hooks/useComponentVisible.js":
/*!**************************************!*\
  !*** ./hooks/useComponentVisible.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useComponentVisible(initialIsVisible) {
  const {
    0: isComponentVisible,
    1: setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIsVisible);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const toggleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleHide = event => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = event => {
    var _toggleRef$current;

    if (ref.current && !ref.current.contains(event.target) && !(toggleRef === null || toggleRef === void 0 ? void 0 : (_toggleRef$current = toggleRef.current) === null || _toggleRef$current === void 0 ? void 0 : _toggleRef$current.contains(event.target))) {
      setIsComponentVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleHide, true);
    return () => {
      document.removeEventListener('keydown', handleHide, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useComponentVisible);

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  const isClient = false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-tagsinput/react-tagsinput.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-tagsinput/react-tagsinput.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/tag */ "./store/tag.js");
/* harmony import */ var _components_Home_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Home/home */ "./components/Home/home.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal */ "./components/modal/index.js");
/* harmony import */ var _components_auth_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/auth-forms */ "./components/auth-forms/index.js");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/variables.css */ "./styles/variables.css");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/nprogress.css */ "./styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-tagsinput/react-tagsinput.css */ "./node_modules/react-tagsinput/react-tagsinput.css");
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "D:\\FINity\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());

function MyApp({
  Component,
  pageProps
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const {
    0: authScreen,
    1: setAuthScreen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleComponentVisible = (componentVisible, authScreen) => {
    setIsComponentVisible(componentVisible);
    setAuthScreen(authScreen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Home_home__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(_store_modal__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      ref,
      handleComponentVisible,
      setIsComponentVisible
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_store_fetch__WEBPACK_IMPORTED_MODULE_6__["FetchProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_store_tag__WEBPACK_IMPORTED_MODULE_7__["TagProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), isComponentVisible && __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_components_auth_forms__WEBPACK_IMPORTED_MODULE_10__["default"], {
    screen: authScreen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_question_question_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/question/question-wrapper */ "./components/question/question-wrapper.js");
/* harmony import */ var _components_question_question_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/question/question-stats */ "./components/question/question-stats/index.js");
/* harmony import */ var _components_question_question_summary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/question/question-summary */ "./components/question/question-summary/index.js");
/* harmony import */ var _components_page_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page-title */ "./components/page-title/index.js");
/* harmony import */ var _components_button_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button-group */ "./components/button-group/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/icons */ "./components/icons/index.js");
var _jsxFileName = "D:\\FINity\\client\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const HomePage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: questions,
    1: setQuestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: sortType,
    1: setSortType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Votes');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchQuestion = async () => {
      const {
        data
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].get('/question');
      setQuestions(data);
    };

    const fetchQuestionByTag = async () => {
      const {
        data
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].get(`/questions/${router.query.tag}`);
      setQuestions(data);
    };

    if (router.query.tag) {
      fetchQuestionByTag();
    } else {
      fetchQuestion();
    }
  }, [router.query.tag]);

  const handleSorting = () => {
    switch (sortType) {
      case 'Votes':
        return (a, b) => b.score - a.score;

      case 'Views':
        return (a, b) => b.views - a.views;

      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created);

      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created);

      default:
        break;
    }
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "FINity | Finance and Technology")), __jsx(_components_page_title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: router.query.tag ? `Questions tagged [${router.query.tag}]` : 'All Questions',
    button: true,
    borderBottom: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(_components_button_group__WEBPACK_IMPORTED_MODULE_9__["default"], {
    borderBottom: true,
    buttons: ['Votes', 'Views', 'Newest', 'Oldest'],
    selected: sortType,
    setSelected: setSortType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), !questions && __jsx("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), questions === null || questions === void 0 ? void 0 : questions.sort(handleSorting()).map(({
    id,
    votes,
    answers,
    views,
    title,
    text,
    tags,
    author,
    created
  }) => __jsx(_components_question_question_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_components_question_question_stats__WEBPACK_IMPORTED_MODULE_6__["default"], {
    voteCount: votes.length,
    answerCount: answers.length,
    view: views,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx(_components_question_question_summary__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: id,
    title: title,
    tags: tags,
    author: author,
    createdTime: created,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, text))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./store/auth.js":
/*!***********************!*\
  !*** ./store/auth.js ***!
  \***********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\FINity\\client\\store\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = AuthContext;

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');
    setAuthState({
      token,
      expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    });
  }, []);

  const setAuthInfo = ({
    token,
    userInfo,
    expiresAt
  }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    setAuthState({
      token,
      userInfo,
      expiresAt
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }

    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => {
    var _authState$userInfo;

    return ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.role) === 'admin';
  };

  return __jsx(Provider, {
    value: {
      authState,
      setAuthState: authInfo => setAuthInfo(authInfo),
      logout,
      isAuthenticated,
      isAdmin
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, children);
};



/***/ }),

/***/ "./store/fetch.js":
/*!************************!*\
  !*** ./store/fetch.js ***!
  \************************/
/*! exports provided: FetchContext, FetchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchContext", function() { return FetchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProvider", function() { return FetchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./store/auth.js");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
var _jsxFileName = "D:\\FINity\\client\\store\\fetch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FetchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = FetchContext;

const FetchProvider = ({
  children
}) => {
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  const authAxios = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["baseURL"]
  });
  authAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${authState.token}`;
    return config;
  }, error => {
    return Promise.reject(error);
  });
  authAxios.interceptors.response.use(response => {
    return response;
  }, error => {
    const code = error && error.response ? error.response.status : 0;

    if (code === 401 || code === 403) {
      console.log('error code', code);
    }

    return Promise.reject(error);
  });
  return __jsx(Provider, {
    value: {
      authAxios
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};



/***/ }),

/***/ "./store/modal.js":
/*!************************!*\
  !*** ./store/modal.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (StoreContext);

/***/ }),

/***/ "./store/tag.js":
/*!**********************!*\
  !*** ./store/tag.js ***!
  \**********************/
/*! exports provided: TagContext, TagProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagContext", function() { return TagContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagProvider", function() { return TagProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
var _jsxFileName = "D:\\FINity\\client\\store\\tag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TagContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = TagContext;

const TagProvider = ({
  children
}) => {
  const {
    0: tagState,
    1: setTagState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchPopularTags = async () => {
      const {
        data
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_1__["publicFetch"].get('/tags/populertags');
      setTagState(data);
    };

    fetchPopularTags();
  }, []);
  return __jsx(Provider, {
    value: {
      tagState
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }, children);
};



/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./util/fetcher.js":
/*!*************************!*\
  !*** ./util/fetcher.js ***!
  \*************************/
/*! exports provided: publicFetch, baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicFetch", function() { return publicFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL = true ? 'http://localhost:8080/api' : undefined;
const publicFetch = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL
});


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "date-fns/formatDistanceToNowStrict":
/*!*****************************************************!*\
  !*** external "date-fns/formatDistanceToNowStrict" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/formatDistanceToNowStrict");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvaG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9hdXRoLWZvcm1zLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLWZvcm1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9sb2dpbi1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgtZm9ybXMvc2lnbnVwLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLWZvcm1zL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtLWlucHV0L2Zvcm0taW5wdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0taW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93RG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93VXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9DbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9NYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2V4dHJhL2V4dHJhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZXh0cmEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4vbWFpbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcm9wZG93bi9uYXZpZ2F0aW9uLWRyb3Bkb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYtaXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2LWl0ZW0vbmF2LWl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS10aXRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24tc3RhdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi1zdGF0cy9xdWVzdGlvbi1zdGF0cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24tc3VtbWFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnkvcXVlc3Rpb24tc3VtbWFyeS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24td3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXdyYXBwZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhZy90YWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQ29tcG9uZW50VmlzaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdGFnLmpzIiwid2VicGFjazovLy8uL3V0aWwvZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzbHVnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiSG9tZSIsInN0eWxlcyIsInNlY3Rpb24iLCJzZWN0aW9uMSIsImNvbnRhaW5lciIsInJvdyIsIm1haW5kaXYiLCJ0b3BoZWFkaW5nIiwidG9wdGV4dCIsImxpbmtzIiwidG9wdGV4dHAyIiwidG9wSW1hZ2UiLCJzZWN0aW9uMiIsIm1vZHVsZWRpdiIsIm1vZHVsZSIsInNtYWxsdGl0bGUiLCJyb3cxIiwiY2FyZHNkaXYiLCJtb2R1bGVjYXJkcyIsInRpdGxlIiwibm8iLCJjaGFwdGVyIiwiY2FyZHRleHQiLCJjaGVja3VwZGF0ZSIsInNlY3Rpb24zIiwiYm9va2NhcmRzIiwiY2FyZGJvZHkiLCJib29rZGVzZGl2IiwiQXV0aEZvcm1zIiwic2NyZWVuIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsImF1dGhNb2RhbCIsImF1dGhTd2ljaE1lc3NhZ2UiLCJMb2dpbkZvcm0iLCJzZXRBdXRoU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJzZXRJc0NvbXBvbmVudFZpc2libGUiLCJNb2RhbENvbnRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRTdGF0dXMiLCJyZXNldEZvcm0iLCJkYXRhIiwicHVibGljRmV0Y2giLCJwb3N0IiwidG9rZW4iLCJleHBpcmVzQXQiLCJ1c2VySW5mbyIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiWXVwIiwicmVxdWlyZWQiLCJtYXgiLCJtYXRjaGVzIiwibWluIiwiZXJyb3JzIiwidG91Y2hlZCIsInN0YXR1cyIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJtYWluIiwic3VibWl0QnV0dG9uIiwiU2lnbnVwRm9ybSIsInBhc3N3b3JkQ29uZmlybWF0aW9uIiwib25lT2YiLCJCdXR0b25Hcm91cCIsImJ1dHRvbnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiYm9yZGVyQm90dG9tIiwiY24iLCJtYXAiLCJidXR0b24iLCJhY3RpdmUiLCJMaW5rQnV0dG9uIiwiaHJlZiIsImNoaWxkcmVuIiwicHJvcHMiLCJCYXNlQnV0dG9uIiwiQnV0dG9uIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImZ1bGwiLCJpc0xvYWRpbmciLCJjbGFzc05hbWUiLCJDb21wIiwiRm9ybUlucHV0IiwibGFiZWwiLCJpbnB1dEluZm8iLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsImlucHV0Q29udGFpbmVyIiwiaW5wdXQiLCJhbGVydCIsImlucHV0TWVzc2FnZSIsIlN2Z0FsZXJ0IiwiU3ZnQXJyb3dEb3duIiwiU3ZnQXJyb3dVcCIsIlN2Z0Nsb3NlIiwiU3ZnTG9nbyIsIm1peEJsZW5kTW9kZSIsIk1hIiwiU3ZnTWVudSIsIlN2Z1NlYXJjaCIsIlN2Z1NwaW5uZXIiLCJTdmdXb3JsZCIsIkV4dHJhIiwibWFyZ2luVG9wIiwidGFnU3RhdGUiLCJUYWdDb250ZXh0IiwidGFnQ29udGFpbmVyIiwicG9wdWxhclRhZ3MiLCJ0YWciLCJfaWQiLCJjb3VudCIsIkhlYWRlciIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoU3RhdGUiLCJsb2dvdXQiLCJMb2dvdXQiLCJzZXRMb2dvdXQiLCJDaG9pY2UiLCJzZXRDaG9pY2UiLCJzZXRIb21lIiwicmVmIiwidG9nZ2xlUmVmIiwiaXNDb21wb25lbnRWaXNpYmxlIiwidXNlQ29tcG9uZW50VmlzaWJsZSIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlRWZmZWN0Iiwid2lkdGgiLCJDT05TVCIsIk1PQklMRV9TSVpFIiwiaGVhZGVyIiwibG9nbyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJwYWRkaW5nUmlnaHQiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImhvbWVmZiIsIm5vdCIsInByb2ZpbGVQaG90byIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImhpZGUiLCJzaG93IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImxvZ3MiLCJhdXRoIiwiTGF5b3V0IiwiZXh0cmEiLCJsYXlvdXQiLCJib2R5IiwiVEFCTEVUX1NJWkUiLCJNYWluIiwiYm9yZGVyIiwiU2lkZWJhciIsInNpZGViYXIiLCJNb2RhbCIsIm1vZGFsIiwibW9kYWxEaWFsb2ciLCJjbG9zZUJ1dHRvbiIsImlzT3BlbiIsIk5hdmlnYXRpb25Ecm9wZG93biIsImRpYWxvZyIsIk5hdmlnYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYXYiLCJwYXRobmFtZSIsInNwbGl0IiwiTmF2SXRlbSIsIm5hdkl0ZW0iLCJuYXZJdGVtU2VsZWN0ZWQiLCJQYWdlVGl0bGUiLCJidXR0b25Db250YWluZXIiLCJzdW1tYXJ5IiwiUXVlc3Rpb25TdGF0cyIsInZvdGVDb3VudCIsImFuc3dlckNvdW50IiwidmlldyIsInZvdGUiLCJhbnN3ZXIiLCJRdWVzdGlvblN1bW1hcnkiLCJpZCIsInRhZ3MiLCJhdXRob3IiLCJjcmVhdGVkVGltZSIsInNsdWciLCJsaW5rIiwiZXhjZXJwdCIsImZvb3RlciIsInVzZXJEZXRhaWxzIiwiaW5mbyIsImZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QiLCJEYXRlIiwiYWRkU3VmZml4IiwiUXVlc3Rpb25XcmFwcGVyIiwiVGFnIiwicXVlcnkiLCJtdWx0aXBsaWVyIiwiaW5pdGlhbElzVmlzaWJsZSIsInVzZVJlZiIsImhhbmRsZUhpZGUiLCJldmVudCIsImtleSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0NsaWVudCIsImdldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidW5kZWZpbmVkIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiYXV0aFNjcmVlbiIsInNldEF1dGhTY3JlZW4iLCJjb21wb25lbnRWaXNpYmxlIiwiSG9tZVBhZ2UiLCJxdWVzdGlvbnMiLCJzZXRRdWVzdGlvbnMiLCJzb3J0VHlwZSIsInNldFNvcnRUeXBlIiwiZmV0Y2hRdWVzdGlvbiIsImZldGNoUXVlc3Rpb25CeVRhZyIsImhhbmRsZVNvcnRpbmciLCJhIiwiYiIsInNjb3JlIiwidmlld3MiLCJjcmVhdGVkIiwic29ydCIsInZvdGVzIiwiYW5zd2VycyIsInRleHQiLCJsZW5ndGgiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJBdXRoUHJvdmlkZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0QXV0aEluZm8iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldFRpbWUiLCJpc0FkbWluIiwicm9sZSIsImF1dGhJbmZvIiwiRmV0Y2hDb250ZXh0IiwiRmV0Y2hQcm92aWRlciIsImF1dGhBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvZGUiLCJsb2ciLCJTdG9yZUNvbnRleHQiLCJUYWdQcm92aWRlciIsInNldFRhZ1N0YXRlIiwiZmV0Y2hQb3B1bGFyVGFncyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDM0IsU0FDSSxtRUFDSTtBQUFLLGFBQVMsRUFBRUMsdURBQU0sQ0FBQ0MsT0FBdkI7QUFB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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWFpbn0gZnJvbSBcIi4uL2ljb25zL2luZGV4XCI7XHJcbi8vIGltcG9ydCBib29rMSBmcm9tIFwiLi9JbWFnZXMvQm9vazEucG5nXCI7XHJcbi8vIGltcG9ydCBib29rMiBmcm9tIFwiLi9JbWFnZXMvQm9vazIucG5nXCI7XHJcbi8vIGltcG9ydCBib29rMyBmcm9tIFwiLi9JbWFnZXMvQm9vazMucG5nXCI7XHJcbi8vIGltcG9ydCBib29rNCBmcm9tIFwiLi9JbWFnZXMvQm9vazQucG5nXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4vLyBpbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Byb2dyZXNzQmFyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9sYXlvdXQvaGVhZGVyL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNlY3Rpb24xfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbmRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTEwIGNvbC0xMFwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudG9waGVhZGluZ30+RnJlZSBhbmQgb3BlbiBzdG9jayBtYXJrZXQgYW5kIGZpbmFuY2lhbCBlZHVjYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3B0ZXh0fT5UaGluayBvZiBGaW5pdHkgYXMgeW91ciBuZXcgYmVzdCBmcmllbmQsIGhlbHBpbmcgeW91IHRvd2FyZHMgeW91ciBqb3VybmV5IHRvIEZpbmFuY2lhbCBMaXRlcmFjeS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhhdmUgYW4gZXh0ZW5zaXZlIGFuZCBpbi1kZXB0aCBjb2xsZWN0aW9uIG9mIHRoZSBzdG9jayBtYXJrZXQgYW5kIGZpbmFuY2lhbCA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+bGVzc29uczwvc3Bhbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbG9uZyB3aXRoIGFuIGV4dGVuc2l2ZSBjb2xsZWN0aW9uIG9mIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5Cb29rczwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5Qb2RjYXN0czwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5QbGF5bGlzdHM8L3NwYW4+LCAmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5SZXNvdXJjZXM8L3NwYW4+IHNwZWNpZmljYWxseSBjdXJhdGVkIGJ5IG91ciBUZWFtIHRvIGhlbHAgeW91IG5hdmlnYXRlIHRvIHlvdXIgQmVzdCBGaW5hbmNpYWxseS1lZHVjYXRlZCBzZWxmLiBJdCBpcyBvcGVubHkgYWNjZXNzaWJsZSB0byBldmVyeW9uZSBhbmQgaXMgb25lIG9mIHRoZSBsYXJnZXN0IGZpbmFuY2lhbCBlZHVjYXRpb24gcmVzb3VyY2VzIG9uIHRoZSB3ZWIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3B0ZXh0cDJ9PkNoZWNrb3V0ICYgYmUgYSBwYXJ0IG9mIG91ciBjb21tdW5pdHkuIEVudGVyIHRoZSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+Rm9ydW08L3NwYW4+LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tMTAgY29sLTEwXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJ0b3AtSW1hZ2VcIiBzcmM9XCJcIj48L2ltZz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zZWN0aW9uMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZHVsZWRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLm1vZHVsZX0+TW9kdWxlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx0aXRsZX0+QmFzaWNzIG9mIEZpbmFuY2UgYW5kIFRyYWRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2R1bGVjYXJkc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubm99PjEuPC9zcGFuPiBJbnRyb2R1Y3Rpb24gdG8gU3RvY2sgTWFya2V0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoYXB0ZXJ9PjE1IGNoYXB0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2dyZXNzQmFyIGlkPVwicHJvZ3Jlc3NcIiB2YXJpYW50PVwic3VjY2Vzc1wiIG5vdz17NjB9PjwvUHJvZ3Jlc3NCYXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHRleHR9PkludmVzdGluZyBlbnN1cmVzIGZpbmFuY2lhbCBzZWN1cml0eSwgYW5kIHRoZSBTdG9jayBtYXJrZXQgcGxheXMgYSBwaXZvdGFsIHJvbGUgaW4gdGhpcyBkb21haW4sIGl0IGlzIGEgcGxhY2Ugd2hlcmUgcGVvcGxlIGJ1eS9zZWxsIHNoYXJlcyBvZiBwdWJsaWNseSBsaXN0ZWQgY29tcGFuaWVzLiBJbiB0aGlzIG1vZHVsZSwgeW91IHdpbGwgbGVhcm4gYWJvdXQgdGhlIGZ1bmRhbWVudGFscyBvZiB0aGUgc3RvY2sgbWFya2V0LCBob3cgdG8gZ2V0IHN0YXJ0ZWQsIGhvdyBpdCBmdW5jdGlvbnMgYW5kIHRoZSB2YXJpb3VzIGludGVybWVkaWFyaWVzIHRoYXQgYXBwZXJ0YWluIGl0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kdWxlY2FyZHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5vfT4yLjwvc3Bhbj4gSW50cm9kdWN0aW9uIHRvIFN0b2NrIE1hcmtldHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jaGFwdGVyfT4xNSBjaGFwdGVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9ncmVzc0JhciBpZD1cInByb2dyZXNzXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBub3c9ezYwfT48L1Byb2dyZXNzQmFyPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR0ZXh0fT5JbnZlc3RpbmcgZW5zdXJlcyBmaW5hbmNpYWwgc2VjdXJpdHksIGFuZCB0aGUgU3RvY2sgbWFya2V0IHBsYXlzIGEgcGl2b3RhbCByb2xlIGluIHRoaXMgZG9tYWluLCBpdCBpcyBhIHBsYWNlIHdoZXJlIHBlb3BsZSBidXkvc2VsbCBzaGFyZXMgb2YgcHVibGljbHkgbGlzdGVkIGNvbXBhbmllcy4gSW4gdGhpcyBtb2R1bGUsIHlvdSB3aWxsIGxlYXJuIGFib3V0IHRoZSBmdW5kYW1lbnRhbHMgb2YgdGhlIHN0b2NrIG1hcmtldCwgaG93IHRvIGdldCBzdGFydGVkLCBob3cgaXQgZnVuY3Rpb25zIGFuZCB0aGUgdmFyaW91cyBpbnRlcm1lZGlhcmllcyB0aGF0IGFwcGVydGFpbiBpdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZHVsZWNhcmRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ub30+My48L3NwYW4+IEludHJvZHVjdGlvbiB0byBTdG9jayBNYXJrZXRzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcHRlcn0+MTUgY2hhcHRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZ3Jlc3NCYXIgaWQ9XCJwcm9ncmVzc1wiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgbm93PXs2MH0+PC9Qcm9ncmVzc0Jhcj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkdGV4dH0+SW52ZXN0aW5nIGVuc3VyZXMgZmluYW5jaWFsIHNlY3VyaXR5LCBhbmQgdGhlIFN0b2NrIG1hcmtldCBwbGF5cyBhIHBpdm90YWwgcm9sZSBpbiB0aGlzIGRvbWFpbiwgaXQgaXMgYSBwbGFjZSB3aGVyZSBwZW9wbGUgYnV5L3NlbGwgc2hhcmVzIG9mIHB1YmxpY2x5IGxpc3RlZCBjb21wYW5pZXMuIEluIHRoaXMgbW9kdWxlLCB5b3Ugd2lsbCBsZWFybiBhYm91dCB0aGUgZnVuZGFtZW50YWxzIG9mIHRoZSBzdG9jayBtYXJrZXQsIGhvdyB0byBnZXQgc3RhcnRlZCwgaG93IGl0IGZ1bmN0aW9ucyBhbmQgdGhlIHZhcmlvdXMgaW50ZXJtZWRpYXJpZXMgdGhhdCBhcHBlcnRhaW4gaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2R1bGVjYXJkc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubm99PjQuPC9zcGFuPiBJbnRyb2R1Y3Rpb24gdG8gU3RvY2sgTWFya2V0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoYXB0ZXJ9PjE1IGNoYXB0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2dyZXNzQmFyIGlkPVwicHJvZ3Jlc3NcIiB2YXJpYW50PVwic3VjY2Vzc1wiIG5vdz17NjB9PjwvUHJvZ3Jlc3NCYXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHRleHR9PkludmVzdGluZyBlbnN1cmVzIGZpbmFuY2lhbCBzZWN1cml0eSwgYW5kIHRoZSBTdG9jayBtYXJrZXQgcGxheXMgYSBwaXZvdGFsIHJvbGUgaW4gdGhpcyBkb21haW4sIGl0IGlzIGEgcGxhY2Ugd2hlcmUgcGVvcGxlIGJ1eS9zZWxsIHNoYXJlcyBvZiBwdWJsaWNseSBsaXN0ZWQgY29tcGFuaWVzLiBJbiB0aGlzIG1vZHVsZSwgeW91IHdpbGwgbGVhcm4gYWJvdXQgdGhlIGZ1bmRhbWVudGFscyBvZiB0aGUgc3RvY2sgbWFya2V0LCBob3cgdG8gZ2V0IHN0YXJ0ZWQsIGhvdyBpdCBmdW5jdGlvbnMgYW5kIHRoZSB2YXJpb3VzIGludGVybWVkaWFyaWVzIHRoYXQgYXBwZXJ0YWluIGl0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kdWxlY2FyZHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5vfT41Ljwvc3Bhbj4gSW50cm9kdWN0aW9uIHRvIFN0b2NrIE1hcmtldHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jaGFwdGVyfT4xNSBjaGFwdGVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9ncmVzc0JhciBpZD1cInByb2dyZXNzXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBub3c9ezYwfT48L1Byb2dyZXNzQmFyPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR0ZXh0fT5JbnZlc3RpbmcgZW5zdXJlcyBmaW5hbmNpYWwgc2VjdXJpdHksIGFuZCB0aGUgU3RvY2sgbWFya2V0IHBsYXlzIGEgcGl2b3RhbCByb2xlIGluIHRoaXMgZG9tYWluLCBpdCBpcyBhIHBsYWNlIHdoZXJlIHBlb3BsZSBidXkvc2VsbCBzaGFyZXMgb2YgcHVibGljbHkgbGlzdGVkIGNvbXBhbmllcy4gSW4gdGhpcyBtb2R1bGUsIHlvdSB3aWxsIGxlYXJuIGFib3V0IHRoZSBmdW5kYW1lbnRhbHMgb2YgdGhlIHN0b2NrIG1hcmtldCwgaG93IHRvIGdldCBzdGFydGVkLCBob3cgaXQgZnVuY3Rpb25zIGFuZCB0aGUgdmFyaW91cyBpbnRlcm1lZGlhcmllcyB0aGF0IGFwcGVydGFpbiBpdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZHVsZWNhcmRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ub30+Ni48L3NwYW4+IEludHJvZHVjdGlvbiB0byBTdG9jayBNYXJrZXRzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcHRlcn0+MTUgY2hhcHRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8UHJvZ3Jlc3NCYXIgaWQ9XCJwcm9ncmVzc1wiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgbm93PXs2MH0+PC9Qcm9ncmVzc0Jhcj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkdGV4dH0+SW52ZXN0aW5nIGVuc3VyZXMgZmluYW5jaWFsIHNlY3VyaXR5LCBhbmQgdGhlIFN0b2NrIG1hcmtldCBwbGF5cyBhIHBpdm90YWwgcm9sZSBpbiB0aGlzIGRvbWFpbiwgaXQgaXMgYSBwbGFjZSB3aGVyZSBwZW9wbGUgYnV5L3NlbGwgc2hhcmVzIG9mIHB1YmxpY2x5IGxpc3RlZCBjb21wYW5pZXMuIEluIHRoaXMgbW9kdWxlLCB5b3Ugd2lsbCBsZWFybiBhYm91dCB0aGUgZnVuZGFtZW50YWxzIG9mIHRoZSBzdG9jayBtYXJrZXQsIGhvdyB0byBnZXQgc3RhcnRlZCwgaG93IGl0IGZ1bmN0aW9ucyBhbmQgdGhlIHZhcmlvdXMgaW50ZXJtZWRpYXJpZXMgdGhhdCBhcHBlcnRhaW4gaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2R1bGVjYXJkc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubm99PjcuPC9zcGFuPiBJbnRyb2R1Y3Rpb24gdG8gU3RvY2sgTWFya2V0czwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNoYXB0ZXJ9PjE1IGNoYXB0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2dyZXNzQmFyIGlkPVwicHJvZ3Jlc3NcIiB2YXJpYW50PVwic3VjY2Vzc1wiIG5vdz17NjB9PjwvUHJvZ3Jlc3NCYXI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHRleHR9PkludmVzdGluZyBlbnN1cmVzIGZpbmFuY2lhbCBzZWN1cml0eSwgYW5kIHRoZSBTdG9jayBtYXJrZXQgcGxheXMgYSBwaXZvdGFsIHJvbGUgaW4gdGhpcyBkb21haW4sIGl0IGlzIGEgcGxhY2Ugd2hlcmUgcGVvcGxlIGJ1eS9zZWxsIHNoYXJlcyBvZiBwdWJsaWNseSBsaXN0ZWQgY29tcGFuaWVzLiBJbiB0aGlzIG1vZHVsZSwgeW91IHdpbGwgbGVhcm4gYWJvdXQgdGhlIGZ1bmRhbWVudGFscyBvZiB0aGUgc3RvY2sgbWFya2V0LCBob3cgdG8gZ2V0IHN0YXJ0ZWQsIGhvdyBpdCBmdW5jdGlvbnMgYW5kIHRoZSB2YXJpb3VzIGludGVybWVkaWFyaWVzIHRoYXQgYXBwZXJ0YWluIGl0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHNkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kdWxlY2FyZHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5vfT44Ljwvc3Bhbj4gSW50cm9kdWN0aW9uIHRvIFN0b2NrIE1hcmtldHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jaGFwdGVyfT4xNSBjaGFwdGVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9ncmVzc0JhciBpZD1cInByb2dyZXNzXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBub3c9ezYwfT48L1Byb2dyZXNzQmFyPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR0ZXh0fT5JbnZlc3RpbmcgZW5zdXJlcyBmaW5hbmNpYWwgc2VjdXJpdHksIGFuZCB0aGUgU3RvY2sgbWFya2V0IHBsYXlzIGEgcGl2b3RhbCByb2xlIGluIHRoaXMgZG9tYWluLCBpdCBpcyBhIHBsYWNlIHdoZXJlIHBlb3BsZSBidXkvc2VsbCBzaGFyZXMgb2YgcHVibGljbHkgbGlzdGVkIGNvbXBhbmllcy4gSW4gdGhpcyBtb2R1bGUsIHlvdSB3aWxsIGxlYXJuIGFib3V0IHRoZSBmdW5kYW1lbnRhbHMgb2YgdGhlIHN0b2NrIG1hcmtldCwgaG93IHRvIGdldCBzdGFydGVkLCBob3cgaXQgZnVuY3Rpb25zIGFuZCB0aGUgdmFyaW91cyBpbnRlcm1lZGlhcmllcyB0aGF0IGFwcGVydGFpbiBpdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2t1cGRhdGV9PkNoZWNrIHVwZGF0ZXMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNlY3Rpb24zfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kdWxlZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMubW9kdWxlfT5Cb29rczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx0aXRsZX0+TGV2ZWwgdXAgYnkgcmVhZGluZyB0aGUgYmVzdCBib29rcyBpbiB0aGUgaW5kdXN0cnk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNiBjb2wtMTJcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rY2FyZHN9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtib29rMX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZGJvZHkgLCBzdHlsZXMuYm9va2Rlc2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYm9vay10aXRsZVwiPkEgUmFuZG9tIFdhbGsgRG93biBXYWxsIFN0cmVldDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib29rLXRleHRcIj4gQnVydG9uIE1hbGtpZWw8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1dHRvblwiPkRpdmUgaW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvb2stY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtib29rMn0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvb2stZGVzLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj5UaGUgSW50ZWxsaWdlbnQgSW52ZXN0b3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9vay10ZXh0XCI+IEJlbmphbWluIEdyYWhhbTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+RGl2ZSBpbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvb2stY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtib29rM30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvb2stZGVzLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj5PbmUgVXAgb24gV2FsbCBTdHJlZXQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9vay10ZXh0XCI+IEpvaG4gUm90aGNoaWxkIGFuZCBQZXRlciBMeW5jaDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uXCI+RGl2ZSBpbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTYgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvb2stY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtib29rNH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvb2stZGVzLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJvb2stdGl0bGVcIj5MaXR0bGUgQm9vayBvZiBDb21tb24gU2Vuc2UgSW52ZXN0aW5nPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvb2stdGV4dFwiPiBKb2huIEMuIEJvZ2xlPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b25cIj5EaXZlIGluPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uXCI6IFwiaG9tZV9zZWN0aW9uX18xOV95ZlwiLFxuXHRcInRvcGhlYWRpbmdcIjogXCJob21lX3RvcGhlYWRpbmdfXzNGZUh3XCIsXG5cdFwidG9wdGV4dFwiOiBcImhvbWVfdG9wdGV4dF9fM1JwLWdcIixcblx0XCJ0b3B0ZXh0cDJcIjogXCJob21lX3RvcHRleHRwMl9fMThGdVhcIixcblx0XCJsaW5rc1wiOiBcImhvbWVfbGlua3NfXzFEeEZTXCIsXG5cdFwibWFpblwiOiBcImhvbWVfbWFpbl9fMmpmR0dcIixcblx0XCJ0b3BJbWFnZVwiOiBcImhvbWVfdG9wSW1hZ2VfXzNpUEpaXCIsXG5cdFwibW9kdWxlZGl2XCI6IFwiaG9tZV9tb2R1bGVkaXZfXzFOek1nXCIsXG5cdFwibW9kdWxlXCI6IFwiaG9tZV9tb2R1bGVfXzJ6RmZVXCIsXG5cdFwic21hbGx0aXRsZVwiOiBcImhvbWVfc21hbGx0aXRsZV9fMlBoeFlcIixcblx0XCJyb3cxXCI6IFwiaG9tZV9yb3cxX18zLXIxb1wiLFxuXHRcImNhcmRzZGl2XCI6IFwiaG9tZV9jYXJkc2Rpdl9fMXRITDZcIixcblx0XCJtb2R1bGVjYXJkc1wiOiBcImhvbWVfbW9kdWxlY2FyZHNfXzFDSFhOXCIsXG5cdFwidGl0bGVcIjogXCJob21lX3RpdGxlX18xNENScFwiLFxuXHRcIm5vXCI6IFwiaG9tZV9ub19fTzVkZmpcIixcblx0XCJjaGFwdGVyXCI6IFwiaG9tZV9jaGFwdGVyX18xdF9JelwiLFxuXHRcInByb2dyZXNzXCI6IFwiaG9tZV9wcm9ncmVzc19fMVBjZXBcIixcblx0XCJjYXJkdGV4dFwiOiBcImhvbWVfY2FyZHRleHRfXzF3T1QxXCIsXG5cdFwiY2hlY2t1cGRhdGVcIjogXCJob21lX2NoZWNrdXBkYXRlX18xUTU0WVwiLFxuXHRcImJvb2tjYXJkc1wiOiBcImhvbWVfYm9va2NhcmRzX18xY3pOWVwiLFxuXHRcImJvb2tkZXNkaXZcIjogXCJob21lX2Jvb2tkZXNkaXZfX3RldU9QXCIsXG5cdFwiYm9va3RpdGxlXCI6IFwiaG9tZV9ib29rdGl0bGVfXzNfd0VkXCIsXG5cdFwiYm9va3RleHRcIjogXCJob21lX2Jvb2t0ZXh0X18xd05pVVwiLFxuXHRcImJvb2tidG5cIjogXCJob21lX2Jvb2tidG5fXzE0ek42XCIsXG5cdFwiYnV0dG9uXCI6IFwiaG9tZV9idXR0b25fXzJHeHM2XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdXRoTW9kYWxcIjogXCJhdXRoLWZvcm1zX2F1dGhNb2RhbF9fMTB0YWxcIixcblx0XCJsb2dvXCI6IFwiYXV0aC1mb3Jtc19sb2dvX18xcEo3TVwiLFxuXHRcImF1dGhTd2ljaE1lc3NhZ2VcIjogXCJhdXRoLWZvcm1zX2F1dGhTd2ljaE1lc3NhZ2VfXzNMZlVjXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uL2ljb25zJ1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luLWZvcm0nXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuL3NpZ251cC1mb3JtJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0aC1mb3Jtcy5tb2R1bGUuY3NzJ1xuXG5jb25zdCBBdXRoRm9ybXMgPSAoeyBzY3JlZW4gPSAnc2lnbnVwJyB9KSA9PiB7XG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHNjcmVlbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aE1vZGFsfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2Zvcm0gPT0gJ2xvZ2luJyA/ICdMb2cgSW4nIDogJ1NpZ24gVXAnfSAtIEZJTml0eTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8TG9nbyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPiAqL31cblxuICAgICAge2Zvcm0gPT09ICdsb2dpbicgPyA8TG9naW5Gb3JtIC8+IDogPFNpZ25VcEZvcm0gLz59XG5cbiAgICAgIHtmb3JtID09PSAnbG9naW4nID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hdXRoU3dpY2hNZXNzYWdlfT5cbiAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ251cCcpfT5TaWduIHVwPC9hPlxuICAgICAgICA8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hdXRoU3dpY2hNZXNzYWdlfT5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ2xvZ2luJyl9PkxvZyBpbjwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybXNcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcblxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi8uLi91dGlsL2ZldGNoZXInXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uLy4uL3N0b3JlL21vZGFsJ1xuXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2Zvcm0taW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvZ2luLWZvcm0ubW9kdWxlLmNzcydcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgeyBzZXRJc0NvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycgfX1cbiAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdGF0dXMsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLnBvc3QoJ2F1dGhlbnRpY2F0ZScsIHZhbHVlcylcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgZXhwaXJlc0F0LCB1c2VySW5mbyB9ID0gZGF0YVxuICAgICAgICBzZXRBdXRoU3RhdGUoeyB0b2tlbiwgZXhwaXJlc0F0LCB1c2VySW5mbyB9KVxuICAgICAgICByZXNldEZvcm0oe30pXG4gICAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldFN0YXR1cyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH19XG4gICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpXG4gICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcbiAgICAgIC5tYXgoMTYsICdNdXN0IGJlIGF0IG1vc3QgMTYgY2hhcmFjdGVycyBsb25nJylcbiAgICAgIC5tYXRjaGVzKC9eW2EtekEtWjAtOV8tXSskLywgJ0NvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycycpLFxuICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXG4gICAgICAubWluKDYsICdNdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJylcbiAgICAgIC5tYXgoNTAsICdNdXN0IGJlIGF0IG1vc3QgNTAgY2hhcmFjdGVycyBsb25nJylcbiAgICB9KX1cbiAgICA+XG4gICAgICB7KHtcbiAgICAgICAgdmFsdWVzLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIHRvdWNoZWQsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgIGlzU3VibWl0dGluZ1xuICAgICAgfSkgPT4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+TG9nIGluPC9oMT5cbiAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAvLyBsYWJlbD1cIlBsZWFzZSBFbnRlciBVc2VybmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgRW50ZXIgVXNlcm5hbWVcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgaGFzRXJyb3I9e3RvdWNoZWQudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgLy8gbGFiZWw9XCJQbGVhc2UgRW50ZXIgeW91ciBQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIEVudGVyIFlvdXIgUGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgaGFzRXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT57c3RhdHVzfTwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwibG9naW4tZm9ybV9tYWluX18xRUh3ZlwiLFxuXHRcInN1Ym1pdEJ1dHRvblwiOiBcImxvZ2luLWZvcm1fc3VibWl0QnV0dG9uX18yalp4S1wiLFxuXHRcImZvcm1cIjogXCJsb2dpbi1mb3JtX2Zvcm1fXzNITG1QXCIsXG5cdFwic3RhdHVzXCI6IFwibG9naW4tZm9ybV9zdGF0dXNfXzE3M3BpXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXG5cbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9mZXRjaGVyJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcblxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9mb3JtLWlucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWdudXAtZm9ybS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBTaWdudXBGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgeyBzZXRJc0NvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJywgcGFzc3dvcmRDb25maXJtYXRpb246ICcnIH19XG4gICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdGF0dXMsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLnBvc3QoJ3NpZ251cCcsIHZhbHVlcylcbiAgICAgICAgICBjb25zdCB7IHRva2VuLCBleHBpcmVzQXQsIHVzZXJJbmZvIH0gPSBkYXRhXG4gICAgICAgICAgc2V0QXV0aFN0YXRlKHsgdG9rZW4sIGV4cGlyZXNBdCwgdXNlckluZm8gfSlcbiAgICAgICAgICByZXNldEZvcm0oe30pXG4gICAgICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHNldFN0YXR1cyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH19XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgICAgICAgIC5tYXgoMTYsICdNdXN0IGJlIGF0IG1vc3QgMTYgY2hhcmFjdGVycyBsb25nJylcbiAgICAgICAgICAubWF0Y2hlcygvXlthLXpBLVowLTlfLV0rJC8sICdDb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMnKSxcbiAgICAgICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxuICAgICAgICAgIC5taW4oNiwgJ011c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcnKVxuICAgICAgICAgIC5tYXgoNTAsICdNdXN0IGJlIGF0IG1vc3QgNTAgY2hhcmFjdGVycyBsb25nJyksXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBZdXAuc3RyaW5nKCkub25lT2YoXG4gICAgICAgICAgW1l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLFxuICAgICAgICAgICdQYXNzd29yZHMgbXVzdCBtYXRjaCdcbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPlxuICAgICAgeyh7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICB0b3VjaGVkLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICBpc1N1Ym1pdHRpbmdcbiAgICAgIH0pID0+IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlNpZ24gVXA8L2gxPlxuICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgIC8vIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGFuIFVzZXJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgIGhhc0Vycm9yPXt0b3VjaGVkLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JzLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgIC8vIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBhIFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgIGhhc0Vycm9yPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgIC8vIGxhYmVsPVwiUGFzc3dvcmQgQ29uZmlybVwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSB0aGUgUGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmRDb25maXJtYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgaGFzRXJyb3I9e1xuICAgICAgICAgICAgICB0b3VjaGVkLnBhc3N3b3JkQ29uZmlybWF0aW9uICYmIGVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtcbiAgICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uICYmIGVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT57c3RhdHVzfTwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJzaWdudXAtZm9ybV9tYWluX18yY2syT1wiLFxuXHRcInN1Ym1pdEJ1dHRvblwiOiBcInNpZ251cC1mb3JtX3N1Ym1pdEJ1dHRvbl9femtLaHVcIixcblx0XCJmb3JtXCI6IFwic2lnbnVwLWZvcm1fZm9ybV9fMzNzdnpcIixcblx0XCJzdGF0dXNcIjogXCJzaWdudXAtZm9ybV9zdGF0dXNfXzFkbXRVXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJidXR0b24tZ3JvdXBfY29udGFpbmVyX19GMC1BQVwiLFxuXHRcImFjdGl2ZVwiOiBcImJ1dHRvbi1ncm91cF9hY3RpdmVfXzNZMkxmXCIsXG5cdFwiYm9yZGVyQm90dG9tXCI6IFwiYnV0dG9uLWdyb3VwX2JvcmRlckJvdHRvbV9fMld1NnBcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi1ncm91cC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBCdXR0b25Hcm91cCA9ICh7XG4gIGJ1dHRvbnMsXG4gIHNlbGVjdGVkLFxuICBzZXRTZWxlY3RlZCxcbiAgYm9yZGVyQm90dG9tID0gZmFsc2Vcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmNvbnRhaW5lciwgYm9yZGVyQm90dG9tICYmIHN0eWxlcy5ib3JkZXJCb3R0b20pfT5cbiAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2J1dHRvbn1cbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBidXR0b24gJiYgc3R5bGVzLmFjdGl2ZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChidXR0b24pfVxuICAgICAgICA+XG4gICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Hcm91cFxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX2J1dHRvbl9fMi0xaVFcIixcblx0XCJwcmltYXJ5XCI6IFwiYnV0dG9uX3ByaW1hcnlfXzFtR2RMXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYnV0dG9uX3NlY29uZGFyeV9fMXNnTUhcIixcblx0XCJmdWxsXCI6IFwiYnV0dG9uX2Z1bGxfXzFWRGtzXCIsXG5cdFwiaXNMb2FkaW5nXCI6IFwiYnV0dG9uX2lzTG9hZGluZ19fM2x0Mm9cIixcblx0XCJzcGluXCI6IFwiYnV0dG9uX3NwaW5fXzJ4RHZpXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xuXG5jb25zdCBMaW5rQnV0dG9uID0gKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfSBhcz17aHJlZn0+XG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IEJhc2VCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuY29uc3QgQnV0dG9uID0gKHtcbiAgcHJpbWFyeSxcbiAgc2Vjb25kYXJ5LFxuICBmdWxsID0gZmFsc2UsXG4gIGlzTG9hZGluZyA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uXG4gIHJldHVybiAoXG4gICAgPENvbXBcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIHN0eWxlcy5idXR0b24sXG4gICAgICAgIHByaW1hcnkgJiYgc3R5bGVzLnByaW1hcnksXG4gICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxuICAgICAgICBmdWxsICYmIHN0eWxlcy5mdWxsLFxuICAgICAgICBpc0xvYWRpbmcgJiYgc3R5bGVzLmlzTG9hZGluZyxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJmb3JtLWlucHV0X2NvbnRhaW5lcl9fMTF6ZGdcIixcblx0XCJsYWJlbFwiOiBcImZvcm0taW5wdXRfbGFiZWxfXzJMaVJnXCIsXG5cdFwiaW5wdXRNZXNzYWdlXCI6IFwiZm9ybS1pbnB1dF9pbnB1dE1lc3NhZ2VfXzExRDdEXCIsXG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJmb3JtLWlucHV0X2lucHV0Q29udGFpbmVyX18yWDVHNFwiLFxuXHRcImlucHV0XCI6IFwiZm9ybS1pbnB1dF9pbnB1dF9fdkZwaGxcIixcblx0XCJoYXNFcnJvclwiOiBcImZvcm0taW5wdXRfaGFzRXJyb3JfXzN2WWROXCIsXG5cdFwiYWxlcnRcIjogXCJmb3JtLWlucHV0X2FsZXJ0X18zN3NxS1wiLFxuXHRcImlucHV0SW5mb1wiOiBcImZvcm0taW5wdXRfaW5wdXRJbmZvX19XeXBBN1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb3JtLWlucHV0Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IEZvcm1JbnB1dCA9ICh7XG4gIGxhYmVsLFxuICBpbnB1dEluZm8sXG4gIGhhc0Vycm9yID0gZmFsc2UsXG4gIGVycm9yTWVzc2FnZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8bGFiZWwgaWQ9e2xhYmVsfSBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAge2lucHV0SW5mbyAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEluZm99PntpbnB1dEluZm99PC9wPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5pbnB1dCwgaGFzRXJyb3IgJiYgc3R5bGVzLmhhc0Vycm9yKX1cbiAgICAgICAgICAgIGh0bWxGb3I9e2xhYmVsfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc0Vycm9yICYmIDxBbGVydCBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICAgIHtoYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dE1lc3NhZ2V9PntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtSW5wdXRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBbGVydChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04IDE2QTggOCAwIDExOCAwYTggOCAwIDAxMCAxNnpNNyAzdjZoMlYzSDd6bTAgOHYyaDJ2LTJIN3pcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQWxlcnRcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdBcnJvd0Rvd24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMiAxMGgzMkwxOCAyNiAyIDEwelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Fycm93RG93blxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0Fycm93VXAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMiAyNmgzMkwxOCAxMCAyIDI2elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0Fycm93VXBcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdDbG9zZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGNsYXNzTmFtZT1cImNsb3NlX3N2Z19fZmVhdGhlciBjbG9zZV9zdmdfX2ZlYXRoZXIteFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOCA2TDYgMThNNiA2bDEyIDEyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdDbG9zZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFN2Z0xvZ28ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiODNcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgODMgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxuICAgICAgPGcgY2xpcC1wYXRoPVwidXJsKCNjbGlwMF8xOV8zMylcIj5cbiAgICAgICAgPGcgc3R5bGU9e3ttaXhCbGVuZE1vZGU6IFwiaGFyZC1saWdodFwifX0gZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMTlfMzMpXCI+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCIxOC43NjIyXCIgY3k9XCI4LjAwMDAxXCIgcng9XCIyMS43MzM0XCIgcnk9XCI5LjI0XCIgZmlsbD1cIiMwMUZGODVcIiBmaWxsLW9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHN0eWxlPXt7bWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIn19IGZpbHRlcj1cInVybCgjZmlsdGVyMV9mXzE5XzMzKVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNS40NjgzMyAzLjY2NjA1VjcuMDU0MDVIMTIuODkyNVYxMC40Mkg1LjQ2ODMzVjE1LjdIMC43MTExMjFWMC4zMDAwNDlIMTMuOTAxNlYzLjY2NjA1SDUuNDY4MzNaTTE2LjEyNjQgMC4zMDAwNDlIMjAuODgzNlYxNS43SDE2LjEyNjRWMC4zMDAwNDlaTTQwLjI2OTcgMC4zMDAwNDlWMTUuN0gzNi4zNTM0TDI4LjkyOTMgNy40OTQwNVYxNS43SDI0LjI2ODJWMC4zMDAwNDlIMjguMTg0NEwzNS42MDg2IDguNTA2MDVWMC4zMDAwNDlINDAuMjY5N1pcIiBmaWxsPVwiIzAxRkY4NVwiIGZpbGwtb3BhY2l0eT1cIjAuMVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01LjQ2ODMzIDMuMzE2NTJINS4xMTg4VjMuNjY2MDVWNy4wNTQwNVY3LjQwMzU4SDUuNDY4MzNIMTIuNTQyOVYxMC4wNzA1SDUuNDY4MzNINS4xMTg4VjEwLjQyVjE1LjM1MDVIMS4wNjA2NVYwLjY0OTU3NUgxMy41NTJWMy4zMTY1Mkg1LjQ2ODMzWk0zNS45NTgxIDguNTA2MDVWMC42NDk1NzVIMzkuOTIwMlYxNS4zNTA1SDM2LjUwODVMMjkuMTg4NSA3LjI1OTU1TDI4LjU3OTcgNi41ODY3M1Y3LjQ5NDA1VjE1LjM1MDVIMjQuNjE3N1YwLjY0OTU3NUgyOC4wMjkzTDM1LjM0OTQgOC43NDA1NEwzNS45NTgxIDkuNDEzMzdWOC41MDYwNVpNMTYuNDc1OSAwLjY0OTU3NUgyMC41MzQxVjE1LjM1MDVIMTYuNDc1OVYwLjY0OTU3NVpcIiBzdHJva2U9XCIjMDBBOEE4XCIgc3Ryb2tlLXdpZHRoPVwiMC42OTkwNTJcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHN0eWxlPXt7bWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIn19IGZpbHRlcj1cInVybCgjZmlsdGVyMl9mXzE5XzMzKVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNS40NjgzMyAzLjY2NjA1VjcuMDU0MDVIMTIuODkyNVYxMC40Mkg1LjQ2ODMzVjE1LjdIMC43MTExMjFWMC4zMDAwNDlIMTMuOTAxNlYzLjY2NjA1SDUuNDY4MzNaTTE2LjEyNjQgMC4zMDAwNDlIMjAuODgzNlYxNS43SDE2LjEyNjRWMC4zMDAwNDlaTTQwLjI2OTcgMC4zMDAwNDlWMTUuN0gzNi4zNTM0TDI4LjkyOTMgNy40OTQwNVYxNS43SDI0LjI2ODJWMC4zMDAwNDlIMjguMTg0NEwzNS42MDg2IDguNTA2MDVWMC4zMDAwNDlINDAuMjY5N1pcIiBmaWxsPVwiIzAxRkY4NVwiIGZpbGwtb3BhY2l0eT1cIjAuMVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01LjQ2ODMzIDMuMjA4OThINS4wMTEyNlYzLjY2NjA1VjcuMDU0MDVWNy41MTExMkg1LjQ2ODMzSDEyLjQzNTRWOS45NjI5OEg1LjQ2ODMzSDUuMDExMjZWMTAuNDJWMTUuMjQzSDEuMTY4MTlWMC43NTcxMjFIMTMuNDQ0NVYzLjIwODk4SDUuNDY4MzNaTTM2LjA2NTcgOC41MDYwNVYwLjc1NzEyMUgzOS44MTI2VjE1LjI0M0gzNi41NTYyTDI5LjI2ODIgNy4xODc0TDI4LjQ3MjIgNi4zMDc1NVY3LjQ5NDA1VjE1LjI0M0gyNC43MjUyVjAuNzU3MTIxSDI3Ljk4MTZMMzUuMjY5NiA4LjgxMjdMMzYuMDY1NyA5LjY5MjU0VjguNTA2MDVaTTE2LjU4MzUgMC43NTcxMjFIMjAuNDI2NVYxNS4yNDNIMTYuNTgzNVYwLjc1NzEyMVpcIiBzdHJva2U9XCIjMDBBOEE4XCIgc3Ryb2tlLXdpZHRoPVwiMC45MTQxNDVcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHN0eWxlPXt7bWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIn19IGZpbHRlcj1cInVybCgjZmlsdGVyM19kZGlfMTlfMzMpXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk01LjQ2ODMzIDMuNjY2MDVWNy4wNTQwNUgxMi44OTI1VjEwLjQySDUuNDY4MzNWMTUuN0gwLjcxMTEyMVYwLjMwMDA0OUgxMy45MDE2VjMuNjY2MDVINS40NjgzM1pNMTYuMTI2NCAwLjMwMDA0OUgyMC44ODM2VjE1LjdIMTYuMTI2NFYwLjMwMDA0OVpNNDAuMjY5NyAwLjMwMDA0OVYxNS43SDM2LjM1MzRMMjguOTI5MyA3LjQ5NDA1VjE1LjdIMjQuMjY4MlYwLjMwMDA0OUgyOC4xODQ0TDM1LjYwODYgOC41MDYwNVYwLjMwMDA0OUg0MC4yNjk3WlwiIGZpbGw9XCIjMDFGRjg1XCIgZmlsbC1vcGFjaXR5PVwiMC4xXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUuNDY4MzMgMy4zMTY1Mkg1LjExODhWMy42NjYwNVY3LjA1NDA1VjcuNDAzNThINS40NjgzM0gxMi41NDI5VjEwLjA3MDVINS40NjgzM0g1LjExODhWMTAuNDJWMTUuMzUwNUgxLjA2MDY1VjAuNjQ5NTc1SDEzLjU1MlYzLjMxNjUySDUuNDY4MzNaTTM1Ljk1ODEgOC41MDYwNVYwLjY0OTU3NUgzOS45MjAyVjE1LjM1MDVIMzYuNTA4NUwyOS4xODg1IDcuMjU5NTVMMjguNTc5NyA2LjU4NjczVjcuNDk0MDVWMTUuMzUwNUgyNC42MTc3VjAuNjQ5NTc1SDI4LjAyOTNMMzUuMzQ5NCA4Ljc0MDU0TDM1Ljk1ODEgOS40MTMzN1Y4LjUwNjA1Wk0xNi40NzU5IDAuNjQ5NTc1SDIwLjUzNDFWMTUuMzUwNUgxNi40NzU5VjAuNjQ5NTc1WlwiIHN0cm9rZT1cIiMzM0U5QzZcIiBzdHJva2Utb3BhY2l0eT1cIjAuMlwiIHN0cm9rZS13aWR0aD1cIjAuNjk5MDUyXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjRfZl8xOV8zMylcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUuNDY4MzMgMy42NjYwNVY3LjA1NDA1SDEyLjg5MjVWMTAuNDJINS40NjgzM1YxNS43SDAuNzExMTIxVjAuMzAwMDQ5SDEzLjkwMTZWMy42NjYwNUg1LjQ2ODMzWk0xNi4xMjY0IDAuMzAwMDQ5SDIwLjg4MzZWMTUuN0gxNi4xMjY0VjAuMzAwMDQ5Wk00MC4yNjk3IDAuMzAwMDQ5VjE1LjdIMzYuMzUzNEwyOC45MjkzIDcuNDk0MDVWMTUuN0gyNC4yNjgyVjAuMzAwMDQ5SDI4LjE4NDRMMzUuNjA4NiA4LjUwNjA1VjAuMzAwMDQ5SDQwLjI2OTdaXCIgZmlsbD1cIiMwMUZGODVcIiBmaWxsLW9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNS40NjgzMyAzLjQ1MDk2SDUuMjUzMjRWMy42NjYwNVY3LjA1NDA1VjcuMjY5MTRINS40NjgzM0gxMi42Nzc0VjEwLjIwNUg1LjQ2ODMzSDUuMjUzMjRWMTAuNDJWMTUuNDg1SDAuOTI2MjE0VjAuNTE1MTQySDEzLjY4NjVWMy40NTA5Nkg1LjQ2ODMzWk0zNS44MjM3IDguNTA2MDVWMC41MTUxNDJINDAuMDU0NlYxNS40ODVIMzYuNDQ4OUwyOS4wODg4IDcuMzQ5NzRMMjguNzE0MiA2LjkzNTdWNy40OTQwNVYxNS40ODVIMjQuNDgzM1YwLjUxNTE0MkgyOC4wODlMMzUuNDQ5MSA4LjY1MDM1TDM1LjgyMzcgOS4wNjQ0VjguNTA2MDVaTTE2LjM0MTUgMC41MTUxNDJIMjAuNjY4NVYxNS40ODVIMTYuMzQxNVYwLjUxNTE0MlpcIiBzdHJva2U9XCIjMzNFOUU5XCIgc3Ryb2tlLXdpZHRoPVwiMC40MzAxODZcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGZpbHRlcj1cInVybCgjZmlsdGVyNV9mXzE5XzMzKVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNS40NjgzMyAzLjY2NjA1VjcuMDU0MDVIMTIuODkyNVYxMC40Mkg1LjQ2ODMzVjE1LjdIMC43MTExMjFWMC4zMDAwNDlIMTMuOTAxNlYzLjY2NjA1SDUuNDY4MzNaTTE2LjEyNjQgMC4zMDAwNDlIMjAuODgzNlYxNS43SDE2LjEyNjRWMC4zMDAwNDlaTTQwLjI2OTcgMC4zMDAwNDlWMTUuN0gzNi4zNTM0TDI4LjkyOTMgNy40OTQwNVYxNS43SDI0LjI2ODJWMC4zMDAwNDlIMjguMTg0NEwzNS42MDg2IDguNTA2MDVWMC4zMDAwNDlINDAuMjY5N1pcIiBmaWxsPVwiIzAxRkY4NVwiIGZpbGwtb3BhY2l0eT1cIjAuMVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01LjQ2ODMzIDMuNTU4NUg1LjM2MDc4VjMuNjY2MDVWNy4wNTQwNVY3LjE2MTZINS40NjgzM0gxMi43ODQ5VjEwLjMxMjVINS40NjgzM0g1LjM2MDc4VjEwLjQyVjE1LjU5MjVIMC44MTg2NjdWMC40MDc1OTVIMTMuNzk0VjMuNTU4NUg1LjQ2ODMzWk0zNS43MTYxIDguNTA2MDVWMC40MDc1OTVINDAuMTYyMVYxNS41OTI1SDM2LjQwMTFMMjkuMDA5IDcuNDIxOUwyOC44MjE3IDcuMjE0ODdWNy40OTQwNVYxNS41OTI1SDI0LjM3NTdWMC40MDc1OTVIMjguMTM2N0wzNS41Mjg4IDguNTc4MkwzNS43MTYxIDguNzg1MjJWOC41MDYwNVpNMTYuMjM0IDAuNDA3NTk1SDIwLjc3NjFWMTUuNTkyNUgxNi4yMzRWMC40MDc1OTVaXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIwLjIxNTA5M1wiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgc3R5bGU9e3ttaXhCbGVuZE1vZGU6IFwiaGFyZC1saWdodFwifX0gZmlsdGVyPVwidXJsKCNmaWx0ZXI2X2ZfMTlfMzMpXCI+XG4gICAgICAgICAgPGVsbGlwc2UgY3g9XCI1Ny4wMzU2XCIgY3k9XCI4LjAwMDAxXCIgcng9XCIyMS4xMjA0XCIgcnk9XCI5LjI0XCIgZmlsbD1cIiM2MzYwRkZcIiBmaWxsLW9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHN0eWxlPXt7bWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIn19IGZpbHRlcj1cInVybCgjZmlsdGVyN19mXzE5XzMzKVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNDMuNTI4IDAuMzAwMDQ5SDQ4LjI4NTJWMTUuN0g0My41MjhWMC4zMDAwNDlaTTU1LjI0OTYgMy43NTQwNUg1MC4wODRWMC4zMDAwNDlINjUuMTQ4NVYzLjc1NDA1SDYwLjAwNjhWMTUuN0g1NS4yNDk2VjMuNzU0MDVaTTc1LjUzMTggMTAuMTc4VjE1LjdINzAuNzc0NlYxMC4xMTJMNjQuMzU5NSAwLjMwMDA0OUg2OS4zODFMNzMuMzY5NCA2LjQxNjA1TDc3LjM1NzggMC4zMDAwNDlIODEuOTcwOEw3NS41MzE4IDEwLjE3OFpcIiBmaWxsPVwiI0NCQ0FGRlwiIGZpbGwtb3BhY2l0eT1cIjAuMVwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk01NS41OTIyIDMuNzU0MDVWMy40MTE0NEg1NS4yNDk2SDUwLjQyNjZWMC42NDI2NThINjQuMTc0Mkw2NC44MDU5IDEuNjA4ODJWMy40MTE0NEg2MC4wMDY4SDU5LjY2NDJWMy43NTQwNVYxNS4zNTc0SDU1LjU5MjJWMy43NTQwNVpNNjUuNDkxMSAxLjQwNDdWMC42NDI2NThINjkuMTk1NEw3My4wODI0IDYuNjAzMkw3My4zNjk0IDcuMDQzMjdMNzMuNjU2NCA2LjYwMzJMNzcuNTQzNCAwLjY0MjY1OEg4MS4zMzg1TDc1LjI0NDggOS45OTA5Nkw3NS4xODkyIDEwLjA3NjJWMTAuMTc4VjE1LjM1NzRINzEuMTE3MlYxMC4xMTJWMTAuMDFMNzEuMDYxMyA5LjkyNDU3TDY1LjQ5MTEgMS40MDQ3Wk00My44NzA2IDAuNjQyNjU4SDQ3Ljk0MjZWMTUuMzU3NEg0My44NzA2VjAuNjQyNjU4WlwiIHN0cm9rZT1cIiNGQ0ZDRkZcIiBzdHJva2Utd2lkdGg9XCIwLjY4NTIxOFwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgc3R5bGU9e3ttaXhCbGVuZE1vZGU6IFwiaGFyZC1saWdodFwifX0gZmlsdGVyPVwidXJsKCNmaWx0ZXI4X2ZfMTlfMzMpXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk00My41MjggMC4zMDAwNDlINDguMjg1MlYxNS43SDQzLjUyOFYwLjMwMDA0OVpNNTUuMjQ5NiAzLjc1NDA1SDUwLjA4NFYwLjMwMDA0OUg2NS4xNDg1VjMuNzU0MDVINjAuMDA2OFYxNS43SDU1LjI0OTZWMy43NTQwNVpNNzUuNTMxOCAxMC4xNzhWMTUuN0g3MC43NzQ2VjEwLjExMkw2NC4zNTk1IDAuMzAwMDQ5SDY5LjM4MUw3My4zNjk0IDYuNDE2MDVMNzcuMzU3OCAwLjMwMDA0OUg4MS45NzA4TDc1LjUzMTggMTAuMTc4WlwiIGZpbGw9XCIjQ0JDQUZGXCIgZmlsbC1vcGFjaXR5PVwiMC4xXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTU1LjY5NzcgMy43NTQwNVYzLjMwNjAySDU1LjI0OTZINTAuNTMyVjAuNzQ4MDc2SDY0LjExNzJMNjQuNzAwNCAxLjY0MDIyVjMuMzA2MDJINjAuMDA2OEg1OS41NTg4VjMuNzU0MDVWMTUuMjUySDU1LjY5NzdWMy43NTQwNVpNNjUuNTk2NSAxLjM3MzI5VjAuNzQ4MDc2SDY5LjEzODNMNzIuOTk0MSA2LjY2MDc4TDczLjM2OTQgNy4yMzYyNkw3My43NDQ3IDYuNjYwNzhMNzcuNjAwNSAwLjc0ODA3Nkg4MS4xNDRMNzUuMTU2NCA5LjkzMzM5TDc1LjA4MzcgMTAuMDQ0OVYxMC4xNzhWMTUuMjUySDcxLjIyMjZWMTAuMTEyVjkuOTc4NTlMNzEuMTQ5NiA5Ljg2Njg4TDY1LjU5NjUgMS4zNzMyOVpNNDMuOTc2IDAuNzQ4MDc2SDQ3LjgzNzFWMTUuMjUySDQzLjk3NlYwLjc0ODA3NlpcIiBzdHJva2U9XCIjRkNGQ0ZGXCIgc3Ryb2tlLXdpZHRoPVwiMC44OTYwNTRcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHN0eWxlPXt7bWl4QmxlbmRNb2RlOiBcImhhcmQtbGlnaHRcIn19IGZpbHRlcj1cInVybCgjZmlsdGVyOV9kZGlfMTlfMzMpXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk00My41MjggMC4zMDAwNDlINDguMjg1MlYxNS43SDQzLjUyOFYwLjMwMDA0OVpNNTUuMjQ5NiAzLjc1NDA1SDUwLjA4NFYwLjMwMDA0OUg2NS4xNDg1VjMuNzU0MDVINjAuMDA2OFYxNS43SDU1LjI0OTZWMy43NTQwNVpNNzUuNTMxOCAxMC4xNzhWMTUuN0g3MC43NzQ2VjEwLjExMkw2NC4zNTk1IDAuMzAwMDQ5SDY5LjM4MUw3My4zNjk0IDYuNDE2MDVMNzcuMzU3OCAwLjMwMDA0OUg4MS45NzA4TDc1LjUzMTggMTAuMTc4WlwiIGZpbGw9XCIjQ0JDQUZGXCIgZmlsbC1vcGFjaXR5PVwiMC4xXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTU1LjU5MjIgMy43NTQwNVYzLjQxMTQ0SDU1LjI0OTZINTAuNDI2NlYwLjY0MjY1OEg2NC4xNzQyTDY0LjgwNTkgMS42MDg4MlYzLjQxMTQ0SDYwLjAwNjhINTkuNjY0MlYzLjc1NDA1VjE1LjM1NzRINTUuNTkyMlYzLjc1NDA1Wk02NS40OTExIDEuNDA0N1YwLjY0MjY1OEg2OS4xOTU0TDczLjA4MjQgNi42MDMyTDczLjM2OTQgNy4wNDMyN0w3My42NTY0IDYuNjAzMkw3Ny41NDM0IDAuNjQyNjU4SDgxLjMzODVMNzUuMjQ0OCA5Ljk5MDk2TDc1LjE4OTIgMTAuMDc2MlYxMC4xNzhWMTUuMzU3NEg3MS4xMTcyVjEwLjExMlYxMC4wMUw3MS4wNjEzIDkuOTI0NTdMNjUuNDkxMSAxLjQwNDdaTTQzLjg3MDYgMC42NDI2NThINDcuOTQyNlYxNS4zNTc0SDQzLjg3MDZWMC42NDI2NThaXCIgc3Ryb2tlPVwiI0UzRjdGRlwiIHN0cm9rZS1vcGFjaXR5PVwiMC4yXCIgc3Ryb2tlLXdpZHRoPVwiMC42ODUyMThcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGZpbHRlcj1cInVybCgjZmlsdGVyMTBfZl8xOV8zMylcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTQzLjUyOCAwLjMwMDA0OUg0OC4yODUyVjE1LjdINDMuNTI4VjAuMzAwMDQ5Wk01NS4yNDk2IDMuNzU0MDVINTAuMDg0VjAuMzAwMDQ5SDY1LjE0ODVWMy43NTQwNUg2MC4wMDY4VjE1LjdINTUuMjQ5NlYzLjc1NDA1Wk03NS41MzE4IDEwLjE3OFYxNS43SDcwLjc3NDZWMTAuMTEyTDY0LjM1OTUgMC4zMDAwNDlINjkuMzgxTDczLjM2OTQgNi40MTYwNUw3Ny4zNTc4IDAuMzAwMDQ5SDgxLjk3MDhMNzUuNTMxOCAxMC4xNzhaXCIgZmlsbD1cIiNDQkNBRkZcIiBmaWxsLW9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTUuNDYwNSAzLjc1NDA1VjMuNTQzMjFINTUuMjQ5Nkg1MC4yOTQ4VjAuNTEwODg1SDY0LjI0NTVMNjQuOTM3NiAxLjU2OTU2VjMuNTQzMjFINjAuMDA2OEg1OS43OTZWMy43NTQwNVYxNS40ODkySDU1LjQ2MDVWMy43NTQwNVpNNjQuOTM3NiAwLjc5ODk4OEw2NC43NDkzIDAuNTEwODg1SDY0LjkzNzZWMC43OTg5ODhaTTY1LjM1OTMgMS40NDM5NVYwLjUxMDg4NUg2OS4yNjY4TDczLjE5MjggNi41MzEyMkw3My4zNjk0IDYuODAyMDNMNzMuNTQ2IDYuNTMxMjJMNzcuNDcyIDAuNTEwODg1SDgxLjU4MTdMNzUuMzU1MSAxMC4wNjI5TDc1LjMyMDkgMTAuMTE1NFYxMC4xNzhWMTUuNDg5Mkg3MC45ODU0VjEwLjExMlYxMC4wNDkyTDcwLjk1MSA5Ljk5NjY3TDY1LjM1OTMgMS40NDM5NVpNNDMuNzM4OCAwLjUxMDg4NUg0OC4wNzQzVjE1LjQ4OTJINDMuNzM4OFYwLjUxMDg4NVpcIiBzdHJva2U9XCIjQTZEMkU2XCIgc3Ryb2tlLXdpZHRoPVwiMC40MjE2NzJcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGZpbHRlcj1cInVybCgjZmlsdGVyMTFfZl8xOV8zMylcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTQzLjUyOCAwLjMwMDA0OUg0OC4yODUyVjE1LjdINDMuNTI4VjAuMzAwMDQ5Wk01NS4yNDk2IDMuNzU0MDVINTAuMDg0VjAuMzAwMDQ5SDY1LjE0ODVWMy43NTQwNUg2MC4wMDY4VjE1LjdINTUuMjQ5NlYzLjc1NDA1Wk03NS41MzE4IDEwLjE3OFYxNS43SDcwLjc3NDZWMTAuMTEyTDY0LjM1OTUgMC4zMDAwNDlINjkuMzgxTDczLjM2OTQgNi40MTYwNUw3Ny4zNTc4IDAuMzAwMDQ5SDgxLjk3MDhMNzUuNTMxOCAxMC4xNzhaXCIgZmlsbD1cIiNDQkNBRkZcIiBmaWxsLW9wYWNpdHk9XCIwLjFcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTUuMzU1IDMuNzU0MDVWMy42NDg2M0g1NS4yNDk2SDUwLjE4OTRWMC40MDU0NjdINjQuMzAyNUw2NS4wNDMxIDEuNTM4MTZWMy42NDg2M0g2MC4wMDY4SDU5LjkwMTRWMy43NTQwNVYxNS41OTQ2SDU1LjM1NVYzLjc1NDA1Wk02NS4wNDMxIDEuMTUyODdMNjQuNTU0NCAwLjQwNTQ2N0g2NS4wNDMxVjEuMTUyODdaTTY1LjI1MzkgMS40NzUzNVYwLjQwNTQ2N0g2OS4zMjM5TDczLjI4MTEgNi40NzM2M0w3My4zNjk0IDYuNjA5MDRMNzMuNDU3NyA2LjQ3MzYzTDc3LjQxNDkgMC40MDU0NjdIODEuNzc2M0w3NS40NDM1IDEwLjEyMDVMNzUuNDI2NCAxMC4xNDY3VjEwLjE3OFYxNS41OTQ2SDcwLjg4VjEwLjExMlYxMC4wODA2TDcwLjg2MjggMTAuMDU0NEw2NS4yNTM5IDEuNDc1MzVaTTQzLjYzMzQgMC40MDU0NjdINDguMTc5N1YxNS41OTQ2SDQzLjYzMzRWMC40MDU0NjdaXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utd2lkdGg9XCIwLjIxMDgzNlwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPHBhdGggZD1cIk01LjM0NjkzIDMuOTY2MVY3LjM1NDFIMTIuNzcxMVYxMC43MjAxSDUuMzQ2OTNWMTYuMDAwMUgwLjU4OTcyMlYwLjYwMDA5OEgxMy43ODAyVjMuOTY2MUg1LjM0NjkzWk0xNi4wMDUgMC42MDAwOThIMjAuNzYyMlYxNi4wMDAxSDE2LjAwNVYwLjYwMDA5OFpNNDAuMTQ4MyAwLjYwMDA5OFYxNi4wMDAxSDM2LjIzMkwyOC44MDc5IDcuNzk0MVYxNi4wMDAxSDI0LjE0NjhWMC42MDAwOThIMjguMDYzTDM1LjQ4NzIgOC44MDYxVjAuNjAwMDk4SDQwLjE0ODNaXCIgZmlsbD1cIiMwMUZGODVcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTQzLjk2NDQgMC42MDAwOThINDguNzIxNlYxNi4wMDAxSDQzLjk2NDRWMC42MDAwOThaTTU1LjY4NjEgNC4wNTQxSDUwLjUyMDRWMC42MDAwOThINjUuNTg0OVY0LjA1NDFINjAuNDQzM1YxNi4wMDAxSDU1LjY4NjFWNC4wNTQxWk03NS45NjgyIDEwLjQ3ODFWMTYuMDAwMUg3MS4yMTFWMTAuNDEyMUw2NC43OTYgMC42MDAwOThINjkuODE3NUw3My44MDU5IDYuNzE2MUw3Ny43OTQyIDAuNjAwMDk4SDgyLjQwNzNMNzUuOTY4MiAxMC40NzgxWlwiIGZpbGw9XCIjRUNFQkZGXCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzE5XzMzXCIgeD1cIi02LjE5NzUyXCIgeT1cIi00LjQ2NjM4XCIgd2lkdGg9XCI0OS45MTk1XCIgaGVpZ2h0PVwiMjQuOTMyOFwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+XG4gICAgICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjEuNjEzMlwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTlfMzNcIiAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjFfZl8xOV8zM1wiIHg9XCItMi41MTUyN1wiIHk9XCItMi45MjYzNFwiIHdpZHRoPVwiNDYuMDExM1wiIGhlaWdodD1cIjIxLjg1MjdcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPlxuICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxuICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIxLjYxMzJcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzE5XzMzXCIgLz5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIyX2ZfMTlfMzNcIiB4PVwiLTAuMzY0MzQ0XCIgeT1cIi0wLjc3NTQxNlwiIHdpZHRoPVwiNDEuNzA5NVwiIGhlaWdodD1cIjE3LjU1MDhcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPlxuICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxuICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIwLjUzNzczMlwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTlfMzNcIiAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjNfZGRpXzE5XzMzXCIgeD1cIi0wLjY4Njk4M1wiIHk9XCItMC4wMjI1OTA2XCIgd2lkdGg9XCI0Mi4zNTQ3XCIgaGVpZ2h0PVwiMTguMTk2MVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+XG4gICAgICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiU291cmNlQWxwaGFcIiB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDBcIiByZXN1bHQ9XCJoYXJkQWxwaGFcIiAvPlxuICAgICAgICAgIDxmZU9mZnNldCBkeT1cIjAuNjk5MDUyXCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC4yNjg4NjZcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwLjMgMCAwIDAgMCAwLjI3NSAwIDAgMCAwLjcgMFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm11bHRpcGx5XCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwiZWZmZWN0MV9kcm9wU2hhZG93XzE5XzMzXCIgLz5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cIlNvdXJjZUFscGhhXCIgdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCIgcmVzdWx0PVwiaGFyZEFscGhhXCIgLz5cbiAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIxLjA3NTQ2XCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC42OTkwNTJcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwLjYgMCAwIDAgMCAwLjYgMCAwIDAgMSAwXCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwiY29sb3ItZG9kZ2VcIiBpbjI9XCJlZmZlY3QxX2Ryb3BTaGFkb3dfMTlfMzNcIiByZXN1bHQ9XCJlZmZlY3QyX2Ryb3BTaGFkb3dfMTlfMzNcIiAvPlxuICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJlZmZlY3QyX2Ryb3BTaGFkb3dfMTlfMzNcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XG4gICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJTb3VyY2VBbHBoYVwiIHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMFwiIHJlc3VsdD1cImhhcmRBbHBoYVwiIC8+XG4gICAgICAgICAgPGZlT2Zmc2V0IGR4PVwiLTAuMDY5OTA1MlwiIGR5PVwiMC4xMzk4MVwiIC8+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjAuMDM0OTUyNlwiIC8+XG4gICAgICAgICAgPGZlQ29tcG9zaXRlIGluMj1cImhhcmRBbHBoYVwiIG9wZXJhdG9yPVwiYXJpdGhtZXRpY1wiIGsyPVwiLTFcIiBrMz1cIjFcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjUgMFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluMj1cInNoYXBlXCIgcmVzdWx0PVwiZWZmZWN0M19pbm5lclNoYWRvd18xOV8zM1wiIC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyNF9mXzE5XzMzXCIgeD1cIjAuNjAzNTc0XCIgeT1cIjAuMTkyNTAyXCIgd2lkdGg9XCIzOS43NzM2XCIgaGVpZ2h0PVwiMTUuNjE1XCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj5cbiAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC4wNTM3NzMyXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xOV8zM1wiIC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyNV9mXzE5XzMzXCIgeD1cIjAuNjM5NDIzXCIgeT1cIjAuMjI4MzUxXCIgd2lkdGg9XCIzOS43MDE5XCIgaGVpZ2h0PVwiMTUuNTQzM1wiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+XG4gICAgICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjAuMDM1ODQ4OFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTlfMzNcIiAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjZfZl8xOV8zM1wiIHg9XCIzMi43NTI2XCIgeT1cIi00LjQwMjUzXCIgd2lkdGg9XCI0OC41NjU5XCIgaGVpZ2h0PVwiMjQuODA1MVwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9XCJzUkdCXCI+XG4gICAgICAgICAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxuICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjEuNTgxMjdcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzE5XzMzXCIgLz5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXI3X2ZfMTlfMzNcIiB4PVwiNDAuMzY1NFwiIHk9XCItMi44NjI0OVwiIHdpZHRoPVwiNDQuNzY4XCIgaGVpZ2h0PVwiMjEuNzI1XCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj5cbiAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMS41ODEyN1wiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTlfMzNcIiAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjhfZl8xOV8zM1wiIHg9XCI0Mi40NzM4XCIgeT1cIi0wLjc1NDEzMlwiIHdpZHRoPVwiNDAuNTUxMlwiIGhlaWdodD1cIjE3LjUwODNcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPlxuICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxuICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIwLjUyNzA5MVwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTlfMzNcIiAvPlxuICAgICAgICA8L2ZpbHRlcj5cbiAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjlfZGRpXzE5XzMzXCIgeD1cIjQyLjE1NzVcIiB5PVwiLTAuMDE2MjA1NVwiIHdpZHRoPVwiNDEuMTgzN1wiIGhlaWdodD1cIjE4LjE0MDhcIiBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiPlxuICAgICAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cIlNvdXJjZUFscGhhXCIgdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCIgcmVzdWx0PVwiaGFyZEFscGhhXCIgLz5cbiAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIwLjY4NTIxOFwiIC8+XG4gICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjAuMjYzNTQ1XCIgLz5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMC4wNTEgMCAwIDAgMCAwLjA4MiAwIDAgMCAwLjcgMFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm11bHRpcGx5XCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwiZWZmZWN0MV9kcm9wU2hhZG93XzE5XzMzXCIgLz5cbiAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj1cIlNvdXJjZUFscGhhXCIgdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwXCIgcmVzdWx0PVwiaGFyZEFscGhhXCIgLz5cbiAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCIxLjA1NDE4XCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC42ODUyMThcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIwIDAgMCAwIDAgMCAwIDAgMCAwLjQgMCAwIDAgMCAxIDAgMCAwIDEgMFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cImNvbG9yLWRvZGdlXCIgaW4yPVwiZWZmZWN0MV9kcm9wU2hhZG93XzE5XzMzXCIgcmVzdWx0PVwiZWZmZWN0Ml9kcm9wU2hhZG93XzE5XzMzXCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiZWZmZWN0Ml9kcm9wU2hhZG93XzE5XzMzXCIgcmVzdWx0PVwic2hhcGVcIiAvPlxuICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiU291cmNlQWxwaGFcIiB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDBcIiByZXN1bHQ9XCJoYXJkQWxwaGFcIiAvPlxuICAgICAgICAgIDxmZU9mZnNldCBkeD1cIi0wLjA2ODUyMThcIiBkeT1cIjAuMTM3MDQ0XCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC4wMzQyNjA5XCIgLz5cbiAgICAgICAgICA8ZmVDb21wb3NpdGUgaW4yPVwiaGFyZEFscGhhXCIgb3BlcmF0b3I9XCJhcml0aG1ldGljXCIgazI9XCItMVwiIGszPVwiMVwiIC8+XG4gICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwXCIgLz5cbiAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW4yPVwic2hhcGVcIiByZXN1bHQ9XCJlZmZlY3QzX2lubmVyU2hhZG93XzE5XzMzXCIgLz5cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIxMF9mXzE5XzMzXCIgeD1cIjQzLjQyMjVcIiB5PVwiMC4xOTQ2MzFcIiB3aWR0aD1cIjM4LjY1MzdcIiBoZWlnaHQ9XCIxNS42MTA3XCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj5cbiAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC4wNTI3MDkxXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xOV8zM1wiIC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMTFfZl8xOV8zM1wiIHg9XCI0My40NTc3XCIgeT1cIjAuMjI5NzdcIiB3aWR0aD1cIjM4LjU4MzRcIiBoZWlnaHQ9XCIxNS41NDA1XCIgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz1cInNSR0JcIj5cbiAgICAgICAgICA8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XG4gICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cbiAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMC4wMzUxMzk0XCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xOV8zM1wiIC8+XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMF8xOV8zM1wiPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiODNcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG5cbiAgICAvLyA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzMiAzN1wiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAvLyAgIDxwYXRoIGQ9XCJNMjYgMzN2LTloNHYxM0gwVjI0aDR2OWgyMnpcIiBmaWxsPVwiI0JDQkJCQlwiIC8+XG4gICAgLy8gICA8cGF0aFxuICAgIC8vICAgICBkPVwiTTIxLjUgMGwtMi43IDIgOS45IDEzLjMgMi43LTJMMjEuNSAwek0yNiAxOC40TDEzLjMgNy44bDIuMS0yLjUgMTIuNyAxMC42LTIuMSAyLjV6TTkuMSAxNS4ybDE1IDcgMS40LTMtMTUtNy0xLjQgM3ptMTQgMTAuNzlsLjY4LTIuOTUtMTYuMS0zLjM1TDcgMjNsMTYuMSAyLjk5ek0yMyAzMEg3di0zaDE2djN6XCJcbiAgICAvLyAgICAgZmlsbD1cIiNGNDgwMjRcIlxuICAgIC8vICAgLz5cbiAgICAvLyA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIE1hKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCI1NDBcIiBoZWlnaHQ9XCI1MTRcIiB2aWV3Qm94PVwiMCAwIDU0MCA1MTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PlxyXG48cGF0aCBkPVwiTTE5Ny44NTIgNDA5LjI3NUMzMTEuNDUyIDQyNy45MDkgMzcwLjA3MyAzOTAuNjA5IDM3MC4zNzEgMzg5LjVDMzczLjU1MSAzODcuNzIgMzc2Ljc2MSAzODUuOTYyIDM3OS43NzEgMzgzLjk0MkMzODQuNTYyIDM4MC43MjkgMzg5LjIyOSAzNzcuMzQ3IDM5My44ODUgMzczLjk1OEMzOTYuMTggMzcyLjI4NyAzOTguNDIyIDM3MC41MzEgNDAwLjUyIDM2OC42NDNDNDAyLjAyNiAzNjcuMjg2IDQwMy4xMzkgMzY1LjUzNyA0MDQuNjI4IDM2NC4xNTlDNDA4LjA0NyAzNjAuOTk1IDQxMS43MjMgMzU4LjA3NiA0MTUuMDUxIDM1NC44MzJDNDIxLjAyNyAzNDkuMDA1IDQyNi45MSAzNDMuMDg2IDQzMi42NjkgMzM3LjA2NkM0MzcuMzIyIDMzMi4yMDIgNDQxLjgwNCAzMjcuMTg1IDQ0Ni4yMzMgMzIyLjEzNUM0NDkuMzExIDMxOC42MjQgNDUyLjE3NCAzMTQuOTQzIDQ1NS4xMjYgMzExLjMzMkM0NTcuNTgyIDMwOC4zMjYgNDYwLjI0OCAzMDUuNDQ4IDQ2Mi40MiAzMDIuMjY2QzQ2NC45ODcgMjk4LjUwMyA0NjcuMjMzIDI5NC41MjkgNDY5LjQxNyAyOTAuNTQ4QzQ3MS42NjYgMjg2LjQ0OCA0NzMuODY1IDI4Mi4zMDYgNDc1LjczNCAyNzguMDQzQzQ3Ny45NzEgMjcyLjk0IDQ4MC45NjYgMjY4LjA4NyA0ODEuMjA2IDI2Mi4yODdDNDgxLjQgMjU3LjU4IDQ4Mi4yNTYgMjUyLjkgNDgyLjU0MiAyNDguMTk0QzQ4Mi44NzkgMjQyLjY2MSA0ODIuMTg2IDIzNy4xNjkgNDgxLjE0OCAyMzEuNzIyQzQ4MC4yNTIgMjI3LjAxOSA0NzguOTcgMjIyLjM5NSA0NzYuNTM2IDIxOC4yMUM0NzMuOTcgMjEzLjc5NiA0NzEuMTg0IDIwOS40NzggNDY4LjIwMiAyMDUuMzA5QzQ2NC42MiAyMDAuMzAyIDQ2MC4zNDIgMTk1Ljg4MyA0NTUuMTMgMTkyLjI3OUM0NTAuMjY1IDE4OC45MTMgNDQ0Ljk2NCAxODYuMzg3IDQzOS40MzYgMTg0LjI2MUM0MzQuMjY2IDE4Mi4yNzMgNDI5LjAwNiAxODAuNTA0IDQyMy44MTYgMTc4LjU2MkM0MjAuODM4IDE3Ny40NDggNDE3Ljk0MyAxNzYuMTM2IDQxNC45NzggMTc0Ljk5MkM0MTAuMTcgMTczLjEzNyA0MDUuMjg0IDE3MS40NTYgNDAwLjUyMiAxNjkuNTA0QzM5My4wOTYgMTY2LjQ1OSAzODYuNTIgMTYyLjI2MyAzODEuMTAxIDE1Ni40MzhDMzc3LjU3MiAxNTIuNjQ0IDM3My43MzggMTQ5LjEwNiAzNjkuOTk4IDE0NS40OTNDMzY2LjMxOCAxNDEuOTM3IDM2Mi41NSAxMzguNDY0IDM1OC44OSAxMzQuODg5QzM1Ny4zNTQgMTMzLjM4OCAzNTYuMTI4IDEzMS41OTMgMzU0LjUzNSAxMzAuMTU3QzM1Mi4xOCAxMjguMDMzIDM0OS42NTQgMTI2LjA3NiAzNDcuMTQ1IDEyNC4xMTJDMzQ0LjY2NSAxMjIuMTcgMzQyLjMyNSAxMTkuOTUgMzM5LjU1NCAxMTguNDgxQzMzMy40MjggMTE1LjIzNSAzMjcuMzQ3IDExMS44NjUgMzIwLjUxIDEwOS45NjRDMzE0LjU3MSAxMDguMzEzIDMwOC43ODkgMTA2LjMwOSAzMDIuNjA2IDEwNS4zMzdDMjk2LjIxOSAxMDQuMzMzIDI4OS44NzggMTAzLjQwNCAyODMuNDAyIDEwMy40MTFDMjc1LjA5OCAxMDMuNDIgMjY2Ljc5NCAxMDMuMzkyIDI1OC40OSAxMDMuNDI5QzI1Ni40NDggMTAzLjQzOCAyNTQuMzggMTAzLjQ4MSAyNTIuMzcgMTAzLjc4NUMyNDYuOTU3IDEwNC42MDMgMjQxLjU1NiAxMDUuNTE1IDIzNi4xNzIgMTA2LjQ5OUMyMzEuODc1IDEwNy4yODQgMjI3LjYwNiAxMDguMjA1IDIyMy4zMzUgMTA5LjExNEwyMjMuMTg1IDEwOS4xNDZDMjIwLjA3MSAxMDkuODA4IDIxNi45NTQgMTEwLjQ3MSAyMTMuODc4IDExMS4yNjlDMjA4LjUxOSAxMTIuNjU5IDIwMy4xODEgMTE0LjEyNyAxOTcuODUyIDExNS42MThDMTkwLjU3MyAxMTcuNjU1IDE4NC4xMDkgMTIxLjY0MiAxNzYuNzI2IDEyMy41MDdDMTcyLjc5NiAxMjQuNTAxIDE2OS4wMTEgMTI2LjA3MSAxNjUuMjM5IDEyNy41NkMxNTguNzY2IDEzMC4xMTYgMTUyLjMzNCAxMzIuNzcgMTQ1LjkyNCAxMzUuNDY3QzE0Mi45NDIgMTM2LjcyMiAxNDAuMTQ3IDEzOC40MTcgMTM3LjEwMyAxMzkuNDg3QzEzMC45NjcgMTQxLjY0NyAxMjUuMjQyIDE0NC41MyAxMTkuODIxIDE0Ny45MzVDMTE1LjM3NSAxNTAuNzI3IDExMS4yMjIgMTUzLjkzNiAxMDYuODE3IDE1Ni43OTFDMTAwLjY2MiAxNjAuNzgxIDk0LjgxMiAxNjUuMDg3IDkwLjE0NzIgMTcwLjY2MUM4Ni44MDcyIDE3NC42NTMgODMuMjk2IDE3OC41NjggODAuNDUzNiAxODIuODcxQzc2LjQzNjggMTg4Ljk1IDcyLjc1NzYgMTk1LjI1MyA2OS4zMjE2IDIwMS42NUM2Ni4xMTA0IDIwNy42MjkgNjMuMzM2OCAyMTMuODI2IDYwLjUgMjE5Ljk4MUM1OC42NDA4IDIyNC4wMTYgNTYuNzg4OCAyMjguMDc4IDU1LjMzOTIgMjMyLjI1NkM1My42NTIgMjM3LjEyMSA1Mi41NDcyIDI0Mi4xNjcgNTAuOTI4IDI0Ny4wNTVDNDkuNjMzNiAyNTAuOTY1IDQ5LjE1NjggMjU0LjkyNCA0OS4yMDMyIDI1OC45NzRDNDkuMjE1MiAyNjAuMDY0IDQ5LjUxNjggMjYxLjE1MSA0OS41MzEyIDI2Mi4yNDFDNDkuNjc0NCAyNzIuODcxIDQ5Ljc1MjggMjgzLjUwMiA0OS45MzI4IDI5NC4xMzJDNDkuOTY1NiAyOTYuMDMgNTAuMzIwOCAyOTcuOTMgNTAuNjM0NCAyOTkuODEyQzUxLjE4MzIgMzAzLjEwNSA1MS43ODk2IDMwNi4zOTEgNTIuNDIxNiAzMDkuNjcxQzUyLjk0ODggMzEyLjQwOCA1My4zMTIgMzE1LjIgNTQuMTU5MiAzMTcuODQ5QzU2LjU5MzYgMzI1LjQ2IDU5LjcyNCAzMzIuODIxIDYzLjg4ODggMzM5Ljc0QzY2LjYzMTIgMzQ0LjI5NiA2OS40Nzg0IDM0OC43OTggNzIuMzk1MiAzNTMuMjU0QzczLjMwNCAzNTQuNjQzIDc0LjYwOTYgMzU1Ljc5MiA3NS43MTEyIDM1Ny4wNjhDNzcuOTQwOCAzNTkuNjUyIDc5LjY3MzYgMzYxLjg4MiA4Mi40MDU2IDM2NC44MUMxMTQuNjg2IDM5OS40MDYgMTYwLjM5IDQwMy4xMzEgMTk3Ljg1MiA0MDkuMjc1WlwiIGZpbGw9XCIjNDY0MkZGXCIvPlxyXG48cGF0aCBkPVwiTTM4LjYwNzEgMzEyLjQzNUMzNi4yOTQgMzA3LjI1OSAzNC40Nzk5IDMwMi4xMjggMzMuNTQ1NCAyOTYuNjk3QzMyLjgwMyAyOTIuMzgzIDMxLjU4NTUgMjg4LjE0NCAzMC43NTcyIDI4My44NDFDMzAuMzEyMiAyODEuNTI5IDMwLjMyMDggMjc5LjE0MSAyOS45ODYzIDI3Ni44MDVDMjkuNDExIDI3Mi43ODggMjguNzI4NSAyNjguNzg2IDI4LjA4ODkgMjY0Ljc3N0MyNy43NzM1IDI2Mi44IDI3LjM1OTUgMjYwLjgzMyAyNy4xNTI3IDI1OC44NDdDMjYuNDAxMSAyNTEuNjIzIDI1LjgwNzkgMjQ0LjM5MSAyNi4wNTgyIDIzNy4xMkMyNi4xOTAzIDIzMy4yODYgMjYuMDM4NSAyMjkuNDIzIDI2LjQ4NDYgMjI1LjYyM0MyNy4wNDkzIDIyMC44MTIgMjguMTMzMiAyMTYuMDU3IDI4LjkxNDIgMjExLjI2NkMyOS40NjUgMjA3Ljg4NyAyOS43NTg4IDIwNC40NjggMzAuMzkwMSAyMDEuMTAzQzMxLjQ1OTUgMTk1LjQwNiAzMy4yOTEyIDE4OS45MjUgMzYuMzgzNiAxODQuOUMzNy43NDI1IDE4Mi42OTEgMzkuMjg0MyAxODAuNTg1IDQwLjc2MTIgMTc4LjQ0M0M0MS43NTkgMTc2Ljk5NSA0NC44ODU3IDE3NS43MyA0Ni4yMzEyIDE3Ni4wMDNDNDguMDggMTc2LjM3OCA0OC43NDggMTc3LjY3MiA0OC41ODI0IDE3OS4xMDFDNDguMjYyNCAxODEuODY4IDQ3Ljc4MDggMTg0LjY0OCA0Ny4wMDk2IDE4Ny4zMzFDNDUuNDE1NSAxOTIuODc1IDQzLjM4NjMgMTk4LjMxMSA0MS45MjI2IDIwMy44ODRDNDAuODU1MyAyMDcuOTQ3IDQwLjM4NDggMjEyLjE1NSAzOS42ODgxIDIxNi4zMDRDMzguODI4MyAyMjEuNDI0IDM3Ljk4ODcgMjI2LjU0NiAzNy4xODcyIDIzMS42NzVDMzYuOTc0NyAyMzMuMDM1IDM2Ljg4NTQgMjM0LjQxNiAzNi44MjQzIDIzNS43OTJDMzYuNjc1MiAyMzkuMTUyIDM2LjU5MDMgMjQyLjUxMyAzNi40NTExIDI0NS44NzRDMzYuMzU4OCAyNDguMSAzNi4wMzI5IDI1MC4zMzEgMzYuMTM0MyAyNTIuNTQ3QzM2LjM4MDIgMjU3LjkyIDM2Ljc2OTggMjYzLjI4OCAzNy4xODkxIDI2OC42NTJDMzcuNDYyOCAyNzIuMTUyIDM3LjgxNjggMjc1LjY1IDM4LjI3MTggMjc5LjEzMkMzOC42MzQ3IDI4MS45MTEgMzkuMjA4MyAyODQuNjY1IDM5LjY4MTUgMjg3LjQzMUM0MC4xNjQxIDI5MC4yNTIgNDAuNTI4MiAyOTMuMDk3IDQxLjE0OSAyOTUuODkxQzQxLjcxMTYgMjk4LjQyMiA0Mi40NzI5IDMwMC45MjEgNDMuMjgyMyAzMDMuMzk1QzQ1LjM4ODMgMzA5LjgzMSA0Ny41MjI0IDMxNi4yNiA0OS43MzUyIDMyMi42NjRDNTEuMzkyIDMyNy40NTggNTMuMjAxNiAzMzIuMjA0IDU0LjkxNjggMzM2Ljk3OUM1NS42NzIgMzM5LjA4MSA1NS4xOTkyIDM0MC4zMDkgNTMuNDk2OCAzNDAuMzE3QzUyLjE0IDM0MC4zMjMgNTEuMDQzMiAzMzkuNTAyIDUwLjQ0MzIgMzM4LjI3NUM0OS45MzIgMzM3LjIyOSA0OS41MDY0IDMzNi4xNDQgNDguOTk4NCAzMzUuMDk2QzQ2LjYxODQgMzMwLjE4MyA0NC4xNzM3IDMyNS4yOTcgNDEuODUzOCAzMjAuMzU4QzQwLjY2MTcgMzE3LjgyMSAzOS42ODI1IDMxNS4xOTIgMzguNjA3MSAzMTIuNDM1WlwiIGZpbGw9XCIjNDY0MkZGXCIvPlxyXG48cGF0aCBkPVwiTTQ1My44MzUgMTM2LjA1OUM0NDkuMDE0IDEzNy4xOTUgNDQ0LjQwMiAxMzguNDYzIDQzOS43MTkgMTM5LjQyM0M0MzYuMzg2IDE0MC4xMDYgNDMyLjg5NiAxNDAuOTggNDI5LjU4NiAxNDAuNjc3QzQyNS40ODcgMTQwLjMwMSA0MjEuMTM4IDE0MS40ODUgNDE3LjI3OCAxMzkuNDRDNDE0LjczNyAxMzguMDk0IDQxMi4yNTMgMTM2LjYxMiA0MDkuOTA4IDEzNC45NzhDNDA1LjUyOSAxMzEuOTI1IDQwMi42NDcgMTI3LjcwNiA0MDAuMjgyIDEyMy4xNDFDMzk3LjczNCAxMTguMjI2IDM5Ni4xMjcgMTEzLjAxNCAzOTUuMDcyIDEwNy42NTFDMzk0LjY3MSAxMDUuNjE2IDM5NC4yNjQgMTAzLjUwOSAzOTQuNCAxMDEuNDY4QzM5NC42MDUgOTguNDAyNSAzOTUuMjM4IDk1LjM1ODcgMzk1Ljc3NCA5Mi4zMTg4QzM5Ni40MzkgODguNTQ1NiAzOTcuODQyIDg0Ljk5NjggMzk5LjUxNSA4MS41Mjc5QzQwMS44MTUgNzYuNzU5MiA0MDUuOTM4IDczLjYxODggNDEwLjI0NyA3MC42OTM3QzQxNS4yOTIgNjcuMjY4OSA0MjAuODAzIDY0LjU4NTYgNDI2LjczNCA2Mi45MTU0QzQzMC4yMzcgNjEuOTI5NyA0MzMuOTUyIDYxLjU3NDUgNDM3LjU5NiA2MS4xMDIyQzQ0NC42NCA2MC4xOTAzIDQ1MS40NjQgNjEuODc2NSA0NTguMTUgNjMuNDQ0QzQ2Ny43MyA2NS42ODk5IDQ3My4yMTkgNzIuMzcgNDc1Ljk4MiA4MS4wMDkyQzQ3Ny40OTYgODUuNzQwNyA0NzguMjUxIDkwLjY5NTcgNDc5LjI3MiA5NS41NjQxQzQ3OS44MzYgOTguMjU1NyA0ODAuNDgzIDEwMC45NjQgNDgwLjY0NiAxMDMuNjg5QzQ4MC43NzggMTA1LjkwMyA0ODAuNDE2IDEwOC4xODYgNDc5Ljk2NyAxMTAuMzgxQzQ3OS4wOSAxMTQuNjc4IDQ3Ny4xNjYgMTE4LjU5OCA0NzQuNjM1IDEyMi4yNDNDNDcyLjU3IDEyNS4yMTggNDY5LjYxMSAxMjcuMzQ0IDQ2Ni43NzggMTI5LjU3NUM0NjIuOTk0IDEzMi41NTUgNDU4LjUyNiAxMzQuMzU0IDQ1My44MzUgMTM2LjA1OVpcIiBmaWxsPVwiIzQ2NDJGRlwiLz5cclxuPHBhdGggZD1cIk00NzEuNDI3IDE2OC44NzJDNDcwLjI4MiAxNjcuNDQyIDQ2OS4wMzIgMTY2LjE5MSA0NjguMjQ2IDE2NC43MTdDNDY3LjgwMiAxNjMuODgyIDQ2Ny44MTIgMTYyLjU3MyA0NjguMTYzIDE2MS42NjlDNDY4Ljc4NCAxNjAuMDY3IDQ3MC41NTggMTYwLjE1OSA0NzEuODQ1IDE2MC41MTVDNDczLjE5IDE2MC44ODYgNDc0LjUwOSAxNjEuNzEgNDc1LjU1OCAxNjIuNjI3QzQ4MS4xNDEgMTY3LjUxMiA0ODYuMDU2IDE3Mi45OTUgNDkwLjIyIDE3OC45OTZDNDkzLjc0MyAxODQuMDcyIDQ5Ni40OTcgMTg5LjU5NSA0OTcuNDc2IDE5NS43MDVDNDk4LjExNiAxOTkuNjk2IDQ5OC42NzggMjAzLjcxOCA0OTguODk0IDIwNy43NDRDNDk5LjI5NSAyMTUuMjUxIDQ5OS42MDYgMjIyLjc3MSA0OTkuNiAyMzAuMjg1QzQ5OS41OTQgMjM2LjY2NiA0OTguNDYyIDI0Mi45MjMgNDk1LjcyMSAyNDguODM1QzQ5NC44MTggMjUwLjc4NCA0OTEuNzg4IDI1My4yOTcgNDg5LjI1NCAyNTMuMTU3QzQ4Ny4yNjEgMjUzLjA0NyA0ODUuMzE5IDI1MS42NyA0ODUuMzcxIDI0OS43OUM0ODUuNDQ2IDI0Ny4wNTUgNDg1Ljc4OCAyNDQuMzE5IDQ4Ni4xODIgMjQxLjYwNUM0ODYuNjM3IDIzOC40NjEgNDg3LjMxNyAyMzUuMzQ2IDQ4Ny44MTQgMjMyLjIwN0M0ODguMjM5IDIyOS41MTkgNDg4Ljc5NCAyMjYuODE4IDQ4OC44NDcgMjI0LjExNEM0ODguOTM0IDIxOS42MjMgNDg4Ljk0NiAyMTUuMDk3IDQ4OC40NjMgMjEwLjYzN0M0ODguMDA4IDIwNi40NDQgNDg2Ljk4NiAyMDIuMjkyIDQ4Ni4wMDYgMTk4LjE2N0M0ODQuODQ2IDE5My4yODEgNDgzLjYzNSAxODguMzY0IDQ4MC45OSAxODMuOTY5QzQ3Ny45NDEgMTc4LjkwNiA0NzQuNjg0IDE3My45NTYgNDcxLjQyNyAxNjguODcyWlwiIGZpbGw9XCIjNDY0MkZGXCIvPlxyXG48cGF0aCBkPVwiTTcxLjM0MTYgMTUwLjgwOUM2OS44Nzc2IDE1Mi4zODggNjguNDQyNCAxNTMuODM2IDY3LjE0MTYgMTU1LjM4NUM2My45MjQgMTU5LjIxNiA2MC43Nzc2IDE2My4xMDEgNTcuNTgwOCAxNjYuOTQ4QzU2LjY0NzIgMTY4LjA3MyA1NS4zNjI0IDE2OC43ODIgNTMuOTQgMTY4LjEwNEM1Mi41Mjg4IDE2Ny40MzEgNTIuNzIzMiAxNjUuOTQ4IDUyLjggMTY0LjY3NkM1Mi45NzkyIDE2MS43MzYgNTQuNTU0NCAxNTkuMjg1IDU2LjI3MTIgMTU3LjAyOEM1OS44NzQ0IDE1Mi4yOTIgNjMuNjY2NCAxNDcuNjY5IDY4LjE1NiAxNDMuNjQ0QzcyLjg0ODggMTM5LjQzNyA3Ny43ODQ4IDEzNS41MTQgODMuMTg1NiAxMzIuMTExQzg2LjA5MjggMTMwLjI3OSA4OC44ODg4IDEyOC4zMzUgOTIuNDAwOCAxMjcuNzUyQzkzLjE3NjggMTI3LjYyNCA5NC41NjE2IDEyNy42OCA5NC43MzEyIDEyOC4wNDRDOTUuMDY3MiAxMjguNzY2IDk1LjA4OTYgMTI5Ljk5MyA5NC42MzM2IDEzMC41OTdDOTMuNjQwOCAxMzEuOTA5IDkyLjMyNDggMTMzLjAyMSA5MS4wMzY4IDEzNC4xMDRDODguNzg4IDEzNS45OTQgODYuNDA5NiAxMzcuNzQ0IDg0LjE3NzYgMTM5LjY1Qzc5Ljg5NTIgMTQzLjMwNiA3NS42NzYgMTQ3LjAyOSA3MS4zNDE2IDE1MC44MDlaXCIgZmlsbD1cIiM0NjQyRkZcIi8+XHJcbjxwYXRoIGQ9XCJNNDUxLjY3NyAzNzYuNjIzQzQ1MC4xMjggMzgxLjM1IDQ0OC4zMTggMzg1LjkyMyA0NDcuMjg5IDM5MC42NUM0NDUuNzEgMzk3Ljg5NSA0NDIuMzkgNDA0LjU5OSA0NDAuNTczIDQxMS43NUM0NDAuNDE4IDQxMi4zNjEgNDQwLjEzNSA0MTIuOTY3IDQ0MC4xMzUgNDEzLjU3NUM0NDAuMTM1IDQxMy44MiA0NDAuNzIxIDQxNC4yMzYgNDQxLjA3MyA0MTQuMjcxQzQ0MS42NzIgNDE0LjMzMSA0NDIuMjk2IDQxNC4wOTYgNDQyLjkxMiA0MTQuMDc5QzQ0Ny40NjUgNDEzLjk1MSA0NTIuMDE4IDQxMy43ODkgNDU2LjU3MyA0MTMuNzY5QzQ1Ny44OSA0MTMuNzYzIDQ1OS4yMjMgNDE0LjEzMSA0NjAuNTE1IDQxNC40NTFDNDYwLjc3MSA0MTQuNTE1IDQ2MS4wODEgNDE1LjE5MSA0NjEuMDA3IDQxNS41MUM0NjAuNTgyIDQxNy4zNDkgNDYwLjA2MiA0MTkuMTY4IDQ1OS41NDIgNDIwLjk4NkM0NTkuNDU4IDQyMS4yNzggNDU5LjI0NyA0MjEuNzMxIDQ1OS4wMzQgNDIxLjc2NUM0NTYuNzY4IDQyMi4xMjYgNDU3LjA2MSA0MjQuMDEzIDQ1Ni43NjUgNDI1LjM3OEM0NTUuOTMzIDQyOS4yMjYgNDU1LjMyNiA0MzMuMTE4IDQ1NC41OSA0MzYuOTg2QzQ1NC4wMzUgNDM5LjkwMSA0NTMuNDU0IDQ0Mi44MTIgNDUyLjgxMyA0NDUuNzExQzQ1Mi40NTQgNDQ3LjMyOCA0NTAuOTk3IDQ0Ny42OTIgNDQ5LjU5IDQ0Ny43MDNDNDQyLjQ1IDQ0Ny43NjIgNDM1LjMwOCA0NDcuODE5IDQyOC4xNzIgNDQ3LjY3MkM0MjYuMjAxIDQ0Ny42MzIgNDI1LjEgNDQ2LjU0MSA0MjQuODMgNDQ0LjkyQzQyNC4wOCA0NDAuNDEgNDIzLjIwOCA0MzUuOTE3IDQyMi4zNzcgNDMxLjQxOUM0MjEuOTE0IDQyOC45MTEgNDIxLjQ1NyA0MjYuNDAxIDQyMC45NSA0MjMuOTAxQzQyMC43NjUgNDIyLjk4NiA0MjAuMjk5IDQyMi4yODggNDE5LjA5NyA0MjIuNDgxQzQxNy4yMjIgNDIyLjc4MyA0MTYuMjU0IDQyMi4wMDkgNDE1Ljg5NCA0MjAuMjI4QzQxNS42MDYgNDE4LjgwNCA0MTQuOTU4IDQxNy40NDkgNDE0LjYxIDQxNi4wMzJDNDE0LjIyOCA0MTQuNDgyIDQxNC45MTcgNDEzLjc0IDQxNi41NzkgNDEzLjczNkM0MTkuODI1IDQxMy43MjggNDIzLjA3MSA0MTMuNjkgNDI2LjMxNSA0MTMuNzQ3QzQyOS4xNTggNDEzLjc5NiA0MzIuMDAyIDQxMy45MTkgNDM0Ljg0MSA0MTQuMDkyQzQzNS43OCA0MTQuMTQ5IDQzNS45ODUgNDEzLjgwNyA0MzUuODI3IDQxMy4wNjNDNDM1LjY4NiA0MTIuMzk0IDQzNS42MzMgNDExLjY2OCA0MzUuMzExIDQxMS4wODJDNDMzLjE1OSA0MDcuMTU2IDQzMS4wMjYgNDAzLjIxNyA0MjguNzEyIDM5OS4zNzlDNDI3Ljc2NSAzOTcuODA5IDQyNi40NjIgMzk2LjQwNiA0MjUuMTc4IDM5NS4wNUM0MjIuMTQyIDM5MS44NDcgNDE5LjA0NyAzODguNjkyIDQxNS45MTcgMzg1LjU3MUM0MTQuNzYyIDM4NC40MTggNDEzLjQzIDM4My40MjggNDEyLjIwMiAzODIuMzRDNDExLjI0OSAzODEuNDk1IDQxMC4yNDYgMzgxLjc5NyA0MDkuMzA3IDM4Mi4yNTFDNDAzLjg1IDM4NC44OTQgMzk4LjUxMiAzODQuMjM5IDM5My41MjYgMzgxLjMzN0MzOTEuNzM2IDM4MC4yOTUgMzkwLjMxMiAzNzguNDUzIDM4OS4xNTQgMzc2LjcxNUMzODcuNDAyIDM3NC4wODQgMzg2LjE3OSAzNzEuMTM3IDM4NC40NTIgMzY4LjQ4OUMzODIuNzcyIDM2NS45MTQgMzgxLjAzNiAzNjMuMjY2IDM3OC44MDUgMzYxLjE0NEMzNzMuNjE0IDM1Ni4yMTEgMzY3LjIyIDM1Mi45OTggMzYwLjE3MSAzNTEuMjAyQzM1Ny4wMzIgMzUwLjQwMiAzNTMuNzI4IDM1MS4wNzcgMzUwLjU1OCAzNTEuOTAxQzM0Ny42NTQgMzUyLjY1NiAzNDQuNzM5IDM1Mi41NDEgMzQxLjc0IDM1Mi4xOUMzMzYuMDk3IDM1MS41MyAzMzEuMjI5IDM0OS4xMzcgMzI2LjU3NCAzNDYuMzYxQzMyMy4wOSAzNDQuMjg0IDMyMS4xNDcgMzQxLjE5NyAzMjAuNjU0IDMzNy4wNzhDMzIwLjI3MSAzMzMuODcgMzIxLjAwNSAzMzEuMTQzIDMyMi45NSAzMjguODAzQzMyNC44NzQgMzI2LjQ4OSAzMjcuMTIyIDMyNC4zNjkgMzMwLjMzIDMyMy41MDRDMzMzLjA2MyAzMjIuNzY3IDMzNS43NCAzMjEuODQyIDMzOC40NTIgMzIxLjAyOUMzMzguOTMgMzIwLjg4NiAzMzkuNDU2IDMyMC44NDIgMzM5Ljk2IDMyMC44NEMzNDMuNjc4IDMyMC44MjUgMzQ3LjQxIDMyMC42MjMgMzUxLjEwOSAzMjAuODc4QzM1Ny4zMjkgMzIxLjMwNyAzNjMuNTgxIDMyMS43MzYgMzY5LjE5NiAzMjQuODQyQzM3MC45MjkgMzI1LjggMzcyLjg5IDMyNi4zODEgMzc0LjcwNCAzMjcuMjE3QzM3NS4xMDggMzI3LjQwMyAzNzUuMzM0IDMyNy45MzcgMzc1LjY0MyAzMjguMzFDMzc1LjE0NiAzMjguMzE4IDM3NC41OSAzMjguNDY4IDM3NC4xNiAzMjguMzA5QzM3MS4zNjMgMzI3LjI4MyAzNjguNDc1IDMyNi40MDEgMzY1Ljg0NSAzMjUuMDY2QzM2Mi42MDYgMzIzLjQyMiAzNTkuMTA1IDMyMy4yNDIgMzU1LjY0NiAzMjIuOTAxQzM1Mi4xNzkgMzIyLjU2IDM0OC42NjggMzIyLjYzIDM0NS4xNzcgMzIyLjUxNEMzMzkuNzUgMzIyLjMzMiAzMzQuNjQzIDMyMy40ODEgMzI5LjY5OSAzMjUuNTkxQzMyNi4yMTEgMzI3LjA4IDMyMy44ODMgMzI5LjQ0NyAzMjIuODA2IDMzMi44OEMzMjEuNTk2IDMzNi43MzggMzIzLjEyOSAzNDEuNzE1IDMyNi44NzcgMzQ0LjQ0OUMzMzAuNjQ4IDM0Ny4xOTkgMzM1LjAxNiAzNDguNjQ1IDMzOS4zNTMgMzQ5Ljk2MUMzNDMuMTUgMzUxLjExMyAzNDcuMjk4IDM1MS4yODcgMzUxLjI3NiAzNTAuMTA3QzM1Ni4xNyAzNDguNjU2IDM2MC43ODIgMzQ5LjYwOCAzNjUuNDA2IDM1MS4yODVDMzcwLjMxNyAzNTMuMDY4IDM3NC45MjYgMzU1LjM2MyAzNzguNzY1IDM1OC43NDZDMzgwLjk0NiAzNjAuNjY4IDM4Mi43ODkgMzYzLjAyNyAzODQuNDA0IDM2NS40MjFDMzg3LjA0NSAzNjkuMzM1IDM4OS4zNzYgMzczLjQzNyAzOTEuODM3IDM3Ny40NjJDMzkzLjcxIDM4MC41MjQgMzk2Ljk3OSAzODEuMjQ4IDQwMC4yMjUgMzgyLjEyMUM0MDMuMTQyIDM4Mi45MDUgNDA1LjczNCAzODEuOTMxIDQwOC4zMzMgMzgxLjAzOEM0MDkuMTA5IDM4MC43NzEgNDA5LjkzOCAzODAuMDc1IDQxMC4yODcgMzc5LjM3MUM0MTEuMDUgMzc3LjgzIDQxMS44NjEgMzc2LjE5MSA0MTIuMDQgMzc0LjUzMkM0MTIuNDA5IDM3MS4xMDIgNDEyLjE0NSAzNjcuNjQgNDExLjIzIDM2NC4yOEM0MTAuNTU3IDM2MS44MTIgNDA5Ljk5NiAzNTkuMjU1IDQwOC44NjIgMzU2Ljk3M0M0MDYuNDY0IDM1Mi4xNDIgNDAzLjcwNiAzNDcuNTExIDM5OS4wMzQgMzQ0LjE4MkMzOTcuMzA1IDM0Mi45NDkgMzk1LjkxNyAzNDEuMjg0IDM5NC4zNzMgMzM5LjgxN0MzOTEuODcgMzM3LjQzNiAzODkuMzQyIDMzNS4wNzggMzg2Ljg4OCAzMzIuNjUzQzM4Ni41MTYgMzMyLjI4NSAzODYuNDgyIDMzMS42MDcgMzg2LjI5MiAzMzEuMDcyQzM4Ni44MjEgMzMxLjI1NCAzODcuMzczIDMzMS4zOTMgMzg3Ljg2NyAzMzEuNjM3QzM4OC4xNjcgMzMxLjc4NSAzODguMzc0IDMzMi4wOTkgMzg4LjYyOCAzMzIuMzM0QzM5Mi41NDIgMzM1Ljk0NSAzOTYuMjE1IDMzOS44MzggNDAwLjQzNyAzNDMuMDg4QzQwNS4xNjMgMzQ2LjcyNiA0MDcuOTE5IDM1MS41ODIgNDEwLjU4MiAzNTYuNDU5QzQxMi4wNCAzNTkuMTMyIDQxMi40OTggMzYyLjM0NCA0MTMuMTI0IDM2NS4zNjZDNDEzLjYwNiAzNjcuNjk1IDQxMy44OCAzNzAuMTE0IDQxMy44MDkgMzcyLjQ4MUM0MTMuNzQ5IDM3NC40NiA0MTMuMTA4IDM3Ni40MzMgNDEyLjYyMSAzNzguMzg1QzQxMi4zNjIgMzc5LjQyMiA0MTIuMzg2IDM4MC4yMTkgNDEzLjI3IDM4MS4wNDNDNDE3LjE4NiAzODQuNjg0IDQyMS4wNjQgMzg4LjM2MiA0MjQuODkyIDM5Mi4wODdDNDI2LjE2NCAzOTMuMzI1IDQyNy4xODYgMzk0Ljc5MyA0MjguNDI1IDM5Ni4wNjdDNDMxLjM0MSAzOTkuMDYyIDQzMy4xMTQgNDAyLjY3NiA0MzQuNzcyIDQwNi4zNjNDNDM0Ljg3OSA0MDYuNjAxIDQzNC45NTUgNDA2Ljg3OSA0MzUuMTM3IDQwNy4wNTRDNDM1LjM4OSA0MDcuMjk3IDQzNS43MjYgNDA3LjQ2MSA0MzYuMDI2IDQwNy42NTlDNDM2LjA4IDQwNy4zNDMgNDM2LjIzMiA0MDcuMDA5IDQzNi4xNzIgNDA2LjcxNEM0MzQuODY0IDQwMC4zMjkgNDMzLjYxOCAzOTMuOTI5IDQzMS4yNDIgMzg3Ljc5MkM0MzAuNDUgMzg1Ljc0NCA0MjkuODI5IDM4My42MzcgNDI5LjA3NSAzODEuNTc2QzQyOC43NDMgMzgwLjY2NyA0MjcuOTgyIDM4MC4wMzUgNDI2Ljk4MiAzODAuNDQxQzQyNS4wNDUgMzgxLjIyOSA0MjMuMzU0IDM4MC40ODcgNDIxLjY1NSAzNzkuODdDNDE4LjI2OSAzNzguNjM3IDQxNi4xOTkgMzc2LjE5OSA0MTUuMTM1IDM3Mi45NzdDNDE0Ljk3NiAzNzIuNDk0IDQxNS4yNyAzNzEuODc3IDQxNS4zNTQgMzcxLjMyMkM0MTUuNjkgMzcxLjcxOSA0MTYuMTI2IDM3Mi4wNzIgNDE2LjM0NCAzNzIuNTJDNDE4LjI2MiAzNzYuNDY2IDQyMS4zOSAzNzkuNDA4IDQyNi40OTMgMzc5LjA3NkM0MjcuNDUzIDM3OS4wMTMgNDI3LjkwNSAzNzguNzU0IDQyNy41NyAzNzcuNzY2QzQyNS43NjEgMzcyLjQyOCA0MjQuMDUgMzY3LjA1OCA0MjEuMzA5IDM2Mi4wNTZDNDE5LjA1OSAzNTcuOTQ5IDQxNi44MjYgMzUzLjgzNSA0MTQuNTk0IDM0OS43MjJDNDE0LjQ0NCAzNDkuNDQ3IDQxNC4yMTcgMzQ5LjEyMiA0MTQuMjYyIDM0OC44NThDNDE0LjM2NyAzNDguMjU1IDQxNC42MTkgMzQ3LjY3NiA0MTQuODEyIDM0Ny4wODZDNDE1LjIxIDM0Ny41NDYgNDE1LjcxNyAzNDcuOTUzIDQxNS45ODggMzQ4LjQ3MkM0MTguMzIxIDM1Mi45MzcgNDIwLjM4MiAzNTcuNTQ2IDQyMi45ODEgMzYxLjg2M0M0MjUuMzAyIDM2NS43MiA0MjYuNTQzIDM2OS44OTggNDI4LjAzNCAzNzQuMDE5QzQyOC4zOSAzNzUuMDA1IDQyOC41OTQgMzc2LjA0MSA0MjguOTQzIDM3Ny4wM0M0MjkuMDQgMzc3LjMwMyA0MjkuNDEgMzc3LjQ5MSA0MjkuNjU2IDM3Ny43MTdDNDI5Ljg1NSAzNzcuNTIyIDQzMC4wOTUgMzc3LjM1MSA0MzAuMjQ5IDM3Ny4xMjZDNDMyLjYxMiAzNzMuNjczIDQzMi45OTYgMzY5Ljk2OSA0MzIuMzU5IDM2NS45MTZDNDMxLjU3MiAzNjAuOTEyIDQyOS40ODIgMzU2LjQyNyA0MjcuMzgyIDM1MS44NzFDNDI1LjQwNSAzNDcuNTgzIDQyMy4xMDYgMzQzLjQ5MSA0MjAuMjIxIDMzOS43MjRDNDE4LjQyNyAzMzcuMzgzIDQxNi43MDYgMzM0LjgxMiA0MTMuNTY4IDMzMy44NTNDNDA5LjY5IDMzMi42NjggNDA2LjAwMiAzMzMuMDY5IDQwMi43OTIgMzM1LjYwNUM0MDAuMjA1IDMzNy42NDggNDAwLjgxIDMzOS4wNjUgNDAyLjYzMyAzNDEuMjQ5QzQwMy4yNTIgMzQxLjk5MSA0MDQuMDU2IDM0Mi41OTIgNDA0LjczNSAzNDMuMjkzQzQwNC45NDIgMzQzLjUwNiA0MDUuMDEyIDM0My44MzggNDA1LjE0NSAzNDQuMTE1QzQwNC43ODQgMzQ0LjE4MiA0MDQuMjc4IDM0NC40MjggNDA0LjA4MyAzNDQuMjg3QzQwMi4wOTEgMzQyLjg0MiAzOTkuNDkgMzQxLjY4MyAzOTkuMDk3IDMzOS4xMTNDMzk4LjY5MiAzMzYuNDY3IDQwMC41MjYgMzM0LjQ3MSA0MDIuODM4IDMzMy4zNDVDNDA1LjkzNCAzMzEuODM3IDQwOS4yMTIgMzMxLjIxOSA0MTIuODQyIDMzMi4wNDJDNDE3LjI3NiAzMzMuMDQ1IDQxOS42ODYgMzM2LjIyOSA0MjEuOTQxIDMzOS4zMTFDNDI2LjY0OCAzNDUuNzQzIDQyOS43ODcgMzUyLjk1OSA0MzIuNzY2IDM2MC4yNzNDNDM0LjM5MiAzNjQuMjY2IDQzNC42NDggMzY4LjIyIDQzNC4yOTEgMzcyLjIzMkM0MzQuMTEzIDM3NC4yMzcgNDMyLjk0NyAzNzYuMzcgNDMxLjYyNyAzNzguMDA5QzQzMC41OCAzNzkuMzA5IDQzMC40NTUgMzgwLjI2NiA0MzAuOTI0IDM4MS42NTVDNDMyLjQ4MSAzODYuMjYzIDQzNC4wMDMgMzkwLjg4MyA0MzUuNDUgMzk1LjUyM0M0MzUuNzY2IDM5Ni41NDIgNDM1LjY3NCAzOTcuNjcxIDQzNS44NTggMzk4LjczN0M0MzUuOTExIDM5OS4wNDcgNDM2LjI2NiAzOTkuMzExIDQzNi40ODIgMzk5LjU5NkM0MzYuNjIgMzk5LjMwMSA0MzYuODcgMzk5LjAwOCA0MzYuODc2IDM5OC43MTFDNDM2LjkxNCAzOTYuOTE3IDQzNi44MDMgMzk1LjExNiA0MzYuOTE4IDM5My4zMjhDNDM3LjA1IDM5MS4yODMgNDM3LjMxMiAzODkuMjQgNDM3LjY0OSAzODcuMjE3QzQzNy43MTYgMzg2LjgxIDQzOC4zNzMgMzg2LjQ5MiA0MzguNzU4IDM4Ni4xMzJDNDM5LjA4MSAzODYuNjYzIDQzOS43IDM4Ny4yMDggNDM5LjY3MyAzODcuNzIxQzQzOS41ODMgMzg5LjM3NCA0MzkuMTk4IDM5MS4wMSA0MzkuMDM0IDM5Mi42NjNDNDM4Ljg1IDM5NC41MTggNDM4LjcyOCAzOTYuMzgyIDQzOC42NzkgMzk4LjI0NEM0MzguNjIgNDAwLjUwNiA0MzguNzA3IDQwMi43NzEgNDM4LjY1IDQwNS4wMzNDNDM4LjYxMiA0MDYuNTAzIDQzOC40MjQgNDA3Ljk2OSA0MzguMzE0IDQwOS40MzhDNDM4LjI3NyA0MDkuOTM0IDQzOC4yNTMgNDEwLjQzMiA0MzguMjU4IDQxMC45MjlDNDM4LjI2MSA0MTEuMzAzIDQzOC4zMTggNDExLjY3NyA0MzguMzUyIDQxMi4wNTFDNDM4LjY5MiA0MTEuNzE0IDQzOS4yMzMgNDExLjQyNyA0MzkuMzM3IDQxMS4wMzRDNDM5LjcxOSA0MDkuNiA0MzkuODEzIDQwOC4wODggNDQwLjI3NiA0MDYuNjg0QzQ0MS4zNTQgNDAzLjQxNCA0NDIuNTg2IDQwMC4xOTEgNDQzLjc1MSAzOTYuOTQ3QzQ0NC4xNzUgMzk1Ljc2OCA0NDQuNzMyIDM5NC42MDkgNDQ0Ljk2MyAzOTMuMzk1QzQ0NS4xOTYgMzkyLjE3MiA0NDUuMTc3IDM5MS4wMTkgNDQzLjk5NiAzODkuOTI2QzQ0Mi4yOTggMzg4LjM1MyA0NDAuODUxIDM4Ni41MDYgNDM5LjQ4NSAzODQuNjVDNDM4Ljk1MSAzODMuOTI2IDQzOC44MjIgMzgyLjg3OSA0MzguNjgxIDM4MS45NTRDNDM3LjU4MyAzNzQuNzI3IDQzNy45OTggMzY3LjQ1IDQzNy45OTEgMzYwLjE4OUM0MzcuOTkgMzU4LjgyNCA0MzguNDg2IDM1Ny40NjQgNDM4LjYzOCAzNTYuMDlDNDM4LjY5OSAzNTUuNTMgNDM4LjY2NiAzNTQuNzY2IDQzOC4zMjEgMzU0LjM5MUM0MzUuMjk4IDM1MS4xMTYgNDMzLjY2NiAzNDcuMTk1IDQzMi4xOTggMzQzLjE1NUM0MzAuNzU2IDMzOS4xODYgNDI4LjkwNCAzMzUuMzQgNDI3LjY1IDMzMS4zMjNDNDI2LjIzOSAzMjYuOCA0MjUuMjM4IDMyMi4xNTcgNDI0LjE2NyAzMTcuNTQ0QzQyMy4zNjQgMzE0LjA4NSA0MjIuNzI2IDMxMC41OTEgNDIyLjAzNCAzMDcuMTA4QzQyMS45NTkgMzA2LjcyOCA0MjIuMDM5IDMwNi4zMjQgNDIyLjAyMiAzMDUuOTMxQzQyMS43OSAzMDAuNjk1IDQyMS43MDIgMjk1LjQ0OCA0MjEuMjc5IDI5MC4yMjZDNDIwLjcyNiAyODMuMzkxIDQyMS41NTEgMjc2Ljc0MSA0MjMuNzQ2IDI3MC4yNTFDNDI1LjA0OCAyNjYuNDAxIDQyNi4yOTQgMjYyLjQ4NiA0MjguMTMxIDI1OC44NTlDNDI5LjkwOSAyNTUuMzUgNDMyLjM4NCAyNTIuMDQyIDQzNi41NTMgMjUwLjczOUM0MzguMjE3IDI1MC4yMTkgNDQwLjE4OCAyNTAuMzcxIDQ0MS45OTIgMjUwLjUyQzQ0NS4xOTcgMjUwLjc4MyA0NDguMjExIDI1MS42NDcgNDUwLjI1MSAyNTQuMjczQzQ1Mi4wNyAyNTYuNjE2IDQ1My40MDIgMjU5LjExIDQ1My45NzggMjYyLjA3OUM0NTQuNTA3IDI2NC44MDggNDU1Ljk4OSAyNjcuMzYxIDQ1Ni42NyAyNzAuMDc4QzQ1Ny41ODYgMjczLjczNSA0NTguMTU0IDI3Ny40NzIgNDU4Ljg0MiAyODEuMThDNDU5LjU3IDI4NS4xMDQgNDYwLjE3NCAyODkuMDUyIDQ2MC45OTQgMjkyLjk1OUM0NjEuOTU3IDI5Ny41NTIgNDYzLjEyMiAzMDIuMTA3IDQ2NC4xMjkgMzA2LjY5M0M0NjQuMjkgMzA3LjQzIDQ2NC4zOTQgMzA3LjcwNCA0NjQuOTk5IDMwNy4wNTlDNDY2LjMzNyAzMDUuNjM0IDQ2OC4wMTkgMzA1LjAzNCA0NjkuOTY0IDMwNC41OThDNDcxLjY3NSAzMDQuMjE1IDQ3My4xNTggMzAyLjk3MyA0NzQuODYgMzAyLjQ3M0M0NzcuMTgyIDMwMS43OTIgNDc5LjYwOSAzMDEuNDI2IDQ4Mi4wMDMgMzAwLjk4NkM0ODMuMDU4IDMwMC43OTIgNDg0LjE0MyAzMDAuNzM0IDQ4NS4yMTggMzAwLjYzOEM0ODkuMTE3IDMwMC4yODggNDkyLjQ3NiAzMDEuNTgzIDQ5NS41NTQgMzAzLjcyNEM0OTguMTggMzA1LjU1MSA1MDAuOTI1IDMwNy4yNDMgNTAzLjQxIDMwOS4yMjlDNTA3LjQxMyAzMTIuNDI5IDUwOS40OSAzMTYuODYgNTExLjY3MyAzMjEuMjY2QzUxMy4wNTkgMzI0LjA2NiA1MTMuOTIzIDMyNi45MzUgNTEzLjk5NyAzMjkuOTE3QzUxNC4wNjUgMzMyLjY4OCA1MTIuMjk2IDMzNS4wMzYgNTEwLjk2OCAzMzcuNDQyQzUwOS45NjIgMzM5LjI2MyA1MDguNzU5IDM0MC44MDQgNTA2LjcxOCAzNDEuNzIxQzUwMy44NTkgMzQzLjAwNiA1MDAuMzU2IDM0Mi40NjEgNDk4LjA4MyAzNDAuNDgyQzQ5NS40OTggMzM4LjIzMyA0OTMuNTg4IDMzNS41MiA0OTEuOTgyIDMzMi42MUM0OTEuMDc3IDMzMC45NjkgNDkwLjE0MSAzMjkuNDMzIDQ4OC4zNjYgMzI4LjQ5MkM0ODguMDk4IDMyOC4zNSA0ODguMDM2IDMyNy44NTcgNDg3Ljg3OCAzMjcuNTI2QzQ4OC4yMjIgMzI3LjQyNiA0ODguNTgyIDMyNy4yMDQgNDg4LjkwNCAzMjcuMjQ3QzQ5MC45NjUgMzI3LjUyIDQ5MS44NDIgMzI5LjE1MSA0OTIuODEzIDMzMC41NjhDNDk0LjMxNSAzMzIuNzYxIDQ5NS40MzQgMzM1LjIyNCA0OTcuMTM2IDMzNy4yNTZDNTAwLjA4NiAzNDAuNzc5IDUwMy40OTUgMzQyLjIxOCA1MDcuNTI1IDMzOS4xN0M1MDkuMTI1IDMzNy45NjEgNTA5LjkzNCAzMzUuNzA0IDUxMC44NjYgMzMzLjgyQzUxMy40MyAzMjguNjQgNTExLjM2OCAzMjQuMDM0IDUwOC42NjEgMzE5LjU1OUM1MDcuNDgxIDMxNy42MDggNTA2LjM5MiAzMTUuNTg0IDUwNS4wMDUgMzEzLjc3MUM1MDIuMzk0IDMxMC4zNiA0OTguODgxIDMwNy45MzUgNDk1LjE4MyAzMDUuNjAyQzQ5MS4xNTQgMzAzLjA2IDQ4Ni45MDYgMzAyLjMxNyA0ODIuMjg2IDMwMi42NjZDNDc4LjU1NCAzMDIuOTQ4IDQ3NC45MjMgMzAzLjYxMiA0NzEuNzQgMzA1LjY3N0M0NzEuMzM4IDMwNS45MzcgNDcwLjg4MiAzMDYuMTg1IDQ3MC40MTUgMzA2LjI4MUM0NjUuNjY0IDMwNy4yNjIgNDYzLjIyNSAzMTAuOTcxIDQ2MC4yNzcgMzE0LjA1NUM0NTguNjY2IDMxNS43MzkgNDU3LjA2NiAzMTcuNDU5IDQ1NS43MDQgMzE5LjMyNEM0NTMuNDYyIDMyMi4zOTQgNDUxLjAyIDMyNS40MTggNDQ5LjM3NyAzMjguNzc3QzQ0Ni40MDggMzM0Ljg0NiA0NDMuNjY4IDM0MS4wNjYgNDQyLjI1NCAzNDcuNjY3QzQ0MS40MDEgMzUxLjY0NyA0NDEuMDU0IDM1NS43MjQgNDQwLjQyMiAzNTkuNzVDNDQwLjE1OSAzNjEuNDIxIDQzOS43MTMgMzYzLjA2NSA0MzkuNDIgMzY0LjczM0M0MzkuMzA2IDM2NS4zODUgNDM5LjMzOCAzNjYuMDcxIDQzOS4zODMgMzY2LjczN0M0MzkuNDY2IDM2Ny45NDYgNDM5LjY4IDM2OS4xNSA0MzkuNzExIDM3MC4zNTlDNDM5Ljc2NyAzNzIuNTA4IDQzOS40NTIgMzc0LjcwMSA0MzkuNzk1IDM3Ni44MDFDNDQwLjI0NiAzNzkuNTUyIDQzOS45MDIgMzgyLjU0IDQ0MS42MDQgMzg0Ljk4QzQ0Mi41MzEgMzg2LjMwOSA0NDMuOTEgMzg3LjM2OCA0NDUuMTU5IDM4OC40NzNDNDQ1Ljg1NSAzODkuMDg5IDQ0Ni4yMyAzODkuMTQ0IDQ0Ni41MTIgMzg3LjkzNkM0NDcuMzY4IDM4NC4yNjMgNDQ4LjUgMzgwLjY0OSA0NDkuNDk5IDM3Ny4wMDZDNDUxLjIwOSAzNzAuNzc4IDQ1Mi44NDYgMzY0LjUzMSA0NTQuNjM0IDM1OC4zMjNDNDU1LjEwNCAzNTYuNjg5IDQ1Ni4wMDIgMzU1LjE2NCA0NTYuNzI0IDM1My41OTdDNDYwLjU3MSAzNDUuMjQgNDY0LjM3NSAzMzYuODYzIDQ2OC4zMDEgMzI4LjUzOEM0NjkuOTA5IDMyNS4xMjcgNDcxLjc5IDMyMS44MzQgNDczLjUyNyAzMTguNDc4QzQ3My45ODQgMzE3LjU5NSA0NzQuMjUgMzE2LjYwMSA0NzQuODI4IDMxNS44MDdDNDc1LjEwNSAzMTUuNDI3IDQ3NS45MDggMzE1LjM5NSA0NzYuNDczIDMxNS4yMDZDNDc2LjUxIDMxNS42NjggNDc2LjczOCAzMTYuMjIzIDQ3Ni41NTEgMzE2LjU3OUM0NzQuOTM1IDMxOS42NDkgNDczLjA5IDMyMi42MTcgNDcxLjYwOSAzMjUuNzQzQzQ2OC45IDMzMS40NiA0NjYuNDI3IDMzNy4yNzggNDYzLjc4OCAzNDMuMDI1QzQ2Mi41NDQgMzQ1LjczNCA0NjEuMTkxIDM0OC40MDIgNDU5Ljc5OCAzNTEuMDQ2QzQ1Ny4xNTEgMzU2LjA3MiA0NTUuMjczIDM2MS4zMTYgNDU0LjE5OSAzNjYuODU5QzQ1My42MzQgMzY5Ljc3OSA0NTIuNjA2IDM3Mi42MTggNDUxLjgxIDM3NS40OTlDNDUxLjcxOSAzNzUuODI3IDQ1MS43NzcgMzc2LjE5MSA0NTEuNjc3IDM3Ni42MjNaTTQyMy43OTQgMzAzLjE2QzQyNC41MDIgMzA4LjIwOSA0MjQuODg2IDMxMy4zMjMgNDI2LjAwNCAzMTguMjg5QzQyNy4yODkgMzIzLjk5MyA0MjguOTM4IDMyOS42NTkgNDMwLjk1NCAzMzUuMTdDNDMzLjA4IDM0MC45ODMgNDM1LjgyIDM0Ni41OTQgNDM4LjMwOCAzNTIuMjg3QzQzOC40MzUgMzUyLjU3OCA0MzguNzE1IDM1Mi44MDkgNDM4LjkyMyAzNTMuMDY4QzQzOS4wNzQgMzUyLjczNCA0MzkuMjgyIDM1Mi40MTMgNDM5LjM2NCAzNTIuMDY2QzQ0MC4xODcgMzQ4LjU3NCA0NDAuNzUzIDM0NS4wMDggNDQxLjg2IDM0MS42MDFDNDQzLjE0NiAzMzcuNjQ4IDQ0NC45NjggMzMzLjg1NiA0NDYuNDM4IDMyOS45NTNDNDQ4LjQ5NiAzMjQuNDkxIDQ1Mi4wNDEgMzE5LjkwNiA0NTUuODQ1IDMxNS41MDJDNDU3LjY1OCAzMTMuNDA0IDQ1OS44NDYgMzExLjU5NSA0NjEuOTA2IDMwOS42OTZDNDYyLjY5NiAzMDguOTY4IDQ2My4wNzggMzA4LjI4NSA0NjIuNDg0IDMwNy4yNTdDNDYyLjIwMiAzMDYuNzY5IDQ2Mi4xNjcgMzA2LjE1IDQ2Mi4wMzQgMzA1LjU4N0M0NjEuMDg3IDMwMS41ODYgNDYwLjA5NCAyOTcuNTkzIDQ1OS4yMTggMjkzLjU3OEM0NTguNjUgMjkwLjk3OCA0NTguMjI5IDI4OC4zNDkgNDU3Ljc5MiAyODUuNzI2QzQ1Ny4zOTcgMjgzLjM1IDQ1Ny4yNDYgMjgwLjkyMyA0NTYuNjc4IDI3OC41ODdDNDU1LjI1MSAyNzIuNzE4IDQ1My43IDI2Ni44NzYgNDUyLjA5OCAyNjEuMDQ4QzQ1MS4yNyAyNTguMDMzIDQ0OS43NzggMjU1LjIxMiA0NDYuOTI2IDI1My41OTJDNDQ1LjI5NyAyNTIuNjY4IDQ0My4xMjkgMjUyLjU4NSA0NDEuMTkxIDI1Mi4xNzdDNDQwLjMxMyAyNTEuOTkyIDQzOS4zMTQgMjUxLjY1MyA0MzguNTI0IDI1MS44NzZDNDMzLjk2NCAyNTMuMTYyIDQzMS4wNyAyNTYuMzc4IDQyOS4xOCAyNjAuMjUzQzQyNy41MzUgMjYzLjYyNiA0MjYuNDI4IDI2Ny4yNTEgNDI1LjI3NCAyNzAuODJDNDIzLjkxNSAyNzUuMDIyIDQyMi45NyAyNzkuMzAzIDQyMy4wNjYgMjgzLjc1NkM0MjMuMTYgMjg4LjEyOSA0MjMuMDE1IDI5Mi41MDUgNDIzLjExOCAyOTYuODc3QzQyMy4xNjYgMjk4Ljg2MyA0MjMuNTU4IDMwMC44NDIgNDIzLjc5NCAzMDMuMTZaTTQ1My4wMDQgNDI5LjU1NEM0NDcuOTM0IDQyOS41NTQgNDQyLjg2MyA0MjkuNTcyIDQzNy43OTMgNDI5LjUyN0M0MzcuMjU2IDQyOS41MjIgNDM2LjcyMiA0MjkuMTQyIDQzNi4xODYgNDI4LjkzNkM0MzYuNzQyIDQyOC42OTMgNDM3LjI5NiA0MjguMjQ2IDQzNy44NTUgNDI4LjI0QzQ0Mi42MyA0MjguMTg0IDQ0Ny40MDYgNDI4LjIwNiA0NTIuMTgyIDQyOC4yMDlDNDUyLjU4OCA0MjguMjA5IDQ1My4xNTkgNDI4LjA3NCA0NTMuMzc1IDQyOC4yNzRDNDU1IDQyOS43NzUgNDU0Ljc1NCA0MjcuNzMgNDU0Ljg4MSA0MjcuNDA4QzQ1NS4zMDMgNDI2LjMzMyA0NTUuMzIxIDQyNS4xMjIgNDU1LjY4NSA0MjQuMDJDNDU2LjE4MSA0MjIuNTIgNDU1LjgzMSA0MjIuMDc4IDQ1NC4wOTQgNDIyLjEwN0M0NDguMDAzIDQyMi4yMTMgNDQxLjkwOSA0MjIuMTEzIDQzNS44MTYgNDIyLjE2NEM0MzIuNzk4IDQyMi4xODkgNDI5Ljc4MiA0MjIuMzg2IDQyNi43NjUgNDIyLjQ3OUM0MjUuNTI4IDQyMi41MTcgNDI0LjI4MyA0MjIuNDIzIDQyMy4wNTQgNDIyLjUyM0M0MjIuNjkgNDIyLjU1MyA0MjIuMDM5IDQyMy4wODggNDIyLjA3NCA0MjMuMzExQzQyMi40NjYgNDI1Ljc3MSA0MjIuOTUzIDQyOC4yMTkgNDIzLjQ0NCA0MzAuNjYzQzQyNC4yNTggNDM0LjcxMiA0MjUuMDA5IDQzOC43NzYgNDI1Ljk2OSA0NDIuNzkzQzQyNi4yNjYgNDQ0LjAzOSA0MjUuODc0IDQ0Ni4wMjkgNDI4LjIxNyA0NDYuMDM4QzQzNS40MSA0NDYuMDY0IDQ0Mi42MDIgNDQ2LjA2OCA0NDkuNzk1IDQ0Ni4wMDVDNDUwLjMzNyA0NDYuMDAxIDQ1MS4yMDYgNDQ1LjQ5NiA0NTEuMzUgNDQ1LjA1NEM0NTEuODYgNDQzLjUwMyA0NTIuMTUgNDQxLjg4MiA0NTIuNDY2IDQ0MC4yNzdDNDUzLjEyMyA0MzYuOTQ0IDQ1My43NDcgNDMzLjYwNCA0NTQuMzc0IDQzMC4yNjVDNDU0LjQzNiA0MjkuOTMgNDU0LjQyIDQyOS41OCA0NTQuNDQxIDQyOS4yMzdDNDU0LjA4IDQyOS4zNDMgNDUzLjcxOSA0MjkuNDQ4IDQ1My4wMDQgNDI5LjU1NFpNNDM2LjAxIDQyMC44MDJDNDQyLjg0OSA0MjAuODAyIDQ0OS42OSA0MjAuNzYxIDQ1Ni41MjggNDIwLjgzNkM0NTcuOTMgNDIwLjg1MiA0NTguMzA5IDQyMC4yMDEgNDU4LjQ5IDQxOS4xNDlDNDU4LjYxOCA0MTguNDEyIDQ1OC41ODQgNDE3LjYxNiA0NTguODc1IDQxNi45NDZDNDU5LjU1NyA0MTUuMzczIDQ1OC41OTYgNDE1LjM4IDQ1Ny40NDggNDE1LjQxMkM0NTMuMDE2IDQxNS41MzUgNDQ4LjU4NCA0MTUuNjg1IDQ0NC4xNTEgNDE1LjczMkM0NDIuMzc0IDQxNS43NTEgNDQwLjU5NCA0MTUuNDQgNDM4LjgxNCA0MTUuNDQxQzQzNi45NzcgNDE1LjQ0MyA0MzUuMTM0IDQxNS43OCA0MzMuMzAyIDQxNS43MjdDNDI4LjAzMSA0MTUuNTc3IDQyMi43NjMgNDE1LjMzNSA0MTcuNDk4IDQxNS4wNTlDNDE2LjE1OCA0MTQuOTg5IDQxNiA0MTUuNDgzIDQxNi4zNTQgNDE2LjUxQzQxNi43MyA0MTcuNTk3IDQxNy4xNyA0MTguNjc4IDQxNy4zOTIgNDE5Ljc5NUM0MTcuNTk3IDQyMC44MyA0MTguMTU5IDQyMS4yMDQgNDE5LjE3NCA0MjEuMTM3QzQyMC43NzcgNDIxLjAzMSA0MjIuMzc4IDQyMC44MzcgNDIzLjk4MSA0MjAuODE4QzQyNy44NzIgNDIwLjc3IDQzMS43NjQgNDIwLjgwMiA0MzYuMDEgNDIwLjgwMlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDYxLjk0MiAzODQuMzY1QzQ2My45MTkgMzgyLjI3NiA0NjYuMDUgMzgwLjQyOSA0NjcuNjQyIDM3OC4yMzFDNDcwLjM2OCAzNzQuNDY3IDQ3MS41NjggMzcwLjAyMSA0NzIuOTg2IDM2NS43MUM0NzMuOTg2IDM2Mi42NzEgNDc0Ljg5MiAzNTkuNTk2IDQ3NS42NDcgMzU2LjQ5NUM0NzYuNjM3IDM1Mi40MzUgNDc3LjI2NSAzNDguMjkgNDc4LjM3MSAzNDQuMjYxQzQ3OS4yOTIgMzQwLjkwMyA0ODAuNjM3IDMzNy42NDYgNDgxLjg3OSAzMzQuMzc0QzQ4Mi4zNTkgMzMzLjExMSA0ODMgMzMxLjg4NSA0ODMuNzMxIDMzMC43MzdDNDgzLjkzOCAzMzAuNDEzIDQ4NC43MjYgMzMwLjQyMyA0ODUuMjQ2IDMzMC4yOEM0ODUuMTgyIDMzMC42NjQgNDg1LjIxMyAzMzEuMDkzIDQ4NS4wMzcgMzMxLjQyM0M0ODIuNDUxIDMzNi4yNSA0ODAuOTM2IDM0MS40IDQ3OS43MTQgMzQ2LjY2NUM0NzcuOTEgMzU0LjQzMiA0NzYuMjExIDM2Mi4yMTQgNDczLjQyOSAzNjkuNzYyQzQ3MS40OTUgMzc1LjAwNyA0NjguOTI3IDM3OS42NDMgNDY0Ljg3NCAzODMuNzc5QzQ2MC43NDIgMzg3Ljk5NCA0NTUuNjA5IDM5MC4xMjUgNDUwLjIzNCAzOTIuMDkyQzQ0OS44ODMgMzkyLjIyMSA0NDkuMzcgMzkxLjk0NSA0NDguOTMxIDM5MS44NThDNDQ5LjIxMSAzOTEuNTIgNDQ5LjQxNyAzOTEuMDM2IDQ0OS43ODIgMzkwLjg2OUM0NTIuMDkyIDM4OS44MTMgNDU0LjUwNiAzODguOTQ1IDQ1Ni43NDkgMzg3Ljc3OEM0NTguNTUgMzg2Ljg0MiA0NjAuMTYgMzg1LjU3MiA0NjEuOTQyIDM4NC4zNjVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQwMi4yODYgMzY5LjIxOEMzOTguMjM5IDM2NC42OTcgMzk0LjQxNyAzNjAuMTQxIDM5MC4yOCAzNTUuODYxQzM4Ni44MDIgMzUyLjI2MyAzODIuMzI4IDM0OS44MjcgMzc3LjkxMiAzNDcuMzgxQzM3NS43NyAzNDYuMTk0IDM3My42NjQgMzQ0Ljk0NiAzNzEuNTYzIDM0My42OTNDMzcxLjE3NCAzNDMuNDYxIDM3MC44MzQgMzQzLjEwNiAzNzAuNTc0IDM0Mi43NDFDMzcwLjQwNiAzNDIuNTA1IDM3MC40MjUgMzQyLjE0NyAzNzAuMzU5IDM0MS44NDRDMzcwLjY3OCAzNDEuODI4IDM3MS4wNjQgMzQxLjY5MyAzNzEuMzA2IDM0MS44MTVDMzcyLjQ2OSAzNDIuNDA0IDM3My42MDggMzQzLjA0MSAzNzQuNzMgMzQzLjdDMzc3Ljk3IDM0NS42MDQgMzgxLjIzMiAzNDcuNDc1IDM4NC40MTQgMzQ5LjQ2MkMzODYuMjQ0IDM1MC42MDUgMzg4LjA3NCAzNTEuODA2IDM4OS42NjIgMzUzLjIyNkMzOTYuMDIyIDM1OC45MTEgNDAxLjcxMSAzNjUuMTU3IDQwNi40MiAzNzIuMTY2QzQwNy41MzggMzczLjgzIDQwOC40ODcgMzc1LjYwMyA0MDkuNDAyIDM3Ny4zNzhDNDA5LjYzOCAzNzcuODM4IDQwOS40NDkgMzc4LjQ5NyA0MDkuNDU1IDM3OS4wNjNDNDA4Ljk3IDM3OC43MTQgNDA4LjMzIDM3OC40NTcgNDA4LjAyMyAzNzcuOTk5QzQwNi4wOTkgMzc1LjEyNSA0MDQuMjQ5IDM3Mi4yMDYgNDAyLjI4NiAzNjkuMjE4WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk01MDMuNzIyIDMzMC4zNDFDNTAzLjM0MiAzMjkuODQ4IDUwMy4xMSAzMjguNzY2IDUwMi42NTUgMzMwLjE3N0M1MDIuMDk1IDMzMS45MTggNTAxLjU2IDMzMy42NjcgNTAwLjk1OCAzMzUuMzk0QzUwMC44MzggMzM1Ljc0MiA1MDAuNDcgMzM2LjAxMSA1MDAuMjE1IDMzNi4zMTZDNDk5Ljk5OCAzMzUuOTc2IDQ5OS41MjIgMzM1LjU2MiA0OTkuNjAyIDMzNS4zMDhDNTAwLjI4MiAzMzMuMTc1IDUwMS4wNzYgMzMxLjA3MyA1MDEuODA2IDMyOC45NTNDNTAxLjk0OSAzMjguNTM2IDUwMi4xNzEgMzI3Ljk4OSA1MDIuMDA5IDMyNy42NTZDNTAwLjE3IDMyMy44OTUgNDk4LjMyMiAzMjAuMTM2IDQ5Ni4zNTUgMzE2LjQzNUM0OTQuOTA5IDMxMy43MTEgNDkyLjQ2MiAzMTEuODM5IDQ4OS45NDcgMzEwLjAyOUM0ODkuMjg4IDMwOS41NTUgNDg4LjQxOCAzMDguMTgzIDQ4OC41MjUgMzA4LjA4NUM0ODkuNjgzIDMwNy4wMTUgNDkwLjI5OCAzMDguMzkgNDkwLjk4IDMwOC44NjJDNDk1LjQ3IDMxMS45NjUgNDk4LjUwMyAzMTYuMTQ1IDUwMC42NDkgMzIwLjk3MUM1MDEuMDMxIDMyMS44MzEgNTAxLjU5IDMyMi40NzkgNTAyLjkxIDMyMi41OTZDNTA0LjcyMiAzMjIuNzU2IDUwNi4yNTQgMzIzLjc5NSA1MDcuMDU4IDMyNS40NzNDNTA3LjIyIDMyNS44MTIgNTA3LjAyMiAzMjYuMzA1IDUwNi45OTEgMzI2LjcyOEM1MDYuNyAzMjYuNTU5IDUwNi4zODIgMzI2LjQyMSA1MDYuMTIxIDMyNi4yMTZDNTA1LjI4MiAzMjUuNTU4IDUwNC40OTQgMzI0LjgzNiA1MDMuNjIgMzI0LjIyNEM1MDMuMzI1IDMyNC4wMTcgNTAyLjgzMiAzMjQuMDY1IDUwMi40MyAzMjMuOTk2QzUwMi40ODkgMzI0LjQxMiA1MDIuNDU4IDMyNC44NjQgNTAyLjYyMiAzMjUuMjM3QzUwNC4wMTMgMzI4LjM4OCA1MDUuNDU4IDMzMS41MTcgNTA2LjgyOCAzMzQuNjc2QzUwNi45ODUgMzM1LjAzNyA1MDYuNzggMzM1LjU0MiA1MDYuNzQyIDMzNS45OEM1MDYuMzA2IDMzNS43NjQgNTA1LjYwNyAzMzUuNjQzIDUwNS40NzcgMzM1LjMxOEM1MDQuODM4IDMzMy43MTcgNTA0LjM1MSAzMzIuMDYxIDUwMy43MjIgMzMwLjM0MVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNMzYzLjg3MSAzNDIuMjlDMzYzLjE4NyAzNDIuNDggMzYyLjQ3IDM0Mi44NDUgMzYyLjAxNCAzNDIuNjUzQzM1OC4yMTggMzQxLjA1NSAzNTQuMjE0IDM0MC41NDIgMzUwLjEyNSAzNDAuMzQ4QzM0Ni4xMDEgMzQwLjE1NiAzNDIuMDc4IDMzOS45MjkgMzM4LjA2IDMzOS42NTZDMzM3LjQ3NCAzMzkuNjE1IDMzNi45MTUgMzM5LjIyOCAzMzYuMzQ0IDMzOS4wMDFDMzM2LjkzIDMzOC42NjcgMzM3LjUxIDMzOC4wNTUgMzM4LjEwNCAzMzguMDQyQzM0My43MTkgMzM3LjkxOCAzNDkuMzA1IDMzOC4yMTkgMzU0LjgyMyAzMzkuMzMyQzM1Ni44OTQgMzM5Ljc0OSAzNTkuMDQyIDMzOS44NzQgMzYxLjA3MiAzNDAuNDE0QzM2Mi4xMjggMzQwLjY5NSAzNjMuMDAzIDM0MS41ODkgMzYzLjg3MSAzNDIuMjlaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ1My40NDggMzg2LjM4NUM0NTMuMjQyIDM4Ni40NjkgNDUzLjEyMiAzODYuNDUyIDQ1My4wMDggMzg2LjQ3MkM0NTIuNTE0IDM4Ni41NTkgNDUyLjAyMyAzODYuNjU3IDQ1MS41MzEgMzg2Ljc1QzQ1MS43NDIgMzg2LjI1IDQ1MS44MDUgMzg1LjU3NCA0NTIuMTkgMzg1LjI3N0M0NTQuNTA1IDM4My40OTQgNDU2LjgyNSAzODEuNzA0IDQ1OS4yOCAzODAuMTA0QzQ2MS4xNjkgMzc4Ljg3MyA0NjMuMjMxIDM3Ny44NzEgNDY1LjI3NCAzNzYuODc1QzQ2NS44MDEgMzc2LjYxNyA0NjYuNTQ2IDM3Ni43NjYgNDY3LjE5IDM3Ni43MjhDNDY2LjgwMiAzNzcuMTk1IDQ2Ni41MDggMzc3LjgwMSA0NjYuMDEgMzc4LjEwNkM0NjMuNjA4IDM3OS41NzkgNDYxLjA5MyAzODAuODkxIDQ1OC43MyAzODIuNDE3QzQ1Ni45MTMgMzgzLjU5IDQ1NS4yNjIgMzg0Ljk5NyA0NTMuNDQ4IDM4Ni4zODVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ2Ny4wNzYgMzY3LjcwNEM0NjMuMjEgMzY5LjgwOSA0NTkuNDM1IDM3MS44MzUgNDU1LjY0OCAzNzMuODQxQzQ1NS4zMjQgMzc0LjAxMyA0NTQuOTE4IDM3NC4wNDMgNDU0LjU1IDM3NC4xMzlDNDU0LjU2NSAzNzMuNzIxIDQ1NC40IDM3My4xMiA0NTQuNjI4IDM3Mi45MThDNDU1LjUyNSAzNzIuMTIxIDQ1Ni40NTEgMzcxLjI2OSA0NTcuNTM1IDM3MC43NjNDNDYxLjQ1MSAzNjguOTM4IDQ2NS40MjIgMzY3LjIxNiA0NjkuNDEgMzY1LjUzOUM0NjkuODg1IDM2NS4zNCA0NzAuNjAxIDM2NS42NTkgNDcxLjIwNSAzNjUuNzM4QzQ3MC44MTYgMzY2LjEyOCA0NzAuNSAzNjYuNjgyIDQ3MC4wMjMgMzY2Ljg3MkM0NjkuMTE5IDM2Ny4yMzEgNDY4LjEyMyAzNjcuMzgyIDQ2Ny4wNzYgMzY3LjcwNFpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNMzcwLjMzMyAzNTEuMTI2QzM2OS4wODYgMzUwLjE0OCAzNjkuNzcyIDM0OS43MiAzNzAuNzcxIDM0OS44MTNDMzczLjI4NiAzNTAuMDQ5IDM3NS44NDQgMzUwLjIzOSAzNzguMjczIDM1MC44NDlDMzgwLjc4NCAzNTEuNDggMzgzLjE4MyAzNTIuNTQyIDM4NS41ODYgMzUzLjUxN0MzODYuMDk0IDM1My43MjQgMzg2LjQwNSAzNTQuMzczIDM4Ni44MDYgMzU0LjgxOUMzODYuMjQ1IDM1NC44NTIgMzg1LjYzIDM1NS4wNDQgMzg1LjEyOSAzNTQuODkzQzM4MS43NDggMzUzLjg3NSAzNzguNDE0IDM1Mi43MSAzNzUuMDE0IDM1MS43NTJDMzczLjU3NCAzNTEuMzQ1IDM3Mi4wMTUgMzUxLjMyMyAzNzAuMzMzIDM1MS4xMjZaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ3Mi4wMzQgMzUzLjkwM0M0NjcuNzE4IDM1Ni4zMjMgNDYzLjQ5NyAzNTguNjY4IDQ1OS4yNTQgMzYwLjk3N0M0NTguODkxIDM2MS4xNzUgNDU4LjM5IDM2MS4xNDMgNDU3Ljk1MyAzNjEuMjE4QzQ1OC4wMDYgMzYwLjgzNSA0NTcuOTcxIDM2MC40MTQgNDU4LjEzNiAzNjAuMDgxQzQ1OC4zMDIgMzU5Ljc0MyA0NTguNjA5IDM1OS4zOTggNDU4Ljk1IDM1OS4yMTlDNDYyLjg3OSAzNTcuMTU2IDQ2Ni44MjIgMzU1LjExNiA0NzAuNzc4IDM1My4wOTdDNDcxLjE1MyAzNTIuOTA2IDQ3MS42MyAzNTIuODUxIDQ3Mi4wNjYgMzUyLjgyNkM0NzIuMzc0IDM1Mi44MDkgNDcyLjY5MyAzNTIuOTUgNDczLjAwNyAzNTMuMDJDNDcyLjcxMiAzNTMuMjg3IDQ3Mi40MTcgMzUzLjU1MyA0NzIuMDM0IDM1My45MDNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ0Mi44MjYgMzYwLjI5OEM0NDIuNDQ2IDM1OS45MzggNDQxLjk2NSAzNTkuNjkyIDQ0MS45MDggMzU5LjM3N0M0NDEuODIyIDM1OC44OTYgNDQyLjAyOSAzNTguMzY3IDQ0Mi4xMSAzNTcuODU4QzQ0Mi40NjIgMzU4LjEwNiA0NDIuODkgMzU4LjI5NyA0NDMuMTU1IDM1OC42MTJDNDQ1LjMzOCAzNjEuMjExIDQ0Ny40OCAzNjMuODQyIDQ0OS42NTUgMzY2LjQ0NkM0NTAuNTk0IDM2Ny41NzEgNDUwLjg1MSAzNjguODUgNDUwLjY4NyAzNzAuMjI3QzQ1MC42NTkgMzcwLjQ2MiA0NTAuNDEyIDM3MC42NzQgNDUwLjI2NiAzNzAuODk2QzQ1MC4wNTkgMzcwLjc1OCA0NDkuNzAzIDM3MC42NSA0NDkuNjY1IDM3MC40NzdDNDQ4LjgxIDM2Ni42OTggNDQ1LjY5NiAzNjQuMjk0IDQ0My41MzkgMzYxLjMxQzQ0My4zMiAzNjEuMDA4IDQ0My4xMjIgMzYwLjY5MiA0NDIuODI2IDM2MC4yOThaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQyOC43NTMgMzYxLjU2QzQyOC43NTMgMzY0LjA3MiA0MjguNzgyIDM2Ni40MTYgNDI4LjcyNSAzNjguNzU5QzQyOC43MTUgMzY5LjE2OSA0MjguMzQyIDM2OS41NyA0MjguMTM2IDM2OS45NzVDNDI3Ljg3IDM2OS42MjggNDI3LjQgMzY5LjI5NiA0MjcuMzcgMzY4LjkzQzQyNy4xOSAzNjYuNzUyIDQyNy4wNjggMzY0LjU2NyA0MjcuMDIzIDM2Mi4zODNDNDI3LjAwNCAzNjEuNDgxIDQyNy4yMzkgMzYwLjU3NiA0MjcuMzMgMzU5LjY2OUM0MjcuMzc0IDM1OS4yMjkgNDI3LjIwNyAzNTguNzE1IDQyNy4zOTQgMzU4LjM1NkM0MjcuNjggMzU3LjgwNiA0MjguMTkgMzU3LjM2MyA0MjguNjA0IDM1Ni44NzVDNDI4Ljc3MSAzNTcuNDIyIDQyOS4wNzkgMzU3Ljk3MSA0MjkuMDc1IDM1OC41MThDNDI5LjA2OSAzNTkuNDc3IDQyOC44NyAzNjAuNDM0IDQyOC43NTMgMzYxLjU2WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk00NTkuODE5IDMzNC4wNDNDNDYwLjI2MiAzMzYuNCA0NjAuNjIgMzM4LjY3MSA0NjAuOTY0IDM0MC45NDVDNDYxLjAwNiAzNDEuMjE5IDQ2MS4wNzggMzQxLjU2OCA0NjAuOTQ2IDM0MS43NzFDNDYwLjcyMSAzNDIuMTE1IDQ2MC4zNDQgMzQyLjM2OCA0NjAuMDMxIDM0Mi42NTlDNDU5Ljg3MiAzNDIuMjczIDQ1OS42NSAzNDEuODk5IDQ1OS41NjQgMzQxLjQ5OUM0NTkuMDcgMzM5LjIyMiA0NTguNzE5IDMzNi45MSA0NTguMDg4IDMzNC42NjlDNDU3LjggMzMzLjY0NSA0NTYuOTc2IDMzMi43NTkgNDU2LjQwNiAzMzEuODA0QzQ1Ni4yMjQgMzMxLjQ5NyA0NTYuMDc4IDMzMS4xNzEgNDU1LjkxNiAzMzAuODU0QzQ1Ni40MzcgMzMwLjgzOCA0NTcuMjIxIDMzMC42MDkgNDU3LjQzMiAzMzAuODQ1QzQ1OC4yOTQgMzMxLjgwNiA0NTguOTggMzMyLjkwOSA0NTkuODE5IDMzNC4wNDNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ0NS42NTggMzc4LjQ3NUM0NDYuMDggMzc5LjMyNCA0NDYuNTQ4IDM4MC4wNjcgNDQ2LjcwMiAzODAuODY0QzQ0Ni44MSAzODEuNDMgNDQ2LjQ5NiAzODIuMDcxIDQ0Ni4zNyAzODIuNjc4QzQ0Ni4wMzcgMzgyLjMwNyA0NDUuNTkxIDM4MS45ODUgNDQ1LjM4NyAzODEuNTU4QzQ0My45NDUgMzc4LjUzOSA0NDIuNTMxIDM3NS41MDYgNDQxLjE3IDM3Mi40NTNDNDQxIDM3Mi4wNzIgNDQxLjE5IDM3MS41NDYgNDQxLjIxMyAzNzEuMDg3QzQ0MS42NjIgMzcxLjMzOCA0NDIuMzI2IDM3MS40ODQgNDQyLjUyMyAzNzEuODU1QzQ0My40MzMgMzczLjU2NCA0NDQuMjE3IDM3NS4zMzQgNDQ1LjAzNSAzNzcuMDg3QzQ0NS4yMzQgMzc3LjUxMyA0NDUuMzkyIDM3Ny45NTUgNDQ1LjY1OCAzNzguNDc1WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk00NTIuNzQgMzU5Ljc5M0M0NTIuMjM4IDM1OC42MzkgNDUxLjc3IDM1Ny40MTYgNDUxLjQyNCAzNTYuMTYyQzQ1MC43ODQgMzUzLjg0NyA0NDkuNjE5IDM1MS44NTEgNDQ3LjgwMiAzNTAuMThDNDQ3LjUzNSAzNDkuOTM0IDQ0Ny41NCAzNDkuNDIxIDQ0Ny40MTggMzQ5LjAzMUM0NDcuOTA1IDM0OS4wOTQgNDQ4LjUzMiAzNDguOTkzIDQ0OC44NTQgMzQ5LjI0NUM0NTEuNzg2IDM1MS41NDEgNDUyLjg2IDM1NC43NjQgNDUzLjQ5MiAzNTguMTQ3QzQ1My41NzkgMzU4LjYxNiA0NTMuMDY0IDM1OS4xODYgNDUyLjc0IDM1OS43OTNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTM5NC4xNDIgMzQ0LjQ3OUMzOTQuNTk4IDM0NC44NTQgMzk1LjI1NiAzNDUuMzAxIDM5NS4yODIgMzQ1Ljc3OEMzOTUuNDI3IDM0OC41MSAzOTUuNDg5IDM1MS4yNTEgMzk1LjM5OSAzNTMuOTg0QzM5NS4zODYgMzU0LjM5MiAzOTQuNDI1IDM1NC43NzIgMzkzLjkwMiAzNTUuMTY1QzM5My44MzQgMzU0LjYxOSAzOTMuNzE0IDM1NC4wNzQgMzkzLjcxIDM1My41MjdDMzkzLjY5MSAzNTEuMzI4IDM5My42OCAzNDkuMTI5IDM5My43MjkgMzQ2LjkzMUMzOTMuNzQ2IDM0Ni4xNCAzOTMuOTQxIDM0NS4zNTIgMzk0LjE0MiAzNDQuNDc5WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk0zOTUuNDcgMzY2LjYxQzM5Ny4xMDUgMzY2Ljc1MiAzOTguNTg4IDM2Ni44NjMgMzk5LjYxIDM2OC4wNDhDMzk5LjgwNiAzNjguMjc2IDM5OS44MDUgMzY4LjY1NyAzOTkuODk0IDM2OC45NjdDMzk5LjU2OCAzNjguOTkzIDM5OS4yMyAzNjkuMDg0IDM5OC45MTcgMzY5LjAzM0MzOTYuODMgMzY4LjY5MSAzOTQuNzU4IDM2OC4yNTEgMzkyLjY2MiAzNjcuOTkxQzM5MS44NTQgMzY3Ljg5MSAzOTAuOTk1IDM2OC4yNTUgMzkwLjE1OCAzNjguMjU3QzM4OS44MDYgMzY4LjI1OSAzODkuNDUxIDM2Ny44NzIgMzg5LjA5NyAzNjcuNjYxQzM4OS4zNjIgMzY3LjQyMyAzODkuNTg2IDM2Ny4wODggMzg5LjkwMiAzNjYuOTYyQzM5MS42NDggMzY2LjI2NiAzOTMuNDM1IDM2NS44NzcgMzk1LjQ3IDM2Ni42MVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDAzLjk2NyAzNTkuNTQxQzQwMy4zNzggMzYxLjIwNyA0MDIuOCAzNjIuNzEgNDAyLjE4NSAzNjQuMTk4QzQwMi4wNzggMzY0LjQ1NSA0MDEuODA4IDM2NC42NTIgNDAxLjYxMyAzNjQuODc2QzQwMS40NTQgMzY0LjY2IDQwMS4xNTggMzY0LjQ0MyA0MDEuMTU4IDM2NC4yMjdDNDAxLjE2MSAzNjMuMzM5IDQwMS4wMyAzNjIuMzY4IDQwMS4zNTQgMzYxLjU3OEM0MDIuMjA0IDM1OS41MDQgNDAyLjc1OSAzNTcuNDI1IDQwMi41NzUgMzU1LjE4NEM0MDIuNTQ4IDM1NC44NTMgNDAyLjgzOCAzNTQuNDk5IDQwMi45OCAzNTQuMTU2QzQwMy4zMSAzNTQuNSA0MDMuODkzIDM1NC44MjQgNDAzLjkyMiAzNTUuMTlDNDA0LjAzNCAzNTYuNTc3IDQwMy45NjcgMzU3Ljk3OCA0MDMuOTY3IDM1OS41NDFaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ2OC42NzEgMzQ0LjMwOUM0NjcuMzE4IDM0NS4xNDcgNDY2LjA2IDM0NS45MSA0NjQuNzgzIDM0Ni42NDRDNDY0LjU3NyAzNDYuNzYzIDQ2NC4yODkgMzQ2Ljc1NSA0NjQuMDM4IDM0Ni44MDVDNDY0LjA0OSAzNDYuNTM1IDQ2My45NCAzNDYuMTQ2IDQ2NC4wODcgMzQ2LjAxMkM0NjQuOTk0IDM0NS4xODggNDY1Ljg2NiAzNDQuMjc0IDQ2Ni45MjYgMzQzLjY3QzQ2OC40MjcgMzQyLjgxMyA0NjkuOTI2IDM0MS43MDkgNDcxLjg2NiAzNDIuMDYyQzQ3Mi4yNzggMzQyLjEzNyA0NzIuNjI5IDM0Mi41MjMgNDczLjAwOSAzNDIuNzY1QzQ3Mi42NSAzNDIuOTcyIDQ3Mi4zMTYgMzQzLjI1IDQ3MS45MjggMzQzLjM3QzQ3MC44ODQgMzQzLjY5MSA0NjkuODE4IDM0My45NDUgNDY4LjY3MSAzNDQuMzA5WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk00MTcuNDIzIDM2Ny45NTVDNDE5LjMzOCAzNjguODIyIDQyMS4wOTQgMzY5LjY1OSA0MjIuODAyIDM3MC41NzZDNDIzLjI4NyAzNzAuODM2IDQyMy42NjYgMzcxLjMwNiA0MjQuMDE2IDM3MS43MzhDNDI0LjExNCAzNzEuODU5IDQyMy45OTEgMzcyLjIxNyA0MjMuODYyIDM3Mi4zOTZDNDIzLjgwOSAzNzIuNDY5IDQyMy40NTEgMzcyLjQwMiA0MjMuMjY3IDM3Mi4zMjVDNDIxLjQzIDM3MS41NTEgNDE5LjU4NCAzNzAuNzkgNDE3Ljc3NyAzNjkuOTU2QzQxNy4yNzkgMzY5LjcyNiA0MTYuNzYyIDM2OS4zMzIgNDE2LjUwNiAzNjguODgzQzQxNi4xOTIgMzY4LjMzMiA0MTYuMTQgMzY3LjY0NCA0MTcuNDIzIDM2Ny45NTVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQyMy40NDIgMzUzLjE0NkM0MjMuNTU5IDM1NC43NyA0MjMuNjk0IDM1Ni4yMjUgNDIzLjc4MSAzNTcuNjgzQzQyMy43OTcgMzU3Ljk2MSA0MjMuNjE5IDM1OC4yNDggNDIzLjUzMSAzNTguNTMyQzQyMy4xODEgMzU4LjM5NiA0MjIuNjQ3IDM1OC4zNDggNDIyLjUxNyAzNTguMTA1QzQyMi4yIDM1Ny41MTcgNDIxLjg4NyAzNTYuODMzIDQyMS45MDQgMzU2LjE5NUM0MjEuOTQ2IDM1NC41NzggNDIyLjEyMSAzNTIuOTU5IDQyMi4zNTkgMzUxLjM1N0M0MjIuNDA4IDM1MS4wMjkgNDIyLjk2NiAzNTAuNzY5IDQyMy4yOSAzNTAuNDc4QzQyMy40NTggMzUwLjg1NyA0MjMuNzQ5IDM1MS4yMzEgNDIzLjc2NCAzNTEuNjE2QzQyMy43ODIgMzUyLjA2NiA0MjMuNTU5IDM1Mi41MjMgNDIzLjQ0MiAzNTMuMTQ2WlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk00OTQuMzM5IDMyMC4yNDNDNDk0LjU1MSAzMTkuODE2IDQ5NC42MTkgMzE5LjQ0MSA0OTQuODE3IDMxOS4xNDNDNDk0Ljk4MiAzMTguODkyIDQ5NS4yOTggMzE4LjczMSA0OTUuNTQ3IDMxOC41M0M0OTUuNzA1IDMxOC44MDMgNDk2LjAwNyAzMTkuMDggNDk1Ljk5OCAzMTkuMzQ4QzQ5NS45MTkgMzIxLjY0OSA0OTUuNzk4IDMyMy45NDkgNDk1LjY0NiAzMjYuMjQ2QzQ5NS42MzEgMzI2LjQ2NyA0OTUuMzIgMzI2LjY2OSA0OTUuMTQ2IDMyNi44ODFDNDk0Ljk2NiAzMjYuNjc5IDQ5NC42NTYgMzI2LjQ5MyA0OTQuNjI2IDMyNi4yNzRDNDk0LjQ2MiAzMjUuMDc4IDQ5NC4zNDEgMzIzLjg3NiA0OTQuMjYgMzIyLjY3MkM0OTQuMjA4IDMyMS44OTQgNDk0LjI1IDMyMS4xMDkgNDk0LjMzOSAzMjAuMjQzWlwiIGZpbGw9XCJibGFja1wiLz5cclxuPHBhdGggZD1cIk00MTcuNzc0IDM1Ny41MjFDNDE3Ljk1IDM1OC4zNjYgNDE3LjkwNSAzNTguNzk2IDQxNy4wMTcgMzU4LjMxOEM0MTYuMjE0IDM1Ny44ODYgNDE1LjM2MiAzNTcuNTE4IDQxNC42MjQgMzU3LjAwNEM0MTQuMzA0IDM1Ni43ODEgNDE0LjIxNCAzNTYuMjYgNDE0LjAxOCAzNTUuODc0QzQxNC40OSAzNTUuNzUgNDE1LjExNCAzNTUuMzgzIDQxNS40MDIgMzU1LjU0OEM0MTYuMjYzIDM1Ni4wMzggNDE2Ljk5MyAzNTYuNzM2IDQxNy43NzQgMzU3LjUyMVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDQ2LjQ1NCAzMTQuMUM0NDcuMjA2IDMxNi4xMDMgNDQ3Ljk1NSAzMTcuOTM5IDQ0OC43MSAzMTkuNzc0QzQ0OC43MjkgMzE5LjgyMiA0NDguODMxIDMxOS44NiA0NDguODI2IDMxOS44OTJDNDQ4LjY5MyAzMjAuNjUzIDQ0OC41NSAzMjEuNDEyIDQ0OC40MSAzMjIuMTcxQzQ0Ny44NzYgMzIxLjcyMiA0NDYuOTU5IDMyMS4zMjggNDQ2Ljg3OCAzMjAuODE2QzQ0Ni41ODggMzE4Ljk4MSA0NDUuMTY2IDMxOC4xODkgNDQzLjg4MSAzMTcuMTMyQzQ0Mi43ODYgMzE2LjIzIDQ0MS45NjUgMzE1LjAwNyA0NDEuMTIzIDMxMy44NkM0NDAuOTE3IDMxMy41NzkgNDQxLjEwNiAzMTMuMDM2IDQ0MS4xMTQgMzEyLjYxM0M0NDEuNDgyIDMxMi43MiA0NDEuOTgzIDMxMi43MiA0NDIuMTk0IDMxMi45NTRDNDQyLjgwNiAzMTMuNjM3IDQ0My4yNzQgMzE0LjQzNSA0NDMuODYyIDMxNS4xNEM0NDQuMDQ3IDMxNS4zNjMgNDQ0LjQzIDMxNS40MzcgNDQ0LjcyMiAzMTUuNTc5QzQ0NC43MjQgMzE1LjI2OSA0NDQuODA5IDMxNC45MzQgNDQ0LjcxOCAzMTQuNjUxQzQ0My44OTggMzEyLjExNiA0NDIuODg1IDMwOS42MjcgNDQyLjI0NiAzMDcuMDUzQzQ0MS4zNzggMzAzLjU1MyA0NDAuNjI0IDMwMC4wMTMgNDQwLjExOSAyOTYuNDUzQzQzOS4yOTIgMjkwLjYxNSA0MzguMzkgMjg0Ljc2NyA0MzguNjk1IDI3OC44NDZDNDM4LjcyNiAyNzguMjQ2IDQzOS4xNjUgMjc3LjY2NCA0MzkuNDE0IDI3Ny4wNzNDNDM5LjYzNyAyNzcuNjMzIDQzOS45OTQgMjc4LjE3OSA0NDAuMDYxIDI3OC43NTZDNDQwLjU3MSAyODMuMTY1IDQ0MS4yMTkgMjg3LjU3MSA0NDEuNDQ3IDI5MS45OTVDNDQxLjcwNCAyOTYuOTk2IDQ0Mi42ODIgMzAxLjg1IDQ0NC4wMDIgMzA2LjY1NkM0NDQuNjc4IDMwOS4xMTcgNDQ1LjYyOSAzMTEuNTA5IDQ0Ni40NTQgMzE0LjFaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ0OS45OTYgMzA2LjY5NUM0NTAuNDY4IDMwNS4yMDQgNDUwLjkzOCAzMDMuODggNDUxLjQxNCAzMDIuNTU4QzQ1MS41NTQgMzAyLjE2NyA0NTEuNjA0IDMwMS42NzkgNDUxLjg4MyAzMDEuNDE2QzQ1Mi4yNTcgMzAxLjA2NCA0NTIuODE0IDMwMC44ODcgNDUzLjI5MSAzMDAuNjM2QzQ1My4yODMgMzAxLjExNCA0NTMuMzY2IDMwMS42MTQgNDUzLjI1MiAzMDIuMDY4QzQ1Mi4xODYgMzA2LjI4MyA0NTEuMTA1IDMxMC40OTQgNDQ5Ljk3MiAzMTQuNjkzQzQ0OS44MzcgMzE1LjE5MyA0NDkuMzY5IDMxNS42MSA0NDkuMDU1IDMxNi4wNjdDNDQ4Ljc3OCAzMTUuNTYgNDQ4LjE5MyAzMTUuMDAyIDQ0OC4yNzcgMzE0LjU1OEM0NDguNzYyIDMxMS45NzggNDQ5LjQwNiAzMDkuNDI1IDQ0OS45OTYgMzA2LjY5NVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDM4LjA0NCAyOTkuMjA1QzQzOC43MTQgMzAwLjE3OCA0MzkuMzQzIDMwMS4wNDMgNDM5Ljg0NiAzMDEuOTdDNDQwLjAwMyAzMDIuMjYgNDM5LjgxNyAzMDIuNzE5IDQzOS43ODggMzAzLjEwMUM0MzkuNDIxIDMwMy4wMTUgNDM4LjkxMyAzMDMuMDQ2IDQzOC43MTIgMzAyLjgyNUM0MzcuOTgzIDMwMi4wMjEgNDM3LjIxNyAzMDEuMjAxIDQzNi43MiAzMDAuMjY1QzQzNS4yNzggMjk3LjU0MiA0MzMuOTYxIDI5NC43NiA0MzIuNTg4IDI5Mi4wMDNDNDMyLjUxOCAyOTEuODYyIDQzMi4yODkgMjkxLjczIDQzMi4zMDcgMjkxLjYyQzQzMi40MjIgMjkwLjk0NyA0MzIuNTg2IDI5MC4yODEgNDMyLjczMyAyODkuNjEyQzQzMy4wNjQgMjkwLjA5NiA0MzMuNDQ2IDI5MC41NTQgNDMzLjcyIDI5MS4wNjZDNDM1LjE0NyAyOTMuNzQ0IDQzNi41NDYgMjk2LjQzNCA0MzguMDQ0IDI5OS4yMDVaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQ0Ny41MTcgMjk2LjkzMkM0NDcuMjgxIDI5OC42MzMgNDQ3LjA5NyAzMDAuMTc0IDQ0Ni43NzggMzAxLjY5QzQ0Ni42NzggMzAyLjE2IDQ0Ni4yMTQgMzAyLjU2IDQ0NS45MTYgMzAyLjk5MkM0NDUuNzQyIDMwMi42MjEgNDQ1LjUwMiAzMDIuMjY0IDQ0NS40MDIgMzAxLjg3NkM0NDQuNzMyIDI5OS4yNDUgNDQ1Ljk2OSAyOTYuOCA0NDYuMjgyIDI5NC4yNjVDNDQ2LjQyMiAyOTMuMTMzIDQ0Ni43NjggMjkyLjAwMiA0NDcuMjAyIDI5MC45MzZDNDQ3LjQxNSAyOTAuNDEzIDQ0OC4wNDEgMjkwLjA0MiA0NDguNDggMjg5LjYwMkM0NDguNjE2IDI5MC4yMDggNDQ4Ljk1OSAyOTAuODUyIDQ0OC44NDkgMjkxLjQxNUM0NDguNDk1IDI5My4yMTUgNDQ3Ljk3NCAyOTQuOTg0IDQ0Ny41MTcgMjk2LjkzMlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDQyLjY0OSAyODMuNTUzQzQ0My4yMzUgMjgyLjQzNSA0NDMuNjY2IDI4MS4zNjIgNDQ0LjI3IDI4MC4zODZDNDQ0LjQ3NSAyODAuMDU0IDQ0NS4xMTggMjc5Ljk2NiA0NDUuNTYgMjc5Ljc2N0M0NDUuNjAxIDI4MC4xOCA0NDUuNzcxIDI4MC42MjYgNDQ1LjY2MiAyODAuOTk5QzQ0NS4wMTggMjgzLjIwMiA0NDQuMzI2IDI4NS4zOTIgNDQzLjYwMSAyODcuNTcxQzQ0My41MTggMjg3LjgyMiA0NDMuMTMyIDI4Ny45ODEgNDQyLjg4NyAyODguMTgxQzQ0Mi42NiAyODcuOTA3IDQ0Mi4yMzIgMjg3LjYyNyA0NDIuMjQxIDI4Ny4zNTlDNDQyLjI4MSAyODYuMTE3IDQ0Mi40NDIgMjg0Ljg3OCA0NDIuNjQ5IDI4My41NTNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTQzNi4yNzQgNDQxLjA4M0M0NDAuNTU5IDQ0MC44ODcgNDQ0Ljc1NiA0NDAuNzc0IDQ0OC45NTQgNDQwLjY2M0M0NDkuMjQ4IDQ0MC42NTUgNDQ5LjU4MiA0NDAuNTc3IDQ0OS44MyA0NDAuNjhDNDUwLjM3OCA0NDAuOTA2IDQ1MC44ODIgNDQxLjIyNyA0NTEuNDA1IDQ0MS41MDlDNDUwLjg3OCA0NDEuNzg3IDQ1MC4zNTUgNDQyLjI5NyA0NDkuODIyIDQ0Mi4zMDhDNDQ2LjEwOSA0NDIuMzc4IDQ0Mi4zOTQgNDQyLjM0NSA0MzguNjc4IDQ0Mi4zNDVDNDM3LjkxMiA0NDIuMzQ1IDQzNy4xMzkgNDQyLjM5NyA0MzYuMzgxIDQ0Mi4zMjVDNDM1Ljk2NCA0NDIuMjg0IDQzNS41NyA0NDIuMDM1IDQzNS4xNjYgNDQxLjg4MUM0MzUuNTA2IDQ0MS42NDIgNDM1Ljg0NiA0NDEuNDA0IDQzNi4yNzQgNDQxLjA4M1pcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNNDMzLjYyIDQzMy42NzdDNDMzLjQzMiA0MzQuMDQyIDQzMy4xNzggNDM0LjU0IDQzMi44NzYgNDM0LjU2OEM0MzAuODg1IDQzNC43NDggNDI4Ljg4NSA0MzQuODg2IDQyNi44ODYgNDM0LjlDNDI2LjM1NiA0MzQuOTA1IDQyNS44MjIgNDM0LjQyOSA0MjUuMjkgNDM0LjE3NEM0MjUuNzM4IDQzMy45OCA0MjYuMTgxIDQzMy42MzEgNDI2LjYzNCA0MzMuNjE5QzQyOC45MzEgNDMzLjU2MiA0MzEuMjMyIDQzMy41OTQgNDMzLjYyIDQzMy42NzdaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTEzNS4yIDI0OS4wNTdMMTY2IDI5NC42OTFIMjQxLjZMMjQ1LjIgMjg2LjcwNUgyMjAuNEwxOTIuOCAyNDkuMDU3SDEzNS4yWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0yNDUuNDQ2IDMxNy4yMDZDMjM3LjcxOSAzMTcuMjA2IDIzMC4xNzEgMzE3LjI1IDIyMi42MjQgMzE3LjE5M0MyMTUuNjI0IDMxNy4xNDEgMjA4LjYyNCAzMTYuOTkxIDIwMS42MjUgMzE2Ljg2MUMxOTYuNTM3IDMxNi43NjggMTkxLjQ0OSAzMTYuNjQgMTg2LjM2MSAzMTYuNTI0QzE4MS41MTIgMzE2LjQxMyAxNzYuNjYyIDMxNi4zNCAxNzEuODE0IDMxNi4xNzJDMTY2LjgzNCAzMTUuOTk4IDE2MS44NTYgMzE1Ljc0IDE1Ni44NzggMzE1LjQ5OUMxNTIuNDk1IDMxNS4yODcgMTQ4LjExMiAzMTUuMDg4IDE0My43MzQgMzE0LjgwOUMxMzkuMTYgMzE0LjUxOCAxMzQuNTkyIDMxNC4xMzIgMTMwLjAyMSAzMTMuODAxQzEyNi43MTYgMzEzLjU2MSAxMjMuNDA2IDMxMy4zNzQgMTIwLjEwNCAzMTMuMDk5QzExOS4wNTEgMzEzLjAxMSAxMTguODY3IDMxMy4zNTUgMTE4Ljg3OCAzMTQuMjkyQzExOC45MzUgMzE4Ljk0OCAxMTguOTQxIDMyMy42MDYgMTE4Ljg5NyAzMjguMjYzQzExOC44MDIgMzM4LjI4OCAxMTguNjM4IDM0OC4zMTMgMTE4LjU2NiAzNTguMzM4QzExOC41NDkgMzYwLjczMiAxMTguODk4IDM2My4xMjkgMTE4Ljg4IDM2NS41MjNDMTE4Ljg0NiAzNjkuOTA2IDExOC42MDUgMzc0LjI4OCAxMTguNTcgMzc4LjY3MkMxMTguNTUyIDM4MS4wMDkgMTE4LjkwMiAzODMuMzQ4IDExOC44ODMgMzg1LjY4NkMxMTguODE1IDM5NC42NjkgMTE4LjY3NCA0MDMuNjUyIDExOC41NDIgNDEyLjYzNUMxMTguNDM4IDQxOS43NjQgMTE4LjMgNDI2Ljg5MiAxMTguMTkxIDQzNC4wMjFDMTE4LjE1OCA0MzYuMjUyIDExNi44MzUgNDM3LjUwMSAxMTQuNDMgNDM3LjUxQzExMi40MjYgNDM3LjUxNiAxMTEuMDU0IDQzNi4wODcgMTExLjAxMiA0MzQuMDMzQzExMC45MSA0MjkuMDgyIDExMC43NiA0MjQuMTMxIDExMC42NjcgNDE5LjE4QzExMC42MjIgNDE2LjcyIDExMC42MTQgNDE0LjI1NiAxMTAuNjc0IDQxMS43OTZDMTEwLjcyMSA0MDkuODcxIDExMS4wMDYgNDA3Ljk1IDExMC45OTIgNDA2LjAyN0MxMTAuOTcyIDQwMy4yMzQgMTEwLjczMSA0MDAuNDQzIDExMC42NzMgMzk3LjY0OUMxMTAuNjEzIDM5NC43OTEgMTEwLjYyNiAzOTEuOTMxIDExMC42NjYgMzg5LjA3MkMxMTAuNzY2IDM4Mi4wMiAxMTAuOTM4IDM3NC45NjggMTEwLjk5NiAzNjcuOTE1QzExMS4wMTUgMzY1LjUwMiAxMTAuNzAyIDM2My4wODcgMTEwLjY3NSAzNjAuNjcxQzExMC42MjEgMzU1Ljg2MiAxMTAuNjU5IDM1MS4wNTMgMTEwLjY1OSAzNDYuMjQzQzExMC42NTkgMzQzLjQ0MSAxMTAuNjEzIDM0MC42MzcgMTEwLjY3MyAzMzcuODM2QzExMC43MzEgMzM1LjA5OSAxMTAuOTcgMzMyLjM2NSAxMTEuMDAyIDMyOS42MjhDMTExLjA1OCAzMjQuNzI1IDExMS4wMDYgMzE5LjgyMSAxMTEuMDM3IDMxNC45MTdDMTExLjAzOSAzMTQuNDYzIDExMS4zMDggMzE0LjAwOSAxMTEuNDUzIDMxMy41NTVDMTExLjU3OSAzMTMuNjEgMTExLjc4MyAzMTMuNjM3IDExMS44MiAzMTMuNzI2QzExMi4wMDcgMzE0LjE4NCAxMTIuMjIgMzE0LjY0NyAxMTIuMjk0IDMxNS4xMjdDMTEyLjQwNCAzMTUuODM4IDExMi40NjQgMzE2LjU2NiAxMTIuNDQyIDMxNy4yODRDMTEyLjM0NiAzMjAuMzQzIDExMi4xMDUgMzIzLjQwMiAxMTIuMTE4IDMyNi40NjFDMTEyLjEzOSAzMzAuOTIgMTEyLjM5MSAzMzUuMzc4IDExMi40MjcgMzM5LjgzOEMxMTIuNDQ2IDM0Mi4xMzggMTEyLjExMiAzNDQuNDM5IDExMi4xMTkgMzQ2Ljc0QzExMi4xMjggMzQ5LjQ5NiAxMTIuNDExIDM1Mi4yNSAxMTIuNDI2IDM1NS4wMDdDMTEyLjQzNyAzNTcuMDc5IDExMi4xMjIgMzU5LjE1NCAxMTIuMTE5IDM2MS4yMjdDMTEyLjExNyAzNjMuMTY4IDExMi40NDYgMzY1LjExIDExMi40MjcgMzY3LjA0OUMxMTIuMzkzIDM3MC42NTggMTEyLjEzMiAzNzQuMjY0IDExMi4xMTkgMzc3Ljg3MkMxMTIuMTA5IDM4MC42NjQgMTEyLjQyOSAzODMuNDU2IDExMi40MjYgMzg2LjI0OUMxMTIuNDIyIDM4OS4yMzIgMTEyLjEzNCAzOTIuMjEzIDExMi4xMTkgMzk1LjE5NkMxMTIuMTA4IDM5Ny40NCAxMTIuNDM1IDM5OS42ODUgMTEyLjQyNiA0MDEuOTI5QzExMi40MTQgNDA0Ljc0MSAxMTIuMTE4IDQwNy41NTMgMTEyLjExOSA0MTAuMzY1QzExMi4xMjEgNDEzLjIzNSAxMTIuNDI1IDQxNi4xMDMgMTEyLjQyNiA0MTguOTcyQzExMi40MjYgNDIxLjgwNCAxMTIuMDgyIDQyNC42MzcgMTEyLjEzNCA0MjcuNDY2QzExMi4xNzYgNDI5LjgxNyAxMTIuNDcxIDQzMi4xNzkgMTEyLjg4NyA0MzQuNDk5QzExMi45OCA0MzUuMDE1IDExNC4wMjQgNDM1LjY3NSAxMTQuNjY4IDQzNS43MTRDMTE1LjIxNiA0MzUuNzQ3IDExNS45NzggNDM1LjA4IDExNi4zNDggNDM0LjU0QzExNi42ODkgNDM0LjA0MiAxMTYuNzM4IDQzMy4zMDEgMTE2LjczOCA0MzIuNjY2QzExNi43NTggNDE4LjE4NCAxMTYuNzU0IDQwMy43MDEgMTE2Ljc1NCAzODkuMjE4QzExNi43NTQgMzc5LjM3NCAxMTYuNzA2IDM2OS41MjkgMTE2Ljc2NiAzNTkuNjg1QzExNi44MjYgMzQ5Ljg0OSAxMTcuMDM5IDM0MC4wMTUgMTE3LjA4OSAzMzAuMThDMTE3LjEwOSAzMjYuMjUxIDExNi44MzkgMzIyLjMyMyAxMTYuNzc0IDMxOC4zOTRDMTE2Ljc1NiAzMTcuMjUgMTE3LjAyOSAzMTYuMTA1IDExNy4xMDQgMzE0Ljk1N0MxMTcuMjM4IDMxMi45MDQgMTE2Ljg3IDMxMi41ODcgMTE0Ljc2MSAzMTIuNDI0QzExMC44NDQgMzEyLjEyMiAxMDYuOTE4IDMxMS44NiAxMDMuMDIyIDMxMS4zODhDOTYuNjc1MiAzMTAuNjIgOTAuMjI5NiAzMTAuMjk5IDg0LjExNTIgMzA4LjMxM0M4MS42MTY4IDMwNy41IDc5LjE3NTIgMzA2LjQ1NiA3Ni44NDQgMzA1LjI3NUM3NC43NzI4IDMwNC4yMjUgNzQuMzI0OCAzMDIuMjE1IDc0LjQ3MjggMzAwLjE0NEM3NC42MTI4IDI5OC4xODEgNzUuODcyOCAyOTYuODE5IDc3LjczNDQgMjk2LjI0MkM4MS45MDA4IDI5NC45NSA4Ni4xMDA4IDI5My43MjUgOTAuMzUyOCAyOTIuNzI0QzkyLjI0OCAyOTIuMjc5IDk0LjMxNDQgMjkyLjUzOSA5Ni4yOCAyOTIuMzA1Qzk5LjM3OTIgMjkxLjkzNiAxMDIuNDUzIDI5MS4zNzkgMTA1LjU0OCAyOTAuOTc4QzEwNy44MjkgMjkwLjY4MiAxMTAuMTIyIDI5MC40NDUgMTEyLjQxOSAyOTAuM0MxMTUuMjkyIDI5MC4xMTcgMTE4LjE4MiAyOTAuMTUyIDEyMS4wNDkgMjg5LjkyQzEyNS42MzggMjg5LjU0OCAxMzAuMjEyIDI4OS4wMjMgMTM0Ljc5NCAyODguNTg0QzEzNi4zNTQgMjg4LjQzNSAxMzcuOTE5IDI4OC4zMTQgMTM5LjQ4NSAyODguMjQ2QzE0Mi43MTkgMjg4LjEwNiAxNDUuOTU3IDI4OC4wMTEgMTQ5LjE5MyAyODcuODk3QzE1Mi40MjkgMjg3Ljc4NCAxNTUuNjY2IDI4Ny42ODEgMTU4LjkgMjg3LjU0MUMxNTkuMjY5IDI4Ny41MjYgMTU5LjYyNyAyODcuMzA0IDE1OS45OSAyODcuMTc3QzE1OS44MjkgMjg2LjgyMiAxNTkuNzE4IDI4Ni40MzcgMTU5LjQ5OSAyODYuMTE4QzE1Ni4yNTIgMjgxLjM3NCAxNTIuOTczIDI3Ni42NSAxNDkuNzM4IDI3MS44OThDMTQ2Ljg0NiAyNjcuNjQ4IDE0My45OTEgMjYzLjM3NCAxNDEuMTM2IDI1OS4xQzEzOS4wOTQgMjU2LjA0NiAxMzcuMDMzIDI1My4wMDIgMTM1LjA3MSAyNDkuOUMxMzQuMTk1IDI0OC41MTUgMTM0LjUxNCAyNDcuODM4IDEzNi4xNDYgMjQ3LjUxOUMxMzcuMTQ4IDI0Ny4zMjIgMTM4LjIyIDI0Ny40MzEgMTM5LjI2IDI0Ny40NTFDMTM5LjY0NCAyNDcuNDU4IDE0MC4wMjUgMjQ3LjY2NiAxNDAuNDA5IDI0Ny42NzNDMTQ4LjEyNSAyNDcuNzk5IDE1NS44NDIgMjQ3Ljg5NSAxNjMuNTU4IDI0OC4wMjhDMTY4LjUyNyAyNDguMTE0IDE3My41MyAyNDcuOTQ1IDE3OC40NTQgMjQ4LjQ1M0MxODMuMDI2IDI0OC45MjYgMTg3LjM5NSAyNDguMTA1IDE5MS44NTQgMjQ3Ljc0OEMxOTIuNTkyIDI0Ny42ODggMTkzLjY5NCAyNDguMjk3IDE5NC4xMzkgMjQ4LjkxNkMxOTguNTI1IDI1NS4wMDggMjAyLjc3NiAyNjEuMTg2IDIwNy4xMjYgMjY3LjNDMjExLjI2NyAyNzMuMTIgMjE1LjQ1NiAyNzguOTA5IDIxOS42ODggMjg0LjY2OUMyMjAuMzc2IDI4NS42MDUgMjIxLjI1NiAyODYuMjQ0IDIyMi43NyAyODYuMjQ3QzIzNS4wMjYgMjg2LjI2NSAyNDcuMjgyIDI4Ni40MjUgMjU5LjUzOSAyODYuNTNDMjYyLjUyNiAyODYuNTU1IDI2NS41MTQgMjg2LjQ5NCAyNjguNSAyODYuNTQzQzI3My40MSAyODYuNjIzIDI3OC4zMTggMjg2Ljc0OCAyODMuMjI2IDI4Ni44NzlDMjg2LjU4MiAyODYuOTY5IDI4OS45MzggMjg3LjEwOCAyOTMuMjk0IDI4Ny4yMTRDMjk3LjEyNiAyODcuMzM1IDMwMC45NjIgMjg3LjQxMyAzMDQuNzk0IDI4Ny41NjRDMzA5LjgzMyAyODcuNzYyIDMxNC44NzEgMjg4IDMxOS45MDkgMjg4LjI0MUMzMjQuMzUxIDI4OC40NTQgMzI4Ljc5MSAyODguNyAzMzMuMjMzIDI4OC45MTdDMzM1Ljg3IDI4OS4wNDUgMzM4LjUxOCAyODkuMDYyIDM0MS4xNDcgMjg5LjI3OUMzNDUuODU0IDI4OS42NjggMzUwLjU0OCAyOTAuMTg3IDM1NS4yNTEgMjkwLjYxN0MzNTguMTM1IDI5MC44ODEgMzYxLjAzNiAyOTAuOTk4IDM2My45MTIgMjkxLjMyNEMzNjguMjE3IDI5MS44MTIgMzcyLjUxMyAyOTIuMzg0IDM3Ni44IDI5Mi45OTlDMzgwLjM4MiAyOTMuNTEyIDM4My45ODIgMjkzLjk5IDM4Ny41MDkgMjk0Ljc1NkMzOTAuNzQ2IDI5NS40NjEgMzk0LjAwNCAyOTYuMjg4IDM5Ny4wNTIgMjk3LjUxMkMzOTkuNzkxIDI5OC42MTEgMzk5LjUxOCAyOTkuNTM2IDM5OC43OTQgMzAxLjc1QzM5OC40NTEgMzAyLjc5NiAzOTcuNjMxIDMwMy43NDcgMzk3LjQ4NyAzMDQuNzk4QzM5Ny4wMTggMzA4LjIyNiAzOTQuMjU4IDMwOC44MjggMzkxLjUwMiAzMDkuMzQ2QzM4Ni4yMzggMzEwLjMzMSAzODAuOTU4IDMxMS4yNCAzNzUuNjY0IDMxMi4wNjlDMzczLjI4IDMxMi40NDMgMzcwLjg1MiAzMTIuNTkgMzY4LjQzOCAzMTIuNzY3QzM2My4zOTEgMzEzLjEzNiAzNTguMzQxIDMxMy40NTQgMzUzLjI5MyAzMTMuNzk5QzM1MC4wNDYgMzE0LjAyMSAzNDYuODAyIDMxNC4yOTIgMzQzLjU1MyAzMTQuNDdDMzM4Ljc1NSAzMTQuNzMzIDMzMy45NTUgMzE0Ljk0OSAzMjkuMTU0IDMxNS4xNTdDMzIzLjUxOSAzMTUuNDAxIDMxNy44ODIgMzE1LjU5OSAzMTIuMjQ3IDMxNS44NDhDMzA3LjY4NiAzMTYuMDUgMzAzLjEyNiAzMTYuMzA1IDI5OC41NjUgMzE2LjUyMUMyOTUuODA4IDMxNi42NTIgMjkzLjA1IDMxNi44MjcgMjkwLjI5IDMxNi44NTNDMjc1LjQwMiAzMTYuOTkzIDI2MC41MTQgMzE3LjA5MyAyNDUuNDQ2IDMxNy4yMDZaTTM5MS4xNjYgMjk3LjQ0QzM5MC4xNTUgMjk3LjE2MSAzODkuMTYgMjk2LjgwNSAzODguMTMxIDI5Ni42MTZDMzg0LjUyOSAyOTUuOTUxIDM4MC45MjggMjk1LjI2MiAzNzcuMzAyIDI5NC43NEMzNzQuNzM1IDI5NC4zNzIgMzcyLjEyMSAyOTQuMzA4IDM2OS41MzkgMjk0LjAyMUMzNjQuNzYzIDI5My40OSAzNjAuMDAyIDI5Mi44MzIgMzU1LjIyMiAyOTIuMzQ5QzM1MS44NjggMjkyLjAxIDM0OC40OSAyOTEuODk3IDM0NS4xMjYgMjkxLjY0QzM0MS4wMyAyOTEuMzI2IDMzNi45NDIgMjkwLjkxMSAzMzIuODQ1IDI5MC42MzZDMzI3LjAyMiAyOTAuMjQ2IDMyMS4xOTQgMjg5LjkxNyAzMTUuMzY3IDI4OS42MDlDMzEwLjM5IDI4OS4zNDUgMzA1LjQxIDI4OS4xMjQgMzAwLjQyOSAyODguOTI3QzI5Ni42NTYgMjg4Ljc3NyAyOTIuODgyIDI4OC42OCAyODkuMTA2IDI4OC41ODJDMjg0LjE5OCAyODguNDU1IDI3OS4yODggMjg4LjM0MSAyNzQuMzc4IDI4OC4yNDFDMjY4LjI3NCAyODguMTE2IDI2Mi4xNyAyODcuOTQzIDI1Ni4wNjYgMjg3LjkxMkMyNDUuMzEyIDI4Ny44NTggMjM0LjU1OCAyODcuODkxIDIyMy44MDMgMjg3LjkyMUMyMjMuMzcgMjg3LjkyMiAyMjIuOTM3IDI4OC4yNzYgMjIyLjUwMyAyODguNDY1QzIyMi45MTcgMjg4LjYxNiAyMjMuMzI5IDI4OC44OTcgMjIzLjc0MyAyODguOUMyMjguNDAzIDI4OC45MzEgMjMzLjA2NCAyODguODk5IDIzNy43MjMgMjg4Ljk0N0MyMzguMjY4IDI4OC45NTMgMjM4LjgwOSAyODkuMzM3IDIzOS4zNTEgMjg5LjU0NkMyMzguOTIyIDI4OS42ODggMjM4LjQ5OCAyODkuODQ1IDIzOC4wNjIgMjg5Ljk2OUMyMzcuNjM2IDI5MC4wOTEgMjM3LjE5OCAyOTAuMjY2IDIzNi43NjUgMjkwLjI2OUMyMzMuNDc5IDI5MC4yOTQgMjMwLjE5MyAyOTAuMjkzIDIyNi45MDcgMjkwLjI3N0MyMjUuOTE3IDI5MC4yNzEgMjI0LjkyNyAyOTAuMTkxIDIyMy45MzcgMjkwLjE0NEMyMjQuNTM3IDI5MS4xNTggMjI1LjEzMSAyOTIuMTc0IDIyNS43NDEgMjkzLjE4MkMyMjUuODI3IDI5My4zMjQgMjI1Ljk3MyAyOTMuNDQ4IDIyNi4xMTkgMjkzLjU0MkMyMjYuMzk1IDI5My43MiAyMjYuNjk1IDI5NC4wMTYgMjI2Ljk3OSAyOTQuMDFDMjMwLjI3NiAyOTMuOTMgMjMzLjU3MiAyOTMuNzYgMjM2Ljg2OSAyOTMuNzMyQzIzNy40NTEgMjkzLjcyNyAyMzguMDM5IDI5NC4yNjUgMjM4LjYyNiAyOTQuNTUyQzIzOC4wNDEgMjk0LjcxOSAyMzcuNDU4IDI5NS4wMjcgMjM2Ljg3MiAyOTUuMDMyQzIzMS45NTMgMjk1LjA3MSAyMjcuMDMzIDI5NS4wMTQgMjIyLjExNCAyOTUuMDY0QzIxNC40NTYgMjk1LjE0MSAyMDYuNzk4IDI5NS4zMjYgMTk5LjE0MSAyOTUuMzgyQzE5MS4zMTQgMjk1LjQzOSAxODMuNDg3IDI5NS4zOTUgMTc1LjY2MSAyOTUuMzk1QzE3My43MDggMjk1LjM5NSAxNzEuNzUxIDI5NS40NjEgMTY5LjgwNSAyOTUuMzU2QzE2OS4xOTYgMjk1LjMyMyAxNjguNjE0IDI5NC44MyAxNjguMDIxIDI5NC41NDhDMTY4LjYxIDI5NC4yNjIgMTY5LjE4IDI5My45MjkgMTY5Ljc5NSAyOTMuNzExQzE3MC4xMSAyOTMuNTk5IDE3MC41MDQgMjkzLjY5MSAxNzAuODYyIDI5My42OTFDMTg3LjI5MyAyOTMuNjkxIDIwMy43MjIgMjkzLjY5MiAyMjAuMTUzIDI5My42OEMyMjAuNTc4IDI5My42OCAyMjEuMDAyIDI5My41MjQgMjIxLjQyOCAyOTMuNDQxQzIyMS4yMzkgMjkzLjA2IDIyMS4xMDIgMjkyLjY0NyAyMjAuODU0IDI5Mi4zMDVDMjE3LjM1IDI4Ny40OTEgMjEzLjgzOSAyODIuNjgxIDIxMC4zMTMgMjc3Ljg4MkMyMDcuNDYyIDI3NC4wMDIgMjA0LjU3NiAyNzAuMTQ2IDIwMS43MjcgMjY2LjI2NkMxOTguMzY0IDI2MS42ODYgMTk1LjAxMSAyNTcuMSAxOTEuNzAyIDI1Mi40ODZDMTkxLjQ2MSAyNTIuMTUgMTkxLjYxIDI1MS41NjIgMTkxLjU3OCAyNTEuMDlDMTkxLjk2OSAyNTEuMzMxIDE5Mi40ODQgMjUxLjQ4NyAxOTIuNzMxIDI1MS44MjNDMTk2LjEwNiAyNTYuMzkzIDE5OS40NDYgMjYwLjk4NyAyMDIuNzkgMjY1LjU3OEMyMDguMTU4IDI3Mi45NSAyMTMuNTE3IDI4MC4zMjYgMjE4Ljg4OSAyODcuNjk0QzIyMC4zMDcgMjg5LjYzOSAyMjEuNzUgMjkxLjU3IDIyMy4yMSAyOTMuNDg2QzIyMy4zNTQgMjkzLjY3NyAyMjMuNzAyIDI5My43MjggMjIzLjk1NiAyOTMuODQ0QzIyMy45NzEgMjkzLjUyOSAyMjQuMTIyIDI5My4xMzYgMjIzLjk4IDI5Mi45MTNDMjIyLjk2NSAyOTEuMzE3IDIyMS45NDIgMjg5LjcyMiAyMjAuODI1IDI4OC4xOUMyMTUuMTg3IDI4MC40NjUgMjA5LjQ5NyAyNzIuNzc1IDIwMy44NzEgMjY1LjA0MUMyMDAuNDQyIDI2MC4zMjYgMTk3LjEwOCAyNTUuNTQ5IDE5My42OTggMjUwLjgyQzE5My4xNTggMjUwLjA3IDE5Mi40MzMgMjQ5LjU2OCAxOTEuMzE0IDI0OS43MDZDMTg5LjcwMiAyNDkuOTA0IDE4OC4wNjggMjUwLjA2NCAxODYuNDQ2IDI1MC4wNDZDMTgyLjg1IDI1MC4wMDQgMTc5LjI1NyAyNDkuODI1IDE3NS42NjIgMjQ5LjczMUMxNzAuNzUyIDI0OS42MDMgMTY1Ljg0MyAyNDkuNDggMTYwLjkzMyAyNDkuMzkxQzE1My42MzQgMjQ5LjI2IDE0Ni4zMzUgMjQ5LjE1OSAxMzkuMDM2IDI0OS4wNDZDMTM4LjkxNiAyNDkuMDQ0IDEzOC43OTYgMjQ5LjA1NSAxMzguNjc4IDI0OS4wNDRDMTM3Ljg0NiAyNDguOTY3IDEzNy4wMTQgMjQ4Ljg4NyAxMzYuMTgyIDI0OC44MDhDMTM2LjYzNiAyNDkuNTc2IDEzNy4wNTUgMjUwLjM2NSAxMzcuNTUgMjUxLjEwOEMxNDEuMTc4IDI1Ni41NTUgMTQ0Ljc4OCAyNjIuMDEzIDE0OC40NjggMjY3LjQyN0MxNTQuMjI2IDI3NS45MDEgMTYwLjA0MSAyODQuMzQxIDE2NS44MDcgMjkyLjgwOUMxNjYuMDY2IDI5My4xOSAxNjYuMTczIDI5My43MTQgMTY2LjE5MSAyOTQuMTc3QzE2Ni4yMDIgMjk0LjQ0OCAxNjUuODk4IDI5NC43MyAxNjUuNzM1IDI5NS4wMDdDMTY1LjUzOSAyOTQuODMxIDE2NS4yOTMgMjk0LjY4NiAxNjUuMTU2IDI5NC40NzZDMTY0LjMwMyAyOTMuMTY4IDE2My41OTcgMjkxLjc1MSAxNjIuNTg5IDI5MC41NjVDMTYyLjA1IDI4OS45MyAxNjAuOTgzIDI4OS4yODggMTYwLjE5MyAyODkuMzI4QzE1Ni4zMyAyODkuNTIgMTUyLjQ4NSAyOTAuMDA2IDE0OC42MjQgMjkwLjI2M0MxNDUuNDU0IDI5MC40NzQgMTQyLjI3MSAyOTAuNDk1IDEzOS4wOTYgMjkwLjYyN0MxMzMuOTM3IDI5MC44NDIgMTI4Ljc3NiAyOTEuMDQ1IDEyMy42MjEgMjkxLjMxOEMxMjAuNjY4IDI5MS40NzUgMTE3LjcyIDI5MS43MjYgMTE0Ljc3NyAyOTEuOTk1QzExMC4xMzIgMjkyLjQxOSAxMDUuNDg5IDI5Mi44NjMgMTAwLjg1NCAyOTMuMzY1Qzk4LjgyNzIgMjkzLjU4NSA5Ni44MTI4IDI5My45MzQgOTQuODA1NiAyOTQuMjg5QzkxLjU5NTIgMjk0Ljg1NiA4OC4zODMyIDI5NS40MjMgODUuMTk2IDI5Ni4wOTVDODIuOTcwNCAyOTYuNTY0IDgwLjc2MzIgMjk3LjE0MyA3OC41OTYgMjk3LjgxNUM3Ny45NjU2IDI5OC4wMSA3Ny41MDI0IDI5OC42OTMgNzYuOTYyNCAyOTkuMTUyQzc3LjQ2NDggMjk5LjU2OSA3Ny45MTEyIDMwMC4wOCA3OC40ODA4IDMwMC4zODJDNzkuMzQ0IDMwMC44NDEgODAuMjU4NCAzMDEuMjk5IDgxLjIxMTIgMzAxLjUwMUM4My43NDE2IDMwMi4wMzggODYuMzExMiAzMDIuNDA3IDg4Ljg1MzYgMzAyLjlDOTIuODE0NCAzMDMuNjY4IDk2LjczNjggMzA0LjY3IDEwMC43MjggMzA1LjIzMkMxMDYuMDY3IDMwNS45ODUgMTExLjQ1MSAzMDYuNDg0IDExNi44MjggMzA2Ljk2MkMxMjEuNzQ5IDMwNy4zOTkgMTI2LjY4NiAzMDcuNjY0IDEzMS42MTYgMzA4LjAwNUMxMzQuOTIyIDMwOC4yMzIgMTM4LjIyOCAzMDguNDY5IDE0MS41MzUgMzA4LjY4NEMxNDYuODgzIDMwOS4wMzMgMTUyLjIyNyAzMDkuNDY0IDE1Ny41ODEgMzA5LjY4MkMxNjMuMjYyIDMwOS45MTMgMTY4Ljk1MiAzMDkuOTE3IDE3NC42MzggMzEwLjA1OEMxNzcuMDk4IDMxMC4xMTkgMTc5LjU1OCAzMTAuMjcxIDE4Mi4wMTcgMzEwLjM5MUMxODYuNTc4IDMxMC42MTQgMTkxLjEzNyAzMTAuOTQ3IDE5NS43MDEgMzExLjA0OUMyMDQuMjUzIDMxMS4yNCAyMTIuODA4IDMxMS4zMTggMjIxLjM2MiAzMTEuNDA0QzIyNS45MDIgMzExLjQ1IDIzMC40NDMgMzExLjQ0MiAyMzQuOTg0IDMxMS40MDdDMjQ3LjgzOSAzMTEuMzA5IDI2MC42OTYgMzExLjI0IDI3My41NSAzMTEuMDQ5QzI4MC4xNDUgMzEwLjk1MSAyODYuNzM0IDMxMC41OTYgMjkzLjMyOCAzMTAuNDAxQzI5NS42OTcgMzEwLjMzMSAyOTguMDcgMzEwLjQyOSAzMDAuNDQxIDMxMC4zODFDMzA0LjUxNCAzMTAuMjk5IDMwOC41ODcgMzEwLjE3OCAzMTIuNjU5IDMxMC4wNDRDMzE1LjI0IDMwOS45NTkgMzE3LjgyIDMwOS44NTUgMzIwLjM5NyAzMDkuNzAyQzMyNS43NDYgMzA5LjM4NCAzMzEuMDk0IDMwOS4wMzEgMzM2LjQ0MiAzMDguNjg1QzMzOS44MDggMzA4LjQ2NiAzNDMuMTczIDMwOC4yMDcgMzQ2LjU0MSAzMDguMDExQzM1MC44NjIgMzA3Ljc1OCAzNTUuMTg2IDMwNy41NzggMzU5LjUwNiAzMDcuMzEzQzM2Mi4zMzggMzA3LjEzOCAzNjUuMTggMzA2Ljk3OSAzNjcuOTg5IDMwNi42MTZDMzcyLjU0NSAzMDYuMDI4IDM3Ny4wODUgMzA1LjMyMiAzODEuNjE4IDMwNC41ODRDMzg2LjU3MiAzMDMuNzc4IDM5MS40ODYgMzAyLjg4OSAzOTYuMTczIDMwMC45NzNDMzk3Ljg4MyAzMDAuMjc0IDM5Ny4xMiAyOTkuNzc4IDM5Ni4zOTUgMjk5LjQxMUMzOTQuODQzIDI5OC42MjYgMzkzLjE1NiAyOTguMDgyIDM5MS4xNjYgMjk3LjQ0Wk0xNDAuNTkyIDMxMi43NzZDMTQ0LjI1NiAzMTMuMDAzIDE0Ny45MTkgMzEzLjI1NiAxNTEuNTg1IDMxMy40NTFDMTU2LjMyMyAzMTMuNzA0IDE2MS4wNjMgMzEzLjkzNiAxNjUuODA1IDMxNC4xMzNDMTcxLjkxOCAzMTQuMzg2IDE3OC4wMzMgMzE0LjU5MiAxODQuMTQ3IDMxNC44MjFDMTg3LjA4NSAzMTQuOTMxIDE5MC4wMjEgMzE1LjA4IDE5Mi45NiAzMTUuMTU1QzE5OC40MDYgMzE1LjI5MiAyMDMuODU0IDMxNS40OTkgMjA5LjI5OSAzMTUuNDgyQzIyOC43ODYgMzE1LjQxOSAyNDguMjcxIDMxNS4yOTMgMjY3Ljc1NyAzMTUuMTVDMjczLjY4MiAzMTUuMTA3IDI3OS42MDYgMzE0Ljk0NiAyODUuNTMgMzE0LjgxNkMyODkuNzIzIDMxNC43MjQgMjkzLjkxNSAzMTQuNTk2IDI5OC4xMDcgMzE0LjQ3OUMzMDYuMTkzIDMxNC4yNTQgMzE0LjI3OCAzMTQuMDI4IDMyMi4zNjMgMzEzLjc5N0MzMjYuMDc4IDMxMy42OTEgMzI5Ljc5MiAzMTMuNTcgMzMzLjUwNiAzMTMuNDU4QzMzMy43NDUgMzEzLjQ1MSAzMzMuOTg2IDMxMy40NzUgMzM0LjIyMiAzMTMuNDU1QzMzOS4yODIgMzEzLjAwNCAzNDQuMzM5IDMxMi41MjQgMzQ5LjQwMiAzMTIuMTAzQzM1Mi43MDMgMzExLjgyOSAzNTYuMDI1IDMxMS43NDEgMzU5LjMxNyAzMTEuMzlDMzY0Ljk0MyAzMTAuNzkgMzcwLjUzNyAzMDkuNzc3IDM3Ni4xNzcgMzA5LjQ0OUMzODEuMjIyIDMwOS4xNTUgMzg2LjA2NiAzMDguMTQyIDM5MC44OSAzMDYuOTMzQzM5Mi4zNTEgMzA2LjU2NyAzOTQuMTYyIDMwNi43MTcgMzk1LjE0OCAzMDUuMjI0QzM5NS4zNzYgMzA0Ljg4IDM5NS40NzEgMzA0LjQ1NSAzOTUuNjI3IDMwNC4wNjdDMzk1LjE4NCAzMDQuMDQ2IDM5NC42ODkgMzAzLjg5IDM5NC4zMDYgMzA0LjAyNEMzODcuOTg4IDMwNi4yMzEgMzgxLjI5NyAzMDYuNjM2IDM3NC43MzggMzA3LjYyQzM3MC4xOTQgMzA4LjMwMiAzNjUuNTgzIDMwOC41ODIgMzYxLjAwMSAzMDkuMDI1QzM1Ni4xODIgMzA5LjQ5IDM1MS4zNjYgMzEwLjAxNCAzNDYuNTM4IDMxMC4zNjhDMzQxLjk4NiAzMTAuNzAxIDMzNy40MTkgMzEwLjg1OCAzMzIuODU4IDMxMS4wNjdDMzI5LjgwMiAzMTEuMjA2IDMyNi43NDIgMzExLjI2OCAzMjMuNjg3IDMxMS40MkMzMTkuNzgyIDMxMS42MTUgMzE1Ljg4MiAzMTEuOTEyIDMxMS45NzUgMzEyLjA4NEMzMDUuOTIyIDMxMi4zNTEgMjk5Ljg2OSAzMTIuNjU2IDI5My44MTIgMzEyLjc1M0MyODEuOTc0IDMxMi45NDQgMjcwLjEzNSAzMTMuMDA0IDI1OC4yOTYgMzEzLjExNUMyNTcuMiAzMTMuMTI2IDI1Ni4xMDQgMzEzLjEyNSAyNTUuMDA5IDMxMy4xMTZDMjQxLjY3NiAzMTMuMDA0IDIyOC4zNDMgMzEyLjkwOCAyMTUuMDExIDMxMi43NjdDMjA5LjUwNCAzMTIuNzA4IDIwMy45OTggMzEyLjU2MSAxOTguNDkyIDMxMi40MzJDMTg5LjY4OSAzMTIuMjI2IDE4MC44NzggMzEyLjgzMiAxNzIuMDc3IDMxMS44MTdDMTY3LjA4MiAzMTEuMjQgMTYyLjAwOCAzMTEuMjkgMTU2Ljk2OCAzMTEuMDc1QzE1My44NTIgMzEwLjk0MyAxNTAuNzMzIDMxMC44NzggMTQ3LjYxOCAzMTAuNzIyQzE0My43NzMgMzEwLjUzMSAxMzkuOTI5IDMxMC4zMDEgMTM2LjA4NyAzMTAuMDQzQzEzMS4zOTQgMzA5LjcyOCAxMjYuNzAyIDMwOS40MDMgMTIyLjAxNiAzMDkuMDE1QzExOC42MzQgMzA4LjczNSAxMTUuMjYxIDMwOC4zNjEgMTExLjg4NiAzMDguMDAxQzEwNi42OTYgMzA3LjQ0NiAxMDEuNTIxIDMwNi41NzMgOTYuMzE2IDMwNi4zNzZDODkuODg1NiAzMDYuMTMzIDgzLjkzNjggMzA0LjE5OCA3Ny44Nzg0IDMwMi41NTRDNzcuNjcyOCAzMDIuNDk5IDc3LjMyNzIgMzAyLjM5OSA3Ny4yNjU2IDMwMi40NzdDNzcuMTI2NCAzMDIuNjUzIDc2Ljk5OTIgMzAyLjk5MyA3Ny4wODk2IDMwMy4xNDhDNzcuMzI2NCAzMDMuNTUxIDc3LjYwNTYgMzA0LjA1NiA3OC4wMDU2IDMwNC4yMjZDNzkuNTE2IDMwNC44NjcgODEuMDM1MiAzMDUuNjA0IDgyLjYzNTIgMzA1LjkxOEM4Ni43MzIgMzA2LjcyNCA5MC44NzQ0IDMwNy4zMTkgOTQuOTk3NiAzMDguMDA1Qzk5LjA2MjQgMzA4LjY4MiAxMDMuMTA4IDMwOS40OTUgMTA3LjE5NSAzMTAuMDEzQzExMS4yMDUgMzEwLjUyMSAxMTUuMjU2IDMxMC43MzcgMTE5LjI5IDMxMS4wNjhDMTIwLjkxMiAzMTEuMjAxIDEyMi41MzggMzExLjI4MSAxMjQuMTU5IDMxMS40MTZDMTI5LjUxOCAzMTEuODYyIDEzNC44NzUgMzEyLjMyMiAxNDAuNTkyIDMxMi43NzZaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMTI2Ljc5OSAyODkuMzY3QzEyNi43OTkgMjkyLjA5OCAxMjIuNjM4IDI5NC42OTEgMTE3Ljk5OSAyOTQuNjkxQzExMy4zNiAyOTQuNjkxIDEwOS4xOTkgMjkyLjA5OCAxMDkuMTk5IDI4OS4zNjdDMTA5LjE5OSAyODYuNjM3IDEwNy41OTkgMjc5LjEgMTE4LjM5OSAyODEuMzgxQzEyNy45OTkgMjgxLjAwMSAxMjYuNzk5IDI4Ni42MzcgMTI2Ljc5OSAyODkuMzY3WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0xMzAuODE5IDI4Ny42NTRDMTI4Ljg1OSAyODguNTA2IDEyOC4yNzQgMjkwLjAyMiAxMjcuMzU2IDI5MS42OEMxMjYuMDE5IDI5NC4wOTQgMTIzLjM5MSAyOTUuNzczIDEyMC4wNCAyOTUuNjY3QzExNi44NjggMjk1LjU2NyAxMTMuNjc0IDI5NS45MTMgMTEwLjcxMSAyOTQuMzI4QzEwOS4xMDkgMjkzLjQ3IDEwNy45NzggMjkyLjA3NyAxMDcuODM2IDI5MC42MzFDMTA3LjYxOCAyODguNDExIDEwNy45NjEgMjg2LjA3MiAxMDguNDkgMjgzLjg3NkMxMDguOTkyIDI4MS43OTYgMTExLjA2NSAyODAuOTQ5IDExMy4wMjcgMjgwLjU0NUMxMTYuNzQyIDI3OS43ODEgMTIwLjQ4MSAyNzkuOTg1IDEyNC4wODkgMjgxLjIwMUMxMjQuOTAxIDI4MS40NzQgMTI1LjU1IDI4Mi4xNjEgMTI2LjM0MiAyODIuNTIyQzEyNy4wMDggMjgyLjgyNiAxMjcuODkgMjgzLjI1NSAxMjguNDcxIDI4My4wNjVDMTI5Ljc2NCAyODIuNjQyIDEzMS4wMjEgMjgxLjgyOCAxMzIuMTE4IDI4My4xNDdDMTMzLjA0NCAyODQuMjYxIDEzMi40OTEgMjg2LjA2MiAxMzEuMDMyIDI4Ny40NTFDMTMwLjk5IDI4Ny40OSAxMzAuOTQ5IDI4Ny41MyAxMzAuODE5IDI4Ny42NTRaTTEwOS40ODcgMjkwLjA5M0MxMTAuMDkyIDI5MC45MzUgMTEwLjUwNCAyOTIuMDYzIDExMS4zMzUgMjkyLjU2OEMxMTQuNzM1IDI5NC42MzkgMTE4LjU2NCAyOTQuMzQ5IDEyMi4yMjIgMjkzLjU1OUMxMjUuNTM4IDI5Mi44NDQgMTI3LjI0MyAyODkuMjIzIDEyNS44MzkgMjg2LjUyMUMxMjUuNTM3IDI4NS45MzkgMTI0LjY3NSAyODUuMzg1IDEyMy45OTEgMjg1LjI3NkMxMjMuMDgzIDI4NS4xMzIgMTIyLjA3NiAyODUuNjEzIDEyMS4xNDYgMjg1LjUxN0MxMTguMDcgMjg1LjIwMiAxMTUuMDEyIDI4NC43MTcgMTExLjkzOCAyODQuMzc0QzExMS4yNzkgMjg0LjMgMTEwLjA3MyAyODQuNDAyIDEwOS45ODQgMjg0LjY3NkMxMDkuNDU2IDI4Ni4zMTIgMTA4LjYyNSAyODcuOTgyIDEwOS40ODcgMjkwLjA5M1pNMTIxLjM0OCAyODIuMTg0QzExOC42ODIgMjgyLjE4NCAxMTYuMDE3IDI4Mi4xNzIgMTEzLjM1MiAyODIuMjAzQzExMy4xMjQgMjgyLjIwNiAxMTIuODk5IDI4Mi40OSAxMTIuNjc0IDI4Mi42NDRDMTEyLjkyNyAyODIuODI3IDExMy4xNzIgMjgzLjE1NyAxMTMuNDM1IDI4My4xNzFDMTE2LjI4NSAyODMuMzE5IDExOS4xMzcgMjgzLjQ1NSAxMjEuOTkgMjgzLjUwOUMxMjIuODk0IDI4My41MjUgMTIzLjgwNCAyODMuMjg5IDEyNC43MTEgMjgzLjE2OUMxMjMuNzY3IDI4Mi44NDEgMTIyLjgyMyAyODIuNTExIDEyMS44NzggMjgyLjE4NkMxMjEuODI2IDI4Mi4xNjggMTIxLjc2MSAyODIuMTg0IDEyMS4zNDggMjgyLjE4NFpNMTMwLjU1NCAyODQuMjAzQzEyOS43NTEgMjg0LjYzIDEyOC42MzEgMjg0Ljg4MSAxMjguMjM3IDI4NS41MzJDMTI3Ljg1MyAyODYuMTY0IDEyOC4yMTEgMjg3LjIwNSAxMjguMjQ0IDI4OC4wNjdDMTI4LjY1NCAyODcuNjgyIDEyOS4wNjQgMjg3LjI5OCAxMjkuNDczIDI4Ni45MTNDMTI5Ljg0NCAyODYuNTYyIDEzMC4zMzggMjg2LjI2NiAxMzAuNTQ3IDI4NS44NDNDMTMwLjc1NyAyODUuNDE4IDEzMC42ODEgMjg0Ljg2NyAxMzAuNTU0IDI4NC4yMDNaXCIgZmlsbD1cImJsYWNrXCIvPlxyXG48cGF0aCBkPVwiTTExNC4wOSAzMDAuMzZDMTEyLjEyNCAzMDAuMDA2IDExMC4yNzcgMjk5LjgwNCAxMDguNTczIDI5OS4yMjVDMTA3Ljg1MiAyOTguOTc5IDEwNi4yNSAyOTguNzE4IDEwNi45OTIgMjk3LjE4MUMxMDcuNjQgMjk1LjgzNyAxMDkuMDE0IDI5NS4yNzYgMTEwLjI0OSAyOTUuODkxQzExMC41MjIgMjk2LjAyNyAxMTAuNjg4IDI5Ni4zNTggMTEwLjkwMyAyOTYuNTk5QzExMC42NTQgMjk2LjczMSAxMTAuMzk3IDI5Ni44NTEgMTEwLjE1NyAyOTYuOTk3QzEwOS44MDkgMjk3LjIwOSAxMDkuNDc0IDI5Ny40MzkgMTA5LjEzMyAyOTcuNjYyQzEwOS40NSAyOTcuNzk3IDEwOS43NTUgMjk3Ljk5OCAxMTAuMDg3IDI5OC4wNThDMTEzLjM0OSAyOTguNjQ1IDExNi41OTUgMjk4Ljk4MSAxMTkuOTM0IDI5OC4zOTdDMTIxLjU4NSAyOTguMTA5IDEyMy4zMzkgMjk4LjM4MiAxMjUuMDQ0IDI5OC4zMjdDMTI2LjExNyAyOTguMjkxIDEyNy4xOTMgMjk3Ljk4NyAxMjguMjUyIDI5OC4wNDlDMTI4Ljk3IDI5OC4wOTEgMTI5LjY2MiAyOTguNTU5IDEzMC4zNjYgMjk4LjgzNUMxMjkuNzkgMjk5LjExOSAxMjkuMjI4IDI5OS42MTggMTI4LjYzNSAyOTkuNjUzQzEyMy44NDkgMjk5LjkzOCAxMTkuMDU3IDMwMC4xMzYgMTE0LjA5IDMwMC4zNlpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbjxwYXRoIGQ9XCJNMjY0LjQ0NiA0NDYuNzExQzI1OC45MSA0NDYuMjU3IDI1My41NTQgNDQ1Ljc3NSAyNDguMTk0IDQ0NS4zNkMyNDUuODAxIDQ0NS4xNzUgMjQzLjM5NyA0NDUuMSAyNDAuOTk2IDQ0NS4wMTJDMjM3LjQwMiA0NDQuODggMjMzLjgwNiA0NDQuODAzIDIzMC4yMTQgNDQ0LjY2MUMyMjQuOTk1IDQ0NC40NTUgMjE5Ljc4IDQ0NC4xMSAyMTQuNTYgNDQ0LjAxMUMyMDguNTA5IDQ0My44OTcgMjAyLjQ1MyA0NDMuOTQ2IDE5Ni40IDQ0My45OTNDMTg1LjYzNyA0NDQuMDc2IDE3NC44NzQgNDQ0LjE5MyAxNjQuMTEyIDQ0NC4zMzZDMTYwLjg3NSA0NDQuMzc5IDE1Ny42NDEgNDQ0LjU4MSAxNTQuNDA0IDQ0NC42NTdDMTUyLjIzNCA0NDQuNzA4IDE1MC4wNjIgNDQ0LjcwNyAxNDcuODkxIDQ0NC42NTdDMTQ0LjQ3NSA0NDQuNTc4IDE0MS4wNjIgNDQ0LjQxMiAxMzcuNjQ2IDQ0NC4zMzFDMTMxLjg0MiA0NDQuMTk2IDEyNi4wMzggNDQ0LjA1OSAxMjAuMjMyIDQ0My45OTdDMTE1LjA3NSA0NDMuOTQgMTA5Ljg4NSA0NDQuMzIyIDEwNC43NyA0NDMuODc5QzEwMC41NjMgNDQzLjUxNSA5Ni40NzA0IDQ0Mi4wOTIgOTIuMjggNDQxLjM5N0M4OS45ODggNDQxLjAxNyA4OC4yODQgNDM5Ljk4NSA4Ny4wMjg4IDQzOC4zMDJDODUuMjY1NiA0MzUuOTM5IDg2Ljc3NTIgNDMyLjEzOSA4OS45NDQgNDMwLjY1NEM5Mi4zNjE2IDQyOS41MjEgOTQuNzczNiA0MjguNjQ4IDk3LjQ5NiA0MjguNjMyQzk4LjE2NCA0MjguNjI5IDk4LjgyOTYgNDI4LjMzMiA5OS40OTg0IDQyOC4zMjRDMTAyLjMyNiA0MjguMjg2IDEwNS4xNTYgNDI4LjI1OSAxMDcuOTggNDI4LjM1OUMxMDguNDEgNDI4LjM3NSAxMDkuMDA3IDQyOS4wMTMgMTA5LjE4NiA0MjkuNDgyQzEwOS41NjEgNDMwLjQ1OSAxMDguNzI4IDQzMC40MTggMTA4LjA4MiA0MzAuMzQ0QzEwNi4zMjYgNDMwLjE0MSAxMDQuNTgxIDQyOS43OCAxMDIuODIxIDQyOS43MDdDMTAxLjMyNiA0MjkuNjQ1IDk5Ljc3MzYgNDI5LjcyOCA5OC4zMjE2IDQzMC4wNUM5NS44OTQ0IDQzMC41ODggOTMuNDY4OCA0MzEuMjI4IDkxLjE1MzYgNDMyLjA5NEM4OS40OTIgNDMyLjcxNSA4OC4zNzc2IDQzMy45MzcgODguNDA0IDQzNS44OTZDODguNDI4OCA0MzcuNjU0IDg5LjM5MjggNDM4LjcwOCA5MC45NDg4IDQzOS4xODRDOTQuNTkzNiA0NDAuMjk5IDk4LjI5MTIgNDQxLjI2IDEwMS45NyA0NDIuMjc1QzEwMi4xMzUgNDQyLjMyIDEwMi4zMjYgNDQyLjI3OCAxMDIuNTA2IDQ0Mi4yODFDMTA4Ljg0OCA0NDIuMzk0IDExNS4xOSA0NDIuNTg5IDEyMS41MzIgNDQyLjU5NkMxMjYuOTE4IDQ0Mi42MDMgMTMyLjM1NCA0NDEuOTAxIDEzNy42ODEgNDQyLjM4NkMxNDcuOTI2IDQ0My4zMTkgMTU4LjE2MSA0NDIuNzY1IDE2OC4zOTcgNDQyLjkzNUMxNzIuMDA5IDQ0Mi45OTQgMTc1LjYyNiA0NDIuNzE4IDE3OS4yNDIgNDQyLjYyOUMxODAuOTkzIDQ0Mi41ODYgMTgyLjc0NyA0NDIuNjM1IDE4NC40OTkgNDQyLjYxOUMxOTYuMjE4IDQ0Mi41MSAyMDcuOTM2IDQ0Mi4zMTggMjE5LjY1NCA0NDIuMzE4QzIyNC4zMzQgNDQyLjMxOCAyMjkuMDE1IDQ0Mi43MTQgMjMzLjY5NCA0NDIuOTY5QzIzNy4yNDEgNDQzLjE2MiAyNDAuNzg0IDQ0My40MTIgMjQ0LjMyOSA0NDMuNjQ1QzI0OS40MzcgNDQzLjk4MSAyNTQuNTQ4IDQ0NC4yODUgMjU5LjY1MiA0NDQuNjhDMjYzLjA5NCA0NDQuOTQ3IDI2Ni41MzUgNDQ1LjI3MyAyNjkuOTU3IDQ0NS43MDlDMjczLjcyNCA0NDYuMTg4IDI3Ny40NjYgNDQ2Ljg1MiAyODEuMjI2IDQ0Ny4zODJDMjgzLjI2OCA0NDcuNjY5IDI4NS4zMjYgNDQ3Ljg1MyAyODcuMzc5IDQ0OC4wNzNDMjkxLjY2MSA0NDguNTMyIDI5NS45MzQgNDQ5LjA4OSAzMDAuMjI4IDQ0OS40QzMwMy4wMTkgNDQ5LjYwMSAzMDUuODQ0IDQ0OS4zNDkgMzA4LjY0NyA0NDkuNDU0QzMxNi4zODYgNDQ5Ljc0NiAzMjQuMTE4IDQ1MC4yNjcgMzMxLjg1OCA0NTAuNDAzQzMzNi40MTMgNDUwLjQ4NCAzNDAuOTc5IDQ1MC4wMiAzNDUuNTM4IDQ0OS43NzRDMzQ5LjMyMyA0NDkuNTY5IDM1My4xMTggNDQ5LjQ0IDM1Ni44ODYgNDQ5LjA2NkMzNjEuMzEzIDQ0OC42MjggMzY1LjczNiA0NDguMDgzIDM3MC4xMTggNDQ3LjM1NUMzNzMuODA4IDQ0Ni43NDIgMzc3LjUzOCA0NDYuMDggMzgxLjA1OCA0NDQuOTE0QzM4My41ODcgNDQ0LjA3NiAzODYuMTIzIDQ0Mi43MDcgMzg4LjA4NCA0NDAuOTg1QzM5MS45MTIgNDM3LjYyNiAzOTAuNjE4IDQzNC4zOTEgMzg3LjEyNiA0MzIuMTM2QzM4My4xMjEgNDI5LjU1IDM3OC42OTQgNDI3LjU5OSAzNzMuNjcxIDQyNy4yNkMzNzAuNTg1IDQyNy4wNTMgMzY3LjUxMyA0MjYuNjIxIDM2NC40NDIgNDI2LjIzMkMzNjQuMTc4IDQyNi4xOTkgMzYzLjc1NyA0MjUuNjk0IDM2My43OTUgNDI1LjQ2OEMzNjMuODUxIDQyNS4xMzcgMzY0LjI3NyA0MjQuNTg1IDM2NC41MSA0MjQuNjAxQzM2Ny4zMzIgNDI0Ljc4OSAzNzAuMTYgNDI0Ljk3NiAzNzIuOTYxIDQyNS4zNDRDMzc1LjE4MyA0MjUuNjM2IDM3Ny40OTggNDI1Ljg3NSAzNzkuNTQ1IDQyNi42NjdDMzgzLjY2MiA0MjguMjYxIDM4Ny45ODQgNDI5LjYyOSAzOTAuNzcgNDMzLjM1M0MzOTMuMTk5IDQzNi42IDM5Mi4xMDMgNDM5LjMxNCAzODkuOTEyIDQ0MS42OTVDMzg2LjcxNCA0NDUuMTcxIDM4Mi4yODIgNDQ2Ljc0NyAzNzcuNjg2IDQ0Ny42OTFDMzcyLjg3OCA0NDguNjc4IDM2OC4wMDUgNDQ5LjM5MSAzNjMuMTM5IDQ1MC4wOTJDMzYwLjUxNSA0NTAuNDcgMzU3Ljg1IDQ1MC42NDMgMzU1LjE5NyA0NTAuNzg2QzM1MC4wNDIgNDUxLjA2NCAzNDQuODgzIDQ1MS4yNzQgMzM5LjcyNCA0NTEuNDc3QzMzMy40MzIgNDUxLjcyNSAzMjcuMDg4IDQ1Mi41MDggMzIwLjg2MSA0NTIuMDA1QzMxNC40ODYgNDUxLjQ5IDMwOC4xMzkgNDUxLjI0OCAzMDEuNzYgNDUxLjA5NkMyOTcuNzIgNDUxIDI5My42OCA0NTAuNTU5IDI4OS42NjMgNDUwLjA5QzI4NS45NSA0NDkuNjU3IDI4Mi4yNzcgNDQ4LjkzNiAyNzguNTcyIDQ0OC40MzJDMjc2LjIzNSA0NDguMTE0IDI3My44NjggNDQ4LjAwNiAyNzEuNTI2IDQ0Ny43MkMyNjkuMjE4IDQ0Ny40MzkgMjY2LjkyNSA0NDcuMDUyIDI2NC40NDYgNDQ2LjcxMVpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zNjIuNjY4IDQzMS43MTZDMzYyLjY2OCA0MzIuOTY1IDM2Mi42NzEgNDM0LjA0NCAzNjIuNjY3IDQzNS4xMjRDMzYyLjY2MiA0MzYuNzU4IDM2MS4yOTcgNDM3Ljg5NCAzNTkuMzk0IDQzNy44NUMzNTcuNzQ2IDQzNy44MTMgMzU2LjU2MSA0MzYuNzc1IDM1Ni41OSA0MzUuMjA0QzM1Ni42NTcgNDMxLjcxIDM1Ni44OTggNDI4LjIxNiAzNTYuOTA2IDQyNC43MjJDMzU2LjkxNCA0MjEuODE3IDM1Ni42MzggNDE4LjkxMSAzNTYuNTg4IDQxNi4wMDRDMzU2LjUyOCA0MTIuNTAyIDM1Ni41NzQgNDA4Ljk5OCAzNTYuNTc0IDQwNS40OTRDMzU2LjU3NCA0MDUuMDk3IDM1Ni41NzQgNDA0LjY5OSAzNTYuNTc0IDQwNC4zMDFDMzU2LjU3NCA0MDAuMTU1IDM1Ni42MTQgMzk2LjAwOSAzNTYuNTU4IDM5MS44NjRDMzU2LjUyNyAzODkuNTgxIDM1Ni4yMzkgMzg3LjMwMSAzNTYuMjMyIDM4NS4wMTlDMzU2LjE5NSAzNzQuMTUyIDM1Ni4yMTYgMzYzLjI4NSAzNTYuMjE2IDM1Mi40MThDMzU2LjIxNiAzNDAuNTEgMzU2LjIxNiAzMjguNjAxIDM1Ni4yMTYgMzE2LjY5MkMzNTYuMjE2IDMxNi4yOTUgMzU2LjA4MSAzMTUuODI5IDM1Ni4yNTQgMzE1LjUxOEMzNTYuNDI2IDMxNS4yMDYgMzU2LjkwNiAzMTUuMDQ3IDM1Ny4yNSAzMTQuODIxQzM1Ny4zODMgMzE1LjA2OCAzNTcuNjMgMzE1LjMxNSAzNTcuNjMyIDMxNS41NjNDMzU3LjY1NyAzMTkuMjc0IDM1Ny42MDUgMzIyLjk4NiAzNTcuNjY1IDMyNi42OTZDMzU3LjcwNyAzMjkuMzU4IDM1Ny45NTIgMzMyLjAxOCAzNTcuOTkzIDMzNC42OEMzNTguMDUyIDMzOC41NjEgMzU4LjA0MSAzNDIuNDQzIDM1Ny45OTEgMzQ2LjMyNEMzNTcuOTczIDM0Ny44MzEgMzU3LjY5IDM0OS4zMzUgMzU3LjY3NSAzNTAuODQyQzM1Ny42NjUgMzUxLjk4NiAzNTcuOTkxIDM1My4xMzMgMzU3Ljk5MyAzNTQuMjc5QzM1OC4wMTQgMzc0LjA5OSAzNTguMDA4IDM5My45MiAzNTguMDA4IDQxMy43NDFDMzU4LjAwOCA0MjAuNTc2IDM1OC4wMDYgNDI3LjQxIDM1OC4wMSA0MzQuMjQ1QzM1OC4wMTEgNDM0Ljk0NyAzNTcuNzk5IDQzNS43MTEgMzU5LjAwOCA0MzUuODMyQzM2MC4xNDggNDM1Ljk0NiAzNjAuNTg4IDQzNS4zNDcgMzYwLjg1NiA0MzQuNTE4QzM2MC45NzQgNDM0LjE1NSAzNjAuODc2IDQzMy43MjkgMzYwLjg3NiA0MzMuMzMxQzM2MC44NzYgNDMxLjExNiAzNjAuODYzIDQyOC45MDEgMzYwLjg3OCA0MjYuNjg2QzM2MC45OTQgNDA5LjE4NCAzNjEuMTI2IDM5MS42ODIgMzYxLjIxNyAzNzQuMThDMzYxLjIyNiAzNzIuMzU0IDM2MC44ODkgMzcwLjUyNSAzNjAuOTAyIDM2OC42OTlDMzYwLjkxOSAzNjYuMTMzIDM2MS4yMDIgMzYzLjU2OCAzNjEuMjA4IDM2MS4wMDJDMzYxLjIxNCAzNTguNzIxIDM2MC44NzggMzU2LjQzOSAzNjAuODk4IDM1NC4xNThDMzYwLjk1MSAzNDguMDcxIDM2MS4wOTUgMzQxLjk4NCAzNjEuMjQ0IDMzNS44OThDMzYxLjMwNiAzMzMuMzUgMzYxLjU4MiAzMzAuODAzIDM2MS41NjcgMzI4LjI1NUMzNjEuNTQ0IDMyNC4zMjYgMzYxLjM0MiAzMjAuMzk5IDM2MS4yNDYgMzE2LjQ3QzM2MS4yMyAzMTUuODAzIDM2MC45NDMgMzE0Ljc3MyAzNjIuMTQgMzE0Ljg2OEMzNjMuMDM5IDMxNC45MzkgMzYzLjY5OSAzMTUuNDg5IDM2My4wNTQgMzE2LjU2OUMzNjIuODc0IDMxNi44NyAzNjMuMDQyIDMxNy4zNSAzNjMuMDI0IDMxNy43NDdDMzYyLjkxIDMyMC40MjYgMzYyLjcwNiAzMjMuMTA1IDM2Mi42OTQgMzI1Ljc4NEMzNjIuNjg1IDMyNy45MTUgMzYyLjk4MiAzMzAuMDQ1IDM2My4wMDEgMzMyLjE3NkMzNjMuMDE0IDMzMy42ODEgMzYyLjcyIDMzNS4xODYgMzYyLjY5MyAzMzYuNjk0QzM2Mi42NzcgMzM3LjYxIDM2My4wMDYgMzM4LjUzIDM2My4wMSAzMzkuNDQ5QzM2My4wNDIgMzQ1LjYzOSAzNjMuMDU4IDM1MS44MyAzNjMuMDEgMzU4LjAyQzM2Mi45OTMgMzYwLjMwMiAzNjIuNjk0IDM2Mi41ODMgMzYyLjY5NCAzNjQuODY0QzM2Mi42OTQgMzY3LjE0NiAzNjMuMDIzIDM2OS40MjggMzYzLjAwNyAzNzEuNzA5QzM2Mi45MzIgMzgyLjM5NiAzNjIuNzUzIDM5My4wODMgMzYyLjY5IDQwMy43NjlDMzYyLjY3IDQwNi45MjIgMzYzLjAyMSA0MTAuMDc2IDM2My4wMDIgNDEzLjIyOEMzNjIuOTY2IDQxOS4zMzQgMzYyLjc4OCA0MjUuNDM5IDM2Mi42NjggNDMxLjcxNlpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0yMTcuMTI3IDQyNy45NjdDMjEyLjUxOCA0MjguMDggMjA4LjA4NiA0MjguMTUgMjAzLjY1OCA0MjguMzJDMTk5LjE1NyA0MjguNDkyIDE5NC42NiA0MjguNzgxIDE5MC4xNTggNDI4Ljk4NEMxODQuNjQ1IDQyOS4yMzIgMTc5LjEzIDQyOS40NTcgMTczLjYxNCA0MjkuNjY2QzE2OS45NjIgNDI5LjgwNCAxNjYuMjk0IDQyOS43NTcgMTYyLjY1NyA0MzAuMDQ1QzE1Ny4wNCA0MzAuNDg4IDE1MS40NDMgNDMxLjE1IDE0NS44MzcgNDMxLjcxQzE0NS40MjMgNDMxLjc1MSAxNDUuMDAxIDQzMS43MTUgMTQ0LjU4MyA0MzEuNzE1QzEzOS4wODkgNDMxLjcxNSAxMzMuNTkgNDMxLjgxOCAxMjguMTAxIDQzMS42NjlDMTI1LjYxMyA0MzEuNjAxIDEyMy4xMzMgNDMxLjA3MyAxMjAuNjY5IDQzMC42NTRDMTIwLjI3IDQzMC41ODYgMTE5Ljk2OCA0MjkuOTk3IDExOS42MjIgNDI5LjY0OUMxMjAuMDMzIDQyOS40MjkgMTIwLjQ3MSA0MjguOTg2IDEyMC44NSA0MjkuMDI4QzEyMi41OTIgNDI5LjIxNiAxMjQuMzE3IDQyOS41NDUgMTI2LjA1IDQyOS44MTVDMTI2LjU1NiA0MjkuODk0IDEyNy4wNjcgNDMwIDEyNy41NzcgNDMwLjAwM0MxMzEuMjIgNDMwLjAxOSAxMzQuODcyIDQzMC4xNjUgMTM4LjUwNCA0MjkuOTc4QzE0NS4wNjIgNDI5LjY0MiAxNTEuNjA4IDQyOS4xMDIgMTU4LjE1OSA0MjguNjUxQzE1OC40NTYgNDI4LjYzMSAxNTguNzU2IDQyOC42NTcgMTU5LjA1NCA0MjguNjQ3QzE2Mi43MDggNDI4LjUzNiAxNjYuMzYyIDQyOC40NDggMTcwLjAxNCA0MjguMzAxQzE3NC45OTMgNDI4LjEwMSAxNzkuOTk5IDQyOC4xMDMgMTg0Ljk0MSA0MjcuNTcyQzE5My45NzggNDI2LjYgMjAzLjAzIDQyNi42MjcgMjEyLjA5NCA0MjYuNTg4QzIyMy44NyA0MjYuNTM4IDIzNS42NTcgNDI2LjA1MyAyNDcuNDE3IDQyNi40MTRDMjUyLjUwMiA0MjYuNTcgMjU3LjYwNCA0MjcuMjk4IDI2Mi43NDMgNDI3LjMwOUMyNjguMzA4IDQyNy4zMTkgMjczLjg3NCA0MjcuNjM0IDI3OS40MzcgNDI3LjU4OEMyODMuODc4IDQyNy41NTEgMjg4LjMxNSA0MjcuMTI0IDI5Mi43NTggNDI2Ljk1NUMyOTkuODI0IDQyNi42ODcgMzA2Ljg5NiA0MjYuNTU2IDMxMy45NiA0MjYuMjQxQzMxOS4wNzMgNDI2LjAxMyAzMjQuMTc0IDQyNS41NjEgMzI5LjI4MyA0MjUuMjQ4QzMzMS45MTggNDI1LjA4OCAzMzQuNTYxIDQyNS4wNDQgMzM3LjE5NiA0MjQuODkzQzM0Mi43ODIgNDI0LjU3MyAzNDguMzcgNDI0LjI1NCAzNTMuOTUgNDIzLjg1MUMzNTUuMzM1IDQyMy43NTIgMzU1LjIyMiA0MjQuMjg1IDM1NC43NTkgNDI1LjA4QzM1NC42MiA0MjUuMzE4IDM1NC4yMjUgNDI1LjU0OCAzNTMuOTM2IDQyNS41NjFDMzUwLjcwMiA0MjUuNzA2IDM0Ny40NjYgNDI1LjgwOCAzNDQuMjMxIDQyNS45MjJDMzM3Ljc2IDQyNi4xNDkgMzMxLjIzNCA0MjUuOTY2IDMyNC44MzggNDI2Ljc0NEMzMjAuNDI5IDQyNy4yODEgMzE2LjA2NyA0MjcuNTk3IDMxMS42NDggNDI3LjY0MkMzMDkuOTY0IDQyNy42NTkgMzA4LjI4NCA0MjcuOTEzIDMwNi42IDQyNy45NTZDMzAwLjk3NiA0MjguMDk4IDI5NS4zNSA0MjguMTUgMjg5LjcyNyA0MjguMzJDMjg0LjAzMSA0MjguNDkxIDI3OC4zMzggNDI4Ljc1NSAyNzIuNjQ1IDQyOC45OTNDMjcwLjQ4MyA0MjkuMDgzIDI2OC4zMjMgNDI5LjMyNSAyNjYuMTY0IDQyOS4zMDdDMjYxLjk3MiA0MjkuMjczIDI1Ny43MTggNDI5LjUwNiAyNTMuNjAzIDQyOC45MTNDMjQxLjUyNCA0MjcuMTc0IDIyOS40IDQyOC4zNDggMjE3LjEyNyA0MjcuOTY3WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTIyOC44IDEzNS4zNTNMMjQxLjIgMTM1LjczNFYyMTUuOTczSDIzMEwyMjguOCAxMzUuMzUzWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0yMjguOTU2IDIwNC43NDJDMjI4LjgzNyAyMDMuODggMjI4LjYxNCAyMDMuMTg5IDIyOC42MTMgMjAyLjQ5OEMyMjguNTkyIDE4OS4yNjcgMjI4LjYxNCAxNzYuMDM3IDIyOC41ODIgMTYyLjgwNkMyMjguNTc3IDE2MC42OTYgMjI4LjI2OSAxNTguNTg2IDIyOC4yNTYgMTU2LjQ3NUMyMjguMjEyIDE0OS41ODUgMjI4LjI2OCAxNDIuNjk0IDIyOC4yMTMgMTM1LjgwNEMyMjguMjAyIDEzNC41NjEgMjI4LjU2MSAxMzQuMTI5IDIyOS45MDkgMTM0LjE2OEMyMzIuOTUyIDEzNC4yNTUgMjM2LjAwMiAxMzQuMjQzIDIzOS4wNDYgMTM0LjE3N0MyNDAuNzYzIDEzNC4xNCAyNDEuNzg3IDEzNC42MSAyNDEuODQyIDEzNi45ODhDMjQxLjkxOCAxNDAuMjggMjQxLjg2MiAxNDMuNTc1IDI0MS44NjIgMTQ2Ljg2OEMyNDEuODYyIDE1MC42OTIgMjQxLjg2MiAxNTQuNTE2IDI0MS44NjIgMTU4LjM0QzI0MS44NjIgMTYxLjU5NiAyNDEuODYyIDE2NC44NTIgMjQxLjg2MiAxNjguMTA4QzI0MS44NjIgMTcyLjU3NiAyNDEuODYyIDE3Ny4wNDQgMjQxLjg2MiAxODEuNTEyQzI0MS44NjIgMTg1LjYyIDI0MS45MDIgMTg5LjcyOCAyNDEuODUyIDE5My44MzVDMjQxLjc2NiAyMDAuODY5IDI0MS41NjggMjA3LjkwMSAyNDEuNTQzIDIxNC45MzRDMjQxLjUzOCAyMTYuNTczIDI0MC4zMjYgMjE2LjUzOSAyMzkuMzk0IDIxNi42MjZDMjM2LjgyOSAyMTYuODY1IDIzNC4yNDMgMjE2Ljk0NCAyMzEuNjYzIDIxNi45OTZDMjI5LjQzNCAyMTcuMDQxIDIyOC43MDkgMjE1Ljg0NyAyMjguODkyIDIxMy43MTJDMjI5LjA3MyAyMTEuNjAyIDIyOC42OSAyMDkuNDUyIDIyOC42NCAyMDcuMzE4QzIyOC42MjIgMjA2LjUxOCAyMjguODQ0IDIwNS43MTQgMjI4Ljk1NiAyMDQuNzQyWk0yMzAuMDMyIDE0OS4wMkMyMzAuMDMyIDE1My4xMjYgMjMwLjAwMiAxNTcuMjMyIDIzMC4wMzggMTYxLjMzOUMyMzAuMTQxIDE3My40OTUgMjMwLjI3MyAxODUuNjUxIDIzMC4zODggMTk3LjgwN0MyMzAuNDA2IDE5OS42OTkgMjMwLjM5IDIwMS41OTEgMjMwLjM5IDIwMy40ODRDMjMwLjM5IDIwNy4wMjMgMjMwLjQzNCAyMTAuNTYxIDIzMC4zNjUgMjE0LjA5OUMyMzAuMzQyIDIxNS4yNTIgMjMwLjY2MiAyMTUuNzc3IDIzMS45NDMgMjE1LjY1N0MyMzMuNjIxIDIxNS41MDEgMjM1LjMxMyAyMTUuNDc1IDIzNi45ODYgMjE1LjI5NEMyNDAuMDczIDIxNC45NjEgMjQwLjA2OSAyMTQuOTMgMjQwLjA2OSAyMTEuOTQ3QzI0MC4wNjkgMTk3LjQ1NCAyNDAuMDY5IDE4Mi45NjEgMjQwLjA2OSAxNjguNDY5QzI0MC4wNjkgMTU5LjE2IDI0MC4wNTkgMTQ5Ljg1MiAyNDAuMDg1IDE0MC41NDNDMjQwLjA4NyAxMzkuNjgyIDI0MC4yNzIgMTM4LjgxNSAyNDAuNDM1IDEzNy45NjFDMjQwLjc0NiAxMzYuMzI5IDI0MC40MTIgMTM1LjkwNSAyMzguNjk4IDEzNS45MDFDMjM2LjMxIDEzNS44OTUgMjMzLjkyMiAxMzUuOTMgMjMxLjUzNCAxMzUuODg3QzIzMC4xNzYgMTM1Ljg2MyAyMjkuNjIzIDEzNi40MjEgMjI5LjY2MSAxMzcuNjk1QzIyOS43MSAxMzkuMzU5IDIyOS42MjcgMTQxLjAyNyAyMjkuNjg1IDE0Mi42OUMyMjkuNzU0IDE0NC42ODggMjI5LjkxMiAxNDYuNjgzIDIzMC4wMzIgMTQ5LjAyWlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTE5OS42IDE1MC41NjRIMjA5LjZMMjEwLjggMjE1Ljk3M0gxOTkuNlYxNTAuNTY0WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0xOTkuNTYyIDE0OS44NzJDMjAwLjM0OSAxNDkuNzU5IDIwMC45NTIgMTQ5LjU3OSAyMDEuNTY0IDE0OS41NDNDMjA0LjAyIDE0OS40MDEgMjA2LjQ3OSAxNDkuMzAyIDIwOC45MzggMTQ5LjE5MUMyMTAuMDg3IDE0OS4xNCAyMTAuNjU2IDE0OS42MjkgMjEwLjY4NCAxNTAuNzYzQzIxMC43NzkgMTU0LjU3NSAyMTAuOTgxIDE1OC4zODcgMjExLjAwOSAxNjIuMjAxQzIxMS4wMjUgMTY0LjUgMjEwLjc1MSAxNjYuNzk5IDIxMC42OTggMTY5LjFDMjEwLjY3OCAxNjkuOTU5IDIxMS4wMTUgMTcwLjgyMiAyMTEuMDE4IDE3MS42ODNDMjExLjA0MyAxODAuNTk0IDIxMC45OTIgMTg5LjUwNyAyMTEuMDQ5IDE5OC40MThDMjExLjA4NCAyMDMuODIgMjExLjI4MiAyMDkuMjIyIDIxMS4zODYgMjE0LjYyNEMyMTEuNDE4IDIxNi4yNjkgMjEwLjY1IDIxNi45OSAyMDguODY4IDIxNy4wMDVDMjA2LjE4MiAyMTcuMDI3IDIwMy40OTMgMjE2Ljk1NSAyMDAuODA5IDIxNy4wMzVDMTk5LjU2NSAyMTcuMDcyIDE5OS4xODUgMjE2LjcwNiAxOTkuMTc4IDIxNS41MTJDMTk5LjA5NyAxOTkuMzk5IDE5OC45NzggMTgzLjI4NyAxOTguODMyIDE2Ny4xNzVDMTk4LjgxIDE2NC43MjQgMTk4LjU1NCAxNjIuMjc1IDE5OC41MDEgMTU5LjgyM0MxOTguNDQxIDE1Ny4wMDUgMTk4LjQ0MyAxNTQuMTgyIDE5OC41MjcgMTUxLjM2NEMxOTguNTQyIDE1MC44NTkgMTk5LjA4NCAxNTAuMzcgMTk5LjU2MiAxNDkuODcyWk0yMDAuMjc5IDE2OC4xMDVDMjAwLjI3OSAxNzMuNTIgMjAwLjIzOSAxNzguOTM1IDIwMC4yODggMTg0LjM0OUMyMDAuMzc3IDE5NC4zMTggMjAwLjUxOCAyMDQuMjg2IDIwMC42MzggMjE0LjI1NEMyMDAuNjQgMjE0LjQ4IDIwMC41MzkgMjE0Ljc5MSAyMDAuNjU4IDIxNC45MThDMjAwLjkyNyAyMTUuMjA5IDIwMS4zMDkgMjE1LjYyMSAyMDEuNjM2IDIxNS42MTNDMjAzLjg1OCAyMTUuNTY0IDIwNi4wNzcgMjE1LjM4OSAyMDguMjk5IDIxNS4zMTlDMjA5LjQ4OCAyMTUuMjgxIDIxMC4wMzMgMjE0Ljc1MyAyMDkuOTUgMjEzLjY1OUMyMDkuODY1IDIxMi41MTEgMjA5LjYzMiAyMTEuMzY5IDIwOS42MTQgMjEwLjIyMkMyMDkuNDY5IDIwMS40NjYgMjA5LjMxMyAxOTIuNzExIDIwOS4yNjQgMTgzLjk1NUMyMDkuMjQ0IDE4MC4zNDggMjA5LjU2NSAxNzYuNzQxIDIwOS41NzQgMTczLjEzM0MyMDkuNTgxIDE3MC4wOTQgMjA5LjMwMiAxNjcuMDU2IDIwOS4yNTYgMTY0LjAxNUMyMDkuMTk2IDE2MC4wOTcgMjA5LjIxMiAxNTYuMTc4IDIwOS4yNjEgMTUyLjI2QzIwOS4yNzQgMTUxLjI0NCAyMDguOTQyIDE1MC44MTEgMjA3Ljg1MiAxNTAuODg3QzIwNS44MTMgMTUxLjAyNyAyMDMuNzcgMTUxLjIwOSAyMDEuNzI5IDE1MS4yMDNDMjAwLjQ4OCAxNTEuMTk5IDIwMC4yNCAxNTEuNjgxIDIwMC4yNjIgMTUyLjcxM0MyMDAuMzE1IDE1NS4xMTcgMjAwLjI3OSAxNTcuNTIyIDIwMC4yNzkgMTU5LjkyN0MyMDAuMjc5IDE2Mi41MzkgMjAwLjI3OSAxNjUuMTUyIDIwMC4yNzkgMTY4LjEwNVpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0xNzAgMTY5LjU3OUgxODBMMTgxLjIgMjE1Ljk3M0gxNzBWMTY5LjU3OVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbjxwYXRoIGQ9XCJNMTgxLjI4IDE5My40OTVDMTgxLjM5OSAxOTkuNDYxIDE4MS41MjMgMjA1LjI1NiAxODEuNjM1IDIxMS4wNTJDMTgxLjY1OSAyMTIuMzE4IDE4MS41MDYgMjEzLjYwMiAxODEuNjcxIDIxNC44NDlDMTgxLjg4OCAyMTYuNDk2IDE4MC41NjEgMjE2LjU3NSAxNzkuNjIgMjE2LjYyMUMxNzYuODIzIDIxNi43NTYgMTc0LjAxMyAyMTYuNzE3IDE3MS4yMSAyMTYuNjQzQzE3MC4yIDIxNi42MTggMTY5LjM5MSAyMTYuMjM4IDE2OS40MjYgMjE0Ljk1QzE2OS41MDQgMjExLjk2MyAxNjkuNDc0IDIwOC45NzMgMTY5LjQ0NiAyMDUuOTg1QzE2OS4zMzcgMTk0LjE1NyAxNjkuMjA4IDE4Mi4zMyAxNjkuMDk1IDE3MC41MDJDMTY5LjA3NSAxNjguNDY4IDE2OS4yOSAxNjguMjc3IDE3MS4zOTEgMTY4LjI3NUMxNzMuODk3IDE2OC4yNzQgMTc2LjQwNCAxNjguMzE3IDE3OC45MDggMTY4LjI1OUMxODAuMzEzIDE2OC4yMjUgMTgwLjkyNyAxNjguNzA4IDE4MC45NDYgMTcwLjA5NEMxODAuOTczIDE3Mi4yMDMgMTgxLjI0NiAxNzQuMzEgMTgxLjI2MyAxNzYuNDJDMTgxLjMxMiAxODIuMDU0IDE4MS4yOCAxODcuNjkgMTgxLjI4IDE5My40OTVaTTE3OS44NDYgMTg0LjEyM0MxNzkuNzI2IDE4Mi4zNTMgMTc5LjU0NCAxODAuNTg0IDE3OS41MDIgMTc4LjgxM0MxNzkuNDQzIDE3Ni4yOTYgMTc5LjQ3NyAxNzMuNzc3IDE3OS40OTMgMTcxLjI2QzE3OS41IDE3MC4xNTYgMTc4Ljk3MSAxNjkuNTg0IDE3Ny44MDIgMTY5LjY0NEMxNzUuOTk5IDE2OS43MzYgMTc0LjE5NCAxNjkuOTkgMTcyLjM5OCAxNjkuOTRDMTcwLjkyMSAxNjkuOTAxIDE3MC40NjIgMTcwLjI5NCAxNzAuNDkzIDE3MS43MzhDMTcwLjY3OCAxODAuNTA5IDE3MC43ODkgMTg5LjI4MiAxNzAuODc1IDE5OC4wNTVDMTcwLjkyNiAyMDMuMTg1IDE3MC45IDIwOC4zMTQgMTcwLjg3IDIxMy40NDNDMTcwLjg2NCAyMTQuMzg1IDE3MS4wNTYgMjE1LjI2MiAxNzIuMTM4IDIxNS4yNjlDMTc0LjIzNyAyMTUuMjgyIDE3Ni4zNCAyMTQuOTcgMTc4LjQzOCAyMTUuMDAzQzE3OS44NTggMjE1LjAyNiAxODAuMjg2IDIxNC42MjIgMTgwLjIzMiAyMTMuMjc3QzE4MC4wNDIgMjA4LjU1OCAxNzkuOTE4IDIwMy44MzUgMTc5Ljg1OSAxOTkuMTEyQzE3OS43OTkgMTk0LjIzIDE3OS44NDYgMTg5LjM0NiAxNzkuODQ2IDE4NC4xMjNaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMTE2LjM5NCAyMDguMTVDMTE5LjQwMiAyMDkuMTcxIDEyMi4zMzggMjEwLjA0NSAxMjQuNDU1IDIxMi4yNTRDMTI3LjY1OSAyMTUuNTk2IDEyOC4zMzggMjE5LjU0MSAxMjcuNjI0IDIyMy45MkMxMjYuNTU0IDIzMC40ODQgMTIzLjE4MyAyMzYuMTQxIDEyMC4wOTggMjQxLjkxNkMxMTkuMTQgMjQzLjcwOSAxMTcuOTMgMjQ1LjM4MSAxMTYuODI0IDI0Ny4xMDJDMTE1LjQzOCAyNDkuMjU3IDExNC4xMTkgMjUxLjMxNiAxMTQuMTUzIDI1NC4wOTRDMTE0LjE5IDI1Ny4xODUgMTEzLjQzMiAyNjAuMjc3IDExMy4xOTQgMjYzLjM4MUMxMTIuOTQ3IDI2Ni42MiAxMTMuNzE2IDI2OS42OTggMTE1LjMgMjcyLjU5M0MxMTUuNTA0IDI3Mi45NjYgMTE1LjQ0OSAyNzMuNDY4IDExNS41MTQgMjczLjkxQzExNS4wOSAyNzMuNjUyIDExNC41NjIgMjczLjQ3NCAxMTQuMjYxIDI3My4xMjJDMTEyLjE3OCAyNzAuNjc5IDExMS42NTYgMjY3LjY3NCAxMTEuNDM2IDI2NC43MkMxMTEuMDk5IDI2MC4yMSAxMTEuNjMyIDI1NS43MDQgMTEyLjg2MiAyNTEuMzMzQzExMy4zMjYgMjQ5LjY4NiAxMTQuMjA2IDI0OC4wNzggMTE1LjIwNCAyNDYuNjQ4QzExOS44NDQgMjQwLjAwMiAxMjMuODAzIDIzMy4wNDQgMTI1LjY0MiAyMjUuMjExQzEyNi4yMzQgMjIyLjY5MSAxMjYuNzUgMjIwLjAzIDEyNS45MjkgMjE3LjM2MkMxMjQuNjc2IDIxMy4yOTUgMTIxLjUyNiAyMTEuMjE0IDExNy41MjggMjEwLjI0NkMxMTQuNTcxIDIwOS41MyAxMTEuNTAyIDIwOS4wNTIgMTA4LjQ1NyAyMDguODgzQzEwMy4wODIgMjA4LjU4NSA5Ny42NzEyIDIwOC44MTQgOTIuMzA3MiAyMDguNDI4Qzg3LjQ2NCAyMDguMDggODIuNTE2IDIwOC4zNiA3Ny44MTIgMjA2Ljc5MUM3NC43Mjg4IDIwNS43NjQgNzIuOTUzNiAyMDMuNjcgNzIuMzU5MiAyMDAuNjkxQzcyLjI4MDggMjAwLjI5NSA3Mi45NzYgMTk5Ljc2IDczLjMxMjggMTk5LjI4OEM3My42OTI4IDE5OS43NzUgNzQuMzQxNiAyMDAuMjMxIDc0LjQwNjQgMjAwLjc1M0M3NC42NzUyIDIwMi45MyA3Ni4wNzQ0IDIwNC4yNDcgNzguMDQ0OCAyMDQuODU1QzgwLjM3OTIgMjA1LjU3NCA4Mi44MjA4IDIwNi4yNzkgODUuMjQzMiAyMDYuMzhDOTIuNDEyOCAyMDYuNjc3IDk5LjYwMTYgMjA2LjU1MiAxMDYuNzcxIDIwNi44NDFDMTA5LjkzMyAyMDYuOTY4IDExMy4wNjggMjA3LjY5NSAxMTYuMzk0IDIwOC4xNVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbjxwYXRoIGQ9XCJNNjUuNDAxNiAyMjEuNTI2QzYzLjQ4NTYgMjIwLjc4NSA2Mi4yMTEyIDIxOS42MzcgNjEuODI4OCAyMTcuNzY1QzYxLjc2MTYgMjE3LjQzOCA2MS45NjggMjE3LjA2IDYyLjA0ODggMjE2LjcwNUM2Mi40NTY4IDIxNi44NDIgNjIuOTg5NiAyMTYuODcxIDYzLjI0NCAyMTcuMTRDNjMuNjgzMiAyMTcuNjAyIDYzLjg4NCAyMTguMjYxIDY0LjI5NjggMjE4Ljc1M0M2Ni40NTI4IDIyMS4zMjggNjkuNTQwOCAyMjAuODczIDcyLjM3MDQgMjIwLjY5OUM3NS4zNTY4IDIyMC41MTQgNzguMzExMiAyMTkuODU2IDgxLjI3NzYgMjE5LjM5NUM4Ni4zNjggMjE4LjYwNCA5MS40NTYgMjE3LjgwMiA5Ni41NDU2IDIxNy4wMTJDMTAxLjAxMSAyMTYuMzE3IDEwNS4yMjMgMjE2LjkwMSAxMDkuMDE0IDIxOS4zNzZDMTEyLjAzOSAyMjEuMzUyIDExMy4yNTggMjI0LjMwNSAxMTMuNTA1IDIyNy42MThDMTE0LjA2NCAyMzUuMTIyIDExMS44MSAyNDIuMTQzIDEwOS4wMjkgMjQ5LjAxNUMxMDcuNjI3IDI1Mi40NzYgMTA3LjA3MyAyNTYuMDE3IDEwNy40OCAyNTkuNjI1QzEwOC4wNzggMjY0LjkzIDEwOC45NTMgMjcwLjIxNCAxMTIuMzggMjc0LjcxOUMxMTIuNTcgMjc0Ljk3IDExMi43ODUgMjc1LjI4NSAxMTIuNzgyIDI3NS41N0MxMTIuNzc4IDI3NS45ODEgMTEyLjU4NiAyNzYuMzkgMTEyLjQ3NCAyNzYuOEMxMTIuMTM2IDI3Ni42MDcgMTExLjY4NCAyNzYuNDg5IDExMS40NzggMjc2LjIwOEMxMDguNzQ5IDI3Mi41MDEgMTA3LjE2MyAyNjguMzUgMTA2LjM2OSAyNjMuOTE3QzEwNi4wNjIgMjYyLjIwNSAxMDUuODM1IDI2MC40NzcgMTA1LjY0OSAyNTguNzQ5QzEwNS4xMjcgMjUzLjg5OCAxMDYuOTE4IDI0OS41NDYgMTA4Ljc2NiAyNDUuMTZDMTA5Ljg3NiAyNDIuNTI3IDExMC43NSAyMzkuNzU5IDExMS4zMSAyMzYuOTc2QzExMS44NTIgMjM0LjI4NSAxMTIuMDgzIDIzMS40OTMgMTEyLjAzIDIyOC43NTNDMTExLjk3NSAyMjUuODg4IDExMS41NCAyMjIuODk2IDEwOC44NzQgMjIxLjAyNkMxMDcuMzkzIDIxOS45ODcgMTA1LjU4MiAyMTkuMTU4IDEwMy43OTIgMjE4Ljc3NkM5OS4zNzg0IDIxNy44MzMgOTQuOTgxNiAyMTguNjI3IDkwLjU5OTIgMjE5LjM3OUM4NS41MjQgMjIwLjI0OSA4MC40NDY0IDIyMS4xODYgNzUuMzI3MiAyMjEuNzA5QzcyLjA4OTYgMjIyLjA0IDY4Ljc3MjggMjIxLjY2OCA2NS40MDE2IDIyMS41MjZaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG48cGF0aCBkPVwiTTE1MC44IDE4Mi41MDhIMTM5LjZWMjE1Ljk3M0gxNTAuOFYxODIuNTA4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0xMzguNjIgMTk3LjI0M0MxMzguNjIgMTkzLjA0MiAxMzguNjE2IDE4OS4wMTEgMTM4LjYyMiAxODQuOThDMTM4LjYyNiAxODIuNDE3IDEzOS41MzYgMTgxLjU2NiAxNDIuMjQ2IDE4MS41NjZDMTQ0LjgxNCAxODEuNTY2IDE0Ny4zODIgMTgxLjYwNiAxNDkuOTUgMTgxLjU1MUMxNTEuNDA3IDE4MS41MiAxNTEuOTA2IDE4Mi4xMTMgMTUxLjkwMiAxODMuNDYzQzE1MS44NjkgMTkzLjc5NiAxNTEuODg3IDIwNC4xMjkgMTUxLjg4IDIxNC40NjNDMTUxLjg3OSAyMTYuMzA3IDE1MS40NzggMjE2LjY2OCAxNDkuNTU4IDIxNi42NjlDMTQ2LjYzMyAyMTYuNjY5IDE0My43MDYgMjE2LjY0NyAxNDAuNzggMjE2LjY3OUMxMzkuNTI0IDIxNi42OTIgMTM4Ljk4NSAyMTYuMTkzIDEzOC45NjYgMjE0Ljk4N0MxMzguODc0IDIwOS4xMjggMTM4Ljc0IDIwMy4yNzEgMTM4LjYyIDE5Ny4yNDNaTTE0OS41NTQgMjE0Ljk2NUMxNDkuODUzIDIxNC41ODEgMTUwLjM5MiAyMTQuMjAzIDE1MC40MDIgMjEzLjgxM0MxNTAuNDI3IDIxMi44NDEgMTUwLjA5NSAyMTEuODYxIDE1MC4xMTUgMjEwLjg4OEMxNTAuMTU5IDIwOC43MTkgMTUwLjQxOCAyMDYuNTUyIDE1MC40MzQgMjA0LjM4M0MxNTAuNDc5IDE5Ny43OTUgMTUwLjQ0IDE5MS4yMDYgMTUwLjQ1OSAxODQuNjE4QzE1MC40NjIgMTgzLjQxMiAxNDkuOTEzIDE4Mi44NjUgMTQ4LjY1NCAxODIuOTI4QzE0Ni4yNTQgMTgzLjA0NyAxNDMuODUgMTgzLjExNiAxNDEuNDU4IDE4My4zMTNDMTQxLjA4MiAxODMuMzQ1IDE0MC40ODcgMTgzLjkyNiAxNDAuNDU3IDE4NC4yODhDMTQwLjI1MiAxODYuNjk2IDE0MC4wNzUgMTg5LjExMyAxNDAuMDggMTkxLjUyOEMxNDAuMDg2IDE5NC4yNDcgMTQwLjM2MSAxOTYuOTY0IDE0MC4zOTcgMTk5LjY4M0MxNDAuNDU1IDIwMy45OTkgMTQwLjQxMyAyMDguMzE2IDE0MC40MTMgMjEyLjYzM0MxNDAuNDEzIDIxNS4yNTMgMTQwLjQxMiAyMTUuMjUgMTQzLjE0NiAyMTQuOTY5QzE0My40NDEgMjE0LjkzOCAxNDMuNzQyIDIxNC45NTcgMTQ0LjA0MSAyMTQuOTY3QzE0NS44MTkgMjE1LjAyMSAxNDcuNTk3IDIxNS4wNzggMTQ5LjU1NCAyMTQuOTY1WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTE3Mi4zMTkgMjc0LjI2NUMxNzAuODI0IDI3NC4xMDcgMTcwLjQwNyAyNzMuMTUzIDE3MS4wMjggMjcyLjMzNUMxNzIuODc1IDI2OS45MDIgMTc0LjkyNSAyNjcuNjA2IDE3Ni45NTMgMjY1LjMwMUMxNzcuMjI3IDI2NC45OSAxNzcuODI4IDI2NC45MzcgMTc4LjI3OCAyNjQuNzY0QzE3OC4yNDIgMjY1LjIyNSAxNzguMzI4IDI2NS43MzYgMTc4LjE0OSAyNjYuMTM5QzE3Ny4zOTggMjY3LjgyOSAxNzYuNTc4IDI2OS40OTQgMTc1Ljc2MiAyNzEuMTU3QzE3NS4zNDEgMjcyLjAxMyAxNzUuNjk5IDI3Mi4wNzEgMTc2LjQ3OCAyNzEuODk1QzE3Ni44NzMgMjcxLjgwNiAxNzcuMzI0IDI3MS44MTUgMTc3LjcyMiAyNzEuODk5QzE3OC4wODggMjcxLjk3NiAxNzguNDE3IDI3Mi4yMTQgMTc4Ljc2MiAyNzIuMzgxQzE3OC42IDI3Mi42NTUgMTc4LjQ2OCAyNzIuOTUgMTc4LjI3MSAyNzMuMkMxNzYuMDg1IDI3NS45NzMgMTczLjg5MyAyNzguNzQyIDE3MS42ODYgMjgxLjQ5OUMxNzEuNDg5IDI4MS43NDYgMTcxLjE3MiAyODEuOTA0IDE3MC45MTEgMjgyLjEwNEMxNzAuNzgzIDI4MS43OTUgMTcwLjQ4MiAyODEuNDQxIDE3MC41NTUgMjgxLjE4NkMxNzEuMDIzIDI3OS41NjEgMTcxLjU5OSAyNzcuOTY2IDE3Mi4wODcgMjc2LjM0N0MxNzIuMjkgMjc1LjY3MSAxNzIuMzY2IDI3NC45NjEgMTcyLjMxOSAyNzQuMjY1WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTE3OS41NzggMjU0LjkyNUMxODAuMDg2IDI1NC45MjcgMTgwLjUwNCAyNTUuMDE0IDE4MC45MjIgMjU1LjEwMUMxODAuODE3IDI1NS4zOTkgMTgwLjc5MiAyNTUuNzYyIDE4MC41OTMgMjU1Ljk4M0MxNzguMjYyIDI1OC41NzMgMTc1LjkxNiAyNjEuMTUgMTczLjU0MiAyNjMuNzA1QzE3My4yNzQgMjYzLjk5NSAxNzIuODE0IDI2NC4xMjYgMTcyLjQ0NCAyNjQuMzMxQzE3Mi40ODUgMjYzLjg3MiAxNzIuMzY2IDI2My4zMTYgMTcyLjU5NyAyNjIuOTcyQzE3My4yNjYgMjYxLjk3NSAxNzQuMDM4IDI2MS4wMzMgMTc0LjgzOSAyNjAuMTI2QzE3Ni4zNjMgMjU4LjQgMTc3LjkzNiAyNTYuNzEzIDE3OS41NzggMjU0LjkyNVpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0xNjMuMDg5IDI4NC4yMzRDMTYyLjA1MSAyODQuNTAxIDE2MS41NzMgMjg0LjI5MSAxNjIuMjI4IDI4My4zNjFDMTYzLjI5NiAyODEuODQ0IDE2NC4zNzEgMjgwLjMyNyAxNjUuNTUgMjc4Ljg4OUMxNjUuNzg2IDI3OC42MDIgMTY2LjQ5OCAyNzguNjY4IDE2Ni45OSAyNzguNTcxQzE2Ni44NTkgMjc5LjAwNSAxNjYuODM5IDI3OS41MTYgMTY2LjU3OSAyNzkuODYyQzE2NS40ODUgMjgxLjMxNyAxNjQuMzE4IDI4Mi43MjQgMTYzLjA4OSAyODQuMjM0WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTI1OC44IDM0MS4wODVMMjY1LjYgMzU4LjE5OEwyNzYgMzUxLjczM0wyNzIuOCAzMzkuMTg0TDI4Mi44IDMzMi43MTlMMjg2LjQgMzE0LjA4NUgzMTYuNEwzMDkuMiAzNTUuNTM2TDMwNi40IDM3Ni44MzJMMzA1LjIgMzk2Ljk4N0wzMDkuNiA0MDEuNTVMMzE1LjIgNDA0LjIxMkgzMjIuOEwzMjggNDAzLjA3MUwzMzcuNiAzODMuNjc3TDM0NS41OTkgMzYzLjUyMkwzNTYuMzk5IDMyNC43MzNMMzYyLjM5OSAzMjEuMzExQzM2Mi4zOTkgMzIxLjMxMSAzNjcuOTk5IDMwNC45NTkgMzY3Ljk5OSAyOTYuNTkyQzM2Ny45OTkgMjg4LjIyNiAzNzEuNjE5IDI2My4zNzkgMzY2LjM5OSAyNDUuNjM1QzM2Mi4wNTQgMjMwLjg1OSAzNDcuNTk5IDIxMC42NDkgMzQ3LjU5OSAyMTAuNjQ5TDMzNy42IDIwMC43NjFMMzM5LjIgMTY4LjA1N0wzMDcuNiAxNjQuMjU0TDMwMi40IDE3Ny45NDVDMzAyLjQgMTc3Ljk0NSAzMDUuMiAxODkuNzMzIDMwOS42IDE5NC4yOTdDMzEyLjM4NiAxOTcuMTg3IDMxOC40IDE5Ni41NzggMzE4LjQgMTk2LjU3OEwzMjIgMjEzLjMxMUwzMTguNCAyMjAuMTU2TDMwOS4yIDI0Mi45NzNMMzA3LjYgMjYyLjM2N0wyNzkuNiAyNjkuNTkyTDI5MS4yIDI3Ni4wNTdMMjQ3LjYgMjgyLjE0MkMyNDcuNiAyODIuMTQyIDIzOCAyODYuNzA1IDI0MS4yIDMwNC41NzhDMjQ0LjQgMzIyLjQ1MiAyNTIgMzM5LjE4NCAyNTIgMzM5LjE4NEwyNTguOCAzNDEuMDg1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZD1cIk0zNTIuODAxIDMyNS44NzRDMzU2LjU0NSAzMjMuODY0IDM1OS45MiAzMjMuMTE2IDM2Mi4zNzUgMzIwLjMwOUMzNjkuMTk3IDMxMi4xMjggMzY4Ljk1NSAyNDYuMDQ3IDM2Ni4wMDEgMjQ3LjUzNkMzNjMuMDE5IDI0OS4wNCAzNjMuNDQ2IDI2MS42MzIgMzY0LjAwMSAyNjQuMjY5QzM2Ni44MDEgMjc3LjU3OCAzNTkuMjU2IDMwOC45NjEgMzU4LjYwMSAzMTAuMjgzQzM1OC4wMDEgMzE3LjEyOCAzNDguNDc0IDMxOS43OTIgMzQyLjAwMSAzMjIuNDUyQzMzOC42MzkgMzIzLjgzMyAzMzQuMDY2IDMyNC4yMzMgMzM0LjAwMSAzMjUuODc0QzMzMy45NDUgMzI3LjMwNCAzMzYuNjk5IDMyOC43MDcgMzM4LjYzOSAzMjguNDk5QzM0My4yNTQgMzI4LjAwMyAzNDkuMDUyIDMyNy44ODggMzUyLjgwMSAzMjUuODc0WlwiIGZpbGw9XCIjRTdFQUVFXCIvPlxyXG48cGF0aCBkPVwiTTMyMC45MTQgMzk1LjgxMUMzMTkuOTYyIDM5OC4xNTQgMzE5Ljg0NiA0MDAuNDYxIDMxOS43MzggNDAyLjk2OUMzMjEuMiA0MDMuNjk0IDMyMi45OTQgNDA0LjEyNSAzMjQuNjA5IDQwMy42OTRDMzI1LjA0IDQwMy41OCAzMjUuNDg2IDQwMy41MiAzMjUuOTIyIDQwMy40MjZDMzI2LjQ2MyA0MDMuMzA5IDMyNi42MTMgNDAzLjA3NCAzMjcuMDIyIDQwMi43MzdDMzI3LjgzIDQwMi4wNyAzMjguNjE5IDQwMS4zMjggMzI5LjIyMSA0MDAuNDg2QzMzMS40OTQgMzk3LjMwMyAzMzMuNjE0IDM5My44NDYgMzM1LjA1NCAzOTAuMjM2QzMzNS42NTUgMzg4LjczMSAzMzYuNTQyIDM4Ny4yNDggMzM3LjM4NCAzODUuODM4TDMzNy40MzcgMzg1Ljc1QzMzNy44NDQgMzg1LjA2OCAzMzguMDMyIDM4NC4yMTcgMzM4LjQzIDM4My41QzMzOC44NDIgMzgyLjc1NCAzMzkuMDU0IDM4MS45NiAzMzkuMjg1IDM4MS4xNDdDMzM5Ljc1MSAzNzkuNTA2IDM0MC42NDggMzc3Ljk5MiAzNDEuMDQxIDM3Ni4zMTNDMzQxLjM5MSAzNzQuODEzIDM0Mi4xOTQgMzczLjQwNiAzNDIuNjI5IDM3MS45MjlDMzQzLjA4NiAzNzAuMzc2IDM0My42MjQgMzY4Ljg1MyAzNDMuOTU4IDM2Ny4yNjlDMzQ0LjEyMyAzNjYuNDgxIDM0NC41MTYgMzY1LjQwOSAzNDQuMjYzIDM2NC42MTlDMzQ0LjAwOSAzNjMuODI2IDM0Mi44NzIgMzY0LjY0NiAzNDIuNDIyIDM2NC45NDVDMzQwLjU1OSAzNjYuMTg2IDMzOS4zODIgMzY3LjQwNSAzMzguNTM2IDM2OS40NDZDMzM3LjQyNSAzNzIuMTI1IDMzNS42MSAzNzQuNjEgMzMzLjQ4MiAzNzYuNjMzQzMzMS4zMjggMzc4LjY4IDMyOS41MDMgMzgxLjA0MiAzMjcuNzA5IDM4My4zNjlDMzI1LjkxMiAzODUuNjk4IDMyNC4wOTcgMzg4LjA5NiAzMjIuODM4IDM5MC43M0MzMjIuNDI3IDM5MS41ODggMzIyLjAzIDM5Mi40NTIgMzIxLjY2MiAzOTMuMzI5QzMyMS4zMjMgMzk0LjEzMyAzMjEuMjM5IDM5NS4wMSAzMjAuOTE0IDM5NS44MTFaXCIgZmlsbD1cIiNFN0VBRUVcIi8+XHJcbjxwYXRoIGQ9XCJNMjYxLjk5OCAzNjUuODA0QzI1NC44OCAzNzIuMTk2IDI0My4xMDIgMzgxLjcgMjQ3Ljk5OCAzODkuNzYyQzI1Mi4xNTcgMzk2LjYwNyAyNjUuNTU4IDM4NC41NzUgMjczLjU5OCAzNzcuOTczQzI4MS4xNTkgMzcxLjc2NSAyODkuNDMyIDM2MS4yMTIgMjg1Ljk5OCAzNTcuMDU3QzI4MS41OTggMzUxLjczMyAyNjkuMTk4IDM1OS4zMzkgMjYxLjk5OCAzNjUuODA0WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMwMy43MDkgMTYxLjQxMUMzMDUuMDkgMTYwLjU5NiAzMDYuNDM4IDE1OS43MyAzMDcuODg3IDE1OC43OTZDMzA4LjgyOSAxNTguODkzIDMwOS4yMTEgMTU5LjE0MyAzMDguMjEgMTU5Ljc0NEMzMDUuNjEgMTYxLjMwNiAzMDMuMDEgMTYyLjg5NyAzMDEuNTQ2IDE2NS42MkMzMDEuMzU4IDE2NS45NjkgMzAxLjM3NiAxNjYuNDE4IDMwMS4zOTQgMTY2Ljg2OUMzMDEuNDAyIDE2Ny4wNzUgMzAxLjQxIDE2Ny4yODMgMzAxLjM5OCAxNjcuNDgxQzMwMS42IDE2Ny40MjMgMzAxLjgwNyAxNjcuMzc0IDMwMi4wMTUgMTY3LjMyNkMzMDIuNDc2IDE2Ny4yMTggMzAyLjkzNyAxNjcuMTEgMzAzLjM0MSAxNjYuOTAyQzMwMy45MTggMTY2LjYwNSAzMDQuNDY3IDE2Ni4yNiAzMDUuMDE3IDE2NS45MTVDMzA1LjQ1IDE2NS42NDMgMzA1Ljg4MyAxNjUuMzcyIDMwNi4zMyAxNjUuMTIzQzMwNi41MDQgMTY1LjAyNiAzMDYuNzg0IDE2NS4wODUgMzA3LjAzNCAxNjUuMTM4QzMwNy4wODIgMTY1LjE0OSAzMDcuMTMgMTY1LjE1OSAzMDcuMTc1IDE2NS4xNjhDMzA3LjIxNCAxNjUuMTc1IDMwNy4yNjEgMTY1LjUxMSAzMDcuMTg3IDE2NS42MjVDMzA2LjQyIDE2Ni44MTYgMzA1LjkxOCAxNjguMTM5IDMwNS40MTYgMTY5LjQ2NUMzMDQuNTYzIDE3MS43MTYgMzAzLjcwOSAxNzMuOTcxIDMwMS41NSAxNzUuNTg3QzMwMC4xMDcgMTc2LjY2OCAzMDAuMzYyIDE3OC45MjIgMzAxLjY5IDE3OS43NjRDMzAyLjQ4NyAxODAuMjcgMzA1LjczNiAxNzkuOTg0IDMwNi40OTggMTc5LjMyNkMzMDYuNjM3IDE3OS4yMDYgMzA2Ljc1NCAxNzkuMDYzIDMwNi44NzEgMTc4LjkyTDMwNi44NzIgMTc4LjkxOUMzMDYuOTI2IDE3OC44NTMgMzA2Ljk3OSAxNzguNzg3IDMwNy4wMzUgMTc4LjcyNEMzMDYuOTQ0IDE3OC42NzUgMzA2Ljg1MyAxNzguNjEzIDMwNi43NjIgMTc4LjU1MUMzMDYuNTYyIDE3OC40MTQgMzA2LjM2MSAxNzguMjc3IDMwNi4xNjYgMTc4LjI4NUMzMDUuODYyIDE3OC4yOTcgMzA1LjU1OCAxNzguMzYyIDMwNS4yNTYgMTc4LjQyN0MzMDQuODkzIDE3OC41MDQgMzA0LjUzMSAxNzguNTgxIDMwNC4xNzIgMTc4LjU2N0MzMDMuNzY4IDE3OC41NTIgMzAzLjM2OSAxNzguNDA1IDMwMi45NyAxNzguMjU3QzMwMi43OTQgMTc4LjE5MiAzMDIuNjE4IDE3OC4xMjYgMzAyLjQ0MiAxNzguMDcyQzMwMi41MDcgMTc3LjkwNCAzMDIuNTY0IDE3Ny43MyAzMDIuNjIgMTc3LjU1NUwzMDIuNjIxIDE3Ny41NTRDMzAyLjc0NiAxNzcuMTY0IDMwMi44NzMgMTc2Ljc3NSAzMDMuMTA2IDE3Ni40NTdDMzAzLjMzIDE3Ni4xNTEgMzAzLjYxNyAxNzUuODggMzAzLjkwMyAxNzUuNjFDMzA0LjI5NyAxNzUuMjM5IDMwNC42ODcgMTc0Ljg3MSAzMDQuOTAzIDE3NC40MjFDMzA2LjE5MiAxNzEuNzM3IDMwNy4zOTMgMTY5LjAwOSAzMDguNDc5IDE2Ni4yNDRDMzA4LjkzNCAxNjUuMDg1IDMwOS41NDEgMTY0LjQwNyAzMTAuODQ5IDE2NC41NDhDMzExLjMzNCAxNjQuNjAxIDMxMS44MjUgMTY0LjYzOSAzMTIuMzE2IDE2NC42NzlDMzEzLjY1NiAxNjQuNzg1IDMxNSAxNjQuODkzIDMxNi4yNTQgMTY1LjI2OUMzMjIuNTI4IDE2Ny4xNTEgMzI2LjcyMiAxNzAuNTk4IDMyNy4wNTkgMTc4LjE5MkMzMjcuMDg5IDE3OC44NTkgMzI2Ljk5NyAxNzkuNTI5IDMyNi45MDYgMTgwLjJDMzI2LjgzOSAxODAuNjgzIDMyNi43NzMgMTgxLjE2NyAzMjYuNzUyIDE4MS42NTFDMzI2Ljc0MiAxODEuODc3IDMyNi44ODMgMTgyLjEwOSAzMjcuMDI0IDE4Mi4zNDFMMzI3LjAyNSAxODIuMzQxQzMyNy4wODkgMTgyLjQ0OCAzMjcuMTU0IDE4Mi41NTQgMzI3LjIwNCAxODIuNjZDMzI3LjMwNiAxODIuNjA4IDMyNy40MTMgMTgyLjU2NCAzMjcuNTIxIDE4Mi41MTlDMzI3Ljc2MiAxODIuNDE3IDMyOC4wMDMgMTgyLjMxNiAzMjguMTc3IDE4Mi4xNDlDMzI4LjQwMiAxODEuOTM0IDMyOC41OCAxODEuNjc1IDMyOC43NTkgMTgxLjQxNUMzMjguODYyIDE4MS4yNjUgMzI4Ljk2NiAxODEuMTE1IDMyOS4wNzggMTgwLjk3NEMzMjkuMzA5IDE4MC42ODMgMzI5LjUyNyAxODAuMzc1IDMyOS43NDYgMTgwLjA2OEMzMzAuMjc4IDE3OS4zMTkgMzMwLjgxMyAxNzguNTY5IDMzMS41MjYgMTc4LjA0N0MzMzIuMjc1IDE3Ny41IDMzMy41OCAxNzcuMjA0IDMzNC40NzcgMTc3LjQxOEMzMzUuMzY4IDE3Ny42MyAzMzUuNzIzIDE3OC42NTcgMzM1LjcwNyAxNzkuNzc5QzMzNS42ODIgMTgxLjYwMyAzMzQuOTMxIDE4Mi45NjMgMzMzLjgzIDE4NC4zODVMMzMzLjczOCAxODQuNTA0QzMzMi43MjYgMTg1LjgwNyAzMzEuMzUxIDE4Ny41ODEgMzMxLjY1NCAxODguNzlDMzMyLjI4OCAxOTEuMzIyIDMzMy4yNTkgMTkzLjc3NSAzMzQuMjMyIDE5Ni4yM1YxOTYuMjMxQzMzNC43NSAxOTcuNTM4IDMzNS4yNjcgMTk4Ljg0NiAzMzUuNzM0IDIwMC4xNjdDMzM1Ljk0NiAyMDAuNzY1IDMzNS44NTIgMjAxLjc5MyAzMzUuNDQzIDIwMi4yMTRDMzMyLjUwMiAyMDUuMjQgMzI5LjQ5NCAyMDguMjA2IDMyNi40ODcgMjExLjE3MUwzMjYuNDc3IDIxMS4xODFDMzI1Ljc3NCAyMTEuODc0IDMyNS4wNzMgMjEyLjU2NyAzMjQuMzcxIDIxMy4yNkMzMjQuMjE4IDIxMy40MTEgMzI0LjA0IDIxMy41NCAzMjMuODYyIDIxMy42NjlDMzIzLjc4IDIxMy43MjkgMzIzLjY5OCAyMTMuNzg5IDMyMy42MTcgMjEzLjg1MUMzMjMuNTY4IDIxMy43NjIgMzIzLjUxIDIxMy42NzQgMzIzLjQ1MSAyMTMuNTg1QzMyMy4zMjUgMjEzLjM5NyAzMjMuMTk5IDIxMy4yMDcgMzIzLjE2OSAyMTMuMDA0QzMyMi4zNyAyMDcuNzQ3IDMyMS4wNTQgMjAyLjY0MiAzMTguNTQ2IDE5Ny44NjFDMzE4LjQyMyAxOTcuNjI2IDMxOC43NDUgMTk2Ljg2NCAzMTguOTY2IDE5Ni44MTdDMzIxLjk4NiAxOTYuMTgxIDMyNC43NjYgMTk1LjA0IDMyNy4yODcgMTkzLjMzMUMzMjcuNTA3IDE5My4xODIgMzI3LjY2MSAxOTIuOTQgMzI3LjgxNCAxOTIuNjk4QzMyNy44ODQgMTkyLjU4NiAzMjcuOTU1IDE5Mi40NzQgMzI4LjAzMyAxOTIuMzcyQzMyNy44OTEgMTkyLjM1MiAzMjcuNzQyIDE5Mi4zMTUgMzI3LjU5MyAxOTIuMjc3QzMyNy4yNyAxOTIuMTk2IDMyNi45NDggMTkyLjExNSAzMjYuNjk5IDE5Mi4yMTFDMzI1LjkwNiAxOTIuNTE2IDMyNS4xMjkgMTkyLjg2MiAzMjQuMzUxIDE5My4yMDZDMzIzLjIyNyAxOTMuNzA1IDMyMi4xMDUgMTk0LjIwMyAzMjAuOTM4IDE5NC41OEMzMTUuMDkzIDE5Ni40NyAzMTAuNDIzIDE5NS4yNTMgMzA3LjUxNiAxOTAuMzQzQzMwNi41NjEgMTg4LjcyOSAzMDYuMTEyIDE4Ni44NDIgMzA1LjY2MiAxODQuOTUxQzMwNS40MzUgMTg0LjAwMSAzMDUuMjA4IDE4My4wNDkgMzA0LjkxNyAxODIuMTMxQzMwNC44MjUgMTgxLjg0IDMwNC41OCAxODEuNTkzIDMwNC4zMzYgMTgxLjM0N0MzMDQuMjIzIDE4MS4yMzMgMzA0LjExIDE4MS4xMTggMzA0LjAxMiAxODEuMDAxQzMwMy45MjIgMTgxLjE0NCAzMDMuOCAxODEuMjk0IDMwMy42NzggMTgxLjQ0NEMzMDMuNDE1IDE4MS43NjkgMzAzLjE1MSAxODIuMDkzIDMwMy4yMDggMTgyLjM1NUMzMDMuNjkgMTg0LjYgMzA0LjI2MyAxODYuODMyIDMwNC45MzQgMTg5LjAzM0MzMDYuMDQ2IDE5Mi42ODQgMzA4LjU3IDE5NS4wOTEgMzEyLjI0OSAxOTYuNDU0QzMxMi43MzEgMTk2LjYzMiAzMTMuNDA5IDE5Ny4wNzQgMzEzLjQ1MyAxOTcuNDUxQzMxMy41ODEgMTk4LjU2IDMxMy42MTkgMTk5Ljc0IDMxMy4zNjYgMjAwLjgyMUMzMTIuMzUgMjA1LjE1NSAzMDkuNDg1IDIwOC40NjQgMzA2LjYyNCAyMTEuNzdMMzA1Ljk0NiAyMTIuNTUzTDMwNS45NDEgMjEyLjU1OUwzMDUuOTM1IDIxMi41NjVDMzA0LjA1NyAyMTQuNzM1IDMwMi4xNzYgMjE2LjkwNiAzMDAuNDI4IDIxOS4xNjlDMjk5LjU2OCAyMjAuMjgzIDI5OC45NDQgMjIxLjYzNyAyOTkuNzAyIDIyMy4xMjJDMzAwLjkyMSAyMjUuNTA5IDMwMy41NTkgMjI1LjU2MyAzMDYuMzYgMjI1LjA0N0MzMTAuMjk0IDIyNC4zMjEgMzEzLjQwMiAyMjIuMDk4IDMxNi4zMzggMjE5LjYyMUMzMTYuNDc5IDIxOS41MDMgMzE2LjY2IDIxOS40MjcgMzE2Ljg0MSAyMTkuMzUyQzMxNi45MjUgMjE5LjMxNyAzMTcuMDEgMjE5LjI4MiAzMTcuMDkgMjE5LjI0MkMzMTcuMTIzIDIxOS4zNTMgMzE3LjE3IDIxOS40NjQgMzE3LjIxNyAyMTkuNTc2QzMxNy4zMTggMjE5LjgxOSAzMTcuNDIgMjIwLjA2MiAzMTcuMzkgMjIwLjI4OUMzMTcuMjE1IDIyMS42MzQgMzE3LjAxOCAyMjIuOTgxIDMxNi43MDMgMjI0LjNDMzE2LjUwOSAyMjUuMTE2IDMxNi4xODIgMjI1LjkzMiAzMTUuNzUxIDIyNi42NThDMzE1LjQ0NiAyMjcuMTcyIDMxNS4wODEgMjI3LjY2MiAzMTQuNzE3IDIyOC4xNTFDMzE0LjEyNiAyMjguOTQ1IDMxMy41MzcgMjI5LjczNSAzMTMuMjEgMjMwLjYxOUMzMTEuNjk2IDIzNC43MTIgMzEwLjI5NSAyMzguODU2IDMwOS4xMTQgMjQzLjA0OEMzMDcuNDcxIDI0OC44ODIgMzA1LjkxNyAyNTQuNzU4IDMwNi43MSAyNjAuOTEyQzMwNi43NTUgMjYxLjI2MiAzMDYuNjUgMjYxLjkgMzA2LjQ1NCAyNjEuOTY3QzMwNS45OTcgMjYyLjEyMiAzMDUuNTM0IDI2Mi4zMDYgMzA1LjA3IDI2Mi40OUwzMDUuMDYzIDI2Mi40OTNDMzAzLjc0OSAyNjMuMDE1IDMwMi40MTggMjYzLjU0NCAzMDEuMTM5IDI2My40NTdDMjk4LjkwNiAyNjMuMzA1IDI5Ni45NDYgMjYzLjQ0NCAyOTQuODkgMjY0LjI4NUMyOTMuNTIyIDI2NC44NDUgMjkyLjA0MSAyNjUuMTY0IDI5MC41NjkgMjY1LjQ4MUMyOTAuMjQ3IDI2NS41NSAyODkuOTI2IDI2NS42MTkgMjg5LjYwNyAyNjUuNjkxQzI4OC43OTIgMjY1Ljg3MyAyODcuOTY4IDI2Ni4wMjUgMjg3LjE0NSAyNjYuMTc4QzI4NS45MzIgMjY2LjQwMyAyODQuNzE5IDI2Ni42MjcgMjgzLjUzNCAyNjYuOTQ3QzI4Mi44NDYgMjY3LjEzNCAyODEuNzYyIDI2OC4wMDUgMjgxLjg0MSAyNjguMzYzQzI4Mi4wMyAyNjkuMjE2IDI4MS43MTIgMjY5LjE4NiAyODEuMTYxIDI2OS4xMzNMMjgxLjEyMiAyNjkuMTI5QzI4MC4xNzggMjY5LjA0IDI3OS4yMzUgMjY4Ljk1MyAyNzguMjkzIDI2OC44NjVDMjc1LjY5MSAyNjguNjI3IDI3My4wOSAyNjguMzg3IDI3MC40OTYgMjY4LjA5QzI2OC43MTMgMjY3Ljg4NSAyNjYuOTM0IDI2Ny42NCAyNjUuMTU2IDI2Ny4zOTVDMjYzLjUwMyAyNjcuMTY4IDI2MS44NSAyNjYuOTQgMjYwLjE5MyAyNjYuNzQ1QzI1OC43NTkgMjY2LjU3NiAyNTcuMzE5IDI2Ni40NTQgMjU1Ljg3OSAyNjYuMzMzTDI1NS44NyAyNjYuMzMzTDI1NS44NjUgMjY2LjMzMkMyNTQuNzg3IDI2Ni4yNDEgMjUzLjcxIDI2Ni4xNSAyNTIuNjM0IDI2Ni4wNEMyNTEuNjIzIDI2NS45MzUgMjUwLjYxNCAyNjUuODEzIDI0OS42MDMgMjY1LjY5MkMyNDcuNTQ5IDI2NS40NDQgMjQ1LjQ5NCAyNjUuMTk3IDI0My40MzIgMjY1LjA5NkMyNDIuNjU0IDI2NS4wNTggMjQxLjM3OSAyNjUuODM3IDI0MS4xMTYgMjY2LjUxOUMyNDAuNjU3IDI2Ny43MDkgMjQxLjk0MSAyNjguMjc1IDI0Mi45MjYgMjY4LjQxQzI0Ni4xNTYgMjY4Ljg1IDI0OS40MDYgMjY5LjE3IDI1Mi42NTUgMjY5LjQ2NUMyNTYuODQ4IDI2OS44NDcgMjYxLjA0NCAyNzAuMjE1IDI2NS4yNDYgMjcwLjQ5MUMyNjguMzgzIDI3MC42OTggMjcxLjUyMiAyNzAuODczIDI3NC42NjIgMjcxLjA0N0gyNzQuNjY1QzI3Ny41MDcgMjcxLjIwNiAyODAuMzUgMjcxLjM2NCAyODMuMTkxIDI3MS41NDZDMjg0LjQ4MSAyNzEuNjI5IDI4NS43NjYgMjcxLjc2OCAyODcuMDUxIDI3MS45MDhMMjg3LjA1OSAyNzEuOTA4QzI4OC4wNTIgMjcyLjAxNiAyODkuMDQ1IDI3Mi4xMjQgMjkwLjAzOSAyNzIuMjA1QzI5MS4wMDUgMjcyLjI4NCAyOTEuOTk5IDI3Mi4zMTUgMjkyLjk1IDI3Mi4xNzVDMjkzLjI0NiAyNzIuMTMyIDI5My41MDYgMjcxLjg2NyAyOTMuNzY3IDI3MS42MDNDMjkzLjg4NiAyNzEuNDgyIDI5NC4wMDQgMjcxLjM2MiAyOTQuMTI2IDI3MS4yNjNDMjkzLjk3MiAyNzEuMTgzIDI5My44MiAyNzEuMDg1IDI5My42NjkgMjcwLjk4N0MyOTMuMzQgMjcwLjc3NiAyOTMuMDExIDI3MC41NjQgMjkyLjY2NSAyNzAuNTMzQzI5MC42NSAyNzAuMzQ3IDI4OC42MyAyNzAuMiAyODYuNjEgMjcwLjA1M0wyODYuNiAyNzAuMDUzQzI4NS41MDcgMjY5Ljk3NCAyODQuNDE0IDI2OS44OTQgMjgzLjMyMiAyNjkuODA4QzI4My4xMTggMjY5Ljc5MyAyODIuOTE5IDI2OS43MTQgMjgyLjcyMSAyNjkuNjM2QzI4Mi42MjggMjY5LjU5OSAyODIuNTM2IDI2OS41NjMgMjgyLjQ0MyAyNjkuNTMyQzI4Mi41MyAyNjkuNDYyIDI4Mi42MTIgMjY5LjM3OSAyODIuNjk1IDI2OS4yOTZDMjgyLjg3NCAyNjkuMTE2IDI4My4wNTQgMjY4LjkzNSAyODMuMjY5IDI2OC44ODFMMjgzLjY4OCAyNjguNzczSDI4My42ODlDMjg1LjE2NCAyNjguMzk2IDI4Ni42NDYgMjY4LjAxNyAyODguMTQ5IDI2Ny43NzlDMjg4LjcxMyAyNjcuNjkgMjg5LjI4MSAyNjcuNjE0IDI4OS44NDggMjY3LjUzOUMyOTIuMjE4IDI2Ny4yMjMgMjk0LjU4MiAyNjYuOTA4IDI5Ni42NzQgMjY1LjU5MUMyOTYuODU0IDI2NS40NzggMjk3LjA4MiAyNjUuMzcxIDI5Ny4yODcgMjY1LjM3QzI5Ny43NDEgMjY1LjM2NyAyOTguMTk0IDI2NS4zNjIgMjk4LjY0OCAyNjUuMzU4SDI5OC42NTdDMzAwLjQ4MyAyNjUuMzQgMzAyLjMxIDI2NS4zMjMgMzA0LjEzMyAyNjUuMzg3QzMwNS4wMjYgMjY1LjQxNyAzMDYuNDg5IDI2Ny40IDMwNi4zNTggMjY4LjI1OUMzMDYuMTY0IDI2OS41NDIgMzA1Ljk1IDI3MC44MjggMzA1LjYyNCAyNzIuMDg0QzMwNS41MTIgMjcyLjUxNyAzMDUuMDk4IDI3My4xMjYgMzA0LjcxOSAyNzMuMjA2QzMwNC4wNzIgMjczLjM0MSAzMDMuNDI1IDI3My40ODUgMzAyLjc3OCAyNzMuNjI4TDMwMi43NjQgMjczLjYzMUwzMDIuNzU1IDI3My42MzNIMzAyLjc1NEMzMDAuMzM3IDI3NC4xNjggMjk3LjkxMyAyNzQuNzA1IDI5NS40NjMgMjc0Ljg4N0MyOTMuNTA2IDI3NS4wMzMgMjkxLjUzIDI3NC45MTcgMjg5LjU1IDI3NC44MDJDMjg4LjQxOCAyNzQuNzM1IDI4Ny4yODQgMjc0LjY2OSAyODYuMTU0IDI3NC42NTJDMjg1Ljc5OCAyNzQuNjQ2IDI4NS40NCAyNzQuODQ2IDI4NS4wODIgMjc1LjA0NUMyODQuOTE3IDI3NS4xMzcgMjg0Ljc1MSAyNzUuMjI4IDI4NC41ODYgMjc1LjMwMUMyODQuNzUyIDI3NS40MDkgMjg0LjkxNiAyNzUuNTQxIDI4NS4wOCAyNzUuNjcyQzI4NS40MzcgMjc1Ljk2IDI4NS43OTQgMjc2LjI0NyAyODYuMTgxIDI3Ni4yOTFDMjg3LjIzNiAyNzYuNDA4IDI4OC4zIDI3Ni40NTcgMjg5LjM2NCAyNzYuNTA1QzI5MC4zMzYgMjc2LjU1IDI5MS4zMDkgMjc2LjU5NCAyOTIuMjc1IDI3Ni42OTFDMjk0LjU2OSAyNzYuOTIxIDI5Ni44MyAyNzYuNjAyIDI5OS4wOSAyNzYuMjgzQzMwMS42MDcgMjc1LjkyOSAzMDQuMTI0IDI3NS41NzQgMzA2LjY4NiAyNzUuOTc1QzMwNy41NyAyNzYuMTE0IDMwOC40NjcgMjc2LjE4NyAzMDkuMzYzIDI3Ni4yNjFDMzEwLjU4MiAyNzYuMzYyIDMxMS44IDI3Ni40NjEgMzEyLjk4MSAyNzYuNzI0TDMxMy40OTggMjc2LjgzOUMzMTkuNDE1IDI3OC4xNTYgMzI1LjMxOCAyNzkuNDcgMzMxLjQ1MiAyNzkuNDMzQzMzMy40MDEgMjc5LjQyMiAzMzQuMjAzIDI4MC4yMTUgMzM0LjIxNCAyODIuMDg5QzMzNC4yMjEgMjgzLjMwMyAzMzQuMjMyIDI4NC41MTggMzM0LjI0MyAyODUuNzMyVjI4NS43NEMzMzQuMjgyIDI4OS45MTUgMzM0LjMyMSAyOTQuMDkzIDMzNC4xODIgMjk4LjI2NEMzMzQuMDk4IDMwMC43OTEgMzMzLjg2IDMwMy4zMTMgMzMzLjYyMiAzMDUuODM1QzMzMy40NTQgMzA3LjYyNyAzMzMuMjg1IDMwOS40MTkgMzMzLjE3MSAzMTEuMjE0QzMzMi44NTggMzE2LjE0NCAzMzIuNjQ4IDMyMS4wODIgMzMyLjQ3NSAzMjYuMDE5QzMzMi40NTQgMzI2LjY1NyAzMzIuNzM2IDMyNy41IDMzMy4xOTkgMzI3LjkyNUMzMzUuMzEgMzI5Ljg2IDMzNy45ODYgMzMwLjczNiAzNDAuNzY2IDMzMC4xMTFMMzQxLjQ4NiAzMjkuOTVDMzQ1Ljg2NiAzMjguOTcxIDM1MC4yNzQgMzI3Ljk4NiAzNTQuMjgxIDMyNS44NjJDMzU0LjYxMSAzMjUuNjg3IDM1NS4wMTQgMzI1LjYzOCAzNTUuNDE4IDMyNS41ODlDMzU1LjYwNSAzMjUuNTY2IDM1NS43OTIgMzI1LjU0MyAzNTUuOTcyIDMyNS41MDhDMzU1LjkwNSAzMjUuNjMyIDM1NS44MzggMzI1Ljc1NSAzNTUuNzcgMzI1Ljg3OEwzNTUuNzY5IDMyNS44OEMzNTUuNjEgMzI2LjE3MSAzNTUuNDUxIDMyNi40NjEgMzU1LjI5NiAzMjYuNzUzQzM1NS4yNjIgMzI2LjgxNyAzNTUuMjI1IDMyNi44OCAzNTUuMTg4IDMyNi45NDNDMzU1LjA4OSAzMjcuMTE0IDM1NC45ODggMzI3LjI4NiAzNTQuOTQ2IDMyNy40NjlDMzU0LjU2IDMyOS4xMTQgMzU0LjE5NSAzMzAuNzY1IDM1My44MyAzMzIuNDE1QzM1My4wNTkgMzM1LjkwNiAzNTIuMjg3IDMzOS4zOTggMzUxLjMyIDM0Mi44MzhDMzQ5LjQwNSAzNDkuNjUyIDM0Ny4yNSAzNTYuNDA3IDM0NS4wMjYgMzYzLjEzNkMzNDQuNDg1IDM2NC43NzMgMzQzLjgwOSAzNjYuMzcxIDM0My4xMzMgMzY3Ljk2OUMzNDIuMzc3IDM2OS43NTQgMzQxLjYyMiAzNzEuNTM4IDM0MS4wNTUgMzczLjM3OEMzMzguMjMgMzgyLjU0OCAzMzMuNjA4IDM5MC45MDMgMzI4Ljg4NiAzOTkuMjM2QzMyNy4xMTEgNDAyLjM2NyAzMjQuMjIgNDAzLjI2MSAzMjAuODU4IDQwMy4xODNDMzE5LjE5NCA0MDMuMTQ0IDMxNy41MzEgNDAyLjkxMiAzMTUuODc0IDQwMi42OEMzMTUuNDkxIDQwMi42MjcgMzE1LjEwOSA0MDIuNTc0IDMxNC43MjYgNDAyLjUyM0MzMTAuNTg3IDQwMS45NzEgMzA2LjIxMyAzOTkuMTYgMzA2LjM2MyAzOTQuMjY3QzMwNi40NDYgMzkxLjU5NCAzMDYuNTEgMzg4LjkyIDMwNi41NzUgMzg2LjI0NlYzODYuMjM5QzMwNi42MjYgMzg0LjEwNCAzMDYuNjc4IDM4MS45NyAzMDYuNzM4IDM3OS44MzZDMzA2Ljc0NCAzNzkuNjM2IDMwNi44MTMgMzc5LjQzOCAzMDYuODgyIDM3OS4yNDFDMzA2LjkzOCAzNzkuMDc5IDMwNi45OTUgMzc4LjkxNyAzMDcuMDE4IDM3OC43NTNDMzA3LjE0NCAzNzcuODU0IDMwNy4yNzIgMzc2Ljk1NiAzMDcuNCAzNzYuMDU4VjM3Ni4wNTdDMzA3Ljc5IDM3My4zMjYgMzA4LjE4IDM3MC41OTUgMzA4LjQ5IDM2Ny44NTZDMzA4LjU5NSAzNjYuOTIyIDMwOC42MTUgMzY1Ljk3NiAzMDguNjM1IDM2NS4wMzFDMzA4LjY2MiAzNjMuNzgzIDMwOC42ODkgMzYyLjUzNiAzMDguOTEzIDM2MS4zMkMzMDkuNzQgMzU2LjgyMiAzMTAuNjY0IDM1Mi4zNCAzMTEuNTg4IDM0Ny44NThMMzExLjU5IDM0Ny44NDhDMzExLjk5NSAzNDUuODg1IDMxMi40IDM0My45MjIgMzEyLjc5NiAzNDEuOTU3QzMxMy4wNzggMzQwLjU2MSAzMTMuMzY0IDMzOS4xNjQgMzEzLjY1IDMzNy43NjhDMzE0LjQ1OCAzMzMuODIyIDMxNS4yNjYgMzI5Ljg3NiAzMTUuOTg2IDMyNS45MTRDMzE2LjQyMyAzMjMuNTA1IDMxNi43MzYgMzIxLjA3NCAzMTcuMDQ5IDMxOC42NDRDMzE3LjE3NSAzMTcuNjU3IDMxNy4zMDIgMzE2LjY3IDMxNy40MzggMzE1LjY4NUMzMTcuNDk2IDMxNS4yNjIgMzE3LjUzNiAzMTQuODM1IDMxNy41NzcgMzE0LjQwOUwzMTcuNTc4IDMxNC40MDNDMzE3LjY1MSAzMTMuNjI1IDMxNy43MjYgMzEyLjg0OCAzMTcuOTA1IDMxMi4wOTRDMzE4LjIzOSAzMTAuNjgyIDMxOC42MjYgMzA5LjI4MSAzMTkuMDEzIDMwNy44ODFDMzE5LjI2NiAzMDYuOTYyIDMxOS41MiAzMDYuMDQ0IDMxOS43NTkgMzA1LjEyMkMzMTkuODAyIDMwNC45NTMgMzE5Ljc0IDMwNC43NTkgMzE5LjY3NyAzMDQuNTY1QzMxOS42NDggMzA0LjQ3NiAzMTkuNjE4IDMwNC4zODYgMzE5LjYgMzA0LjI5OUMzMTkuNTIyIDMwNC4zMzUgMzE5LjQzNyAzMDQuMzY2IDMxOS4zNTIgMzA0LjM5N0MzMTkuMTY1IDMwNC40NjYgMzE4Ljk3OCAzMDQuNTM1IDMxOC44NTYgMzA0LjY2MkwzMTguODM1IDMwNC42ODNDMzE4LjUgMzA1LjAzNSAzMTguMTM3IDMwNS40MTYgMzE3Ljk3OSAzMDUuODQ5QzMxNy4zOTggMzA3LjQ1IDMxNi44MjEgMzA5LjA2IDMxNi4zOTYgMzEwLjcwMkMzMTYuMTAyIDMxMS44MzggMzE1LjU1NiAzMTIuNTM1IDMxNC4zMTQgMzEyLjY4OEMzMTMuNzgxIDMxMi43NTMgMzEzLjI0OCAzMTIuODIzIDMxMi43MTYgMzEyLjg5MkgzMTIuNzE0TDMxMi43MSAzMTIuODkzQzMxMC4wMTMgMzEzLjI0NSAzMDcuMzI4IDMxMy41OTUgMzA0LjU0NiAzMTMuNDQzQzMwMS44MTcgMzEzLjI5NCAyOTkuMDcgMzEzLjQzNyAyOTYuMzI1IDMxMy41OEMyOTUuMzA2IDMxMy42MzQgMjk0LjI4OCAzMTMuNjg3IDI5My4yNyAzMTMuNzI1QzI5Mi45MjIgMzEzLjczOCAyOTIuNTc2IDMxMy44MDkgMjkyLjIzIDMxMy44NzlDMjkxLjg1MiAzMTMuOTU3IDI5MS40NzUgMzE0LjAzNCAyOTEuMDk3IDMxNC4wMzZDMjkwLjg1IDMxNC4wMzcgMjkwLjYwMSAzMTQuMDQyIDI5MC4zNSAzMTQuMDQ4QzI4OS4yMzYgMzE0LjA3MyAyODguMDk4IDMxNC4wOTggMjg3LjExNCAzMTMuNzUyQzI4Ni43NzQgMzEzLjYzMyAyODYuNjYyIDMxMi45MTYgMjg2LjU1IDMxMi4xOTNDMjg2LjQ5NyAzMTEuODU0IDI4Ni40NDQgMzExLjUxNCAyODYuMzY2IDMxMS4yMzRDMjg2LjM0OCAzMTEuMTY2IDI4Ni4yOTggMzExLjEwNSAyODYuMjQ5IDMxMS4wNDRDMjg2LjIyNyAzMTEuMDE3IDI4Ni4yMDYgMzEwLjk5MSAyODYuMTg2IDMxMC45NjNDMjg1Ljk2IDMxMC42MzkgMjg1LjczMyAzMTAuMzE1IDI4NS41MDYgMzA5Ljk5MUwyODUuMjMgMzA5LjU5N0MyODUuMTYyIDMwOS43NjIgMjg1LjA4IDMwOS45MjQgMjg0Ljk5NyAzMTAuMDg4QzI4NC44MTYgMzEwLjQ0NSAyODQuNjM1IDMxMC44MDIgMjg0LjYxNSAzMTEuMTY3QzI4NC41MzIgMzEyLjcyNiAyODQuNDg0IDMxNC4yOTkgMjg0LjYwNiAzMTUuODUzQzI4NC44MjcgMzE4LjY3NiAyODQuMTI2IDMyMS4zNCAyODMuNDI0IDMyNC4wMDdDMjgzLjE5NSAzMjQuODc1IDI4Mi45NjYgMzI1Ljc0MyAyODIuNzcgMzI2LjYxN0MyODIuNDUzIDMyOC4wMjQgMjgxLjU0IDMyOC4zMjMgMjgwLjI1MSAzMjguMTE0QzI3Ni45NjIgMzI3LjU3OSAyNzMuNjg2IDMyNy4wODcgMjcwLjMzNSAzMjcuNzU2QzI2OS4zMTkgMzI3Ljk1OSAyNjguMjg1IDMyOC4wOTkgMjY3LjI1MSAzMjguMjRDMjY1LjUzNiAzMjguNDcyIDI2My44MjUgMzI4LjcwNCAyNjIuMjA3IDMyOS4yMkMyNTkuMDkyIDMzMC4yMTIgMjU2LjAzMSAzMzEuNTQ2IDI1My4yMjYgMzMzLjE3NkMyNTEuODIyIDMzMy45OTEgMjUxLjQzNSAzMzMuOTIyIDI1MC45MTQgMzMyLjY0OEMyNTAuMzg5IDMzMS4zNjQgMjQ5Ljg1IDMzMC4wODQgMjQ5LjMxMSAzMjguODA0QzI0OC4wNTYgMzI1LjgyMiAyNDYuODAxIDMyMi44NCAyNDUuNzE4IDMxOS44MDJDMjQ1LjE3OCAzMTguMjg2IDI0NC44OTYgMzE2LjY4OCAyNDQuNjE0IDMxNS4wODdDMjQ0LjQ1NSAzMTQuMTgyIDI0NC4yOTYgMzEzLjI3NyAyNDQuMDkgMzEyLjM4NkMyNDMuOTU0IDMxMS43OTcgMjQzLjgxNSAzMTEuMjEgMjQzLjY3OCAzMTAuNjIyTDI0My42NzcgMzEwLjYyQzI0Mi4yMzkgMzA0LjUwNCAyNDAuODA4IDI5OC40MTQgMjQxLjY2NiAyOTEuOTk3QzI0Mi4yNDEgMjg3LjcwMiAyNDQuNzgyIDI4NC41NjIgMjQ4LjgyOSAyODMuMTg3QzI1NC44NDUgMjgxLjE0MyAyNjEuMTEgMjgwLjIyNiAyNjcuMzcyIDI3OS4zMUwyNjcuMzkzIDI3OS4zMDdDMjY3Ljg3NiAyNzkuMjM2IDI2OC4zNTkgMjc5LjE2NiAyNjguODQyIDI3OS4wOTRDMjcxLjYwNCAyNzguNjg3IDI3NC4zNzcgMjc4LjM0NiAyNzcuMTQ5IDI3OC4wMDRMMjc3LjE1OSAyNzguMDAzSDI3Ny4xNjFDMjc4LjkwMiAyNzcuNzg4IDI4MC42NDIgMjc3LjU3NCAyODIuMzgxIDI3Ny4zNDNDMjgyLjU3MiAyNzcuMzE4IDI4Mi43NDQgMjc3LjE2MiAyODIuOTE1IDI3Ny4wMDdDMjgyLjk5NSAyNzYuOTM2IDI4My4wNzUgMjc2Ljg2MyAyODMuMTU4IDI3Ni44MDRDMjgzLjA4MiAyNzYuNzE4IDI4My4wMDcgMjc2LjYxIDI4Mi45MzMgMjc2LjUwMkMyODIuNzcyIDI3Ni4yNjkgMjgyLjYxMSAyNzYuMDM0IDI4Mi40MzkgMjc2LjAyN0MyODIuMjQ5IDI3Ni4wMTggMjgyLjA1OCAyNzYuMDA5IDI4MS44NjcgMjc2LjAwMUMyODAuNDUgMjc1LjkzNCAyNzkuMDIyIDI3NS44NjYgMjc3LjYyNCAyNzYuMDIzQzI3NS4wNTYgMjc2LjMxMSAyNzIuNTAxIDI3Ni43MDUgMjY5Ljk0NiAyNzcuMUMyNjkuMzY4IDI3Ny4xOSAyNjguNzkxIDI3Ny4yNzkgMjY4LjIxNCAyNzcuMzY3QzI2Ny41NjYgMjc3LjQ2NiAyNjYuOTE3IDI3Ny41NjIgMjY2LjI2OSAyNzcuNjZDMjYzLjY4MSAyNzguMDQ4IDI2MS4wOTIgMjc4LjQzNiAyNTguNTI1IDI3OC45MjVDMjU2LjkwNiAyNzkuMjMzIDI1NS4zMDUgMjc5LjYyMSAyNTMuNzAzIDI4MC4wMTFMMjUzLjcwMiAyODAuMDExQzI1Mi42MDYgMjgwLjI3OCAyNTEuNTA5IDI4MC41NDQgMjUwLjQwNiAyODAuNzg0QzI0Ni4xMjYgMjgxLjcxOCAyNDIuODk4IDI4My45NDggMjQwLjc4NSAyODcuNjgyQzIzOS42OTMgMjg5LjYxMyAyMzkuNTY2IDI5MS42ODcgMjM5LjYwNiAyOTMuNzgyQzIzOS42NTIgMjk2LjE5NCAyMzkuNzUzIDI5OC42MSAyMzkuOTcgMzAxLjAxMUMyNDAuMTQ2IDMwMi45NjIgMjQwLjQ3IDMwNC45MDcgMjQwLjgzNyAzMDYuODM1QzI0MS4xNDMgMzA4LjQ1IDI0MS40OTUgMzEwLjA1NiAyNDEuODQ3IDMxMS42NjJDMjQyLjA0OSAzMTIuNTgyIDI0Mi4yNSAzMTMuNTAxIDI0Mi40NDMgMzE0LjQyMkMyNDIuNTc0IDMxNS4wNDggMjQyLjY3OCAzMTUuNjgzIDI0Mi43ODEgMzE2LjMxN0MyNDIuOTkgMzE3LjYxMSAyNDMuMjAxIDMxOC45MDUgMjQzLjY0OCAzMjAuMTE5QzI0NC41MSAzMjIuNDU1IDI0NS40OTQgMzI0Ljc1MSAyNDYuNDc4IDMyNy4wNDZDMjQ3LjA0MiAzMjguMzY1IDI0Ny42MDkgMzI5LjY4NSAyNDguMTUxIDMzMS4wMTNDMjQ4LjM4NyAzMzEuNTkxIDI0OC42NjMgMzMyLjE1NyAyNDguOTM5IDMzMi43MjRDMjQ5Ljc3OCAzMzQuNDQ0IDI1MC42MTcgMzM2LjE2NyAyNTAuMzQ2IDMzOC4yMjFDMjUwLjMgMzM4LjU2MyAyNTAuNTg0IDMzOC45NjIgMjUwLjg1IDMzOS4zMzRDMjUwLjkyMiAzMzkuNDM1IDI1MC45OTIgMzM5LjUzNSAyNTEuMDU0IDMzOS42M0MyNTIuMjkyIDM0MS41MyAyNTQuMzE4IDM0MS42MzYgMjU2LjI1NiAzNDEuNzM5QzI1Ni40NjkgMzQxLjc0OSAyNTYuNjggMzQxLjc2MSAyNTYuODg5IDM0MS43NzVDMjU4LjEwMiAzNDEuODUyIDI1OC43MjIgMzQyLjMyOCAyNTkuMDg3IDM0My4yNTVDMjU5LjYyNiAzNDQuNjIxIDI2MC4xNDIgMzQ1Ljk5NiAyNjAuNjU4IDM0Ny4zNzJDMjYxLjEzIDM0OC42MzIgMjYxLjYwNCAzNDkuODkyIDI2Mi4wOTQgMzUxLjE0NkMyNjIuNTE4IDM1Mi4yMyAyNjIuOTYgMzUzLjMwNyAyNjMuNDAzIDM1NC4zODNDMjYzLjkxIDM1NS42MTUgMjY0LjQxNyAzNTYuODQ4IDI2NC44OTQgMzU4LjA5QzI2NS4zNyAzNTkuMzI4IDI2NS45OTggMzU5LjQ4IDI2Ny4xNDggMzU4Ljc3NkMyNjguNTQxIDM1Ny45MjQgMjY5Ljk1IDM1Ny4wOTUgMjcxLjM1OSAzNTYuMjY2TDI3MS4zNjIgMzU2LjI2NEMyNzMuMDM4IDM1NS4yNzggMjc0LjcxNCAzNTQuMjkyIDI3Ni4zNjMgMzUzLjI2NkMyNzYuNzgyIDM1My4wMDYgMjc3LjE1NCAzNTIuMTYxIDI3Ny4wMzcgMzUxLjcwN0MyNzYuNTU0IDM0OS44MzMgMjc1Ljk5MyAzNDcuOTc4IDI3NS40MyAzNDYuMTIzTDI3NS40MyAzNDYuMTIxVjM0Ni4xMkMyNzUuMjAzIDM0NS4zNzMgMjc0Ljk3NyAzNDQuNjI3IDI3NC43NTUgMzQzLjg3OEMyNzQuNjMgMzQzLjQ1MyAyNzQuNDc2IDM0My4wMjcgMjc0LjMyMyAzNDIuNkMyNzMuOTU5IDM0MS41OTEgMjczLjU5NiAzNDAuNTggMjczLjU5NiAzMzkuNTdDMjczLjU5NiAzMzguMzg4IDI3NC41MTYgMzM4LjA4MyAyNzUuNDY0IDMzNy43NjhDMjc2LjEgMzM3LjU1NiAyNzYuNzQ5IDMzNy4zNDEgMjc3LjE0MiAzMzYuODU0QzI3Ny4zMTYgMzM2LjYzNyAyNzcuNjMyIDMzNi41MyAyNzcuOTUzIDMzNi40MjJDMjc4LjEyNyAzMzYuMzYyIDI3OC4zMDMgMzM2LjMwMiAyNzguNDU4IDMzNi4yMjVDMjgxLjI5NiAzMzQuNzkzIDI4My43NyAzMzMuMTExIDI4NC4yMiAzMjkuNjg2QzI4NC40NTIgMzI3LjkyIDI4NC45MzkgMzI2LjE5OSAyODUuNDI3IDMyNC40NzdDMjg2LjE3IDMyMS44NTggMjg2LjkxMiAzMTkuMjM4IDI4Ni43NTggMzE2LjQ1NkMyODYuNzQ2IDMxNi4yMzkgMjg3LjEzOCAzMTUuODE3IDI4Ny4zNyAzMTUuNzk4QzI4OS4zOTkgMzE1LjYzNSAyOTEuNDM0IDMxNS40NzMgMjkzLjQ2OSAzMTUuNDQyQzI5NC45NTUgMzE1LjQxOSAyOTYuNDQyIDMxNS40MyAyOTcuOTMgMzE1LjQ0MUgyOTcuOTMzQzI5OS45NTcgMzE1LjQ1NiAzMDEuOTgyIDMxNS40NyAzMDQuMDAyIDMxNS40QzMwNS4wMTQgMzE1LjM2NCAzMDYuMDMyIDMxNS40MDQgMzA3LjA1IDMxNS40NDRDMzA5LjQwOCAzMTUuNTM2IDMxMS43NyAzMTUuNjI5IDMxNC4wODIgMzE0Ljc4N0MzMTQuNjEgMzE0LjU5NCAzMTUuODg1IDMxNC4yMjQgMzE1LjY1NyAzMTUuNzE1QzMxNS40NTkgMzE3LjAwNyAzMTUuMjcxIDMxOC4zIDMxNS4wODIgMzE5LjU5M1YzMTkuNTk1QzMxNC42OTggMzIyLjIzOSAzMTQuMzEyIDMyNC44ODUgMzEzLjg0OCAzMjcuNTE3QzMxMy4zNjQgMzMwLjI2MyAzMTIuNzk1IDMzMi45OTcgMzEyLjIyNiAzMzUuNzNMMzEyLjIyNiAzMzUuNzMxTDMxMi4yMjIgMzM1Ljc1MUMzMTEuOTg5IDMzNi44NjkgMzExLjc1NiAzMzcuOTg3IDMxMS41MjkgMzM5LjEwNkMzMTEuMzQxIDM0MC4wMzQgMzExLjE0OSAzNDAuOTYyIDMxMC45NTcgMzQxLjg5QzMxMC42MTMgMzQzLjU1MSAzMTAuMjY5IDM0NS4yMTIgMzA5Ljk0NyAzNDYuODc3TDMwOS44NSAzNDcuMzgxQzMwOS4zNzggMzQ5LjgxOSAzMDguOTA2IDM1Mi4yNTkgMzA4LjUyNiAzNTQuNzExQzMwNy44ODIgMzU4Ljg2OCAzMDcuMjk4IDM2My4wMzQgMzA2Ljc0IDM2Ny4yMDJDMzA2LjY2IDM2Ny44MDEgMzA2LjYzOCAzNjguNDExIDMwNi42MTYgMzY5LjAxOUMzMDYuNTg0IDM2OS45MjEgMzA2LjU1MiAzNzAuODIyIDMwNi4zMyAzNzEuNjc5QzMwNS4yNjUgMzc1Ljc4NiAzMDQuODIgMzc5LjkyOSAzMDQuOTI4IDM4NC4xNTJDMzA0Ljk3IDM4NS43ODUgMzA0Ljk2MSAzODcuNDIgMzA0Ljk1MSAzODkuMDU2QzMwNC45NDUgMzkwLjE2NSAzMDQuOTM4IDM5MS4yNzMgMzA0Ljk0NyAzOTIuMzgxQzMwNC45NTIgMzkyLjg4NyAzMDQuOTI3IDM5My40MDQgMzA0LjkwMiAzOTMuOTIxQzMwNC44NDEgMzk1LjIxNiAzMDQuNzc4IDM5Ni41MTcgMzA1LjE3IDM5Ny42NzFDMzA2LjQzNyA0MDEuNCAzMDkuNjc3IDQwMy4zMTkgMzEzLjQzMyA0MDQuMTkyQzMxNi42MDMgNDA0LjkyOCAzMTkuODU0IDQwNS4zMjMgMzIzLjE4OSA0MDQuOTc3QzMyNS44MjEgNDA0LjcwNSAzMjguMDcyIDQwMy43NDkgMzI5LjQzMyA0MDEuNzIxQzMzMS41NTUgMzk4LjU1OCAzMzMuNTAxIDM5NS4yNDYgMzM1LjEyNSAzOTEuODIzQzMzNy43OTEgMzg2LjIwNCAzNDAuMjQ2IDM4MC40ODYgMzQyLjU4NiAzNzQuNzM0QzM0My42MSAzNzIuMjE3IDM0NC40NzQgMzY5LjY0MiAzNDUuMzM5IDM2Ny4wNjZMMzQ1LjM0NiAzNjcuMDQ3QzM0NS43OTkgMzY1LjY5NyAzNDYuMjUyIDM2NC4zNDcgMzQ2LjcyOSAzNjMuMDA2QzM0Ny4yMDMgMzYxLjY3IDM0Ny42OTQgMzYwLjMzOSAzNDguMTg0IDM1OS4wMDlMMzQ4LjE4NSAzNTkuMDA3QzM0OSAzNTYuNzk4IDM0OS44MTQgMzU0LjU4OCAzNTAuNTU0IDM1Mi4zNTZDMzUxLjUyOCAzNDkuNDE4IDM1Mi4zNTcgMzQ2LjQzMSAzNTMuMTM3IDM0My40MzlDMzU0LjIzMyAzMzkuMjM3IDM1NS4yNSAzMzUuMDE0IDM1Ni4yNDUgMzMwLjc4N0MzNTYuMzIyIDMzMC40NTkgMzU2LjQxMSAzMzAuMTI2IDM1Ni41MDIgMzI5Ljc5QzM1Ni44MyAzMjguNTYzIDM1Ny4xNjcgMzI3LjMwOCAzNTYuOTUgMzI2LjE2OEMzNTYuNzIxIDMyNC45NjUgMzU3LjE4NyAzMjQuNzE2IDM1Ny45MjggMzI0LjQwNkMzNTguMTg2IDMyNC4yOTkgMzU4LjQ0NiAzMjQuMTkzIDM1OC43MDUgMzI0LjA4OEMzNjAuODcyIDMyMy4yMTIgMzYzLjAzIDMyMi4zNCAzNjMuOTc1IDMxOS45NDdDMzY0LjA5NSAzMTkuNjQyIDM2NC4yMTggMzE5LjMzOCAzNjQuMzQgMzE5LjAzM0wzNjQuMzQyIDMxOS4wMjlDMzY0Ljc5NCAzMTcuOTA0IDM2NS4yNDYgMzE2Ljc3NyAzNjUuNjAyIDMxNS42MjRDMzY1Ljc2NyAzMTUuMDg5IDM2NS45MzggMzE0LjU1MyAzNjYuMTEgMzE0LjAxN0MzNjYuNzU0IDMxMiAzNjcuNDAyIDMwOS45NzggMzY3LjczNSAzMDcuOTEyQzM2OC4zMjYgMzA0LjI2IDM2OC42NDEgMzAwLjU1MyAzNjguODMyIDI5Ni44NThDMzY5LjA4NSAyOTEuOTc3IDM2OS4xNTQgMjg3LjA4NSAzNjkuMTk5IDI4Mi4xOTdDMzY5LjIxMSAyODAuODU4IDM2OS4xMTUgMjc5LjUxOSAzNjkuMDE5IDI3OC4xNzlDMzY4Ljk2MiAyNzcuMzc1IDM2OC45MDQgMjc2LjU3IDM2OC44NyAyNzUuNzY0QzM2OC43ODcgMjczLjgyNyAzNjguNzE5IDI3MS44ODkgMzY4LjY1MiAyNjkuOTVWMjY5Ljk0NEMzNjguNTE0IDI2NS45NzYgMzY4LjM3NSAyNjIuMDA4IDM2OC4xMSAyNTguMDQ5QzM2Ny44NDcgMjU0LjExIDM2Ny4zOTIgMjUwLjE2MiAzNjYuNjc2IDI0Ni4yNzdDMzY1LjY1MyAyNDAuNzE5IDM2NC4xNDYgMjM1LjI1MiAzNjEuMzU1IDIzMC4yMzJDMzYxLjEwNSAyMjkuNzgyIDM2MC44NTUgMjI5LjMzMSAzNjAuNjA2IDIyOC44ODFDMzU4LjA5NCAyMjQuMzU2IDM1NS41NzggMjE5LjgyMyAzNTIuNzEyIDIxNS41MUMzNTAuODM3IDIxMi42ODYgMzQ4LjQyMiAyMTAuMDc2IDM0NS43OTcgMjA3Ljg2NEMzNDUgMjA3LjE5MyAzNDQuMTU5IDIwNi41NjggMzQzLjMxOCAyMDUuOTQzQzM0MS42NSAyMDQuNzA0IDMzOS45OCAyMDMuNDY0IDMzOC42NDcgMjAxLjg1NEMzMzguMzkgMjAxLjU0NCAzMzguMjMyIDIwMS4wODYgMzM4LjIyNiAyMDAuNjk0QzMzOC4yMjQgMjAwLjUzNCAzMzguNzQzIDIwMC4yNDEgMzM5LjA0IDIwMC4yMjNDMzQyLjQyOSAyMDAuMDE4IDM0NS4wMzIgMTk4LjI0MyAzNDcuMjIzIDE5Ni4wNTJDMzUxLjEyNiAxOTIuMTUxIDM1My43MTQgMTg3LjU0IDM1NS4wMDUgMTgyLjE4MUMzNTUuMDc0IDE4MS44OTIgMzU1LjE0NSAxODEuNjAzIDM1NS4yMTUgMTgxLjMxNVYxODEuMzEyQzM1Ni4wMiAxNzguMDIxIDM1Ni44MTMgMTc0Ljc4IDM1NS45OTcgMTcxLjM5MUMzNTQuNjQyIDE2NS43NjMgMzUxLjgwOCAxNjAuODA4IDM0Ny42MjYgMTU2Ljc0M0MzNDEuMTgyIDE1MC40OCAzMzMuMjcyIDE0OC42MTQgMzI0LjM1NiAxNTAuNTExQzMyMy45OTQgMTUwLjU4OSAzMjMuNTggMTUwLjU0NSAzMjMuMjEgMTUwLjQ3QzMyMi44NjIgMTUwLjM5OSAzMjIuNTE1IDE1MC4yOTggMzIyLjE3IDE1MC4xOThDMzIxLjU0MiAxNTAuMDE1IDMyMC45MTcgMTQ5LjgzMyAzMjAuMjkgMTQ5LjgzMkMzMTguMDE4IDE0OS44MjcgMzE1LjcxNSAxNDkuODQyIDMxMy40ODIgMTUwLjE4OUMzMTEuNjAzIDE1MC40ODEgMzA5Ljc2OCAxNTEuMDc2IDMwNy45NDggMTUxLjY2NkgzMDcuOTQ3QzMwNy43MTkgMTUxLjc0IDMwNy40OSAxNTEuODE0IDMwNy4yNjIgMTUxLjg4N0MzMDYuOTIyIDE1MS45OTYgMzA2LjY1NSAxNTIuMzE0IDMwNi4zODggMTUyLjYzM0MzMDYuMjY2IDE1Mi43NzkgMzA2LjE0MiAxNTIuOTI2IDMwNi4wMTMgMTUzLjA1MUMzMDYuMTk0IDE1My4xMDUgMzA2LjM3OCAxNTMuMTc4IDMwNi41NjIgMTUzLjI1MUMzMDYuOTY2IDE1My40MSAzMDcuMzcgMTUzLjU3IDMwNy43NSAxNTMuNTI4QzMwOC42MzkgMTUzLjQyOSAzMDkuNTE4IDE1My4yNTIgMzEwLjM5OCAxNTMuMDc0QzMxMC45NDcgMTUyLjk2NCAzMTEuNDk1IDE1Mi44NTMgMzEyLjA0NiAxNTIuNzYxQzMxMi4yODkgMTUyLjcyMSAzMTIuNTQ2IDE1Mi43NjMgMzEyLjgwMiAxNTIuODA2QzMxMi45MiAxNTIuODI1IDMxMy4wMzggMTUyLjg0NCAzMTMuMTU1IDE1Mi44NTZDMzEzLjA2OSAxNTIuOTY2IDMxMi45OSAxNTMuMDkgMzEyLjkxIDE1My4yMTRDMzEyLjczOSAxNTMuNDgzIDMxMi41NjggMTUzLjc1MiAzMTIuMzE4IDE1My44ODZDMzExLjcxMiAxNTQuMjEyIDMxMS4wODIgMTU0LjUwMyAzMTAuNDUzIDE1NC43OTNDMzA5LjQzNCAxNTUuMjY0IDMwOC40MTYgMTU1LjczNCAzMDcuNTA0IDE1Ni4zNUMzMDcuMTgxIDE1Ni41NjggMzA2Ljg0NiAxNTYuNzc5IDMwNi41MSAxNTYuOTlDMzA1LjAyIDE1Ny45MyAzMDMuNTA1IDE1OC44ODUgMzAyLjc5OCAxNjAuNjE1QzMwMi43MTkgMTYwLjgwNiAzMDIuNzI1IDE2MS4wMjkgMzAyLjczIDE2MS4yNTNDMzAyLjczMyAxNjEuMzU1IDMwMi43MzYgMTYxLjQ1OSAzMDIuNzMgMTYxLjU1OUMzMDIuODM0IDE2MS41NDUgMzAyLjk0NCAxNjEuNTQxIDMwMy4wNTQgMTYxLjUzNkMzMDMuMjkzIDE2MS41MjYgMzAzLjUzMSAxNjEuNTE2IDMwMy43MDkgMTYxLjQxMVpNMzQyLjI4MyAyMDkuMTY3QzMzOS4zOSAyMTIuNjQ3IDMzNi43NSAyMTYuMzAzIDMzNS4yOTYgMjIwLjYwOEMzMzEuNzI2IDIyNi45MzEgMzMwLjUxOCAyMzMuNTI2IDMzMS4wNDggMjQwLjQwMUMzMzEuMjI0IDI0Mi42ODggMzMxLjU3NyAyNDQuOTYyIDMzMS45MyAyNDcuMjM2TDMzMS45MyAyNDcuMjRDMzMyLjEwNiAyNDguMzcgMzMyLjI4MiAyNDkuNTAzIDMzMi40MzYgMjUwLjYzNkMzMzIuNTM2IDI1MS4zNzMgMzMyLjYyNSAyNTIuMTEyIDMzMi43MTQgMjUyLjg1VjI1Mi44NTFDMzMyLjg1NiAyNTQuMDE4IDMzMi45OTggMjU1LjE4NyAzMzMuMTgxIDI1Ni4zNDhDMzMzLjIyNCAyNTYuNjIzIDMzMy40MyAyNTYuODczIDMzMy42MzggMjU3LjEyNEMzMzMuNzMyIDI1Ny4yMzkgMzMzLjgyOCAyNTcuMzU1IDMzMy45MDYgMjU3LjQ3M0MzMzQuMDE1IDI1Ny4zMjYgMzM0LjE1MSAyNTcuMTggMzM0LjI4OCAyNTcuMDM0QzMzNC41ODYgMjU2LjcxNSAzMzQuODg1IDI1Ni4zOTYgMzM0Ljg4NiAyNTYuMDc2QzMzNC44OTQgMjU0LjUyOSAzMzQuNzMxIDI1Mi45NzQgMzM0LjUyOSAyNTEuNDM2QzMzNC40MTIgMjUwLjU0MyAzMzQuMjU4IDI0OS42NTUgMzM0LjEwNiAyNDguNzY3QzMzMy44NzggMjQ3LjQ1MiAzMzMuNjUyIDI0Ni4xMzcgMzMzLjU0MiAyNDQuODEzQzMzMy4yOTYgMjQxLjg0MiAzMzMuMTk4IDIzOC44NTQgMzMzLjE3IDIzNS44NzFDMzMzLjEyNyAyMzEuMTUyIDMzNC40MjIgMjI2LjY5OSAzMzYuMzc0IDIyMi40MDlDMzM2LjU1NCAyMjIuMDE2IDMzNi43MzEgMjIxLjYyMSAzMzYuOTA5IDIyMS4yMjZWMjIxLjIyNUwzMzYuOTEgMjIxLjIyNEMzMzcuNzE0IDIxOS40MzQgMzM4LjUxOSAyMTcuNjQxIDMzOS40OTkgMjE1Ljk0M0MzNDAuNTgzIDIxNC4wNjUgMzQxLjkwNCAyMTIuMjk1IDM0My4yNzIgMjEwLjU4OUMzNDQuNTIyIDIwOS4wMzEgMzQ1LjMwNSAyMDkuMDExIDM0Ni41NjkgMjEwLjU1M0MzNDYuNzU5IDIxMC43ODYgMzQ2Ljk1IDIxMS4wMTggMzQ3LjE0MSAyMTEuMjVDMzQ5LjM4MyAyMTMuOTc2IDM1MS42MTQgMjE2LjY4OSAzNTMuMjI0IDIxOS44OTRDMzU0LjQ2MyAyMjIuMzYyIDM1NS44NzUgMjI0Ljc0OSAzNTcuMjg3IDIyNy4xMzdMMzU3LjI4OSAyMjcuMTM5QzM1OC41ODIgMjI5LjMyOCAzNTkuODc3IDIzMS41MTYgMzYxLjAzOSAyMzMuNzY3QzM2MS45MyAyMzUuNDkyIDM2Mi4zODIgMjM3LjQ0IDM2Mi44MjggMjM5LjM2N0MzNjIuOTI2IDIzOS43OTQgMzYzLjAyNiAyNDAuMjIgMzYzLjEyOSAyNDAuNjQxQzM2My44NDYgMjQzLjU3MiAzNjQuNDM2IDI0Ni41MzQgMzY1LjAwOCAyNDkuNDk1QzM2NS4xMTggMjUwLjA2OSAzNjUuMjM2IDI1MC42NDMgMzY1LjM1NCAyNTEuMjE4TDM2NS4zNTQgMjUxLjIyQzM2NS43NzIgMjUzLjI1OSAzNjYuMTkgMjU1LjMwNCAzNjYuMzE0IDI1Ny4zNkMzNjYuNDk1IDI2MC4zODggMzY2LjU0NyAyNjMuNDIzIDM2Ni41OTkgMjY2LjQ1N1YyNjYuNDY1QzM2Ni42MzMgMjY4LjQxMSAzNjYuNjY2IDI3MC4zNTcgMzY2LjczNCAyNzIuMzAyQzM2Ni44IDI3NC4yMDcgMzY2LjkxMSAyNzYuMTEzIDM2Ny4wMjMgMjc4LjAxOVYyNzguMDJDMzY3LjIyNiAyODEuNTA3IDM2Ny40MyAyODQuOTkyIDM2Ny4zNTggMjg4LjQ3M0MzNjcuMzAyIDI5MS4xMiAzNjcuMDAyIDI5My43NjEgMzY2LjcwMiAyOTYuNDAyQzM2Ni40MzIgMjk4Ljc2OSAzNjYuMTYzIDMwMS4xMzcgMzY2LjA3IDMwMy41MUMzNjUuOTI5IDMwNy4wOTUgMzY0Ljg3MiAzMTAuNDQ4IDM2My44MTggMzEzLjc5NUMzNjMuNDE2IDMxNS4wNjggMzYzLjAxNSAzMTYuMzQxIDM2Mi42NjUgMzE3LjYyNUMzNjIuMTY1IDMxOS40NTkgMzYwLjc5MiAzMjEuMjM2IDM1OC4zNDYgMzIyLjA0OUMzNTYuNzQ2IDMyMi41NzkgMzU1LjIzMyAzMjMuMzQzIDM1My43MTggMzI0LjEwN0gzNTMuNzE2QzM1Mi4yNDUgMzI0Ljg1IDM1MC43NzQgMzI1LjU5MiAzNDkuMjI0IDMyNi4xMjFDMzQ3LjE2IDMyNi44MjYgMzQ0Ljk0NyAzMjcuMTQ0IDM0Mi43NDQgMzI3LjQ2MUMzNDIuMTAxIDMyNy41NTMgMzQxLjQ1OSAzMjcuNjQ1IDM0MC44MjIgMzI3Ljc0N0MzMzkuODE4IDMyNy45MDcgMzM4LjY4OCAzMjguMDA2IDMzNy43NDQgMzI3LjcyOEMzMzQuODk2IDMyNi44OTMgMzM0LjUwNyAzMjYuMzU2IDMzNC41OTggMzIzLjUxOUMzMzQuNzgzIDMxNy43MjcgMzM1LjAyMiAzMTEuOTM1IDMzNS4zMSAzMDYuMTQ2QzMzNS40MDIgMzA0LjMwNiAzMzUuNTQ4IDMwMi40NjkgMzM1LjY5NCAzMDAuNjMyQzMzNS44MDUgMjk5LjI1MSAzMzUuOTE1IDI5Ny44NjkgMzM2LjAwMiAyOTYuNDg2QzMzNi4wMjkgMjk2LjA1NiAzMzYuMDU4IDI5NS42MjYgMzM2LjA4NiAyOTUuMTk1VjI5NS4xOTJDMzM2LjIyOCAyOTMuMDQzIDMzNi4zNzEgMjkwLjg5MSAzMzYuMzI3IDI4OC43NDNDMzM2LjI4MyAyODYuNTQ4IDMzNS45NjYgMjg0LjM1IDMzNS42MzIgMjgyLjE3M0MzMzUuMzEgMjgwLjA3NCAzMzYuMTg2IDI3OS40NTEgMzM4LjQyOSAyNzkuODExQzM0My4zNjkgMjgwLjYwMiAzNDguMjI2IDI4MC4xNjEgMzUyLjYwNiAyNzcuNjY3QzM1NS4zNzIgMjc2LjA5MSAzNTYuNDQ2IDI3My4yMzEgMzU3LjAxMiAyNzAuMzk5QzM1Ny4yOTcgMjY4Ljk3NCAzNTcuMzc0IDI2Ny41MTIgMzU3LjQ1MSAyNjYuMDQ4QzM1Ny41MjQgMjY0LjY3NiAzNTcuNTk3IDI2My4zMDMgMzU3Ljg0IDI2MS45NkMzNTguODk5IDI1Ni4xMjUgMzU4LjkxNCAyNTAuMjU4IDM1OC44NSAyNDQuMzc5QzM1OC44MzMgMjQyLjc2OCAzNTguNjc1IDI0MS4xNTMgMzU4LjQ3OCAyMzkuNTUzQzM1OC40NCAyMzkuMjQ0IDM1OC4yMjkgMjM4Ljk1NiAzNTguMDE4IDIzOC42NjhMMzU4LjAxNyAyMzguNjY3QzM1Ny45MiAyMzguNTM1IDM1Ny44MjMgMjM4LjQwMyAzNTcuNzQzIDIzOC4yNjlDMzU3LjYzNyAyMzguMzk3IDM1Ny41MSAyMzguNTIzIDM1Ny4zODIgMjM4LjY0OEMzNTcuMTAxIDIzOC45MjUgMzU2LjgxOSAyMzkuMjAyIDM1Ni43NyAyMzkuNTEzQzM1Ni42NDYgMjQwLjI4MyAzNTYuNjc3IDI0MS4wNzcgMzU2LjcwOCAyNDEuODY4VjI0MS44N1YyNDEuODcyQzM1Ni43MTUgMjQyLjA1NiAzNTYuNzIyIDI0Mi4yMzggMzU2LjcyNyAyNDIuNDJDMzU2Ljc2MiAyNDMuNjI1IDM1Ni44MTggMjQ0LjgzMiAzNTYuODc2IDI0Ni4wMzhDMzU3LjAwMSAyNDguNjczIDM1Ny4xMjYgMjUxLjMwOCAzNTcuMDExIDI1My45MzJDMzU2LjkzIDI1NS43NzUgMzU2LjU5NCAyNTcuNjA0IDM1Ni4yNTggMjU5LjQzNUMzNTYuMDQyIDI2MC42MTEgMzU1LjgyNiAyNjEuNzg5IDM1NS42NzcgMjYyLjk3QzM1NS41NTQgMjYzLjk0NyAzNTUuNTE3IDI2NC45MzQgMzU1LjQ4IDI2NS45MkMzNTUuNDQyIDI2Ni45NDkgMzU1LjQwMiAyNjcuOTc3IDM1NS4yNjcgMjY4Ljk5NEMzNTQuODY1IDI3MiAzNTMuNzkgMjc0Ljg5NyAzNTAuOTQ2IDI3Ni40MjhDMzQ5LjEyMSAyNzcuNDEgMzQ2LjgwNSAyNzcuOTI0IDM0NC42OTQgMjc3Ljk2M0MzNDIuMDM4IDI3OC4wMTMgMzM5LjM3NSAyNzcuODA5IDMzNi43MTMgMjc3LjYwNEMzMzUuNTg0IDI3Ny41MTggMzM0LjQ1NSAyNzcuNDMgMzMzLjMyNiAyNzcuMzYzQzMzMi42OTUgMjc3LjMyNSAzMzIuMDYyIDI3Ny4zIDMzMS40MjggMjc3LjI3NEgzMzEuNDI1QzMzMC4wODEgMjc3LjIyMSAzMjguNzM2IDI3Ny4xNjcgMzI3LjQwOCAyNzYuOTk1QzMyNC44ODggMjc2LjY2OCAzMjIuMzc4IDI3Ni4yNzMgMzE5Ljg2OCAyNzUuODc5QzMxOC42NCAyNzUuNjg1IDMxNy40MTIgMjc1LjQ5MiAzMTYuMTgzIDI3NS4zMDdDMzE1LjU0NyAyNzUuMjExIDMxNC45MTMgMjc1LjEwNyAzMTQuMjc4IDI3NS4wMDJMMzE0LjI2OCAyNzVDMzEyLjU1OCAyNzQuNzE4IDMxMC44NDcgMjc0LjQzNiAzMDkuMTI2IDI3NC4zMjdDMzA3LjU5OSAyNzQuMjMxIDMwNy42NjggMjczLjM4MyAzMDcuODMgMjcyLjUxNUMzMDcuOTMyIDI3MS45NjYgMzA4LjExNCAyNzEuNDI5IDMwOC4yOTYgMjcwLjg5NEMzMDguNTEgMjcwLjI2IDMwOC43MjUgMjY5LjYyOCAzMDguODA2IDI2OC45NzlDMzA5LjAwMiAyNjcuNDE3IDMwOC41ODYgMjY1Ljk2OCAzMDcuMDczIDI2NS4wMTJDMzA2LjAyNSAyNjQuMzUgMzA1Ljk5NCAyNjQuMTYxIDMwNy4yMDMgMjYzLjY3N0MzMDguNDIyIDI2My4xOSAzMDkuNzQ0IDI2Mi42OTEgMzExLjAzMiAyNjIuNjY0QzMxNi4yNjYgMjYyLjU1IDMyMS41MTIgMjYyLjQ0NyAzMjYuNzM4IDI2Mi42NzRDMzI5LjU3OCAyNjIuNzk3IDMzMi40MDQgMjYzLjIyNCAzMzUuMjI2IDI2My42NUMzMzYuMDY3IDI2My43NzcgMzM2LjkwOCAyNjMuOTAzIDMzNy43NDggMjY0LjAyM0MzMzguMDI1IDI2NC4wNjIgMzM4LjI2NiAyNjQuMjk1IDMzOC41MTIgMjY0LjUzM0MzMzguNjU4IDI2NC42NzQgMzM4LjgwNCAyNjQuODE2IDMzOC45NjEgMjY0LjkyMUMzMzkuMjE1IDI2NS4wOTEgMzM5LjYxMiAyNjUuMzQ5IDMzOS43OTYgMjY1LjI2NUMzNDAuMDM5IDI2NS4xNTQgMzQwLjI4NCAyNjQuNzQyIDM0MC4yNzIgMjY0LjQ2OUMzNDAuMTgxIDI2Mi40MDcgMzQwLjA3NyAyNjAuMzQyIDMzOS44NzQgMjU4LjI4N0MzMzkuODE3IDI1Ny43MDUgMzM5LjY5MyAyNTcuMTI4IDMzOS41NyAyNTYuNTUyQzMzOS40MzEgMjU1LjkwNSAzMzkuMjkzIDI1NS4yNiAzMzkuMjQ4IDI1NC42MDdDMzM5LjEyMSAyNTIuNzU3IDMzOS4wNTEgMjUwLjkwMyAzMzguOTgxIDI0OS4wNDlWMjQ5LjA0M0MzMzguOTQ1IDI0OC4wODggMzM4LjkwOSAyNDcuMTMzIDMzOC44NjUgMjQ2LjE3OUMzMzguODMgMjQ1LjQyIDMzOC43NjkgMjQ0LjY2IDMzOC43MDggMjQzLjkwMUMzMzguNTc5IDI0Mi4zMDMgMzM4LjQ1IDI0MC43MDYgMzM4LjU2OCAyMzkuMTI0QzMzOC43MzYgMjM2Ljg2NiAzMzkuMTE3IDIzNC42MjIgMzM5LjQ5OCAyMzIuMzc4QzMzOS42MzggMjMxLjU1NCAzMzkuNzc4IDIzMC43MjggMzM5LjkwNyAyMjkuOTAzQzMzOS45NTggMjI5LjU3NyAzNDAuMDA0IDIyOS4yNDggMzQwLjA1IDIyOC45MlYyMjguOTE5TDM0MC4wNSAyMjguOTE4QzM0MC4xOTkgMjI3Ljg0NiAzNDAuMzQ5IDIyNi43NjkgMzQwLjY5MSAyMjUuNzU2QzM0MS4zMzYgMjIzLjg0NSAzNDIuMzk3IDIyMi4wNjggMzQ0Ljc2NCAyMjEuODU2QzM0NS40NjggMjIxLjc5MyAzNDYuMTg5IDIyMS45NDUgMzQ2LjkxNCAyMjIuMDk4QzM0Ny4zMzEgMjIyLjE4NiAzNDcuNzUgMjIyLjI3NCAzNDguMTY2IDIyMi4zMjJDMzQ4LjYzOSAyMjIuMzc2IDM0OS4xMTkgMjIyLjM3MyAzNDkuNTk5IDIyMi4zN0MzNDkuODE1IDIyMi4zNjggMzUwLjAzIDIyMi4zNjcgMzUwLjI0NiAyMjIuMzcxQzM1MC4wOTggMjIyLjE4NCAzNDkuOTY0IDIyMS45NjMgMzQ5LjgzIDIyMS43NDNDMzQ5LjUzOCAyMjEuMjY2IDM0OS4yNDcgMjIwLjc5IDM0OC44MzEgMjIwLjY0OEMzNDUuMjgxIDIxOS40MzMgMzQxLjc0MiAyMTkuNjU1IDMzOS45ODIgMjIzLjY4MkMzMzkuMDI1IDIyNS44NzEgMzM4LjIwNiAyMjguMTk4IDMzNy44NjIgMjMwLjUzNUMzMzcuNzY1IDIzMS4xOTUgMzM3LjY2MiAyMzEuODU0IDMzNy41NiAyMzIuNTE0QzMzNi45ODIgMjM2LjI1MSAzMzYuNDAyIDIzOS45OTkgMzM2LjcxNCAyNDMuODE1QzMzNi45MTQgMjQ2LjI2IDMzNy4wODYgMjQ4LjcwNiAzMzcuMjU4IDI1MS4xNTJDMzM3LjQzNCAyNTMuNjUgMzM3LjYxIDI1Ni4xNDkgMzM3LjgxNiAyNTguNjQ1QzMzNy44NzkgMjU5LjQxNyAzMzguMDM3IDI2MC4xODIgMzM4LjE5NCAyNjAuOTQ4QzMzOC4yOTggMjYxLjQ1OCAzMzguNDAzIDI2MS45NjggMzM4LjQ4MSAyNjIuNDhDMzM4LjQ5NSAyNjIuNTc5IDMzOC4wNDkgMjYyLjg4NSAzMzcuODg0IDI2Mi44NDRDMzM3LjE5NSAyNjIuNjczIDMzNi41MSAyNjIuNDU1IDMzNS44MjYgMjYyLjIzNkMzMzQuNDg2IDI2MS44MDkgMzMzLjE0OCAyNjEuMzgyIDMzMS43OSAyNjEuMzE0QzMyNS42NiAyNjEuMDA3IDMxOS41MTEgMjYwLjg3MSAzMTMuMzc2IDI2MC45ODlDMzExLjQ5NyAyNjEuMDI1IDMxMS4zMzcgMjYwLjYzIDMxMS4zMjcgMjU5LjA2OEMzMTEuMjg2IDI1Mi40NTQgMzEzLjA1NiAyNDYuMjIzIDMxNS4zNzQgMjQwLjA4OUMzMTUuMzk4IDI0MC4wMjMgMzE1LjQ1OCAyMzkuOTU5IDMxNS41MTQgMjM5Ljg5OEMzMTUuNTg1IDIzOS44MjIgMzE1LjY1IDIzOS43NTEgMzE1LjYzOCAyMzkuNjg5QzMxNS41NDkgMjM5LjI2NSAzMTUuNDI5IDIzOC44NDYgMzE1LjMwOCAyMzguNDI4QzMxNS4yNjYgMjM4LjI4MSAzMTUuMjI0IDIzOC4xMzUgMzE1LjE4NCAyMzcuOTg4QzMxNS4wNzcgMjM4LjExNCAzMTQuOTU1IDIzOC4yMzQgMzE0LjgzNCAyMzguMzU0QzMxNC41NzEgMjM4LjYxNCAzMTQuMzA4IDIzOC44NzQgMzE0LjE5OCAyMzkuMTg0QzMxMy45MiAyMzkuOTcgMzEzLjYzIDI0MC43NTMgMzEzLjMzOCAyNDEuNTM3QzMxMi40NzcgMjQzLjg1NCAzMTEuNjE0IDI0Ni4xNzYgMzExLjA4NSAyNDguNTYzQzMxMC41MzQgMjUxLjA1MSAzMTAuMjUzIDI1My41OTUgMzA5Ljk3MyAyNTYuMTM5VjI1Ni4xNDJDMzA5Ljg1IDI1Ny4yNTEgMzA5LjcyOCAyNTguMzYgMzA5LjU4NCAyNTkuNDY2QzMwOS41NjIgMjU5LjYzMyAzMDkuNTcgMjU5LjgyMyAzMDkuNTggMjYwLjAxNEMzMDkuNjA5IDI2MC42MzIgMzA5LjYzOCAyNjEuMjYxIDMwOC42MzQgMjYxLjE1NUMzMDguMjkgMjYxLjExOCAzMDcuNzY0IDI1OS45MzIgMzA3Ljg0NyAyNTkuMzQyQzMwNy45NjMgMjU4LjUyMyAzMDguMDc1IDI1Ny43MDMgMzA4LjE4NiAyNTYuODgyQzMwOC42NzcgMjUzLjI4MSAzMDkuMTY4IDI0OS42NzMgMzEwLjAwOCAyNDYuMTQ2QzMxMC45MzcgMjQyLjI1IDMxMi4xODggMjM4LjQyNSAzMTMuNDM4IDIzNC42MDNMMzEzLjQ0MiAyMzQuNTg2QzMxMy43MTcgMjMzLjc0OSAzMTMuOTkgMjMyLjkxMSAzMTQuMjYxIDIzMi4wNzRDMzE0LjQ5IDIzMS4zNjIgMzE0LjkzNyAyMzAuNzEyIDMxNS4zODIgMjMwLjA2NkwzMTUuMzgzIDIzMC4wNjVWMjMwLjA2NEMzMTUuNTU4IDIyOS44MSAzMTUuNzM0IDIyOS41NTYgMzE1Ljg5NCAyMjkuMjk5QzMxNi42MTggMjI4LjE0NSAzMTcuMzU0IDIyNi45OTkgMzE4LjA5MSAyMjUuODUzTDMxOC41MTMgMjI1LjE5N0MzMTguNzYgMjI0LjgxMiAzMTkuMDEzIDIyNC40MyAzMTkuMjY2IDIyNC4wNDhDMzE5LjM4MiAyMjMuODc0IDMxOS40OTggMjIzLjY5OSAzMTkuNjEzIDIyMy41MjNDMzE5LjcyMiAyMjMuNzAzIDMxOS44NDUgMjIzLjg4IDMxOS45NjkgMjI0LjA1NkMzMjAuMjQyIDIyNC40NDUgMzIwLjUxNSAyMjQuODM0IDMyMC42MjIgMjI1LjI2MUMzMjAuNzc1IDIyNS44NzIgMzIwLjg2OCAyMjYuNDk3IDMyMC45NiAyMjcuMTIyQzMyMS4wNzQgMjI3Ljg5NyAzMjEuMTkgMjI4LjY3IDMyMS40MTggMjI5LjQxM0MzMjEuNjQ3IDIzMC4xNTMgMzIyLjMxIDIzMS4yMDcgMzIyLjkxIDIzMS4yOTdDMzIzLjY5OCAyMzEuNDE0IDMyNC45NDYgMjMwLjk1NyAzMjUuNDI5IDIzMC4zMzlDMzI4LjQzMSAyMjYuNDk2IDMzMS4zNSAyMjIuNTkyIDMzNC4yNjggMjE4LjY4OEMzMzUuMDQgMjE3LjY1NiAzMzUuODEyIDIxNi42MjMgMzM2LjU4NiAyMTUuNTkyQzMzNi43NzggMjE1LjMzNSAzMzYuOTg2IDIxNS4wNTYgMzM3LjA2IDIxNC43NTdDMzM3LjEwMiAyMTQuNTg5IDMzNy4wNTIgMjE0LjM5OSAzMzcuMDAyIDIxNC4yMUMzMzYuOTggMjE0LjEyNiAzMzYuOTU4IDIxNC4wNDIgMzM2Ljk0MyAyMTMuOTZDMzM2Ljg2NiAyMTMuOTkgMzM2Ljc3OSAyMTQuMDE0IDMzNi42OTMgMjE0LjAzN0MzMzYuNTA3IDIxNC4wODcgMzM2LjMyMSAyMTQuMTM4IDMzNi4yMjEgMjE0LjI1NkwzMzUuOTQ4IDIxNC41NzlDMzM0LjUyMyAyMTYuMjYgMzMzLjA5NyAyMTcuOTQzIDMzMS43MzMgMjE5LjY2OUMzMzAuMTc4IDIyMS42MzcgMzI4LjY0NiAyMjMuNjIxIDMyNy4xMTQgMjI1LjYwNUMzMjYuMzE3IDIyNi42MzkgMzI1LjUxOCAyMjcuNjczIDMyNC43MTggMjI4LjcwNEMzMjQuNjUyIDIyOC43ODggMzI0LjU3IDIyOC44NjEgMzI0LjQ4OCAyMjguOTM0QzMyNC4zOTQgMjI5LjAxNiAzMjQuMyAyMjkuMDk5IDMyNC4yMzIgMjI5LjE5OUMzMjQuMDY1IDIyOS40NDQgMzIzLjkxOCAyMjkuNzAyIDMyMy43NyAyMjkuOTZDMzIzLjcwOSAyMzAuMDY3IDMyMy42NDcgMjMwLjE3NCAzMjMuNTg1IDIzMC4yOEMzMjMuNTAyIDIzMC4xMTUgMzIzLjM5NyAyMjkuOTUgMzIzLjI5MiAyMjkuNzg1QzMyMy4wNjQgMjI5LjQyNiAzMjIuODM2IDIyOS4wNjcgMzIyLjgzNyAyMjguNzA4QzMyMi44NDQgMjI2LjY1IDMyMi40NjcgMjI0LjcwNiAzMjEuMzUzIDIyMi45NDJDMzIxLjI3OSAyMjIuODI1IDMyMS4yMTEgMjIyLjY5MyAzMjEuMTQyIDIyMi41NTlDMzIwLjgyOSAyMjEuOTQ5IDMyMC40OSAyMjEuMjkxIDMxOS40MjMgMjIxLjczM0MzMTkuMzc2IDIyMS43NTIgMzE4Ljk0IDIyMS4xODkgMzE4Ljg4OSAyMjAuODY5QzMxOC41NzIgMjE4LjkwOCAzMTkuMzY1IDIxNy44MDMgMzIxLjE1IDIxNi42MzJDMzIzLjczIDIxNC45NDMgMzI2LjMwOSAyMTMuMTk4IDMyOC42MDQgMjExLjE4QzMzMC40OTYgMjA5LjUxNiAzMzIuMjQ3IDIwNy43MDUgMzMzLjk5OSAyMDUuODk1QzMzNC44MTIgMjA1LjA1NCAzMzUuNjI2IDIwNC4yMTMgMzM2LjQ1MyAyMDMuMzg3QzMzNi41MzQgMjAzLjMwNiAzMzYuNjA2IDIwMy4yMjEgMzM2LjY3NCAyMDMuMTQxQzMzNy4wMTggMjAyLjczNiAzMzcuMjY3IDIwMi40NDQgMzM3LjkzNCAyMDMuNDQyQzMzOC42MTIgMjA0LjQ1OSAzMzkuNjM4IDIwNS4yNjMgMzQwLjY2NSAyMDYuMDY1QzM0MS4xMDYgMjA2LjQxIDM0MS41NDcgMjA2Ljc1NSAzNDEuOTYxIDIwNy4xMThMMzQxLjk3NCAyMDcuMTI5QzM0Mi42NSAyMDcuNzIxIDM0My4xMzQgMjA4LjE0NCAzNDIuMjgzIDIwOS4xNjdaTTI2Ni43OTQgMzI5LjcyTDI2Ny4wODcgMzI5LjY1OUMyNjcuNjgyIDMyOS44MTUgMjY4LjMzNyAzMzAuMDY4IDI2OC40NzggMzMwLjQ4MkMyNjkuNzMgMzM0LjE0OCAyNzAuOTE4IDMzNy44MzMgMjcyLjEwNiAzNDEuNTE4TDI3Mi41MDQgMzQyLjc1QzI3Mi42NDYgMzQzLjE5MiAyNzIuNzkgMzQzLjYzNCAyNzIuOTM0IDM0NC4wNzZDMjczLjQ4NCAzNDUuNzU4IDI3NC4wMzQgMzQ3LjQ0MSAyNzQuNDkyIDM0OS4xNDZDMjc0LjgxMSAzNTAuMzM1IDI3NC43MTEgMzUxLjMzOSAyNzMuMzM0IDM1Mi4yMjJDMjcxLjg5NCAzNTMuMTQ1IDI3MC41NzIgMzU0LjIzOCAyNjkuMjUgMzU1LjMzMkMyNjguNTMgMzU1LjkyNyAyNjcuODA4IDM1Ni41MjMgMjY3LjA2NyAzNTcuMDkzQzI2Ni4xOSAzNTcuNzY3IDI2NS45MTggMzU2Ljk3MyAyNjUuNzUgMzU2LjQ4MUMyNjUuNzMgMzU2LjQyNCAyNjUuNzEyIDM1Ni4zNyAyNjUuNjk0IDM1Ni4zMjRDMjY0LjkgMzU0LjIzOSAyNjQuMjA2IDM1Mi4xMTkgMjYzLjUyNSAzNDkuOTk2QzI2My40MTQgMzQ5LjY1IDI2My4yNTcgMzQ5LjI1OSAyNjMuMDk3IDM0OC44NjJDMjYyLjY2OCAzNDcuOCAyNjIuMjIxIDM0Ni42OSAyNjIuNTkzIDM0Ni4yNjVDMjYzLjM3OCAzNDUuMzY3IDI2NC41ODEgMzQ0LjgwNSAyNjUuNzgyIDM0NC4yNDNDMjY2LjI2MiAzNDQuMDIgMjY2Ljc0MSAzNDMuNzk1IDI2Ny4xOTMgMzQzLjU1QzI2Ny4yOTggMzQzLjQ5MyAyNjcuNDE0IDM0My40NTIgMjY3LjUzIDM0My40MTJDMjY3LjY3NCAzNDMuMzYxIDI2Ny44MTkgMzQzLjMxIDI2Ny45NDIgMzQzLjIyN0MyNjguMjQzIDM0My4wMjMgMjY4LjUyOSAzNDIuNzk2IDI2OC44MTQgMzQyLjU2OUMyNjguOTMxIDM0Mi40NzUgMjY5LjA1IDM0Mi4zODEgMjY5LjE2OSAzNDIuMjg5QzI2OC45NjQgMzQyLjIxIDI2OC43NDMgMzQyLjA5NCAyNjguNTIyIDM0MS45NzlDMjY4LjA0IDM0MS43MjcgMjY3LjU1OCAzNDEuNDc2IDI2Ny4yNDYgMzQxLjYwNUMyNjUuNzMxIDM0Mi4yMzIgMjY0LjIyNiAzNDMuMDA2IDI2Mi45NSAzNDQuMDAxQzI2MS45MDYgMzQ0LjgxMyAyNjEuNDQ2IDM0NC43MzMgMjYxLjAxNyAzNDMuNjEyTDI2MC44NDYgMzQzLjE2NEMyNTkuNjE2IDMzOS45NDUgMjU4LjM4NiAzMzYuNzI2IDI1Ny4xOSAzMzMuNDk2QzI1Ny4xNDIgMzMzLjM2NyAyNTcuNDI2IDMzMy4wNTggMjU3LjYyNCAzMzIuOTI1QzI2MC4zODMgMzMxLjA2OSAyNjMuNTg5IDMzMC4zOTQgMjY2Ljc5NCAzMjkuNzJaTTI3Mi40NyAzMzYuMjM1QzI3Mi40MTggMzM1LjkwNiAyNzIuMzY0IDMzNS41NzIgMjcyLjA4NiAzMzUuNDg4QzI3MS44MDggMzM0LjUyNSAyNzEuNTEyIDMzMy42OTMgMjcxLjIzMyAzMzIuOTA2QzI3MS4wNTQgMzMyLjQwMSAyNzAuODggMzMxLjkxMyAyNzAuNzIyIDMzMS40MjFDMjcwLjE3NyAzMjkuNzIyIDI3MC42NTIgMzI5LjA2NiAyNzIuNDg2IDMyOS4xNjRDMjc0LjMyOSAzMjkuMjYxIDI3Ni4xNyAzMjkuNDA5IDI3OC4wMSAzMjkuNTU4QzI3OS4xNTEgMzI5LjY1MSAyODAuMjk0IDMyOS43NDMgMjgxLjQzNiAzMjkuODIzQzI4Mi41MTIgMzI5Ljg5OSAyODIuMTg0IDMzMC4zOTggMjgxLjg0OCAzMzAuOTExTDI4MS44NDQgMzMwLjkxN0MyODAuMDk3IDMzMy41ODEgMjc3LjMzMiAzMzQuOTM4IDI3NC41NzcgMzM2LjI5QzI3NC4yMzggMzM2LjQ1NyAyNzMuOSAzMzYuNjIyIDI3My41NjQgMzM2Ljc5MUMyNzIuNjMyIDMzNy4yNTggMjcyLjU1MiAzMzYuNzUxIDI3Mi40NyAzMzYuMjM1Wk0yNTIuNjA2IDMzOC43ODVDMjUxLjc3OCAzMzcuNzQ1IDI1MS4zNzIgMzM2Ljg3NyAyNTIuNDQ2IDMzNS44MzFDMjUzLjY0NyAzMzUuMDIgMjU0LjY1NiAzMzQuMzU0IDI1NS43MDYgMzMzLjc1OEMyNTUuODczIDMzMy42NjMgMjU2LjEwNiAzMzMuNjc4IDI1Ni4zNCAzMzMuNjkzQzI1Ni40NDggMzMzLjcgMjU2LjU1NSAzMzMuNzA2IDI1Ni42NTYgMzMzLjcwMkMyNTYuNjMzIDMzMy43NzYgMjU2LjU5OSAzMzMuODUyIDI1Ni41NjYgMzMzLjkyN0MyNTYuNDk0IDMzNC4wOTEgMjU2LjQyMiAzMzQuMjUzIDI1Ni40NDYgMzM0LjQwMkMyNTYuNTAxIDMzNC43MjcgMjU2LjU0NyAzMzUuMDU2IDI1Ni41OTQgMzM1LjM4NUMyNTYuNzM0IDMzNi4zOCAyNTYuODc1IDMzNy4zNzggMjU3LjIyNyAzMzguM0MyNTcuNjU0IDMzOS40MTcgMjU3LjMwMSAzMzkuNzU2IDI1Ni4yNzggMzM5Ljc2MUMyNTYuMDcgMzM5Ljc2MiAyNTUuODYgMzM5Ljc3IDI1NS42NSAzMzkuNzhDMjU0LjU1NiAzMzkuODI2IDI1My40NzEgMzM5Ljg3MiAyNTIuNjA2IDMzOC43ODVaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMzA2Ljk1OCA0NDMuOTc3QzMwNy4zMjYgNDQzLjk2NCAzMDcuNjk1IDQ0My45NTEgMzA4LjA2NiA0NDMuOTM5QzMwOS40OTkgNDQzLjc5NiAzMTAuODQzIDQ0My43MDcgMzEyLjE4NyA0NDMuNjlDMzEzLjc4MiA0NDMuNjcgMzE1LjA4OCA0NDMuMTE1IDMxNS42MzQgNDQxLjY0NUMzMTcuMjQyIDQzNy4zMTIgMzE4Ljc3NyA0MzIuOTUzIDMyMC4yNzIgNDI4LjU4MkMzMjAuMzM4IDQyOC4zOSAzMjAuNDYgNDI4LjE5NCAzMjAuNTg0IDQyNy45OTZDMzIwLjkzNyA0MjcuNDMyIDMyMS4zMDcgNDI2LjgzOCAzMjAuNDU4IDQyNi4xOTNDMzIwLjI5MiA0MjYuNDExIDMyMC4xMSA0MjYuNjIzIDMxOS45MjggNDI2LjgzNkMzMTkuNTMxIDQyNy4zIDMxOS4xMzQgNDI3Ljc2NSAzMTguODk4IDQyOC4yOTVDMzE3Ljg2NSA0MzAuNjI0IDMxNi44NjEgNDMyLjk3NyAzMTYuMDU0IDQzNS4zODVDMzE1LjYyMSA0MzYuNjc3IDMxNC42OSA0MzcuMDQ1IDMxMy41NzcgNDM3LjE0MkMzMTEuMzE0IDQzNy4zMzcgMzA5LjAzNSA0MzcuNTMzIDMwNi43NjggNDM3LjQ4NEMyOTkuMTkyIDQzNy4zMjIgMjkxLjYxNCA0MzcuMTIgMjg0LjA0NSA0MzYuNzg5QzI4MS4wODcgNDM2LjY1OSAyNzkuMDI4IDQzNC4xNjkgMjc5LjY1OSA0MzEuMzg2QzI3OS44NCA0MzAuNTg5IDI4MC43OTUgNDI5Ljc3MyAyODEuNjEyIDQyOS4zNzRDMjgxLjg2NiA0MjkuMjQ5IDI4Mi40MjQgNDI5LjY3MyAyODIuOTU0IDQzMC4wNzVDMjgzLjE0OCA0MzAuMjIzIDI4My4zMzkgNDMwLjM2OCAyODMuNTEgNDMwLjQ4MkMyODMuNjk2IDQzMC42MDYgMjgzLjg2NiA0MzAuNzU0IDI4NC4wMzUgNDMwLjkwMUMyODQuMjA5IDQzMS4wNTMgMjg0LjM4MiA0MzEuMjAzIDI4NC41NzQgNDMxLjMyOUMyODUuMTczIDQzMS43MjMgMjg1LjYxNSA0MzEuNjUzIDI4NS42NTQgNDMwLjg1MkMyODUuNzExIDQyOS42OTIgMjgzLjU5OSA0MjcuNjA4IDI4Mi4zNjggNDI3LjU2MUMyNzguOTgyIDQyNy40MzIgMjc3Ljg2OSA0MjkuNjIxIDI3Ny40NjYgNDMyLjIyOEMyNzcuMDYzIDQzNC44NDYgMjgwLjE2MiA0MzguMjc5IDI4My44MDUgNDM4LjUzQzI4Ni4wMTMgNDM4LjY4MyAyODguMjI1IDQzOC44MTUgMjkwLjQzOCA0MzguODcxQzI5Ni4wMzggNDM5LjAxNCAzMDEuNjQgNDM5LjE1NiAzMDcuMjQyIDQzOS4yMDFDMzA4LjY5MyA0MzkuMjEzIDMxMC4xNDQgNDM5LjEyOCAzMTEuNTk1IDQzOS4wNDNMMzExLjU5OSA0MzkuMDQyTDMxMS42MiA0MzkuMDQyQzMxMi41NSA0MzguOTg3IDMxMy40ODEgNDM4LjkzMyAzMTQuNDEyIDQzOC45MDRDMzE0LjYwNCA0MzguODk4IDMxNC44MDEgNDM5LjA0MiAzMTQuOTk4IDQzOS4xODVDMzE1LjA4OSA0MzkuMjUxIDMxNS4xOCA0MzkuMzE4IDMxNS4yNzEgNDM5LjM2OUMzMTUuMDI5IDQzOS42MzkgMzE0LjgwMiA0MzkuOTU3IDMxNC41NzQgNDQwLjI3NEMzMTQuMDcgNDQwLjk3OCAzMTMuNTY1IDQ0MS42ODEgMzEyLjkwNiA0NDEuODU5QzMxMS40MTQgNDQyLjI2MiAzMDkuNzk1IDQ0Mi4yNzMgMzA4LjE5NyA0NDIuMjg1QzMwNy44NjIgNDQyLjI4NyAzMDcuNTI5IDQ0Mi4yODkgMzA3LjE5NyA0NDIuMjk1QzMwNC4xMDUgNDQyLjM1IDMwMS4wMDcgNDQyLjM5OSAyOTcuOTE4IDQ0Mi4yODVDMjk3LjQ3NSA0NDIuMjY5IDI5Ny4wMzEgNDQyLjI1NSAyOTYuNTg2IDQ0Mi4yNEMyOTMuNzI2IDQ0Mi4xNDUgMjkwLjg0OCA0NDIuMDQ5IDI4OC4wNTQgNDQxLjU2M0MyODQuMTk5IDQ0MC44OTIgMjgwLjM4MyA0NDAuMDE1IDI3Ni41NjkgNDM5LjEzOEwyNzYuNTYzIDQzOS4xMzdMMjc2LjU1OCA0MzkuMTM2TDI3Ni41NTMgNDM5LjEzNEMyNzUuMTY2IDQzOC44MTYgMjczLjc3OSA0MzguNDk3IDI3Mi4zOTEgNDM4LjE4OEMyNzIuMzI2IDQzOC4xNzQgMjcyLjI2MSA0MzguMTU5IDI3Mi4xOTUgNDM4LjE0NUMyNzAuODEgNDM3Ljg0MSAyNjkuMjU0IDQzNy40OTggMjY4Ljk0MyA0MzUuOTk5QzI2OC42OTggNDM0LjgxOSAyNjkuNTc4IDQzNC4xMTIgMjcwLjQ0MiA0MzMuNDE4QzI3MC43MyA0MzMuMTg3IDI3MS4wMTUgNDMyLjk1NyAyNzEuMjU4IDQzMi43MTFDMjcxLjI3MiA0MzIuNjk3IDI3MS4zMDUgNDMyLjcwMSAyNzEuMzM5IDQzMi43MDZDMjcxLjM3MiA0MzIuNzExIDI3MS40MDcgNDMyLjcxNiAyNzEuNDMgNDMyLjcwNUMyNzEuODI5IDQzMi41MjIgMjcyLjIyNyA0MzIuMzQgMjcyLjYyNiA0MzIuMTU4TDI3Mi42MjcgNDMyLjE1N0wyNzIuNjI5IDQzMi4xNTZIMjcyLjYzQzI3My45MiA0MzEuNTY3IDI3NS4yMSA0MzAuOTc3IDI3Ni40NzkgNDMwLjM0OEMyNzYuNzM3IDQzMC4yMiAyNzYuOTM0IDQyOS45NzkgMjc3LjEzMiA0MjkuNzM5QzI3Ny4yMjIgNDI5LjYyOCAyNzcuMzE0IDQyOS41MTggMjc3LjQxIDQyOS40MThDMjc3LjI4MiA0MjkuMzY3IDI3Ny4xNDUgNDI5LjI5MyAyNzcuMDA5IDQyOS4yMkMyNzYuNzE0IDQyOS4wNjEgMjc2LjQyIDQyOC45MDMgMjc2LjIwMiA0MjguOTcxTDI3NS45NTMgNDI5LjA0OUMyNzMuMTU0IDQyOS45MTYgMjcwLjMwOCA0MzAuNzk5IDI2OC4zNTQgNDMzLjA3NEMyNjYuMjgzIDQzNS40ODQgMjY2LjkzMyA0MzguMzQ1IDI2OS43MjcgNDM5LjE5N0MyNzEuNzMgNDM5LjgwNyAyNzMuNzYyIDQ0MC4zMzUgMjc1Ljc5MyA0NDAuODYzTDI3NS43OTcgNDQwLjg2NUgyNzUuNzk4TDI3NS43OTkgNDQwLjg2NUMyNzcuMTg2IDQ0MS4yMjYgMjc4LjU3NCA0NDEuNTg3IDI3OS45NTQgNDQxLjk3NEMyODUuMDIyIDQ0My4zOTcgMjkwLjIyMSA0NDMuNTg5IDI5NS40MTkgNDQzLjc4MUMyOTcuMDQ5IDQ0My44NDEgMjk4LjY3OSA0NDMuOTAyIDMwMC4zMDYgNDQ0QzMwMi40OTYgNDQ0LjEzMiAzMDQuNzAxIDQ0NC4wNTUgMzA2Ljk1OCA0NDMuOTc3WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTI2MC45MjcgMzYzLjM1MUMyNjAuMDM4IDM2NC4xNjkgMjU5LjE0MyAzNjQuOTY2IDI1OC4yNTQgMzY1Ljc1N0MyNTYuMjM5IDM2Ny41NSAyNTQuMjU2IDM2OS4zMTUgMjUyLjQ1NSAzNzEuMjM3QzI1MC4zNTEgMzczLjQ4MiAyNDguNTczIDM3Ni4wNDIgMjQ2LjkxNSAzNzguNjE5QzI0Ni40MjIgMzc5LjM4NSAyNDYuMzAyIDM4MC4zNzkgMjQ2LjE4MyAzODEuMzZDMjQ2LjE0MiAzODEuNyAyNDYuMTAxIDM4Mi4wNCAyNDYuMDQ0IDM4Mi4zNjdDMjQ2LjAxNCAzODIuNTQzIDI0Ni4xNDYgMzgyLjc0NSAyNDYuMjc4IDM4Mi45NDVDMjQ2LjMzOCAzODMuMDM5IDI0Ni4zOTkgMzgzLjEzMiAyNDYuNDQ0IDM4My4yMjFDMjQ2LjUxMiAzODMuMTQ1IDI0Ni41ODggMzgzLjA3MSAyNDYuNjY0IDM4Mi45OTdDMjQ2LjgzIDM4Mi44MzcgMjQ2Ljk5NiAzODIuNjc1IDI0Ny4wNzMgMzgyLjQ4MkMyNDcuMjIyIDM4Mi4xMDcgMjQ3LjMzOSAzODEuNzE1IDI0Ny40NTUgMzgxLjMyM0MyNDcuNjYxIDM4MC42MzEgMjQ3Ljg2NiAzNzkuOTQyIDI0OC4yNDggMzc5LjM1OEMyNDguNDYxIDM3OS4wMzMgMjQ4LjY3MyAzNzguNzA1IDI0OC44ODQgMzc4LjM3NkMyNTAuMDE2IDM3Ni42MTcgMjUxLjE2NiAzNzQuODMyIDI1Mi42NzggMzczLjQzQzI1Ni43NzEgMzY5LjYzNiAyNjEuMDA1IDM2NS45ODIgMjY1LjIzOCAzNjIuMzI3TDI2NS4yNDggMzYyLjMxOEwyNjUuMjU0IDM2Mi4zMTNMMjY1LjI1NyAzNjIuMzFMMjY1LjI2OSAzNjIuMzAxQzI2Ni40NTggMzYxLjI3MyAyNjcuNjQ4IDM2MC4yNDYgMjY4LjgzNCAzNTkuMjE2QzI2OS4wNjUgMzU5LjAxNiAyNjkuMzkyIDM1OC45MTkgMjY5LjcxOCAzNTguODIzQzI2OS44NyAzNTguNzc3IDI3MC4wMjIgMzU4LjczMiAyNzAuMTY1IDM1OC42NzdDMjcwLjEyNyAzNTguODQ4IDI3MC4xMDkgMzU5LjAzOSAyNzAuMDkgMzU5LjIyOUMyNzAuMDUgMzU5LjY0MiAyNzAuMDEgMzYwLjA1NSAyNjkuNzc0IDM2MC4yODFDMjY3LjkxIDM2Mi4wNzIgMjY2LjAxMyAzNjMuODQ2IDI2My45OTYgMzY1LjQ3N0MyNTkuNzY2IDM2OC45IDI1NS42ODggMzcyLjQyMyAyNTIuMzk5IDM3Ni43NjRDMjUwLjYzMSAzNzkuMDk5IDI0OS4zNTcgMzgxLjU3NCAyNDguMzk4IDM4NC4yNzJDMjQ3Ljc1OSAzODYuMDY0IDI0OC4zODYgMzg3LjY3MSAyNDguOTk4IDM4OS4yNEwyNDguOTk5IDM4OS4yNDVMMjQ5LjAwMSAzODkuMjQ5QzI0OS4wMjkgMzg5LjMyMSAyNDkuMDU3IDM4OS4zOTMgMjQ5LjA4NSAzODkuNDY2QzI0OS41MDIgMzkwLjU0MiAyNTIuMTA2IDM5MC45MDggMjUzLjg2NyAzOTAuMzYxQzI1OC4zODIgMzg4Ljk2IDI2Mi4yMzQgMzg2LjQxMyAyNjUuNjU3IDM4My40MDlDMjcwLjE2OCAzNzkuNDQ5IDI3NC41MyAzNzUuMzAxIDI3OC42MTQgMzcwLjkzOEMyODAuNTQ3IDM2OC44NzMgMjgyLjEyMiAzNjYuNDk0IDI4My42OTMgMzY0LjEyMUMyODQuMTUyIDM2My40MjcgMjg0LjYxMSAzNjIuNzMzIDI4NS4wNzkgMzYyLjA0OUMyODUuMzM3IDM2MS42NzEgMjg1LjQwOSAzNjEuMTgzIDI4NS40ODIgMzYwLjY4OEMyODUuNTMgMzYwLjM2IDI4NS41OCAzNjAuMDI4IDI4NS42ODQgMzU5LjcyNUMyODUuNzU0IDM1OS41MjEgMjg1Ljk2NiAzNTkuMzYxIDI4Ni4xNzcgMzU5LjIwMUMyODYuMjczIDM1OS4xMjggMjg2LjM3IDM1OS4wNTUgMjg2LjQ1MiAzNTguOTc4QzI4Ni41MTkgMzU5LjA3MyAyODYuNTk5IDM1OS4xNjUgMjg2LjY4IDM1OS4yNTdDMjg2Ljg1NCAzNTkuNDU2IDI4Ny4wMjkgMzU5LjY1NSAyODcuMDYzIDM1OS44NzRDMjg3LjM2NSAzNjEuODE2IDI4Ni43MzcgMzYzLjU0IDI4NS41NDMgMzY1LjA4M0MyODIuMjI2IDM2OS4zNzYgMjc4LjgxOCAzNzMuNTgyIDI3NC43MTggMzc3LjI0OEMyNzMuMzYxIDM3OC40NjEgMjcyLjEwMiAzNzkuNzc1IDI3MC44NDMgMzgxLjA4OUMyNjkuOTE0IDM4Mi4wNTggMjY4Ljk4NSAzODMuMDI3IDI2OC4wMTYgMzgzLjk1N0MyNjMuODQ2IDM4Ny45NTcgMjU4Ljc2OCAzOTAuNTQ1IDI1My4yIDM5Mi4yMDNDMjUwLjU5NSAzOTIuOTc4IDI0OC4wOTUgMzkxLjM1NiAyNDcuMDY3IDM4OC43NzFDMjQ2LjgyNSAzODguMTYxIDI0Ni40OTggMzg3LjU4MyAyNDYuMTcgMzg3LjAwNUMyNDUuODYzIDM4Ni40NjQgMjQ1LjU1NiAzODUuOTIxIDI0NS4zMTkgMzg1LjM1NEMyNDMuNjUyIDM4MS4zNiAyNDQuODYyIDM3Ny45NzEgMjQ3LjM2OSAzNzQuNTY2QzI1MS4zNjQgMzY5LjEzNyAyNTYuNTczIDM2NC45NjkgMjYxLjgwMiAzNjAuNzg2TDI2Mi4wMDkgMzYwLjYyMUMyNjIuMzMxIDM2MC4zNjMgMjYyLjc5OCAzNjAuMjIgMjYzLjIyMSAzNjAuMTQ3QzI2My40ODUgMzYwLjEwMyAyNjMuOTE4IDM2MC4yMTQgMjY0LjA0MSAzNjAuMzk5QzI2NC4xNTIgMzYwLjU2NiAyNjQuMDQyIDM2MS4wNDEgMjYzLjg2MSAzNjEuMTg1QzI2My4yNzIgMzYxLjY1MiAyNjIuNjYxIDM2Mi4wOTMgMjYyLjAyMiAzNjIuNTUzTDI2Mi4wMjIgMzYyLjU1NEwyNjIuMDIxIDM2Mi41NTVDMjYxLjY2NSAzNjIuODEyIDI2MS4zIDM2My4wNzUgMjYwLjkyNyAzNjMuMzUxWlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzE4LjE1IDQyNi41OTNDMzE5LjExOSA0MjMuMzIgMzIwLjA1OSA0MjAuMDQgMzIxLjAxMiA0MTYuNTlDMzIyLjE3OCA0MTMuODU5IDMyMi42NDMgNDExLjE2NCAzMjIuODQ2IDQwOC4zOTFDMzIyLjg1NyA0MDguMjQ3IDMyMi44OTEgNDA4LjA5NiAzMjIuOTI0IDQwNy45NDlDMzIzLjAyNiA0MDcuNDk2IDMyMy4xMTggNDA3LjA4OSAzMjIuNDgxIDQwNy4wN0MzMjIuMDA0IDQwNy4wNTYgMzIxLjI1NCA0MDcuNzg3IDMyMS4wNjcgNDA4LjMyM0MzMjAuOTE0IDQwOC43NjIgMzIwLjg4MyA0MDkuMjQzIDMyMC44NTQgNDA5LjcyMkMzMjAuODIgNDEwLjI0MyAzMjAuNzg3IDQxMC43NjQgMzIwLjU5NiA0MTEuMjI2QzMyMC4yODggNDExLjk3MSAzMTkuNTk4IDQxMi43NzkgMzE4Ljg1OCA0MTMuMTE1QzMxNi4yMyA0MTQuMzA2IDMxMy42MzEgNDEzLjgyNyAzMTEuMjE5IDQxMi40NDhDMzEwLjc3IDQxMi4xOSAzMTAuMjggNDExLjQzMiAzMTAuMzU2IDQxMC45OTNDMzEwLjQ4MyA0MTAuMjY1IDMxMC42OTcgNDA5LjU1MSAzMTAuOTEgNDA4LjgzNkMzMTEuMTI2IDQwOC4xMTYgMzExLjM0MSA0MDcuMzk3IDMxMS40NjYgNDA2LjY2M0MzMTEuNTI5IDQwNi4zMDEgMzExLjI5OCA0MDUuODkzIDMxMS4wNjkgNDA1LjQ4NUMzMTAuOTY0IDQwNS4yOTkgMzEwLjg1OCA0MDUuMTEzIDMxMC43ODIgNDA0LjkzMUMzMTAuNjU3IDQwNS4wNiAzMTAuNTExIDQwNS4xODMgMzEwLjM2NiA0MDUuMzA3QzMxMC4wNDcgNDA1LjU3NyAzMDkuNzI4IDQwNS44NDcgMzA5LjYyNSA0MDYuMThDMzA5LjQxNyA0MDYuODQ3IDMwOS4yOSA0MDcuNTM2IDMwOS4xNjIgNDA4LjIyNkMzMDkuMDUzIDQwOC44MTEgMzA4Ljk0NSA0MDkuMzk1IDMwOC43ODggNDA5Ljk2N0MzMDguNTQxIDQxMC44NjYgMzA4LjI3NSA0MTEuNzYyIDMwOC4wMSA0MTIuNjU4VjQxMi42NTlDMzA3LjA0OSA0MTUuOTAyIDMwNi4wODkgNDE5LjE0NCAzMDUuOTkxIDQyMi41NzFDMzA1Ljk1NSA0MjMuODQ4IDMwMy45ODYgNDI1LjI5NyAzMDIuNjAyIDQyNS4xMTZDMzAyLjM0NiA0MjUuMDgzIDMwMS45MTggNDI0LjIwNyAzMDIuMDA5IDQyNC4xMTRDMzAyLjM0NyA0MjMuNzY1IDMwMi43MzcgNDIzLjQ2NCAzMDMuMTI3IDQyMy4xNjJDMzAzLjQwMSA0MjIuOTUxIDMwMy42NzQgNDIyLjczOSAzMDMuOTMxIDQyMi41MTFDMzA0LjIxIDQyMi4yNjMgMzA0LjQ0NyA0MjEuOTEgMzA0LjUzNyA0MjEuNTY2QzMwNC41NjQgNDIxLjQ2MyAzMDQuMDQ5IDQyMS4xMiAzMDMuNzQ3IDQyMS4wNjVDMzAxLjg4NyA0MjAuNzI5IDI5OS4xMyA0MjMuNjQ1IDI5OS42NDQgNDI1LjM4N0MyOTkuOTM3IDQyNi4zNzggMzAwLjI1OSA0MjcuMzYxIDMwMC41ODEgNDI4LjM0NUwzMDAuNjU5IDQyOC41ODJDMzAwLjc2MSA0MjguODkzIDMwMC44NzggNDI5LjIgMzAwLjk5NCA0MjkuNTA3QzMwMS4wNDggNDI5LjY0NyAzMDEuMTAyIDQyOS43ODcgMzAxLjE1MyA0MjkuOTI4QzMwMS4yNTEgNDI5Ljc5NCAzMDEuMzU2IDQyOS42NjQgMzAxLjQ2MiA0MjkuNTM1QzMwMS42OTIgNDI5LjI1MiAzMDEuOTIyIDQyOC45NjkgMzAyLjA3IDQyOC42NTJDMzAyLjg1NyA0MjYuOTc0IDMwNS43OSA0MjUuODk1IDMwNy4wMjYgNDI3LjA1OEMzMDkuMjkzIDQyOS4xOTEgMzEyLjA3IDQyOS4xNSAzMTQuNzkyIDQyOC44NUMzMTYuMDc0IDQyOC43MDggMzE3LjY3NiA0MjguMTkyIDMxOC4xNSA0MjYuNTkzWk0zMDcuNTQ5IDQyMy45NjlDMzA3LjU3OCA0MjMuNzkzIDMwNy42MDkgNDIzLjYxNyAzMDcuNjIgNDIzLjQ0OUMzMDguMjc0IDQyMC43MjkgMzA4Ljc3OCA0MTguMTg3IDMwOS4yMTUgNDE1LjYzM0MzMDkuNDM3IDQxNC4zMzQgMzA5Ljk3NSA0MTQuMTIxIDMxMS4yODYgNDE0LjU3QzMxMy41NiA0MTUuMzUgMzE1Ljg5IDQxNi4xMjkgMzE4LjM4NCA0MTUuMjQ5QzMxOC42MjYgNDE1LjE2MyAzMTguOTQxIDQxNS4yNjQgMzE5LjI1NCA0MTUuMzY0QzMxOS4zOTkgNDE1LjQxMSAzMTkuNTQ1IDQxNS40NTggMzE5LjY4MyA0MTUuNDg2QzMxOS42NTggNDE1LjU5OSAzMTkuNjM0IDQxNS43MTIgMzE5LjYxIDQxNS44MjVDMzE5LjU1OCA0MTYuMDY5IDMxOS41MDYgNDE2LjMxMyAzMTkuNDQgNDE2LjU1NEMzMTkuMjI2IDQxNy4zMzQgMzE5LjAwNiA0MTguMTE0IDMxOC43ODUgNDE4Ljg5M0MzMTguMzIyIDQyMC41MjUgMzE3Ljg2MSA0MjIuMTU3IDMxNy40NTcgNDIzLjgwMkMzMTYuOTU0IDQyNS44NTIgMzE1LjUyNiA0MjcuMjUgMzEzLjM4IDQyNy41NjRDMzExLjYyNyA0MjcuODIgMzA4LjExNCA0MjYuMzc0IDMwNy41NDggNDI1LjA0NkMzMDcuNDE3IDQyNC43MzggMzA3LjQ4MyA0MjQuMzU0IDMwNy41NDkgNDIzLjk2OVpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMzcuMjMgMzU5LjYyOEwzMzcuMjMxIDM1OS42MjZMMzM3LjIzMyAzNTkuNjIzQzMzNy45MjYgMzU4LjA1OCAzMzguNjEgMzU2LjUxMiAzMzkuMzI2IDM1NC45NzlDMzM5LjUzIDM1NC41NDMgMzM5Ljk4MyAzNTQuMjAxIDM0MC40MTQgMzUzLjg3NkMzNDAuNTAzIDM1My44MDggMzQwLjU5MSAzNTMuNzQyIDM0MC42NzYgMzUzLjY3NkMzNDAuODE3IDM1My41NjUgMzQxLjI3NiAzNTMuNTkxIDM0MS4zNjYgMzUzLjcwOUMzNDEuNTIgMzUzLjkxNCAzNDEuNjMxIDM1NC4yOTkgMzQxLjUzMSAzNTQuNTA3QzMzOS43MTEgMzU4LjI4OCAzMzcuODg1IDM2Mi4wNjYgMzM1Ljk5NCAzNjUuODE2QzMzNS4zNzEgMzY3LjA1MyAzMzQuMjYzIDM2Ny42OTEgMzMyLjc3NCAzNjcuNTUxQzMzMi4xNjUgMzY3LjQ5NCAzMzEuNTU1IDM2Ny40NCAzMzAuOTQ2IDM2Ny4zODZMMzMwLjk0MyAzNjcuMzg1TDMzMC45MzQgMzY3LjM4NEMzMjkuMTUgMzY3LjIyNiAzMjcuMzY2IDM2Ny4wNjcgMzI1LjU5NCAzNjYuODM1QzMyNC44NjIgMzY2LjczOSAzMjQuMTA4IDM2Ni4zNzEgMzIzLjUwMyAzNjUuOTQ1QzMyMy4xOTggMzY1LjczIDMyMy4wMDIgMzY1LjM3MiAzMjIuODA2IDM2NS4wMTRDMzIyLjcxOCAzNjQuODU0IDMyMi42MzEgMzY0LjY5NCAzMjIuNTM0IDM2NC41NDdDMzIyLjczOSAzNjQuNTQ3IDMyMi45NTggMzY0LjUyNCAzMjMuMTc2IDM2NC41MDFDMzIzLjY0OSAzNjQuNDUyIDMyNC4xMjEgMzY0LjQwMiAzMjQuNDY0IDM2NC41ODFDMzI3LjI5MSAzNjYuMDU3IDMzMC4zNTUgMzY1Ljk4NCAzMzMuMzU2IDM2NS43MjdDMzMzLjg3NSAzNjUuNjgzIDMzNC4zMzcgMzY1LjAyMyAzMzQuODI0IDM2NC4zMjhDMzM1LjA2MiAzNjMuOTg5IDMzNS4zMDUgMzYzLjY0MSAzMzUuNTY0IDM2My4zNTFDMzM2LjEzNyAzNjIuMDk4IDMzNi42ODYgMzYwLjg1NyAzMzcuMjMgMzU5LjYyOFpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0yNDYuMTkgMzAwLjY3NEMyNDYuNjA2IDMwMy4wMiAyNDcuMDI2IDMwNS4zNjYgMjQ3LjUzNSAzMDcuNzk3QzI0Ny43MzMgMzA4LjU2OCAyNDcuODk0IDMwOS4zMzQgMjQ4LjA1MiAzMTAuMDg5QzI0OC4yOTkgMzExLjI2OCAyNDguNTQyIDMxMi40MjQgMjQ4LjkxMiAzMTMuNTQyQzI0OS43MSAzMTUuOTUgMjUwLjczNiAzMTguMjk1IDI1MS43NzQgMzIwLjYyM0MyNTEuODkyIDMyMC44ODkgMjUyLjI3IDMyMS4wNDggMjUyLjY0OSAzMjEuMjA4QzI1Mi44MjMgMzIxLjI4MiAyNTIuOTk4IDMyMS4zNTYgMjUzLjE0NyAzMjEuNDRDMjUzLjE0OSAzMjEuMjc0IDI1My4xNjUgMzIxLjEwMyAyNTMuMTgyIDMyMC45MzNDMjUzLjIxNyAzMjAuNTU0IDI1My4yNTMgMzIwLjE3NiAyNTMuMTI3IDMxOS44NTdDMjUyLjk3IDMxOS40NTQgMjUyLjczNyAzMTkuMDczIDI1Mi41MDYgMzE4LjY5NEMyNTIuMTk5IDMxOC4xOTEgMjUxLjg5NCAzMTcuNjkxIDI1MS43NjYgMzE3LjE1MUMyNTEuMDM3IDMxNC4wNTEgMjUwLjM0MiAzMTAuOTQ0IDI0OS42NDkgMzA3LjgzN0MyNDkuMDMgMzA1LjA3MSAyNDguNDEyIDMwMi4zMDMgMjQ3Ljc2OSAyOTkuNTQxQzI0Ny42NzUgMjk5LjE0IDI0Ny4zNTggMjk4Ljc4OCAyNDcuMDQyIDI5OC40MzRDMjQ2Ljg5NCAyOTguMjcgMjQ2Ljc0NyAyOTguMTA3IDI0Ni42MjIgMjk3LjkzOEMyNDYuNTYyIDI5OC4wOTcgMjQ2LjQ5NyAyOTguMjU1IDI0Ni40MyAyOTguNDEzQzI0Ni4yNzUgMjk4Ljc4NyAyNDYuMTE5IDI5OS4xNTkgMjQ2LjA0MiAyOTkuNTQ3QzI0NS45OSAyOTkuODA0IDI0Ni4wNTYgMzAwLjA4NCAyNDYuMTIyIDMwMC4zNjFDMjQ2LjE0NiAzMDAuNDY2IDI0Ni4xNzEgMzAwLjU3MSAyNDYuMTkgMzAwLjY3NFpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMjUuNjU0IDM1MS4wOTJDMzI0Ljk0NSAzNTAuODEgMzI0LjQxNCAzNTAuNTI5IDMyMy44ODIgMzUwLjI0OEMzMjQuMDQzIDM1MC4xOTMgMzI0LjIwNiAzNTAuMTE3IDMyNC4zNjggMzUwLjA0M0MzMjQuNzIgMzQ5Ljg4IDMyNS4wNzIgMzQ5LjcxOCAzMjUuNDAyIDM0OS43NTJDMzI2LjQ1NiAzNDkuODYxIDMyNy41MDcgMzUwLjAxMSAzMjguNTU4IDM1MC4xNjFMMzI4LjU1OCAzNTAuMTYyQzMzMC4xNDYgMzUwLjM4OSAzMzEuNzMyIDM1MC42MTYgMzMzLjMyNyAzNTAuNjk5QzMzNS4xMzggMzUwLjc5MyAzMzYuOTU2IDM1MC43NTcgMzM4Ljc3NCAzNTAuNzJIMzM4Ljc4MkMzMzkuOTczIDM1MC42OTYgMzQxLjE2NSAzNTAuNjcyIDM0Mi4zNTQgMzUwLjY4NUMzNDIuNzc3IDM1MC42ODkgMzQzLjE5OCAzNTAuODU2IDM0My42MTggMzUxLjAyNEMzNDMuODEyIDM1MS4xMDEgMzQ0LjAwNiAzNTEuMTc4IDM0NC4xOTkgMzUxLjIzOUMzNDQuMDYgMzUxLjMzMiAzNDMuOTIyIDM1MS40NSAzNDMuNzgzIDM1MS41NjhDMzQzLjQ4NCAzNTEuODIyIDM0My4xODUgMzUyLjA3NiAzNDIuODgxIDM1Mi4wODFMMzQyLjE0NSAzNTIuMDk1SDM0Mi4xNDJDMzM4LjgxIDM1Mi4xNjIgMzM1LjQ3NCAzNTIuMjI4IDMzMi4xNSAzNTIuMDc1QzMzMC43NjEgMzUyLjAxMSAzMjkuMzggMzUxLjc1NSAzMjcuOTQ5IDM1MS40ODlIMzI3Ljk0OEgzMjcuOTQ3QzMyNy4xOTkgMzUxLjM1IDMyNi40MzggMzUxLjIwOSAzMjUuNjU0IDM1MS4wOTJaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMjkzLjM4OSAyODUuMzIyQzI5My4wODIgMjg1LjMgMjkyLjc2NiAyODUuMjc3IDI5Mi40NDIgMjg1LjI0OUMyOTIuMjc3IDI4NS4yNDkgMjkyLjEzMyAyODUuMjUgMjkyLjAwMyAyODUuMjUxQzI5MS43NiAyODUuMjUyIDI5MS41NjYgMjg1LjI1NCAyOTEuMzc0IDI4NS4yNDlDMjkwLjQwOSAyODUuMjIxIDI4OS40NDQgMjg1LjE5MiAyODguNDc5IDI4NS4xNjNIMjg4LjQ3NUMyODUuNTcyIDI4NS4wNzYgMjgyLjY2OCAyODQuOTg5IDI3OS43NjQgMjg0LjkyM0MyNzkuNDAxIDI4NC45MTUgMjc4Ljk5MSAyODUuMDc0IDI3OC42NzcgMjg1LjI2NkMyNzguNDQyIDI4NS40MSAyNzguMjQ5IDI4NS42MTcgMjc4LjA1NyAyODUuODI0QzI3Ny45NzIgMjg1LjkxMyAyNzcuODg4IDI4Ni4wMDQgMjc3LjgwMSAyODYuMDg5QzI3Ny45MjYgMjg2LjE0NSAyNzguMDUgMjg2LjIxNiAyNzguMTc2IDI4Ni4yODdDMjc4LjQ0NCAyODYuNDQgMjc4LjcxMyAyODYuNTkzIDI3OC45ODYgMjg2LjU5OUMyODQuNjM2IDI4Ni43NDYgMjkwLjI4NyAyODYuODU3IDI5NS45MzggMjg2Ljk0OEMyOTYuMTk4IDI4Ni45NTIgMjk2LjQ1OSAyODYuODQ0IDI5Ni43MjEgMjg2LjczNkMyOTYuODQyIDI4Ni42ODYgMjk2Ljk2NCAyODYuNjM2IDI5Ny4wODUgMjg2LjU5N0MyOTYuOTk0IDI4Ni40OTEgMjk2LjkwNyAyODYuMzY0IDI5Ni44MjEgMjg2LjIzNkMyOTYuNjMxIDI4NS45NTggMjk2LjQ0MiAyODUuNjc5IDI5Ni4yMDYgMjg1LjYzNEMyOTUuMzA3IDI4NS40NjQgMjk0LjM4NyAyODUuMzk2IDI5My4zODkgMjg1LjMyMlpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMTAuMTYyIDM4Ni40NjFMMzEwLjE2MiAzODYuNDUxQzMxMC41NTUgMzgzLjQ3NSAzMTAuOTM0IDM4MC42IDMxMS40MTkgMzc3Ljc0MUMzMTEuNDg0IDM3Ny4zNTcgMzExLjg1NCAzNzcuMDIgMzEyLjIyNSAzNzYuNjgzQzMxMi4zOTYgMzc2LjUyNyAzMTIuNTY3IDM3Ni4zNzEgMzEyLjcwOSAzNzYuMjFDMzEyLjc1NiAzNzYuMzkxIDMxMi44MjYgMzc2LjU3NiAzMTIuODk1IDM3Ni43NkMzMTMuMDQ2IDM3Ny4xNTggMzEzLjE5NSAzNzcuNTU3IDMxMy4xMjEgMzc3LjkxQzMxMS45NiAzODMuMzg5IDMxMS4yNDUgMzg4LjkwNCAzMTEuMzM4IDM5NC41MDdDMzExLjM0MiAzOTQuNzY5IDMxMS4xMzYgMzk1LjAzNSAzMTAuOTMgMzk1LjMwMUMzMTAuODM0IDM5NS40MjUgMzEwLjczOSAzOTUuNTQ5IDMxMC42NjQgMzk1LjY3MkMzMTAuNTUxIDM5NS41MTIgMzEwLjQwOCAzOTUuMzUzIDMxMC4yNjQgMzk1LjE5NEMzMDkuOTUyIDM5NC44NDcgMzA5LjY0IDM5NC41IDMwOS42MzggMzk0LjE1MUMzMDkuNjI4IDM5Mi43ODcgMzA5LjcyMiAzOTEuNDIyIDMwOS44MiAzODkuOTk4QzMwOS44NjIgMzg5LjM4NiAzMDkuOTA2IDM4OC43NjQgMzA5Ljk0MSAzODguMTI4QzMxMC4wMTUgMzg3LjU2OCAzMTAuMDg5IDM4Ny4wMTQgMzEwLjE2MiAzODYuNDYxWlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTM0OC44OSAzMzQuNzQ0QzM0OC44MDUgMzM1LjE4IDM0OC43MTggMzM1LjYyOCAzNDguNTk5IDMzNi4wODlDMzQ4LjU1MyAzMzYuMzcgMzQ4LjU0OCAzMzYuNjMxIDM0OC41NDMgMzM2Ljg4QzM0OC41MzkgMzM3LjEwOCAzNDguNTM1IDMzNy4zMjcgMzQ4LjQ5OSAzMzcuNTRDMzQ4LjM0NyAzMzguNDI3IDM0OC4xODIgMzM5LjMxMyAzNDguMDE4IDM0MC4xOThWMzQwLjE5OUMzNDcuNjg4IDM0MS45NzEgMzQ3LjM1OCAzNDMuNzQxIDM0Ny4xMzUgMzQ1LjUyNEMzNDcuMTE4IDM0NS42NzIgMzQ3LjA4IDM0NS44MzQgMzQ3LjA0MiAzNDYuMDA2QzM0Ni44NzIgMzQ2Ljc0OSAzNDYuNjcxIDM0Ny42MzIgMzQ3Ljg1OCAzNDcuODkzQzM0OC4wMDMgMzQ3LjkyNSAzNDguNjU4IDM0Ni40MjUgMzQ4Ljg0MSAzNDUuNTg3QzM0OS4zNzQgMzQzLjE2NSAzNDkuODA3IDM0MC43MiAzNTAuMjM4IDMzOC4yNzhDMzUwLjUzMSAzMzYuNjIgMzUwLjgwNiAzMzQuOTU1IDM1MC45NjYgMzMzLjI4MkMzNTAuOTg3IDMzMy4wNTkgMzUwLjc0NSAzMzIuODE0IDM1MC41MDIgMzMyLjU2OEMzNTAuMzkgMzMyLjQ1NSAzNTAuMjc4IDMzMi4zNDEgMzUwLjE5MyAzMzIuMjNDMzUwLjA5MiAzMzIuMzI1IDM0OS45NzQgMzMyLjQxNSAzNDkuODU1IDMzMi41MDZDMzQ5LjU5NSAzMzIuNzAzIDM0OS4zMzUgMzMyLjkgMzQ5LjI1OCAzMzMuMTVDMzQ5LjEwMSAzMzMuNjY1IDM0OC45OTggMzM0LjE5NSAzNDguODkgMzM0Ljc0NFpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0yNzQuNDk3IDM1Ni4xNUMyNzcuNTAxIDM1NC40OTcgMjgwLjYwNCAzNTQuNTE3IDI4My43MDggMzU1LjI1N0MyODQuMjc5IDM1NS4zOTMgMjg0Ljc3NiAzNTUuODE3IDI4NS4yNzMgMzU2LjI0MUMyODUuNTAxIDM1Ni40MzYgMjg1LjcyOSAzNTYuNjMxIDI4NS45NjQgMzU2Ljc5OEMyODUuNzAxIDM1Ni44MTEgMjg1LjQzNCAzNTYuODQyIDI4NS4xNjYgMzU2Ljg3M0MyODQuNTg2IDM1Ni45NCAyODQuMDA2IDM1Ny4wMDggMjgzLjQ3IDM1Ni44OUMyNzkuODMyIDM1Ni4wODkgMjc2LjU1OCAzNTYuNzk5IDI3My41MTMgMzU4Ljc4OUMyNzMuMjQxIDM1OC45NjcgMjcyLjkxNSAzNTkuMDcgMjcyLjU4OSAzNTkuMTcyQzI3Mi40MzggMzU5LjIyIDI3Mi4yODcgMzU5LjI2NyAyNzIuMTQyIDM1OS4zMjJDMjcyLjA5MyAzNTkuMiAyNzIuMDIyIDM1OS4wNTQgMjcxLjk1IDM1OC45MDdDMjcxLjc5NCAzNTguNTkxIDI3MS42MzkgMzU4LjI3NSAyNzEuNzE1IDM1OC4yMUMyNzIuMjk5IDM1Ny43MTMgMjcyLjkzIDM1Ny4yNjYgMjczLjU5NCAzNTYuNzk2TDI3My41OTQgMzU2Ljc5NkwyNzMuNTk2IDM1Ni43OTVMMjczLjU5NyAzNTYuNzk0TDI3My41OTggMzU2Ljc5M0MyNzMuODkxIDM1Ni41ODYgMjc0LjE5MSAzNTYuMzc0IDI3NC40OTcgMzU2LjE1WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTMxNS45OCAxODQuNzc0TDMxNS45NzggMTg0Ljc3NUMzMTUuOTAxIDE4NC44MDIgMzE1LjgyMyAxODQuODMgMzE1Ljc0NCAxODQuODU4QzMxNC45MzcgMTg1LjEzMiAzMTQuMTQ0IDE4NS4zNzkgMzEzLjM2NCAxODUuNjIyQzMxMi40MzUgMTg1LjkxMSAzMTEuNTIzIDE4Ni4xOTUgMzEwLjYyNSAxODYuNTEzQzMxMC4yNjQgMTg2LjY0IDMwOS45NTggMTg2LjkxMSAzMDkuNjUyIDE4Ny4xODJDMzA5LjUxMiAxODcuMzA2IDMwOS4zNzIgMTg3LjQzIDMwOS4yMjYgMTg3LjU0QzMwOS4zOTQgMTg3LjYxIDMwOS41NzEgMTg3LjcxIDMwOS43NSAxODcuODFDMzEwLjEzNCAxODguMDI2IDMxMC41MTggMTg4LjI0MiAzMTAuNzk2IDE4OC4xNTNDMzEzLjQ0NSAxODcuMzA0IDMxNi4wNTEgMTg2LjMzMSAzMTguNjU2IDE4NS4zNTlMMzE4LjgzIDE4NS4yOTRDMzE5LjAyNSAxODUuMjIyIDMxOS4yNDMgMTg0LjY3MyAzMTkuMjAyIDE4NC42NDFDMzE5LjE3NCAxODQuNjE5IDMxOS4xNDQgMTg0LjU5NSAzMTkuMTE0IDE4NC41NzFIMzE5LjExM0MzMTguODMyIDE4NC4zNSAzMTguNDkgMTg0LjA4MSAzMTguMjE4IDE4NC4xMjNDMzE3LjQ4NSAxODQuMjM1IDMxNi43NzUgMTg0LjQ4OSAzMTUuOTk0IDE4NC43NjlMMzE1Ljk4IDE4NC43NzRaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMjk2LjgxNyA0MjguMTY0QzI5Ni42OTUgNDI3Ljk5MiAyOTYuNTc0IDQyNy44MjcgMjk2LjQ1NiA0MjcuNjY3QzI5Ni4wODIgNDI3LjE1NyAyOTUuNzM4IDQyNi42ODkgMjk1LjUwMSA0MjYuMTc3QzI5NS4yOTQgNDI1LjcyOSAyOTUuMTI2IDQyNC44NjQgMjk1LjMzNCA0MjQuNzIyQzI5NS43OTQgNDI0LjQxMSAyOTYuNjQxIDQyNC4xNzEgMjk3LjA4NCA0MjQuMzgxQzI5OC4zNzUgNDI0Ljk5MyAyOTkuNTQzIDQyOS44MDEgMjk4LjcxOSA0MzAuODk0QzI5OC41OTQgNDMxLjA2MSAyOTcuNTY3IDQzMC45MzIgMjk3LjQ5NyA0MzAuNzQ4QzI5Ny4zMTUgNDMwLjI3OCAyOTcuMjA0IDQyOS43ODIgMjk3LjA4OCA0MjkuMjY0QzI5Ny4wMDkgNDI4LjkwOCAyOTYuOTI2IDQyOC41NDEgMjk2LjgxNyA0MjguMTY0WlwiIGZpbGw9XCIjMDAxNjBBXCIvPlxyXG48cGF0aCBkPVwiTTI5MC45OSA0MjguMjQzQzI5MS4yMzQgNDI4LjY3MyAyOTEuNDg3IDQyOS4xMjEgMjkxLjcyOCA0MjkuNjIxQzI5MS43NTcgNDI5Ljc3MyAyOTEuNzggNDI5LjkxOCAyOTEuODAyIDQzMC4wNTZDMjkxLjg3NCA0MzAuNDk2IDI5MS45MzMgNDMwLjg2NiAyOTIuMTA5IDQzMS4xNzVDMjkyLjI4NiA0MzEuNDg3IDI5Mi41NTMgNDMxLjc1MSAyOTIuODE5IDQzMi4wMTVDMjkyLjkzNSA0MzIuMTMgMjkzLjA1MiA0MzIuMjQ2IDI5My4xNjEgNDMyLjM2NUMyOTMuMjcyIDQzMi4yNDEgMjkzLjQwNSA0MzIuMTIyIDI5My41MzcgNDMyLjAwMkMyOTMuODI2IDQzMS43NDEgMjk0LjExNiA0MzEuNDggMjk0LjE4OSA0MzEuMTcyQzI5NC41MDcgNDI5LjgxNiAyOTMuMTkzIDQyNi42MTQgMjkxLjcxIDQyNS43MjJDMjkxLjQ2NiA0MjUuNTc1IDI5MS4wNzYgNDI1LjY1IDI5MC42ODYgNDI1LjcyNkMyOTAuNTA3IDQyNS43NjEgMjkwLjMyOSA0MjUuNzk2IDI5MC4xNjMgNDI1LjgwOEMyOTAuMTgyIDQyNS45NDIgMjkwLjE5MiA0MjYuMDgxIDI5MC4yMDIgNDI2LjIxOUMyOTAuMjIzIDQyNi41MjQgMjkwLjI0NCA0MjYuODI4IDI5MC4zNjkgNDI3LjA4N0MyOTAuNTU2IDQyNy40NzUgMjkwLjc3IDQyNy44NTEgMjkwLjk5IDQyOC4yNDNaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMjg5LjIyOCA0MzAuMzA3QzI4OS4wMDYgNDMxLjIyMiAyODguNzgyIDQzMS45NjUgMjg4LjU2IDQzMi43MDhDMjg4LjQzNiA0MzIuNTA1IDI4OC4zMTYgNDMyLjI5OSAyODguMTk3IDQzMi4wOTNDMjg3LjkzIDQzMS42MzQgMjg3LjY2MyA0MzEuMTc2IDI4Ny4zNSA0MzAuNzQ4QzI4Ny4yNzQgNDMwLjY0NiAyODcuMTk4IDQzMC41NDIgMjg3LjEyMiA0MzAuNDM5QzI4Ni40ODYgNDI5LjU2OCAyODUuODQ0IDQyOC42OSAyODUuMDggNDI3LjkzMkwyODUuMDU5IDQyNy45MTFDMjg0LjQ4OSA0MjcuMzQ2IDI4NC40MDcgNDI3LjI2NSAyODUuMTUgNDI2Ljg0NEMyODYuNTU5IDQyNi4wNDYgMjg3LjQzNCA0MjYuODcgMjg4LjEzMSA0MjcuODM4QzI4OC41MjcgNDI4LjM4OSAyODguNzY2IDQyOS4wNDUgMjg5LjAzMSA0MjkuNzczTDI4OS4wMzIgNDI5Ljc3NEMyODkuMDk1IDQyOS45NDggMjg5LjE1OSA0MzAuMTI1IDI4OS4yMjggNDMwLjMwN1pcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMjMuODI2IDM1Ni4xNjdMMzIzLjg2OSAzNTUuODkzQzMyMy44MTIgMzU0Ljg2OCAzMjMuNzU2IDM1NC4wMTQgMzIzLjcgMzUzLjE2MVYzNTMuMTU5QzMyMi42MjEgMzUzLjM2MSAzMjIuNTE2IDM1NC4wNzggMzIyLjM5OCAzNTUuMDAzQzMyMi4yODIgMzU1LjkyNSAzMjIuMDczIDM1Ni44MzUgMzIxLjg2MyAzNTcuNzQ2QzMyMS42OTkgMzU4LjQ2MiAzMjEuNTM1IDM1OS4xNzkgMzIxLjQxNSAzNTkuOTAxQzMyMS4zNzkgMzYwLjExNiAzMjEuOTM2IDM2MC41MzUgMzIyLjI5MiAzNjAuNjUzQzMyMi41MDUgMzYwLjcyMiAzMjMuMDc1IDM2MC40MzEgMzIzLjEyIDM2MC4yMjhDMzIzLjQwNiAzNTguOTMzIDMyMy42MDYgMzU3LjYxOSAzMjMuODI2IDM1Ni4xNjdaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMzExLjgxNiAxNjkuNTk4QzMxMS43MDIgMTY5LjUwMyAzMTEuNTkyIDE2OS40MjUgMzExLjQ5MSAxNjkuMzUzQzMxMS4zMTggMTY5LjIzIDMxMS4xNzIgMTY5LjEyNiAzMTEuMDc0IDE2OC45OUMzMTAuODc3IDE2OC43MTYgMzEwLjcxNSAxNjguNDE4IDMxMC41NTQgMTY4LjEyMUMzMTAuNDg2IDE2Ny45OTYgMzEwLjQxOSAxNjcuODcyIDMxMC4zNDkgMTY3Ljc0OUMzMTAuNDk5IDE2Ny43MzYgMzEwLjY2NyAxNjcuNzAxIDMxMC44MzYgMTY3LjY2OEMzMTEuMjAyIDE2Ny41OTMgMzExLjU2OCAxNjcuNTIgMzExLjc0MSAxNjcuNjYyQzMxMy4wNjcgMTY4Ljc1MiAzMTQuMzM5IDE2OS45MTUgMzE1LjUwNCAxNzEuMTYzQzMxNS42NTMgMTcxLjMyMyAzMTUuNTMgMTcxLjcxNSAzMTUuNDA5IDE3Mi4xMDhDMzE1LjM1MiAxNzIuMjg5IDMxNS4yOTYgMTcyLjQ3MSAzMTUuMjY2IDE3Mi42MjlDMzE1LjE2MiAxNzIuNTU4IDMxNS4wNTQgMTcyLjQ5MSAzMTQuOTQ2IDE3Mi40MjNDMzE0LjcwOSAxNzIuMjc1IDMxNC40NzIgMTcyLjEyNiAzMTQuMjcgMTcxLjk0MkMzMTMuNjk4IDE3MS40MTkgMzEzLjE0MiAxNzAuODggMzEyLjU1NCAxNzAuMzFDMzEyLjMxNCAxNzAuMDc4IDMxMi4wNyAxNjkuODQxIDMxMS44MTYgMTY5LjU5OFpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMDguMzU5IDE3MS44OTdDMzA4LjE0OCAxNzIuMTcgMzA3LjkzIDE3Mi40NTMgMzA3LjcwOSAxNzIuNjg1QzMwNy42NyAxNzIuODU3IDMwNy42MTYgMTczLjAzOCAzMDcuNTYyIDE3My4yMTlDMzA3LjMxNiAxNzQuMDM2IDMwNy4wNjYgMTc0Ljg2OCAzMDguMjAyIDE3NS4xMThDMzA5LjY4OSAxNzUuNDQ1IDMxMC4wMjIgMTc0LjE4NSAzMTAuMjk2IDE3My4wOTNDMzEwLjMwMiAxNzMuMDY5IDMxMC4zIDE3My4wNDEgMzEwLjI5NyAxNzMuMDEzQzMxMC4yOTQgMTcyLjk4MiAzMTAuMjkgMTcyLjk1MiAzMTAuMzAxIDE3Mi45MjVDMzEwLjY2MiAxNzIuMDA0IDMxMC42OTEgMTcwLjkzMiAzMDkuNTYzIDE3MC44MjhDMzA5LjIwOSAxNzAuNzk1IDMwOC43OTggMTcxLjMyOCAzMDguMzU5IDE3MS44OTdaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMzE5LjU5IDE4MS4xN0wzMTkuNTU4IDE4MS4yMDRDMzE4LjkxNCAxODEuODY1IDMxOC4zMjkgMTgyLjQ2NSAzMTcuNDA0IDE4MS44MDFDMzE3LjAwNCAxODEuNTEzIDMxNi4zNTQgMTgwLjk2NSAzMTYuNDM1IDE4MC43NDhDMzE2LjY4NyAxODAuMDc2IDMxNy4xMzUgMTc5LjM4NSAzMTcuNzEgMTc4Ljk0OEMzMTcuOTk0IDE3OC43MzIgMzE4Ljk2MiAxNzguODgzIDMxOS4xOTcgMTc5LjE3OUMzMTkuNTE4IDE3OS41ODMgMzE5LjU3OSAxODAuMTc4IDMxOS42NDEgMTgwLjc4NUMzMTkuNjUxIDE4MC44ODYgMzE5LjY2MSAxODAuOTg2IDMxOS42NzMgMTgxLjA4NkMzMTkuNjQ1IDE4MS4xMTQgMzE5LjYxOCAxODEuMTQyIDMxOS41OSAxODEuMTdaXCIgZmlsbD1cIiMwMDE2MEFcIi8+XHJcbjxwYXRoIGQ9XCJNMzMxLjAxIDE4Ni4yNThDMzMwLjcxMyAxODUuODc3IDMzMC40MTUgMTg1LjQ5NiAzMjkuOTM5IDE4NS4xMTVDMzI5LjM0NCAxODUuNjE5IDMyOC45MjggMTg2LjEyMiAzMjguNTExIDE4Ni42MjZDMzI4LjYxNCAxODYuNjgzIDMyOC43MjIgMTg2Ljc2MSAzMjguODMxIDE4Ni44MzlDMzI5LjA3MiAxODcuMDEgMzI5LjMxMyAxODcuMTgxIDMyOS40OCAxODcuMTNDMzI5Ljg3MSAxODcuMDExIDMzMC4yMjUgMTg2Ljc3NSAzMzAuNTc4IDE4Ni41MzhDMzMwLjcyMSAxODYuNDQyIDMzMC44NjUgMTg2LjM0NyAzMzEuMDEgMTg2LjI1OFpcIiBmaWxsPVwiIzAwMTYwQVwiLz5cclxuPHBhdGggZD1cIk0zMDkuNDAyIDExNy4wNzdDMzEwLjM3IDExNi4xNTYgMzExLjI2NyAxMTUuMzM1IDMxMi4xMTcgMTE0LjQ3MkMzMTIuMzA5IDExNC4yNzcgMzEyLjMzNiAxMTMuOTM1IDMxMi40MzkgMTEzLjY2MUMzMTIuMTUgMTEzLjc3MSAzMTEuNzgyIDExMy44MDcgMzExLjU4NiAxMTQuMDAxQzMwOS40OTQgMTE2LjA3NyAzMDYuOTExIDExNy4zMjEgMzA0LjAzOSAxMTguMDg0QzMwMi44MDYgMTE4LjQxMSAzMDEuNTc2IDExOC43NTIgMzAwLjMyNiAxMTkuMDEyQzMwMC4wNjMgMTE5LjA2NiAyOTkuNzI0IDExOC43ODkgMjk5LjQyIDExOC42NjVDMjk5LjU3NiAxMTguNDI0IDI5OS42NzQgMTE4LjA1NSAyOTkuODk4IDExNy45NjNDMzAxLjMxNiAxMTcuMzc4IDMwMi43MTkgMTE2LjY5OCAzMDQuMjA2IDExNi4zNDRDMzA3LjAxOCAxMTUuNjc1IDMwOS4wMzQgMTEzLjk0MyAzMTEuMjkgMTEyLjM3QzMxNC4xNTYgMTEwLjM2OSAzMTQuNjQ1IDEwNy42MTkgMzE0Ljk4OCAxMDQuNzgxQzMxNS4yODIgMTAyLjM0OCAzMTMuOTUgMTAwLjI0MSAzMTIuNTMzIDk4LjI4MjRDMzA5Ljg0NyA5NC41Njc4IDMwNi4xNzUgOTIuNTU5MiAzMDEuNDA2IDkyLjA3MzlDMjk1Ljg4MiA5MS41MTE5IDI5MS42MDcgOTMuNTAxNSAyODcuOTU4IDk3LjIxMzFDMjg3LjU2MSA5Ny42MTc3IDI4Ni44OTQgOTcuNzg1IDI4Ni4zNTMgOTguMDYxOEMyODYuNTA1IDk3LjM1OTggMjg2LjQyIDk2LjQ2ODUgMjg2Ljg0NiA5NS45ODQ4QzI5MS4zMTQgOTAuOTIwMiAyOTkuMzE0IDg4LjcxOTEgMzA2LjU5MSA5MS42OTgyQzMxMi4xNTggOTMuOTc2OSAzMTUuNzI2IDk3Ljk3MjEgMzE2LjY4NSAxMDMuNDExQzMxNy40MzcgMTA3LjY3OCAzMTYuMTQ2IDExMi4wNCAzMTMuMTE1IDExNS41MzdDMzEwLjU3IDExOC40NzQgMzA3LjQ3OCAxMjAuNzE2IDMwMy4zNDIgMTIxLjQ0OUMyOTguMzI5IDEyMi4zMzggMjkzLjcyMyAxMjEuNjI0IDI4OS41NDIgMTE4LjgwOUMyODUuNjI3IDExNi4xNzIgMjgzLjMyMiAxMTIuNjAxIDI4Mi43ODkgMTA4LjA0MkMyODIuNjQyIDEwNi43ODYgMjgyLjQ1NiAxMDUuNTIzIDI4Mi40NzcgMTA0LjI2NkMyODIuNDgzIDEwMy44NDYgMjgzLjA3NyAxMDMuNDM0IDI4My40MDIgMTAzLjAyQzI4My42NzQgMTAzLjQyOCAyODQuMTMzIDEwMy44MTYgMjg0LjE4OSAxMDQuMjUxQzI4NC42MzIgMTA3LjY1MiAyODUuNDI3IDExMC45NjggMjg3LjA1MSAxMTQuMDMzQzI4OC44OTIgMTE3LjUwNiAyOTIuMzk4IDExOS4wNzQgMjk2LjAyIDExOS45NzFDMjk5LjY4OSAxMjAuODgxIDMwMy40NjIgMTIwLjM2NiAzMDYuOTI0IDExOC42ODFDMzA3Ljc3MSAxMTguMjcgMzA4LjUxOCAxMTcuNjc1IDMwOS40MDIgMTE3LjA3N1pcIiBmaWxsPVwiI0ZGQjYxRFwiLz5cclxuPHBhdGggZD1cIk0yOTMuODA4IDEwOC44OThDMjkzLjgxIDEwOC4zODYgMjkzLjkgMTA3Ljk1OCAyOTMuOTkxIDEwNy41MzFDMjk0LjMyMiAxMDcuNjc4IDI5NC43MTIgMTA3Ljc2IDI5NC45NzIgMTA3Ljk4QzI5Ni43NDYgMTA5LjQ4MiAyOTYuNTQ3IDEwOS4zODggMjk3LjY4OSAxMDcuNTAxQzI5OC45MSAxMDUuNDgzIDI5OC41ODIgMTAzLjgzMiAyOTcuNTM4IDEwMS44OEMyOTYuNDI2IDk5Ljc5NjggMjk3LjY1OCA5OC45MjgzIDI5OS40NDYgOTguMjY1OEMyOTkuNjAyIDk4LjIwOCAyOTkuODY1IDk4LjE3NzYgMjk5Ljk2NiA5OC4yNTk3QzMwMS4zNjUgOTkuMzk0NSAzMDIuNTYzIDk1LjgxNjggMzAzLjQyNyA5Ny44NDY3QzMwNC4wOTMgOTkuNDEyIDMwNS40OCAxMDAuMDc3IDMwNi4yMzggMTAxLjMzOEMzMDYuNDQzIDEwMS42ODIgMzA2LjI1IDEwMi4yNDIgMzA2LjIzOSAxMDIuNzAzQzMwNS44MjUgMTAyLjYzNCAzMDUuMzE2IDEwMi42ODcgMzA1LjAxIDEwMi40NzZDMzAyLjI4NyAxMDAuNTkzIDMwMi4yNzkgMTAwLjU3NSAzMDEuMzk4IDEwMy41ODlDMzAxLjI5OCAxMDMuOTMyIDMwMS40NjEgMTA0LjQyMiAzMDEuNjYzIDEwNC43NTZDMzAyLjYzMiAxMDYuMzUzIDMwNC4zOSAxMDcuNjk2IDMwMi45OTggMTA5LjkwNEMzMDEuODM3IDExMS43NDggMjk4LjM1NCAxMTIuNzI2IDI5Ni41NTIgMTExLjQ2M0MyOTUuNTYzIDExMC43NzEgMjk0Ljc3NiAxMDkuODE5IDI5My44MDggMTA4Ljg5OFpNMjk5LjI3NCAxMDcuNjIxQzI5OS4wNjkgMTA4LjE1NyAyOTguNzQzIDEwOC42ODUgMjk4LjY5OCAxMDkuMjMzQzI5OC42NjYgMTA5LjYxMiAyOTkuMDIyIDExMC4wMiAyOTkuMjA0IDExMC40MTRDMjk5Ljk3OCAxMTAuMDIgMzAwLjk2NCAxMDkuNzggMzAxLjQ0OSAxMDkuMTc3QzMwMS43NzEgMTA4Ljc3NSAzMDEuNDY5IDEwNy44MjggMzAxLjI3IDEwNy4xNzRDMzAxLjE0NiAxMDYuNzY0IDMwMC42OTQgMTA2LjQ0NiAzMDAuMzg5IDEwNi4wODdDMzAwLjA3NyAxMDYuNTQyIDI5OS43NjYgMTA2Ljk5NiAyOTkuMjc0IDEwNy42MjFaTTMwMC41MjkgMTAxLjMxNkMzMDAuNTUxIDEwMC44ODIgMzAwLjU3MyAxMDAuNDQ5IDMwMC41OTUgMTAwLjAxNUMzMDAuMDYyIDEwMC4yNTMgMjk5LjM3MSAxMDAuMzc5IDI5OS4wNTkgMTAwLjc3NUMyOTguODk1IDEwMC45ODMgMjk5LjM5NCAxMDEuNjYyIDI5OS41OTMgMTAyLjEyOUMyOTkuODQ2IDEwMS45MTUgMzAwLjA5OCAxMDEuNzAxIDMwMC41MjkgMTAxLjMxNlpcIiBmaWxsPVwiI0ZGQjYxRFwiLz5cclxuPHBhdGggZD1cIk0yOTUuNzc5IDExOC4yNzFDMjk1Ljc0MiAxMTcuOTA4IDI5NS43OTUgMTE3LjYzMSAyOTUuODQ5IDExNy4zNTNDMjk2LjE1NCAxMTcuNTQ1IDI5Ni40NTkgMTE3LjczOCAyOTYuNzY1IDExNy45MzFDMjk2LjQ2NiAxMTguMDczIDI5Ni4xNjggMTE4LjIxNCAyOTUuNzc5IDExOC4yNzFaXCIgZmlsbD1cIiNGRkI2MURcIi8+XHJcbjxwYXRoIGQ9XCJNMjkxLjQ3OCAxMTYuMDU1QzI5MS44NjYgMTE2LjA1OCAyOTIuMTY1IDExNi4xNDYgMjkyLjQ2MyAxMTYuMjM1QzI5Mi4zMTQgMTE2LjQ1OCAyOTIuMTY2IDExNi42ODIgMjkyLjAxNyAxMTYuOTA2QzI5MS44MDcgMTE2LjY1MSAyOTEuNTk4IDExNi4zOTYgMjkxLjQ3OCAxMTYuMDU1WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTEwMy40IDE5Ny42N0MxMDAuNjkzIDE5NS44MjUgOTkuNTU2OCAxOTMuMTg1IDk4LjY3NjggMTkwLjQxOEM5OC41NiAxOTAuMDUxIDk4LjgzMzYgMTg5LjU3MSA5OC45MjY0IDE4OS4xNDJDOTkuMjk5MiAxODkuMzMyIDk5Ljc5NiAxODkuNDM0IDEwMC4wMjIgMTg5LjcyNkMxMDAuNzE4IDE5MC42MjQgMTAxLjE4MiAxOTEuNzA4IDEwMS45NjcgMTkyLjUxN0MxMDQuNjYxIDE5NS4yOTIgMTA4LjE1OCAxOTUuOTQzIDExMS43MTIgMTk0Ljc4QzExNS4xNDQgMTkzLjY1NiAxMTcuMzA5IDE5MC45NjYgMTE3Ljc2MiAxODcuNTI4QzExOC4yMDEgMTg0LjIwOCAxMTUuNDUxIDE3OC44NiAxMTAuNTEzIDE3OC4wNzFDMTA3LjYwMSAxNzcuNjA2IDEwNS4zNjYgMTc4LjQxNCAxMDMuMDUxIDE3OS43MjJDMTAyLjY0NiAxNzkuOTUgMTAyLjAwMSAxNzkuNzk0IDEwMS40NjYgMTc5LjgxNUMxMDEuNzA3IDE3OS4zNzYgMTAxLjgzIDE3OC43OSAxMDIuMjA2IDE3OC41MjJDMTA4LjA1NSAxNzQuMzMgMTE0LjQ4NiAxNzYuNzE4IDExOC4wNTQgMTgxLjQyMUMxMTkuMjQ3IDE4Mi45OTUgMTE5LjY2MSAxODUuMjcgMTE5LjkxMyAxODcuMjg0QzEyMC4zMyAxOTAuNjA2IDExOS44NjQgMTkzLjc0OCAxMTcuMTc0IDE5Ni40MUMxMTQuMzE4IDE5OS4yMzcgMTA4LjE3OSAyMDAuMzY0IDEwNC42OTUgMTk4LjI3NEMxMDQuMzI2IDE5OC4wNTIgMTAzLjg5MyAxOTcuOTI1IDEwMy40IDE5Ny42N1pNMTA4LjMyOSAxOTcuOTI1QzExMi4wNjkgMTk4LjA3OCAxMTUuMjA3IDE5Ny4wMSAxMTcuMjU0IDE5My44NDdDMTE3LjYzOSAxOTMuMjUgMTE3LjgxOCAxOTIuNTMzIDExOC4wOTIgMTkxLjg3MUMxMTcuNTkzIDE5Mi4yOTMgMTE3LjAzOCAxOTIuNjY4IDExNi42MDMgMTkzLjE0M0MxMTMuMjI0IDE5Ni44MzYgMTA5LjA1OSAxOTcuMzA2IDEwNC40MTUgMTk1Ljg4M0MxMDQuMTI5IDE5NS43OTUgMTAzLjgzNCAxOTUuNzM0IDEwMy41NDIgMTk1LjY2QzEwMy43MjQgMTk1Ljk2MSAxMDMuODMyIDE5Ni40MjYgMTA0LjEgMTk2LjUzNEMxMDUuMzY2IDE5Ny4wNTIgMTA2LjY3NiAxOTcuNDcxIDEwOC4zMjkgMTk3LjkyNVpcIiBmaWxsPVwiI0ZGQjYxRFwiLz5cclxuPHBhdGggZD1cIk0xMTAuMDMxIDE4Mi4xNjRDMTEwLjUzOSAxODIuNDYgMTEwLjk1OCAxODIuNjcyIDExMS4zNzYgMTgyLjg4MkMxMTEuMDYxIDE4My4wMTIgMTEwLjc1NSAxODMuMTcgMTEwLjQyOSAxODMuMjY2QzEwOS41NzIgMTgzLjUxNyAxMDkuMTc1IDE4NS4yMjUgMTA5Ljg0MSAxODYuMDU0QzExMC4xOTkgMTg2LjQ5OSAxMTAuNTk4IDE4Ny4wNTIgMTExLjEwNSAxODcuMjI3QzExMi45MDggMTg3Ljg0NiAxMTIuMTY4IDE4OS4yOTggMTEyLjAwNCAxOTAuMjE2QzExMS43MzYgMTkxLjcxNSAxMDcuOTU1IDE5My4wODEgMTA2LjUwNCAxOTIuNDI4QzEwNi4zMDQgMTkyLjMzOCAxMDYuMDEgMTkxLjk5NiAxMDYuMDI2IDE5MS45NzZDMTA2LjI4NyAxOTEuNjcgMTA2LjU0MyAxOTEuMzEyIDEwNi44OTQgMTkxLjEzMkMxMDguOTQgMTkwLjA4NCAxMDkuMDc1IDE4OC4yNTQgMTA3LjE3MyAxODYuOTQzQzEwNS42MTYgMTg1Ljg3MSAxMDUuNTgzIDE4NC42MTcgMTA2Ljk0MiAxODMuMTg2QzEwNy4zNjQgMTgyLjc0MSAxMDcuNTAzIDE4Mi4wNTkgMTA3Ljc5NSAxODEuNDk3QzEwOC4wMjMgMTgxLjA1NyAxMDguMjg2IDE4MC42MzQgMTA4LjUzNCAxODAuMjA0QzEwOC44ODMgMTgwLjU5MyAxMDkuMjUxIDE4MC45NjkgMTA5LjU3NiAxODEuMzc3QzEwOS43MzggMTgxLjU4MSAxMDkuODIyIDE4MS44NDMgMTEwLjAzMSAxODIuMTY0Wk0xMDkuOTQyIDE4OC41NTRDMTA5Ljk0OCAxODkuMTI4IDEwOS45NTUgMTg5LjcwMiAxMDkuOTYyIDE5MC4yNzZDMTEwLjA4NiAxOTAuMjU5IDExMC4zMiAxOTAuMjQgMTEwLjMyIDE5MC4yMjVDMTEwLjMwOSAxODkuNjUxIDExMC4yNzggMTg5LjA3NiAxMTAuMjQxIDE4OC41MDJDMTEwLjIzOCAxODguNDYgMTEwLjE2MiAxODguNDIzIDEwOS45NDIgMTg4LjU1NFpcIiBmaWxsPVwiI0ZGQjYxRFwiLz5cclxuPHBhdGggZD1cIk05OS4wOTg0IDE4Ni4yNTNDOTguNzA5NiAxODYuMDE2IDk4LjEwODggMTg1LjYzNyA5OC4xNjI0IDE4NS4zODJDOTguNDUzNiAxODMuOTk5IDk4Ljg0OCAxODIuNjI4IDk5LjM0NzIgMTgxLjMwMUM5OS40NjY0IDE4MC45ODUgMTAwLjEyNyAxODAuODUzIDEwMC41MzggMTgwLjYzNkMxMDAuNjY4IDE4MS4xMzQgMTAxLjAyNiAxODEuNzAyIDEwMC44ODYgMTgyLjExNkMxMDAuNDE2IDE4My40OTYgOTkuNzY4IDE4NC44MjIgOTkuMDk4NCAxODYuMjUzWlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTM5MS4yNTggMTcwLjU3NkMzOTIuMTU1IDE2OC4xNDcgMzkzLjAwMiAxNjUuODEyIDM5MS43NTIgMTYzLjM1M0MzOTEuNjExIDE2My4wNzYgMzkxLjY1NyAxNjIuNjc3IDM5MS43MjIgMTYyLjM1NUMzOTEuNzg1IDE2Mi4wNDMgMzkxLjk4NSAxNjEuNzU3IDM5Mi4xMjQgMTYxLjQ1OUMzOTIuMzgyIDE2MS42NjYgMzkyLjc0MiAxNjEuODI0IDM5Mi44OCAxNjIuMDg4QzM5NC4zMTkgMTY0LjgyNSAzOTQuMzY3IDE2Ny42NiAzOTMuMTYyIDE3MC40NDNDMzkwLjcyNSAxNzYuMDcgMzg1LjkzMiAxNzguMjYzIDM4MC4xMDIgMTc3LjM4MkMzNzYuMDc4IDE3Ni43NzMgMzczLjAwMiAxNzQuMzkxIDM3MS42NDMgMTcwLjQ4MUMzNzEuNTM0IDE3MC4xNjcgMzcxLjY2IDE2OS43NzkgMzcxLjY3NyAxNjkuNDI1QzM3Mi4wNDkgMTY5LjU4IDM3Mi41NTEgMTY5LjY0IDM3Mi43NzEgMTY5LjkwOUMzNzMuNzEgMTcxLjA1MiAzNzQuMzgyIDE3Mi40NDQgMzc1LjQ4IDE3My40MDZDMzgwLjU1NCAxNzcuODU2IDM4OC4xNDMgMTc2LjM2OSAzOTEuMjU4IDE3MC41NzZaXCIgZmlsbD1cIiNGRkI2MURcIi8+XHJcbjxwYXRoIGQ9XCJNMzgyLjQ3NCAxNjcuNTA4QzM4MS44MzggMTY2Ljc4OSAzODEuMjU4IDE2Ni4xNzkgMzgwLjc1OCAxNjUuNTEzQzM4MC41MDkgMTY1LjE4MiAzODAuMTQ2IDE2NC42MTUgMzgwLjI3OCAxNjQuMzg4QzM4MC45NTQgMTYzLjIzMSAzODEuOTQ2IDE2Mi4yMTkgMzgxLjg2MyAxNjAuNzYzQzM4Mi4yNzYgMTYwLjgyNSAzODIuOTk0IDE2MC43OTUgMzgzLjA1MiAxNjAuOTY2QzM4My4zOTMgMTYxLjk3MyAzODMuNzUgMTYzLjAyMyAzODMuNzczIDE2NC4wNjRDMzgzLjc5NyAxNjUuMTg1IDM4NC4wOTIgMTY1Ljg2NCAzODUuMjA1IDE2Ni4zOTZDMzg3Ljk2NyAxNjcuNzE4IDM4OC4xMSAxNjkuODQ2IDM4NS43NSAxNzEuNzc3QzM4NS4zOTggMTcyLjA2NSAzODUuNDMgMTcyLjc2MiAzODUuMjQ2IDE3My4yNTdDMzg1LjEwMSAxNzMuNjUgMzg0Ljg5NiAxNzQuMDI1IDM4NC43MTggMTc0LjQwN0MzODQuMzQ2IDE3NC4xNjkgMzgzLjkzOSAxNzMuOTY4IDM4My42MDkgMTczLjY4NkMzODIuMzcgMTcyLjYzIDM4Mi43MzcgMTcxLjIzIDM4Mi43MzMgMTY5Ljg5OUMzODIuNzMxIDE2OS4xMyAzODIuNjI0IDE2OC4zNjIgMzgyLjQ3NCAxNjcuNTA4Wk0zODUuMjUzIDE2OC4xMDRDMzg0Ljg5NSAxNjguMjE5IDM4NC41MzggMTY4LjMzMyAzODQuMTggMTY4LjQ0N0MzODQuNjMgMTY5LjI2NyAzODUuMDgyIDE3MC4wODYgMzg1LjUzMyAxNzAuOTA2QzM4NS41NDEgMTcwLjA2OCAzODUuNTUgMTY5LjIzMSAzODUuNTUxIDE2OC4zOTNDMzg1LjU1MSAxNjguMzU0IDM4NS40NzQgMTY4LjMxNCAzODUuMjUzIDE2OC4xMDRaXCIgZmlsbD1cIiNGRkI2MURcIi8+XHJcbjxwYXRoIGQ9XCJNMzc2LjkxOCAxNTguMzA3QzM3NC4yOTIgMTU5LjkxOSAzNzIuNzM2IDE2Mi4wNTEgMzcyLjMzOCAxNjQuOTE1QzM3Mi4yODkgMTY1LjI3MyAzNzIuMTQ2IDE2NS42MzIgMzcxLjk3NiAxNjUuOTU3QzM3MS44NTcgMTY2LjE4NSAzNzEuNjE2IDE2Ni4zNTQgMzcxLjQzIDE2Ni41NTFDMzcxLjI1OCAxNjYuMjc4IDM3MC45NzQgMTY2LjAyMiAzNzAuOTMxIDE2NS43MzNDMzcwLjU4NiAxNjMuMzc1IDM3MS41OCAxNjEuMzk4IDM3My4wNDggMTU5LjYxOUMzNzQuODYyIDE1Ny40MiAzNzcuMjg2IDE1Ni4wNjQgMzgwLjEwMiAxNTUuMzM4QzM4MC40OSAxNTUuMjM5IDM4MC45NzUgMTU1LjIxNyAzODEuMzM4IDE1NS4zNUMzODEuODQxIDE1NS41MzUgMzgyLjI3IDE1NS45MDEgMzgyLjczIDE1Ni4xODlDMzgyLjMyNiAxNTYuMzU2IDM4MS45MyAxNTYuNTQyIDM4MS41MTcgMTU2LjY4NUMzODAuMDE3IDE1Ny4yMDQgMzc4LjUxMSAxNTcuNzEgMzc2LjkxOCAxNTguMzA3WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTM4NC42MjYgMTU2LjYwMkMzODUuMTc4IDE1Ni4zNDcgMzg1Ljk3OCAxNTUuODYgMzg2LjQzNCAxNTYuMDY1QzM4Ny44NDIgMTU2LjY5NyAzODkuMTQxIDE1Ny41NjEgMzkwLjQyNSAxNTguNDEzQzM5MC42NzMgMTU4LjU3OCAzOTAuNjYzIDE1OS4wOTUgMzkwLjc3MiAxNTkuNDQ5QzM5MC4zNjQgMTU5LjQ5MyAzODkuODUyIDE1OS43MDggMzg5LjU2NiAxNTkuNTVDMzg3LjkxOSAxNTguNjQ1IDM4Ni4zMjYgMTU3LjY1MSAzODQuNjI2IDE1Ni42MDJaXCIgZmlsbD1cIiNGRkI2MURcIi8+XHJcbjxwYXRoIGQ9XCJNMjYyLjY1MyAxODIuNTlDMjYxLjkzNiAxODEuMTEyIDI2MS4xMDkgMTc5Ljg0NiAyNjAuNTUgMTc4LjQ4MkMyNjAuMjg0IDE3Ny44MzQgMjYwLjUzIDE3Ni45OTYgMjYwLjU0NCAxNzYuMjQ1QzI2MS4wMDggMTc2LjgyNiAyNjEuNTMzIDE3Ny4zNzMgMjYxLjkyNCAxNzcuOTk2QzI2My4wOTUgMTc5Ljg1NSAyNjQuMDAyIDE4MS45MDMgMjY1LjM5OCAxODMuNTlDMjY4LjI4NyAxODcuMDgxIDI3Mi40MSAxODcuNTAzIDI3Ni42OTggMTg1Ljc3MkMyODEuODU4IDE4My42ODggMjg0LjY3NCAxNzkuNDk2IDI4NS4zNzMgMTc0LjcxOUMyODUuOTI5IDE3MC45MTkgMjg0LjY4NSAxNjYuNzk1IDI4MC44NTQgMTY0LjE1NkMyODAuNTMxIDE2My45MzQgMjgwLjUzNCAxNjMuMjg0IDI4MC4zODYgMTYyLjgzMkMyODAuODIzIDE2Mi44MjkgMjgxLjMyMSAxNjIuNjkzIDI4MS42ODcgMTYyLjg0NUMyODQuMDA4IDE2My44MDMgMjg0Ljk4MiAxNjUuODkzIDI4NS45MSAxNjcuODdDMjg3LjEzIDE3MC40NjggMjg3LjYyMiAxNzMuNDA0IDI4Ni44OTcgMTc2LjA3OEMyODYuMjY2IDE3OC40MDMgMjg0LjU1OSAxODAuNDgyIDI4My4yMjIgMTgyLjYxQzI4MC45NzYgMTg2LjE4NSAyNzcuMjIyIDE4Ny43MDIgMjczLjIxOSAxODguMjQxQzI3MS4zNTIgMTg4LjQ5MyAyNjkuMDg1IDE4Ny42NjkgMjY3LjM0NyAxODYuNzQxQzI2NS41NjEgMTg1Ljc4OSAyNjQuMiAxODQuMTE3IDI2Mi42NTMgMTgyLjU5WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTI3OS4xNDIgMTY1LjU0OUMyNzguNjc0IDE2Ny4wODIgMjc2Ljk5MSAxNjguNDM4IDI3OS4xMjQgMTY5LjgzNUMyNzkuMjI2IDE2OS45MDIgMjc5LjE1MiAxNzAuNDQ1IDI3OC45ODkgMTcwLjU4MkMyNzguODM0IDE3MC43MTEgMjc4LjMyNiAxNzAuNzEgMjc4LjE5MyAxNzAuNTczQzI3Ny4xMTQgMTY5LjQ1OSAyNzYuOTM4IDE3MC41MjEgMjc2LjY0MiAxNzEuMTQ5QzI3Ni4xNzkgMTcyLjEzNCAyNzYuMjU4IDE3Mi45NDIgMjc2LjkwMyAxNzQuMDA0QzI3Ny42NjMgMTc1LjI1NSAyNzguNDE4IDE3Ni44ODggMjc2Ljk4MSAxNzguMzE5QzI3Ni41MTggMTc4Ljc4IDI3NS45NDIgMTc5LjQzOCAyNzUuMzkgMTc5LjQ2M0MyNzMuNzM2IDE3OS41MzkgMjcyLjY3MyAxODAuMTQxIDI3Mi4wMzggMTgxLjYyQzI3MS44NTcgMTgyLjA0MiAyNzEuMTgyIDE4Mi4yNzEgMjcwLjczNCAxODIuNTg5QzI3MC42NjkgMTgyLjAzIDI3MC41OTMgMTgxLjQ3NCAyNzAuNTQyIDE4MC45MTRDMjcwLjQ4MSAxODAuMjM0IDI3MC41NDQgMTc5LjUyNSAyNzAuMzU4IDE3OC44NzlDMjcwLjIxOCAxNzguMzkgMjY5LjY0OCAxNzguMDEyIDI2OS41MDYgMTc3LjUyMkMyNjkuNDAyIDE3Ny4xNyAyNjkuNTcgMTc2LjYwMSAyNjkuODQyIDE3Ni4zNDVDMjcwLjAxOCAxNzYuMTc5IDI3MC43MzEgMTc2LjI2NiAyNzAuOTggMTc2LjQ3N0MyNzIuMzA4IDE3Ny42MDggMjcyLjMxMSAxNzcuMjM4IDI3Mi44NDQgMTc1LjczOEMyNzMuMzg4IDE3NC4yMDYgMjczLjE1NSAxNzMuNDg5IDI3Mi4wNDYgMTcyLjU4NEMyNzAuOTAxIDE3MS42NDggMjcwLjk5MSAxNzAuMzM5IDI3MS42NzkgMTY5LjMzOEMyNzIuMjA3IDE2OC41NjkgMjczLjMzOSAxNjcuNjYzIDI3NC4xNjQgMTY3LjY5NkMyNzUuOTQzIDE2Ny43NjcgMjc2LjcwNiAxNjcuMDE0IDI3Ny4zNzMgMTY1LjY3NEMyNzguMTAyIDE2NC4yMSAyNzguMzM2IDE2NC4yMTkgMjc5LjE0MiAxNjUuNTQ5Wk0yNzQuMzAzIDE2OS4yOThDMjczLjg4NSAxNjkuNzk3IDI3My4yODEgMTcwLjI0OCAyNzMuMTIzIDE3MC44MTNDMjczLjAzOCAxNzEuMTE3IDI3My43MTggMTcxLjYxNCAyNzQuMDUyIDE3Mi4wMjRDMjc0LjM2NiAxNzEuNTc3IDI3NC42NzEgMTcxLjEyMyAyNzUuMDAyIDE3MC42ODZDMjc1LjEzOCAxNzAuNTA2IDI3NS40MDkgMTcwLjM5MyAyNzUuNDg0IDE3MC4yMDFDMjc1Ljc3NCAxNjkuNDY2IDI3NS40NSAxNjkuMTc2IDI3NC4zMDMgMTY5LjI5OFpNMjc1LjU1OCAxNzUuOTQ0QzI3NS41MTggMTc1LjY3OCAyNzUuNDc4IDE3NS40MTMgMjc1LjQzOSAxNzUuMTQ5QzI3NS4xNTQgMTc1LjI2OCAyNzQuNzcxIDE3NS4zMTggMjc0LjYwNiAxNzUuNTI0QzI3NC4zODcgMTc1Ljc5OSAyNzQuMjk2IDE3Ni4xODggMjc0LjIyNCAxNzYuNTQxQzI3NC4xMzEgMTc2Ljk5NyAyNzQuMTEzIDE3Ny40NjYgMjc0LjA2MiAxNzcuOTI5QzI3NC40NzkgMTc3LjY4NSAyNzQuOTU0IDE3Ny40OTcgMjc1LjI5MiAxNzcuMTc3QzI3NS40OTMgMTc2Ljk4NiAyNzUuNDc2IDE3Ni41ODggMjc1LjU1OCAxNzUuOTQ0WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTI2Mi4zODQgMTY2Ljk5N0MyNjUuMjYzIDE2My44NzMgMjY5LjE0OSAxNjIuNzM1IDI3Mi45NTggMTYxLjQ3NkMyNzMuMzI5IDE2MS4zNTMgMjczLjgwMiAxNjEuMzg5IDI3NC4xOTYgMTYxLjQ4QzI3NC41NTQgMTYxLjU2MiAyNzQuODY2IDE2MS44MTggMjc1LjE5OSAxNjEuOTk4QzI3NC45MDcgMTYyLjI3MiAyNzQuNjY3IDE2Mi42NjMgMjc0LjMxNSAxNjIuODA0QzI3MS42ODIgMTYzLjg2MSAyNjkuMDE0IDE2NC44NDEgMjY2LjM4IDE2NS44OTdDMjYzLjY3MiAxNjYuOTgzIDI2Mi42MTQgMTY5LjIyNSAyNjEuOTA3IDE3MS43MzNDMjYxLjc1MiAxNzIuMjgzIDI2MS4yMzYgMTcyLjc0MSAyNjAuODg2IDE3My4yNDFDMjYwLjY4NCAxNzIuNjIxIDI2MC4xNjkgMTcxLjkwNSAyNjAuMzQxIDE3MS40QzI2MC44NDYgMTY5LjkxNiAyNjEuNjIzIDE2OC41MTYgMjYyLjM4NCAxNjYuOTk3WlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48cGF0aCBkPVwiTTI2OC42NTcgMTg5LjY2MUMyNjYuNzIyIDE4OS40NCAyNjUuMzM4IDE4OC40NjMgMjY0LjMwNiAxODcuMDI0QzI2NC4xODQgMTg2Ljg1NCAyNjQuMzUzIDE4Ni40OTUgMjY0LjM4NiAxODYuMjIzQzI2NC41OTkgMTg2LjI2MSAyNjQuODU4IDE4Ni4yMzggMjY1LjAxOCAxODYuMzQ3QzI2Ni4zNDMgMTg3LjI1MSAyNjcuNjUzIDE4OC4xNzUgMjY4Ljk0OSAxODkuMTE2QzI2OC45ODQgMTg5LjE0MSAyNjguODE4IDE4OS40MTcgMjY4LjY1NyAxODkuNjYxWlwiIGZpbGw9XCIjRkZCNjFEXCIvPlxyXG48L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTdmdNZW51KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgY2xhc3NOYW1lPVwibWVudV9zdmdfX2ZlYXRoZXIgbWVudV9zdmdfX2ZlYXRoZXItbWVudVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zIDEyaDE4TTMgNmgxOE0zIDE4aDE4XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdNZW51XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU2VhcmNoKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE4IDE2LjVsLTUuMTQtNS4xOGgtLjM1YTcgNyAwIDEwLTEuMTkgMS4xOXYuMzVMMTYuNSAxOGwxLjUtMS41ek0xMiA3QTUgNSAwIDExMiA3YTUgNSAwIDAxMTAgMHpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VhcmNoXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnU3Bpbm5lcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cmVjdFxuICAgICAgICB4PXs0N31cbiAgICAgICAgeT17MjR9XG4gICAgICAgIHJ4PXszfVxuICAgICAgICByeT17Nn1cbiAgICAgICAgd2lkdGg9ezZ9XG4gICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCItMC45MTY2NjY2NjY2NjY2NjY2c1wiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcmVjdD5cbiAgICAgIDxyZWN0XG4gICAgICAgIHg9ezQ3fVxuICAgICAgICB5PXsyNH1cbiAgICAgICAgcng9ezN9XG4gICAgICAgIHJ5PXs2fVxuICAgICAgICB3aWR0aD17Nn1cbiAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCA1MCA1MClcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcmVjdD5cbiAgICAgIDxyZWN0XG4gICAgICAgIHg9ezQ3fVxuICAgICAgICB5PXsyNH1cbiAgICAgICAgcng9ezN9XG4gICAgICAgIHJ5PXs2fVxuICAgICAgICB3aWR0aD17Nn1cbiAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCItMC43NXNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3JlY3Q+XG4gICAgICA8cmVjdFxuICAgICAgICB4PXs0N31cbiAgICAgICAgeT17MjR9XG4gICAgICAgIHJ4PXszfVxuICAgICAgICByeT17Nn1cbiAgICAgICAgd2lkdGg9ezZ9XG4gICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNTAgNTApXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXG4gICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgIGJlZ2luPVwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3JlY3Q+XG4gICAgICA8cmVjdFxuICAgICAgICB4PXs0N31cbiAgICAgICAgeT17MjR9XG4gICAgICAgIHJ4PXszfVxuICAgICAgICByeT17Nn1cbiAgICAgICAgd2lkdGg9ezZ9XG4gICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDUwIDUwKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9yZWN0PlxuICAgICAgPHJlY3RcbiAgICAgICAgeD17NDd9XG4gICAgICAgIHk9ezI0fVxuICAgICAgICByeD17M31cbiAgICAgICAgcnk9ezZ9XG4gICAgICAgIHdpZHRoPXs2fVxuICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCItMC41c1wiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcmVjdD5cbiAgICAgIDxyZWN0XG4gICAgICAgIHg9ezQ3fVxuICAgICAgICB5PXsyNH1cbiAgICAgICAgcng9ezN9XG4gICAgICAgIHJ5PXs2fVxuICAgICAgICB3aWR0aD17Nn1cbiAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNTAgNTApXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXG4gICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgIGJlZ2luPVwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3JlY3Q+XG4gICAgICA8cmVjdFxuICAgICAgICB4PXs0N31cbiAgICAgICAgeT17MjR9XG4gICAgICAgIHJ4PXszfVxuICAgICAgICByeT17Nn1cbiAgICAgICAgd2lkdGg9ezZ9XG4gICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjEwIDUwIDUwKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9yZWN0PlxuICAgICAgPHJlY3RcbiAgICAgICAgeD17NDd9XG4gICAgICAgIHk9ezI0fVxuICAgICAgICByeD17M31cbiAgICAgICAgcnk9ezZ9XG4gICAgICAgIHdpZHRoPXs2fVxuICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCItMC4yNXNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3JlY3Q+XG4gICAgICA8cmVjdFxuICAgICAgICB4PXs0N31cbiAgICAgICAgeT17MjR9XG4gICAgICAgIHJ4PXszfVxuICAgICAgICByeT17Nn1cbiAgICAgICAgd2lkdGg9ezZ9XG4gICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwIDUwIDUwKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxuICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICBiZWdpbj1cIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1wiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcmVjdD5cbiAgICAgIDxyZWN0XG4gICAgICAgIHg9ezQ3fVxuICAgICAgICB5PXsyNH1cbiAgICAgICAgcng9ezN9XG4gICAgICAgIHJ5PXs2fVxuICAgICAgICB3aWR0aD17Nn1cbiAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgzMDAgNTAgNTApXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXG4gICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAvPlxuICAgICAgPC9yZWN0PlxuICAgICAgPHJlY3RcbiAgICAgICAgeD17NDd9XG4gICAgICAgIHk9ezI0fVxuICAgICAgICByeD17M31cbiAgICAgICAgcnk9ezZ9XG4gICAgICAgIHdpZHRoPXs2fVxuICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcbiAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgYmVnaW49XCIwc1wiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcmVjdD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdTcGlubmVyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU3ZnV29ybGQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNOCAwYTggOCAwIDEwMCAxNkE4IDggMCAwMDggMHpNNyAxNC4zMmE2LjQgNi40IDAgMDEtNS4yMy03Ljc1TDYgMTAuNjh2LjhjMCAuODguMTIgMS4zMiAxIDEuMzJ2MS41MnptNS43Mi0yYy0uMi0uNjYtMS0xLjMyLTEuNzItMS4zMmgtMVY5YzAtLjQ0LS41Ni0xLTEtMUg1VjZoMWMuNDQgMCAxLS41NiAxLTFWNGgyYy44OCAwIDEuNC0uNzIgMS40LTEuNnYtLjMzYTYuNCA2LjQgMCAwMTIuMzIgMTAuMjR2LjAxelwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdXb3JsZFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vQWxlcnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93RG93biB9IGZyb20gJy4vQXJyb3dEb3duJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd1VwIH0gZnJvbSAnLi9BcnJvd1VwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbG9zZSB9IGZyb20gJy4vQ2xvc2UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuL01lbnUnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaCB9IGZyb20gJy4vU2VhcmNoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JsZCB9IGZyb20gJy4vV29ybGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW4gfSBmcm9tICcuL01haW4nIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZXh0cmFfY29udGFpbmVyX18xbFZwZ1wiLFxuXHRcInRhZ0NvbnRhaW5lclwiOiBcImV4dHJhX3RhZ0NvbnRhaW5lcl9fMWxlSndcIixcblx0XCJwb3B1bGFyVGFnc1wiOiBcImV4dHJhX3BvcHVsYXJUYWdzX18zQ0kxWFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgVGFnQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3RhZydcblxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leHRyYS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBFeHRyYSA9ICh7IG1hcmdpblRvcCA9IDI0IH0pID0+IHtcbiAgY29uc3QgeyB0YWdTdGF0ZSB9ID0gdXNlQ29udGV4dChUYWdDb250ZXh0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogYCR7bWFyZ2luVG9wfXB4YCB9fVxuICAgICAgPlxuICAgICAgICA8aDI+UG9wdWxhciBUYWdzPC9oMj5cbiAgICAgICAgeyF0YWdTdGF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJUYWdzfT5cbiAgICAgICAgICB7dGFnU3RhdGU/Lm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnLl9pZH0gY291bnQ9e3RhZy5jb3VudH0+XG4gICAgICAgICAgICAgIHt0YWcuX2lkfVxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXh0cmFcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzFzVm5TXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiaGVhZGVyX2NvbnRhaW5lcl9fM1dGaFlcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzExMVlKXCIsXG5cdFwiaG9tZWZmXCI6IFwiaGVhZGVyX2hvbWVmZl9fMVdPRHRcIixcblx0XCJub3RcIjogXCJoZWFkZXJfbm90X18zQ0phT1wiLFxuXHRcImhpZGVcIjogXCJoZWFkZXJfaGlkZV9fMTJKOG5cIixcblx0XCJzaG93XCI6IFwiaGVhZGVyX3Nob3dfXzNhMUl0XCIsXG5cdFwiYXV0aFwiOiBcImhlYWRlcl9hdXRoX19pVDN0alwiLFxuXHRcImxvZ3NcIjogXCJoZWFkZXJfbG9nc19fMkJ0MHBcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHVzZUNvbXBvbmVudFZpc2libGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ29tcG9uZW50VmlzaWJsZSdcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xuaW1wb3J0IE5hdmlnYXRpb25Ecm9wZG93biBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uLWRyb3Bkb3duJ1xuaW1wb3J0IHsgTWVudSwgQ2xvc2UsIExvZ28gfSBmcm9tICcuLi8uLi9pY29ucydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haW5wIGZyb20gXCIuLi8uLi9Ib21lL2hvbWVcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi8uLi8uLi9wYWdlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgYXV0aFN0YXRlLCBsb2dvdXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGNvbnN0IFtMb2dvdXQsc2V0TG9nb3V0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbQ2hvaWNlLHNldENob2ljZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW0hvbWUsc2V0SG9tZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qge1xuICAgIHJlZixcbiAgICB0b2dnbGVSZWYsXG4gICAgaXNDb21wb25lbnRWaXNpYmxlLFxuICAgIHNldElzQ29tcG9uZW50VmlzaWJsZVxuICB9ID0gdXNlQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxuXG4gIHtIb21lID8gPE1haW5wIC8+IDogPEhvbWVQYWdlIC8+fVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpemUud2lkdGggPiBDT05TVC5NT0JJTEVfU0laRSkge1xuICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxuICAgIH1cbiAgfSwgW3NpemVdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5oZWFkZXIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgIHsvKiA8ZGl2IHJlZj17dG9nZ2xlUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb21wb25lbnRWaXNpYmxlKChpc09wZW4pID0+ICFpc09wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgPyA8Q2xvc2UgLz4gOiA8TWVudSAvPn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5ob21lJyBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbWFyZ2luUmlnaHQ6XCJhdXRvXCJ9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbnBhZ2UnIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiAsIHBhZGRpbmdSaWdodCA6IFwiOHB4XCIsZm9udEZhbWlseTogJ01vbnRzZXJyYXQnLGZvbnRTdHlsZTogXCJub3JtYWxcIixmb250V2VpZ2h0OiBcIjgwMFwiLGZvbnRTaXplOiBcIjE4cHhcIixsaW5lSGVpZ2h0OiBcIjIycHhcIn19PjxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENob2ljZSh0cnVlKX0gY2xhc3NOYW1lPXtDaG9pY2UgPyBzdHlsZXMuaG9tZWZmIDogc3R5bGVzLm5vdH0+SE9NRTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ydW0nIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiAsIHBhZGRpbmdSaWdodCA6IFwiMTBweFwiLGZvbnRGYW1pbHk6ICdNb250c2VycmF0Jyxmb250U3R5bGU6IFwibm9ybWFsXCIsZm9udFdlaWdodDogXCI4MDBcIixmb250U2l6ZTogXCIxOHB4XCIsbGluZUhlaWdodDogXCIyMnB4XCJ9fT48c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDaG9pY2UoZmFsc2UpfSBjbGFzc05hbWU9e0Nob2ljZSA/IHN0eWxlcy5ub3QgOiBzdHlsZXMuaG9tZWZmfT5GT1JVTTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCI2cHhcIixtYXJnaW5SaWdodDpcIjQlXCJ9fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7LyogV2VsY29tZXsnICd9ICovfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCJcbiAgICAgICAgICAgICAgICBhcz17YC91c2Vycy8ke2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250RmFtaWx5OidQbGF5ZmFpciBEaXNwbGF5Jyxjb2xvcjpcIndoaXRlXCIscGFkZGluZ1JpZ2h0OlwiMTVweFwiLGZvbnRXZWlnaHQ6XCI5MDBcIixmb250U3R5bGU6XCJub3JtYWxcIixmb250U2l6ZTpcIjE0cHhcIixsaW5lSGVpZ2h0OlwiMTlweFwifX0+e2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWRpdicgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19PlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGltZyBpZD1cImF2YXRhclwiIHNyYz17YXV0aFN0YXRlLnVzZXJJbmZvLnByb2ZpbGVQaG90b30gb25DbGljaz17KCkgPT4gc2V0TG9nb3V0KCFMb2dvdXQpfSBzdHlsZT17e2JvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOiBcIjI0cHhcIixoZWlnaHQ6IFwiMjRweFwifX0+PC9pbWc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e0xvZ291dCA/IHN0eWxlcy5oaWRlIDogc3R5bGVzLnNob3d9IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e3Bvc2l0aW9uOlwiZml4ZWRcIixyaWdodDpcIjQ1cHhcIix0b3A6XCI3MHB4XCIsZm9udEZhbWlseTonUGxheWZhaXIgRGlzcGxheScsZm9udFdlaWdodDpcIjkwMFwiLGZvbnRTdHlsZTpcIm5vcm1hbFwiLGZvbnRTaXplOlwiMTRweFwifX0+TG9nIG91dDwvYT5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nc30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9XG4gICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdsb2dpbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3JlZn0+e2lzQ29tcG9uZW50VmlzaWJsZSAmJiA8TmF2aWdhdGlvbkRyb3Bkb3duIC8+fTwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcblxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJ1xuaW1wb3J0IEV4dHJhIGZyb20gJy4vZXh0cmEnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IExheW91dCA9ICh7IGV4dHJhID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmJvZHksICFleHRyYSAmJiBzdHlsZXMubWFpbil9PlxuICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUgJiYgPFNpZGViYXIgLz59XG4gICAgICAgICAgPE1haW4+e2NoaWxkcmVufTwvTWFpbj5cbiAgICAgICAgICB7c2l6ZS53aWR0aCA+IENPTlNULlRBQkxFVF9TSVpFICYmIGV4dHJhICYmIDxFeHRyYSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlcIjogXCJsYXlvdXRfYm9keV9fMklaUm9cIixcblx0XCJtYWluXCI6IFwibGF5b3V0X21haW5fXzNPMmFyXCIsXG5cdFwiY29udGFpbmVyXCI6IFwibGF5b3V0X2NvbnRhaW5lcl9fMnlUNW9cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi5tb2R1bGUuY3NzJ1xuXG5jb25zdCBNYWluID0gKHsgYm9yZGVyID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFpbiwgYm9yZGVyICYmIHN0eWxlcy5ib3JkZXIpfT57Y2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9yZGVyXCI6IFwibWFpbl9ib3JkZXJfXzNoZHJaXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZGViYXIubW9kdWxlLmNzcydcblxuY29uc3QgU2lkZWJhciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuc2lkZWJhciwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcInNpZGViYXJfc2lkZWJhcl9fMVItX2pcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9tb2RhbCdcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnLi4vaWNvbnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vZGFsLm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1vZGFsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHJlZiwgc2V0SXNDb21wb25lbnRWaXNpYmxlIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5tb2RhbCwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxEaWFsb2d9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9eygpID0+IHNldElzQ29tcG9uZW50VmlzaWJsZSgoaXNPcGVuKSA9PiAhaXNPcGVuKX0+XG4gICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsXCI6IFwibW9kYWxfbW9kYWxfXzJaM1JBXCIsXG5cdFwibW9kYWxEaWFsb2dcIjogXCJtb2RhbF9tb2RhbERpYWxvZ19fMlBBdWFcIixcblx0XCJjbG9zZUJ1dHRvblwiOiBcIm1vZGFsX2Nsb3NlQnV0dG9uX18yT005d1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi1kcm9wZG93bi5tb2R1bGUuY3NzJ1xuXG5jb25zdCBOYXZpZ2F0aW9uRHJvcGRvd24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWFsb2d9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Ecm9wZG93blxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGlhbG9nXCI6IFwibmF2aWdhdGlvbi1kcm9wZG93bl9kaWFsb2dfXzNEb1ZuXCIsXG5cdFwic2lkZWJhclwiOiBcIm5hdmlnYXRpb24tZHJvcGRvd25fc2lkZWJhcl9fMVZ2dXFcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL25hdi1pdGVtJ1xuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuLi9pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgc2VsZWN0ZWQ9e1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3F1ZXN0aW9ucydcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8V29ybGQgLz5cbiAgICAgICAgPHNwYW4+U3RhY2sgT3ZlcmZsb3c8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG5cbiAgICAgIDxOYXZJdGVtIGhyZWY9XCIvdGFnc1wiIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy90YWdzJ30+XG4gICAgICAgIDxzcGFuPlRhZ3M8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvdXNlcnNcIlxuICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3VzZXJzJ31cbiAgICAgID5cbiAgICAgICAgPHNwYW4+VXNlcnM8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXYtaXRlbS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBOYXZJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4sIHNlbGVjdGVkLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2hyZWZ9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMubmF2SXRlbSwgc2VsZWN0ZWQgJiYgc3R5bGVzLm5hdkl0ZW1TZWxlY3RlZCl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZJdGVtXCI6IFwibmF2LWl0ZW1fbmF2SXRlbV9fMXpLRFZcIixcblx0XCJuYXZJdGVtU2VsZWN0ZWRcIjogXCJuYXYtaXRlbV9uYXZJdGVtU2VsZWN0ZWRfXzJ5UVcyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZcIjogXCJuYXZpZ2F0aW9uX25hdl9fOG50ei1cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UtdGl0bGUubW9kdWxlLmNzcydcblxuY29uc3QgUGFnZVRpdGxlID0gKHsgdGl0bGUsIGJ1dHRvbiwgYm9yZGVyQm90dG9tID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY29udGFpbmVyLCBib3JkZXJCb3R0b20gJiYgc3R5bGVzLmJvcmRlckJvdHRvbSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIHtidXR0b24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBocmVmPXtpc0F1dGhlbnRpY2F0ZWQoKSA/ICcvcXVlc3Rpb25zL2FzaycgOiAnL2F1dGgnfVxuICAgICAgICAgICAgICBwcmlcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXNrIFF1ZXN0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVuICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PntjaGlsZHJlbn08L3A+fVxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwYWdlLXRpdGxlX2NvbnRhaW5lcl9fMnkwUk9cIixcblx0XCJib3JkZXJCb3R0b21cIjogXCJwYWdlLXRpdGxlX2JvcmRlckJvdHRvbV9faWpZdHdcIixcblx0XCJ0aXRsZVwiOiBcInBhZ2UtdGl0bGVfdGl0bGVfX3RSSVN4XCIsXG5cdFwic3VtbWFyeVwiOiBcInBhZ2UtdGl0bGVfc3VtbWFyeV9fM3diZTlcIixcblx0XCJidXR0b25Db250YWluZXJcIjogXCJwYWdlLXRpdGxlX2J1dHRvbkNvbnRhaW5lcl9fMTN2NmVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1ZXN0aW9uLXN0YXRzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFF1ZXN0aW9uU3RhdHMgPSAoeyB2b3RlQ291bnQsIGFuc3dlckNvdW50LCB2aWV3IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGV9PlxuICAgICAgICA8c3Bhbj57dm90ZUNvdW50fTwvc3Bhbj5cbiAgICAgICAgPHA+dm90ZXM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cbiAgICAgICAgPHNwYW4+e2Fuc3dlckNvdW50fTwvc3Bhbj5cbiAgICAgICAgPHA+YW5zd2VyczwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudmlld30+e3ZpZXd9IHZpZXdzPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uU3RhdHNcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInF1ZXN0aW9uLXN0YXRzX2NvbnRhaW5lcl9fM1FzUWlcIixcblx0XCJ2b3RlXCI6IFwicXVlc3Rpb24tc3RhdHNfdm90ZV9feWlGNnBcIixcblx0XCJhbnN3ZXJcIjogXCJxdWVzdGlvbi1zdGF0c19hbnN3ZXJfXzFfMTRFXCIsXG5cdFwidmlld1wiOiBcInF1ZXN0aW9uLXN0YXRzX3ZpZXdfXzJEa0dPXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0J1xuaW1wb3J0IHNsdWcgZnJvbSAnc2x1ZydcblxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9xdWVzdGlvbi1zdW1tYXJ5Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFF1ZXN0aW9uU3VtbWFyeSA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgdGFncyxcbiAgYXV0aG9yLFxuICBjcmVhdGVkVGltZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8TGluayBocmVmPVwiL3F1ZXN0aW9ucy9bc2x1Z11cIiBhcz17YC9xdWVzdGlvbnMvJHtpZH0tJHtzbHVnKHRpdGxlKX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+e3RpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRhaW5lcn0+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3NlY3VyZS5ncmF2YXRhci5jb20vYXZhdGFyLyR7YXV0aG9yLmlkfT9zPTMyJmQ9aWRlbnRpY29uYH1cbiAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBhc2tlZHsnICd9XG4gICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGNyZWF0ZWRUaW1lKSwge1xuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uU3VtbWFyeVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicXVlc3Rpb24tc3VtbWFyeV9jb250YWluZXJfXzJJTG5LXCIsXG5cdFwibGlua1wiOiBcInF1ZXN0aW9uLXN1bW1hcnlfbGlua19fMVphX1dcIixcblx0XCJleGNlcnB0XCI6IFwicXVlc3Rpb24tc3VtbWFyeV9leGNlcnB0X18zZFYxbFwiLFxuXHRcImZvb3RlclwiOiBcInF1ZXN0aW9uLXN1bW1hcnlfZm9vdGVyX18yZks0cVwiLFxuXHRcInRhZ0NvbnRhaW5lclwiOiBcInF1ZXN0aW9uLXN1bW1hcnlfdGFnQ29udGFpbmVyX18yaFB5clwiLFxuXHRcInVzZXJEZXRhaWxzXCI6IFwicXVlc3Rpb24tc3VtbWFyeV91c2VyRGV0YWlsc19fckVnSDBcIixcblx0XCJpbmZvXCI6IFwicXVlc3Rpb24tc3VtbWFyeV9pbmZvX19QbnptS1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVlc3Rpb24td3JhcHBlci5tb2R1bGUuY3NzJ1xuXG5jb25zdCBRdWVzdGlvbldyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NoaWxkcmVufTwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbldyYXBwZXJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInF1ZXN0aW9uLXdyYXBwZXJfY29udGFpbmVyX18yYmJORFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWcubW9kdWxlLmNzcydcblxuY29uc3QgVGFnID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY291bnQsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIGNvdW50ID8gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHRhZzogY2hpbGRyZW4gfSB9fT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbihzdHlsZXMudGFnLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubXVsdGlwbGllcn0+w5c8L3NwYW4+XG4gICAgICAmbmJzcDtcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57Y291bnR9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgdGFnOiBjaGlsZHJlbiB9IH19PlxuICAgICAgPGEgY2xhc3NOYW1lPXtjbihzdHlsZXMudGFnLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFnXCI6IFwidGFnX3RhZ19fMkNNWjlcIixcblx0XCJtdWx0aXBsaWVyXCI6IFwidGFnX211bHRpcGxpZXJfX0MtZzRHXCIsXG5cdFwiY291bnRcIjogXCJ0YWdfY291bnRfXzFzc1dpXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFRBQkxFVF9TSVpFOiA5ODAsXG4gIE1PQklMRV9TSVpFOiA2NDBcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiB1c2VDb21wb25lbnRWaXNpYmxlKGluaXRpYWxJc1Zpc2libGUpIHtcbiAgY29uc3QgW2lzQ29tcG9uZW50VmlzaWJsZSwgc2V0SXNDb21wb25lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGluaXRpYWxJc1Zpc2libGUpXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCB0b2dnbGVSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBoYW5kbGVIaWRlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICByZWYuY3VycmVudCAmJlxuICAgICAgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICF0b2dnbGVSZWY/LmN1cnJlbnQ/LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICApIHtcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVIaWRlLCB0cnVlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlSGlkZSwgdHJ1ZSlcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4geyByZWYsIHRvZ2dsZVJlZiwgaXNDb21wb25lbnRWaXNpYmxlLCBzZXRJc0NvbXBvbmVudFZpc2libGUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDb21wb25lbnRWaXNpYmxlXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcblxuICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgfSwgW10pXG4gIHJldHVybiB3aW5kb3dTaXplXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1NpemVcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uL3N0b3JlL21vZGFsJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvYXV0aCdcbmltcG9ydCB7IEZldGNoUHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZS9mZXRjaCdcbmltcG9ydCB7IFRhZ1Byb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvdGFnJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL2hvbWUnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xuaW1wb3J0IEF1dGhGb3JtcyBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgtZm9ybXMnXG5cbmltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJ1xuaW1wb3J0ICdyZWFjdC10YWdzaW5wdXQvcmVhY3QtdGFnc2lucHV0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgcmVmLFxuICAgIGlzQ29tcG9uZW50VmlzaWJsZSxcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGVcbiAgfSA9IHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXG5cbiAgY29uc3QgW2F1dGhTY3JlZW4sIHNldEF1dGhTY3JlZW5dID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBoYW5kbGVDb21wb25lbnRWaXNpYmxlID0gKGNvbXBvbmVudFZpc2libGUsIGF1dGhTY3JlZW4pID0+IHtcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50VmlzaWJsZSlcbiAgICBzZXRBdXRoU2NyZWVuKGF1dGhTY3JlZW4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhvbWUgLz5cbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyByZWYsIGhhbmRsZUNvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9fVxuICAgID5cbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxGZXRjaFByb3ZpZGVyPlxuICAgICAgICAgIDxUYWdQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxNb2RhbD5cbiAgICAgICAgICAgICAgICAgIDxBdXRoRm9ybXMgc2NyZWVuPXthdXRoU2NyZWVufSAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhZ1Byb3ZpZGVyPlxuICAgICAgICAgIDwvRmV0Y2hQcm92aWRlcj5cbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vdXRpbC9mZXRjaGVyJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IFF1ZXN0aW9uV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXdyYXBwZXInXG5pbXBvcnQgUXVlc3Rpb25TdGF0cyBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN0YXRzJ1xuaW1wb3J0IFF1ZXN0aW9uU3VtbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnknXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS10aXRsZSdcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1ncm91cCdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2ljb25zJ1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3NvcnRUeXBlLCBzZXRTb3J0VHlwZV0gPSB1c2VTdGF0ZSgnVm90ZXMnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KCcvcXVlc3Rpb24nKVxuICAgICAgc2V0UXVlc3Rpb25zKGRhdGEpXG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbkJ5VGFnID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoYC9xdWVzdGlvbnMvJHtyb3V0ZXIucXVlcnkudGFnfWApXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcbiAgICB9XG5cbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRhZykge1xuICAgICAgZmV0Y2hRdWVzdGlvbkJ5VGFnKClcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hRdWVzdGlvbigpXG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5LnRhZ10pXG5cbiAgY29uc3QgaGFuZGxlU29ydGluZyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHNvcnRUeXBlKSB7XG4gICAgICBjYXNlICdWb3Rlcyc6XG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmVcbiAgICAgIGNhc2UgJ1ZpZXdzJzpcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnZpZXdzIC0gYS52aWV3c1xuICAgICAgY2FzZSAnTmV3ZXN0JzpcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxuICAgICAgY2FzZSAnT2xkZXN0JzpcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShhLmNyZWF0ZWQpIC0gbmV3IERhdGUoYi5jcmVhdGVkKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIEZJTml0eSB8IEZpbmFuY2UgYW5kIFRlY2hub2xvZ3kgXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e3JvdXRlci5xdWVyeS50YWcgPyBgUXVlc3Rpb25zIHRhZ2dlZCBbJHtyb3V0ZXIucXVlcnkudGFnfV1gIDogJ0FsbCBRdWVzdGlvbnMnfSBidXR0b24gYm9yZGVyQm90dG9tPXtmYWxzZX0gLz5cblxuICAgICAgPEJ1dHRvbkdyb3VwXG4gICAgICAgIGJvcmRlckJvdHRvbVxuICAgICAgICBidXR0b25zPXtbJ1ZvdGVzJywgJ1ZpZXdzJywgJ05ld2VzdCcsICdPbGRlc3QnXX1cbiAgICAgICAgc2VsZWN0ZWQ9e3NvcnRUeXBlfVxuICAgICAgICBzZXRTZWxlY3RlZD17c2V0U29ydFR5cGV9XG4gICAgICAvPlxuXG4gICAgICB7IXF1ZXN0aW9ucyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3F1ZXN0aW9uc1xuICAgICAgICA/LnNvcnQoaGFuZGxlU29ydGluZygpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgICh7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHZvdGVzLFxuICAgICAgICAgICAgYW5zd2VycyxcbiAgICAgICAgICAgIHZpZXdzLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGFncyxcbiAgICAgICAgICAgIGF1dGhvcixcbiAgICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICA8UXVlc3Rpb25XcmFwcGVyIGtleT17aWR9PlxuICAgICAgICAgICAgICA8UXVlc3Rpb25TdGF0c1xuICAgICAgICAgICAgICAgIHZvdGVDb3VudD17dm90ZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgIGFuc3dlckNvdW50PXthbnN3ZXJzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICB2aWV3PXt2aWV3c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFF1ZXN0aW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgdGFncz17dGFnc31cbiAgICAgICAgICAgICAgICBhdXRob3I9e2F1dGhvcn1cbiAgICAgICAgICAgICAgICBjcmVhdGVkVGltZT17Y3JlYXRlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L1F1ZXN0aW9uU3VtbWFyeT5cbiAgICAgICAgICAgIDwvUXVlc3Rpb25XcmFwcGVyPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IEF1dGhDb250ZXh0XG5cbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IHVzZVN0YXRlKHt9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIGNvbnN0IHVzZXJJbmZvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJylcbiAgICBjb25zdCBleHBpcmVzQXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc0F0JylcblxuICAgIHNldEF1dGhTdGF0ZSh7XG4gICAgICB0b2tlbixcbiAgICAgIGV4cGlyZXNBdCxcbiAgICAgIHVzZXJJbmZvOiB1c2VySW5mbyA/IEpTT04ucGFyc2UodXNlckluZm8pIDoge31cbiAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBzZXRBdXRoSW5mbyA9ICh7IHRva2VuLCB1c2VySW5mbywgZXhwaXJlc0F0IH0pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4cGlyZXNBdCcsIGV4cGlyZXNBdClcblxuICAgIHNldEF1dGhTdGF0ZSh7XG4gICAgICB0b2tlbixcbiAgICAgIHVzZXJJbmZvLFxuICAgICAgZXhwaXJlc0F0XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZXNBdCcpXG4gICAgc2V0QXV0aFN0YXRlKHt9KVxuICB9XG5cbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuICAgIGlmICghYXV0aFN0YXRlLnRva2VuIHx8ICFhdXRoU3RhdGUuZXhwaXJlc0F0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA8IGF1dGhTdGF0ZS5leHBpcmVzQXRcbiAgfVxuXG4gIGNvbnN0IGlzQWRtaW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF1dGhTdGF0ZS51c2VySW5mbz8ucm9sZSA9PT0gJ2FkbWluJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGF1dGhTdGF0ZSxcbiAgICAgICAgc2V0QXV0aFN0YXRlOiAoYXV0aEluZm8pID0+IHNldEF1dGhJbmZvKGF1dGhJbmZvKSxcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIGlzQWRtaW5cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciB9XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuL2F1dGgnXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBGZXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IEZldGNoQ29udGV4dFxuXG5jb25zdCBGZXRjaFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuICBjb25zdCBhdXRoQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkxcbiAgfSlcblxuICBhdXRoQXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgIChjb25maWcpID0+IHtcbiAgICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YXV0aFN0YXRlLnRva2VufWBcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuICAgIChlcnJvcikgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgIH1cbiAgKVxuXG4gIGF1dGhBeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGNvZGUgPSBlcnJvciAmJiBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA6IDBcbiAgICAgIGlmIChjb2RlID09PSA0MDEgfHwgY29kZSA9PT0gNDAzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjb2RlJywgY29kZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXV0aEF4aW9zXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCB7IEZldGNoQ29udGV4dCwgRmV0Y2hQcm92aWRlciB9XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNvbnRleHRcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vdXRpbC9mZXRjaGVyJ1xuXG5jb25zdCBUYWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBUYWdDb250ZXh0XG5cbmNvbnN0IFRhZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGFnU3RhdGUsIHNldFRhZ1N0YXRlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFBvcHVsYXJUYWdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy90YWdzL3BvcHVsZXJ0YWdzJylcbiAgICAgIHNldFRhZ1N0YXRlKGRhdGEpXG4gICAgfVxuXG4gICAgZmV0Y2hQb3B1bGFyVGFncygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiA8UHJvdmlkZXIgdmFsdWU9e3sgdGFnU3RhdGUgfX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+XG59XG5cbmV4cG9ydCB7IFRhZ0NvbnRleHQsIFRhZ1Byb3ZpZGVyIH1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgYmFzZVVSTCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG4gICAgPyAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaSdcbiAgICA6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuU0lURV9OQU1FfS9hcGlgXG5cbmNvbnN0IHB1YmxpY0ZldGNoID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTFxufSlcblxuZXhwb3J0IHsgcHVibGljRmV0Y2gsIGJhc2VVUkwgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzbHVnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==