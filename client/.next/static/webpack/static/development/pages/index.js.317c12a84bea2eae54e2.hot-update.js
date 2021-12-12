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
    pri: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZVRpdGxlIiwidGl0bGUiLCJidXR0b24iLCJib3JkZXJCb3R0b20iLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImNuIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFzRDtBQUFBOztBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsTUFBNEMsUUFBNUNBLE1BQTRDO0FBQUEsK0JBQXBDQyxZQUFvQztBQUFBLE1BQXBDQSxZQUFvQyxrQ0FBckIsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQzFDQyx3REFBVSxDQUFDQyx1REFBRCxDQURnQztBQUFBLE1BQzlEQyxlQUQ4RCxlQUM5REEsZUFEOEQ7O0FBR3RFLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFFLENBQUNDLDZEQUFNLENBQUNDLFNBQVIsRUFBbUJQLFlBQVksSUFBSU0sNkRBQU0sQ0FBQ04sWUFBMUMsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTSw2REFBTSxDQUFDUixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxLQUFMLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBRVEsNkRBQU0sQ0FBQ0UsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxNQUFNLElBQ0wsTUFBQywrQ0FBRDtBQUNFLFFBQUksRUFBRUssZUFBZSxLQUFLLGdCQUFMLEdBQXdCLE9BRC9DO0FBRUUsT0FBRyxNQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosQ0FGRixDQURGLEVBY0dILFFBQVEsSUFBSTtBQUFHLGFBQVMsRUFBRUssNkRBQU0sQ0FBQ0csT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQlIsUUFBL0IsQ0FkZixDQURGO0FBbUJELENBdEJEOztHQUFNSixTOztLQUFBQSxTO0FBd0JTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzE3YzEyYTg0YmVhMmVhZTU0ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UtdGl0bGUubW9kdWxlLmNzcydcblxuY29uc3QgUGFnZVRpdGxlID0gKHsgdGl0bGUsIGJ1dHRvbiwgYm9yZGVyQm90dG9tID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY29udGFpbmVyLCBib3JkZXJCb3R0b20gJiYgc3R5bGVzLmJvcmRlckJvdHRvbSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIHtidXR0b24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBocmVmPXtpc0F1dGhlbnRpY2F0ZWQoKSA/ICcvcXVlc3Rpb25zL2FzaycgOiAnL2F1dGgnfVxuICAgICAgICAgICAgICBwcmlcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXNrIFF1ZXN0aW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVuICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PntjaGlsZHJlbn08L3A+fVxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlXG4iXSwic291cmNlUm9vdCI6IiJ9