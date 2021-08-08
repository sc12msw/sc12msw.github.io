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
  var _data$info;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex-1  my-8 max-w-screen-lg mx-auto p-5 text-white",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
      children: ((_data$info = _public_meta_json__WEBPACK_IMPORTED_MODULE_2__ === null || _public_meta_json__WEBPACK_IMPORTED_MODULE_2__ === void 0 ? void 0 : _public_meta_json__WEBPACK_IMPORTED_MODULE_2__.info) !== null && _data$info !== void 0 ? _data$info : []).map(function (info) {
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
            children: [info.subtitle, " ", info.sub2]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNhcmRzIiwiZGF0YSIsImluZm8iLCJtYXAiLCJuYW1lIiwic3VidGl0bGUiLCJzdWIyIiwibGlzdCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sSUFBTUEsS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQ2pDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFEQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsdUNBQWY7QUFBQSxnQkFDSyxlQUFDQyw4Q0FBRCxhQUFDQSw4Q0FBRCx1QkFBQ0EsOENBQUksQ0FBRUMsSUFBUCxtREFBZSxFQUFmLEVBQW1CQyxHQUFuQixDQUF1QixVQUFDRCxJQUFEO0FBQUE7O0FBQUEsNEJBQ3BCO0FBRUksbUJBQVMsRUFBQyw4REFGZDtBQUdJLHlCQUFZLFdBSGhCO0FBQUEsa0NBS0k7QUFBSSxxQkFBUyxFQUFDLGdDQUFkO0FBQUEsc0JBQ0tBLElBQUksQ0FBQ0U7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBUUk7QUFBRyxxQkFBUyxFQUFDLDZCQUFiO0FBQUEsdUJBQTRDRixJQUFJLENBQUNHLFFBQWpELE9BQTRESCxJQUFJLENBQUNJLElBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSixlQVNJO0FBQUEsb0NBQUtKLElBQUksQ0FBQ0ssSUFBViwrQ0FBSyxXQUFXSixHQUFYLENBQWdCLFVBQUNLLElBQUQsRUFBT0MsS0FBUDtBQUFBLGtDQUNoQjtBQUFnQix5QkFBUyxFQUFDLGNBQTFCO0FBQUEsMEJBQTBDRDtBQUExQyxpQkFBU0MsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURnQjtBQUFBLGFBQWhCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBLFdBQ1NQLElBQUksQ0FBQ0UsSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXZCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXZCTTtLQUFNSixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwMzZhODBiYjZmN2VhYTM0YTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBkYXRhIGZyb20gXCJAcHVibGljL21ldGEuanNvblwiO1xuXG5leHBvcnQgY29uc3QgQ2FyZHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xICBteS04IG1heC13LXNjcmVlbi1sZyBteC1hdXRvIHAtNSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICB7KGRhdGE/LmluZm8gPz8gW10pLm1hcCgoaW5mbykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZm8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtNSBiZy1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgcC0wIG0tMCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5mby5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14cyBmb250LWJvbGQgbWItNVwiPntpbmZvLnN1YnRpdGxlfSB7aW5mby5zdWIyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD57aW5mby5saXN0Py5tYXAoKChpdGVtLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0yIHRleHQtc21cIj57aXRlbX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9