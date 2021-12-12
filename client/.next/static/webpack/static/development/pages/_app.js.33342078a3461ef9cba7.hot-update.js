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
      setChoice = _useState2[1]; // const [Home,setHome] = useState(true);


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
    onClick: function onClick() {
      return setChoice(true);
    },
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
    onClick: function onClick() {
      return setChoice(false);
    },
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

_s(Header, "+abxEauh3aerMIr5lHcYEa60lJM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwiaGFuZGxlQ29tcG9uZW50VmlzaWJsZSIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwibG9nb3V0IiwidXNlU3RhdGUiLCJMb2dvdXQiLCJzZXRMb2dvdXQiLCJDaG9pY2UiLCJzZXRDaG9pY2UiLCJ1c2VDb21wb25lbnRWaXNpYmxlIiwicmVmIiwidG9nZ2xlUmVmIiwiaXNDb21wb25lbnRWaXNpYmxlIiwic2V0SXNDb21wb25lbnRWaXNpYmxlIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJIb21lIiwidXNlRWZmZWN0Iiwid2lkdGgiLCJDT05TVCIsIk1PQklMRV9TSVpFIiwiY24iLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJsb2dvIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsInBhZGRpbmdSaWdodCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiaG9tZWZmIiwibm90IiwidXNlckluZm8iLCJtYXJnaW5Ub3AiLCJ1c2VybmFtZSIsInByb2ZpbGVQaG90byIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImhpZGUiLCJzaG93IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImxvZ3MiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNB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ckgsS0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhELENBWEQsQ0FEYyxHQW1CZCxtRUFDQTtBQUFLLGFBQVMsRUFBRWIsMERBQU0sQ0FBQzRCLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsYUFBUyxFQUFFNUIsMERBQU0sQ0FBQzZCLElBRHBCO0FBRUUsYUFBUyxNQUZYO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTXBELHNCQUFzQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQTVCO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFRRSxNQUFDLGdEQUFEO0FBQ0UsYUFBUyxFQUFFdUIsMERBQU0sQ0FBQzZCLElBRHBCO0FBRUUsV0FBTyxNQUZUO0FBR0UsV0FBTyxFQUFFO0FBQUEsYUFBTXBELHNCQUFzQixDQUFDLElBQUQsRUFBTyxRQUFQLENBQTVCO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsQ0FEQSxDQXBDSCxDQURILEVBeURFO0FBQUssT0FBRyxFQUFFVyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0JFLGtCQUFrQixJQUFJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF0QyxDQXpERixDQURGO0FBNkRELENBbkZEOztHQUFNbEIsTTtVQVdBZSxrRSxFQUNTTSw0RDs7O0tBWlRyQixNO0FBcUZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4zMzM0MjA3OGEzNDYxZWY5Y2JhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgdXNlQ29tcG9uZW50VmlzaWJsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDb21wb25lbnRWaXNpYmxlJ1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uLy4uL3N0b3JlL21vZGFsJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXG5pbXBvcnQgTmF2aWdhdGlvbkRyb3Bkb3duIGZyb20gJy4uLy4uL25hdmlnYXRpb24tZHJvcGRvd24nXG5pbXBvcnQgeyBNZW51LCBDbG9zZSwgTG9nbyB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFpbnAgZnJvbSBcIi4uLy4uL0hvbWUvaG9tZVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uLy4uLy4uL3BhZ2VzJztcblxuY29uc3QgSGVhZGVyID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgW0xvZ291dCxzZXRMb2dvdXRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtDaG9pY2Usc2V0Q2hvaWNlXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBjb25zdCBbSG9tZSxzZXRIb21lXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7XG4gICAgcmVmLFxuICAgIHRvZ2dsZVJlZixcbiAgICBpc0NvbXBvbmVudFZpc2libGUsXG4gICAgc2V0SXNDb21wb25lbnRWaXNpYmxlXG4gIH0gPSB1c2VDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXG5cbiAge0hvbWUgPyA8TWFpbnAgLz4gOiA8SG9tZVBhZ2UgLz59XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2l6ZS53aWR0aCA+IENPTlNULk1PQklMRV9TSVpFKSB7XG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXG4gICAgfVxuICB9LCBbc2l6ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oc3R5bGVzLmhlYWRlciwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgey8qIDxkaXYgcmVmPXt0b2dnbGVSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDb250YWluZXJ9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvbXBvbmVudFZpc2libGUoKGlzT3BlbikgPT4gIWlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzQ29tcG9uZW50VmlzaWJsZSA/IDxDbG9zZSAvPiA6IDxNZW51IC8+fVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmhvbWUnIHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixtYXJnaW5SaWdodDpcImF1dG9cIn19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWlucGFnZScgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiICwgcGFkZGluZ1JpZ2h0IDogXCI4cHhcIixmb250RmFtaWx5OiAnTW9udHNlcnJhdCcsZm9udFN0eWxlOiBcIm5vcm1hbFwiLGZvbnRXZWlnaHQ6IFwiODAwXCIsZm9udFNpemU6IFwiMThweFwiLGxpbmVIZWlnaHQ6IFwiMjJweFwifX0+PHNwYW4gb25DbGljaz17KCkgPT4gc2V0Q2hvaWNlKHRydWUpfSBjbGFzc05hbWU9e0Nob2ljZSA/IHN0eWxlcy5ob21lZmYgOiBzdHlsZXMubm90fT5IT01FPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3J1bScgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiICwgcGFkZGluZ1JpZ2h0IDogXCIxMHB4XCIsZm9udEZhbWlseTogJ01vbnRzZXJyYXQnLGZvbnRTdHlsZTogXCJub3JtYWxcIixmb250V2VpZ2h0OiBcIjgwMFwiLGZvbnRTaXplOiBcIjE4cHhcIixsaW5lSGVpZ2h0OiBcIjIycHhcIn19PjxzcGFuIG9uQ2xpY2s9eygpID0+IHNldENob2ljZShmYWxzZSl9IGNsYXNzTmFtZT17Q2hvaWNlID8gc3R5bGVzLm5vdCA6IHN0eWxlcy5ob21lZmZ9PkZPUlVNPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXNBdXRoZW50aWNhdGVkKCkgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30gc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpblRvcDpcIjZweFwiLG1hcmdpblJpZ2h0OiBcIjQlXCJ9fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7LyogV2VsY29tZXsnICd9ICovfVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCJcbiAgICAgICAgICAgICAgICBhcz17YC91c2Vycy8ke2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tmb250RmFtaWx5OidQbGF5ZmFpciBEaXNwbGF5Jyxjb2xvcjpcIndoaXRlXCIscGFkZGluZ1JpZ2h0OlwiMTVweFwiLGZvbnRXZWlnaHQ6XCI5MDBcIixmb250U3R5bGU6XCJub3JtYWxcIixmb250U2l6ZTpcIjE0cHhcIixsaW5lSGVpZ2h0OlwiMTlweFwifX0+e2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3LWRpdicgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19PlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGltZyBpZD1cImF2YXRhclwiIHNyYz17YXV0aFN0YXRlLnVzZXJJbmZvLnByb2ZpbGVQaG90b30gb25DbGljaz17KCkgPT4gc2V0TG9nb3V0KCFMb2dvdXQpfSBzdHlsZT17e2JvcmRlclJhZGl1czpcIjUwJVwiLHdpZHRoOiBcIjI0cHhcIixoZWlnaHQ6IFwiMjRweFwifX0+PC9pbWc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e0xvZ291dCA/IHN0eWxlcy5oaWRlIDogc3R5bGVzLnNob3d9IG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfSBzdHlsZT17e3Bvc2l0aW9uOlwiZml4ZWRcIixyaWdodDpcIjQ1cHhcIix0b3A6XCI3MHB4XCIsZm9udEZhbWlseTonUGxheWZhaXIgRGlzcGxheScsZm9udFdlaWdodDpcIjkwMFwiLGZvbnRTdHlsZTpcIm5vcm1hbFwiLGZvbnRTaXplOlwiMTRweFwifX0+TG9nIG91dDwvYT5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nc30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGh9XG4gICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdsb2dpbicpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdXRofVxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiByZWY9e3JlZn0+e2lzQ29tcG9uZW50VmlzaWJsZSAmJiA8TmF2aWdhdGlvbkRyb3Bkb3duIC8+fTwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=