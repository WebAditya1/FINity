webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/layout/header/index.js":
/*!*******************************************!*\
  !*** ./components/layout/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../navigation-dropdown */ "./components/navigation-dropdown/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header.module.css */ "./components/layout/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_13__);



var _this = undefined,
    _jsxFileName = "D:\\FINity\\client\\components\\layout\\header\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var Header = function Header(_ref) {
  _s();

  var className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_8__["default"]),
      handleComponentVisible = _useContext.handleComponentVisible;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]),
      isAuthenticated = _useContext2.isAuthenticated,
      authState = _useContext2.authState,
      logout = _useContext2.logout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      Logout = _useState[0],
      setLogout = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      Choice = _useState2[0],
      setChoice = _useState2[1];

  var _useComponentVisible = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"])(false),
      ref = _useComponentVisible.ref,
      toggleRef = _useComponentVisible.toggleRef,
      isComponentVisible = _useComponentVisible.isComponentVisible,
      setIsComponentVisible = _useComponentVisible.setIsComponentVisible;

  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (size.width > _constants__WEBPACK_IMPORTED_MODULE_7__["default"].MOBILE_SIZE) {
      setIsComponentVisible(false);
    }
  }, [size]);
  return __jsx("header", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.header, className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.logo,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Logo"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://festive-meninsky-e53263.netlify.app/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: function onClick() {
      return setChoice(true);
    },
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.homeff : _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.not,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 186
    }
  }, "HOME"))), __jsx("a", {
    href: "http://localhost:3000/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("div", {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: function onClick() {
      return setChoice(false);
    },
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.not : _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.homeff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 184
    }
  }, "FORUM")))), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.userInfo,
    style: {
      display: "flex",
      marginTop: "6px",
      marginRight: "4%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(authState.userInfo.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, authState.userInfo.username))), __jsx("div", {
    className: "new-div",
    style: {
      display: "block"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }
  }, __jsx("img", {
    id: "avatar",
    src: authState.userInfo.profilePhoto,
    onClick: function onClick() {
      return setLogout(!Logout);
    },
    style: {
      borderRadius: "50%",
      width: "24px",
      height: "24px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 12
    }
  }), __jsx("a", {
    className: Logout ? _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hide : _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.show,
    onClick: function onClick() {
      return logout();
    },
    style: {
      position: "fixed",
      right: "45px",
      top: "70px",
      fontFamily: 'Playfair Display',
      fontWeight: "900",
      fontStyle: "normal",
      fontSize: "14px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Log out"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.logs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.auth,
    secondary: true,
    onClick: function onClick() {
      return handleComponentVisible(true, 'login');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Log in"), __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.auth,
    primary: true,
    onClick: function onClick() {
      return handleComponentVisible(true, 'signup');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Sign up")))), __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 45
    }
  })));
};

_s(Header, "kq2cpuIBOUDW0RP+d83zH9j1Ezs=", false, function () {
  return [_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwiaGFuZGxlQ29tcG9uZW50VmlzaWJsZSIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwibG9nb3V0IiwidXNlU3RhdGUiLCJMb2dvdXQiLCJzZXRMb2dvdXQiLCJDaG9pY2UiLCJzZXRDaG9pY2UiLCJ1c2VDb21wb25lbnRWaXNpYmxlIiwicmVmIiwidG9nZ2xlUmVmIiwiaXNDb21wb25lbnRWaXNpYmxlIiwic2V0SXNDb21wb25lbnRWaXNpYmxlIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJ3aWR0aCIsIkNPTlNUIiwiTU9CSUxFX1NJWkUiLCJjbiIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsImxvZ28iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsImNvbG9yIiwicGFkZGluZ1JpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJob21lZmYiLCJub3QiLCJ1c2VySW5mbyIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwicHJvZmlsZVBob3RvIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiaGlkZSIsInNob3ciLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwibG9ncyIsImF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUE2QjtBQUFB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QTtBQUFBO0FBQUEsZUFIRCxDQVhELENBRGMsR0FtQmQsbUVBQ0E7QUFBSyxhQUFTLEVBQUViLDBEQUFNLENBQUM0QixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLGFBQVMsRUFBRTVCLDBEQUFNLENBQUM2QixJQURwQjtBQUVFLGFBQVMsTUFGWDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1uRCxzQkFBc0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUE1QjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBUUUsTUFBQyxnREFBRDtBQUNFLGFBQVMsRUFBRXNCLDBEQUFNLENBQUM2QixJQURwQjtBQUVFLFdBQU8sTUFGVDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1uRCxzQkFBc0IsQ0FBQyxJQUFELEVBQU8sUUFBUCxDQUE1QjtBQUFBLEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLENBREEsQ0F2Q0gsQ0FESCxFQTRERTtBQUFLLE9BQUcsRUFBRVcsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdCRSxrQkFBa0IsSUFBSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEMsQ0E1REYsQ0FERjtBQWdFRCxDQW5GRDs7R0FBTWxCLE07VUFVQWUsa0UsRUFDU00sNEQ7OztLQVhUckIsTTtBQXFGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM2NjUwNDMwZWE2ZTdjMzUyMjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi1kcm9wZG93bidcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgW0xvZ291dCxzZXRMb2dvdXRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtDaG9pY2Usc2V0Q2hvaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIHJlZixcbiAgICB0b2dnbGVSZWYsXG4gICAgaXNDb21wb25lbnRWaXNpYmxlLFxuICAgIHNldElzQ29tcG9uZW50VmlzaWJsZVxuICB9ID0gdXNlQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpemUud2lkdGggPiBDT05TVC5NT0JJTEVfU0laRSkge1xuICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxuICAgIH1cbiAgfSwgW3NpemVdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5oZWFkZXIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgIHsvKiA8ZGl2IHJlZj17dG9nZ2xlUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb21wb25lbnRWaXNpYmxlKChpc09wZW4pID0+ICFpc09wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgPyA8Q2xvc2UgLz4gOiA8TWVudSAvPn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5ob21lJyBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsdGV4dEFsaWduOlwiY2VudGVyXCIsbWFyZ2luUmlnaHQ6XCJhdXRvXCJ9fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mZXN0aXZlLW1lbmluc2t5LWU1MzI2My5uZXRsaWZ5LmFwcC9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWlucGFnZScgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiICwgcGFkZGluZ1JpZ2h0IDogXCI4cHhcIixmb250RmFtaWx5OiAnTW9udHNlcnJhdCcsZm9udFN0eWxlOiBcIm5vcm1hbFwiLGZvbnRXZWlnaHQ6IFwiODAwXCIsZm9udFNpemU6IFwiMThweFwiLGxpbmVIZWlnaHQ6IFwiMjJweFwifX0+PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2hvaWNlKHRydWUpfSBjbGFzc05hbWU9e0Nob2ljZSA/IHN0eWxlcy5ob21lZmYgOiBzdHlsZXMubm90fT5IT01FPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvcnVtJyBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIgLCBwYWRkaW5nUmlnaHQgOiBcIjEwcHhcIixmb250RmFtaWx5OiAnTW9udHNlcnJhdCcsZm9udFN0eWxlOiBcIm5vcm1hbFwiLGZvbnRXZWlnaHQ6IFwiODAwXCIsZm9udFNpemU6IFwiMThweFwiLGxpbmVIZWlnaHQ6IFwiMjJweFwifX0+PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2hvaWNlKGZhbHNlKX0gY2xhc3NOYW1lPXtDaG9pY2UgPyBzdHlsZXMubm90IDogc3R5bGVzLmhvbWVmZn0+Rk9SVU08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCI2cHhcIixtYXJnaW5SaWdodDpcIjQlXCJ9fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7LyogV2VsY29tZXsnICd9ICovfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCJcbiAgICAgICAgICAgICAgICBhcz17YC91c2Vycy8ke2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250RmFtaWx5OidQbGF5ZmFpciBEaXNwbGF5Jyxjb2xvcjpcIndoaXRlXCIscGFkZGluZ1JpZ2h0OlwiMTVweFwiLGZvbnRXZWlnaHQ6XCI5MDBcIixmb250U3R5bGU6XCJub3JtYWxcIixmb250U2l6ZTpcIjE0cHhcIixsaW5lSGVpZ2h0OlwiMTlweFwifX0+e2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWRpdicgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19PlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGltZyBpZD1cImF2YXRhclwiIHNyYz17YXV0aFN0YXRlLnVzZXJJbmZvLnByb2ZpbGVQaG90b30gb25DbGljaz17KCkgPT4gc2V0TG9nb3V0KCFMb2dvdXQpfSBzdHlsZT17e2JvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOiBcIjI0cHhcIixoZWlnaHQ6IFwiMjRweFwifX0+PC9pbWc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e0xvZ291dCA/IHN0eWxlcy5oaWRlIDogc3R5bGVzLnNob3d9IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e3Bvc2l0aW9uOlwiZml4ZWRcIixyaWdodDpcIjQ1cHhcIix0b3A6XCI3MHB4XCIsZm9udEZhbWlseTonUGxheWZhaXIgRGlzcGxheScsZm9udFdlaWdodDpcIjkwMFwiLGZvbnRTdHlsZTpcIm5vcm1hbFwiLGZvbnRTaXplOlwiMTRweFwifX0+TG9nIG91dDwvYT5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nc30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9XG4gICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdsb2dpbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3JlZn0+e2lzQ29tcG9uZW50VmlzaWJsZSAmJiA8TmF2aWdhdGlvbkRyb3Bkb3duIC8+fTwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=