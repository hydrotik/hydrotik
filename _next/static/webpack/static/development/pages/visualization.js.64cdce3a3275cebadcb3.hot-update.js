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
      lineNumber: 58,
      columnNumber: 9
    }
  }, typeof value === 'number' ? value : numberWithCommas(value));
}
/*
*	Visualization Class
*/


var Visualization = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Visualization, _React$Component);

  var _super = _createSuper(Visualization);

  function Visualization(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Visualization);

    _this = _super.call(this, props);
    _this.state = {
      github: 'Loading data...',
      totals: [['Loading data...', '']],
      borough: [],
      age: [],
      sex: []
    };
    _this.resolveCsvData = _this.resolveCsvData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveGithubData = _this.resolveGithubData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.parseGithubData = _this.parseGithubData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveBoroughData = _this.resolveBoroughData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveAgeData = _this.resolveAgeData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.resolveSexData = _this.resolveSexData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Visualization, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv').then(function (result) {
        var data;
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(result.toString(), {
          header: true,
          delimiter: ',',
          dynamicTyping: true,
          complete: function complete(r) {
            data = r;
          }
        });
        return data;
      }).then(function (result) {
        var _ref = result,
            data = _ref.data;
        var noAsteriks = JSON.parse(JSON.stringify(data).replace(/\*/g, '')); // eslint-disable-next-line no-console

        console.log(noAsteriks);

        _this2.resolveCsvData(noAsteriks);
      }); // dc.getData(
      // 	'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv',
      // 	(data: string): void => {
      // 		Papa.parse(data, {
      // 			header: false,
      // 			complete: cvcb,
      // 			dynamicTyping: true,
      // 		});
      // 	},
      // );

      var cghcb = this.resolveGithubData;
      var ParseGithub = this.parseGithubData;
      dc.getData('https://api.github.com/repos/nychealth/coronavirus-data/commits', function (data) {
        ParseGithub(data, {
          complete: cghcb
        });
      });
      var boroughcb = this.resolveBoroughData;
      dc.getData('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/boro.csv', function (data) {
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(data, {
          header: false,
          complete: boroughcb,
          dynamicTyping: true
        });
      });
      var agecb = this.resolveAgeData;
      dc.getData('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-age.csv', function (data) {
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(data, {
          header: false,
          complete: agecb,
          dynamicTyping: true
        });
      });
      var sexcb = this.resolveSexData;
      dc.getData('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-sex.csv', function (data) {
        papaparse__WEBPACK_IMPORTED_MODULE_7___default.a.parse(data, {
          header: false,
          complete: sexcb,
          dynamicTyping: true
        });
      });
    }
  }, {
    key: "resolveCsvData",
    value: function resolveCsvData(result) {
      // eslint-disable-next-line no-console
      console.log(result);
      this.setState({
        totals: result.data
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
    key: "resolveBoroughData",
    value: function resolveBoroughData(result) {
      result.data.shift();
      this.setState({
        borough: result.data
      });
    }
  }, {
    key: "resolveAgeData",
    value: function resolveAgeData(result) {
      result.data.shift();
      this.setState({
        age: result.data
      });
    }
  }, {
    key: "resolveSexData",
    value: function resolveSexData(result) {
      result.data.shift();
      this.setState({
        sex: result.data
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          github = _this$state.github,
          borough = _this$state.borough,
          age = _this$state.age,
          sex = _this$state.sex,
          totals = _this$state.totals;
      return __jsx(_components_global_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 4
        }
      }, __jsx("main", {
        className: "flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 5
        }
      }, __jsx("h1", {
        className: "font-bold text-xl mb-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 6
        }
      }, "Covid Visualization"), __jsx("div", {
        className: "bg-gray-100 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 6
        }
      }, __jsx(_components_ui_Chart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 7
        }
      })), __jsx("div", {
        className: "flex flex-col md:flex-row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "md:ml-6 md:w-2/3 mb-16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 8
        }
      }, "New Covid cases by day in NYC"), __jsx("p", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 8
        }
      }, github), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 8
        }
      }, "Borough Totals:"), //	eslint-disable-next-line @typescript-eslint/no-explicit-any
      borough.map(function (section) {
        return __jsx("div", {
          key: section[0],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 10
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 11
          }
        }, section[0]), ":", ' ', __jsx(NumberValue, {
          value: section[1],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 11
          }
        }));
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 8
        }
      }), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 8
        }
      }, "Case Rate By Age:"), //	eslint-disable-next-line @typescript-eslint/no-explicit-any
      age.map(function (section) {
        return __jsx("div", {
          key: section[0],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 10
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 11
          }
        }, section[0]), ":", ' ', __jsx(NumberValue, {
          value: section[1],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 11
          }
        }));
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 8
        }
      }), __jsx("h2", {
        className: "font-bold text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 8
        }
      }, "Case Rate By Sex:"), //	eslint-disable-next-line @typescript-eslint/no-explicit-any
      sex.map(function (section) {
        return __jsx("div", {
          key: section[0],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 10
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 11
          }
        }, section[0]), ":", ' ', __jsx(NumberValue, {
          value: section[1],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 11
          }
        }));
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 8
        }
      }), __jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        href: "https://github.com/nychealth/coronavirus-data",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 8
        }
      }, "NYC Health Github")), __jsx("div", {
        className: "md:w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "font-bold mb-3 text-xl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 8
        }
      }, "New York City:"), __jsx("div", {
        className: "mb-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 8
        }
      }, //	eslint-disable-next-line @typescript-eslint/no-explicit-any
      totals.map(function (section) {
        return __jsx("div", {
          key: section[0],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 11
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 12
          }
        }, section[0]), ' ', __jsx(NumberValue, {
          value: section[1],
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 12
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
//# sourceMappingURL=visualization.js.64cdce3a3275cebadcb3.hot-update.js.map