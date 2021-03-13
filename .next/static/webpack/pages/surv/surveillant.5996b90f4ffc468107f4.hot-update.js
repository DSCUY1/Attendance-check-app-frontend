webpackHotUpdate_N_E("pages/surv/surveillant",{

/***/ "./components/customModalC.jsx":
/*!*************************************!*\
  !*** ./components/customModalC.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\nvar _jsxFileName = \"/home/roosvelt/front-end-attendance-check-app/Attendance-check-app-frontend/components/customModalC.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction customModalC(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var handleClose = function handleClose() {\n    return setShow(false);\n  };\n\n  var handleShow = function handleShow() {\n    return setShow(true);\n  };\n\n  var handleDelete = function handleDelete(survid) {\n    if (props.titre == 'users') {\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"users/users/\".concat(survid)).then(function (res) {\n        if (res.data != null) react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].success(\"Controleur supprimmé\");\n      })[\"catch\"](function (err) {\n        console.log(err);\n        react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(\"Erreur lors de la suppression\");\n      });\n\n      if (props.titre = 'surveillant') {\n        axios__WEBPACK_IMPORTED_MODULE_3___default.a[\"delete\"](\"surveillance/supervisor/\".concat(survid)).then(function (res) {\n          if (res.data != null) react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].success(\"surveillant supprimmé\");\n        })[\"catch\"](function (err) {\n          console.log(err);\n          react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(\"Erreur lors de la suppression\");\n        });\n      }\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Dropdown\"].Item, {\n      onClick: handleShow,\n      children: \"Delete\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n      show: show,\n      onHide: handleClose,\n      className: \"modalSuppression\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Header, {\n        closeButton: true,\n        className: \"color-titre-ajout\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Title, {\n          className: \"colorTitre\",\n          children: \"SUPPRESSION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Body, {\n        children: \"Etes vous certains de vouloir  le supprimer ?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"].Footer, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"secondary\",\n          onClick: handleClose,\n          children: \"No/Close\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"danger\",\n          onClick: function onClick() {\n            handleDelete(props.id);\n            setShow(false);\n          },\n          children: \"YES\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(customModalC, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customModalC);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXN0b21Nb2RhbEMuanN4P2ZlMjkiXSwibmFtZXMiOlsiY3VzdG9tTW9kYWxDIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlRGVsZXRlIiwic3VydmlkIiwidGl0cmUiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDWkMsT0FEWTs7QUFFekIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNRCxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNRixPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUEsR0FBbkI7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQzdCLFFBQUlQLEtBQUssQ0FBQ1EsS0FBTixJQUFlLE9BQW5CLEVBQTRCO0FBQ3hCQyxrREFBSyxVQUFMLHVCQUE0QkYsTUFBNUIsR0FDS0csSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUztBQUNYLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixJQUFZLElBQWhCLEVBQ0lDLG9EQUFLLENBQUNDLE9BQU4sQ0FBYyxzQkFBZDtBQUNQLE9BSkwsV0FLVyxVQUFBQyxHQUFHLEVBQUk7QUFBRUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFBa0JGLDREQUFLLENBQUNLLEtBQU4sQ0FBWSwrQkFBWjtBQUErQyxPQUxyRjs7QUFNQSxVQUFJbEIsS0FBSyxDQUFDUSxLQUFOLEdBQWMsYUFBbEIsRUFBaUM7QUFDN0JDLG9EQUFLLFVBQUwsbUNBQXdDRixNQUF4QyxHQUNLRyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFTO0FBQ1gsY0FBSUEsR0FBRyxDQUFDQyxJQUFKLElBQVksSUFBaEIsRUFDSUMsb0RBQUssQ0FBQ0MsT0FBTixDQUFjLHVCQUFkO0FBQ1AsU0FKTCxXQUtXLFVBQUFDLEdBQUcsRUFBSTtBQUFFQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFBa0JGLDhEQUFLLENBQUNLLEtBQU4sQ0FBWSwrQkFBWjtBQUErQyxTQUxyRjtBQU1IO0FBQ0o7QUFDSixHQWpCRDs7QUFtQkEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyx3REFBRCxDQUFVLElBQVY7QUFBZSxhQUFPLEVBQUViLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyxxREFBRDtBQUFPLFVBQUksRUFBRUgsSUFBYjtBQUFtQixZQUFNLEVBQUVFLFdBQTNCO0FBQXdDLGVBQVMsRUFBQyxrQkFBbEQ7QUFBQSw4QkFDSSxxRUFBQyxxREFBRCxDQUFPLE1BQVA7QUFBYyxtQkFBVyxNQUF6QjtBQUEwQixpQkFBUyxFQUFDLG1CQUFwQztBQUFBLCtCQUNJLHFFQUFDLHFEQUFELENBQU8sS0FBUDtBQUFhLG1CQUFTLEVBQUMsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSSxxRUFBQyxxREFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJLHFFQUFDLHFEQUFELENBQU8sTUFBUDtBQUFBLGdDQUNJLHFFQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBTyxFQUFFQSxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLHFFQUFDLHNEQUFEO0FBQVEsaUJBQU8sRUFBQyxRQUFoQjtBQUF5QixpQkFBTyxFQUFFLG1CQUFNO0FBQ3BDRSx3QkFBWSxDQUFDTixLQUFLLENBQUNtQixFQUFQLENBQVo7QUFDQWhCLG1CQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0gsV0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBLGtCQURKO0FBd0JIOztHQWhEUUosWTs7QUFrRE1BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jdXN0b21Nb2RhbEMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cblxuZnVuY3Rpb24gY3VzdG9tTW9kYWxDKHByb3BzKSB7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0U2hvdyhmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldFNob3codHJ1ZSk7XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoc3VydmlkKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy50aXRyZSA9PSAndXNlcnMnKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUoYHVzZXJzL3VzZXJzLyR7c3VydmlkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDb250cm9sZXVyIHN1cHByaW1tw6lcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgY29uc29sZS5sb2coZXJyKTsgdG9hc3QuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvblwiKTsgfSk7XG4gICAgICAgICAgICBpZiAocHJvcHMudGl0cmUgPSAnc3VydmVpbGxhbnQnKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKGBzdXJ2ZWlsbGFuY2Uvc3VwZXJ2aXNvci8ke3N1cnZpZH1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwic3VydmVpbGxhbnQgc3VwcHJpbW3DqVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7IGNvbnNvbGUubG9nKGVycik7IHRvYXN0LmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb25cIik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9e2hhbmRsZVNob3d9PlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT1cIm1vZGFsU3VwcHJlc3Npb25cIj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uIGNsYXNzTmFtZT1cImNvbG9yLXRpdHJlLWFqb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBjbGFzc05hbWU9XCJjb2xvclRpdHJlXCI+U1VQUFJFU1NJT048L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkV0ZXMgdm91cyBjZXJ0YWlucyBkZSB2b3Vsb2lyICBsZSBzdXBwcmltZXIgPzwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBOby9DbG9zZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHByb3BzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZRVNcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21Nb2RhbEM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/customModalC.jsx\n");

/***/ })

})