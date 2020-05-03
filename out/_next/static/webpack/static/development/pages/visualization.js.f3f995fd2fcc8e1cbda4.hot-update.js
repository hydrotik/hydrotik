webpackHotUpdate("static/development/pages/visualization.js",{

/***/ "./src/components/ui/Chart.tsx":
/*!*************************************!*\
  !*** ./src/components/ui/Chart.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");







var _jsxFileName = "/Users/dadams/Desktop/Code/hydrotik/src/components/ui/Chart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var csvURL = 'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=';
var colorDark = '#455A64';
var colorMed = '#90A4AE';
var colorLight = '#bdc6cb';

var Chart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Chart, _React$Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Chart);

    _this = _super.call(this, props);
    _this.state = {
      data: []
    };
    _this.resolveCsvData = _this.resolveCsvData.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCsvData();
    }
  }, {
    key: "fetchCsv",
    value: function fetchCsv() {
      return node_fetch__WEBPACK_IMPORTED_MODULE_9___default()('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=' + new Date().getTime()).then(function (response) {
        try {
          var reader = response.body.getReader();
          var decoder = new TextDecoder('utf-8');
          return reader.read().then(function (result) {
            return decoder.decode(result.value);
          })["catch"](function (e) {
            throw new Error('fetchCsv() read() error' + e);
          });
        } catch (e) {
          return null;
        }
      })["catch"](function (e) {
        throw new Error('fetchCsv() fetch() error' + e);
      });
    }
  }, {
    key: "resolveCsvData",
    value: function resolveCsvData(result) {
      result.data.splice(-2, 2);
      this.setState({
        data: this.checkCSVData(result.data)
      });
    }
  }, {
    key: "checkKey",
    value: function checkKey(obj, key) {
      return key in obj;
    }
  }, {
    key: "updateKey",
    value: function updateKey(obj, oldkey, newkey) {
      obj[newkey] = obj[oldkey];
      delete obj[oldkey];
      return obj;
    }
  }, {
    key: "checkCSVData",
    value: function checkCSVData(data) {
      var _this2 = this;

      // FIX for https://github.com/nychealth/coronavirus-data/issues/41
      var badkey = 'Retrieving data. Wait a few seconds and try to cut or copy again.';
      var goodkey = 'DATE_OF_INTEREST'; //TODO Write test validating schema of object props

      data.map(function (obj) {
        if (_this2.checkKey(obj, badkey)) {
          obj = _this2.updateKey(obj, badkey, goodkey);
        }
      });
      return data;
    }
  }, {
    key: "getCsvData",
    value: function getCsvData() {
      var csvData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCsvData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.fetchCsv());

            case 3:
              csvData = _context.sent;
              papaparse__WEBPACK_IMPORTED_MODULE_8___default.a.parse(csvData, {
                header: true,
                complete: this.resolveCsvData,
                dynamicTyping: true
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryChart"], {
        theme: victory__WEBPACK_IMPORTED_MODULE_11__["VictoryTheme"].material //domain={{y: [0, 6000]}}
        ,
        domainPadding: {
          y: [0, 50]
        },
        width: 600,
        height: 350,
        scale: {
          x: "time"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 4
        }
      }, __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryAxis"], {
        crossAxis: true,
        theme: victory__WEBPACK_IMPORTED_MODULE_11__["VictoryTheme"].material,
        standalone: false,
        tickLabelComponent: __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryLabel"], {
          renderInPortal: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 7
          }
        }) // new Date() for https://momentjs.com/guides/#/warnings/js-date/ [CLEANUP]
        ,
        tickFormat: function tickFormat(t) {
          return moment__WEBPACK_IMPORTED_MODULE_10___default()(new Date(t)).format('M/D/YY');
        },
        fixLabelOverlap: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 5
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryAxis"], {
        dependentAxis: true,
        crossAxis: true,
        theme: victory__WEBPACK_IMPORTED_MODULE_11__["VictoryTheme"].material,
        standalone: false,
        tickLabelComponent: __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryLabel"], {
          renderInPortal: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 7
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 5
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryLegend"], {
        x: 75,
        y: 50,
        title: "Legend",
        centerTitle: true,
        orientation: "horizontal",
        gutter: 10,
        style: {
          border: {
            stroke: "black"
          },
          title: {
            fontSize: 10
          }
        },
        data: [{
          name: "New Cases",
          symbol: {
            fill: colorDark,
            type: "square"
          }
        }, {
          name: "Hospitalizations",
          symbol: {
            fill: colorMed,
            type: "square"
          }
        }, {
          name: "New Deaths",
          symbol: {
            fill: colorLight,
            type: "square"
          }
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 6
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryGroup"], {
        animate: {
          duration: 1000
        },
        colorScale: [colorDark, colorMed, colorLight],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 5
        }
      }, __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryArea"], {
        style: {
          data: {
            stroke: colorDark
          },
          parent: {
            border: "1px solid #ccc"
          }
        },
        data: this.state.data,
        x: function x(d) {
          return moment__WEBPACK_IMPORTED_MODULE_10___default()(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString();
        },
        y: "CASE_COUNT",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 6
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryArea"], {
        style: {
          data: {
            stroke: colorMed
          },
          parent: {
            border: "1px solid #ccc"
          }
        },
        data: this.state.data,
        x: function x(d) {
          return moment__WEBPACK_IMPORTED_MODULE_10___default()(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString();
        },
        y: "HOSPITALIZED_COUNT",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 6
        }
      }), __jsx(victory__WEBPACK_IMPORTED_MODULE_11__["VictoryArea"], {
        style: {
          data: {
            stroke: colorLight
          },
          parent: {
            border: "1px solid #ccc"
          }
        },
        data: this.state.data,
        x: function x(d) {
          return moment__WEBPACK_IMPORTED_MODULE_10___default()(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString();
        },
        y: "DEATH_COUNT",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 6
        }
      })));
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

})
//# sourceMappingURL=visualization.js.f3f995fd2fcc8e1cbda4.hot-update.js.map