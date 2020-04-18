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

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Alert.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Alert.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Alert = React.createClass({
  displayName: 'ZRAlert',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null,
      onClick: null,
      buttons: [{
        text: '确认'
      }]
    };
  },
  __onClick: function __onClick(item, index) {
    item.index = index;

    var _result = this.props.onClick && this.props.onClick(item, this);

    _result = item.onClick && item.onClick(item, this);

    if (_result !== false) {
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-alert', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "alert-inner"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "alert-title"
    }, this.props.title), this.props.content && /*#__PURE__*/React.createElement("div", {
      className: "alert-content"
    }, this.props.content)), /*#__PURE__*/React.createElement("div", {
      className: "alert-btns"
    }, this.props.buttons.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: "alert-btn",
        onClick: function onClick() {
          return _this.__onClick(item, index);
        }
      }, item.text);
    }.bind(this))));
  }
});
module.exports = {
  Alert: Alert,
  alert: function alert(content, title, callback, props) {
    return modal.create( /*#__PURE__*/React.createElement(Alert, _extends({
      content: content,
      title: title,
      onClick: callback
    }, props)), {
      "class": 'modal-middle modal-overlay'
    });
  },
  confirm: function confirm(content, title, _confirm, cancel, options) {
    var _options = zn.extend({
      cancel: '取消',
      confirm: '确定'
    }, options);

    return modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: content,
      title: title,
      buttons: [{
        text: _options.cancel,
        onClick: cancel
      }, {
        text: _options.confirm,
        onClick: _confirm
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    });
  },
  prompt: function prompt(argv) {
    var _argv = zn.extend({
      title: argv.title,
      content: /*#__PURE__*/React.createElement("input", {
        className: "alert-input",
        onChange: argv.onChange,
        type: "text"
      }),
      confirm: argv.confirm,
      cancel: argv.cancel
    }, argv);

    return modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: _argv.content,
      title: _argv.title,
      buttons: [{
        text: _argv.cancelText || '取消',
        onClick: function onClick(event, alert) {
          return _argv.cancel && _argv.cancel(event, alert);
        }
      }, {
        text: _argv.confirmText || '确定',
        onClick: function onClick(event, alert) {
          return _argv.confirm && _argv.confirm(event, alert);
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    });
  }
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Dialog.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Dialog.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Dialog = React.createClass({
  displayName: 'ZRDialog',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      content: null
    };
  },
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")), /*#__PURE__*/React.createElement("div", {
      className: "dialog-body"
    }, this.props.content));
  }
});
module.exports = {
  Dialog: Dialog,
  dialog: function dialog(argv) {
    return modal.create( /*#__PURE__*/React.createElement(Dialog, argv), {
      "class": 'modal-middle modal-overlay'
    });
  }
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Dropdown.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Dropdown.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var popover = __webpack_require__(/*! ./Popover */ "../node_modules/znui-react-popup/__/build/Popover.js").popover;

module.exports = {
  Dropdown: React.createClass({
    displayName: 'ZRDropdown',
    getDefaultProps: function getDefaultProps() {
      return {
        disabled: false,
        eventType: 'click'
      };
    },
    componentDidMount: function componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener(this.props.eventType, this.__eventHandler, false);
    },
    componentWillUnmount: function componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener(this.props.eventType, this.__eventHandler, false);
    },
    getParent: function getParent(target) {
      if (target.classList.contains('zr-popup-dropdown')) {
        return target;
      } else {
        return this.getParent(target.parentNode);
      }
    },
    __eventHandler: function __eventHandler(event) {
      if (this.props.disabled) {
        return;
      }

      var _target = this.getParent(event.target),
          _popover = zn.extend({}, this.props.popover);

      if (_target && _popover && _popover.render) {
        var _render = _popover.render;

        if (zn.is(_render, 'function')) {
          if (!_render.prototype || !_render.prototype.render) {
            _render = _render(event, this);
          }
        }

        if (_render) {
          event.stopPropagation();
          _popover.render = null;
          delete _popover.render;
          popover.render(_render, zn.extend({
            reset: true,
            event: event,
            target: _target
          }, _popover));
        }
      }
    },
    render: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: znui.react.classname("zr-popup-dropdown", this.props.className),
        style: this.props.style
      }, this.props.children);
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Loader.js":
/*!***********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Loader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var modal = __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js").modal;

var Loader = React.createClass({
  displayName: 'ZRLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      content: null,
      title: 'Loading ... '
    };
  },
  __renderContent: function __renderContent() {
    if (this.props.content) {
      return this.props.content;
    } else if (this.props.title) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
        className: "loader",
        "data-loader": "spinner"
      }), /*#__PURE__*/React.createElement("span", {
        className: "title"
      }, this.props.title));
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-loader', this.props.className),
      style: znui.react.style(this.props.style)
    }, this.__renderContent());
  }
});
module.exports = {
  Loader: Loader,
  loader: zn.Class({
    "static": true,
    methods: {
      create: function create(argv) {
        var _this = this;

        if (this._loader) {
          this._loader.destroy();
        }

        return modal.create( /*#__PURE__*/React.createElement(Loader, argv), {
          "class": 'modal-middle modal-overlay',
          ref: function ref(_ref) {
            return _this._loader = _ref;
          }
        });
      },
      loading: function loading(title) {
        return this.create({
          title: title
        });
      },
      close: function close() {
        if (this._loader) {
          this._loader.destroy();
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Modal.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Modal = React.createClass({
  displayName: 'ZRModal',
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode.parentNode) {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode);
    }

    this.props.onDestroy && this.props.onDestroy();
    callback && callback();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
  }
});
;
module.exports = {
  Modal: Modal,
  modal: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-modal-container"
        });
        this._modals = [];
      },
      create: function create(content, options) {
        var _this = this;

        var _ref = null;
        return ReactDOM.render( /*#__PURE__*/React.createElement(Modal, _extends({}, options, {
          ref: function ref(_ref2) {
            return _ref = _ref2;
          }
        }), content), zn.dom.createElement('div', {
          "class": znui.classname('zr-popup-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom), function () {
          _this._modals.push(_ref);

          options.ref && options.ref(_ref);
        });
      },
      close: function close(delay, callback) {
        var _modal = this._modals.pop();

        if (_modal) {
          if (delay) {
            setTimeout(function () {
              return _modal.destroy(callback);
            }, delay);
          } else {
            _modal.destroy(callback);
          }
        }

        return this;
      },
      closeAll: function closeAll(delay) {
        if (this._modals.length) {
          this.close(delay, this.closeAll);
        }

        return this;
      },
      size: function size() {
        return this._modals.length;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Notifier.js":
/*!*************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Notifier.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var TYPE_ICONS = {
  heart: 'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
  secondary: 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z',
  success: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
  warning: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  error: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z'
};
var Notifier = React.createClass({
  displayName: 'ZRNotification',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1500);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);

        ReactDOM.unmountComponentAtNode(_dom.parentNode);
      }
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-notifier notification-in', this.props.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: znui.react.classname("svg-inline--fa fa-check fa-w-16 ", this.props.className),
      style: this.props.style,
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: TYPE_ICONS[this.props.type || 'info']
    }))), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, this.props.content), /*#__PURE__*/React.createElement("i", {
      className: "close fa fa-times",
      onClick: this.out
    }));
  }
});
module.exports = {
  Notifier: Notifier,
  notifier: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": 'zr-popup-notifier-container'
        });
      },
      open: function open(type, content, delay) {
        ReactDOM.render( /*#__PURE__*/React.createElement(Notifier, {
          type: type,
          content: content,
          delay: delay
        }), zn.dom.createElement('div', {}, this._dom));
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('error', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Popover.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Popover.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Popover = React.createClass({
  displayName: 'ZRPopover',
  getDefaultProps: function getDefaultProps() {
    return {
      hiddenHeight: 5,
      closeable: false,
      popoverWidth: null,
      popoverHeight: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);

    if (this.props.event) {
      this._eventType = this.props.event.type || this.props.event;
      window.addEventListener(this._eventType, this.__onWindowClick, false);

      this._dom.addEventListener(this._eventType, function (event) {
        var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);

        if (_result === true) {//event.stopPropagation();
        }
      }.bind(this), true);

      setTimeout(function () {
        this.fixPosition(this.props.target);
      }.bind(this), 0);
    }

    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __isMatchParent: function __isMatchParent(target, parent) {
    if (target) {
      if (target.tagName == 'BODY' || target.tagName == 'HTML') {
        return false;
      }

      if (target !== parent) {
        return this.__isMatchParent(target.parentNode, parent);
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
  __onWindowClick: function __onWindowClick(event) {
    if (!this.__isMatchParent(event.target, this._dom)) {
      var _result = this.props.onWindowOutsideContainerEvent && this.props.onWindowOutsideContainerEvent(event, this);

      if (_result !== true) {
        this.close("Popover: on window outside container event");
      }
    } else {
      var _result = this.props.onWindowInsideContainerEvent && this.props.onWindowInsideContainerEvent(event, this);

      if (_result === true) {
        this.close("Popover: on window inside container event");
      }
    }
  },
  close: function close(tag) {
    //zn.info('Popover.close:', tag);
    if (this._dom) {
      window.removeEventListener(this._eventType, this.__onWindowClick, false);

      if (this._dom.parentNode) {
        this._dom.parentNode.style = '';
        ReactDOM.unmountComponentAtNode(this._dom.parentNode);
      }

      this._dom = null;
      this._eventType = null;
    }
  },
  fixPosition: function fixPosition(target) {
    var _popover = this._dom;

    var _t = zn.dom.getPosition(target),
        _popoverWidth = this.props.popoverWidth || _t.width,
        _popoverHeight = this.props.popoverHeight || zn.dom.getPosition(_popover).height,
        _left = null,
        _top = null,
        _arrowClassNames = [];

    if (_popoverWidth == '100%') {
      _popoverWidth = _t.width;
    }

    if (_popoverHeight < this.props.hiddenHeight) {
      this.props.onHidden && this.props.onHidden();
      return;
    }

    if (_t.x + _popoverWidth > window.screen.availWidth) {
      _arrowClassNames.push('zr-arrow-placement-right');

      _left = document.body.scrollWidth - _t.x - _t.width;
      _popover.style.right = _left + 'px';
      _popover.parentNode.style.right = '0px';
    } else {
      _left = _t.x;

      _arrowClassNames.push('zr-arrow-placement-left');

      _popover.style.left = _left + 'px';
    }

    if (_t.y + _popoverHeight > window.screen.availHeight) {
      _arrowClassNames.push('zr-arrow-direction-bottom');

      _top = _t.height + 10;
      _popover.style.bottom = _top + 'px';
      _popover.parentNode.style.bottom = '0px';
    } else {
      _top = _t.y + _t.height + 10;

      _arrowClassNames.push('zr-arrow-direction-top');

      _popover.style.top = _top + 'px';
    }

    if (this.props.popoverWidth) {
      _popover.style.width = _popoverWidth + 'px';
    }

    if (this.props.popoverHeight) {
      if (_popover.offsetHeight != _popoverHeight) {
        _popover.style.height = _popoverHeight + 'px';
      }
    }

    _popover.style.visibility = 'visible';

    _arrowClassNames.push('zn-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  render: function render() {
    var _this = this;

    var _style = {};

    if (this.props.height) {
      _style.maxHeight = this.props.height + 'px';
    } else {
      _style.height = 'auto';
    }

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-popover zr-arrow zr-arrow-color-white', this.state.arrowClassName)
    }, this.props.closeable && /*#__PURE__*/React.createElement("span", {
      className: "popover-close zr-hover-self-loading",
      onClick: function onClick() {
        return _this.close('self close');
      }
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      className: "svg-inline--fa fa-check fa-w-16 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    }))), /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("popover-content", this.props.className),
      style: (zn.extend({}, this.props.style), _style)
    }, this.props.content));
  }
});
module.exports = {
  Popover: Popover,
  popover: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-popover-container"
        });
      },
      render: function render(content, options) {
        if (options && options.reset) {
          this.close('zn.popover:render');
        }

        return this._popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
          content: content
        })), this._dom), this._popover;
      },
      close: function close(tag) {
        if (this._popover) {
          this._popover.close(tag);

          this._popover = null;
        }

        return this;
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Toast.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Toast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Toast = React.createClass({
  displayName: 'ZRToast',
  componentDidMount: function componentDidMount() {
    window.setTimeout(this.out, this.props.delay || 1800);
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('toast-out');

    _dom.addEventListener("animationend", function () {
      _dom.parentNode.parentNode.removeChild(_dom.parentNode);

      ReactDOM.unmountComponentAtNode(_dom.parentNode.parentNode);
    }, false);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-toast toast-in', this.props.type)
    }, this.props.content);
  }
});
module.exports = {
  Toast: Toast,
  toast: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-toast-container"
        });
      },
      open: function open(type, content, delay) {
        var _dom = document.createElement('div');

        ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
          type: type,
          content: content,
          delay: delay
        }), _dom);

        this._dom.appendChild(_dom);
      },
      success: function success(content, delay) {
        return this.open('success', content, delay);
      },
      warning: function warning(content, delay) {
        return this.open('warning', content, delay);
      },
      error: function error(content, delay) {
        return this.open('danger', content, delay);
      },
      info: function info(content, delay) {
        return this.open('info', content, delay);
      }
    }
  })
};

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/Tooltip.js":
/*!************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/Tooltip.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Tooltip = React.createClass({
  displayName: 'ZRTooltip',
  getInitialState: function getInitialState() {
    return {
      arrowClassName: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this._dom = ReactDOM.findDOMNode(this);
    this.fixPosition(this.props.target);
  },
  fixPosition: function fixPosition(target) {
    if (!target) {
      throw new Error('fixPosition target is null.');
    }

    var _domWidth = this._dom.offsetWidth,
        _domHeight = this._dom.offsetHeight,
        _target = zn.dom.getPosition(target),
        _left = null,
        _top = null,
        _className = '';

    if (_target.x + _domWidth > document.body.scrollWidth) {
      _left = _target.width - _domWidth;
    } else {
      _left = _target.x + (_target.width - _domWidth) / 2;
    }

    if (_target.y + _domHeight > document.body.scrollHeight) {
      _top = _target.y - _domHeight - 16;
      _className = 'zr-arrow-direction-bottom';
    } else {
      _top = _target.y + _target.height + 16;
      _className = 'zr-arrow-direction-top';
    }

    if (_left < 0) {
      _className = 'zr-arrow-direction-left';
      _left = _target.x + _target.width + 4;
      _top = _target.y + 4;
    }

    this._dom.style.top = _top + 'px';
    this._dom.style.left = _left + 'px';
    _className && this._dom.classList.add(_className);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted) {
      return false;
    }

    var _dom = ReactDOM.findDOMNode(this);

    var _result = this.props.onDestroyBefore && this.props.onDestroyBefore(_dom);

    if (_result === false) {
      return false;
    }

    if (_dom && _dom.parentNode) {
      _dom.parentNode.removeChild(_dom);
    }

    this.props.onDestroy && this.props.onDestroy();

    if (zn.is(callback, 'function')) {
      callback();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center", this.props.className),
      style: this.props.style
    }, this.props.content);
  }
});
module.exports = {
  Tooltip: Tooltip,
  tooltip: zn.Class({
    "static": true,
    methods: {
      init: function init() {
        this._dom = zn.dom.createRootElement("div", {
          "class": "zr-popup-tooltip-container"
        });
        window.addEventListener('mouseover', this.__onWindowMouseOver.bind(this), true);
        window.addEventListener('resize', this.__onWindowResize.bind(this), false);
      },
      __onWindowResize: function __onWindowResize() {
        this.close('znui.react.popup.tooltip: window.resizing');
      },
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target;

        if (_target && _target.getAttribute && _target.getAttribute('data-zr-popup-tooltip')) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close('znui.react.popup.tooltip: window.mouseover');
          }

          this.render(_target.getAttribute('data-zr-popup-tooltip'), {
            target: _target
          });
        } else {
          this.close('znui.react.popup.tooltip: window.mouseover');
        }
      },
      render: function render(content, options) {
        if (this._tooltip) {
          this._tooltip.destroy();
        }

        this._tooltip = ReactDOM.render( /*#__PURE__*/React.createElement(Tooltip, _extends({}, options, {
          content: content
        })), this._dom);
      },
      close: function close(callback) {
        if (this._tooltip) {
          if (zn.is(callback, 'string') && process && process.env && "development" == 'development') {
            zn.debug(callback);
          }

          ReactDOM.unmountComponentAtNode(this._dom);

          this._tooltip.destroy(callback);

          this._tooltip = null;
        }

        return this;
      }
    }
  })
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/znui-react-popup/__/build/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/znui-react-popup/__/build/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = zn.deepAssigns({}, __webpack_require__(/*! ./Alert */ "../node_modules/znui-react-popup/__/build/Alert.js"), __webpack_require__(/*! ./Dialog */ "../node_modules/znui-react-popup/__/build/Dialog.js"), __webpack_require__(/*! ./Dropdown */ "../node_modules/znui-react-popup/__/build/Dropdown.js"), __webpack_require__(/*! ./Loader */ "../node_modules/znui-react-popup/__/build/Loader.js"), __webpack_require__(/*! ./Modal */ "../node_modules/znui-react-popup/__/build/Modal.js"), __webpack_require__(/*! ./Notifier */ "../node_modules/znui-react-popup/__/build/Notifier.js"), __webpack_require__(/*! ./Popover */ "../node_modules/znui-react-popup/__/build/Popover.js"), __webpack_require__(/*! ./Toast */ "../node_modules/znui-react-popup/__/build/Toast.js"), __webpack_require__(/*! ./Tooltip */ "../node_modules/znui-react-popup/__/build/Tooltip.js"));

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/production/index.bundle.js":
/*!***************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/production/index.bundle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(e,t){for(var n in t)e[n]=t[n]})(this,function(n){var o={};function r(e){if(o[e]){return o[e].exports}var t=o[e]={i:e,l:false,exports:{}};n[e].call(t.exports,t,t.exports,r);t.l=true;return t.exports}r.m=n;r.c=o;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(t,e){if(e&1)t=r(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n};r.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};r.d(e,"a",e);return e};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=4)}([function(e,t){(function(){e.exports=this["React"]})()},function(e,t){(function(){e.exports=this["ReactDOM"]})()},function(e,t,n){function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};return i.apply(this,arguments)}var s=znui.React||n(0);var a=znui.ReactDOM||n(1);var l=s.createClass({displayName:"ZRModal",componentDidMount:function e(){this.props.onComponentDidMount&&this.props.onComponentDidMount(this)},destroy:function e(t){if(!this.__isMounted){return false}var n=a.findDOMNode(this);var o=this.props.onDestroyBefore&&this.props.onDestroyBefore(n);if(o===false){return false}if(n&&n.parentNode.parentNode){n.parentNode.parentNode.removeChild(n.parentNode);a.unmountComponentAtNode(n.parentNode)}this.props.onDestroy&&this.props.onDestroy();t&&t()},render:function e(){return s.createElement(s.Fragment,null,this.props.children)}});e.exports={Modal:l,modal:zn.Class({static:true,methods:{init:function e(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-modal-container"});this._modals=[]},create:function e(t,n){var o=this;var r=null;return a.render(s.createElement(l,i({},n,{ref:function e(t){return r=t}}),t),zn.dom.createElement("div",{class:znui.classname("zr-popup-modal",n["class"]),style:znui.style(n.style)},this._dom),function(){o._modals.push(r);n.ref&&n.ref(r)})},close:function e(t,n){var o=this._modals.pop();if(o){if(t){setTimeout(function(){return o.destroy(n)},t)}else{o.destroy(n)}}return this},closeAll:function e(t){if(this._modals.length){this.close(t,this.closeAll)}return this},size:function e(){return this._modals.length}}})}},function(e,t,n){function o(){o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};return o.apply(this,arguments)}var r=znui.React||n(0);var i=znui.ReactDOM||n(1);var s=r.createClass({displayName:"ZRPopover",getDefaultProps:function e(){return{hiddenHeight:5,closeable:false,popoverWidth:null,popoverHeight:null}},getInitialState:function e(){return{arrowClassName:""}},componentDidMount:function e(){this._dom=i.findDOMNode(this);if(this.props.event){this._eventType=this.props.event.type||this.props.event;window.addEventListener(this._eventType,this.__onWindowClick,false);this._dom.addEventListener(this._eventType,function(e){var t=this.props.onContainerEvent&&this.props.onContainerEvent(e,this);if(t===true){}}.bind(this),true);setTimeout(function(){this.fixPosition(this.props.target)}.bind(this),0)}this.props.onPopoverDidMount&&this.props.onPopoverDidMount(this)},__isMatchParent:function e(t,n){if(t){if(t.tagName=="BODY"||t.tagName=="HTML"){return false}if(t!==n){return this.__isMatchParent(t.parentNode,n)}else{return true}}else{return true}},__onWindowClick:function e(t){if(!this.__isMatchParent(t.target,this._dom)){var n=this.props.onWindowOutsideContainerEvent&&this.props.onWindowOutsideContainerEvent(t,this);if(n!==true){this.close("Popover: on window outside container event")}}else{var n=this.props.onWindowInsideContainerEvent&&this.props.onWindowInsideContainerEvent(t,this);if(n===true){this.close("Popover: on window inside container event")}}},close:function e(t){if(this._dom){window.removeEventListener(this._eventType,this.__onWindowClick,false);if(this._dom.parentNode){this._dom.parentNode.style="";i.unmountComponentAtNode(this._dom.parentNode)}this._dom=null;this._eventType=null}},fixPosition:function e(t){var n=this._dom;var o=zn.dom.getPosition(t),r=this.props.popoverWidth||o.width,i=this.props.popoverHeight||zn.dom.getPosition(n).height,s=null,a=null,l=[];if(r=="100%"){r=o.width}if(i<this.props.hiddenHeight){this.props.onHidden&&this.props.onHidden();return}if(o.x+r>window.screen.availWidth){l.push("zr-arrow-placement-right");s=document.body.scrollWidth-o.x-o.width;n.style.right=s+"px";n.parentNode.style.right="0px"}else{s=o.x;l.push("zr-arrow-placement-left");n.style.left=s+"px"}if(o.y+i>window.screen.availHeight){l.push("zr-arrow-direction-bottom");a=o.height+10;n.style.bottom=a+"px";n.parentNode.style.bottom="0px"}else{a=o.y+o.height+10;l.push("zr-arrow-direction-top");n.style.top=a+"px"}if(this.props.popoverWidth){n.style.width=r+"px"}if(this.props.popoverHeight){if(n.offsetHeight!=i){n.style.height=i+"px"}}n.style.visibility="visible";l.push("zn-animate-scale-up");n.className=n.className+" "+l.join(" ")},render:function e(){var t=this;var n={};if(this.props.height){n.maxHeight=this.props.height+"px"}else{n.height="auto"}return r.createElement("div",{className:znui.react.classname("zr-popup-popover zr-arrow zr-arrow-color-white",this.state.arrowClassName)},this.props.closeable&&r.createElement("span",{className:"popover-close zr-hover-self-loading",onClick:function e(){return t.close("self close")}},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"svg-inline--fa fa-check fa-w-16 ",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),r.createElement("div",{className:znui.react.classname("popover-content",this.props.className),style:(zn.extend({},this.props.style),n)},this.props.content))}});e.exports={Popover:s,popover:zn.Class({static:true,methods:{init:function e(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-popover-container"})},render:function e(t,n){if(n&&n.reset){this.close("zn.popover:render")}return this._popover=i.render(r.createElement(s,o({},n,{content:t})),this._dom),this._popover},close:function e(t){if(this._popover){this._popover.close(t);this._popover=null}return this}}})}},function(e,t,n){e.exports=zn.deepAssigns({},n(5),n(6),n(7),n(8),n(2),n(9),n(3),n(10),n(11))},function(e,t,n){function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};return i.apply(this,arguments)}var a=znui.React||n(0);var l=n(2).modal;var c=a.createClass({displayName:"ZRAlert",getDefaultProps:function e(){return{title:"",content:null,onClick:null,buttons:[{text:"确认"}]}},__onClick:function e(t,n){t.index=n;var o=this.props.onClick&&this.props.onClick(t,this);o=t.onClick&&t.onClick(t,this);if(o!==false){l.close()}},render:function e(){return a.createElement("div",{className:znui.react.classname("zr-popup-alert",this.props.className),style:this.props.style},a.createElement("div",{className:"alert-inner"},this.props.title&&a.createElement("div",{className:"alert-title"},this.props.title),this.props.content&&a.createElement("div",{className:"alert-content"},this.props.content)),a.createElement("div",{className:"alert-btns"},this.props.buttons.map(function(t,n){var o=this;return a.createElement("div",{key:n,className:"alert-btn",onClick:function e(){return o.__onClick(t,n)}},t.text)}.bind(this))))}});e.exports={Alert:c,alert:function e(t,n,o,r){return l.create(a.createElement(c,i({content:t,title:n,onClick:o},r)),{class:"modal-middle modal-overlay"})},confirm:function e(t,n,o,r,i){var s=zn.extend({cancel:"取消",confirm:"确定"},i);return l.create(a.createElement(c,{content:t,title:n,buttons:[{text:s.cancel,onClick:r},{text:s.confirm,onClick:o}]}),{class:"modal-middle modal-overlay"})},prompt:function e(t){var o=zn.extend({title:t.title,content:a.createElement("input",{className:"alert-input",onChange:t.onChange,type:"text"}),confirm:t.confirm,cancel:t.cancel},t);return l.create(a.createElement(c,{content:o.content,title:o.title,buttons:[{text:o.cancelText||"取消",onClick:function e(t,n){return o.cancel&&o.cancel(t,n)}},{text:o.confirmText||"确定",onClick:function e(t,n){return o.confirm&&o.confirm(t,n)}}]}),{class:"modal-middle modal-overlay"})}}},function(e,t,n){var o=znui.React||n(0);var r=n(2).modal;var i=o.createClass({displayName:"ZRDialog",getDefaultProps:function e(){return{title:"",content:null}},__onClose:function e(t){var n=this.props.onClose&&this.props.onClose(t,this);if(n!==false){r.close()}},render:function e(){return o.createElement("div",{className:znui.react.classname("zr-popup-dialog",this.props.className),style:this.props.style},o.createElement("div",{className:"dialog-header"},this.props.title&&o.createElement("div",{className:"dialog-title"},this.props.title),this.props.closeable&&o.createElement("span",{onClick:this.__onClose,className:"dialog-close"},"x")),o.createElement("div",{className:"dialog-body"},this.props.content))}});e.exports={Dialog:i,dialog:function e(t){return r.create(o.createElement(i,t),{class:"modal-middle modal-overlay"})}}},function(e,t,n){var o=znui.React||n(0);var r=znui.ReactDOM||n(1);var i=n(3).popover;e.exports={Dropdown:o.createClass({displayName:"ZRDropdown",getDefaultProps:function e(){return{disabled:false,eventType:"click"}},componentDidMount:function e(){r.findDOMNode(this).addEventListener(this.props.eventType,this.__eventHandler,false)},componentWillUnmount:function e(){r.findDOMNode(this).removeEventListener(this.props.eventType,this.__eventHandler,false)},getParent:function e(t){if(t.classList.contains("zr-popup-dropdown")){return t}else{return this.getParent(t.parentNode)}},__eventHandler:function e(t){if(this.props.disabled){return}var n=this.getParent(t.target),o=zn.extend({},this.props.popover);if(n&&o&&o.render){var r=o.render;if(zn.is(r,"function")){if(!r.prototype||!r.prototype.render){r=r(t,this)}}if(r){t.stopPropagation();o.render=null;delete o.render;i.render(r,zn.extend({reset:true,event:t,target:n},o))}}},render:function e(){return o.createElement("div",{className:znui.react.classname("zr-popup-dropdown",this.props.className),style:this.props.style},this.props.children)}})}},function(e,t,n){var o=znui.React||n(0);var r=n(2).modal;var i=o.createClass({displayName:"ZRLoader",getDefaultProps:function e(){return{content:null,title:"Loading ... "}},__renderContent:function e(){if(this.props.content){return this.props.content}else if(this.props.title){return o.createElement(o.Fragment,null,o.createElement("i",{className:"loader","data-loader":"spinner"}),o.createElement("span",{className:"title"},this.props.title))}},render:function e(){return o.createElement("div",{className:znui.react.classname("zr-popup-loader",this.props.className),style:znui.react.style(this.props.style)},this.__renderContent())}});e.exports={Loader:i,loader:zn.Class({static:true,methods:{create:function e(t){var n=this;if(this._loader){this._loader.destroy()}return r.create(o.createElement(i,t),{class:"modal-middle modal-overlay",ref:function e(t){return n._loader=t}})},loading:function e(t){return this.create({title:t})},close:function e(){if(this._loader){this._loader.destroy()}return this}}})}},function(e,t,n){var r=znui.React||n(0);var i=znui.ReactDOM||n(1);var o={heart:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",secondary:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z",success:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",warning:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",error:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",info:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"};var s=r.createClass({displayName:"ZRNotification",componentDidMount:function e(){window.setTimeout(this.out,this.props.delay||1500)},out:function e(){var t=i.findDOMNode(this);t.classList.add("notification-out");t.addEventListener("animationend",function(){if(t.parentNode.parentNode){t.parentNode.parentNode.removeChild(t.parentNode);i.unmountComponentAtNode(t.parentNode)}},false)},render:function e(){return r.createElement("div",{className:znui.react.classname("zr-popup-notifier notification-in",this.props.type)},r.createElement("div",{className:"icon"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:znui.react.classname("svg-inline--fa fa-check fa-w-16 ",this.props.className),style:this.props.style,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:o[this.props.type||"info"]}))),r.createElement("div",{className:"content"},this.props.content),r.createElement("i",{className:"close fa fa-times",onClick:this.out}))}});e.exports={Notifier:s,notifier:zn.Class({static:true,methods:{init:function e(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-notifier-container"})},open:function e(t,n,o){i.render(r.createElement(s,{type:t,content:n,delay:o}),zn.dom.createElement("div",{},this._dom))},success:function e(t,n){return this.open("success",t,n)},warning:function e(t,n){return this.open("warning",t,n)},error:function e(t,n){return this.open("error",t,n)},info:function e(t,n){return this.open("info",t,n)}}})}},function(e,t,n){var i=znui.React||n(0);var s=znui.ReactDOM||n(1);var a=i.createClass({displayName:"ZRToast",componentDidMount:function e(){window.setTimeout(this.out,this.props.delay||1800)},out:function e(){var t=s.findDOMNode(this);t.classList.add("toast-out");t.addEventListener("animationend",function(){t.parentNode.parentNode.removeChild(t.parentNode);s.unmountComponentAtNode(t.parentNode.parentNode)},false)},render:function e(){return i.createElement("div",{className:znui.react.classname("zr-popup-toast toast-in",this.props.type)},this.props.content)}});e.exports={Toast:a,toast:zn.Class({static:true,methods:{init:function e(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-toast-container"})},open:function e(t,n,o){var r=document.createElement("div");s.render(i.createElement(a,{type:t,content:n,delay:o}),r);this._dom.appendChild(r)},success:function e(t,n){return this.open("success",t,n)},warning:function e(t,n){return this.open("warning",t,n)},error:function e(t,n){return this.open("danger",t,n)},info:function e(t,n){return this.open("info",t,n)}}})}},function(e,t,a){(function(n){function o(){o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};return o.apply(this,arguments)}var r=znui.React||a(0);var i=znui.ReactDOM||a(1);var s=r.createClass({displayName:"ZRTooltip",getInitialState:function e(){return{arrowClassName:""}},componentDidMount:function e(){this._dom=i.findDOMNode(this);this.fixPosition(this.props.target)},fixPosition:function e(t){if(!t){throw new Error("fixPosition target is null.")}var n=this._dom.offsetWidth,o=this._dom.offsetHeight,r=zn.dom.getPosition(t),i=null,s=null,a="";if(r.x+n>document.body.scrollWidth){i=r.width-n}else{i=r.x+(r.width-n)/2}if(r.y+o>document.body.scrollHeight){s=r.y-o-16;a="zr-arrow-direction-bottom"}else{s=r.y+r.height+16;a="zr-arrow-direction-top"}if(i<0){a="zr-arrow-direction-left";i=r.x+r.width+4;s=r.y+4}this._dom.style.top=s+"px";this._dom.style.left=i+"px";a&&this._dom.classList.add(a)},destroy:function e(t){if(!this.__isMounted){return false}var n=i.findDOMNode(this);var o=this.props.onDestroyBefore&&this.props.onDestroyBefore(n);if(o===false){return false}if(n&&n.parentNode){n.parentNode.removeChild(n)}this.props.onDestroy&&this.props.onDestroy();if(zn.is(t,"function")){t()}},render:function e(){return r.createElement("div",{className:znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center",this.props.className),style:this.props.style},this.props.content)}});e.exports={Tooltip:s,tooltip:zn.Class({static:true,methods:{init:function e(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-tooltip-container"});window.addEventListener("mouseover",this.__onWindowMouseOver.bind(this),true);window.addEventListener("resize",this.__onWindowResize.bind(this),false)},__onWindowResize:function e(){this.close("znui.react.popup.tooltip: window.resizing")},__onWindowMouseOver:function e(t){var n=t.target;if(n&&n.getAttribute&&n.getAttribute("data-zr-popup-tooltip")){if(this._tooltip&&this._tooltip.props.target!==n){this.close("znui.react.popup.tooltip: window.mouseover")}this.render(n.getAttribute("data-zr-popup-tooltip"),{target:n})}else{this.close("znui.react.popup.tooltip: window.mouseover")}},render:function e(t,n){if(this._tooltip){this._tooltip.destroy()}this._tooltip=i.render(r.createElement(s,o({},n,{content:t})),this._dom)},close:function e(t){if(this._tooltip){if(zn.is(t,"string")&&n&&n.env&&"production"=="development"){zn.debug(t)}i.unmountComponentAtNode(this._dom);this._tooltip.destroy(t);this._tooltip=null}return this}}})}}).call(this,a(12))},function(e,t){var n=e.exports={};var o;var r;function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){o=setTimeout}else{o=i}}catch(e){o=i}try{if(typeof clearTimeout==="function"){r=clearTimeout}else{r=s}}catch(e){r=s}})();function a(t){if(o===setTimeout){return setTimeout(t,0)}if((o===i||!o)&&setTimeout){o=setTimeout;return setTimeout(t,0)}try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}function l(t){if(r===clearTimeout){return clearTimeout(t)}if((r===s||!r)&&clearTimeout){r=clearTimeout;return clearTimeout(t)}try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}var c=[];var p=false;var u;var d=-1;function f(){if(!p||!u){return}p=false;if(u.length){c=u.concat(c)}else{d=-1}if(c.length){h()}}function h(){if(p){return}var e=a(f);p=true;var t=c.length;while(t){u=c;c=[];while(++d<t){if(u){u[d].run()}}d=-1;t=c.length}u=null;p=false;l(e)}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}c.push(new m(e,t));if(c.length===1&&!p){a(h)}};function m(e,t){this.fun=e;this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)};n.title="browser";n.browser=true;n.env={};n.argv=[];n.version="";n.versions={};function v(){}n.on=v;n.addListener=v;n.once=v;n.off=v;n.removeListener=v;n.removeAllListeners=v;n.emit=v;n.prependListener=v;n.prependOnceListener=v;n.listeners=function(e){return[]};n.binding=function(e){throw new Error("process.binding is not supported")};n.cwd=function(){return"/"};n.chdir=function(e){throw new Error("process.chdir is not supported")};n.umask=function(){return 0}}]));

/***/ }),

/***/ "../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../node_modules/znui-react-popup/index.js":
/*!*************************************************!*\
  !*** ../node_modules/znui-react-popup/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {__webpack_require__(/*! znui-react */ "znui-react");
if(process && process.env && "development") {
    if(true) {
        __webpack_require__(/*! ./__/dist/development/index.style.bundle.css */ "../node_modules/znui-react-popup/__/dist/development/index.style.bundle.css");
        module.exports = __webpack_require__(/*! ./__/build/index.js */ "../node_modules/znui-react-popup/__/build/index.js");
    }else{}
}else {
    __webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css");
    module.exports = __webpack_require__(/*! ./__/dist/production/index.bundle.js */ "../node_modules/znui-react-popup/__/dist/production/index.bundle.js");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

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

/***/ "./SearchInput.js":
/*!************************!*\
  !*** ./SearchInput.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var popup = __webpack_require__(/*! znui-react-popup */ "../node_modules/znui-react-popup/index.js");

module.exports = React.createClass({
  displayName: 'ZRSearchInput',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: '',
      disabled: false,
      readonly: null,
      focused: false
    };
  },
  getInitialState: function getInitialState() {
    return {};
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
    this.setState({
      focused: true
    });
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    event.value = this.__parseGetValue(event.target.value);
    this.setState({
      focused: false
    });
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    event.value = this.__parseGetValue(event.target.value);

    if (event.nativeEvent.keyCode == 13) {
      console.log(event.value);
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  __onOptItemClick: function __onOptItemClick(opt, index) {
    this.setState({
      option: opt
    });
  },
  __optItemRender: function __optItemRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement("li", {
      onClick: function onClick() {
        return _this.__onOptItemClick(item, index);
      },
      key: index
    }, item);
  },
  __iconClickRender: function __iconClickRender() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "zr-search-input-options"
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.options,
      itemRender: this.__optItemRender
    }));
  },
  __renderOptions: function __renderOptions() {
    return /*#__PURE__*/React.createElement(popup.Dropdown, {
      className: "filter-opt",
      popover: {
        render: this.__iconClickRender,
        onWindowInsideContainerEvent: function onWindowInsideContainerEvent(event, popover) {
          return true;
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "option",
      onClick: this.__iconClick
    }, /*#__PURE__*/React.createElement("span", {
      className: "option-value"
    }, this.state.option), /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "caret-down",
      className: "svg-inline--fa fa-caret-down fa-w-10 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    }))));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-search-input', this.props.className)
    }, this.props.options && this.__renderOptions(), /*#__PURE__*/React.createElement("div", {
      className: "search"
    }, /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "search",
      className: "svg-inline--fa search-icon fa-search fa-w-16 icon",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
    })), /*#__PURE__*/React.createElement("input", {
      className: "search-input",
      type: "search",
      required: this.props.required,
      style: this.props.style,
      name: this.props.name,
      defaultValue: this.props.defaultValue || this.props.value,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onChange: this.__onChange,
      onFocus: this.__onFocus,
      onBlur: this.__onBlur,
      onKeyUp: this.__onKeyUp
    })));
  }
});

/***/ }),

/***/ "./TagInput.js":
/*!*********************!*\
  !*** ./TagInput.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

module.exports = React.createClass({
  displayName: 'ZRTagInput',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      disabled: false,
      readonly: null
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: []
    };
  },
  getValue: function getValue() {
    return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
  },
  __onKeyUp: function __onKeyUp(event) {
    var _value = event.target.innerText;

    if (event.nativeEvent.keyCode == 13 && _value) {
      event.stopPropagation();
      return event.target.innerHTML = '';
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  __onKeyDown: function __onKeyDown(event) {
    var _value = event.target.innerText;

    if (event.nativeEvent.keyCode == 13 && _value) {
      event.stopPropagation();
      this.state.value.push(_value);
      this.forceUpdate();
      event.value = this.state.value;
      this.props.onEnter && this.props.onEnter(event, this);
      this.props.onChange && this.props.onChange(event, this);
      return event.target.innerHTML = '';
    }
  },
  __onRootClick: function __onRootClick() {
    this.state.input.focus();
  },
  __tagRender: function __tagRender(tag, index) {
    return /*#__PURE__*/React.createElement("span", {
      className: "tag",
      key: index
    }, tag);
  },
  render: function render() {
    var _this = this;

    return /*#__PURE__*/React.createElement("div", {
      onClick: this.__onRootClick,
      className: znui.react.classname('zr-tag-input', this.props.className)
    }, this.state.value.map(this.__tagRender), /*#__PURE__*/React.createElement("div", {
      ref: function ref(input) {
        return _this.state.input = input;
      },
      className: "tag-input",
      contentEditable: "true",
      onKeyDown: this.__onKeyDown,
      onKeyUp: this.__onKeyUp
    }));
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
  'SearchInput': __webpack_require__(/*! ./SearchInput.js */ "./SearchInput.js"),
  'TagInput': __webpack_require__(/*! ./TagInput.js */ "./TagInput.js"),
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

/***/ }),

/***/ "znui-react":
/*!*********************!*\
  !*** external "zr" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zr"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vVGFnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vVGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJhdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJnZXRWYWx1ZSIsIl9fcGFyc2VHZXRWYWx1ZSIsImZpbmRET01Ob2RlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9fcGFyc2VTZXRWYWx1ZSIsInByb3BzIiwidHlwZSIsInNwbGl0IiwiX19vbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib25DaGFuZ2UiLCJfX29uRm9jdXMiLCJvbkZvY3VzIiwiX19vbkJsdXIiLCJvbkJsdXIiLCJfX29uS2V5VXAiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJvbkVudGVyIiwib25LZXlVcCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwicmVxdWlyZWQiLCJzdHlsZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJnZXRJbml0aWFsU3RhdGUiLCJfdmFsdWVzIiwiX3ZhbHVlIiwia2V5IiwicmVmcyIsInB1c2giLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpbmRleCIsImJpbmQiLCJzZXRTdGF0ZSIsIl9fb25JbnB1dENoYW5nZSIsIml0ZW0iLCJtYXAiLCJwb3B1cCIsImZvY3VzZWQiLCJjb25zb2xlIiwibG9nIiwiX19vbk9wdEl0ZW1DbGljayIsIm9wdCIsIm9wdGlvbiIsIl9fb3B0SXRlbVJlbmRlciIsIl9faWNvbkNsaWNrUmVuZGVyIiwib3B0aW9ucyIsIl9fcmVuZGVyT3B0aW9ucyIsIm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQiLCJwb3BvdmVyIiwiX19pY29uQ2xpY2siLCJzdGF0ZSIsImlubmVyVGV4dCIsInN0b3BQcm9wYWdhdGlvbiIsImlubmVySFRNTCIsIl9fb25LZXlEb3duIiwiZm9yY2VVcGRhdGUiLCJfX29uUm9vdENsaWNrIiwiaW5wdXQiLCJmb2N1cyIsIl9fdGFnUmVuZGVyIiwidGFnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUIsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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R0FBaUI7QUFDYixXQUFTSCxtQkFBTyxDQUFDLDhCQUFELENBREg7QUFFYixZQUFVQSxtQkFBTyxDQUFDLGdDQUFELENBRko7QUFHYixpQkFBZUEsbUJBQU8sQ0FBQywwQ0FBRCxDQUhUO0FBSWIsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRCxDQUpOO0FBS2IsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRDtBQUxOLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsNkJBQTZCLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBBbGVydCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkFsZXJ0JyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICBvbkNsaWNrOiBudWxsLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogJ+ehruiupCdcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcbiAgX19vbkNsaWNrOiBmdW5jdGlvbiBfX29uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICBpdGVtLmluZGV4ID0gaW5kZXg7XG5cbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cbiAgICBfcmVzdWx0ID0gaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhpdGVtLCB0aGlzKTtcblxuICAgIGlmIChfcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1hbGVydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWlubmVyXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIHRoaXMucHJvcHMuY29udGVudCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1idG5zXCJcbiAgICB9LCB0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWJ0blwiLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fX29uQ2xpY2soaXRlbSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBpdGVtLnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSkpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQWxlcnQ6IEFsZXJ0LFxuICBhbGVydDogZnVuY3Rpb24gYWxlcnQoY29udGVudCwgdGl0bGUsIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHJldHVybiBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCBfZXh0ZW5kcyh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgb25DbGljazogY2FsbGJhY2tcbiAgICB9LCBwcm9wcykpLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9KTtcbiAgfSxcbiAgY29uZmlybTogZnVuY3Rpb24gY29uZmlybShjb250ZW50LCB0aXRsZSwgX2NvbmZpcm0sIGNhbmNlbCwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyA9IHpuLmV4dGVuZCh7XG4gICAgICBjYW5jZWw6ICflj5bmtognLFxuICAgICAgY29uZmlybTogJ+ehruWumidcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHJldHVybiBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY2FuY2VsLFxuICAgICAgICBvbkNsaWNrOiBjYW5jZWxcbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY29uZmlybSxcbiAgICAgICAgb25DbGljazogX2NvbmZpcm1cbiAgICAgIH1dXG4gICAgfSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0pO1xuICB9LFxuICBwcm9tcHQ6IGZ1bmN0aW9uIHByb21wdChhcmd2KSB7XG4gICAgdmFyIF9hcmd2ID0gem4uZXh0ZW5kKHtcbiAgICAgIHRpdGxlOiBhcmd2LnRpdGxlLFxuICAgICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1pbnB1dFwiLFxuICAgICAgICBvbkNoYW5nZTogYXJndi5vbkNoYW5nZSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgIH0pLFxuICAgICAgY29uZmlybTogYXJndi5jb25maXJtLFxuICAgICAgY2FuY2VsOiBhcmd2LmNhbmNlbFxuICAgIH0sIGFyZ3YpO1xuXG4gICAgcmV0dXJuIG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgIGNvbnRlbnQ6IF9hcmd2LmNvbnRlbnQsXG4gICAgICB0aXRsZTogX2FyZ3YudGl0bGUsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiBfYXJndi5jYW5jZWxUZXh0IHx8ICflj5bmtognLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50LCBhbGVydCkge1xuICAgICAgICAgIHJldHVybiBfYXJndi5jYW5jZWwgJiYgX2FyZ3YuY2FuY2VsKGV2ZW50LCBhbGVydCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX2FyZ3YuY29uZmlybVRleHQgfHwgJ+ehruWumicsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQsIGFsZXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIF9hcmd2LmNvbmZpcm0gJiYgX2FyZ3YuY29uZmlybShldmVudCwgYWxlcnQpO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9KTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBEaWFsb2cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJEaWFsb2cnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbFxuICAgIH07XG4gIH0sXG4gIF9fb25DbG9zZTogZnVuY3Rpb24gX19vbkNsb3NlKGV2ZW50KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xvc2UgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50LCB0aGlzKTtcblxuICAgIGlmIChfcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctaGVhZGVyXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctdGl0bGVcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUpLCB0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgb25DbGljazogdGhpcy5fX29uQ2xvc2UsXG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLWNsb3NlXCJcbiAgICB9LCBcInhcIikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLWJvZHlcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBEaWFsb2c6IERpYWxvZyxcbiAgZGlhbG9nOiBmdW5jdGlvbiBkaWFsb2coYXJndikge1xuICAgIHJldHVybiBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywgYXJndiksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0pO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBwb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJykucG9wb3ZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERyb3Bkb3duOiBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdaUkRyb3Bkb3duJyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZXZlbnRUeXBlOiAnY2xpY2snXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfX2V2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RhcmdldCA9IHRoaXMuZ2V0UGFyZW50KGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgX3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cbiAgICAgIGlmIChfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcikge1xuICAgICAgICB2YXIgX3JlbmRlciA9IF9wb3BvdmVyLnJlbmRlcjtcblxuICAgICAgICBpZiAoem4uaXMoX3JlbmRlciwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICBpZiAoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgICAgIF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3JlbmRlcikge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcbiAgICAgICAgICBwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuICAgICAgICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICB0YXJnZXQ6IF90YXJnZXRcbiAgICAgICAgICB9LCBfcG9wb3ZlcikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkxvYWRlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgdGl0bGU6ICdMb2FkaW5nIC4uLiAnXG4gICAgfTtcbiAgfSxcbiAgX19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiBfX3JlbmRlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29udGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudGl0bGUpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImxvYWRlclwiLFxuICAgICAgICBcImRhdGEtbG9hZGVyXCI6IFwic3Bpbm5lclwiXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcbiAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUpKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1sb2FkZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogem51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKVxuICAgIH0sIHRoaXMuX19yZW5kZXJDb250ZW50KCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBMb2FkZXI6IExvYWRlcixcbiAgbG9hZGVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShhcmd2KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIGFyZ3YpLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbG9hZGVyID0gX3JlZjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IGZ1bmN0aW9uIGxvYWRpbmcodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHtcbiAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIE1vZGFsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTW9kYWwnLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlICYmIHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKF9kb20pO1xuXG4gICAgaWYgKF9yZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKF9kb20gJiYgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn0pO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1vZGFsOiBNb2RhbCxcbiAgbW9kYWw6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tb2RhbHMgPSBbXTtcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBudWxsO1xuICAgICAgICByZXR1cm4gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWYgPSBfcmVmMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBjb250ZW50KSwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IHpudWkuY2xhc3NuYW1lKCd6ci1wb3B1cC1tb2RhbCcsIG9wdGlvbnNbXCJjbGFzc1wiXSksXG4gICAgICAgICAgc3R5bGU6IHpudWkuc3R5bGUob3B0aW9ucy5zdHlsZSlcbiAgICAgICAgfSwgdGhpcy5fZG9tKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLl9tb2RhbHMucHVzaChfcmVmKTtcblxuICAgICAgICAgIG9wdGlvbnMucmVmICYmIG9wdGlvbnMucmVmKF9yZWYpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfbW9kYWwgPSB0aGlzLl9tb2RhbHMucG9wKCk7XG5cbiAgICAgICAgaWYgKF9tb2RhbCkge1xuICAgICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBjbG9zZUFsbDogZnVuY3Rpb24gY2xvc2VBbGwoZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFscy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGRlbGF5LCB0aGlzLmNsb3NlQWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHNpemU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRZUEVfSUNPTlMgPSB7XG4gIGhlYXJ0OiAnTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6JyxcbiAgc2Vjb25kYXJ5OiAnTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0eicsXG4gIHN1Y2Nlc3M6ICdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6JyxcbiAgd2FybmluZzogJ001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLFxuICBlcnJvcjogJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonLFxuICBpbmZvOiAnTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHonXG59O1xudmFyIE5vdGlmaWVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTm90aWZpY2F0aW9uJyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE1MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24tb3V0Jyk7XG5cbiAgICBfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaWNvblwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIGQ6IFRZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlIHx8ICdpbmZvJ11cbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjbG9zZSBmYSBmYS10aW1lc1wiLFxuICAgICAgb25DbGljazogdGhpcy5vdXRcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5vdGlmaWVyOiBOb3RpZmllcixcbiAgbm90aWZpZXI6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnenItcG9wdXAtbm90aWZpZXItY29udGFpbmVyJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpZXIsIHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICAgIH0pLCB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIHRoaXMuX2RvbSkpO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8oY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBQb3BvdmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSUG9wb3ZlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoaWRkZW5IZWlnaHQ6IDUsXG4gICAgICBjbG9zZWFibGU6IGZhbHNlLFxuICAgICAgcG9wb3ZlcldpZHRoOiBudWxsLFxuICAgICAgcG9wb3ZlckhlaWdodDogbnVsbFxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcnJvd0NsYXNzTmFtZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ldmVudCkge1xuICAgICAgdGhpcy5fZXZlbnRUeXBlID0gdGhpcy5wcm9wcy5ldmVudC50eXBlIHx8IHRoaXMucHJvcHMuZXZlbnQ7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25Db250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKF9yZXN1bHQgPT09IHRydWUpIHsvL2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksIHRydWUpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgX19pc01hdGNoUGFyZW50OiBmdW5jdGlvbiBfX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQgIT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUsIHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBfX29uV2luZG93Q2xpY2s6IGZ1bmN0aW9uIF9fb25XaW5kb3dDbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5fX2lzTWF0Y2hQYXJlbnQoZXZlbnQudGFyZ2V0LCB0aGlzLl9kb20pKSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSh0YWcpIHtcbiAgICAvL3puLmluZm8oJ1BvcG92ZXIuY2xvc2U6JywgdGFnKTtcbiAgICBpZiAodGhpcy5fZG9tKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLl9kb20ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZSA9ICcnO1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9tID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50VHlwZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmaXhQb3NpdGlvbjogZnVuY3Rpb24gZml4UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgdmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXG4gICAgdmFyIF90ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9wb3BvdmVyV2lkdGggPSB0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCB8fCBfdC53aWR0aCxcbiAgICAgICAgX3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuICAgIGlmIChfcG9wb3ZlcldpZHRoID09ICcxMDAlJykge1xuICAgICAgX3BvcG92ZXJXaWR0aCA9IF90LndpZHRoO1xuICAgIH1cblxuICAgIGlmIChfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZGVuICYmIHRoaXMucHJvcHMub25IaWRkZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX3QueCArIF9wb3BvdmVyV2lkdGggPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpIHtcbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LXJpZ2h0Jyk7XG5cbiAgICAgIF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfbGVmdCA9IF90Lng7XG5cbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblxuICAgICAgX3BvcG92ZXIuc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAoX3QueSArIF9wb3BvdmVySGVpZ2h0ID4gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCkge1xuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJyk7XG5cbiAgICAgIF90b3AgPSBfdC5oZWlnaHQgKyAxMDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLmJvdHRvbSA9IF90b3AgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90LnkgKyBfdC5oZWlnaHQgKyAxMDtcblxuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cbiAgICAgIF9wb3BvdmVyLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCkge1xuICAgICAgX3BvcG92ZXIuc3R5bGUud2lkdGggPSBfcG9wb3ZlcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0KSB7XG4gICAgICBpZiAoX3BvcG92ZXIub2Zmc2V0SGVpZ2h0ICE9IF9wb3BvdmVySGVpZ2h0KSB7XG4gICAgICAgIF9wb3BvdmVyLnN0eWxlLmhlaWdodCA9IF9wb3BvdmVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6bi1hbmltYXRlLXNjYWxlLXVwJyk7XG5cbiAgICBfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfc3R5bGUgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgX3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3N0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtcG9wb3ZlciB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci13aGl0ZScsIHRoaXMuc3RhdGUuYXJyb3dDbGFzc05hbWUpXG4gICAgfSwgdGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJwb3BvdmVyLWNsb3NlIHpyLWhvdmVyLXNlbGYtbG9hZGluZ1wiLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsb3NlKCdzZWxmIGNsb3NlJyk7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiBcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZDogXCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCJcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiAoem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnN0eWxlKSwgX3N0eWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBQb3BvdmVyOiBQb3BvdmVyLFxuICBwb3BvdmVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNldCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3puLnBvcG92ZXI6cmVuZGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKSwgdGhpcy5fcG9wb3ZlcjtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UodGFnKSB7XG4gICAgICAgIGlmICh0aGlzLl9wb3BvdmVyKSB7XG4gICAgICAgICAgdGhpcy5fcG9wb3Zlci5jbG9zZSh0YWcpO1xuXG4gICAgICAgICAgdGhpcy5fcG9wb3ZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlRvYXN0JyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE4MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1vdXQnKTtcblxuICAgIF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC10b2FzdCB0b2FzdC1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb2FzdDogVG9hc3QsXG4gIHRvYXN0OiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb2FzdCwge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgICAgfSksIF9kb20pO1xuXG4gICAgICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdkYW5nZXInLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJUb29sdGlwJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycm93Q2xhc3NOYW1lOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgfSxcbiAgZml4UG9zaXRpb246IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLicpO1xuICAgIH1cblxuICAgIHZhciBfZG9tV2lkdGggPSB0aGlzLl9kb20ub2Zmc2V0V2lkdGgsXG4gICAgICAgIF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBfdGFyZ2V0ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9jbGFzc05hbWUgPSAnJztcblxuICAgIGlmIChfdGFyZ2V0LnggKyBfZG9tV2lkdGggPiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoKSB7XG4gICAgICBfbGVmdCA9IF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoX3RhcmdldC55ICsgX2RvbUhlaWdodCA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuICAgIH1cblxuICAgIGlmIChfbGVmdCA8IDApIHtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWxlZnQnO1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LnggKyBfdGFyZ2V0LndpZHRoICsgNDtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgKyA0O1xuICAgIH1cblxuICAgIHRoaXMuX2RvbS5zdHlsZS50b3AgPSBfdG9wICsgJ3B4JztcbiAgICB0aGlzLl9kb20uc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICBfY2xhc3NOYW1lICYmIHRoaXMuX2RvbS5jbGFzc0xpc3QuYWRkKF9jbGFzc05hbWUpO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cbiAgICBpZiAoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuXG4gICAgaWYgKHpuLmlzKGNhbGxiYWNrLCAnZnVuY3Rpb24nKSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVG9vbHRpcDogVG9vbHRpcCxcbiAgdG9vbHRpcDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtdG9vbHRpcC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICB9LFxuICAgICAgX19vbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gX19vbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmcnKTtcbiAgICAgIH0sXG4gICAgICBfX29uV2luZG93TW91c2VPdmVyOiBmdW5jdGlvbiBfX29uV2luZG93TW91c2VPdmVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmIChfdGFyZ2V0ICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlICYmIF90YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKSkge1xuICAgICAgICAgIGlmICh0aGlzLl90b29sdGlwICYmIHRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0ICE9PSBfdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlbmRlcihfdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJyksIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCkge1xuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9vbHRpcCA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKTtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXApIHtcbiAgICAgICAgICBpZiAoem4uaXMoY2FsbGJhY2ssICdzdHJpbmcnKSAmJiBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIHpuLmRlYnVnKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSk7XG5cbiAgICAgICAgICB0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHpuLmRlZXBBc3NpZ25zKHt9LCByZXF1aXJlKCcuL0FsZXJ0JyksIHJlcXVpcmUoJy4vRGlhbG9nJyksIHJlcXVpcmUoJy4vRHJvcGRvd24nKSwgcmVxdWlyZSgnLi9Mb2FkZXInKSwgcmVxdWlyZSgnLi9Nb2RhbCcpLCByZXF1aXJlKCcuL05vdGlmaWVyJyksIHJlcXVpcmUoJy4vUG9wb3ZlcicpLCByZXF1aXJlKCcuL1RvYXN0JyksIHJlcXVpcmUoJy4vVG9vbHRpcCcpKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIihmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXX0pKHRoaXMsZnVuY3Rpb24obil7dmFyIG89e307ZnVuY3Rpb24gcihlKXtpZihvW2VdKXtyZXR1cm4gb1tlXS5leHBvcnRzfXZhciB0PW9bZV09e2k6ZSxsOmZhbHNlLGV4cG9ydHM6e319O25bZV0uY2FsbCh0LmV4cG9ydHMsdCx0LmV4cG9ydHMscik7dC5sPXRydWU7cmV0dXJuIHQuZXhwb3J0c31yLm09bjtyLmM9bztyLmQ9ZnVuY3Rpb24oZSx0LG4pe2lmKCFyLm8oZSx0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTp0cnVlLGdldDpufSl9fTtyLnI9ZnVuY3Rpb24oZSl7aWYodHlwZW9mIFN5bWJvbCE9PVwidW5kZWZpbmVkXCImJlN5bWJvbC50b1N0cmluZ1RhZyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KX07ci50PWZ1bmN0aW9uKHQsZSl7aWYoZSYxKXQ9cih0KTtpZihlJjgpcmV0dXJuIHQ7aWYoZSY0JiZ0eXBlb2YgdD09PVwib2JqZWN0XCImJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO3IucihuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTp0cnVlLHZhbHVlOnR9KTtpZihlJjImJnR5cGVvZiB0IT1cInN0cmluZ1wiKWZvcih2YXIgbyBpbiB0KXIuZChuLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59O3Iubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24gZSgpe3JldHVybiB0W1wiZGVmYXVsdFwiXX06ZnVuY3Rpb24gZSgpe3JldHVybiB0fTtyLmQoZSxcImFcIixlKTtyZXR1cm4gZX07ci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfTtyLnA9XCJcIjtyZXR1cm4gcihyLnM9NCl9KFtmdW5jdGlvbihlLHQpeyhmdW5jdGlvbigpe2UuZXhwb3J0cz10aGlzW1wiUmVhY3RcIl19KSgpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbigpe2UuZXhwb3J0cz10aGlzW1wiUmVhY3RET01cIl19KSgpfSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaSgpe2k9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSl7ZVtvXT1uW29dfX19cmV0dXJuIGV9O3JldHVybiBpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcz16bnVpLlJlYWN0fHxuKDApO3ZhciBhPXpudWkuUmVhY3RET018fG4oMSk7dmFyIGw9cy5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUk1vZGFsXCIsY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24gZSgpe3RoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCYmdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uIGUodCl7aWYoIXRoaXMuX19pc01vdW50ZWQpe3JldHVybiBmYWxzZX12YXIgbj1hLmZpbmRET01Ob2RlKHRoaXMpO3ZhciBvPXRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlJiZ0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShuKTtpZihvPT09ZmFsc2Upe3JldHVybiBmYWxzZX1pZihuJiZuLnBhcmVudE5vZGUucGFyZW50Tm9kZSl7bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobi5wYXJlbnROb2RlKTthLnVubW91bnRDb21wb25lbnRBdE5vZGUobi5wYXJlbnROb2RlKX10aGlzLnByb3BzLm9uRGVzdHJveSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTt0JiZ0KCl9LHJlbmRlcjpmdW5jdGlvbiBlKCl7cmV0dXJuIHMuY3JlYXRlRWxlbWVudChzLkZyYWdtZW50LG51bGwsdGhpcy5wcm9wcy5jaGlsZHJlbil9fSk7ZS5leHBvcnRzPXtNb2RhbDpsLG1vZGFsOnpuLkNsYXNzKHtzdGF0aWM6dHJ1ZSxtZXRob2RzOntpbml0OmZ1bmN0aW9uIGUoKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtbW9kYWwtY29udGFpbmVyXCJ9KTt0aGlzLl9tb2RhbHM9W119LGNyZWF0ZTpmdW5jdGlvbiBlKHQsbil7dmFyIG89dGhpczt2YXIgcj1udWxsO3JldHVybiBhLnJlbmRlcihzLmNyZWF0ZUVsZW1lbnQobCxpKHt9LG4se3JlZjpmdW5jdGlvbiBlKHQpe3JldHVybiByPXR9fSksdCksem4uZG9tLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6em51aS5jbGFzc25hbWUoXCJ6ci1wb3B1cC1tb2RhbFwiLG5bXCJjbGFzc1wiXSksc3R5bGU6em51aS5zdHlsZShuLnN0eWxlKX0sdGhpcy5fZG9tKSxmdW5jdGlvbigpe28uX21vZGFscy5wdXNoKHIpO24ucmVmJiZuLnJlZihyKX0pfSxjbG9zZTpmdW5jdGlvbiBlKHQsbil7dmFyIG89dGhpcy5fbW9kYWxzLnBvcCgpO2lmKG8pe2lmKHQpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gby5kZXN0cm95KG4pfSx0KX1lbHNle28uZGVzdHJveShuKX19cmV0dXJuIHRoaXN9LGNsb3NlQWxsOmZ1bmN0aW9uIGUodCl7aWYodGhpcy5fbW9kYWxzLmxlbmd0aCl7dGhpcy5jbG9zZSh0LHRoaXMuY2xvc2VBbGwpfXJldHVybiB0aGlzfSxzaXplOmZ1bmN0aW9uIGUoKXtyZXR1cm4gdGhpcy5fbW9kYWxzLmxlbmd0aH19fSl9fSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gbygpe289T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSl7ZVtvXT1uW29dfX19cmV0dXJuIGV9O3JldHVybiBvLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcj16bnVpLlJlYWN0fHxuKDApO3ZhciBpPXpudWkuUmVhY3RET018fG4oMSk7dmFyIHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUlBvcG92ZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24gZSgpe3JldHVybntoaWRkZW5IZWlnaHQ6NSxjbG9zZWFibGU6ZmFsc2UscG9wb3ZlcldpZHRoOm51bGwscG9wb3ZlckhlaWdodDpudWxsfX0sZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uIGUoKXtyZXR1cm57YXJyb3dDbGFzc05hbWU6XCJcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uIGUoKXt0aGlzLl9kb209aS5maW5kRE9NTm9kZSh0aGlzKTtpZih0aGlzLnByb3BzLmV2ZW50KXt0aGlzLl9ldmVudFR5cGU9dGhpcy5wcm9wcy5ldmVudC50eXBlfHx0aGlzLnByb3BzLmV2ZW50O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSx0aGlzLl9fb25XaW5kb3dDbGljayxmYWxzZSk7dGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucHJvcHMub25Db250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KGUsdGhpcyk7aWYodD09PXRydWUpe319LmJpbmQodGhpcyksdHJ1ZSk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpfS5iaW5kKHRoaXMpLDApfXRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQmJnRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQodGhpcyl9LF9faXNNYXRjaFBhcmVudDpmdW5jdGlvbiBlKHQsbil7aWYodCl7aWYodC50YWdOYW1lPT1cIkJPRFlcInx8dC50YWdOYW1lPT1cIkhUTUxcIil7cmV0dXJuIGZhbHNlfWlmKHQhPT1uKXtyZXR1cm4gdGhpcy5fX2lzTWF0Y2hQYXJlbnQodC5wYXJlbnROb2RlLG4pfWVsc2V7cmV0dXJuIHRydWV9fWVsc2V7cmV0dXJuIHRydWV9fSxfX29uV2luZG93Q2xpY2s6ZnVuY3Rpb24gZSh0KXtpZighdGhpcy5fX2lzTWF0Y2hQYXJlbnQodC50YXJnZXQsdGhpcy5fZG9tKSl7dmFyIG49dGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudCh0LHRoaXMpO2lmKG4hPT10cnVlKXt0aGlzLmNsb3NlKFwiUG9wb3Zlcjogb24gd2luZG93IG91dHNpZGUgY29udGFpbmVyIGV2ZW50XCIpfX1lbHNle3ZhciBuPXRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50KHQsdGhpcyk7aWYobj09PXRydWUpe3RoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKX19fSxjbG9zZTpmdW5jdGlvbiBlKHQpe2lmKHRoaXMuX2RvbSl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLHRoaXMuX19vbldpbmRvd0NsaWNrLGZhbHNlKTtpZih0aGlzLl9kb20ucGFyZW50Tm9kZSl7dGhpcy5fZG9tLnBhcmVudE5vZGUuc3R5bGU9XCJcIjtpLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tLnBhcmVudE5vZGUpfXRoaXMuX2RvbT1udWxsO3RoaXMuX2V2ZW50VHlwZT1udWxsfX0sZml4UG9zaXRpb246ZnVuY3Rpb24gZSh0KXt2YXIgbj10aGlzLl9kb207dmFyIG89em4uZG9tLmdldFBvc2l0aW9uKHQpLHI9dGhpcy5wcm9wcy5wb3BvdmVyV2lkdGh8fG8ud2lkdGgsaT10aGlzLnByb3BzLnBvcG92ZXJIZWlnaHR8fHpuLmRvbS5nZXRQb3NpdGlvbihuKS5oZWlnaHQscz1udWxsLGE9bnVsbCxsPVtdO2lmKHI9PVwiMTAwJVwiKXtyPW8ud2lkdGh9aWYoaTx0aGlzLnByb3BzLmhpZGRlbkhlaWdodCl7dGhpcy5wcm9wcy5vbkhpZGRlbiYmdGhpcy5wcm9wcy5vbkhpZGRlbigpO3JldHVybn1pZihvLngrcj53aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpe2wucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1yaWdodFwiKTtzPWRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgtby54LW8ud2lkdGg7bi5zdHlsZS5yaWdodD1zK1wicHhcIjtuLnBhcmVudE5vZGUuc3R5bGUucmlnaHQ9XCIwcHhcIn1lbHNle3M9by54O2wucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1sZWZ0XCIpO24uc3R5bGUubGVmdD1zK1wicHhcIn1pZihvLnkraT53aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0KXtsLnB1c2goXCJ6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tXCIpO2E9by5oZWlnaHQrMTA7bi5zdHlsZS5ib3R0b209YStcInB4XCI7bi5wYXJlbnROb2RlLnN0eWxlLmJvdHRvbT1cIjBweFwifWVsc2V7YT1vLnkrby5oZWlnaHQrMTA7bC5wdXNoKFwienItYXJyb3ctZGlyZWN0aW9uLXRvcFwiKTtuLnN0eWxlLnRvcD1hK1wicHhcIn1pZih0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCl7bi5zdHlsZS53aWR0aD1yK1wicHhcIn1pZih0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQpe2lmKG4ub2Zmc2V0SGVpZ2h0IT1pKXtuLnN0eWxlLmhlaWdodD1pK1wicHhcIn19bi5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiO2wucHVzaChcInpuLWFuaW1hdGUtc2NhbGUtdXBcIik7bi5jbGFzc05hbWU9bi5jbGFzc05hbWUrXCIgXCIrbC5qb2luKFwiIFwiKX0scmVuZGVyOmZ1bmN0aW9uIGUoKXt2YXIgdD10aGlzO3ZhciBuPXt9O2lmKHRoaXMucHJvcHMuaGVpZ2h0KXtuLm1heEhlaWdodD10aGlzLnByb3BzLmhlaWdodCtcInB4XCJ9ZWxzZXtuLmhlaWdodD1cImF1dG9cIn1yZXR1cm4gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGVcIix0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0sdGhpcy5wcm9wcy5jbG9zZWFibGUmJnIuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIixvbkNsaWNrOmZ1bmN0aW9uIGUoKXtyZXR1cm4gdC5jbG9zZShcInNlbGYgY2xvc2VcIil9fSxyLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLGZvY3VzYWJsZTpcImZhbHNlXCIsXCJkYXRhLXByZWZpeFwiOlwiZmFzXCIsY2xhc3NOYW1lOlwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIixyb2xlOlwiaW1nXCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHZpZXdCb3g6XCIwIDAgNTEyIDUxMlwifSxyLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2ZpbGw6XCJjdXJyZW50Q29sb3JcIixkOlwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwifSkpKSxyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOih6bi5leHRlbmQoe30sdGhpcy5wcm9wcy5zdHlsZSksbil9LHRoaXMucHJvcHMuY29udGVudCkpfX0pO2UuZXhwb3J0cz17UG9wb3ZlcjpzLHBvcG92ZXI6em4uQ2xhc3Moe3N0YXRpYzp0cnVlLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24gZSgpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwifSl9LHJlbmRlcjpmdW5jdGlvbiBlKHQsbil7aWYobiYmbi5yZXNldCl7dGhpcy5jbG9zZShcInpuLnBvcG92ZXI6cmVuZGVyXCIpfXJldHVybiB0aGlzLl9wb3BvdmVyPWkucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLG8oe30sbix7Y29udGVudDp0fSkpLHRoaXMuX2RvbSksdGhpcy5fcG9wb3Zlcn0sY2xvc2U6ZnVuY3Rpb24gZSh0KXtpZih0aGlzLl9wb3BvdmVyKXt0aGlzLl9wb3BvdmVyLmNsb3NlKHQpO3RoaXMuX3BvcG92ZXI9bnVsbH1yZXR1cm4gdGhpc319fSl9fSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPXpuLmRlZXBBc3NpZ25zKHt9LG4oNSksbig2KSxuKDcpLG4oOCksbigyKSxuKDkpLG4oMyksbigxMCksbigxMSkpfSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gaSgpe2k9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSl7ZVtvXT1uW29dfX19cmV0dXJuIGV9O3JldHVybiBpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgYT16bnVpLlJlYWN0fHxuKDApO3ZhciBsPW4oMikubW9kYWw7dmFyIGM9YS5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkFsZXJ0XCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uIGUoKXtyZXR1cm57dGl0bGU6XCJcIixjb250ZW50Om51bGwsb25DbGljazpudWxsLGJ1dHRvbnM6W3t0ZXh0Olwi56Gu6K6kXCJ9XX19LF9fb25DbGljazpmdW5jdGlvbiBlKHQsbil7dC5pbmRleD1uO3ZhciBvPXRoaXMucHJvcHMub25DbGljayYmdGhpcy5wcm9wcy5vbkNsaWNrKHQsdGhpcyk7bz10Lm9uQ2xpY2smJnQub25DbGljayh0LHRoaXMpO2lmKG8hPT1mYWxzZSl7bC5jbG9zZSgpfX0scmVuZGVyOmZ1bmN0aW9uIGUoKXtyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWFsZXJ0XCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJhbGVydC1pbm5lclwifSx0aGlzLnByb3BzLnRpdGxlJiZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtdGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSksdGhpcy5wcm9wcy5jb250ZW50JiZhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtY29udGVudFwifSx0aGlzLnByb3BzLmNvbnRlbnQpKSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtYnRuc1wifSx0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uKHQsbil7dmFyIG89dGhpcztyZXR1cm4gYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2tleTpuLGNsYXNzTmFtZTpcImFsZXJ0LWJ0blwiLG9uQ2xpY2s6ZnVuY3Rpb24gZSgpe3JldHVybiBvLl9fb25DbGljayh0LG4pfX0sdC50ZXh0KX0uYmluZCh0aGlzKSkpKX19KTtlLmV4cG9ydHM9e0FsZXJ0OmMsYWxlcnQ6ZnVuY3Rpb24gZSh0LG4sbyxyKXtyZXR1cm4gbC5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGMsaSh7Y29udGVudDp0LHRpdGxlOm4sb25DbGljazpvfSxyKSkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0pfSxjb25maXJtOmZ1bmN0aW9uIGUodCxuLG8scixpKXt2YXIgcz16bi5leHRlbmQoe2NhbmNlbDpcIuWPlua2iFwiLGNvbmZpcm06XCLnoa7lrppcIn0saSk7cmV0dXJuIGwuY3JlYXRlKGEuY3JlYXRlRWxlbWVudChjLHtjb250ZW50OnQsdGl0bGU6bixidXR0b25zOlt7dGV4dDpzLmNhbmNlbCxvbkNsaWNrOnJ9LHt0ZXh0OnMuY29uZmlybSxvbkNsaWNrOm99XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9KX0scHJvbXB0OmZ1bmN0aW9uIGUodCl7dmFyIG89em4uZXh0ZW5kKHt0aXRsZTp0LnRpdGxlLGNvbnRlbnQ6YS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIix7Y2xhc3NOYW1lOlwiYWxlcnQtaW5wdXRcIixvbkNoYW5nZTp0Lm9uQ2hhbmdlLHR5cGU6XCJ0ZXh0XCJ9KSxjb25maXJtOnQuY29uZmlybSxjYW5jZWw6dC5jYW5jZWx9LHQpO3JldHVybiBsLmNyZWF0ZShhLmNyZWF0ZUVsZW1lbnQoYyx7Y29udGVudDpvLmNvbnRlbnQsdGl0bGU6by50aXRsZSxidXR0b25zOlt7dGV4dDpvLmNhbmNlbFRleHR8fFwi5Y+W5raIXCIsb25DbGljazpmdW5jdGlvbiBlKHQsbil7cmV0dXJuIG8uY2FuY2VsJiZvLmNhbmNlbCh0LG4pfX0se3RleHQ6by5jb25maXJtVGV4dHx8XCLnoa7lrppcIixvbkNsaWNrOmZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gby5jb25maXJtJiZvLmNvbmZpcm0odCxuKX19XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9KX19fSxmdW5jdGlvbihlLHQsbil7dmFyIG89em51aS5SZWFjdHx8bigwKTt2YXIgcj1uKDIpLm1vZGFsO3ZhciBpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJEaWFsb2dcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24gZSgpe3JldHVybnt0aXRsZTpcIlwiLGNvbnRlbnQ6bnVsbH19LF9fb25DbG9zZTpmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXMucHJvcHMub25DbG9zZSYmdGhpcy5wcm9wcy5vbkNsb3NlKHQsdGhpcyk7aWYobiE9PWZhbHNlKXtyLmNsb3NlKCl9fSxyZW5kZXI6ZnVuY3Rpb24gZSgpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZGlhbG9nXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctaGVhZGVyXCJ9LHRoaXMucHJvcHMudGl0bGUmJm8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctdGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSksdGhpcy5wcm9wcy5jbG9zZWFibGUmJm8uY3JlYXRlRWxlbWVudChcInNwYW5cIix7b25DbGljazp0aGlzLl9fb25DbG9zZSxjbGFzc05hbWU6XCJkaWFsb2ctY2xvc2VcIn0sXCJ4XCIpKSxvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZGlhbG9nLWJvZHlcIn0sdGhpcy5wcm9wcy5jb250ZW50KSl9fSk7ZS5leHBvcnRzPXtEaWFsb2c6aSxkaWFsb2c6ZnVuY3Rpb24gZSh0KXtyZXR1cm4gci5jcmVhdGUoby5jcmVhdGVFbGVtZW50KGksdCkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0pfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgbz16bnVpLlJlYWN0fHxuKDApO3ZhciByPXpudWkuUmVhY3RET018fG4oMSk7dmFyIGk9bigzKS5wb3BvdmVyO2UuZXhwb3J0cz17RHJvcGRvd246by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkRyb3Bkb3duXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uIGUoKXtyZXR1cm57ZGlzYWJsZWQ6ZmFsc2UsZXZlbnRUeXBlOlwiY2xpY2tcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uIGUoKXtyLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsdGhpcy5fX2V2ZW50SGFuZGxlcixmYWxzZSl9LGNvbXBvbmVudFdpbGxVbm1vdW50OmZ1bmN0aW9uIGUoKXtyLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsdGhpcy5fX2V2ZW50SGFuZGxlcixmYWxzZSl9LGdldFBhcmVudDpmdW5jdGlvbiBlKHQpe2lmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwienItcG9wdXAtZHJvcGRvd25cIikpe3JldHVybiB0fWVsc2V7cmV0dXJuIHRoaXMuZ2V0UGFyZW50KHQucGFyZW50Tm9kZSl9fSxfX2V2ZW50SGFuZGxlcjpmdW5jdGlvbiBlKHQpe2lmKHRoaXMucHJvcHMuZGlzYWJsZWQpe3JldHVybn12YXIgbj10aGlzLmdldFBhcmVudCh0LnRhcmdldCksbz16bi5leHRlbmQoe30sdGhpcy5wcm9wcy5wb3BvdmVyKTtpZihuJiZvJiZvLnJlbmRlcil7dmFyIHI9by5yZW5kZXI7aWYoem4uaXMocixcImZ1bmN0aW9uXCIpKXtpZighci5wcm90b3R5cGV8fCFyLnByb3RvdHlwZS5yZW5kZXIpe3I9cih0LHRoaXMpfX1pZihyKXt0LnN0b3BQcm9wYWdhdGlvbigpO28ucmVuZGVyPW51bGw7ZGVsZXRlIG8ucmVuZGVyO2kucmVuZGVyKHIsem4uZXh0ZW5kKHtyZXNldDp0cnVlLGV2ZW50OnQsdGFyZ2V0Om59LG8pKX19fSxyZW5kZXI6ZnVuY3Rpb24gZSgpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZX0sdGhpcy5wcm9wcy5jaGlsZHJlbil9fSl9fSxmdW5jdGlvbihlLHQsbil7dmFyIG89em51aS5SZWFjdHx8bigwKTt2YXIgcj1uKDIpLm1vZGFsO3ZhciBpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJMb2FkZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24gZSgpe3JldHVybntjb250ZW50Om51bGwsdGl0bGU6XCJMb2FkaW5nIC4uLiBcIn19LF9fcmVuZGVyQ29udGVudDpmdW5jdGlvbiBlKCl7aWYodGhpcy5wcm9wcy5jb250ZW50KXtyZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50fWVsc2UgaWYodGhpcy5wcm9wcy50aXRsZSl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChvLkZyYWdtZW50LG51bGwsby5jcmVhdGVFbGVtZW50KFwiaVwiLHtjbGFzc05hbWU6XCJsb2FkZXJcIixcImRhdGEtbG9hZGVyXCI6XCJzcGlubmVyXCJ9KSxvLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInRpdGxlXCJ9LHRoaXMucHJvcHMudGl0bGUpKX19LHJlbmRlcjpmdW5jdGlvbiBlKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1sb2FkZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0sdGhpcy5fX3JlbmRlckNvbnRlbnQoKSl9fSk7ZS5leHBvcnRzPXtMb2FkZXI6aSxsb2FkZXI6em4uQ2xhc3Moe3N0YXRpYzp0cnVlLG1ldGhvZHM6e2NyZWF0ZTpmdW5jdGlvbiBlKHQpe3ZhciBuPXRoaXM7aWYodGhpcy5fbG9hZGVyKXt0aGlzLl9sb2FkZXIuZGVzdHJveSgpfXJldHVybiByLmNyZWF0ZShvLmNyZWF0ZUVsZW1lbnQoaSx0KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwiLHJlZjpmdW5jdGlvbiBlKHQpe3JldHVybiBuLl9sb2FkZXI9dH19KX0sbG9hZGluZzpmdW5jdGlvbiBlKHQpe3JldHVybiB0aGlzLmNyZWF0ZSh7dGl0bGU6dH0pfSxjbG9zZTpmdW5jdGlvbiBlKCl7aWYodGhpcy5fbG9hZGVyKXt0aGlzLl9sb2FkZXIuZGVzdHJveSgpfXJldHVybiB0aGlzfX19KX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj16bnVpLlJlYWN0fHxuKDApO3ZhciBpPXpudWkuUmVhY3RET018fG4oMSk7dmFyIG89e2hlYXJ0OlwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCIsc2Vjb25kYXJ5OlwiTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0elwiLHN1Y2Nlc3M6XCJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6XCIsd2FybmluZzpcIk01NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHpcIixlcnJvcjpcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIixpbmZvOlwiTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHpcIn07dmFyIHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUk5vdGlmaWNhdGlvblwiLGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uIGUoKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxNTAwKX0sb3V0OmZ1bmN0aW9uIGUoKXt2YXIgdD1pLmZpbmRET01Ob2RlKHRoaXMpO3QuY2xhc3NMaXN0LmFkZChcIm5vdGlmaWNhdGlvbi1vdXRcIik7dC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsZnVuY3Rpb24oKXtpZih0LnBhcmVudE5vZGUucGFyZW50Tm9kZSl7dC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5wYXJlbnROb2RlKTtpLnVubW91bnRDb21wb25lbnRBdE5vZGUodC5wYXJlbnROb2RlKX19LGZhbHNlKX0scmVuZGVyOmZ1bmN0aW9uIGUoKXtyZXR1cm4gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pblwiLHRoaXMucHJvcHMudHlwZSl9LHIuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJpY29uXCJ9LHIuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsZm9jdXNhYmxlOlwiZmFsc2VcIixcImRhdGEtcHJlZml4XCI6XCJmYXNcIixjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlLHJvbGU6XCJpbWdcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCA1MTIgNTEyXCJ9LHIuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbDpcImN1cnJlbnRDb2xvclwiLGQ6b1t0aGlzLnByb3BzLnR5cGV8fFwiaW5mb1wiXX0pKSksci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSxyLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImNsb3NlIGZhIGZhLXRpbWVzXCIsb25DbGljazp0aGlzLm91dH0pKX19KTtlLmV4cG9ydHM9e05vdGlmaWVyOnMsbm90aWZpZXI6em4uQ2xhc3Moe3N0YXRpYzp0cnVlLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24gZSgpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXJcIn0pfSxvcGVuOmZ1bmN0aW9uIGUodCxuLG8pe2kucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLHt0eXBlOnQsY29udGVudDpuLGRlbGF5Om99KSx6bi5kb20uY3JlYXRlRWxlbWVudChcImRpdlwiLHt9LHRoaXMuX2RvbSkpfSxzdWNjZXNzOmZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gdGhpcy5vcGVuKFwic3VjY2Vzc1wiLHQsbil9LHdhcm5pbmc6ZnVuY3Rpb24gZSh0LG4pe3JldHVybiB0aGlzLm9wZW4oXCJ3YXJuaW5nXCIsdCxuKX0sZXJyb3I6ZnVuY3Rpb24gZSh0LG4pe3JldHVybiB0aGlzLm9wZW4oXCJlcnJvclwiLHQsbil9LGluZm86ZnVuY3Rpb24gZSh0LG4pe3JldHVybiB0aGlzLm9wZW4oXCJpbmZvXCIsdCxuKX19fSl9fSxmdW5jdGlvbihlLHQsbil7dmFyIGk9em51aS5SZWFjdHx8bigwKTt2YXIgcz16bnVpLlJlYWN0RE9NfHxuKDEpO3ZhciBhPWkuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJUb2FzdFwiLGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uIGUoKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxODAwKX0sb3V0OmZ1bmN0aW9uIGUoKXt2YXIgdD1zLmZpbmRET01Ob2RlKHRoaXMpO3QuY2xhc3NMaXN0LmFkZChcInRvYXN0LW91dFwiKTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixmdW5jdGlvbigpe3QucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQucGFyZW50Tm9kZSk7cy51bm1vdW50Q29tcG9uZW50QXROb2RlKHQucGFyZW50Tm9kZS5wYXJlbnROb2RlKX0sZmFsc2UpfSxyZW5kZXI6ZnVuY3Rpb24gZSgpe3JldHVybiBpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9hc3QgdG9hc3QtaW5cIix0aGlzLnByb3BzLnR5cGUpfSx0aGlzLnByb3BzLmNvbnRlbnQpfX0pO2UuZXhwb3J0cz17VG9hc3Q6YSx0b2FzdDp6bi5DbGFzcyh7c3RhdGljOnRydWUsbWV0aG9kczp7aW5pdDpmdW5jdGlvbiBlKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwifSl9LG9wZW46ZnVuY3Rpb24gZSh0LG4sbyl7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtzLnJlbmRlcihpLmNyZWF0ZUVsZW1lbnQoYSx7dHlwZTp0LGNvbnRlbnQ6bixkZWxheTpvfSkscik7dGhpcy5fZG9tLmFwcGVuZENoaWxkKHIpfSxzdWNjZXNzOmZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gdGhpcy5vcGVuKFwic3VjY2Vzc1wiLHQsbil9LHdhcm5pbmc6ZnVuY3Rpb24gZSh0LG4pe3JldHVybiB0aGlzLm9wZW4oXCJ3YXJuaW5nXCIsdCxuKX0sZXJyb3I6ZnVuY3Rpb24gZSh0LG4pe3JldHVybiB0aGlzLm9wZW4oXCJkYW5nZXJcIix0LG4pfSxpbmZvOmZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gdGhpcy5vcGVuKFwiaW5mb1wiLHQsbil9fX0pfX0sZnVuY3Rpb24oZSx0LGEpeyhmdW5jdGlvbihuKXtmdW5jdGlvbiBvKCl7bz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pKXtlW29dPW5bb119fX1yZXR1cm4gZX07cmV0dXJuIG8uYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciByPXpudWkuUmVhY3R8fGEoMCk7dmFyIGk9em51aS5SZWFjdERPTXx8YSgxKTt2YXIgcz1yLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSVG9vbHRpcFwiLGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbiBlKCl7cmV0dXJue2Fycm93Q2xhc3NOYW1lOlwiXCJ9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbiBlKCl7dGhpcy5fZG9tPWkuZmluZERPTU5vZGUodGhpcyk7dGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCl9LGZpeFBvc2l0aW9uOmZ1bmN0aW9uIGUodCl7aWYoIXQpe3Rocm93IG5ldyBFcnJvcihcImZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLlwiKX12YXIgbj10aGlzLl9kb20ub2Zmc2V0V2lkdGgsbz10aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LHI9em4uZG9tLmdldFBvc2l0aW9uKHQpLGk9bnVsbCxzPW51bGwsYT1cIlwiO2lmKHIueCtuPmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpe2k9ci53aWR0aC1ufWVsc2V7aT1yLngrKHIud2lkdGgtbikvMn1pZihyLnkrbz5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCl7cz1yLnktby0xNjthPVwienItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbVwifWVsc2V7cz1yLnkrci5oZWlnaHQrMTY7YT1cInpyLWFycm93LWRpcmVjdGlvbi10b3BcIn1pZihpPDApe2E9XCJ6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdFwiO2k9ci54K3Iud2lkdGgrNDtzPXIueSs0fXRoaXMuX2RvbS5zdHlsZS50b3A9cytcInB4XCI7dGhpcy5fZG9tLnN0eWxlLmxlZnQ9aStcInB4XCI7YSYmdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoYSl9LGRlc3Ryb3k6ZnVuY3Rpb24gZSh0KXtpZighdGhpcy5fX2lzTW91bnRlZCl7cmV0dXJuIGZhbHNlfXZhciBuPWkuZmluZERPTU5vZGUodGhpcyk7dmFyIG89dGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUmJnRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKG4pO2lmKG89PT1mYWxzZSl7cmV0dXJuIGZhbHNlfWlmKG4mJm4ucGFyZW50Tm9kZSl7bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfXRoaXMucHJvcHMub25EZXN0cm95JiZ0aGlzLnByb3BzLm9uRGVzdHJveSgpO2lmKHpuLmlzKHQsXCJmdW5jdGlvblwiKSl7dCgpfX0scmVuZGVyOmZ1bmN0aW9uIGUoKXtyZXR1cm4gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvb2x0aXAgenItYXJyb3cgenItYXJyb3ctY29sb3ItYmxhY2sgenItYXJyb3ctcGxhY2VtZW50LWNlbnRlclwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSx0aGlzLnByb3BzLmNvbnRlbnQpfX0pO2UuZXhwb3J0cz17VG9vbHRpcDpzLHRvb2x0aXA6em4uQ2xhc3Moe3N0YXRpYzp0cnVlLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24gZSgpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwifSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIix0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSx0cnVlKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLGZhbHNlKX0sX19vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbiBlKCl7dGhpcy5jbG9zZShcInpudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93LnJlc2l6aW5nXCIpfSxfX29uV2luZG93TW91c2VPdmVyOmZ1bmN0aW9uIGUodCl7dmFyIG49dC50YXJnZXQ7aWYobiYmbi5nZXRBdHRyaWJ1dGUmJm4uZ2V0QXR0cmlidXRlKFwiZGF0YS16ci1wb3B1cC10b29sdGlwXCIpKXtpZih0aGlzLl90b29sdGlwJiZ0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCE9PW4pe3RoaXMuY2xvc2UoXCJ6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXJcIil9dGhpcy5yZW5kZXIobi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpyLXBvcHVwLXRvb2x0aXBcIikse3RhcmdldDpufSl9ZWxzZXt0aGlzLmNsb3NlKFwiem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyXCIpfX0scmVuZGVyOmZ1bmN0aW9uIGUodCxuKXtpZih0aGlzLl90b29sdGlwKXt0aGlzLl90b29sdGlwLmRlc3Ryb3koKX10aGlzLl90b29sdGlwPWkucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLG8oe30sbix7Y29udGVudDp0fSkpLHRoaXMuX2RvbSl9LGNsb3NlOmZ1bmN0aW9uIGUodCl7aWYodGhpcy5fdG9vbHRpcCl7aWYoem4uaXModCxcInN0cmluZ1wiKSYmbiYmbi5lbnYmJlwicHJvZHVjdGlvblwiPT1cImRldmVsb3BtZW50XCIpe3puLmRlYnVnKHQpfWkudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9kb20pO3RoaXMuX3Rvb2x0aXAuZGVzdHJveSh0KTt0aGlzLl90b29sdGlwPW51bGx9cmV0dXJuIHRoaXN9fX0pfX0pLmNhbGwodGhpcyxhKDEyKSl9LGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5leHBvcnRzPXt9O3ZhciBvO3ZhciByO2Z1bmN0aW9uIGkoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHMoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9KGZ1bmN0aW9uKCl7dHJ5e2lmKHR5cGVvZiBzZXRUaW1lb3V0PT09XCJmdW5jdGlvblwiKXtvPXNldFRpbWVvdXR9ZWxzZXtvPWl9fWNhdGNoKGUpe289aX10cnl7aWYodHlwZW9mIGNsZWFyVGltZW91dD09PVwiZnVuY3Rpb25cIil7cj1jbGVhclRpbWVvdXR9ZWxzZXtyPXN9fWNhdGNoKGUpe3I9c319KSgpO2Z1bmN0aW9uIGEodCl7aWYobz09PXNldFRpbWVvdXQpe3JldHVybiBzZXRUaW1lb3V0KHQsMCl9aWYoKG89PT1pfHwhbykmJnNldFRpbWVvdXQpe289c2V0VGltZW91dDtyZXR1cm4gc2V0VGltZW91dCh0LDApfXRyeXtyZXR1cm4gbyh0LDApfWNhdGNoKGUpe3RyeXtyZXR1cm4gby5jYWxsKG51bGwsdCwwKX1jYXRjaChlKXtyZXR1cm4gby5jYWxsKHRoaXMsdCwwKX19fWZ1bmN0aW9uIGwodCl7aWYocj09PWNsZWFyVGltZW91dCl7cmV0dXJuIGNsZWFyVGltZW91dCh0KX1pZigocj09PXN8fCFyKSYmY2xlYXJUaW1lb3V0KXtyPWNsZWFyVGltZW91dDtyZXR1cm4gY2xlYXJUaW1lb3V0KHQpfXRyeXtyZXR1cm4gcih0KX1jYXRjaChlKXt0cnl7cmV0dXJuIHIuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiByLmNhbGwodGhpcyx0KX19fXZhciBjPVtdO3ZhciBwPWZhbHNlO3ZhciB1O3ZhciBkPS0xO2Z1bmN0aW9uIGYoKXtpZighcHx8IXUpe3JldHVybn1wPWZhbHNlO2lmKHUubGVuZ3RoKXtjPXUuY29uY2F0KGMpfWVsc2V7ZD0tMX1pZihjLmxlbmd0aCl7aCgpfX1mdW5jdGlvbiBoKCl7aWYocCl7cmV0dXJufXZhciBlPWEoZik7cD10cnVlO3ZhciB0PWMubGVuZ3RoO3doaWxlKHQpe3U9YztjPVtdO3doaWxlKCsrZDx0KXtpZih1KXt1W2RdLnJ1bigpfX1kPS0xO3Q9Yy5sZW5ndGh9dT1udWxsO3A9ZmFsc2U7bChlKX1uLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dFtuLTFdPWFyZ3VtZW50c1tuXX19Yy5wdXNoKG5ldyBtKGUsdCkpO2lmKGMubGVuZ3RoPT09MSYmIXApe2EoaCl9fTtmdW5jdGlvbiBtKGUsdCl7dGhpcy5mdW49ZTt0aGlzLmFycmF5PXR9bS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX07bi50aXRsZT1cImJyb3dzZXJcIjtuLmJyb3dzZXI9dHJ1ZTtuLmVudj17fTtuLmFyZ3Y9W107bi52ZXJzaW9uPVwiXCI7bi52ZXJzaW9ucz17fTtmdW5jdGlvbiB2KCl7fW4ub249djtuLmFkZExpc3RlbmVyPXY7bi5vbmNlPXY7bi5vZmY9djtuLnJlbW92ZUxpc3RlbmVyPXY7bi5yZW1vdmVBbGxMaXN0ZW5lcnM9djtuLmVtaXQ9djtuLnByZXBlbmRMaXN0ZW5lcj12O24ucHJlcGVuZE9uY2VMaXN0ZW5lcj12O24ubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfTtuLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9O24uY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9O24uY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfTtuLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fV0pKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsInJlcXVpcmUoJ3pudWktcmVhY3QnKTtcbmlmKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9idWlsZC9pbmRleC5qcycpO1xuICAgIH1lbHNle1xuICAgICAgICByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG4gICAgfVxufWVsc2Uge1xuICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcycpO1xufSIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGF0dHJzOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19wYXJzZUdldFZhbHVlKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuX19wYXJzZVNldFZhbHVlKHZhbHVlKSwgdGhpcztcblx0fSxcblx0X19wYXJzZUdldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nbnVtYmVyJyl7XG5cdFx0XHR2YWx1ZSA9ICt2YWx1ZTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J2RhdGUnKXtcblx0XHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0X19wYXJzZVNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nZGF0ZScgJiYgdmFsdWUpe1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkJsdXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ey4uLnRoaXMucHJvcHMuYXR0cnN9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dHlwZT17dGhpcy5wcm9wcy50eXBlfHwndGV4dCd9XG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9XG5cdFx0XHRcdG9uRm9jdXM9e3RoaXMuX19vbkZvY3VzfVxuXHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUklucHV0cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c3BsaXQ6ICcvJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBfdmFsdWVzID0gW10sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIHRoaXMucmVmcyl7XG5cdFx0XHRfdmFsdWUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNba2V5XSkudmFsdWU7XG5cdFx0XHRpZihfdmFsdWUpe1xuXHRcdFx0XHRfdmFsdWVzLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlcy5qb2luKHRoaXMucHJvcHMuc3BsaXQpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dmFyIF92YWx1ZXMgPSB2YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0KTtcblx0XHRPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpe1xuXHRcdFx0aWYoX3ZhbHVlc1tpbmRleF0pe1xuXHRcdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNba2V5XSkudmFsdWUgPSBfdmFsdWVzW2luZGV4XTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSksIHRoaXM7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWVzID0gKHRoaXMucHJvcHMudmFsdWV8fCcnKS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1pbnB1dHMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmRhdGF8fFtdKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQgdmFsdWU9e192YWx1ZXNbaW5kZXhdfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX29uSW5wdXRDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gcmVmPXtpbmRleH0ga2V5PXtpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHR5cGU9XCJ0ZXh0XCIgLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlYXJjaElucHV0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXR0cnM6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlYWRvbmx5OiBudWxsLFxuXHRcdFx0Zm9jdXNlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9fcGFyc2VHZXRWYWx1ZShSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLl9fcGFyc2VTZXRWYWx1ZSh2YWx1ZSksIHRoaXM7XG5cdH0sXG5cdF9fcGFyc2VHZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J251bWJlcicpe1xuXHRcdFx0dmFsdWUgPSArdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdkYXRlJyl7XG5cdFx0XHRpZighdmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fcGFyc2VTZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J2RhdGUnICYmIHZhbHVlKXtcblx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb2N1c2VkOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGZvY3VzZWQ6IGZhbHNlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnZhbHVlKTtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRvcHRpb246IG9wdFxuXHRcdH0pO1xuXHR9LFxuXHRfX29wdEl0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5fX29uT3B0SXRlbUNsaWNrKGl0ZW0sIGluZGV4KX0ga2V5PXtpbmRleH0+e2l0ZW19PC9saT47XG5cdH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPHVsIGNsYXNzTmFtZT1cInpyLXNlYXJjaC1pbnB1dC1vcHRpb25zXCI+XG5cdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLm9wdGlvbnN9IGl0ZW1SZW5kZXI9e3RoaXMuX19vcHRJdGVtUmVuZGVyfSAvPlxuXHRcdDwvdWw+O1xuXHR9LFxuXHRfX3JlbmRlck9wdGlvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8cG9wdXAuRHJvcGRvd24gY2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyLFxuXHRcdFx0XHRcdG9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi12YWx1ZVwiPnt0aGlzLnN0YXRlLm9wdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FyZXQtZG93blwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LWRvd24gZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0PC9wb3B1cC5Ecm9wZG93bj47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1zZWFyY2gtaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vcHRpb25zICYmIHRoaXMuX19yZW5kZXJPcHRpb25zKClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIHNlYXJjaC1pY29uIGZhLXNlYXJjaCBmYS13LTE2IGljb25cIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgdHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9XG5cdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhZ0lucHV0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlYWRvbmx5OiBudWxsXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IFtdXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSAxMyAmJiBfdmFsdWUpe1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleURvd246IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSAxMyAmJiBfdmFsdWUpe1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0XHRcdHJldHVybiBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gJyc7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm9vdENsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnN0YXRlLmlucHV0LmZvY3VzKCk7XG5cdH0sXG5cdF9fdGFnUmVuZGVyOiBmdW5jdGlvbih0YWcsIGluZGV4KXtcblx0XHRyZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGFnXCIga2V5PXtpbmRleH0+e3RhZ308L3NwYW4+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgb25DbGljaz17dGhpcy5fX29uUm9vdENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWctaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5tYXAodGhpcy5fX3RhZ1JlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IHJlZj17KGlucHV0KT0+dGhpcy5zdGF0ZS5pbnB1dCA9IGlucHV0fSBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIiBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgb25LZXlEb3duPXt0aGlzLl9fb25LZXlEb3dufSBvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXG5cdFx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRcdHR5cGU9e3RoaXMucHJvcHMudHlwZXx8J3RleHQnfVxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX1cblx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9IC8+XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRleHRhcmVhJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXR0cnM6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly9wbGFjZWhvbGRlcj1cImV4LiYjMTM7JiMxMDt0ZXN0MUB0ZXN0LmNvbSYjMTM7JiMxMDt0ZXN0MkB0ZXN0LmNvbSYjMTM7JiMxMDsuLi5cIlxuXHRcdHZhciBfdmFsdWUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZTtcblx0XHQvL2NvbnNvbGUubG9nKF92YWx1ZS5yZXBsYWNlKC9cXHUwMDBBL2csICdcXG4nKSk7XG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHZhbHVlLCB0aGlzO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkJsdXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZT09MTMpe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5vbktleVVwICYmIHRoaXMucHJvcHMub25LZXlVcChldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10ZXh0YXJlYVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ey4uLnRoaXMucHJvcHMuYXR0cnN9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0lucHV0JzogcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgICdJbnB1dHMnOiByZXF1aXJlKCcuL0lucHV0cy5qcycpLFxuICAgICdTZWFyY2hJbnB1dCc6IHJlcXVpcmUoJy4vU2VhcmNoSW5wdXQuanMnKSxcbiAgICAnVGFnSW5wdXQnOiByZXF1aXJlKCcuL1RhZ0lucHV0LmpzJyksXG4gICAgJ1RleHRhcmVhJzogcmVxdWlyZSgnLi9UZXh0YXJlYS5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInpyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=