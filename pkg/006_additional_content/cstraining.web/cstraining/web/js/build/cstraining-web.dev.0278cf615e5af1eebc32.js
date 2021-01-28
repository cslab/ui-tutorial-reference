(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("cs-web-dashboard"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["cs-web-components-base", "cs-web-components-externals", "cs-web-dashboard", "Immutable", "React", "ReactBootstrap"], factory);
	else if(typeof exports === 'object')
		exports["cstraining-web"] = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("cs-web-dashboard"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else
		root["cstraining-web"] = factory(root["cs-web-components-base"], root["cs-web-components-externals"], root["cs-web-dashboard"], root["Immutable"], root["React"], root["ReactBootstrap"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_cs_web_components_base__, __WEBPACK_EXTERNAL_MODULE_cs_web_components_externals__, __WEBPACK_EXTERNAL_MODULE_cs_web_dashboard__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_bootstrap__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! exports provided: DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE, thunkActionCreator, asyncActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_FETCH_SUCCESS", function() { return DATA_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_FETCH_FAILURE", function() { return DATA_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkActionCreator", function() { return thunkActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncActionCreator", function() { return asyncActionCreator; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);


var DATA_FETCH_SUCCESS = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('DATA_FETCH_SUCCESS');
var DATA_FETCH_FAILURE = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('DATA_FETCH_FAILURE');
/*
 Action Creator
  */

function onDataReceived(payload) {
  return {
    type: DATA_FETCH_SUCCESS,
    payload: payload
  };
}
/*
 Action Creator
  */


function onDataFailed(err) {
  return {
    type: DATA_FETCH_FAILURE,
    payload: err,
    error: true
  };
}
/*
 Thunk Action Creator
  */


function thunkActionCreator() {
  return function (dispatch
  /*, getState */
  ) {
    cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["Console"].log("Dispatching ", DATA_FETCH_SUCCESS);
    dispatch(onDataReceived("foo"));
  };
}
/*
 Async Thunk Action Creator

 Use an AJAX call to fetch data from server
  */

function asyncActionCreator() {
  return function (dispatch
  /*, getState */
  ) {
    Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["getJSON"])("/api/v1/i18n/labels/en").then(function (info) {
      dispatch(onDataReceived(info));
    }, function (err) {
      dispatch(onDataFailed(err));
    });
  };
}

/***/ }),

/***/ "./src/actions/state-colors-actions.js":
/*!*********************************************!*\
  !*** ./src/actions/state-colors-actions.js ***!
  \*********************************************/
/*! exports provided: LOAD_STATE_COLORS, loadStateColors, RECEIVED_STATE_COLORS, receivedStateColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_STATE_COLORS", function() { return LOAD_STATE_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStateColors", function() { return loadStateColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVED_STATE_COLORS", function() { return RECEIVED_STATE_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receivedStateColors", function() { return receivedStateColors; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");

var LOAD_STATE_COLORS = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('LOAD_STATE_COLORS');
function loadStateColors(className) {
  return {
    type: LOAD_STATE_COLORS,
    payload: {
      className: className
    }
  };
}
var RECEIVED_STATE_COLORS = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('RECEIVED_STATE_COLORS');
function receivedStateColors(className, stateColors) {
  return {
    type: RECEIVED_STATE_COLORS,
    payload: {
      className: className,
      stateColors: stateColors
    }
  };
}

/***/ }),

/***/ "./src/actions/ticket-actions.js":
/*!***************************************!*\
  !*** ./src/actions/ticket-actions.js ***!
  \***************************************/
/*! exports provided: INITIALIZE_TICKETS, TICKETS_INITIALIZED, RELOAD_TICKETS, initializeTickets, ticketsInitialized, reloadTickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIALIZE_TICKETS", function() { return INITIALIZE_TICKETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKETS_INITIALIZED", function() { return TICKETS_INITIALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_TICKETS", function() { return RELOAD_TICKETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeTickets", function() { return initializeTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticketsInitialized", function() { return ticketsInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadTickets", function() { return reloadTickets; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");

var INITIALIZE_TICKETS = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('INITIALIZE_TICKETS');
var TICKETS_INITIALIZED = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('TICKETS_INITIALIZED');
var RELOAD_TICKETS = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('RELOAD_TICKETS');
function initializeTickets() {
  return {
    type: INITIALIZE_TICKETS,
    payload: {}
  };
}
function ticketsInitialized() {
  return {
    type: TICKETS_INITIALIZED,
    payload: {}
  };
}
function reloadTickets() {
  return {
    type: RELOAD_TICKETS,
    payload: {}
  };
}

/***/ }),

/***/ "./src/components/Filter.jsx":
/*!***********************************!*\
  !*** ./src/components/Filter.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilteredTicketList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
/* harmony import */ var _TicketList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TicketList.jsx */ "./src/components/TicketList.jsx");
/* harmony import */ var _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/ticket-actions.js */ "./src/actions/ticket-actions.js");
/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selectors.js */ "./src/selectors.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










function FilterBlock(props) {
  var title = props.title,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["prefixNS"])("TicketFilter-Block")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), children);
}

FilterBlock.propTypes = {
  title: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};
var LIFECYCLES = [['new', 'New'], ['open', 'Open'], ['on_hold', 'On Hold'], ['solved', 'Solved'], ['closed', 'Closed']];

var TicketFilter = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TicketFilter, _React$PureComponent);

  var _super = _createSuper(TicketFilter);

  function TicketFilter(props) {
    var _this;

    _classCallCheck(this, TicketFilter);

    _this = _super.call(this, props);
    _this.state = {
      show_all: true,
      lifecycle: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.Map({
        "new": true,
        open: true,
        on_hold: true,
        solved: true,
        closed: true
      })
    };
    return _this;
  }

  _createClass(TicketFilter, [{
    key: "setShowAll",
    value: function setShowAll(value) {
      var onFilterChange = this.props.onFilterChange;

      if (onFilterChange) {
        onFilterChange({
          show_all: value,
          lifecycle: this.state.lifecycle
        });
      }

      this.setState({
        show_all: value
      });
    }
  }, {
    key: "toggleLifecycle",
    value: function toggleLifecycle(lifecycleKey) {
      var onFilterChange = this.props.onFilterChange;
      var newLifecycle = this.state.lifecycle.set(lifecycleKey, !this.state.lifecycle.get(lifecycleKey));

      if (onFilterChange) {
        onFilterChange({
          show_all: this.state.show_all,
          lifecycle: newLifecycle
        });
      }

      this.setState({
        lifecycle: newLifecycle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"], {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["prefixNS"])("TicketFilter"),
        title: "Filter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterBlock, {
        title: "Basic"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["FormControl"].Radio, {
        checked: this.state.show_all,
        onChange: function onChange() {
          return _this2.setShowAll(true);
        },
        label: "All Tickets"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["FormControl"].Radio, {
        checked: !this.state.show_all,
        onChange: function onChange() {
          return _this2.setShowAll(false);
        },
        label: "My Open Tickets"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterBlock, {
        title: "Lifecycle"
      }, LIFECYCLES.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            label = _ref2[1];

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["FormControl"].CheckBox, {
          key: key,
          onChange: function onChange() {
            return _this2.toggleLifecycle(key);
          },
          checked: _this2.state.lifecycle.get(key),
          label: label
        });
      }))));
    }
  }]);

  return TicketFilter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

TicketFilter.propTypes = {
  onFilterChange: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};

var _ConnectedTicketList = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(_ConnectedTicketList, _React$PureComponent2);

  var _super2 = _createSuper(_ConnectedTicketList);

  function _ConnectedTicketList() {
    _classCallCheck(this, _ConnectedTicketList);

    return _super2.apply(this, arguments);
  }

  _createClass(_ConnectedTicketList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var initializeTickets = this.props.initializeTickets;
      initializeTickets();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tickets = _this$props.tickets,
          reloadTickets = _this$props.reloadTickets,
          onSelect = _this$props.onSelect;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketList_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onRefresh: reloadTickets,
        onSelect: onSelect,
        tickets: tickets
      });
    }
  }]);

  return _ConnectedTicketList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_ConnectedTicketList.propTypes = {
  initializeTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  reloadTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  tickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].list,
  onSelect: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};

function createMapStateToPropsWithCacheInstance() {
  var ticketCache = Object(_selectors_js__WEBPACK_IMPORTED_MODULE_7__["createTicketCacheWithFilter"])();

  function mapStateToProps(state, props) {
    return {
      tickets: ticketCache(state, props)
    };
  }

  return mapStateToProps;
}

var ConnectedTicketList = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["connect"])(createMapStateToPropsWithCacheInstance, _objectSpread({}, _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_6__))(_ConnectedTicketList);

var FilteredTicketList = /*#__PURE__*/function (_React$Component) {
  _inherits(FilteredTicketList, _React$Component);

  var _super3 = _createSuper(FilteredTicketList);

  function FilteredTicketList(props) {
    var _this3;

    _classCallCheck(this, FilteredTicketList);

    _this3 = _super3.call(this, props);
    _this3.state = {
      ticketFilter: function ticketFilter() {
        return true;
      }
    };
    _this3.onFilterChange = _this3.onFilterChange.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(FilteredTicketList, [{
    key: "onFilterChange",
    value: function onFilterChange(filterState) {
      function ticketFilter(obj) {
        return filterState.lifecycle.filter(function (value) {
          return value;
        }).filter(function (value, key) {
          return obj.get('cdb_status_txt') === key;
        }).size > 0 && (filterState.show_all || obj.get('assigned_to') === Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["getAppSetup"])().getIn(['appSettings', 'userPersno']));
      }

      this.setState({
        ticketFilter: ticketFilter
      });
    }
  }, {
    key: "render",
    value: function render() {
      var onSelect = this.props.onSelect;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["prefixNS"])('FilteredTicketList')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["SplitterLayout"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["SplitterLayout"].SecondaryPane, {
        defaultSize: "20rem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TicketFilter, {
        onFilterChange: this.onFilterChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["SplitterLayout"].PrimaryPane, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"], {
        title: "Tickets"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedTicketList, {
        ticketFilter: this.state.ticketFilter,
        onSelect: onSelect
      }))))));
    }
  }]);

  return FilteredTicketList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


FilteredTicketList.propTypes = {
  onSelect: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};

/***/ }),

/***/ "./src/components/Frame.jsx":
/*!**********************************!*\
  !*** ./src/components/Frame.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Frame = /*#__PURE__*/function (_React$Component) {
  _inherits(Frame, _React$Component);

  var _super = _createSuper(Frame);

  function Frame() {
    _classCallCheck(this, Frame);

    return _super.apply(this, arguments);
  }

  _createClass(Frame, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('FilteredTicketList')
      }, this.props.children);
    }
  }]);

  return Frame;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/HelloWorld.jsx":
/*!***************************************!*\
  !*** ./src/components/HelloWorld.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  var _super = _createSuper(HelloWorld);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _super.apply(this, arguments);
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          thunkAction = _this$props.thunkAction,
          asyncAction = _this$props.asyncAction;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello World!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: thunkAction
      }, "Thunk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: asyncAction
      }, "Async")));
    }
  }]);

  return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

HelloWorld.propTypes = {
  thunkAction: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  asyncAction: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};

function mapStateToProps(state
/*, ownProps */
) {
  return {
    something: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    thunkAction: function thunkAction() {
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["thunkActionCreator"])());
    },
    asyncAction: function asyncAction() {
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["asyncActionCreator"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HelloWorld));

/***/ }),

/***/ "./src/components/TicketDetails.jsx":
/*!******************************************!*\
  !*** ./src/components/TicketDetails.jsx ***!
  \******************************************/
/*! exports provided: DisplayUser, TicketDetailsBody, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUser", function() { return DisplayUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsBody", function() { return TicketDetailsBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/state-colors-actions */ "./src/actions/state-colors-actions.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n.js */ "./src/i18n.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Link = cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["Navigation"].Link;
/**
  * This component displays the user or a placeholder
  * icon.
  *
  * @reactComponent DisplayUser
  * @reactProperty {string} userName - The user's name
  */

var DisplayUser = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DisplayUser, _React$PureComponent);

  var _super = _createSuper(DisplayUser);

  function DisplayUser() {
    _classCallCheck(this, DisplayUser);

    return _super.apply(this, arguments);
  }

  _createClass(DisplayUser, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          label = _this$props.label,
          userName = _this$props.userName,
          orientation = _this$props.orientation,
          fallbackLabel = _this$props.fallbackLabel;
      var labelElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('DisplayUser-label')
      }, userName ? Object(_i18n_js__WEBPACK_IMPORTED_MODULE_4__["formatStr"])(label, {
        userName: userName
      }) : Object(_i18n_js__WEBPACK_IMPORTED_MODULE_4__["formatStr"])(fallbackLabel));
      var fallbackResource = Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["getIcon"])(userName ? 'csweb_person_fallback' : 'cst_ticket_not_assigned');
      var thumbnailClass = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["classNames"])(Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('DisplayUser-thumbnail'), _defineProperty({}, Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('DisplayUser-thumbnail--not_assigned'), !userName));
      var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
        className: thumbnailClass,
        size: 'sm',
        fallbackSrc: fallbackResource
      });
      var combinedClassNames = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["classNames"])(className, Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('DisplayUser'));
      return orientation === 'left' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: combinedClassNames
      }, icon, labelElement) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: combinedClassNames
      }, labelElement, icon);
    }
  }]);

  return DisplayUser;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
DisplayUser.propTypes = {
  className: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  // userName and fallbackLabel must not both be undefined
  userName: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  label: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string.isRequired,
  fallbackLabel: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  orientation: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].oneOf(['left', 'right'])
};
DisplayUser.defaultProps = {
  orientation: 'left'
};

var StateTag = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(StateTag, _React$PureComponent2);

  var _super2 = _createSuper(StateTag);

  function StateTag() {
    _classCallCheck(this, StateTag);

    return _super2.apply(this, arguments);
  }

  _createClass(StateTag, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          contextObject = _this$props2.contextObject,
          stateColor = _this$props2.stateColor;
      var classnames = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["classNames"])("cs-web-components-base-generic-tag", "cs-web-components-base-generic-tag-primary", "cs-web-components-base-generic-tag-none-click");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('StateTag')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames,
        style: {
          'backgroundColor': stateColor
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          'color': 'black'
        }
      }, contextObject.get('joined_status'))));
    }
  }]);

  return StateTag;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

StateTag.propTypes = {
  contextObject: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ImmutablePropTypes"].map.isRequired,
  stateColor: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};

var _TicketDetailsHeader = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(_TicketDetailsHeader, _React$PureComponent3);

  var _super3 = _createSuper(_TicketDetailsHeader);

  function _TicketDetailsHeader() {
    _classCallCheck(this, _TicketDetailsHeader);

    return _super3.apply(this, arguments);
  }

  _createClass(_TicketDetailsHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          loadStateColors = _this$props3.loadStateColors,
          contextObject = _this$props3.contextObject;
      loadStateColors(contextObject.get('system:classname'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          contextObject = _this$props4.contextObject,
          stateColor = _this$props4.stateColor;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketDetailsHeader')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateTag, {
        contextObject: contextObject,
        stateColor: stateColor
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
        to: contextObject.get('system:ui_link')
      }, contextObject.get('id')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketDetailsHeader-title')
      }, contextObject.get('title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayUser, {
        userName: contextObject.get('mapped_assigned_to'),
        label: 'ticket_assigned_to',
        fallbackLabel: 'ticket_not_assigned',
        orientation: 'right'
      }));
    }
  }]);

  return _TicketDetailsHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_TicketDetailsHeader.propTypes = {
  contextObject: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ImmutablePropTypes"].map.isRequired,
  loadStateColors: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func,
  stateColor: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};

function TicketDetailsHeader_mapStateToProps(state, props) {
  var contextObj = props.contextObject;
  var stateColor = state[Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('stateColors')].getIn([contextObj.get('system:classname'), contextObj.get('cdb_objektart'), contextObj.get('status').toString()], '');
  return {
    stateColor: stateColor
  };
}

var TicketDetailsHeader = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["connect"])(TicketDetailsHeader_mapStateToProps, _objectSpread({}, _actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_2__))(_TicketDetailsHeader);
var TicketDetailsBody = /*#__PURE__*/function (_React$PureComponent4) {
  _inherits(TicketDetailsBody, _React$PureComponent4);

  var _super4 = _createSuper(TicketDetailsBody);

  function TicketDetailsBody(props) {
    var _this;

    _classCallCheck(this, TicketDetailsBody);

    _this = _super4.call(this, props);
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TicketDetailsBody, [{
    key: "onSelect",
    value: function onSelect() {
      var _this$props5 = this.props,
          onSelect = _this$props5.onSelect,
          contextObject = _this$props5.contextObject;

      if (onSelect) {
        onSelect(contextObject);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          contextObject = _this$props6.contextObject,
          collapsed = _this$props6.collapsed;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketDetailsBody'),
        onClick: this.onSelect
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TicketDetailsHeader, {
        contextObject: contextObject
      }), collapsed ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketDetails-content')
      }, contextObject.get('cst_ticket_description_txt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayUser, {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketDetails-footer'),
        userName: contextObject.get('mapped_raised_by'),
        label: 'ticket_raised_by'
      })));
    }
  }]);

  return TicketDetailsBody;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);
TicketDetailsBody.propTypes = {
  contextObject: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ImmutablePropTypes"].map.isRequired,
  collapsed: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].bool
};

var TicketDetails = /*#__PURE__*/function (_React$PureComponent5) {
  _inherits(TicketDetails, _React$PureComponent5);

  var _super5 = _createSuper(TicketDetails);

  function TicketDetails() {
    _classCallCheck(this, TicketDetails);

    return _super5.apply(this, arguments);
  }

  _createClass(TicketDetails, [{
    key: "render",
    value: function render() {
      var contextObject = this.props.contextObject;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"], {
        title: contextObject.get('id')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_3__["ContentBlock"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TicketDetailsBody, {
        contextObject: contextObject
      })));
    }
  }]);

  return TicketDetails;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

TicketDetails.propTypes = {
  contextObject: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ImmutablePropTypes"].map.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketDetails);

/***/ }),

/***/ "./src/components/TicketList.jsx":
/*!***************************************!*\
  !*** ./src/components/TicketList.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TicketList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TicketDetails_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TicketDetails.jsx */ "./src/components/TicketDetails.jsx");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var TicketList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TicketList, _React$PureComponent);

  var _super = _createSuper(TicketList);

  function TicketList(props) {
    var _this;

    _classCallCheck(this, TicketList);

    _this = _super.call(this, props);
    _this.state = {
      collapsed: true
    };
    _this.onCollapse = _this.onCollapse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TicketList, [{
    key: "onCollapse",
    value: function onCollapse() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tickets = _this$props.tickets,
          onRefresh = _this$props.onRefresh,
          onSelect = _this$props.onSelect;
      var collapsed = this.state.collapsed;
      var collapseButton = collapsed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"].ResizeBiggerButton, {
        onClick: this.onCollapse
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"].ResizeSmallerButton, {
        onClick: this.onCollapse
      });
      var refreshButton = onRefresh ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"].IconButton, {
        iconName: 'csweb_refresh',
        buttonStyle: 'auxiliary',
        onClick: onRefresh
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketList')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketList_header')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["prefixNS"])('TicketList_header_spacer')
      }), refreshButton, collapseButton), tickets.map(function (ticket) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketDetails_jsx__WEBPACK_IMPORTED_MODULE_4__["TicketDetailsBody"], {
          key: ticket.get('cdb_object_id'),
          onSelect: onSelect,
          collapsed: collapsed,
          contextObject: ticket
        });
      }));
    }
  }]);

  return TicketList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);


TicketList.propTypes = {
  tickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["ImmutablePropTypes"].list,
  onRefresh: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func,
  onSelect: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["PropTypes"].func
};
TicketList.defaultProps = {
  tickets: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List()
};

/***/ }),

/***/ "./src/components/TicketWidgets.jsx":
/*!******************************************!*\
  !*** ./src/components/TicketWidgets.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cs_web_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-dashboard */ "cs-web-dashboard");
/* harmony import */ var cs_web_dashboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_dashboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TicketList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TicketList.jsx */ "./src/components/TicketList.jsx");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n.js */ "./src/i18n.js");
/* harmony import */ var _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/ticket-actions.js */ "./src/actions/ticket-actions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









function getObjectsById(state) {
  return state.objectsById;
}

function createTicketCache(ticketFilter) {
  return cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["reselect"].createSelector([getObjectsById], function (objectsById) {
    return objectsById.filter(function (obj) {
      return obj.get('system:classname') === 'cst_ticket';
    }).filter(ticketFilter).valueSeq().toList();
  });
}

function createMapStateToPropsWithFilter(ticketFilter) {
  function createMapStateToPropsWithCacheInstance() {
    var ticketCache = createTicketCache(ticketFilter);

    function mapStateToProps(state, props) {
      return {
        tickets: ticketCache(state, props)
      };
    }

    return mapStateToProps;
  }

  return createMapStateToPropsWithCacheInstance;
}

var MyTicketsWidget = /*#__PURE__*/function (_React$Component) {
  _inherits(MyTicketsWidget, _React$Component);

  var _super = _createSuper(MyTicketsWidget);

  function MyTicketsWidget() {
    _classCallCheck(this, MyTicketsWidget);

    return _super.apply(this, arguments);
  }

  _createClass(MyTicketsWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.initializeTickets();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          tickets = _this$props.tickets,
          reloadTickets = _this$props.reloadTickets;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_dashboard__WEBPACK_IMPORTED_MODULE_3___default.a.DashboardItem, {
        item: item,
        title: Object(_i18n_js__WEBPACK_IMPORTED_MODULE_5__["formatStr"])('widgets_mytickets')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        tickets: tickets,
        onRefresh: reloadTickets
      }));
    }
  }]);

  return MyTicketsWidget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MyTicketsWidget.propTypes = {
  item: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].map,
  initializeTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  tickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].list,
  reloadTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
var MyTicketsWidget_mapStateToProps = createMapStateToPropsWithFilter(function (ticket) {
  return ticket.get('assigned_to') === Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["getAppSetup"])().getIn(['appSettings', 'userPersno']);
});
var ConnectedMyTicketsWidget = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["connect"])(MyTicketsWidget_mapStateToProps, _objectSpread({}, _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_6__))(MyTicketsWidget);

var UnassignedTicketsWidget = /*#__PURE__*/function (_React$Component2) {
  _inherits(UnassignedTicketsWidget, _React$Component2);

  var _super2 = _createSuper(UnassignedTicketsWidget);

  function UnassignedTicketsWidget() {
    _classCallCheck(this, UnassignedTicketsWidget);

    return _super2.apply(this, arguments);
  }

  _createClass(UnassignedTicketsWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.initializeTickets();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          tickets = _this$props2.tickets,
          reloadTickets = _this$props2.reloadTickets;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_dashboard__WEBPACK_IMPORTED_MODULE_3___default.a.DashboardItem, {
        item: item,
        title: Object(_i18n_js__WEBPACK_IMPORTED_MODULE_5__["formatStr"])('widgets_unassignedtickets')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        tickets: tickets,
        onRefresh: reloadTickets
      }));
    }
  }]);

  return UnassignedTicketsWidget;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

UnassignedTicketsWidget.propTypes = {
  item: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].map,
  initializeTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  tickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].list,
  reloadTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
};
var UnassignedTicketsWidget_mapStateToProps = createMapStateToPropsWithFilter(function (ticket) {
  return ticket.get('assigned_to') === '';
});
var ConnectedUnassignedTicketsWidget = Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["connect"])(UnassignedTicketsWidget_mapStateToProps, _objectSpread({}, _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_6__))(UnassignedTicketsWidget);
/* harmony default export */ __webpack_exports__["default"] = ({
  MyTicketsWidget: ConnectedMyTicketsWidget,
  UnassignedTicketsWidget: ConnectedUnassignedTicketsWidget,
  initializeTickets: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func
});

/***/ }),

/***/ "./src/containers/MainComponent.jsx":
/*!******************************************!*\
  !*** ./src/containers/MainComponent.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HelloWorld */ "./src/components/HelloWorld.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Created by cla on 07.04.2016.
 */




var MainComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(MainComponent, _React$Component);

  var _super = _createSuper(MainComponent);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _super.apply(this, arguments);
  }

  _createClass(MainComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["SinglePage"], {
        frameComponent: cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["PageFrame"].ApplicationFrame,
        pageContent: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
    }
  }]);

  return MainComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/dialoghook.js":
/*!***************************!*\
  !*** ./src/dialoghook.js ***!
  \***************************/
/*! exports provided: setMandatoryHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMandatoryHook", function() { return setMandatoryHook; });
function setMandatoryHook(ctx) {
  var description_field = 'cst_ticket_description_txt.cst_ticket_description_txt';

  if (ctx.getValue('cst_ticket.priority') === 'urgent') {
    ctx.setMandatory(description_field);
    ctx.setValue(description_field, 'The problem is urgent because ...');
  } else {
    ctx.setOptional(description_field);
    ctx.setValue(description_field, 'Problem description ...');
  }
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: prefixNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixNS", function() { return prefixNS; });
function prefixNS(name) {
  return "".concat("cstraining-web", "-").concat(name);
}

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! exports provided: Format, formatStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Format", function() { return Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatStr", function() { return formatStr; });
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__);

var Format = cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["i18ndb"].makeFormat('cst');
var formatStr = cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["i18ndb"].makeFormatStr('cst');

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/reducers */ "./src/reducers/reducers.js");
/* harmony import */ var _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/MainComponent */ "./src/containers/MainComponent.jsx");
/* harmony import */ var _components_TicketDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TicketDetails */ "./src/components/TicketDetails.jsx");
/* harmony import */ var _components_TicketWidgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TicketWidgets */ "./src/components/TicketWidgets.jsx");
/* harmony import */ var _sagas_ticket_sagas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sagas/ticket-sagas.js */ "./src/sagas/ticket-sagas.js");
/* harmony import */ var _sagas_state_colors_sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sagas/state-colors-sagas */ "./src/sagas/state-colors-sagas.js");
/* harmony import */ var _reducers_state_colors_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/state-colors-reducer */ "./src/reducers/state-colors-reducer.js");
/* harmony import */ var _components_Filter_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Filter.jsx */ "./src/components/Filter.jsx");
/* harmony import */ var _components_Frame_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Frame.jsx */ "./src/components/Frame.jsx");
/* harmony import */ var _dialoghook_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialoghook.js */ "./src/dialoghook.js");












cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerSaga(_sagas_state_colors_sagas__WEBPACK_IMPORTED_MODULE_7__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerReducer(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('stateColors'), _reducers_state_colors_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerSaga(_sagas_ticket_sagas_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('MyTicketsWidget'), _components_TicketWidgets__WEBPACK_IMPORTED_MODULE_5__["default"].MyTicketsWidget);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('UnassignedTicketsWidget'), _components_TicketWidgets__WEBPACK_IMPORTED_MODULE_5__["default"].UnassignedTicketsWidget);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('MainComponent'), _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerReducer(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('reducer'), _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('TicketDetails'), _components_TicketDetails__WEBPACK_IMPORTED_MODULE_4__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('TicketFilter'), _components_Filter_jsx__WEBPACK_IMPORTED_MODULE_9__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('Frame'), _components_Frame_jsx__WEBPACK_IMPORTED_MODULE_10__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerFunction(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('CstTicketSetMandatoryFrontend'), _dialoghook_js__WEBPACK_IMPORTED_MODULE_11__["setMandatoryHook"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  MainComponent: _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
  TicketDetails: _components_TicketDetails__WEBPACK_IMPORTED_MODULE_4__["default"],
  Widgets: _components_TicketWidgets__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ticket-actions.js */ "./src/actions/ticket-actions.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map({
    loaded: false
  });
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_1__["TICKETS_INITIALIZED"]:
      return state.set('loaded', true);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/state-colors-reducer.js":
/*!**********************************************!*\
  !*** ./src/reducers/state-colors-reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/state-colors-actions */ "./src/actions/state-colors-actions.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_1__["RECEIVED_STATE_COLORS"]:
      return state.set(action.payload.className, action.payload.stateColors);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/sagas/state-colors-sagas.js":
/*!*****************************************!*\
  !*** ./src/sagas/state-colors-sagas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupSagas; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/state-colors-actions */ "./src/actions/state-colors-actions.js");
var _marked = /*#__PURE__*/regeneratorRuntime.mark(loadStateColors),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(setupSagas);





var _ReduxSaga$effects = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ReduxSaga"].effects,
    call = _ReduxSaga$effects.call,
    takeEvery = _ReduxSaga$effects.takeEvery,
    put = _ReduxSaga$effects.put;

function loadStateColors(_ref) {
  var payload, className, stateColors;
  return regeneratorRuntime.wrap(function loadStateColors$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          _context.prev = 1;
          // Fetches State Colors for given className
          className = payload.className;
          _context.t0 = immutable__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context.next = 6;
          return call(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["getJSON"], "/cstraining-web-api/state_colors/".concat(className));

        case 6:
          _context.t1 = _context.sent;
          stateColors = _context.t0.fromJS.call(_context.t0, _context.t1);
          _context.next = 10;
          return put(_actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_3__["receivedStateColors"](className, stateColors));

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t2 = _context["catch"](1);
          cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Console"].error(_context.t2);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 12]]);
}

function setupSagas() {
  return regeneratorRuntime.wrap(function setupSagas$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeEvery(_actions_state_colors_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_STATE_COLORS"], loadStateColors);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

/***/ }),

/***/ "./src/sagas/ticket-sagas.js":
/*!***********************************!*\
  !*** ./src/sagas/ticket-sagas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupSagas; });
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/ticket-actions.js */ "./src/actions/ticket-actions.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
var _marked = /*#__PURE__*/regeneratorRuntime.mark(loadTickets),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(initializeTickets),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(setupSagas);





var _ReduxSaga$effects = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__["ReduxSaga"].effects,
    call = _ReduxSaga$effects.call,
    takeEvery = _ReduxSaga$effects.takeEvery,
    put = _ReduxSaga$effects.put,
    select = _ReduxSaga$effects.select;

function loadTickets() {
  return regeneratorRuntime.wrap(function loadTickets$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return put.resolve(Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["fetchCollection"])('/api/v1/collection/ticket'));

        case 3:
          _context.next = 5;
          return put(_actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_2__["ticketsInitialized"]());

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["Console"].error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function initializeTickets() {
  var state, isLoaded;
  return regeneratorRuntime.wrap(function initializeTickets$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return select();

        case 2:
          state = _context2.sent;
          isLoaded = state[Object(_helpers_js__WEBPACK_IMPORTED_MODULE_3__["prefixNS"])('reducer')].get('loaded');

          if (!isLoaded) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return");

        case 6:
          _context2.next = 8;
          return call(loadTickets);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function setupSagas() {
  return regeneratorRuntime.wrap(function setupSagas$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return takeEvery(_actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_2__["INITIALIZE_TICKETS"], initializeTickets);

        case 2:
          _context3.next = 4;
          return takeEvery(_actions_ticket_actions_js__WEBPACK_IMPORTED_MODULE_2__["RELOAD_TICKETS"], loadTickets);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! exports provided: getObjectsById, createTicketCache, getTicketFilter, createTicketCacheWithFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectsById", function() { return getObjectsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTicketCache", function() { return createTicketCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicketFilter", function() { return getTicketFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTicketCacheWithFilter", function() { return createTicketCacheWithFilter; });
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__);

function getObjectsById(state) {
  return state.objectsById;
}
function createTicketCache(ticketFilter) {
  return cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__["reselect"].createSelector([getObjectsById], function (objectsById) {
    return objectsById.filter(function (obj) {
      return obj.get('system:classname') === 'cst_ticket';
    }).filter(ticketFilter).valueSeq().toList();
  });
}
function getTicketFilter(state, props) {
  return props.ticketFilter;
}
function createTicketCacheWithFilter() {
  return cs_web_components_externals__WEBPACK_IMPORTED_MODULE_0__["reselect"].createSelector([getObjectsById, getTicketFilter], function (objectsById, ticketFilter) {
    return objectsById.filter(function (obj) {
      return obj.get('system:classname') === 'cst_ticket';
    }).filter(ticketFilter).valueSeq().toList();
  });
}

/***/ }),

/***/ "cs-web-components-base":
/*!*****************************************!*\
  !*** external "cs-web-components-base" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_components_base__;

/***/ }),

/***/ "cs-web-components-externals":
/*!**********************************************!*\
  !*** external "cs-web-components-externals" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_components_externals__;

/***/ }),

/***/ "cs-web-dashboard":
/*!***********************************!*\
  !*** external "cs-web-dashboard" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_dashboard__;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "Immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-bootstrap":
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_bootstrap__;

/***/ })

/******/ });
});
//# sourceMappingURL=cstraining-web.dev.0278cf615e5af1eebc32.js.map