(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Input.js":
/*!******************!*\
  !*** ./Input.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

module.exports = React.createClass({
  displayName: 'ZRInput',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: '',
      disabled: false,
      readonly: null
    };
  },
  getValue: function getValue() {
    return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
  },
  __parseGetValue: function __parseGetValue(value) {
    if (this.props.attrs && this.props.attrs.type == 'number') {
      value = +value;
    }

    if (this.props.attrs && this.props.attrs.type == 'date') {
      if (!value) {
        return null;
      }
    }

    return value;
  },
  __parseSetValue: function __parseSetValue(value) {
    if (this.props.attrs && this.props.attrs.type == 'date' && value) {
      value = value.split(' ')[0];
    }

    return value;
  },
  __onChange: function __onChange(event) {
    event.value = this.__parseGetValue(event.target.value);
    this.props.onChange && this.props.onChange(event, this);
  },
  __onFocus: function __onFocus(event) {
    event.value = this.__parseGetValue(event.target.value);
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    event.value = this.__parseGetValue(event.target.value);
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    event.value = this.__parseGetValue(event.target.value);

    if (event.nativeEvent.keyCode == 13) {
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("input", _extends({
      className: znui.react.classname('zr-input', this.props.className),
      required: this.props.required,
      style: this.props.style
    }, this.props.attrs, {
      name: this.props.name,
      type: this.props.type || 'text',
      defaultValue: this.props.defaultValue || this.props.value,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onChange: this.__onChange,
      onFocus: this.__onFocus,
      onBlur: this.__onBlur,
      onKeyUp: this.__onKeyUp
    }));
  }
});

/***/ }),

/***/ "./Inputs.js":
/*!*******************!*\
  !*** ./Inputs.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

module.exports = React.createClass({
  displayName: 'ZRInputs',
  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      split: '/'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value
    };
  },
  getValue: function getValue() {
    var _values = [],
        _value = null;

    for (var key in this.refs) {
      _value = ReactDOM.findDOMNode(this.refs[key]).value;

      if (_value) {
        _values.push(_value);
      }
    }

    return _values.join(this.props.split);
  },
  setValue: function setValue(value) {
    var _values = value.split(this.props.split);

    Object.keys(this.refs).forEach(function (key, index) {
      if (_values[index]) {
        ReactDOM.findDOMNode(this.refs[key]).value = _values[index];
      }
    }.bind(this));
    return this.setState({
      value: value
    }), this;
  },
  __onInputChange: function __onInputChange(event, item, index) {
    event.value = this.getValue();
    this.props.onChange && this.props.onChange(event, this);
  },
  render: function render() {
    var _values = (this.props.value || '').split(this.props.split);

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-inputs', this.props.className),
      style: this.props.style
    }, (this.props.data || []).map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("input", {
        value: _values[index],
        onChange: function onChange(event) {
          return _this.__onInputChange(event, item, index);
        },
        ref: index,
        key: index,
        placeholder: item,
        type: "text"
      });
    }.bind(this)));
  }
});

/***/ }),

/***/ "./Textarea.js":
/*!*********************!*\
  !*** ./Textarea.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

module.exports = React.createClass({
  displayName: 'ZRTextarea',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: ''
    };
  },
  getValue: function getValue() {
    //placeholder="ex.&#13;&#10;test1@test.com&#13;&#10;test2@test.com&#13;&#10;..."
    var _value = ReactDOM.findDOMNode(this).value; //console.log(_value.replace(/\u000A/g, '\n'));

    return _value;
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = value, this;
  },
  __onChange: function __onChange(event) {
    event.value = event.target.value;
    this.props.onChange && this.props.onChange(event, this);
  },
  __onFocus: function __onFocus(event) {
    event.value = event.target.value;
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    event.value = event.target.value;
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    event.value = event.target.value;

    if (event.nativeEvent.keyCode == 13) {
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("textarea", _extends({
      className: znui.react.classname("zr-textarea", this.props.className),
      required: this.props.required,
      style: this.props.style
    }, this.props.attrs, {
      name: this.props.name,
      value: this.props.value,
      defaultValue: this.props.defaultValue || this.props.value,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onBlur: this.__onBlur,
      onFocus: this.__onFocus,
      onKeyUp: this.__onKeyUp,
      onChange: this.__onChange
    }));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Input': __webpack_require__(/*! ./Input.js */ "./Input.js"),
  'Inputs': __webpack_require__(/*! ./Inputs.js */ "./Inputs.js"),
  'Textarea': __webpack_require__(/*! ./Textarea.js */ "./Textarea.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vSW5wdXRzLmpzIiwid2VicGFjazovLy8uL1RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiUmVhY3RET00iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImF0dHJzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsImdldFZhbHVlIiwiX19wYXJzZUdldFZhbHVlIiwiZmluZERPTU5vZGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiX19wYXJzZVNldFZhbHVlIiwicHJvcHMiLCJ0eXBlIiwic3BsaXQiLCJfX29uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbkNoYW5nZSIsIl9fb25Gb2N1cyIsIm9uRm9jdXMiLCJfX29uQmx1ciIsIm9uQmx1ciIsIl9fb25LZXlVcCIsIm5hdGl2ZUV2ZW50Iiwia2V5Q29kZSIsIm9uRW50ZXIiLCJvbktleVVwIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJyZXF1aXJlZCIsInN0eWxlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZXMiLCJfdmFsdWUiLCJrZXkiLCJyZWZzIiwicHVzaCIsImpvaW4iLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImluZGV4IiwiYmluZCIsInNldFN0YXRlIiwiX19vbklucHV0Q2hhbmdlIiwiaXRlbSIsIm1hcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUpsQjtBQUtDLFdBQUssRUFBRSxLQUFLckIsS0FBTCxDQUFXSCxLQUxuQjtBQU1DLGtCQUFZLEVBQUUsS0FBS0csS0FBTCxDQUFXc0IsWUFBWCxJQUF5QixLQUFLdEIsS0FBTCxDQUFXSCxLQU5uRDtBQU9DLGlCQUFXLEVBQUUsS0FBS0csS0FBTCxDQUFXdUIsV0FQekI7QUFRQyxjQUFRLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV1IsUUFSdEI7QUFTQyxjQUFRLEVBQUUsS0FBS1EsS0FBTCxDQUFXUCxRQVR0QjtBQVVDLFlBQU0sRUFBRSxLQUFLZ0IsUUFWZDtBQVdDLGFBQU8sRUFBRSxLQUFLRixTQVhmO0FBWUMsYUFBTyxFQUFFLEtBQUtJLFNBWmY7QUFhQyxjQUFRLEVBQUUsS0FBS1I7QUFiaEIsT0FERDtBQWdCQTtBQXREaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNIQWxCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFdBQVNILG1CQUFPLENBQUMsOEJBQUQsQ0FESDtBQUViLFlBQVVBLG1CQUFPLENBQUMsZ0NBQUQsQ0FGSjtBQUdiLGNBQVlBLG1CQUFPLENBQUMsb0NBQUQ7QUFITixDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUklucHV0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXR0cnM6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlYWRvbmx5OiBudWxsXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX3BhcnNlR2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdudW1iZXInKXtcblx0XHRcdHZhbHVlID0gK3ZhbHVlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nZGF0ZScpe1xuXHRcdFx0aWYoIXZhbHVlKXtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX3BhcnNlU2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdkYXRlJyAmJiB2YWx1ZSl7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uQmx1cjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1pbnB1dCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHR7Li4udGhpcy5wcm9wcy5hdHRyc31cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHR0eXBlPXt0aGlzLnByb3BzLnR5cGV8fCd0ZXh0J31cblx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX1cblx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSSW5wdXRzJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRzcGxpdDogJy8nXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF92YWx1ZXMgPSBbXSxcblx0XHRcdF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5yZWZzKXtcblx0XHRcdF92YWx1ZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1trZXldKS52YWx1ZTtcblx0XHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRcdF92YWx1ZXMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWVzLmpvaW4odGhpcy5wcm9wcy5zcGxpdCk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR2YXIgX3ZhbHVlcyA9IHZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXQpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBpbmRleCl7XG5cdFx0XHRpZihfdmFsdWVzW2luZGV4XSl7XG5cdFx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1trZXldKS52YWx1ZSA9IF92YWx1ZXNbaW5kZXhdO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KSwgdGhpcztcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZXMgPSAodGhpcy5wcm9wcy52YWx1ZXx8JycpLnNwbGl0KHRoaXMucHJvcHMuc3BsaXQpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWlucHV0cycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuZGF0YXx8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCB2YWx1ZT17X3ZhbHVlc1tpbmRleF19IG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLl9fb25JbnB1dENoYW5nZShldmVudCwgaXRlbSwgaW5kZXgpfSByZWY9e2luZGV4fSBrZXk9e2luZGV4fSBwbGFjZWhvbGRlcj17aXRlbX0gdHlwZT1cInRleHRcIiAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGV4dGFyZWEnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhdHRyczoge30sXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHQvL3BsYWNlaG9sZGVyPVwiZXguJiMxMzsmIzEwO3Rlc3QxQHRlc3QuY29tJiMxMzsmIzEwO3Rlc3QyQHRlc3QuY29tJiMxMzsmIzEwOy4uLlwiXG5cdFx0dmFyIF92YWx1ZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlO1xuXHRcdC8vY29uc29sZS5sb2coX3ZhbHVlLnJlcGxhY2UoL1xcdTAwMEEvZywgJ1xcbicpKTtcblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdmFsdWUsIHRoaXM7XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uQmx1cjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uQmx1ciAmJiB0aGlzLnByb3BzLm9uQmx1cihldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25LZXlVcDogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRleHRhcmVhXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cblx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHR7Li4udGhpcy5wcm9wcy5hdHRyc31cblx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0b25CbHVyPXt0aGlzLl9fb25CbHVyfVxuXHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnSW5wdXQnOiByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgJ0lucHV0cyc6IHJlcXVpcmUoJy4vSW5wdXRzLmpzJyksXG4gICAgJ1RleHRhcmVhJzogcmVxdWlyZSgnLi9UZXh0YXJlYS5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9