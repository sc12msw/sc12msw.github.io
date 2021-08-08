webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/cards/index.tsx":
/*!****************************************!*\
  !*** ./src/components/cards/index.tsx ***!
  \****************************************/
/*! exports provided: Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return Cards; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_meta_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @public/meta.json */ "./public/meta.json");
var _public_meta_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @public/meta.json */ "./public/meta.json", 1);


var _jsxFileName = "E:\\Work\\sc12msw.github.io\\tojourn-app\\src\\components\\cards\\index.tsx",
    _this = undefined;



var Cards = function Cards() {
  var _data$jobs;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex-1 container my-8 max-w-screen-lg mx-auto p-5 text-white",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
      children: ((_data$jobs = _public_meta_json__WEBPACK_IMPORTED_MODULE_2__ === null || _public_meta_json__WEBPACK_IMPORTED_MODULE_2__ === void 0 ? void 0 : _public_meta_json__WEBPACK_IMPORTED_MODULE_2__.jobs) !== null && _data$jobs !== void 0 ? _data$jobs : []).map(function (info) {
        var _info$list;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-1 rounded-md border border-gray-300 p-5 bg-gray-900",
          "data-testid": "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-xl font-semibold p-0 m-0 ",
            children: info.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-2 text-xs font-bold mb-5",
            children: [info.subtitle, " ", info.date]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: (_info$list = info.list) === null || _info$list === void 0 ? void 0 : _info$list.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "mb-2 text-sm",
                children: item
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 30
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this)]
        }, info.name, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};
_c = Cards;

var _c;

$RefreshReg$(_c, "Cards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNhcmRzIiwiZGF0YSIsImpvYnMiLCJtYXAiLCJpbmZvIiwibmFtZSIsInN1YnRpdGxlIiwiZGF0ZSIsImxpc3QiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLElBQU1BLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsR0FBTTtBQUFBOztBQUNqQyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHVDQUFmO0FBQUEsZ0JBQ0ssZUFBQ0MsOENBQUQsYUFBQ0EsOENBQUQsdUJBQUNBLDhDQUFJLENBQUVDLElBQVAsbURBQWUsRUFBZixFQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRDtBQUFBOztBQUFBLDRCQUNwQjtBQUVJLG1CQUFTLEVBQUMsOERBRmQ7QUFHSSx5QkFBWSxXQUhoQjtBQUFBLGtDQUtJO0FBQUkscUJBQVMsRUFBQyxnQ0FBZDtBQUFBLHNCQUNLQSxJQUFJLENBQUNDO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQVFJO0FBQUcscUJBQVMsRUFBQyw2QkFBYjtBQUFBLHVCQUE0Q0QsSUFBSSxDQUFDRSxRQUFqRCxPQUE0REYsSUFBSSxDQUFDRyxJQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkosZUFTSTtBQUFBLG9DQUFLSCxJQUFJLENBQUNJLElBQVYsK0NBQUssV0FBV0wsR0FBWCxDQUFnQixVQUFDTSxJQUFELEVBQU9DLEtBQVA7QUFBQSxrQ0FDaEI7QUFBZ0IseUJBQVMsRUFBQyxjQUExQjtBQUFBLDBCQUEwQ0Q7QUFBMUMsaUJBQVNDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEZ0I7QUFBQSxhQUFoQjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQSxXQUNTTixJQUFJLENBQUNDLElBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUF2QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0F2Qk07S0FBTUwsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zM2U2Njg1NzAyNGFmNzI0ZjNmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiQHB1YmxpYy9tZXRhLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IENhcmRzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBjb250YWluZXIgbXktOCBtYXgtdy1zY3JlZW4tbGcgbXgtYXV0byBwLTUgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgeyhkYXRhPy5qb2JzID8/IFtdKS5tYXAoKGluZm8pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmZvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTUgYmctZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHAtMCBtLTAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZm8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQteHMgZm9udC1ib2xkIG1iLTVcIj57aW5mby5zdWJ0aXRsZX0ge2luZm8uZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+e2luZm8ubGlzdD8ubWFwKCgoaXRlbSwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtXCI+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==