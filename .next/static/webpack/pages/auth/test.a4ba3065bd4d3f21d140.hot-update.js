webpackHotUpdate_N_E("pages/auth/test",{

/***/ "./pages/auth/test.js":
/*!****************************!*\
  !*** ./pages/auth/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Homepage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validator */ \"../../../node_modules/express-validator/src/index.js\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_client_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/client-request */ \"./api/client-request.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/luc/Documents/ProjetDsc/Attendance-check-app-frontend/pages/auth/test.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Homepage() {\n  _s();\n\n  //axios.defaults.headers.get['Accept'] = 'application/json' \n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])( /*#__PURE__*/Object(_home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    return _home_luc_Documents_ProjetDsc_Attendance_check_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.common['Authorization'] = 'jwt:' + localStorage.getItem('jwt');\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://192.168.225.201:8000/api/users/currentuser', Headers).then(function (res) {\n              console.log(res);\n            });\n\n          case 4:\n            console.log(res);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  })));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \" jidjd\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Homepage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Homepage;\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC90ZXN0LmpzPzFhZmIiXSwibmFtZXMiOlsiSG9tZXBhZ2UiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJIZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQzlCO0FBQ0NDLHlEQUFTLGdWQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlUQyx3REFBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFNBQU9DLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixDQUF4RDtBQUpTO0FBQUEsbUJBTURMLDRDQUFLLENBQUNNLEdBQU4sQ0FBVSxtREFBVixFQUNOQyxPQURNLEVBRUpDLElBRkksQ0FFQyxVQUFDQyxHQUFELEVBQU87QUFDTkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsYUFKRCxDQU5DOztBQUFBO0FBV0hDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQVhHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY0hDLG1CQUFPLENBQUNDLEdBQVI7O0FBZEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFUO0FBbUJBLHNCQUFPO0FBQUEsMkJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxtQkFBUDtBQUdKOztHQXhCdUJiLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3Rlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IGNvb2tpZSB9IGZyb20gXCJleHByZXNzLXZhbGlkYXRvclwiXG5pbXBvcnQgeyBwYXJhbSB9IGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHBhcnNlQ29va2llIH0gZnJvbSBcIi4uLy4uL2FwaS9jbGllbnQtcmVxdWVzdFwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpe1xuICAgIC8vYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5nZXRbJ0FjY2VwdCddID0gJ2FwcGxpY2F0aW9uL2pzb24nIFxuICAgICB1c2VFZmZlY3QoYXN5bmMgKCk9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgIFxuXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ2p3dDonK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcblxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xOTIuMTY4LjIyNS4yMDE6ODAwMC9hcGkvdXNlcnMvY3VycmVudHVzZXInLFxuICAgICAgICBIZWFkZXJzXG4gICAgICAgICkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICAgfSlcbiAgICAgIFxuXG4gICAgIHJldHVybiA8PlxuICAgICAgPGgxPiBqaWRqZDwvaDE+XG4gICAgIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/test.js\n");

/***/ })

})