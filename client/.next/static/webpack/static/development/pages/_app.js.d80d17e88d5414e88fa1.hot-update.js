webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/tag */ "./store/tag.js");
/* harmony import */ var _components_Home_home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Home/home */ "./components/Home/home.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal */ "./components/modal/index.js");
/* harmony import */ var _components_auth_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/auth-forms */ "./components/auth-forms/index.js");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/variables.css */ "./styles/variables.css");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/nprogress.css */ "./styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-tagsinput/react-tagsinput.css */ "./node_modules/react-tagsinput/react-tagsinput.css");
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "D:\\FINity\\client\\pages\\_app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
});

function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useComponentVisible = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_4__["default"])(false),
      ref = _useComponentVisible.ref,
      isComponentVisible = _useComponentVisible.isComponentVisible,
      setIsComponentVisible = _useComponentVisible.setIsComponentVisible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      authScreen = _useState[0],
      setAuthScreen = _useState[1];

  var handleComponentVisible = function handleComponentVisible(componentVisible, authScreen) {
    setIsComponentVisible(componentVisible);
    setAuthScreen(authScreen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Home_home__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      ref: ref,
      handleComponentVisible: handleComponentVisible,
      setIsComponentVisible: setIsComponentVisible
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_store_auth__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_store_fetch__WEBPACK_IMPORTED_MODULE_7__["FetchProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_store_tag__WEBPACK_IMPORTED_MODULE_8__["TagProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), isComponentVisible && __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_components_auth_forms__WEBPACK_IMPORTED_MODULE_11__["default"], {
    screen: authScreen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  })))))));
}

_s(MyApp, "kDFyU1MlN2nybZhgx25PpqNNnFU=", false, function () {
  return [_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VDb21wb25lbnRWaXNpYmxlIiwicmVmIiwiaXNDb21wb25lbnRWaXNpYmxlIiwic2V0SXNDb21wb25lbnRWaXNpYmxlIiwidXNlU3RhdGUiLCJhdXRoU2NyZWVuIiwic2V0QXV0aFNjcmVlbiIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJjb21wb25lbnRWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxnREFBUyxDQUFDQyxLQUFWLEVBQU47QUFBQSxDQUFyQztBQUNBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDOztBQUVBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLDZCQUtuQ0MsMEVBQW1CLENBQUMsS0FBRCxDQUxnQjtBQUFBLE1BRXJDQyxHQUZxQyx3QkFFckNBLEdBRnFDO0FBQUEsTUFHckNDLGtCQUhxQyx3QkFHckNBLGtCQUhxQztBQUFBLE1BSXJDQyxxQkFKcUMsd0JBSXJDQSxxQkFKcUM7O0FBQUEsa0JBT0hDLHNEQUFRLENBQUMsSUFBRCxDQVBMO0FBQUEsTUFPaENDLFVBUGdDO0FBQUEsTUFPcEJDLGFBUG9COztBQVN2QyxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLGdCQUFELEVBQW1CSCxVQUFuQixFQUFrQztBQUMvREYseUJBQXFCLENBQUNLLGdCQUFELENBQXJCO0FBQ0FGLGlCQUFhLENBQUNELFVBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0EsU0FDRSxtRUFDQSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsb0RBQUQsQ0FBYyxRQUFkO0FBQ0UsU0FBSyxFQUFFO0FBQUVKLFNBQUcsRUFBSEEsR0FBRjtBQUFPTSw0QkFBc0IsRUFBdEJBLHNCQUFQO0FBQStCSiwyQkFBcUIsRUFBckJBO0FBQS9CLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCx5RkFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFR0csa0JBQWtCLElBQ2YsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFXLFVBQU0sRUFBRUcsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSE4sQ0FERixDQURGLENBSEYsQ0FGQSxDQURGO0FBcUJEOztHQW5DUVIsSztVQUtIRyxrRTs7O0tBTEdILEs7QUFxQ01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmQ4MGQxN2U4OGQ1NDE0ZTg4ZmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uL3N0b3JlL21vZGFsJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvYXV0aCdcbmltcG9ydCB7IEZldGNoUHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZS9mZXRjaCdcbmltcG9ydCB7IFRhZ1Byb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvdGFnJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL2hvbWUnXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xuaW1wb3J0IEF1dGhGb3JtcyBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgtZm9ybXMnXG5cbmltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJ1xuaW1wb3J0ICdyZWFjdC10YWdzaW5wdXQvcmVhY3QtdGFnc2lucHV0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB7XG4gICAgcmVmLFxuICAgIGlzQ29tcG9uZW50VmlzaWJsZSxcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGVcbiAgfSA9IHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXG5cbiAgY29uc3QgW2F1dGhTY3JlZW4sIHNldEF1dGhTY3JlZW5dID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBoYW5kbGVDb21wb25lbnRWaXNpYmxlID0gKGNvbXBvbmVudFZpc2libGUsIGF1dGhTY3JlZW4pID0+IHtcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoY29tcG9uZW50VmlzaWJsZSlcbiAgICBzZXRBdXRoU2NyZWVuKGF1dGhTY3JlZW4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhvbWUgLz5cbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyByZWYsIGhhbmRsZUNvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9fVxuICAgID5cbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxGZXRjaFByb3ZpZGVyPlxuICAgICAgICAgIDxUYWdQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxNb2RhbD5cbiAgICAgICAgICAgICAgICAgIDxBdXRoRm9ybXMgc2NyZWVuPXthdXRoU2NyZWVufSAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhZ1Byb3ZpZGVyPlxuICAgICAgICAgIDwvRmV0Y2hQcm92aWRlcj5cbiAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9