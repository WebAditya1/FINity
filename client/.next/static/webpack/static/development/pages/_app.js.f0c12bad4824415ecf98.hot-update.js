webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var _Home_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Home/home */ "./components/Home/home.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pages */ "./pages/index.js");



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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      Choice = _useState2[0],
      setChoice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      Home = _useState3[0],
      setHome = _useState3[1];

  var _useComponentVisible = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"])(false),
      ref = _useComponentVisible.ref,
      toggleRef = _useComponentVisible.toggleRef,
      isComponentVisible = _useComponentVisible.isComponentVisible,
      setIsComponentVisible = _useComponentVisible.setIsComponentVisible;

  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();
  {
    Home ? __jsx(_Home_home__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }) : __jsx(_pages__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 23
      }
    });
  }
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
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.logo,
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_12__["Logo"], {
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: (function () {
      return setChoice(true);
    }, setHome(true)),
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.homeff : _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.not,
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("span", {
    onClick: (function () {
      return setChoice(false);
    }, setHome(false)),
    className: Choice ? _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.not : _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.homeff,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 182
    }
  }, "FORUM"))), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.userInfo,
    style: {
      display: "flex",
      marginTop: "6px",
      marginRight: "4%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(authState.userInfo.username),
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Log out"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.logs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
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
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Sign up")))), __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 45
    }
  })));
};

_s(Header, "bHDTrltbTq5c0hVPv+QxiOGfByc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwiaGFuZGxlQ29tcG9uZW50VmlzaWJsZSIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwibG9nb3V0IiwidXNlU3RhdGUiLCJMb2dvdXQiLCJzZXRMb2dvdXQiLCJDaG9pY2UiLCJzZXRDaG9pY2UiLCJIb21lIiwic2V0SG9tZSIsInVzZUNvbXBvbmVudFZpc2libGUiLCJyZWYiLCJ0b2dnbGVSZWYiLCJpc0NvbXBvbmVudFZpc2libGUiLCJzZXRJc0NvbXBvbmVudFZpc2libGUiLCJzaXplIiwidXNlV2luZG93U2l6ZSIsInVzZUVmZmVjdCIsIndpZHRoIiwiQ09OU1QiLCJNT0JJTEVfU0laRSIsImNuIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibG9nbyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJwYWRkaW5nUmlnaHQiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImhvbWVmZiIsIm5vdCIsInVzZXJJbmZvIiwibWFyZ2luVG9wIiwidXNlcm5hbWUiLCJwcm9maWxlUGhvdG8iLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJoaWRlIiwic2hvdyIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJsb2dzIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1B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XFxfYXBwLmpzLmYwYzEyYmFkNDgyNDQxNWVjZjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi1kcm9wZG93bidcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWlucCBmcm9tIFwiLi4vLi4vSG9tZS9ob21lXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vLi4vLi4vcGFnZXMnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBoYW5kbGVDb21wb25lbnRWaXNpYmxlIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dClcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGF1dGhTdGF0ZSwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICBjb25zdCBbTG9nb3V0LHNldExvZ291dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW0Nob2ljZSxzZXRDaG9pY2VdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtIb21lLHNldEhvbWVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHtcbiAgICByZWYsXG4gICAgdG9nZ2xlUmVmLFxuICAgIGlzQ29tcG9uZW50VmlzaWJsZSxcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGVcbiAgfSA9IHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcblxuICB7SG9tZSA/IDxNYWlucCAvPiA6IDxIb21lUGFnZSAvPn1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUpIHtcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcbiAgICB9XG4gIH0sIFtzaXplXSlcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbihzdHlsZXMuaGVhZGVyLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICB7LyogPGRpdiByZWY9e3RvZ2dsZVJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubWVudUNvbnRhaW5lcn0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29tcG9uZW50VmlzaWJsZSgoaXNPcGVuKSA9PiAhaXNPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNDb21wb25lbnRWaXNpYmxlID8gPENsb3NlIC8+IDogPE1lbnUgLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBocmVmPVwiL1wiPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluaG9tZScgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLHRleHRBbGlnbjpcImNlbnRlclwiLG1hcmdpblJpZ2h0OlwiYXV0b1wifX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5wYWdlJyBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIgLCBwYWRkaW5nUmlnaHQgOiBcIjhweFwiLGZvbnRGYW1pbHk6ICdNb250c2VycmF0Jyxmb250U3R5bGU6IFwibm9ybWFsXCIsZm9udFdlaWdodDogXCI4MDBcIixmb250U2l6ZTogXCIxOHB4XCIsbGluZUhlaWdodDogXCIyMnB4XCJ9fT48c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRDaG9pY2UodHJ1ZSkgLCBzZXRIb21lKHRydWUpfSBjbGFzc05hbWU9e0Nob2ljZSA/IHN0eWxlcy5ob21lZmYgOiBzdHlsZXMubm90fT5IT01FPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3J1bScgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiICwgcGFkZGluZ1JpZ2h0IDogXCIxMHB4XCIsZm9udEZhbWlseTogJ01vbnRzZXJyYXQnLGZvbnRTdHlsZTogXCJub3JtYWxcIixmb250V2VpZ2h0OiBcIjgwMFwiLGZvbnRTaXplOiBcIjE4cHhcIixsaW5lSGVpZ2h0OiBcIjIycHhcIn19PjxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENob2ljZShmYWxzZSksIHNldEhvbWUoZmFsc2UpfSBjbGFzc05hbWU9e0Nob2ljZSA/IHN0eWxlcy5ub3QgOiBzdHlsZXMuaG9tZWZmfT5GT1JVTTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixtYXJnaW5Ub3A6XCI2cHhcIixtYXJnaW5SaWdodDogXCI0JVwifX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgey8qIFdlbGNvbWV7JyAnfSAqL31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL3VzZXJzL1t1c2VyXVwiXG4gICAgICAgICAgICAgICAgYXM9e2AvdXNlcnMvJHthdXRoU3RhdGUudXNlckluZm8udXNlcm5hbWV9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7Zm9udEZhbWlseTonUGxheWZhaXIgRGlzcGxheScsY29sb3I6XCJ3aGl0ZVwiLHBhZGRpbmdSaWdodDpcIjE1cHhcIixmb250V2VpZ2h0OlwiOTAwXCIsZm9udFN0eWxlOlwibm9ybWFsXCIsZm9udFNpemU6XCIxNHB4XCIsbGluZUhlaWdodDpcIjE5cHhcIn19PnthdXRoU3RhdGUudXNlckluZm8udXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldy1kaXYnIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCJ9fT5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDxpbWcgaWQ9XCJhdmF0YXJcIiBzcmM9e2F1dGhTdGF0ZS51c2VySW5mby5wcm9maWxlUGhvdG99IG9uQ2xpY2s9eygpID0+IHNldExvZ291dCghTG9nb3V0KX0gc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI1MCVcIix3aWR0aDogXCIyNHB4XCIsaGVpZ2h0OiBcIjI0cHhcIn19PjwvaW1nPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtMb2dvdXQgPyBzdHlsZXMuaGlkZSA6IHN0eWxlcy5zaG93fSBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0gc3R5bGU9e3twb3NpdGlvbjpcImZpeGVkXCIscmlnaHQ6XCI0NXB4XCIsdG9wOlwiNzBweFwiLGZvbnRGYW1pbHk6J1BsYXlmYWlyIERpc3BsYXknLGZvbnRXZWlnaHQ6XCI5MDBcIixmb250U3R5bGU6XCJub3JtYWxcIixmb250U2l6ZTpcIjE0cHhcIn19PkxvZyBvdXQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ3N9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxuICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnbG9naW4nKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aH1cbiAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdzaWdudXAnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXtyZWZ9Pntpc0NvbXBvbmVudFZpc2libGUgJiYgPE5hdmlnYXRpb25Ecm9wZG93biAvPn08L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9