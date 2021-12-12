webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/page-title/index.js":
/*!****************************************!*\
  !*** ./components/page-title/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-title.module.css */ "./components/page-title/page-title.module.css");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "D:\\FINity\\client\\components\\page-title\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PageTitle = function PageTitle(_ref) {
  _s();

  var title = _ref.title,
      button = _ref.button,
      _ref$borderBottom = _ref.borderBottom,
      borderBottom = _ref$borderBottom === void 0 ? true : _ref$borderBottom,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]),
      isAuthenticated = _useContext.isAuthenticated;

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container, borderBottom && _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderBottom),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, button && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/questions/ask' : '/auth',
    style: {
      color: "#6360FF",
      fontFamily: "Playfair Display",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "14px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Ask Question"))), children && __jsx("p", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 20
    }
  }, children));
};

_s(PageTitle, "V63do9pNTv1q4M9O8C9qYlm3TOw=");

_c = PageTitle;
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

var _c;

$RefreshReg$(_c, "PageTitle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZVRpdGxlIiwidGl0bGUiLCJidXR0b24iLCJib3JkZXJCb3R0b20iLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImNuIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsTUFBNEMsUUFBNUNBLE1BQTRDO0FBQUEsK0JBQXBDQyxZQUFvQztBQUFBLE1BQXBDQSxZQUFvQyxrQ0FBckIsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQzFDQyx3REFBVSxDQUFDQyx1REFBRCxDQURnQztBQUFBLE1BQzlEQyxlQUQ4RCxlQUM5REEsZUFEOEQ7O0FBR3RFLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFFLENBQUNDLDZEQUFNLENBQUNDLFNBQVIsRUFBbUJQLFlBQVksSUFBSU0sNkRBQU0sQ0FBQ04sWUFBMUMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTSw2REFBTSxDQUFDUixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxLQUFMLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRVEsNkRBQU0sQ0FBQ0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxNQUFNLElBQ0wsTUFBQywrQ0FBRDtBQUNFLFFBQUksRUFBRUssZUFBZSxLQUFLLGdCQUFMLEdBQXdCLE9BRC9DO0FBRUUsU0FBSyxFQUFFO0FBQUNLLFdBQUssRUFBRSxTQUFSO0FBQWtCQyxnQkFBVSxFQUFFLGtCQUE5QjtBQUFpREMsZUFBUyxFQUFFLFFBQTVEO0FBQXNFQyxnQkFBVSxFQUFFLEtBQWxGO0FBQXdGQyxjQUFRLEVBQUU7QUFBbEcsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBRkYsQ0FERixFQWNHWixRQUFRLElBQUk7QUFBRyxhQUFTLEVBQUVLLDZEQUFNLENBQUNRLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JiLFFBQS9CLENBZGYsQ0FERjtBQW1CRCxDQXRCRDs7R0FBTUosUzs7S0FBQUEsUztBQXdCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVkMmIwYTg1NzY3NzJiZGRhOTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLXRpdGxlLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBhZ2VUaXRsZSA9ICh7IHRpdGxlLCBidXR0b24sIGJvcmRlckJvdHRvbSA9IHRydWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmNvbnRhaW5lciwgYm9yZGVyQm90dG9tICYmIHN0eWxlcy5ib3JkZXJCb3R0b20pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICB7YnV0dG9uICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaHJlZj17aXNBdXRoZW50aWNhdGVkKCkgPyAnL3F1ZXN0aW9ucy9hc2snIDogJy9hdXRoJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogXCIjNjM2MEZGXCIsZm9udEZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsZm9udFN0eWxlOiBcIm5vcm1hbFwiLCBmb250V2VpZ2h0OiBcIjkwMFwiLGZvbnRTaXplOiBcIjE0cHhcIn19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFzayBRdWVzdGlvblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbiAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT57Y2hpbGRyZW59PC9wPn1cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VUaXRsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==