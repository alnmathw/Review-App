"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/nick/Documents/Legion-Script/Reviews-DRF-NextJS/Tutorial/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n  return {\n    root: {\n      margin: '75px auto',\n      maxWidth: '95vw'\n    }\n  };\n});\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var categories = _ref.categories;\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n      container: true,\n      className: classes.root,\n      spacing: 3,\n      children: categories.map(function (category) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n          item: true,\n          xs: 12,\n          md: 4,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n              avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                \"aria-label\": \"category\",\n                children: \"C\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 17\n              }, _this),\n              title: \"\".concat(category.name),\n              subheader: \"See all \".concat(category.name, \" business \")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTU0sU0FBUyxHQUFHRiw2REFBVSxDQUFDLFVBQUNHLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsTUFBTSxFQUFFLFdBREo7QUFFSkMsTUFBQUEsUUFBUSxFQUFFO0FBRk47QUFEaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBT2UsU0FBU0MsSUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUMzQyxNQUFNQyxPQUFPLEdBQUdQLFNBQVMsRUFBekI7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGVBQVMsRUFBRU8sT0FBTyxDQUFDTCxJQUFuQztBQUF5QyxhQUFPLEVBQUUsQ0FBbEQ7QUFBQSxnQkFDQ0ksVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQUMsUUFBUTtBQUFBLDRCQUN0Qiw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQUEsbUNBQ0UsOERBQUMseURBQUQ7QUFDRSxvQkFBTSxlQUNKLDhEQUFDLHFEQUFEO0FBQVEsOEJBQVcsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFNRSxtQkFBSyxZQUFLQSxRQUFRLENBQUNDLElBQWQsQ0FOUDtBQU9FLHVCQUFTLG9CQUFhRCxRQUFRLENBQUNDLElBQXRCO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURzQjtBQUFBLE9BQXZCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7R0F2QnVCTDtVQUNOTDs7O0tBRE1LIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgQ2FyZCwgQ2FyZEhlYWRlciwgQXZhdGFyLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpbjogJzc1cHggYXV0bycsXG4gICAgbWF4V2lkdGg6ICc5NXZ3J1xuICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNhdGVnb3JpZXMgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzcGFjaW5nPXszfT5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD0nY2F0ZWdvcnknPlxuICAgICAgICAgICAgICAgICAgQ1xuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRpdGxlPXtgJHtjYXRlZ29yeS5uYW1lfWB9XG4gICAgICAgICAgICAgIHN1YmhlYWRlcj17YFNlZSBhbGwgJHtjYXRlZ29yeS5uYW1lfSBidXNpbmVzcyBgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvY2F0ZWdvcmllcycpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcmllczogZGF0YS5yZXN1bHRzXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiR3JpZCIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQXZhdGFyIiwibWFrZVN0eWxlcyIsIkxheW91dCIsInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpbiIsIm1heFdpZHRoIiwiSG9tZSIsImNhdGVnb3JpZXMiLCJjbGFzc2VzIiwibWFwIiwiY2F0ZWdvcnkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});