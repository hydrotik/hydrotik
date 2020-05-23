webpackHotUpdate("static/development/pages/visualization.js",{

/***/ "./src/pages/visualization.tsx":
/*!*************************************!*\
  !*** ./src/pages/visualization.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/global/layout */ "./src/components/global/layout.tsx");
/* harmony import */ var _components_ui_Chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ui/Chart */ "./src/components/ui/Chart.tsx");
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ui/Button */ "./src/components/ui/Button.tsx");
/* harmony import */ var _utils_DataHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/DataHelper */ "./src/utils/DataHelper.tsx");






var _jsxFileName = "/Users/dadams/Desktop/Code/hydrotik/src/pages/visualization.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var dc = new _utils_DataHelper__WEBPACK_IMPORTED_MODULE_12__["default"]();
/*
*	Types and Interfaces
*/

/*
*	Helper functions and sanitizers
*/
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function NumberValue(props) {
  var value = props.value;
  return __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, typeof value !== 'number' ? value : numberWithCommas(value));
}

function DataResults(props) {
  var _this = this;

  var value = props.value,
      loading = props.loading,
      hasColon = props.hasColon;

  if (loading) {
    return __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 10
      }
    }, "Loading Data...");
  }

  return __jsx("div", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 3
    }
  }, value.map(function (item) {
    return __jsx("div", {
      key: item[0],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 6
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, item[0]), hasColon || !item[0] ? ' ' : ': ', __jsx(NumberValue, {
      value: item[1],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }
    }));
  }));
}
/*
*	Visualization Class
*/


var Visualization = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Visualization, _React$Component);

  var _super = _createSuper(Visualization);

  function Visualization(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Visualization);

    _this2 = _super.call(this, props);
    _this2.state = {
      github: 'Loading data...',
      totals: [[], []],
      borough: [[], []],
      age: [[], []],
      sex: [[], []],
      boroughLoading: true,
      ageLoading: true,
      sexLoading: true,
      totalsLoading: true
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Visualization, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var papaConfig = {
        header: false,
        dynamicTyping: true
      };
      dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv').then(function (result) {
        var data;
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(result.toString(), _objectSpread({}, papaConfig, {
          complete: function complete(r) {
            data = r;
          }
        }));
        return data;
      }).then(function (result) {
        var _ref = result,
            data = _ref.data;
        var noAsteriks = JSON.parse(JSON.stringify(data).replace(/\*/g, '')).map(function (item) {
          return item.split('_').join(' ').replace('NYC_', '').replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        });

        _this3.setState({
          totals: noAsteriks,
          totalsLoading: false
        });
      });
      dc.getDataPromise('https://api.github.com/repos/nychealth/coronavirus-data/commits').then(function (result) {
        var r = JSON.parse(result)[0];
        var d = r.commit.author.date;
        var n = moment__WEBPACK_IMPORTED_MODULE_8___default()(d).format('MM/DD/YYYY, hh:hh a');
        var s = "Chart updated on ".concat(n);
        return s;
      }).then(function (result) {
        _this3.setState({
          github: result
        });
      });
      dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/boro.csv').then(function (result) {
        var data;
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(result.toString(), _objectSpread({}, papaConfig, {
          complete: function complete(r) {
            data = r;
          }
        }));
        return data;
      }).then(function (result) {
        var r = result;
        r.data.shift();

        _this3.setState({
          borough: r.data,
          boroughLoading: false
        });
      });
      dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-age.csv').then(function (result) {
        var data;
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(result.toString(), _objectSpread({}, papaConfig, {
          complete: function complete(r) {
            data = r;
          }
        }));
        return data;
      }).then(function (result) {
        var r = result;
        r.data.shift();

        _this3.setState({
          age: r.data,
          ageLoading: false
        });
      });
      dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-sex.csv').then(function (result) {
        var data;
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(result.toString(), _objectSpread({}, papaConfig, {
          complete: function complete(r) {
            data = r;
          }
        }));
        return data;
      }).then(function (result) {
        var r = result;
        r.data.shift();

        _this3.setState({
          sex: r.data,
          sexLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          github = _this$state.github,
          borough = _this$state.borough,
          age = _this$state.age,
          sex = _this$state.sex,
          totals = _this$state.totals,
          boroughLoading = _this$state.boroughLoading,
          ageLoading = _this$state.ageLoading,
          sexLoading = _this$state.sexLoading,
          totalsLoading = _this$state.totalsLoading;
      return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 4
        }
      }, __jsx("main", {
        className: "flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 5
        }
      }, __jsx("h1", {
        className: "font-bold text-xl mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 6
        }
      }, "COVID-19 Visualization"), __jsx("div", {
        className: "bg-gray-100 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 6
        }
      }, __jsx(_components_ui_Chart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 7
        }
      })), __jsx("div", {
        className: "flex flex-col md:flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "md:ml-6 md:w-2/3 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 8
        }
      }, "New Covid cases by day in NYC"), __jsx("p", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 8
        }
      }, github), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 8
        }
      }, "Borough Totals:"), __jsx(DataResults, {
        value: borough,
        loading: boroughLoading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 8
        }
      }), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 8
        }
      }, "Case Rate By Age:"), __jsx(DataResults, {
        value: age,
        loading: ageLoading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 8
        }
      }), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 8
        }
      }, "Case Rate By Sex:"), __jsx(DataResults, {
        value: sex,
        loading: sexLoading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 8
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 8
        }
      }), __jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mt-6",
        href: "https://github.com/nychealth/coronavirus-data",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 8
        }
      }, "NYC Health Github")), __jsx("div", {
        className: "md:w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 8
        }
      }, "New York City:"), __jsx("div", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 8
        }
      }, __jsx(DataResults, {
        value: totals,
        loading: totalsLoading,
        hasColon: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 9
        }
      }))))));
    }
  }]);

  return Visualization;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Visualization);

/***/ })

})
//# sourceMappingURL=visualization.js.36fdbb0e0b9cdcfde98a.hot-update.js.map