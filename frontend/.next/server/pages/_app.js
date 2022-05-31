(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthenticationContext.js":
/*!******************************************!*\
  !*** ./context/AuthenticationContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationProvider": () => (/* binding */ AuthenticationProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/mnt/c/Users/user/Documents/Projects/ReviewApp/Local-Reviews/frontend/context/AuthenticationContext.js";



const AuthenticationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthenticationProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => checkIfUserLoggedIn(), []); // Login User

  const login = async ({
    username,
    password
  }) => {
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const body = {
      username,
      password
    };

    try {
      const {
        data: accessResponse
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/login', body, config);

      if (accessResponse && accessResponse.user) {
        setUser(accessResponse.user);
      }

      if (accessResponse && accessResponse.access) {
        setAccessToken(accessResponse.access);
      }

      router.push('/');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        return;
      } else if (error.request) {
        setError('Something went wrong');
        return;
      } else {
        setError('Something went wrong');
        console.log(error);
        return;
      }

      console.error('Error', error.message);
      setError('Something went wrong');
      console.log(error);
      return;
    }
  };

  const register = async ({
    username,
    email,
    password,
    password2
  }) => {
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const body = {
      username,
      email,
      password
    };

    try {
      // call nextjs api function to create a user
      await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/register', body, config);
      login({
        username,
        password
      });
    } catch (error) {
      console.log(error.response.data.message);

      if (error.response && error.response.data) {
        setError(error.response.data.message);
        return;
      } else if (error.request) {
        setError('Something went wrong');
        return;
      } else {
        setError('Something went wrong');
        return;
      }

      console.error('Error', error.message);
      setError('Something went wrong');
      return;
    }
  };

  const logout = async () => {
    try {
      // remove the http only cookie
      await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/logout'); // remove the access token and the user from the state

      setUser(null);
      setAccessToken(null);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        return;
      } else if (error.request) {
        setError('Something went wrong');
        return;
      } else {
        setError('Something went wrong');
        return;
      }

      console.error('Error', error.message);
      setError('Something went wrong');
      return;
    }
  };

  const checkIfUserLoggedIn = async () => {
    try {
      // api request to api/user in nextjs
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/user'); // set user and access token in state

      setUser(data.user);
      setAccessToken(data.access);
    } catch (error) {
      if (error.response & error.response.data) {
        // setError(error.response.data.message)
        return;
      } else if (error.request) {
        // setError('Something went wrong')
        return;
      } else {
        // setError('Something went wrong')
        return;
      } // console.error('Error', error.message);
      // setError('Something went wrong')


      return;
    }
  };

  const clearError = () => {
    setError(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticationContext.Provider, {
    value: {
      user,
      accessToken,
      error,
      login,
      register,
      logout,
      clearError
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 3
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthenticationContext */ "./context/AuthenticationContext.js");

var _jsxFileName = "/mnt/c/Users/user/Documents/Projects/ReviewApp/Local-Reviews/frontend/pages/_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__.AuthenticationProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW5kLy4vY29udGV4dC9BdXRoZW50aWNhdGlvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEF1dGhlbnRpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuXHR1c2VFZmZlY3QoKCkgPT4gY2hlY2tJZlVzZXJMb2dnZWRJbigpLCBbXSlcblxuXHQvLyBMb2dpbiBVc2VyXG5cdGNvbnN0IGxvZ2luID0gYXN5bmMoe3VzZXJuYW1lLCBwYXNzd29yZH0pID0+IHtcblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBib2R5ID0ge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRwYXNzd29yZFxuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IGRhdGE6YWNjZXNzUmVzcG9uc2UgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLCBib2R5LCBjb25maWcpXG5cdFx0XHRcblx0XHRcdGlmIChhY2Nlc3NSZXNwb25zZSAmJiBhY2Nlc3NSZXNwb25zZS51c2VyKSB7XG5cdFx0XHRcdHNldFVzZXIoYWNjZXNzUmVzcG9uc2UudXNlcilcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFjY2Vzc1Jlc3BvbnNlICYmIGFjY2Vzc1Jlc3BvbnNlLmFjY2Vzcykge1xuXHRcdFx0XHRzZXRBY2Nlc3NUb2tlbihhY2Nlc3NSZXNwb25zZS5hY2Nlc3MpXG5cdFx0XHR9XG5cblx0XHRcdHJvdXRlci5wdXNoKCcvJylcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0ICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuXHRcdCAgXHRzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG5cdFx0ICBcdHJldHVybiAgICAgIFxuXHQgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcblx0XHQgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHQgICAgcmV0dXJuICBcblx0ICAgICAgfSBlbHNlIHtcblx0XHRcdHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdHJldHVyblxuXHQgICAgICB9XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XG5cdCAgICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdCAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXHQgICAgICByZXR1cm5cblx0XHR9XG5cdH1cblxuXHRjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkMiB9KSA9PiB7XG5cdFx0aWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZDIpIHtcblx0XHRcdHNldEVycm9yKCdQYXNzd29yZHMgZG8gbm90IG1hdGNoJylcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdGVtYWlsLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gY2FsbCBuZXh0anMgYXBpIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHVzZXJcblx0XHRcdGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVnaXN0ZXInLCBib2R5LCBjb25maWcpXG5cdFx0XHRsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuXHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcblx0XHQgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG5cdFx0ICBcdHNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcblx0XHQgIFx0cmV0dXJuICAgICAgXG5cdCAgICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuXHRcdCAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdCAgICByZXR1cm4gIFxuXHQgICAgICB9IGVsc2Uge1xuXHRcdFx0c2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHRcdHJldHVyblxuXHQgICAgICB9XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XG5cdCAgICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdCAgICAgIHJldHVyblxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gcmVtb3ZlIHRoZSBodHRwIG9ubHkgY29va2llXG5cdFx0XHRhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ291dCcpXG5cblx0XHRcdC8vIHJlbW92ZSB0aGUgYWNjZXNzIHRva2VuIGFuZCB0aGUgdXNlciBmcm9tIHRoZSBzdGF0ZVxuXHRcdFx0c2V0VXNlcihudWxsKVxuXHRcdFx0c2V0QWNjZXNzVG9rZW4obnVsbClcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0ICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuXHRcdCAgXHRzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG5cdFx0ICBcdHJldHVybiAgICAgIFxuXHQgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcblx0XHQgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHQgICAgcmV0dXJuICBcblx0ICAgICAgfSBlbHNlIHtcblx0XHRcdHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRyZXR1cm5cblx0ICAgICAgfVxuXHQgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuXHQgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHQgICAgICByZXR1cm5cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjaGVja0lmVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBhcGkgcmVxdWVzdCB0byBhcGkvdXNlciBpbiBuZXh0anNcblx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyJylcblxuXHRcdFx0Ly8gc2V0IHVzZXIgYW5kIGFjY2VzcyB0b2tlbiBpbiBzdGF0ZVxuXHRcdFx0c2V0VXNlcihkYXRhLnVzZXIpXG5cdFx0XHRzZXRBY2Nlc3NUb2tlbihkYXRhLmFjY2Vzcylcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHRpZiAoZXJyb3IucmVzcG9uc2UgJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG5cdFx0ICBcdFx0Ly8gc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuXHRcdCAgXHRcdHJldHVybiAgICAgIFxuXHRcdCAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcblx0XHRcdCAgICAvLyBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdFx0ICAgIHJldHVybiAgXG5cdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHRcdC8vIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRcdHJldHVyblxuXHRcdCAgICB9XG5cdFx0ICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IubWVzc2FnZSk7XG5cdFx0ICAgIC8vIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0ICAgIHJldHVyblxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGNsZWFyRXJyb3IgPSAoKSA9PiB7XG5cdFx0c2V0RXJyb3IobnVsbClcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEF1dGhlbnRpY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBhY2Nlc3NUb2tlbiwgZXJyb3IsIGxvZ2luLCByZWdpc3RlciwgbG9nb3V0LCBjbGVhckVycm9yIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQXV0aGVudGljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uQ29udGV4dCIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoZW50aWNhdGlvbkNvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxBdXRoZW50aWNhdGlvblByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aGVudGljYXRpb25Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGhlbnRpY2F0aW9uQ29udGV4dCIsIkF1dGhlbnRpY2F0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJjaGVja0lmVXNlckxvZ2dlZEluIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uZmlnIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwiYWNjZXNzUmVzcG9uc2UiLCJwb3N0IiwiYWNjZXNzIiwicHVzaCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkMiIsImxvZ291dCIsImNsZWFyRXJyb3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=