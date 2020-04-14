webpackHotUpdate("static/development/pages/visualization.js",{

/***/ "./src/pages/visualization.tsx":
/*!*************************************!*\
  !*** ./src/pages/visualization.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
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

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var colorDark = '';
var colorMed = '';
var colorLight = '';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NumberValue(props) {
  var v = props.value;

  if (isNaN(v)) {
    return v;
  }

  return numberWithCommas(v);
}

var dc = new _utils_DataHelper__WEBPACK_IMPORTED_MODULE_12__["default"]();

function PDFItem(props) {
  if (props.children.includes('-')) {
    return __jsx("div", {
      key: props.index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }
    }, props.children.replace('-', "\u2022"));
  } else {
    return __jsx("div", {
      key: props.index,
      className: "mt-4 -mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 4
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 50
      }
    }, props.children));
  }
}

var Visualization = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Visualization, _React$Component);

  var _super = _createSuper(Visualization);

  function Visualization(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Visualization);

    _this = _super.call(this, props);
    _this.state = {
      github: 'Loading data...',
      covid: ['Loading data...'],
      totals: [],
      stateData: [],
      apiData: ['Loading data...']
    };
    _this.resolveCsvData = _this.resolveCsvData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveStateData = _this.resolveStateData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveGithubData = _this.resolveGithubData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.parseGithubData = _this.parseGithubData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.parseAPIData = _this.parseAPIData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Visualization, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rdcb = this.resolveStateData;
      dc.getData('https://raw.githubusercontent.com/chazeon/NYState-COVID-19-Tracker/master/data/NYC-covid-19-daily-data-summary.csv', function (data) {
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(data, {
          header: false,
          complete: rdcb,
          dynamicTyping: true
        });
      });
      var cvcb = this.resolveCsvData;
      dc.getData('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv', function (data) {
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(data, {
          header: false,
          complete: cvcb,
          dynamicTyping: true
        });
      });
      var cghcb = this.resolveGithubData;
      var ParseGithub = this.parseGithubData;
      dc.getData('https://api.github.com/repos/nychealth/coronavirus-data/commits', function (data) {
        ParseGithub(data, {
          complete: cghcb
        });
      });

      if (true) {
        var apicb = this.resolveAPIData;
        var ParseAPI = this.parseAPIData;
        dc.getData('/api/covid', function (data) {
          ParseAPI(data, {
            complete: apicb
          });
        });
      }
    }
  }, {
    key: "resolveCsvData",
    value: function resolveCsvData(result) {
      this.setState({
        totals: result.data
      });
    }
  }, {
    key: "resolveStateData",
    value: function resolveStateData(result) {
      this.setState({
        stateData: result.data
      });
    }
  }, {
    key: "resolveGithubData",
    value: function resolveGithubData(result) {
      this.setState({
        github: result
      });
    }
  }, {
    key: "parseGithubData",
    value: function parseGithubData(result, config) {
      var r = JSON.parse(result)[0];
      var d = r.commit.author.date;
      var n = moment__WEBPACK_IMPORTED_MODULE_8___default()(d).format('MM/DD/YYYY, hh:hh a');
      var s = "Chart updated on ".concat(n);
      config.complete.apply(this, [s]);
    }
  }, {
    key: "resolveAPIData",
    value: function resolveAPIData(result) {
      this.setState({
        apiData: result.data
      });
    }
  }, {
    key: "parseAPIData",
    value: function parseAPIData(result, config) {
      config.complete.apply(this, [JSON.parse(result)]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, __jsx("main", {
        className: "flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "bg-gray-100 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 6
        }
      }, __jsx(_components_ui_Chart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 7
        }
      })), __jsx("div", {
        className: "flex flex-col md:flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "md:ml-6 md:w-2/3 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 8
        }
      }, "New Covid cases by day in NYC"), __jsx("p", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 8
        }
      }, this.state.github), __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 8
        }
      }, "New York City Details:"), __jsx("div", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 8
        }
      }, this.state.apiData.map(function (section, index) {
        return __jsx(PDFItem, {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 10
          }
        }, section);
      })), __jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        href: "https://github.com/nychealth/coronavirus-data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 8
        }
      }, "NYC Health Github")), __jsx("div", {
        className: "md:w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 8
        }
      }, "New York City:"), __jsx("div", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 8
        }
      }, this.state.totals.map(function (section, index) {
        return __jsx("div", {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 10
          }
        }, __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 27
          }
        }, section[0].replace('*', '')), " ", __jsx(NumberValue, {
          value: section[1],
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 74
          }
        }));
      }))))));
    }
  }]);

  return Visualization;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Visualization);

/***/ })

})
//# sourceMappingURL=visualization.js.f28e36fa9296f615195e.hot-update.js.map