"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");


var _jsxFileName = "/mnt/c/Users/user/Documents/Projects/ReviewApp/Local-Reviews/frontend/components/Layout.js";



const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 6
    }, undefined), children]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthenticationContext */ "./context/AuthenticationContext.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/mnt/c/Users/user/Documents/Projects/ReviewApp/Local-Reviews/frontend/components/Nav.js";







const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    maginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    minWidth: 200
  }
}));

const Nav = props => {
  const classes = useStyles();
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    user,
    logout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_6__.default);

  const toggleDrawer = value => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggle(value);
  };

  const handleLogout = async e => {
    e.preventDefault();
    await logout();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
      postion: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          edge: "start",
          className: classes.menuButton,
          color: "inherit",
          "aria-label": "menu",
          onClick: toggleDrawer(true),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 8
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
          anchor: 'left',
          open: toggle,
          onClose: toggleDrawer(!toggle),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.list,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.List, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                button: true,
                onClick: () => router.push('/'),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 26
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 12
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                  primary: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 12
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 11
              }, undefined), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                button: true,
                onClick: handleLogout,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 13
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                  primary: "Sign Out"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 10
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                  button: true,
                  onClick: () => router.push('/account/login'),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 28
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                    primary: "Sign In"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 13
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
                  button: true,
                  onClick: () => router.push('/account/register'),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 28
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 14
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
                    primary: "Register"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 13
                }, undefined)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 10
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h6",
          className: classes.title,
          children: "Local Reviews"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 8
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./context/AuthenticationContext.js":
/*!******************************************!*\
  !*** ./context/AuthenticationContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/mnt/c/Users/user/Documents/Projects/ReviewApp/Local-Reviews/frontend/pages/index.js";




const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  root: {
    margin: '75px auto',
    maxWidth: '95vw'
  },
  categoryCard: {
    cursor: 'pointer'
  }
}));
function Home({
  categories
}) {
  const classes = useStyles();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      container: true,
      className: classes.root,
      spacing: 3,
      children: categories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        md: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, {
          onClick: () => router.push(`/categories/${category.slug}`),
          className: classes.categoryCard,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {
            avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
              "aria-label": "category",
              children: "C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, this),
            title: `${category.name}`,
            subheader: `See all ${category.name} business`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
async function getServerSideProps() {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:8000/categories');
  return {
    props: {
      categories: data.results
    }
  };
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pDLFFBQU07QUFBRTNCLElBQUFBO0FBQUYsTUFBVyxNQUFNZCxnREFBQSxDQUFVLGtDQUFWLENBQXZCO0FBRUEsU0FBTztBQUNMbEIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xzRCxNQUFBQSxVQUFVLEVBQUV0QixJQUFJLENBQUM2QjtBQURaO0FBREYsR0FBUDtBQUtEOzs7Ozs7Ozs7O0FDbEREOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb250ZXh0L0F1dGhlbnRpY2F0aW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcdDxOYXYgLz5cbiAgICBcdHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwQmFyLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcywgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWUnXG5pbXBvcnQgQXV0aGVudGljYXRpb25Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvQXV0aGVudGljYXRpb25Db250ZXh0J1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG5cdHJvb3Q6IHtcblx0XHRmbGV4R3JvdzogMSxcblx0fSxcblx0bWVudUJ1dHRvbjoge1xuXHRcdG1hZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG5cdH0sXG5cdHRpdGxlOiB7XG5cdFx0ZmxleEdyb3c6IDEsXG5cdH0sXG5cdGxpc3Q6IHtcblx0XHRtaW5XaWR0aDogMjAwXG5cdH1cbn0pKVxuXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7dXNlciwgbG9nb3V0fSA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KVxuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICh2YWx1ZSkgPT4gKGV2ZW50KSA9PiB7XG4gIFx0aWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gIFx0XHRyZXR1cm5cbiAgXHR9XG5cbiAgXHRzZXRUb2dnbGUodmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyBlID0+IHtcbiAgXHRlLnByZXZlbnREZWZhdWx0KClcbiAgXHRhd2FpdCBsb2dvdXQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIFx0PEFwcEJhciBwb3N0aW9uPSdzdGF0aWMnPlxuICAgIFx0XHQ8VG9vbGJhcj5cbiAgICBcdFx0XHQ8SWNvbkJ1dHRvbiBlZGdlPSdzdGFydCcgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPSdpbmhlcml0JyBhcmlhLWxhYmVsPSdtZW51JyBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIodHJ1ZSl9PlxuICAgIFx0XHRcdFx0PE1lbnVJY29uIC8+XG4gICAgXHRcdFx0PC9JY29uQnV0dG9uPlxuICAgIFx0XHRcdFx0PERyYXdlclxuICAgIFx0XHRcdFx0XHRhbmNob3I9eydsZWZ0J31cbiAgICBcdFx0XHRcdFx0b3Blbj17dG9nZ2xlfVxuICAgIFx0XHRcdFx0XHRvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoIXRvZ2dsZSl9XG4gICAgXHRcdFx0XHQ+XG5cbiAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgIFx0XHRcdFx0XHQ8TGlzdD5cbiAgICBcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PlxuICAgIFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtSWNvbj48SG9tZUljb24gLz48L0xpc3RJdGVtSWNvbj5cbiAgICBcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nSG9tZScgLz5cbiAgICBcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXG4gICAgXHRcdFx0XHRcdFx0e3VzZXIgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG5cdCAgICBcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbUljb24+PEFjY291bnRDaXJjbGVJY29uIC8+PC9MaXN0SXRlbUljb24+XG5cdCAgICBcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nU2lnbiBPdXQnIC8+XG5cdCAgICBcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuICAgIFx0XHRcdFx0XHRcdCkgOiAoXG4gICAgXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdCAgICBcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWNjb3VudC9sb2dpbicpfT5cblx0XHQgICAgXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1JY29uPjxBY2NvdW50Q2lyY2xlSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxuXHRcdCAgICBcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nU2lnbiBJbicgLz5cblx0XHQgICAgXHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblxuXHRcdCAgICBcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYWNjb3VudC9yZWdpc3RlcicpfT5cblx0XHQgICAgXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1JY29uPjxBY2NvdW50Q2lyY2xlSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxuXHRcdCAgICBcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nUmVnaXN0ZXInIC8+XG5cdFx0ICAgIFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdCAgICBcdFx0XHRcdFx0XHQ8Lz5cbiAgICBcdFx0XHRcdFx0XHQpfVxuICAgIFx0XHRcdFx0XHQ8L0xpc3Q+XG4gICAgXHRcdFx0XHQ8L2Rpdj5cbiAgICBcdFx0XHRcdDwvRHJhd2VyPlxuICAgIFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgIFx0XHRcdFx0TG9jYWwgUmV2aWV3c1xuICAgIFx0XHRcdDwvVHlwb2dyYXBoeT5cbiAgICBcdFx0PC9Ub29sYmFyPlxuICAgIFx0PC9BcHBCYXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBdXRoZW50aWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0dXNlRWZmZWN0KCgpID0+IGNoZWNrSWZVc2VyTG9nZ2VkSW4oKSwgW10pXG5cblx0Ly8gTG9naW4gVXNlclxuXHRjb25zdCBsb2dpbiA9IGFzeW5jKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYm9keSA9IHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyBkYXRhOmFjY2Vzc1Jlc3BvbnNlIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJywgYm9keSwgY29uZmlnKVxuXHRcdFx0XG5cdFx0XHRpZiAoYWNjZXNzUmVzcG9uc2UgJiYgYWNjZXNzUmVzcG9uc2UudXNlcikge1xuXHRcdFx0XHRzZXRVc2VyKGFjY2Vzc1Jlc3BvbnNlLnVzZXIpXG5cdFx0XHR9XG5cblx0XHRcdGlmIChhY2Nlc3NSZXNwb25zZSAmJiBhY2Nlc3NSZXNwb25zZS5hY2Nlc3MpIHtcblx0XHRcdFx0c2V0QWNjZXNzVG9rZW4oYWNjZXNzUmVzcG9uc2UuYWNjZXNzKVxuXHRcdFx0fVxuXG5cdFx0XHRyb3V0ZXIucHVzaCgnLycpXG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdCAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcblx0XHQgIFx0c2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuXHRcdCAgXHRyZXR1cm4gICAgICBcblx0ICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG5cdFx0ICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0ICAgIHJldHVybiAgXG5cdCAgICAgIH0gZWxzZSB7XG5cdFx0XHRzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHRyZXR1cm5cblx0ICAgICAgfVxuXHQgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuXHQgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHQgICAgICBjb25zb2xlLmxvZyhlcnJvcilcblx0ICAgICAgcmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIgfSkgPT4ge1xuXHRcdGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmQyKSB7XG5cdFx0XHRzZXRFcnJvcignUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBib2R5ID0ge1xuXHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRlbWFpbCxcblx0XHRcdHBhc3N3b3JkXG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGNhbGwgbmV4dGpzIGFwaSBmdW5jdGlvbiB0byBjcmVhdGUgYSB1c2VyXG5cdFx0XHRhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3JlZ2lzdGVyJywgYm9keSwgY29uZmlnKVxuXHRcdFx0bG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG5cdFx0ICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuXHRcdCAgXHRzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG5cdFx0ICBcdHJldHVybiAgICAgIFxuXHQgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcblx0XHQgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHQgICAgcmV0dXJuICBcblx0ICAgICAgfSBlbHNlIHtcblx0XHRcdHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRyZXR1cm5cblx0ICAgICAgfVxuXHQgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuXHQgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHQgICAgICByZXR1cm5cblx0XHR9XG5cdH1cblxuXHRjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIHJlbW92ZSB0aGUgaHR0cCBvbmx5IGNvb2tpZVxuXHRcdFx0YXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dvdXQnKVxuXG5cdFx0XHQvLyByZW1vdmUgdGhlIGFjY2VzcyB0b2tlbiBhbmQgdGhlIHVzZXIgZnJvbSB0aGUgc3RhdGVcblx0XHRcdHNldFVzZXIobnVsbClcblx0XHRcdHNldEFjY2Vzc1Rva2VuKG51bGwpXG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdCAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcblx0XHQgIFx0c2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuXHRcdCAgXHRyZXR1cm4gICAgICBcblx0ICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG5cdFx0ICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0ICAgIHJldHVybiAgXG5cdCAgICAgIH0gZWxzZSB7XG5cdFx0XHRzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdFx0cmV0dXJuXG5cdCAgICAgIH1cblx0ICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcblx0ICAgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0ICAgICAgcmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgY2hlY2tJZlVzZXJMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gYXBpIHJlcXVlc3QgdG8gYXBpL3VzZXIgaW4gbmV4dGpzXG5cdFx0XHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcicpXG5cblx0XHRcdC8vIHNldCB1c2VyIGFuZCBhY2Nlc3MgdG9rZW4gaW4gc3RhdGVcblx0XHRcdHNldFVzZXIoZGF0YS51c2VyKVxuXHRcdFx0c2V0QWNjZXNzVG9rZW4oZGF0YS5hY2Nlc3MpXG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0aWYgKGVycm9yLnJlc3BvbnNlICYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuXHRcdCAgXHRcdC8vIHNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcblx0XHQgIFx0XHRyZXR1cm4gICAgICBcblx0XHQgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG5cdFx0XHQgICAgLy8gc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHRcdCAgICByZXR1cm4gIFxuXHRcdCAgICB9IGVsc2Uge1xuXHRcdFx0XHQvLyBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdFx0XHRyZXR1cm5cblx0XHQgICAgfVxuXHRcdCAgICAvLyBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuXHRcdCAgICAvLyBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdCAgICByZXR1cm5cblx0XHR9XG5cdH1cblxuXHRjb25zdCBjbGVhckVycm9yID0gKCkgPT4ge1xuXHRcdHNldEVycm9yKG51bGwpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxBdXRoZW50aWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgYWNjZXNzVG9rZW4sIGVycm9yLCBsb2dpbiwgcmVnaXN0ZXIsIGxvZ291dCwgY2xlYXJFcnJvciB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0F1dGhlbnRpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJpbXBvcnQgeyBHcmlkLCBDYXJkLCBDYXJkSGVhZGVyLCBBdmF0YXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAnNzVweCBhdXRvJyxcbiAgICBtYXhXaWR0aDogJzk1dncnXG4gIH0sXG4gIGNhdGVnb3J5Q2FyZDoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2F0ZWdvcmllcyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3BhY2luZz17M30+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgIDxDYXJkIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5LnNsdWd9YCl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeUNhcmR9PlxuICAgICAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9J2NhdGVnb3J5Jz5cbiAgICAgICAgICAgICAgICAgIENcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aXRsZT17YCR7Y2F0ZWdvcnkubmFtZX1gfVxuICAgICAgICAgICAgICBzdWJoZWFkZXI9e2BTZWUgYWxsICR7Y2F0ZWdvcnkubmFtZX0gYnVzaW5lc3NgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvY2F0ZWdvcmllcycpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2F0ZWdvcmllczogZGF0YS5yZXN1bHRzXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBcHBCYXIiLCJEcmF3ZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJY29uQnV0dG9uIiwibWFrZVN0eWxlcyIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiTWVudUljb24iLCJ1c2VSb3V0ZXIiLCJIb21lSWNvbiIsIkF1dGhlbnRpY2F0aW9uQ29udGV4dCIsIkFjY291bnRDaXJjbGVJY29uIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImxpc3QiLCJtaW5XaWR0aCIsInByb3BzIiwiY2xhc3NlcyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJvdXRlciIsInVzZXIiLCJsb2dvdXQiLCJ0b2dnbGVEcmF3ZXIiLCJ2YWx1ZSIsImV2ZW50IiwidHlwZSIsImtleSIsImhhbmRsZUxvZ291dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiYXhpb3MiLCJBdXRoZW50aWNhdGlvblByb3ZpZGVyIiwic2V0VXNlciIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJlcnJvciIsInNldEVycm9yIiwiY2hlY2tJZlVzZXJMb2dnZWRJbiIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNvbmZpZyIsImhlYWRlcnMiLCJib2R5IiwiZGF0YSIsImFjY2Vzc1Jlc3BvbnNlIiwicG9zdCIsImFjY2VzcyIsInJlc3BvbnNlIiwibWVzc2FnZSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkMiIsImNsZWFyRXJyb3IiLCJHcmlkIiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJBdmF0YXIiLCJtYXJnaW4iLCJtYXhXaWR0aCIsImNhdGVnb3J5Q2FyZCIsImN1cnNvciIsIkhvbWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJzbHVnIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImdldCIsInJlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9