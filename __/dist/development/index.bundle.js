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
      zn.debug('alert.close');
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
    var _alert = modal.create( /*#__PURE__*/React.createElement(Alert, _extends({
      content: content,
      title: title,
      onClick: callback
    }, props)), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _alert;
  },
  confirm: function confirm(content, title, _confirm2, cancel, options) {
    var _options = zn.extend({
      cancel: '取消',
      confirm: '确定'
    }, options);

    var _confirm = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: content,
      title: title,
      buttons: [{
        text: _options.cancel,
        onClick: function onClick() {
          var _return = cancel && cancel(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }, {
        text: _options.confirm,
        onClick: function onClick() {
          var _return = _confirm2 && _confirm2(_confirm);

          if (_return !== false) {
            _confirm.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _confirm;
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

    var _prompt = modal.create( /*#__PURE__*/React.createElement(Alert, {
      content: _argv.content,
      title: _argv.title,
      buttons: [{
        text: _argv.cancelText || '取消',
        onClick: function onClick(event, alert) {
          var _return = _argv.cancel && _argv.cancel(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }, {
        text: _argv.confirmText || '确定',
        onClick: function onClick(event, alert) {
          var _return = _argv.confirm && _argv.confirm(event, alert);

          if (_return !== false) {
            _prompt.destroy();
          }

          return false;
        }
      }]
    }), {
      "class": 'modal-middle modal-overlay'
    }, false);

    return _prompt;
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
      style: this.props.style,
      "data-focus": this.props.focus
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
  dialog: function dialog(argv, ifPush) {
    var _dialog = modal.create( /*#__PURE__*/React.createElement(Dialog, argv), {
      "class": 'modal-middle modal-overlay'
    }, ifPush);

    return _dialog;
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
        }, false);
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


var React = znui.React || __webpack_require__(/*! react */ "react");

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

var Modal = React.createClass({
  displayName: 'ZRModal',
  getInitialState: function getInitialState() {
    return {
      destroyed: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  close: function close(callback) {
    return this.destroy(callback);
  },
  destroy: function destroy(callback) {
    if (!this.__isMounted || this.state.destroyed) {
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

    callback && callback();
    this.state.destroyed = true;
    this.props.onDestroy && this.props.onDestroy();
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
      create: function create(content, options, ifPush) {
        var _modal = ReactDOM.render( /*#__PURE__*/React.createElement(Modal, options, content), zn.dom.createElement('div', {
          "class": znui.classname('zr-popup-modal', options["class"]),
          style: znui.style(options.style)
        }, this._dom));

        zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);

        if (ifPush !== false) {
          this._modals.push(_modal);
        }

        return _modal;
      },
      close: function close(delay, callback) {
        zn.debug('Modal close(' + this._modals.length + '): ');

        var _modal = this._modals.pop();

        console.log(this._modals);

        if (_modal) {
          if (_modal.state.destroyed) {
            return this.close(delay, callback);
          }

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
      __findZRPopupTooltipValue: function __findZRPopupTooltipValue(target) {
        if (target) {
          if (target.tagName == 'BODY' || target.tagName == 'HTML') {
            return false;
          }

          if (target.getAttribute && target.getAttribute('data-zr-popup-tooltip')) {
            return target.getAttribute('data-zr-popup-tooltip');
          } else {
            return this.__findZRPopupTooltipValue(target.parentNode);
          }
        }
      },
      __onWindowMouseOver: function __onWindowMouseOver(event) {
        var _target = event.target,
            _value = this.__findZRPopupTooltipValue(_target);

        if (_target && _value) {
          if (this._tooltip && this._tooltip.props.target !== _target) {
            this.close('znui.react.popup.tooltip: window.mouseover');
          }

          this.render(_value, {
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

!function(t,e){for(var n in e)t[n]=e[n]}(this,function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){!function(){t.exports=this.React}()},function(t,e){!function(){t.exports=this.ReactDOM}()},function(t,e,n){var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRModal",getInitialState:function(){return{destroyed:!1}},componentDidMount:function(){this.props.onComponentDidMount&&this.props.onComponentDidMount(this)},close:function(t){return this.destroy(t)},destroy:function(t){if(!this.__isMounted||this.state.destroyed)return!1;var e=i.findDOMNode(this);if(!1===(this.props.onDestroyBefore&&this.props.onDestroyBefore(e)))return!1;e&&e.parentNode.parentNode&&(e.parentNode.parentNode.removeChild(e.parentNode),i.unmountComponentAtNode(e.parentNode)),t&&t(),this.state.destroyed=!0,this.props.onDestroy&&this.props.onDestroy()},render:function(){return r.createElement(r.Fragment,null,this.props.children)}});t.exports={Modal:s,modal:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-modal-container"}),this._modals=[]},create:function(t,e,n){var o=i.render(r.createElement(s,e,t),zn.dom.createElement("div",{class:znui.classname("zr-popup-modal",e.class),style:znui.style(e.style)},this._dom));return zn.debug("Modal created("+(this._modals.length+1)+"): ",o),!1!==n&&this._modals.push(o),o},close:function(t,e){zn.debug("Modal close("+this._modals.length+"): ");var n=this._modals.pop();if(n){if(n.state.destroyed)return this.close(t,e);t?setTimeout(function(){return n.destroy(e)},t):n.destroy(e)}return this},closeAll:function(t){return this._modals.length&&this.close(t,this.closeAll),this},size:function(){return this._modals.length}}})}},function(t,e,n){function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRPopover",getDefaultProps:function(){return{hiddenHeight:5,closeable:!1,popoverWidth:null,popoverHeight:null}},getInitialState:function(){return{arrowClassName:""}},componentDidMount:function(){this._dom=i.findDOMNode(this),this.props.event&&(this._eventType=this.props.event.type||this.props.event,window.addEventListener(this._eventType,this.__onWindowClick,!1),this._dom.addEventListener(this._eventType,function(t){this.props.onContainerEvent&&this.props.onContainerEvent(t,this)}.bind(this),!0),setTimeout(function(){this.fixPosition(this.props.target)}.bind(this),0)),this.props.onPopoverDidMount&&this.props.onPopoverDidMount(this)},__isMatchParent:function(t,e){return!t||"BODY"!=t.tagName&&"HTML"!=t.tagName&&(t===e||this.__isMatchParent(t.parentNode,e))},__onWindowClick:function(t){this.__isMatchParent(t.target,this._dom)?!0===(this.props.onWindowInsideContainerEvent&&this.props.onWindowInsideContainerEvent(t,this))&&this.close("Popover: on window inside container event"):!0!==(this.props.onWindowOutsideContainerEvent&&this.props.onWindowOutsideContainerEvent(t,this))&&this.close("Popover: on window outside container event")},close:function(){this._dom&&(window.removeEventListener(this._eventType,this.__onWindowClick,!1),this._dom.parentNode&&(this._dom.parentNode.style="",i.unmountComponentAtNode(this._dom.parentNode)),this._dom=null,this._eventType=null)},fixPosition:function(t){var e=this._dom,n=zn.dom.getPosition(t),o=this.props.popoverWidth||n.width,r=this.props.popoverHeight||zn.dom.getPosition(e).height,i=null,s=null,a=[];"100%"==o&&(o=n.width),r<this.props.hiddenHeight?this.props.onHidden&&this.props.onHidden():(n.x+o>window.screen.availWidth?(a.push("zr-arrow-placement-right"),i=document.body.scrollWidth-n.x-n.width,e.style.right=i+"px",e.parentNode.style.right="0px"):(i=n.x,a.push("zr-arrow-placement-left"),e.style.left=i+"px"),n.y+r>window.screen.availHeight?(a.push("zr-arrow-direction-bottom"),s=n.height+10,e.style.bottom=s+"px",e.parentNode.style.bottom="0px"):(s=n.y+n.height+10,a.push("zr-arrow-direction-top"),e.style.top=s+"px"),this.props.popoverWidth&&(e.style.width=o+"px"),this.props.popoverHeight&&e.offsetHeight!=r&&(e.style.height=r+"px"),e.style.visibility="visible",a.push("zn-animate-scale-up"),e.className=e.className+" "+a.join(" "))},render:function(){var t=this,e={};return this.props.height?e.maxHeight=this.props.height+"px":e.height="auto",r.createElement("div",{className:znui.react.classname("zr-popup-popover zr-arrow zr-arrow-color-white",this.state.arrowClassName)},this.props.closeable&&r.createElement("span",{className:"popover-close zr-hover-self-loading",onClick:function(){return t.close("self close")}},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"svg-inline--fa fa-check fa-w-16 ",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),r.createElement("div",{className:znui.react.classname("popover-content",this.props.className),style:(zn.extend({},this.props.style),e)},this.props.content))}});t.exports={Popover:s,popover:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-popover-container"})},render:function(t,e){return e&&e.reset&&this.close("zn.popover:render"),this._popover=i.render(r.createElement(s,o({},e,{content:t})),this._dom),this._popover},close:function(t){return this._popover&&(this._popover.close(t),this._popover=null),this}}})}},function(t,e,n){t.exports=zn.deepAssigns({},n(5),n(6),n(7),n(8),n(2),n(9),n(3),n(10),n(11))},function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var a=znui.React||n(0),c=n(2).modal,l=a.createClass({displayName:"ZRAlert",getDefaultProps:function(){return{title:"",content:null,onClick:null,buttons:[{text:"确认"}]}},__onClick:function(t,e){t.index=e;this.props.onClick&&this.props.onClick(t,this);!1!==(t.onClick&&t.onClick(t,this))&&(zn.debug("alert.close"),c.close())},render:function(){return a.createElement("div",{className:znui.react.classname("zr-popup-alert",this.props.className),style:this.props.style},a.createElement("div",{className:"alert-inner"},this.props.title&&a.createElement("div",{className:"alert-title"},this.props.title),this.props.content&&a.createElement("div",{className:"alert-content"},this.props.content)),a.createElement("div",{className:"alert-btns"},this.props.buttons.map(function(t,e){var n=this;return a.createElement("div",{key:e,className:"alert-btn",onClick:function(){return n.__onClick(t,e)}},t.text)}.bind(this))))}});t.exports={Alert:l,alert:function(t,e,n,o){return c.create(a.createElement(l,r({content:t,title:e,onClick:n},o)),{class:"modal-middle modal-overlay"},!1)},confirm:function(t,e,n,o,r){var i=zn.extend({cancel:"取消",confirm:"确定"},r),s=c.create(a.createElement(l,{content:t,title:e,buttons:[{text:i.cancel,onClick:function(){return!1!==(o&&o(s))&&s.destroy(),!1}},{text:i.confirm,onClick:function(){return!1!==(n&&n(s))&&s.destroy(),!1}}]}),{class:"modal-middle modal-overlay"},!1);return s},prompt:function(t){var n=zn.extend({title:t.title,content:a.createElement("input",{className:"alert-input",onChange:t.onChange,type:"text"}),confirm:t.confirm,cancel:t.cancel},t),o=c.create(a.createElement(l,{content:n.content,title:n.title,buttons:[{text:n.cancelText||"取消",onClick:function(t,e){return!1!==(n.cancel&&n.cancel(t,e))&&o.destroy(),!1}},{text:n.confirmText||"确定",onClick:function(t,e){return!1!==(n.confirm&&n.confirm(t,e))&&o.destroy(),!1}}]}),{class:"modal-middle modal-overlay"},!1);return o}}},function(t,e,n){var o=znui.React||n(0),r=n(2).modal,i=o.createClass({displayName:"ZRDialog",getDefaultProps:function(){return{title:"",content:null}},__onClose:function(t){!1!==(this.props.onClose&&this.props.onClose(t,this))&&r.close()},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-dialog",this.props.className),style:this.props.style,"data-focus":this.props.focus},o.createElement("div",{className:"dialog-header"},this.props.title&&o.createElement("div",{className:"dialog-title"},this.props.title),this.props.closeable&&o.createElement("span",{onClick:this.__onClose,className:"dialog-close"},"x")),o.createElement("div",{className:"dialog-body"},this.props.content))}});t.exports={Dialog:i,dialog:function(t,e){return r.create(o.createElement(i,t),{class:"modal-middle modal-overlay"},e)}}},function(t,e,n){var o=znui.React||n(0),r=znui.ReactDOM||n(1),i=n(3).popover;t.exports={Dropdown:o.createClass({displayName:"ZRDropdown",getDefaultProps:function(){return{disabled:!1,eventType:"click"}},componentDidMount:function(){r.findDOMNode(this).addEventListener(this.props.eventType,this.__eventHandler,!1)},componentWillUnmount:function(){r.findDOMNode(this).removeEventListener(this.props.eventType,this.__eventHandler,!1)},getParent:function(t){return t.classList.contains("zr-popup-dropdown")?t:this.getParent(t.parentNode)},__eventHandler:function(t){if(!this.props.disabled){var e=this.getParent(t.target),n=zn.extend({},this.props.popover);if(e&&n&&n.render){var o=n.render;zn.is(o,"function")&&(o.prototype&&o.prototype.render||(o=o(t,this))),o&&(t.stopPropagation(),n.render=null,delete n.render,i.render(o,zn.extend({reset:!0,event:t,target:e},n)))}}},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-dropdown",this.props.className),style:this.props.style},this.props.children)}})}},function(t,e,n){var o=znui.React||n(0),r=n(2).modal,i=o.createClass({displayName:"ZRLoader",getDefaultProps:function(){return{content:null,title:"Loading ... "}},__renderContent:function(){return this.props.content?this.props.content:this.props.title?o.createElement(o.Fragment,null,o.createElement("i",{className:"loader","data-loader":"spinner"}),o.createElement("span",{className:"title"},this.props.title)):void 0},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-loader",this.props.className),style:znui.react.style(this.props.style)},this.__renderContent())}});t.exports={Loader:i,loader:zn.Class({static:!0,methods:{create:function(t){var e=this;return this._loader&&this._loader.destroy(),r.create(o.createElement(i,t),{class:"modal-middle modal-overlay",ref:function(t){return e._loader=t}},!1)},loading:function(t){return this.create({title:t})},close:function(){return this._loader&&this._loader.destroy(),this}}})}},function(t,e,n){var o=znui.React||n(0),r=znui.ReactDOM||n(1),i={heart:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",secondary:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z",success:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",warning:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",error:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",info:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"},s=o.createClass({displayName:"ZRNotification",componentDidMount:function(){window.setTimeout(this.out,this.props.delay||1500)},out:function(){var t=r.findDOMNode(this);t.classList.add("notification-out"),t.addEventListener("animationend",function(){t.parentNode.parentNode&&(t.parentNode.parentNode.removeChild(t.parentNode),r.unmountComponentAtNode(t.parentNode))},!1)},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-notifier notification-in",this.props.type)},o.createElement("div",{className:"icon"},o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:znui.react.classname("svg-inline--fa fa-check fa-w-16 ",this.props.className),style:this.props.style,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.createElement("path",{fill:"currentColor",d:i[this.props.type||"info"]}))),o.createElement("div",{className:"content"},this.props.content),o.createElement("i",{className:"close fa fa-times",onClick:this.out}))}});t.exports={Notifier:s,notifier:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-notifier-container"})},open:function(t,e,n){r.render(o.createElement(s,{type:t,content:e,delay:n}),zn.dom.createElement("div",{},this._dom))},success:function(t,e){return this.open("success",t,e)},warning:function(t,e){return this.open("warning",t,e)},error:function(t,e){return this.open("error",t,e)},info:function(t,e){return this.open("info",t,e)}}})}},function(t,e,n){var r=znui.React||n(0),i=znui.ReactDOM||n(1),s=r.createClass({displayName:"ZRToast",componentDidMount:function(){window.setTimeout(this.out,this.props.delay||1800)},out:function(){var t=i.findDOMNode(this);t.classList.add("toast-out"),t.addEventListener("animationend",function(){t.parentNode.parentNode.removeChild(t.parentNode),i.unmountComponentAtNode(t.parentNode.parentNode)},!1)},render:function(){return r.createElement("div",{className:znui.react.classname("zr-popup-toast toast-in",this.props.type)},this.props.content)}});t.exports={Toast:s,toast:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-toast-container"})},open:function(t,e,n){var o=document.createElement("div");i.render(r.createElement(s,{type:t,content:e,delay:n}),o),this._dom.appendChild(o)},success:function(t,e){return this.open("success",t,e)},warning:function(t,e){return this.open("warning",t,e)},error:function(t,e){return this.open("danger",t,e)},info:function(t,e){return this.open("info",t,e)}}})}},function(t,e,s){(function(e){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var o=znui.React||s(0),r=znui.ReactDOM||s(1),i=o.createClass({displayName:"ZRTooltip",getInitialState:function(){return{arrowClassName:""}},componentDidMount:function(){this._dom=r.findDOMNode(this),this.fixPosition(this.props.target)},fixPosition:function(t){if(!t)throw new Error("fixPosition target is null.");var e=this._dom.offsetWidth,n=this._dom.offsetHeight,o=zn.dom.getPosition(t),r=null,i=null,s="";r=o.x+e>document.body.scrollWidth?o.width-e:o.x+(o.width-e)/2,s=o.y+n>document.body.scrollHeight?(i=o.y-n-16,"zr-arrow-direction-bottom"):(i=o.y+o.height+16,"zr-arrow-direction-top"),r<0&&(s="zr-arrow-direction-left",r=o.x+o.width+4,i=o.y+4),this._dom.style.top=i+"px",this._dom.style.left=r+"px",s&&this._dom.classList.add(s)},destroy:function(t){if(!this.__isMounted)return!1;var e=r.findDOMNode(this);if(!1===(this.props.onDestroyBefore&&this.props.onDestroyBefore(e)))return!1;e&&e.parentNode&&e.parentNode.removeChild(e),this.props.onDestroy&&this.props.onDestroy(),zn.is(t,"function")&&t()},render:function(){return o.createElement("div",{className:znui.react.classname("zr-popup-tooltip zr-arrow zr-arrow-color-black zr-arrow-placement-center",this.props.className),style:this.props.style},this.props.content)}});t.exports={Tooltip:i,tooltip:zn.Class({static:!0,methods:{init:function(){this._dom=zn.dom.createRootElement("div",{class:"zr-popup-tooltip-container"}),window.addEventListener("mouseover",this.__onWindowMouseOver.bind(this),!0),window.addEventListener("resize",this.__onWindowResize.bind(this),!1)},__onWindowResize:function(){this.close("znui.react.popup.tooltip: window.resizing")},__findZRPopupTooltipValue:function(t){if(t)return"BODY"!=t.tagName&&"HTML"!=t.tagName&&(t.getAttribute&&t.getAttribute("data-zr-popup-tooltip")?t.getAttribute("data-zr-popup-tooltip"):this.__findZRPopupTooltipValue(t.parentNode))},__onWindowMouseOver:function(t){var e=t.target,n=this.__findZRPopupTooltipValue(e);e&&n?(this._tooltip&&this._tooltip.props.target!==e&&this.close("znui.react.popup.tooltip: window.mouseover"),this.render(n,{target:e})):this.close("znui.react.popup.tooltip: window.mouseover")},render:function(t,e){this._tooltip&&this._tooltip.destroy(),this._tooltip=r.render(o.createElement(i,n({},e,{content:t})),this._dom)},close:function(t){return this._tooltip&&(zn.is(t,"string")&&e&&e.env,r.unmountComponentAtNode(this._dom),this._tooltip.destroy(t),this._tooltip=null),this}}})}}).call(this,s(12))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(t){o=s}}();var c,l=[],p=!1,u=-1;function d(){p&&c&&(p=!1,c.length?l=c.concat(l):u=-1,l.length&&h())}function h(){if(!p){var t=a(d);p=!0;for(var e=l.length;e;){for(c=l,l=[];++u<e;)c&&c[u].run();u=-1,e=l.length}c=null,p=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function f(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||p||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]));

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

var TYPES = {
  email: 'email',
  tel: 'tel',
  id: 'text'
};
var ID = {
  checkCode: function checkCode(val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var code = val.substring(17);

    if (p.test(val)) {
      var sum = 0;

      for (var i = 0; i < 17; i++) {
        sum += val[i] * factor[i];
      }

      if (parity[sum % 11] == code.toUpperCase()) {
        return true;
      }
    }

    return false;
  },
  checkDate: function checkDate(val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;

    if (pattern.test(val)) {
      var year = val.substring(0, 4);
      var month = val.substring(4, 6);
      var date = val.substring(6, 8);
      var date2 = new Date(year + "-" + month + "-" + date);

      if (date2 && date2.getMonth() == parseInt(month) - 1) {
        return true;
      }
    }

    return false;
  },
  checkProv: function checkProv(val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门"
    };

    if (pattern.test(val)) {
      if (provs[val]) {
        return true;
      }
    }

    return false;
  },
  checkID: function checkID(val) {
    if (val && this.checkCode(val)) {
      var date = val.substring(6, 14);

      if (this.checkDate(date)) {
        if (this.checkProv(val.substring(0, 2))) {
          return true;
        }
      }
    }

    return false;
  }
};
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
  getInitialState: function getInitialState() {
    var _value = this.props.value;

    if ((_value === null || _value === undefined) && this.props.defaultValue !== null) {
      _value = this.props.defaultValue;
    }

    return {
      value: this.__formatValue(_value)
    };
  },
  __formatValue: function __formatValue(value) {
    if (value) {
      switch (this.props.type) {
        case 'month':
          value = value.substring(0, 7);
          break;

        case 'date':
          value = value.substring(0, 10);
          break;

        case 'datetime-local':
          value = value.split(' ').join('T').substring(0, 16);
          break;
      }
    }

    if (this.props.required) {
      if (!this.validate(value)) {
        return '';
      }
    }

    if (value === null) {
      return '';
    }

    return value;
  },
  validate: function validate(value) {
    var _validate = this.props.validate || this.props.type;

    if (typeof _validate == 'function') {
      if (_validate(value, this) === false) {
        return false;
      }
    } else if (typeof _validate == 'string') {
      switch (_validate) {
        case 'email':
          if (!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(value)) {
            return false;
          }

          break;

        case 'tel':
          if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
            return false;
          }

          break;

        case 'id':
          if (!ID.checkID(value)) {
            return false;
          }

          break;
      }
    }

    return true;
  },
  componentDidMount: function componentDidMount() {},
  getValue: function getValue() {
    return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
  },
  setValue: function setValue(value) {
    return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
  },
  __parseGetValue: function __parseGetValue(value) {
    if (this.props.type == 'number') {
      value = +value;
    }

    if (this.props.type == 'date') {
      if (!value) {
        return null;
      }
    }

    return value || '';
  },
  __parseSetValue: function __parseSetValue(value) {
    return this.__formatValue(value);
  },
  __onChange: function __onChange(event) {
    this.setState({
      value: event.target.value
    });

    var _value = this.__formatValue(event.target.value);

    event.value = _value;
    event.validate = _value;
    this.props.onChange && this.props.onChange(event, this);
  },
  __onFocus: function __onFocus(event) {
    var _value = this.__formatValue(event.target.value);

    event.value = _value;
    event.validate = _value;
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    var _value = this.__formatValue(event.target.value);

    event.value = _value;
    event.validate = _value;
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    var _value = this.__formatValue(event.target.value);

    event.value = _value;
    event.validate = _value;

    if (event.nativeEvent.keyCode == 13) {
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  render: function render() {
    var _type = TYPES[this.props.type] || this.props.type || 'text';

    return /*#__PURE__*/React.createElement("input", _extends({
      className: znui.react.classname('zr-input', this.props.className),
      required: this.props.required,
      style: this.props.style
    }, this.props.attrs, {
      name: this.props.name,
      type: _type,
      value: this.state.value,
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

/***/ "./SearchSelect.js":
/*!*************************!*\
  !*** ./SearchSelect.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var SearchInput = __webpack_require__(/*! ./SearchInput */ "./SearchInput.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRSearchSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      valueKey: 'zxnz_UUID',
      textKey: 'zxnz_Label'
    };
  },
  getInitialState: function getInitialState() {
    var _value = this.props.value;

    if (this.props.multiple) {
      if (typeof _value == 'string') {
        _value = _value.split(',').filter(function (item) {
          if (item) {
            return true;
          }
        });
      }

      if (_value == null) {
        _value = [];
      }
    }

    return {
      data: null,
      values: null,
      value: _value
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadData();
  },
  __loadData: function __loadData() {
    zn.data.request(this.props.data).then(function (data) {
      if (data.code == 200) {
        data = data.result;
        this.setState({
          data: data.slice(0),
          values: data
        });
      }
    }.bind(this));
  },
  __onItemClick: function __onItemClick(event, item) {
    var _value = item[this.props.valueKey];

    if (this.props.multiple) {
      if (this.state.value.indexOf(_value) == -1) {
        this.state.value.push(_value);
      } else {
        this.state.value.splice(this.state.value.indexOf(_value), 1);
      }
    } else {
      this.state.value = _value;
    }

    event.value = this.state.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, item, this);
    this.props.onClick && this.props.onClick(item);
  },
  __checked: function __checked(item, index) {
    var _value = item[this.props.valueKey];

    if (!_value) {
      return false;
    }

    if (this.props.multiple) {
      if (this.state.value.indexOf(_value) != -1) {
        return true;
      }
    } else if (this.state.value == _value) {
      return true;
    }

    return false;
  },
  __itemRender: function __itemRender(item, index) {
    var _element = znui.react.createReactElement(this.props.itemRender, {
      data: item,
      index: index,
      owner: this
    }, this.props.context);

    if (!_element) {
      _element = item[this.props.textKey];
    }

    return _element;
  },
  __renderList: function __renderList() {
    if (!this.state.values) {
      return /*#__PURE__*/React.createElement(loader.Loading, {
        content: "\u52A0\u8F7D\u4E2D ... "
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "data-list"
    }, this.state.values.map(function (item, index) {
      var _this = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "data-list-item " + (this.__checked(item, index) ? 'actived' : ''),
        key: index,
        onClick: function onClick(event) {
          return _this.__onItemClick(event, item);
        }
      }, this.__itemRender(item, index));
    }.bind(this)));
  },
  __onFilter: function __onFilter(value, item, index) {
    if (this.props.onFilter) {
      return this.props.onFilter(value, item, index);
    }

    var _text = item[this.props.textKey];

    if (_text.indexOf(value) != -1) {
      return item;
    }
  },
  __onInputSearch: function __onInputSearch(event) {
    var _this2 = this;

    var _value = event.value;

    if (_value) {
      this.state.values = this.state.data.filter(function (item, index) {
        return _this2.__onFilter(_value, item, index);
      });
    } else {
      this.state.values = this.state.data;
    }

    this.forceUpdate();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-search-select", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(SearchInput, {
      onEnter: this.__onInputSearch
    }), this.__renderList());
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
      value: (this.props.value || '').split(',').filter(function (value) {
        return value;
      })
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
      event.value = this.state.value.join(',');
      this.props.onEnter && this.props.onEnter(event, this);
      this.props.onChange && this.props.onChange(event, this);
      return event.target.innerHTML = '';
    }

    if (event.nativeEvent.keyCode == 8 && !_value) {
      event.stopPropagation();
      this.state.value.pop();
      this.forceUpdate();
      event.value = this.state.value.join(',');
      this.props.onEnter && this.props.onEnter(event, this);
      this.props.onChange && this.props.onChange(event, this);
      return event.target.innerHTML = '';
    }
  },
  __onRootClick: function __onRootClick() {
    this.state.input.focus();
  },
  __onTagDelete: function __onTagDelete(index) {
    this.state.value.splice(index, 1);
    this.forceUpdate();
  },
  __tagRender: function __tagRender(tag, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement("span", {
      className: "tag",
      key: index
    }, tag, /*#__PURE__*/React.createElement("svg", {
      onClick: function onClick() {
        return _this.__onTagDelete(index);
      },
      title: "\u5220\u9664\u5143\u7D20",
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "trash-alt",
      className: "remove-icon svg-inline--fa fa-trash-alt fa-w-14 ",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
    })));
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      onClick: this.__onRootClick,
      className: znui.react.classname('zr-tag-input', this.props.className)
    }, this.state.value.map(this.__tagRender), /*#__PURE__*/React.createElement("div", {
      ref: function ref(input) {
        return _this2.state.input = input;
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
  getInitialState: function getInitialState() {
    return {
      value: this.props.value || this.props.defaultValue || ''
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
    this.state.value = event.target.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, this);
  },
  __onFocus: function __onFocus(event) {
    event.value = event.target.value;
    this.state.value = event.target.value;
    this.forceUpdate();
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    event.value = event.target.value;
    this.state.value = event.target.value;
    this.forceUpdate();
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    event.value = event.target.value;
    this.state.value = event.target.value;
    this.forceUpdate();

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
      value: this.state.value || '',
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
  'SearchSelect': __webpack_require__(/*! ./SearchSelect.js */ "./SearchSelect.js"),
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

/***/ }),

/***/ "znui-react-loader":
/*!***************************!*\
  !*** external "zrloader" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["zrloader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoU2VsZWN0LmpzIiwid2VicGFjazovLy8uL1RhZ0lucHV0LmpzIiwid2VicGFjazovLy8uL1RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpybG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiVFlQRVMiLCJlbWFpbCIsInRlbCIsImlkIiwiSUQiLCJjaGVja0NvZGUiLCJ2YWwiLCJwIiwiZmFjdG9yIiwicGFyaXR5IiwiY29kZSIsInN1YnN0cmluZyIsInRlc3QiLCJzdW0iLCJpIiwidG9VcHBlckNhc2UiLCJjaGVja0RhdGUiLCJwYXR0ZXJuIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImRhdGUyIiwiRGF0ZSIsImdldE1vbnRoIiwicGFyc2VJbnQiLCJjaGVja1Byb3YiLCJwcm92cyIsImNoZWNrSUQiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImF0dHJzIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsImdldEluaXRpYWxTdGF0ZSIsIl92YWx1ZSIsInByb3BzIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0VmFsdWUiLCJfX2Zvcm1hdFZhbHVlIiwidHlwZSIsInNwbGl0Iiwiam9pbiIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJfdmFsaWRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImdldFZhbHVlIiwiX19wYXJzZUdldFZhbHVlIiwiZmluZERPTU5vZGUiLCJzZXRWYWx1ZSIsIl9fcGFyc2VTZXRWYWx1ZSIsIl9fb25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0Iiwib25DaGFuZ2UiLCJfX29uRm9jdXMiLCJvbkZvY3VzIiwiX19vbkJsdXIiLCJvbkJsdXIiLCJfX29uS2V5VXAiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJvbkVudGVyIiwib25LZXlVcCIsInJlbmRlciIsIl90eXBlIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdHlsZSIsIm5hbWUiLCJzdGF0ZSIsInBsYWNlaG9sZGVyIiwiZGF0YSIsIl92YWx1ZXMiLCJrZXkiLCJyZWZzIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJiaW5kIiwiX19vbklucHV0Q2hhbmdlIiwiaXRlbSIsIm1hcCIsInBvcHVwIiwiZm9jdXNlZCIsIl9fb25PcHRJdGVtQ2xpY2siLCJvcHQiLCJvcHRpb24iLCJfX29wdEl0ZW1SZW5kZXIiLCJfX2ljb25DbGlja1JlbmRlciIsIm9wdGlvbnMiLCJfX3JlbmRlck9wdGlvbnMiLCJvbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50IiwicG9wb3ZlciIsIl9faWNvbkNsaWNrIiwiU2VhcmNoSW5wdXQiLCJsb2FkZXIiLCJ2YWx1ZUtleSIsInRleHRLZXkiLCJtdWx0aXBsZSIsImZpbHRlciIsInZhbHVlcyIsIl9fbG9hZERhdGEiLCJ6biIsInJlcXVlc3QiLCJ0aGVuIiwicmVzdWx0Iiwic2xpY2UiLCJfX29uSXRlbUNsaWNrIiwiaW5kZXhPZiIsInNwbGljZSIsImZvcmNlVXBkYXRlIiwib25DbGljayIsIl9fY2hlY2tlZCIsIl9faXRlbVJlbmRlciIsIl9lbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiaXRlbVJlbmRlciIsIm93bmVyIiwiY29udGV4dCIsIl9fcmVuZGVyTGlzdCIsIl9fb25GaWx0ZXIiLCJvbkZpbHRlciIsIl90ZXh0IiwiX19vbklucHV0U2VhcmNoIiwiaW5uZXJUZXh0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5uZXJIVE1MIiwiX19vbktleURvd24iLCJwb3AiLCJfX29uUm9vdENsaWNrIiwiaW5wdXQiLCJmb2N1cyIsIl9fb25UYWdEZWxldGUiLCJfX3RhZ1JlbmRlciIsInRhZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FB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QkFBK0I7QUFDL0I7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUdBQXFHO0FBQ3JHO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7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Q0FBRCxDQUZKO0FBR2IsaUJBQWVBLG1CQUFPLENBQUMsMENBQUQsQ0FIVDtBQUliLGtCQUFnQkEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUpWO0FBS2IsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRCxDQUxOO0FBTWIsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRDtBQU5OLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsNkJBQTZCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBNUMsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSQWxlcnQnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiAn56Gu6K6kJ1xuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBfX29uQ2xpY2s6IGZ1bmN0aW9uIF9fb25DbGljayhpdGVtLCBpbmRleCkge1xuICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCB0aGlzKTtcblxuICAgIF9yZXN1bHQgPSBpdGVtLm9uQ2xpY2sgJiYgaXRlbS5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB6bi5kZWJ1ZygnYWxlcnQuY2xvc2UnKTtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtYWxlcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1pbm5lclwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtdGl0bGVcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUpLCB0aGlzLnByb3BzLmNvbnRlbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWNvbnRlbnRcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtYnRuc1wiXG4gICAgfSwgdGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1idG5cIixcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuX19vbkNsaWNrKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSwgaXRlbS50ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpKSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFsZXJ0OiBBbGVydCxcbiAgYWxlcnQ6IGZ1bmN0aW9uIGFsZXJ0KGNvbnRlbnQsIHRpdGxlLCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICB2YXIgX2FsZXJ0ID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwgX2V4dGVuZHMoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG9uQ2xpY2s6IGNhbGxiYWNrXG4gICAgfSwgcHJvcHMpKSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIF9hbGVydDtcbiAgfSxcbiAgY29uZmlybTogZnVuY3Rpb24gY29uZmlybShjb250ZW50LCB0aXRsZSwgX2NvbmZpcm0yLCBjYW5jZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMgPSB6bi5leHRlbmQoe1xuICAgICAgY2FuY2VsOiAn5Y+W5raIJyxcbiAgICAgIGNvbmZpcm06ICfnoa7lrponXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICB2YXIgX2NvbmZpcm0gPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY2FuY2VsLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gY2FuY2VsICYmIGNhbmNlbChfY29uZmlybSk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9jb25maXJtLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX29wdGlvbnMuY29uZmlybSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IF9jb25maXJtMiAmJiBfY29uZmlybTIoX2NvbmZpcm0pO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfY29uZmlybS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX2NvbmZpcm07XG4gIH0sXG4gIHByb21wdDogZnVuY3Rpb24gcHJvbXB0KGFyZ3YpIHtcbiAgICB2YXIgX2FyZ3YgPSB6bi5leHRlbmQoe1xuICAgICAgdGl0bGU6IGFyZ3YudGl0bGUsXG4gICAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWlucHV0XCIsXG4gICAgICAgIG9uQ2hhbmdlOiBhcmd2Lm9uQ2hhbmdlLFxuICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgfSksXG4gICAgICBjb25maXJtOiBhcmd2LmNvbmZpcm0sXG4gICAgICBjYW5jZWw6IGFyZ3YuY2FuY2VsXG4gICAgfSwgYXJndik7XG5cbiAgICB2YXIgX3Byb21wdCA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgIGNvbnRlbnQ6IF9hcmd2LmNvbnRlbnQsXG4gICAgICB0aXRsZTogX2FyZ3YudGl0bGUsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiBfYXJndi5jYW5jZWxUZXh0IHx8ICflj5bmtognLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50LCBhbGVydCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gX2FyZ3YuY2FuY2VsICYmIF9hcmd2LmNhbmNlbChldmVudCwgYWxlcnQpO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfcHJvbXB0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogX2FyZ3YuY29uZmlybVRleHQgfHwgJ+ehruWumicsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQsIGFsZXJ0KSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBfYXJndi5jb25maXJtICYmIF9hcmd2LmNvbmZpcm0oZXZlbnQsIGFsZXJ0KTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX3Byb21wdC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH0pLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX3Byb21wdDtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBEaWFsb2cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJEaWFsb2cnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbFxuICAgIH07XG4gIH0sXG4gIF9fb25DbG9zZTogZnVuY3Rpb24gX19vbkNsb3NlKGV2ZW50KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xvc2UgJiYgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50LCB0aGlzKTtcblxuICAgIGlmIChfcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgIFwiZGF0YS1mb2N1c1wiOiB0aGlzLnByb3BzLmZvY3VzXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1oZWFkZXJcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIHRoaXMucHJvcHMuY2xvc2VhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLl9fb25DbG9zZSxcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctY2xvc2VcIlxuICAgIH0sIFwieFwiKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctYm9keVwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERpYWxvZzogRGlhbG9nLFxuICBkaWFsb2c6IGZ1bmN0aW9uIGRpYWxvZyhhcmd2LCBpZlB1c2gpIHtcbiAgICB2YXIgX2RpYWxvZyA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBhcmd2KSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgaWZQdXNoKTtcblxuICAgIHJldHVybiBfZGlhbG9nO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBwb3BvdmVyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJykucG9wb3ZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIERyb3Bkb3duOiBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdaUkRyb3Bkb3duJyxcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgZXZlbnRUeXBlOiAnY2xpY2snXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSwgdGhpcy5fX2V2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIH0sXG4gICAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnenItcG9wdXAtZHJvcGRvd24nKSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50KHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9fZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiBfX2V2ZW50SGFuZGxlcihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RhcmdldCA9IHRoaXMuZ2V0UGFyZW50KGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgX3BvcG92ZXIgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMucG9wb3Zlcik7XG5cbiAgICAgIGlmIChfdGFyZ2V0ICYmIF9wb3BvdmVyICYmIF9wb3BvdmVyLnJlbmRlcikge1xuICAgICAgICB2YXIgX3JlbmRlciA9IF9wb3BvdmVyLnJlbmRlcjtcblxuICAgICAgICBpZiAoem4uaXMoX3JlbmRlciwgJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICBpZiAoIV9yZW5kZXIucHJvdG90eXBlIHx8ICFfcmVuZGVyLnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgICAgIF9yZW5kZXIgPSBfcmVuZGVyKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3JlbmRlcikge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIF9wb3BvdmVyLnJlbmRlciA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIF9wb3BvdmVyLnJlbmRlcjtcbiAgICAgICAgICBwb3BvdmVyLnJlbmRlcihfcmVuZGVyLCB6bi5leHRlbmQoe1xuICAgICAgICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICB0YXJnZXQ6IF90YXJnZXRcbiAgICAgICAgICB9LCBfcG9wb3ZlcikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIExvYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkxvYWRlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgdGl0bGU6ICdMb2FkaW5nIC4uLiAnXG4gICAgfTtcbiAgfSxcbiAgX19yZW5kZXJDb250ZW50OiBmdW5jdGlvbiBfX3JlbmRlckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29udGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29udGVudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudGl0bGUpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImxvYWRlclwiLFxuICAgICAgICBcImRhdGEtbG9hZGVyXCI6IFwic3Bpbm5lclwiXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcbiAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUpKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1sb2FkZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogem51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKVxuICAgIH0sIHRoaXMuX19yZW5kZXJDb250ZW50KCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBMb2FkZXI6IExvYWRlcixcbiAgbG9hZGVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShhcmd2KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIGFyZ3YpLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbG9hZGVyID0gX3JlZjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiBmdW5jdGlvbiBsb2FkaW5nKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBNb2RhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUk1vZGFsJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3llZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzdHJveShjYWxsYmFjayk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQgfHwgdGhpcy5zdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblxuICAgIGlmIChfcmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB0aGlzLnN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3kgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufSk7XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTW9kYWw6IE1vZGFsLFxuICBtb2RhbDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtbW9kYWwtY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21vZGFscyA9IFtdO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGNvbnRlbnQsIG9wdGlvbnMsIGlmUHVzaCkge1xuICAgICAgICB2YXIgX21vZGFsID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgb3B0aW9ucywgY29udGVudCksIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiB6bnVpLmNsYXNzbmFtZSgnenItcG9wdXAtbW9kYWwnLCBvcHRpb25zW1wiY2xhc3NcIl0pLFxuICAgICAgICAgIHN0eWxlOiB6bnVpLnN0eWxlKG9wdGlvbnMuc3R5bGUpXG4gICAgICAgIH0sIHRoaXMuX2RvbSkpO1xuXG4gICAgICAgIHpuLmRlYnVnKCdNb2RhbCBjcmVhdGVkKCcgKyAodGhpcy5fbW9kYWxzLmxlbmd0aCArIDEpICsgJyk6ICcsIF9tb2RhbCk7XG5cbiAgICAgICAgaWYgKGlmUHVzaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLl9tb2RhbHMucHVzaChfbW9kYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9tb2RhbDtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHpuLmRlYnVnKCdNb2RhbCBjbG9zZSgnICsgdGhpcy5fbW9kYWxzLmxlbmd0aCArICcpOiAnKTtcblxuICAgICAgICB2YXIgX21vZGFsID0gdGhpcy5fbW9kYWxzLnBvcCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX21vZGFscyk7XG5cbiAgICAgICAgaWYgKF9tb2RhbCkge1xuICAgICAgICAgIGlmIChfbW9kYWwuc3RhdGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZShkZWxheSwgY2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBjbG9zZUFsbDogZnVuY3Rpb24gY2xvc2VBbGwoZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFscy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGRlbGF5LCB0aGlzLmNsb3NlQWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHNpemU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRZUEVfSUNPTlMgPSB7XG4gIGhlYXJ0OiAnTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6JyxcbiAgc2Vjb25kYXJ5OiAnTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0eicsXG4gIHN1Y2Nlc3M6ICdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6JyxcbiAgd2FybmluZzogJ001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLFxuICBlcnJvcjogJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonLFxuICBpbmZvOiAnTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHonXG59O1xudmFyIE5vdGlmaWVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSTm90aWZpY2F0aW9uJyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE1MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb24tb3V0Jyk7XG5cbiAgICBfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaWNvblwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLFxuICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIGQ6IFRZUEVfSUNPTlNbdGhpcy5wcm9wcy50eXBlIHx8ICdpbmZvJ11cbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjbG9zZSBmYSBmYS10aW1lc1wiLFxuICAgICAgb25DbGljazogdGhpcy5vdXRcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5vdGlmaWVyOiBOb3RpZmllcixcbiAgbm90aWZpZXI6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiAnenItcG9wdXAtbm90aWZpZXItY29udGFpbmVyJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpZXIsIHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICAgIH0pLCB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIHRoaXMuX2RvbSkpO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2Vycm9yJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8oY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBQb3BvdmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSUG9wb3ZlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoaWRkZW5IZWlnaHQ6IDUsXG4gICAgICBjbG9zZWFibGU6IGZhbHNlLFxuICAgICAgcG9wb3ZlcldpZHRoOiBudWxsLFxuICAgICAgcG9wb3ZlckhlaWdodDogbnVsbFxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcnJvd0NsYXNzTmFtZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ldmVudCkge1xuICAgICAgdGhpcy5fZXZlbnRUeXBlID0gdGhpcy5wcm9wcy5ldmVudC50eXBlIHx8IHRoaXMucHJvcHMuZXZlbnQ7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIHRoaXMuX2RvbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25Db250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKF9yZXN1bHQgPT09IHRydWUpIHsvL2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksIHRydWUpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG4gICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgX19pc01hdGNoUGFyZW50OiBmdW5jdGlvbiBfX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQgIT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2lzTWF0Y2hQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUsIHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBfX29uV2luZG93Q2xpY2s6IGZ1bmN0aW9uIF9fb25XaW5kb3dDbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5fX2lzTWF0Y2hQYXJlbnQoZXZlbnQudGFyZ2V0LCB0aGlzLl9kb20pKSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQgJiYgdGhpcy5wcm9wcy5vbldpbmRvd091dHNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudChldmVudCwgdGhpcyk7XG5cbiAgICAgIGlmIChfcmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSh0YWcpIHtcbiAgICAvL3puLmluZm8oJ1BvcG92ZXIuY2xvc2U6JywgdGFnKTtcbiAgICBpZiAodGhpcy5fZG9tKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIHRoaXMuX19vbldpbmRvd0NsaWNrLCBmYWxzZSk7XG5cbiAgICAgIGlmICh0aGlzLl9kb20ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZSA9ICcnO1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZG9tID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50VHlwZSA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmaXhQb3NpdGlvbjogZnVuY3Rpb24gZml4UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgdmFyIF9wb3BvdmVyID0gdGhpcy5fZG9tO1xuXG4gICAgdmFyIF90ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9wb3BvdmVyV2lkdGggPSB0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCB8fCBfdC53aWR0aCxcbiAgICAgICAgX3BvcG92ZXJIZWlnaHQgPSB0aGlzLnByb3BzLnBvcG92ZXJIZWlnaHQgfHwgem4uZG9tLmdldFBvc2l0aW9uKF9wb3BvdmVyKS5oZWlnaHQsXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZXMgPSBbXTtcblxuICAgIGlmIChfcG9wb3ZlcldpZHRoID09ICcxMDAlJykge1xuICAgICAgX3BvcG92ZXJXaWR0aCA9IF90LndpZHRoO1xuICAgIH1cblxuICAgIGlmIChfcG9wb3ZlckhlaWdodCA8IHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZGVuICYmIHRoaXMucHJvcHMub25IaWRkZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX3QueCArIF9wb3BvdmVyV2lkdGggPiB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGgpIHtcbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LXJpZ2h0Jyk7XG5cbiAgICAgIF9sZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCAtIF90LnggLSBfdC53aWR0aDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLnJpZ2h0ID0gX2xlZnQgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBfbGVmdCA9IF90Lng7XG5cbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctcGxhY2VtZW50LWxlZnQnKTtcblxuICAgICAgX3BvcG92ZXIuc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAoX3QueSArIF9wb3BvdmVySGVpZ2h0ID4gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCkge1xuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJyk7XG5cbiAgICAgIF90b3AgPSBfdC5oZWlnaHQgKyAxMDtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLmJvdHRvbSA9IF90b3AgKyAncHgnO1xuICAgICAgX3BvcG92ZXIucGFyZW50Tm9kZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90LnkgKyBfdC5oZWlnaHQgKyAxMDtcblxuICAgICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJyk7XG5cbiAgICAgIF9wb3BvdmVyLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCkge1xuICAgICAgX3BvcG92ZXIuc3R5bGUud2lkdGggPSBfcG9wb3ZlcldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0KSB7XG4gICAgICBpZiAoX3BvcG92ZXIub2Zmc2V0SGVpZ2h0ICE9IF9wb3BvdmVySGVpZ2h0KSB7XG4gICAgICAgIF9wb3BvdmVyLnN0eWxlLmhlaWdodCA9IF9wb3BvdmVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wb3Zlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgX2Fycm93Q2xhc3NOYW1lcy5wdXNoKCd6bi1hbmltYXRlLXNjYWxlLXVwJyk7XG5cbiAgICBfcG9wb3Zlci5jbGFzc05hbWUgPSBfcG9wb3Zlci5jbGFzc05hbWUgKyAnICcgKyBfYXJyb3dDbGFzc05hbWVzLmpvaW4oJyAnKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfc3R5bGUgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgX3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3N0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtcG9wb3ZlciB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci13aGl0ZScsIHRoaXMuc3RhdGUuYXJyb3dDbGFzc05hbWUpXG4gICAgfSwgdGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJwb3BvdmVyLWNsb3NlIHpyLWhvdmVyLXNlbGYtbG9hZGluZ1wiLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsb3NlKCdzZWxmIGNsb3NlJyk7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgXCJkYXRhLXByZWZpeFwiOiBcImZhc1wiLFxuICAgICAgY2xhc3NOYW1lOiBcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZDogXCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCJcbiAgICB9KSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwicG9wb3Zlci1jb250ZW50XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiAoem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnN0eWxlKSwgX3N0eWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBQb3BvdmVyOiBQb3BvdmVyLFxuICBwb3BvdmVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNldCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3puLnBvcG92ZXI6cmVuZGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKSwgdGhpcy5fcG9wb3ZlcjtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UodGFnKSB7XG4gICAgICAgIGlmICh0aGlzLl9wb3BvdmVyKSB7XG4gICAgICAgICAgdGhpcy5fcG9wb3Zlci5jbG9zZSh0YWcpO1xuXG4gICAgICAgICAgdGhpcy5fcG9wb3ZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb2FzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlRvYXN0JyxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDE4MDApO1xuICB9LFxuICBvdXQ6IGZ1bmN0aW9uIG91dCgpIHtcbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCd0b2FzdC1vdXQnKTtcblxuICAgIF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC10b2FzdCB0b2FzdC1pbicsIHRoaXMucHJvcHMudHlwZSlcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb2FzdDogVG9hc3QsXG4gIHRvYXN0OiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKHR5cGUsIGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHZhciBfZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb2FzdCwge1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgICAgfSksIF9kb20pO1xuXG4gICAgICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZChfZG9tKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdkYW5nZXInLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvb2x0aXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJUb29sdGlwJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycm93Q2xhc3NOYW1lOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgfSxcbiAgZml4UG9zaXRpb246IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKHRhcmdldCkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpeFBvc2l0aW9uIHRhcmdldCBpcyBudWxsLicpO1xuICAgIH1cblxuICAgIHZhciBfZG9tV2lkdGggPSB0aGlzLl9kb20ub2Zmc2V0V2lkdGgsXG4gICAgICAgIF9kb21IZWlnaHQgPSB0aGlzLl9kb20ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBfdGFyZ2V0ID0gem4uZG9tLmdldFBvc2l0aW9uKHRhcmdldCksXG4gICAgICAgIF9sZWZ0ID0gbnVsbCxcbiAgICAgICAgX3RvcCA9IG51bGwsXG4gICAgICAgIF9jbGFzc05hbWUgPSAnJztcblxuICAgIGlmIChfdGFyZ2V0LnggKyBfZG9tV2lkdGggPiBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoKSB7XG4gICAgICBfbGVmdCA9IF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC54ICsgKF90YXJnZXQud2lkdGggLSBfZG9tV2lkdGgpIC8gMjtcbiAgICB9XG5cbiAgICBpZiAoX3RhcmdldC55ICsgX2RvbUhlaWdodCA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBfdG9wID0gX3RhcmdldC55IC0gX2RvbUhlaWdodCAtIDE2O1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgX3RvcCA9IF90YXJnZXQueSArIF90YXJnZXQuaGVpZ2h0ICsgMTY7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi10b3AnO1xuICAgIH1cblxuICAgIGlmIChfbGVmdCA8IDApIHtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWxlZnQnO1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LnggKyBfdGFyZ2V0LndpZHRoICsgNDtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgKyA0O1xuICAgIH1cblxuICAgIHRoaXMuX2RvbS5zdHlsZS50b3AgPSBfdG9wICsgJ3B4JztcbiAgICB0aGlzLl9kb20uc3R5bGUubGVmdCA9IF9sZWZ0ICsgJ3B4JztcbiAgICBfY2xhc3NOYW1lICYmIHRoaXMuX2RvbS5jbGFzc0xpc3QuYWRkKF9jbGFzc05hbWUpO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cbiAgICBpZiAoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRGVzdHJveSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveSgpO1xuXG4gICAgaWYgKHpuLmlzKGNhbGxiYWNrLCAnZnVuY3Rpb24nKSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9vbHRpcCB6ci1hcnJvdyB6ci1hcnJvdy1jb2xvci1ibGFjayB6ci1hcnJvdy1wbGFjZW1lbnQtY2VudGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVG9vbHRpcDogVG9vbHRpcCxcbiAgdG9vbHRpcDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtdG9vbHRpcC1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICB9LFxuICAgICAgX19vbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gX19vbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmcnKTtcbiAgICAgIH0sXG4gICAgICBfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlOiBmdW5jdGlvbiBfX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09ICdCT0RZJyB8fCB0YXJnZXQudGFnTmFtZSA9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfX29uV2luZG93TW91c2VPdmVyOiBmdW5jdGlvbiBfX29uV2luZG93TW91c2VPdmVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgX3ZhbHVlID0gdGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKF90YXJnZXQpO1xuXG4gICAgICAgIGlmIChfdGFyZ2V0ICYmIF92YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl90b29sdGlwICYmIHRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0ICE9PSBfdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlbmRlcihfdmFsdWUsIHtcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGVudCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCkge1xuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9vbHRpcCA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pKSwgdGhpcy5fZG9tKTtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXApIHtcbiAgICAgICAgICBpZiAoem4uaXMoY2FsbGJhY2ssICdzdHJpbmcnKSAmJiBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIHpuLmRlYnVnKGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSk7XG5cbiAgICAgICAgICB0aGlzLl90b29sdGlwLmRlc3Ryb3koY2FsbGJhY2spO1xuXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHpuLmRlZXBBc3NpZ25zKHt9LCByZXF1aXJlKCcuL0FsZXJ0JyksIHJlcXVpcmUoJy4vRGlhbG9nJyksIHJlcXVpcmUoJy4vRHJvcGRvd24nKSwgcmVxdWlyZSgnLi9Mb2FkZXInKSwgcmVxdWlyZSgnLi9Nb2RhbCcpLCByZXF1aXJlKCcuL05vdGlmaWVyJyksIHJlcXVpcmUoJy4vUG9wb3ZlcicpLCByZXF1aXJlKCcuL1RvYXN0JyksIHJlcXVpcmUoJy4vVG9vbHRpcCcpKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIiFmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKXRbbl09ZVtuXX0odGhpcyxmdW5jdGlvbihuKXt2YXIgbz17fTtmdW5jdGlvbiByKHQpe2lmKG9bdF0pcmV0dXJuIG9bdF0uZXhwb3J0czt2YXIgZT1vW3RdPXtpOnQsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gblt0XS5jYWxsKGUuZXhwb3J0cyxlLGUuZXhwb3J0cyxyKSxlLmw9ITAsZS5leHBvcnRzfXJldHVybiByLm09bixyLmM9byxyLmQ9ZnVuY3Rpb24odCxlLG4pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTQpfShbZnVuY3Rpb24odCxlKXshZnVuY3Rpb24oKXt0LmV4cG9ydHM9dGhpcy5SZWFjdH0oKX0sZnVuY3Rpb24odCxlKXshZnVuY3Rpb24oKXt0LmV4cG9ydHM9dGhpcy5SZWFjdERPTX0oKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPXpudWkuUmVhY3R8fG4oMCksaT16bnVpLlJlYWN0RE9NfHxuKDEpLHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUk1vZGFsXCIsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue2Rlc3Ryb3llZDohMX19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50JiZ0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyl9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmRlc3Ryb3kodCl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7aWYoIXRoaXMuX19pc01vdW50ZWR8fHRoaXMuc3RhdGUuZGVzdHJveWVkKXJldHVybiExO3ZhciBlPWkuZmluZERPTU5vZGUodGhpcyk7aWYoITE9PT0odGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUmJnRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKGUpKSlyZXR1cm4hMTtlJiZlLnBhcmVudE5vZGUucGFyZW50Tm9kZSYmKGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUucGFyZW50Tm9kZSksaS51bm1vdW50Q29tcG9uZW50QXROb2RlKGUucGFyZW50Tm9kZSkpLHQmJnQoKSx0aGlzLnN0YXRlLmRlc3Ryb3llZD0hMCx0aGlzLnByb3BzLm9uRGVzdHJveSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3koKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LG51bGwsdGhpcy5wcm9wcy5jaGlsZHJlbil9fSk7dC5leHBvcnRzPXtNb2RhbDpzLG1vZGFsOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1tb2RhbC1jb250YWluZXJcIn0pLHRoaXMuX21vZGFscz1bXX0sY3JlYXRlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1pLnJlbmRlcihyLmNyZWF0ZUVsZW1lbnQocyxlLHQpLHpuLmRvbS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzOnpudWkuY2xhc3NuYW1lKFwienItcG9wdXAtbW9kYWxcIixlLmNsYXNzKSxzdHlsZTp6bnVpLnN0eWxlKGUuc3R5bGUpfSx0aGlzLl9kb20pKTtyZXR1cm4gem4uZGVidWcoXCJNb2RhbCBjcmVhdGVkKFwiKyh0aGlzLl9tb2RhbHMubGVuZ3RoKzEpK1wiKTogXCIsbyksITEhPT1uJiZ0aGlzLl9tb2RhbHMucHVzaChvKSxvfSxjbG9zZTpmdW5jdGlvbih0LGUpe3puLmRlYnVnKFwiTW9kYWwgY2xvc2UoXCIrdGhpcy5fbW9kYWxzLmxlbmd0aCtcIik6IFwiKTt2YXIgbj10aGlzLl9tb2RhbHMucG9wKCk7aWYobil7aWYobi5zdGF0ZS5kZXN0cm95ZWQpcmV0dXJuIHRoaXMuY2xvc2UodCxlKTt0P3NldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gbi5kZXN0cm95KGUpfSx0KTpuLmRlc3Ryb3koZSl9cmV0dXJuIHRoaXN9LGNsb3NlQWxsOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RoJiZ0aGlzLmNsb3NlKHQsdGhpcy5jbG9zZUFsbCksdGhpc30sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RhbHMubGVuZ3RofX19KX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcj16bnVpLlJlYWN0fHxuKDApLGk9em51aS5SZWFjdERPTXx8bigxKSxzPXIuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJQb3BvdmVyXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue2hpZGRlbkhlaWdodDo1LGNsb3NlYWJsZTohMSxwb3BvdmVyV2lkdGg6bnVsbCxwb3BvdmVySGVpZ2h0Om51bGx9fSxnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm57YXJyb3dDbGFzc05hbWU6XCJcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPWkuZmluZERPTU5vZGUodGhpcyksdGhpcy5wcm9wcy5ldmVudCYmKHRoaXMuX2V2ZW50VHlwZT10aGlzLnByb3BzLmV2ZW50LnR5cGV8fHRoaXMucHJvcHMuZXZlbnQsd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLHRoaXMuX19vbldpbmRvd0NsaWNrLCExKSx0aGlzLl9kb20uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsZnVuY3Rpb24odCl7dGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50JiZ0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQodCx0aGlzKX0uYmluZCh0aGlzKSwhMCksc2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpfS5iaW5kKHRoaXMpLDApKSx0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50JiZ0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50KHRoaXMpfSxfX2lzTWF0Y2hQYXJlbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4hdHx8XCJCT0RZXCIhPXQudGFnTmFtZSYmXCJIVE1MXCIhPXQudGFnTmFtZSYmKHQ9PT1lfHx0aGlzLl9faXNNYXRjaFBhcmVudCh0LnBhcmVudE5vZGUsZSkpfSxfX29uV2luZG93Q2xpY2s6ZnVuY3Rpb24odCl7dGhpcy5fX2lzTWF0Y2hQYXJlbnQodC50YXJnZXQsdGhpcy5fZG9tKT8hMD09PSh0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQmJnRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCh0LHRoaXMpKSYmdGhpcy5jbG9zZShcIlBvcG92ZXI6IG9uIHdpbmRvdyBpbnNpZGUgY29udGFpbmVyIGV2ZW50XCIpOiEwIT09KHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQmJnRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQodCx0aGlzKSkmJnRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgb3V0c2lkZSBjb250YWluZXIgZXZlbnRcIil9LGNsb3NlOmZ1bmN0aW9uKCl7dGhpcy5fZG9tJiYod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLHRoaXMuX19vbldpbmRvd0NsaWNrLCExKSx0aGlzLl9kb20ucGFyZW50Tm9kZSYmKHRoaXMuX2RvbS5wYXJlbnROb2RlLnN0eWxlPVwiXCIsaS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbS5wYXJlbnROb2RlKSksdGhpcy5fZG9tPW51bGwsdGhpcy5fZXZlbnRUeXBlPW51bGwpfSxmaXhQb3NpdGlvbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9kb20sbj16bi5kb20uZ2V0UG9zaXRpb24odCksbz10aGlzLnByb3BzLnBvcG92ZXJXaWR0aHx8bi53aWR0aCxyPXRoaXMucHJvcHMucG9wb3ZlckhlaWdodHx8em4uZG9tLmdldFBvc2l0aW9uKGUpLmhlaWdodCxpPW51bGwscz1udWxsLGE9W107XCIxMDAlXCI9PW8mJihvPW4ud2lkdGgpLHI8dGhpcy5wcm9wcy5oaWRkZW5IZWlnaHQ/dGhpcy5wcm9wcy5vbkhpZGRlbiYmdGhpcy5wcm9wcy5vbkhpZGRlbigpOihuLngrbz53aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGg/KGEucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1yaWdodFwiKSxpPWRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgtbi54LW4ud2lkdGgsZS5zdHlsZS5yaWdodD1pK1wicHhcIixlLnBhcmVudE5vZGUuc3R5bGUucmlnaHQ9XCIwcHhcIik6KGk9bi54LGEucHVzaChcInpyLWFycm93LXBsYWNlbWVudC1sZWZ0XCIpLGUuc3R5bGUubGVmdD1pK1wicHhcIiksbi55K3I+d2luZG93LnNjcmVlbi5hdmFpbEhlaWdodD8oYS5wdXNoKFwienItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbVwiKSxzPW4uaGVpZ2h0KzEwLGUuc3R5bGUuYm90dG9tPXMrXCJweFwiLGUucGFyZW50Tm9kZS5zdHlsZS5ib3R0b209XCIwcHhcIik6KHM9bi55K24uaGVpZ2h0KzEwLGEucHVzaChcInpyLWFycm93LWRpcmVjdGlvbi10b3BcIiksZS5zdHlsZS50b3A9cytcInB4XCIpLHRoaXMucHJvcHMucG9wb3ZlcldpZHRoJiYoZS5zdHlsZS53aWR0aD1vK1wicHhcIiksdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0JiZlLm9mZnNldEhlaWdodCE9ciYmKGUuc3R5bGUuaGVpZ2h0PXIrXCJweFwiKSxlLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIsYS5wdXNoKFwiem4tYW5pbWF0ZS1zY2FsZS11cFwiKSxlLmNsYXNzTmFtZT1lLmNsYXNzTmFtZStcIiBcIithLmpvaW4oXCIgXCIpKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXt9O3JldHVybiB0aGlzLnByb3BzLmhlaWdodD9lLm1heEhlaWdodD10aGlzLnByb3BzLmhlaWdodCtcInB4XCI6ZS5oZWlnaHQ9XCJhdXRvXCIsci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGVcIix0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKX0sdGhpcy5wcm9wcy5jbG9zZWFibGUmJnIuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuY2xvc2UoXCJzZWxmIGNsb3NlXCIpfX0sci5jcmVhdGVFbGVtZW50KFwic3ZnXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIixmb2N1c2FibGU6XCJmYWxzZVwiLFwiZGF0YS1wcmVmaXhcIjpcImZhc1wiLGNsYXNzTmFtZTpcInN2Zy1pbmxpbmUtLWZhIGZhLWNoZWNrIGZhLXctMTYgXCIscm9sZTpcImltZ1wiLHhtbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix2aWV3Qm94OlwiMCAwIDUxMiA1MTJcIn0sci5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtmaWxsOlwiY3VycmVudENvbG9yXCIsZDpcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIn0pKSksci5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTooem4uZXh0ZW5kKHt9LHRoaXMucHJvcHMuc3R5bGUpLGUpfSx0aGlzLnByb3BzLmNvbnRlbnQpKX19KTt0LmV4cG9ydHM9e1BvcG92ZXI6cyxwb3BvdmVyOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1wb3BvdmVyLWNvbnRhaW5lclwifSl9LHJlbmRlcjpmdW5jdGlvbih0LGUpe3JldHVybiBlJiZlLnJlc2V0JiZ0aGlzLmNsb3NlKFwiem4ucG9wb3ZlcjpyZW5kZXJcIiksdGhpcy5fcG9wb3Zlcj1pLnJlbmRlcihyLmNyZWF0ZUVsZW1lbnQocyxvKHt9LGUse2NvbnRlbnQ6dH0pKSx0aGlzLl9kb20pLHRoaXMuX3BvcG92ZXJ9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9wb3BvdmVyJiYodGhpcy5fcG9wb3Zlci5jbG9zZSh0KSx0aGlzLl9wb3BvdmVyPW51bGwpLHRoaXN9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz16bi5kZWVwQXNzaWducyh7fSxuKDUpLG4oNiksbig3KSxuKDgpLG4oMiksbig5KSxuKDMpLG4oMTApLG4oMTEpKX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIHIoKXtyZXR1cm4ocj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgbj1hcmd1bWVudHNbZV07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJih0W29dPW5bb10pfXJldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBhPXpudWkuUmVhY3R8fG4oMCksYz1uKDIpLm1vZGFsLGw9YS5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkFsZXJ0XCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue3RpdGxlOlwiXCIsY29udGVudDpudWxsLG9uQ2xpY2s6bnVsbCxidXR0b25zOlt7dGV4dDpcIuehruiupFwifV19fSxfX29uQ2xpY2s6ZnVuY3Rpb24odCxlKXt0LmluZGV4PWU7dGhpcy5wcm9wcy5vbkNsaWNrJiZ0aGlzLnByb3BzLm9uQ2xpY2sodCx0aGlzKTshMSE9PSh0Lm9uQ2xpY2smJnQub25DbGljayh0LHRoaXMpKSYmKHpuLmRlYnVnKFwiYWxlcnQuY2xvc2VcIiksYy5jbG9zZSgpKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1hbGVydFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSxhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiYWxlcnQtaW5uZXJcIn0sdGhpcy5wcm9wcy50aXRsZSYmYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LXRpdGxlXCJ9LHRoaXMucHJvcHMudGl0bGUpLHRoaXMucHJvcHMuY29udGVudCYmYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LWNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSksYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LWJ0bnNcIn0sdGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6ZSxjbGFzc05hbWU6XCJhbGVydC1idG5cIixvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4uX19vbkNsaWNrKHQsZSl9fSx0LnRleHQpfS5iaW5kKHRoaXMpKSkpfX0pO3QuZXhwb3J0cz17QWxlcnQ6bCxhbGVydDpmdW5jdGlvbih0LGUsbixvKXtyZXR1cm4gYy5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGwscih7Y29udGVudDp0LHRpdGxlOmUsb25DbGljazpufSxvKSkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0sITEpfSxjb25maXJtOmZ1bmN0aW9uKHQsZSxuLG8scil7dmFyIGk9em4uZXh0ZW5kKHtjYW5jZWw6XCLlj5bmtohcIixjb25maXJtOlwi56Gu5a6aXCJ9LHIpLHM9Yy5jcmVhdGUoYS5jcmVhdGVFbGVtZW50KGwse2NvbnRlbnQ6dCx0aXRsZTplLGJ1dHRvbnM6W3t0ZXh0OmkuY2FuY2VsLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4hMSE9PShvJiZvKHMpKSYmcy5kZXN0cm95KCksITF9fSx7dGV4dDppLmNvbmZpcm0sb25DbGljazpmdW5jdGlvbigpe3JldHVybiExIT09KG4mJm4ocykpJiZzLmRlc3Ryb3koKSwhMX19XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LCExKTtyZXR1cm4gc30scHJvbXB0OmZ1bmN0aW9uKHQpe3ZhciBuPXpuLmV4dGVuZCh7dGl0bGU6dC50aXRsZSxjb250ZW50OmEuY3JlYXRlRWxlbWVudChcImlucHV0XCIse2NsYXNzTmFtZTpcImFsZXJ0LWlucHV0XCIsb25DaGFuZ2U6dC5vbkNoYW5nZSx0eXBlOlwidGV4dFwifSksY29uZmlybTp0LmNvbmZpcm0sY2FuY2VsOnQuY2FuY2VsfSx0KSxvPWMuY3JlYXRlKGEuY3JlYXRlRWxlbWVudChsLHtjb250ZW50Om4uY29udGVudCx0aXRsZTpuLnRpdGxlLGJ1dHRvbnM6W3t0ZXh0Om4uY2FuY2VsVGV4dHx8XCLlj5bmtohcIixvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITEhPT0obi5jYW5jZWwmJm4uY2FuY2VsKHQsZSkpJiZvLmRlc3Ryb3koKSwhMX19LHt0ZXh0Om4uY29uZmlybVRleHR8fFwi56Gu5a6aXCIsb25DbGljazpmdW5jdGlvbih0LGUpe3JldHVybiExIT09KG4uY29uZmlybSYmbi5jb25maXJtKHQsZSkpJiZvLmRlc3Ryb3koKSwhMX19XX0pLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LCExKTtyZXR1cm4gb319fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPW4oMikubW9kYWwsaT1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSRGlhbG9nXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue3RpdGxlOlwiXCIsY29udGVudDpudWxsfX0sX19vbkNsb3NlOmZ1bmN0aW9uKHQpeyExIT09KHRoaXMucHJvcHMub25DbG9zZSYmdGhpcy5wcm9wcy5vbkNsb3NlKHQsdGhpcykpJiZyLmNsb3NlKCl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZGlhbG9nXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGUsXCJkYXRhLWZvY3VzXCI6dGhpcy5wcm9wcy5mb2N1c30sby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImRpYWxvZy1oZWFkZXJcIn0sdGhpcy5wcm9wcy50aXRsZSYmby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImRpYWxvZy10aXRsZVwifSx0aGlzLnByb3BzLnRpdGxlKSx0aGlzLnByb3BzLmNsb3NlYWJsZSYmby5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtvbkNsaWNrOnRoaXMuX19vbkNsb3NlLGNsYXNzTmFtZTpcImRpYWxvZy1jbG9zZVwifSxcInhcIikpLG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctYm9keVwifSx0aGlzLnByb3BzLmNvbnRlbnQpKX19KTt0LmV4cG9ydHM9e0RpYWxvZzppLGRpYWxvZzpmdW5jdGlvbih0LGUpe3JldHVybiByLmNyZWF0ZShvLmNyZWF0ZUVsZW1lbnQoaSx0KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwifSxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIG89em51aS5SZWFjdHx8bigwKSxyPXpudWkuUmVhY3RET018fG4oMSksaT1uKDMpLnBvcG92ZXI7dC5leHBvcnRzPXtEcm9wZG93bjpvLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSRHJvcGRvd25cIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57ZGlzYWJsZWQ6ITEsZXZlbnRUeXBlOlwiY2xpY2tcIn19LGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7ci5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLHRoaXMuX19ldmVudEhhbmRsZXIsITEpfSxjb21wb25lbnRXaWxsVW5tb3VudDpmdW5jdGlvbigpe3IuZmluZERPTU5vZGUodGhpcykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSx0aGlzLl9fZXZlbnRIYW5kbGVyLCExKX0sZ2V0UGFyZW50OmZ1bmN0aW9uKHQpe3JldHVybiB0LmNsYXNzTGlzdC5jb250YWlucyhcInpyLXBvcHVwLWRyb3Bkb3duXCIpP3Q6dGhpcy5nZXRQYXJlbnQodC5wYXJlbnROb2RlKX0sX19ldmVudEhhbmRsZXI6ZnVuY3Rpb24odCl7aWYoIXRoaXMucHJvcHMuZGlzYWJsZWQpe3ZhciBlPXRoaXMuZ2V0UGFyZW50KHQudGFyZ2V0KSxuPXpuLmV4dGVuZCh7fSx0aGlzLnByb3BzLnBvcG92ZXIpO2lmKGUmJm4mJm4ucmVuZGVyKXt2YXIgbz1uLnJlbmRlcjt6bi5pcyhvLFwiZnVuY3Rpb25cIikmJihvLnByb3RvdHlwZSYmby5wcm90b3R5cGUucmVuZGVyfHwobz1vKHQsdGhpcykpKSxvJiYodC5zdG9wUHJvcGFnYXRpb24oKSxuLnJlbmRlcj1udWxsLGRlbGV0ZSBuLnJlbmRlcixpLnJlbmRlcihvLHpuLmV4dGVuZCh7cmVzZXQ6ITAsZXZlbnQ6dCx0YXJnZXQ6ZX0sbikpKX19fSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWRyb3Bkb3duXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnRoaXMucHJvcHMuc3R5bGV9LHRoaXMucHJvcHMuY2hpbGRyZW4pfX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj1uKDIpLm1vZGFsLGk9by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkxvYWRlclwiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybntjb250ZW50Om51bGwsdGl0bGU6XCJMb2FkaW5nIC4uLiBcIn19LF9fcmVuZGVyQ29udGVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNvbnRlbnQ/dGhpcy5wcm9wcy5jb250ZW50OnRoaXMucHJvcHMudGl0bGU/by5jcmVhdGVFbGVtZW50KG8uRnJhZ21lbnQsbnVsbCxvLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImxvYWRlclwiLFwiZGF0YS1sb2FkZXJcIjpcInNwaW5uZXJcIn0pLG8uY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwidGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSkpOnZvaWQgMH0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1sb2FkZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0sdGhpcy5fX3JlbmRlckNvbnRlbnQoKSl9fSk7dC5leHBvcnRzPXtMb2FkZXI6aSxsb2FkZXI6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntjcmVhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5fbG9hZGVyJiZ0aGlzLl9sb2FkZXIuZGVzdHJveSgpLHIuY3JlYXRlKG8uY3JlYXRlRWxlbWVudChpLHQpLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCIscmVmOmZ1bmN0aW9uKHQpe3JldHVybiBlLl9sb2FkZXI9dH19LCExKX0sbG9hZGluZzpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jcmVhdGUoe3RpdGxlOnR9KX0sY2xvc2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9hZGVyJiZ0aGlzLl9sb2FkZXIuZGVzdHJveSgpLHRoaXN9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj16bnVpLlJlYWN0RE9NfHxuKDEpLGk9e2hlYXJ0OlwiTTQ2Mi4zIDYyLjZDNDA3LjUgMTUuOSAzMjYgMjQuMyAyNzUuNyA3Ni4yTDI1NiA5Ni41bC0xOS43LTIwLjNDMTg2LjEgMjQuMyAxMDQuNSAxNS45IDQ5LjcgNjIuNmMtNjIuOCA1My42LTY2LjEgMTQ5LjgtOS45IDIwNy45bDE5My41IDE5OS44YzEyLjUgMTIuOSAzMi44IDEyLjkgNDUuMyAwbDE5My41LTE5OS44YzU2LjMtNTguMSA1My0xNTQuMy05LjgtMjA3Ljl6XCIsc2Vjb25kYXJ5OlwiTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0elwiLHN1Y2Nlc3M6XCJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6XCIsd2FybmluZzpcIk01NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHpcIixlcnJvcjpcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIixpbmZvOlwiTTIwIDQyNC4yMjloMjBWMjc5Ljc3MUgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjEyYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwaDExMmMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYyMTIuMjI5aDIwYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwVjQ5MmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjB2LTQ3Ljc3MWMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMHpNOTYgMEM1Ni4yMzUgMCAyNCAzMi4yMzUgMjQgNzJzMzIuMjM1IDcyIDcyIDcyIDcyLTMyLjIzNSA3Mi03MlMxMzUuNzY0IDAgOTYgMHpcIn0scz1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSTm90aWZpY2F0aW9uXCIsY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxNTAwKX0sb3V0OmZ1bmN0aW9uKCl7dmFyIHQ9ci5maW5kRE9NTm9kZSh0aGlzKTt0LmNsYXNzTGlzdC5hZGQoXCJub3RpZmljYXRpb24tb3V0XCIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGZ1bmN0aW9uKCl7dC5wYXJlbnROb2RlLnBhcmVudE5vZGUmJih0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0LnBhcmVudE5vZGUpLHIudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0LnBhcmVudE5vZGUpKX0sITEpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLW5vdGlmaWVyIG5vdGlmaWNhdGlvbi1pblwiLHRoaXMucHJvcHMudHlwZSl9LG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJpY29uXCJ9LG8uY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsZm9jdXNhYmxlOlwiZmFsc2VcIixcImRhdGEtcHJlZml4XCI6XCJmYXNcIixjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlLHJvbGU6XCJpbWdcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCA1MTIgNTEyXCJ9LG8uY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbDpcImN1cnJlbnRDb2xvclwiLGQ6aVt0aGlzLnByb3BzLnR5cGV8fFwiaW5mb1wiXX0pKSksby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImNvbnRlbnRcIn0sdGhpcy5wcm9wcy5jb250ZW50KSxvLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImNsb3NlIGZhIGZhLXRpbWVzXCIsb25DbGljazp0aGlzLm91dH0pKX19KTt0LmV4cG9ydHM9e05vdGlmaWVyOnMsbm90aWZpZXI6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLW5vdGlmaWVyLWNvbnRhaW5lclwifSl9LG9wZW46ZnVuY3Rpb24odCxlLG4pe3IucmVuZGVyKG8uY3JlYXRlRWxlbWVudChzLHt0eXBlOnQsY29udGVudDplLGRlbGF5Om59KSx6bi5kb20uY3JlYXRlRWxlbWVudChcImRpdlwiLHt9LHRoaXMuX2RvbSkpfSxzdWNjZXNzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcInN1Y2Nlc3NcIix0LGUpfSx3YXJuaW5nOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcIndhcm5pbmdcIix0LGUpfSxlcnJvcjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJlcnJvclwiLHQsZSl9LGluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiaW5mb1wiLHQsZSl9fX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPXpudWkuUmVhY3R8fG4oMCksaT16bnVpLlJlYWN0RE9NfHxuKDEpLHM9ci5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUlRvYXN0XCIsY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCx0aGlzLnByb3BzLmRlbGF5fHwxODAwKX0sb3V0OmZ1bmN0aW9uKCl7dmFyIHQ9aS5maW5kRE9NTm9kZSh0aGlzKTt0LmNsYXNzTGlzdC5hZGQoXCJ0b2FzdC1vdXRcIiksdC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsZnVuY3Rpb24oKXt0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0LnBhcmVudE5vZGUpLGkudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0LnBhcmVudE5vZGUucGFyZW50Tm9kZSl9LCExKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b2FzdCB0b2FzdC1pblwiLHRoaXMucHJvcHMudHlwZSl9LHRoaXMucHJvcHMuY29udGVudCl9fSk7dC5leHBvcnRzPXtUb2FzdDpzLHRvYXN0OnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC10b2FzdC1jb250YWluZXJcIn0pfSxvcGVuOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kucmVuZGVyKHIuY3JlYXRlRWxlbWVudChzLHt0eXBlOnQsY29udGVudDplLGRlbGF5Om59KSxvKSx0aGlzLl9kb20uYXBwZW5kQ2hpbGQobyl9LHN1Y2Nlc3M6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwic3VjY2Vzc1wiLHQsZSl9LHdhcm5pbmc6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwid2FybmluZ1wiLHQsZSl9LGVycm9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcImRhbmdlclwiLHQsZSl9LGluZm86ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiaW5mb1wiLHQsZSl9fX0pfX0sZnVuY3Rpb24odCxlLHMpeyhmdW5jdGlvbihlKXtmdW5jdGlvbiBuKCl7cmV0dXJuKG49T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgbz16bnVpLlJlYWN0fHxzKDApLHI9em51aS5SZWFjdERPTXx8cygxKSxpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJUb29sdGlwXCIsZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue2Fycm93Q2xhc3NOYW1lOlwiXCJ9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3RoaXMuX2RvbT1yLmZpbmRET01Ob2RlKHRoaXMpLHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpfSxmaXhQb3NpdGlvbjpmdW5jdGlvbih0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC5cIik7dmFyIGU9dGhpcy5fZG9tLm9mZnNldFdpZHRoLG49dGhpcy5fZG9tLm9mZnNldEhlaWdodCxvPXpuLmRvbS5nZXRQb3NpdGlvbih0KSxyPW51bGwsaT1udWxsLHM9XCJcIjtyPW8ueCtlPmRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGg/by53aWR0aC1lOm8ueCsoby53aWR0aC1lKS8yLHM9by55K24+ZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ/KGk9by55LW4tMTYsXCJ6ci1hcnJvdy1kaXJlY3Rpb24tYm90dG9tXCIpOihpPW8ueStvLmhlaWdodCsxNixcInpyLWFycm93LWRpcmVjdGlvbi10b3BcIikscjwwJiYocz1cInpyLWFycm93LWRpcmVjdGlvbi1sZWZ0XCIscj1vLngrby53aWR0aCs0LGk9by55KzQpLHRoaXMuX2RvbS5zdHlsZS50b3A9aStcInB4XCIsdGhpcy5fZG9tLnN0eWxlLmxlZnQ9citcInB4XCIscyYmdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQocyl9LGRlc3Ryb3k6ZnVuY3Rpb24odCl7aWYoIXRoaXMuX19pc01vdW50ZWQpcmV0dXJuITE7dmFyIGU9ci5maW5kRE9NTm9kZSh0aGlzKTtpZighMT09PSh0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoZSkpKXJldHVybiExO2UmJmUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLHRoaXMucHJvcHMub25EZXN0cm95JiZ0aGlzLnByb3BzLm9uRGVzdHJveSgpLHpuLmlzKHQsXCJmdW5jdGlvblwiKSYmdCgpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvb2x0aXAgenItYXJyb3cgenItYXJyb3ctY29sb3ItYmxhY2sgenItYXJyb3ctcGxhY2VtZW50LWNlbnRlclwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSx0aGlzLnByb3BzLmNvbnRlbnQpfX0pO3QuZXhwb3J0cz17VG9vbHRpcDppLHRvb2x0aXA6em4uQ2xhc3Moe3N0YXRpYzohMCxtZXRob2RzOntpbml0OmZ1bmN0aW9uKCl7dGhpcy5fZG9tPXpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLHtjbGFzczpcInpyLXBvcHVwLXRvb2x0aXAtY29udGFpbmVyXCJ9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLHRoaXMuX19vbldpbmRvd01vdXNlT3Zlci5iaW5kKHRoaXMpLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMuX19vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCExKX0sX19vbldpbmRvd1Jlc2l6ZTpmdW5jdGlvbigpe3RoaXMuY2xvc2UoXCJ6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZ1wiKX0sX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZTpmdW5jdGlvbih0KXtpZih0KXJldHVyblwiQk9EWVwiIT10LnRhZ05hbWUmJlwiSFRNTFwiIT10LnRhZ05hbWUmJih0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpyLXBvcHVwLXRvb2x0aXBcIik/dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpyLXBvcHVwLXRvb2x0aXBcIik6dGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKHQucGFyZW50Tm9kZSkpfSxfX29uV2luZG93TW91c2VPdmVyOmZ1bmN0aW9uKHQpe3ZhciBlPXQudGFyZ2V0LG49dGhpcy5fX2ZpbmRaUlBvcHVwVG9vbHRpcFZhbHVlKGUpO2UmJm4/KHRoaXMuX3Rvb2x0aXAmJnRoaXMuX3Rvb2x0aXAucHJvcHMudGFyZ2V0IT09ZSYmdGhpcy5jbG9zZShcInpudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlclwiKSx0aGlzLnJlbmRlcihuLHt0YXJnZXQ6ZX0pKTp0aGlzLmNsb3NlKFwiem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyXCIpfSxyZW5kZXI6ZnVuY3Rpb24odCxlKXt0aGlzLl90b29sdGlwJiZ0aGlzLl90b29sdGlwLmRlc3Ryb3koKSx0aGlzLl90b29sdGlwPXIucmVuZGVyKG8uY3JlYXRlRWxlbWVudChpLG4oe30sZSx7Y29udGVudDp0fSkpLHRoaXMuX2RvbSl9LGNsb3NlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl90b29sdGlwJiYoem4uaXModCxcInN0cmluZ1wiKSYmZSYmZS5lbnYsci51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMuX2RvbSksdGhpcy5fdG9vbHRpcC5kZXN0cm95KHQpLHRoaXMuX3Rvb2x0aXA9bnVsbCksdGhpc319fSl9fSkuY2FsbCh0aGlzLHMoMTIpKX0sZnVuY3Rpb24odCxlKXt2YXIgbixvLHI9dC5leHBvcnRzPXt9O2Z1bmN0aW9uIGkoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIHMoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gYShlKXtpZihuPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChuPT09aXx8IW4pJiZzZXRUaW1lb3V0KXJldHVybiBuPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbi5jYWxsKHRoaXMsZSwwKX19fSFmdW5jdGlvbigpe3RyeXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDppfWNhdGNoKHQpe249aX10cnl7bz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnN9Y2F0Y2godCl7bz1zfX0oKTt2YXIgYyxsPVtdLHA9ITEsdT0tMTtmdW5jdGlvbiBkKCl7cCYmYyYmKHA9ITEsYy5sZW5ndGg/bD1jLmNvbmNhdChsKTp1PS0xLGwubGVuZ3RoJiZoKCkpfWZ1bmN0aW9uIGgoKXtpZighcCl7dmFyIHQ9YShkKTtwPSEwO2Zvcih2YXIgZT1sLmxlbmd0aDtlOyl7Zm9yKGM9bCxsPVtdOysrdTxlOyljJiZjW3VdLnJ1bigpO3U9LTEsZT1sLmxlbmd0aH1jPW51bGwscD0hMSxmdW5jdGlvbihlKXtpZihvPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKG89PT1zfHwhbykmJmNsZWFyVGltZW91dClyZXR1cm4gbz1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtvKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gby5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG8uY2FsbCh0aGlzLGUpfX19KHQpfX1mdW5jdGlvbiBtKHQsZSl7dGhpcy5mdW49dCx0aGlzLmFycmF5PWV9ZnVuY3Rpb24gZigpe31yLm5leHRUaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKDE8YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWVbbi0xXT1hcmd1bWVudHNbbl07bC5wdXNoKG5ldyBtKHQsZSkpLDEhPT1sLmxlbmd0aHx8cHx8YShoKX0sbS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0sci50aXRsZT1cImJyb3dzZXJcIixyLmJyb3dzZXI9ITAsci5lbnY9e30sci5hcmd2PVtdLHIudmVyc2lvbj1cIlwiLHIudmVyc2lvbnM9e30sci5vbj1mLHIuYWRkTGlzdGVuZXI9ZixyLm9uY2U9ZixyLm9mZj1mLHIucmVtb3ZlTGlzdGVuZXI9ZixyLnJlbW92ZUFsbExpc3RlbmVycz1mLHIuZW1pdD1mLHIucHJlcGVuZExpc3RlbmVyPWYsci5wcmVwZW5kT25jZUxpc3RlbmVyPWYsci5saXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuW119LHIuYmluZGluZz1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0sci5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0sci5jaGRpcj1mdW5jdGlvbih0KXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHIudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19XSkpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwicmVxdWlyZSgnem51aS1yZWFjdCcpO1xuaWYocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmVxdWlyZSgnLi9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2J1aWxkL2luZGV4LmpzJyk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMnKTtcbiAgICB9XG59ZWxzZSB7XG4gICAgcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG59IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUWVBFUyA9IHtcblx0ZW1haWw6ICdlbWFpbCcsXG5cdHRlbDogJ3RlbCcsXG5cdGlkOiAndGV4dCdcbn07XG5cbnZhciBJRCA9IHtcblx0Y2hlY2tDb2RlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBwID0gL15bMS05XVxcZHs1fSgxOHwxOXwyMClcXGR7Mn0oKDBbMS05XSl8KDFbMC0yXSkpKChbMC0yXVsxLTldKXwxMHwyMHwzMHwzMSlcXGR7M31bMC05WHhdJC87XG4gICAgICAgIHZhciBmYWN0b3IgPSBbIDcsIDksIDEwLCA1LCA4LCA0LCAyLCAxLCA2LCAzLCA3LCA5LCAxMCwgNSwgOCwgNCwgMiBdO1xuICAgICAgICB2YXIgcGFyaXR5ID0gWyAxLCAwLCAnWCcsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIgXTtcbiAgICAgICAgdmFyIGNvZGUgPSB2YWwuc3Vic3RyaW5nKDE3KTtcbiAgICAgICAgaWYocC50ZXN0KHZhbCkpIHtcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTwxNztpKyspIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdmFsW2ldKmZhY3RvcltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBhcml0eVtzdW0gJSAxMV0gPT0gY29kZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cdGNoZWNrRGF0ZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKDE4fDE5fDIwKVxcZHsyfSgoMFsxLTldKXwoMVswLTJdKSkoKFswLTJdWzEtOV0pfDEwfDIwfDMwfDMxKSQvO1xuICAgICAgICBpZihwYXR0ZXJuLnRlc3QodmFsKSkge1xuICAgICAgICAgICAgdmFyIHllYXIgPSB2YWwuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gdmFsLnN1YnN0cmluZyg0LCA2KTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gdmFsLnN1YnN0cmluZyg2LCA4KTtcbiAgICAgICAgICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKHllYXIrXCItXCIrbW9udGgrXCItXCIrZGF0ZSk7XG4gICAgICAgICAgICBpZihkYXRlMiAmJiBkYXRlMi5nZXRNb250aCgpID09IChwYXJzZUludChtb250aCkgLSAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXHRjaGVja1Byb3Y6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXlsxLTldWzAtOV0vO1xuICAgICAgICB2YXIgcHJvdnMgPSB7MTE6XCLljJfkuqxcIiwxMjpcIuWkqea0pVwiLDEzOlwi5rKz5YyXXCIsMTQ6XCLlsbHopb9cIiwxNTpcIuWGheiSmeWPpFwiLDIxOlwi6L695a6BXCIsMjI6XCLlkInmnpdcIiwyMzpcIum7kem+meaxnyBcIiwzMTpcIuS4iua1t1wiLDMyOlwi5rGf6IuPXCIsMzM6XCLmtZnmsZ9cIiwzNDpcIuWuieW+vVwiLDM1Olwi56aP5bu6XCIsMzY6XCLmsZ/opb9cIiwzNzpcIuWxseS4nFwiLDQxOlwi5rKz5Y2XXCIsNDI6XCLmuZbljJcgXCIsNDM6XCLmuZbljZdcIiw0NDpcIuW5v+S4nFwiLDQ1Olwi5bm/6KW/XCIsNDY6XCLmtbfljZdcIiw1MDpcIumHjeW6hlwiLDUxOlwi5Zub5bedXCIsNTI6XCLotLXlt55cIiw1MzpcIuS6keWNl1wiLDU0Olwi6KW/6JePIFwiLDYxOlwi6ZmV6KW/XCIsNjI6XCLnlJjogoNcIiw2MzpcIumdkua1t1wiLDY0Olwi5a6B5aSPXCIsNjU6XCLmlrDnloZcIiw3MTpcIuWPsOa5vlwiLDgxOlwi6aaZ5rivXCIsODI6XCLmvrPpl6hcIn07XG4gICAgICAgIGlmKHBhdHRlcm4udGVzdCh2YWwpKSB7XG4gICAgICAgICAgICBpZihwcm92c1t2YWxdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cdGNoZWNrSUQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYodmFsICYmIHRoaXMuY2hlY2tDb2RlKHZhbCkpIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gdmFsLnN1YnN0cmluZyg2LDE0KTtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja1Byb3YodmFsLnN1YnN0cmluZygwLDIpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGF0dHJzOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cdFx0aWYoKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCkgJiYgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgIT09IG51bGwpe1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLl9fZm9ybWF0VmFsdWUoX3ZhbHVlKVxuXHRcdH07XG5cdH0sXG5cdF9fZm9ybWF0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodmFsdWUpe1xuXHRcdFx0c3dpdGNoKHRoaXMucHJvcHMudHlwZSl7XG5cdFx0XHRcdGNhc2UgJ21vbnRoJzpcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLDcpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkYXRlJzpcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLDEwKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGF0ZXRpbWUtbG9jYWwnOlxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKS5qb2luKCdUJykuc3Vic3RyaW5nKDAsMTYpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdGlmKCF0aGlzLnZhbGlkYXRlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYodmFsdWUgPT09IG51bGwpe1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0dmFsaWRhdGU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dmFyIF92YWxpZGF0ZSA9IHRoaXMucHJvcHMudmFsaWRhdGUgfHwgdGhpcy5wcm9wcy50eXBlO1xuXG5cdFx0aWYodHlwZW9mIF92YWxpZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpZihfdmFsaWRhdGUodmFsdWUsIHRoaXMpID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fWVsc2UgaWYodHlwZW9mIF92YWxpZGF0ZSA9PSAnc3RyaW5nJyl7XG5cdFx0XHRzd2l0Y2goX3ZhbGlkYXRlKXtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdGlmKCEoL15cXHcrKCguXFx3Kyl8KC1cXHcrKSlAW0EtWmEtejAtOV0rKCgufC0pW0EtWmEtejAtOV0rKS5bQS1aYS16MC05XSskLy50ZXN0KHZhbHVlKSkpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RlbCc6XG5cdFx0XHRcdFx0aWYoISgvXjEoM3w0fDV8Nnw3fDh8OSlcXGR7OX0kLy50ZXN0KHZhbHVlKSkpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2lkJzpcblx0XHRcdFx0XHRpZighKElELmNoZWNrSUQodmFsdWUpKSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9fcGFyc2VHZXRWYWx1ZShSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLl9fcGFyc2VTZXRWYWx1ZSh2YWx1ZSksIHRoaXM7XG5cdH0sXG5cdF9fcGFyc2VHZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdudW1iZXInKXtcblx0XHRcdHZhbHVlID0gK3ZhbHVlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMudHlwZT09J2RhdGUnKXtcblx0XHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZSB8fCAnJztcblx0fSxcblx0X19wYXJzZVNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHJldHVybiB0aGlzLl9fZm9ybWF0VmFsdWUodmFsdWUpO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLl9fZm9ybWF0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRldmVudC52YWx1ZSA9IF92YWx1ZTtcblx0XHRldmVudC52YWxpZGF0ZSA9IF92YWx1ZTtcblxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5fX2Zvcm1hdFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudmFsaWRhdGUgPSBfdmFsdWU7XG5cblx0XHR0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkJsdXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuX19mb3JtYXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnZhbGlkYXRlID0gX3ZhbHVlO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuX19mb3JtYXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnZhbGlkYXRlID0gX3ZhbHVlO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF90eXBlID0gVFlQRVNbdGhpcy5wcm9wcy50eXBlXSB8fCB0aGlzLnByb3BzLnR5cGUgfHwgJ3RleHQnO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ey4uLnRoaXMucHJvcHMuYXR0cnN9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dHlwZT17X3R5cGV9XG5cdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRvbmx5fVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfVxuXHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0b25CbHVyPXt0aGlzLl9fb25CbHVyfVxuXHRcdFx0XHRvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJJbnB1dHMnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHNwbGl0OiAnLydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgX3ZhbHVlcyA9IFtdLFxuXHRcdFx0X3ZhbHVlID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiB0aGlzLnJlZnMpe1xuXHRcdFx0X3ZhbHVlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzW2tleV0pLnZhbHVlO1xuXHRcdFx0aWYoX3ZhbHVlKXtcblx0XHRcdFx0X3ZhbHVlcy5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZXMuam9pbih0aGlzLnByb3BzLnNwbGl0KTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHZhciBfdmFsdWVzID0gdmFsdWUuc3BsaXQodGhpcy5wcm9wcy5zcGxpdCk7XG5cdFx0T2JqZWN0LmtleXModGhpcy5yZWZzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXksIGluZGV4KXtcblx0XHRcdGlmKF92YWx1ZXNbaW5kZXhdKXtcblx0XHRcdFx0UmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzW2tleV0pLnZhbHVlID0gX3ZhbHVlc1tpbmRleF07XG5cdFx0XHR9XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHJldHVybiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH0pLCB0aGlzO1xuXHR9LFxuXHRfX29uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3ZhbHVlcyA9ICh0aGlzLnByb3BzLnZhbHVlfHwnJykuc3BsaXQodGhpcy5wcm9wcy5zcGxpdCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItaW5wdXRzJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5kYXRhfHxbXSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGlucHV0IHZhbHVlPXtfdmFsdWVzW2luZGV4XX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuX19vbklucHV0Q2hhbmdlKGV2ZW50LCBpdGVtLCBpbmRleCl9IHJlZj17aW5kZXh9IGtleT17aW5kZXh9IHBsYWNlaG9sZGVyPXtpdGVtfSB0eXBlPVwidGV4dFwiIC8+XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWFyY2hJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGF0dHJzOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbCxcblx0XHRcdGZvY3VzZWQ6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX3BhcnNlR2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdudW1iZXInKXtcblx0XHRcdHZhbHVlID0gK3ZhbHVlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nZGF0ZScpe1xuXHRcdFx0aWYoIXZhbHVlKXtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX3BhcnNlU2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdkYXRlJyAmJiB2YWx1ZSl7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zm9jdXNlZDogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uQmx1cjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb2N1c2VkOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbk9wdEl0ZW1DbGljazogZnVuY3Rpb24gKG9wdCwgaW5kZXgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0b3B0aW9uOiBvcHRcblx0XHR9KTtcblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8bGkgb25DbGljaz17KCk9PnRoaXMuX19vbk9wdEl0ZW1DbGljayhpdGVtLCBpbmRleCl9IGtleT17aW5kZXh9PntpdGVtfTwvbGk+O1xuXHR9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ6ci1zZWFyY2gtaW5wdXQtb3B0aW9uc1wiPlxuXHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5vcHRpb25zfSBpdGVtUmVuZGVyPXt0aGlzLl9fb3B0SXRlbVJlbmRlcn0gLz5cblx0XHQ8L3VsPjtcblx0fSxcblx0X19yZW5kZXJPcHRpb25zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPHBvcHVwLkRyb3Bkb3duIGNsYXNzTmFtZT1cImZpbHRlci1vcHRcIiBcblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcixcblx0XHRcdFx0XHRvbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tdmFsdWVcIj57dGhpcy5zdGF0ZS5vcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImNhcmV0LWRvd25cIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdDwvcG9wdXAuRHJvcGRvd24+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItc2VhcmNoLWlucHV0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLl9fcmVuZGVyT3B0aW9ucygpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBzZWFyY2gtaWNvbiBmYS1zZWFyY2ggZmEtdy0xNiBpY29uXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHpcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdFx0XHRvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTZWFyY2hJbnB1dCA9IHJlcXVpcmUoJy4vU2VhcmNoSW5wdXQnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VhcmNoU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnLFxuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKHRoaXMucHJvcHMubXVsdGlwbGUpe1xuXHRcdFx0aWYodHlwZW9mIF92YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRfdmFsdWUgPSBfdmFsdWUuc3BsaXQoJywnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pe1xuXHRcdFx0XHRcdGlmKGl0ZW0pe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0X3ZhbHVlID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHR2YWx1ZXM6IG51bGwsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX19sb2FkRGF0YSgpO1xuXHR9LFxuXHRfX2xvYWREYXRhOiBmdW5jdGlvbiAoKXtcblx0XHR6bi5kYXRhLnJlcXVlc3QodGhpcy5wcm9wcy5kYXRhKS50aGVuKGZ1bmN0aW9uIChkYXRhKXtcblx0XHRcdGlmKGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEuc2xpY2UoMCksXG5cdFx0XHRcdFx0dmFsdWVzOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYodGhpcy5wcm9wcy5tdWx0aXBsZSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSA9PSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaXRlbSwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtKTtcblx0fSxcblx0X19jaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSBpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BzLm11bHRpcGxlKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLnZhbHVlID09IF92YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbVJlbmRlciwge1xuXHRcdFx0ZGF0YTogaXRlbSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdG93bmVyOiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCkge1xuXHRcdFx0X2VsZW1lbnQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9lbGVtZW50O1xuXHR9LFxuXHRfX3JlbmRlckxpc3Q6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLnZhbHVlcyl7XG5cdFx0XHRyZXR1cm4gPGxvYWRlci5Mb2FkaW5nIGNvbnRlbnQ9XCLliqDovb3kuK0gLi4uIFwiIC8+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRhLWxpc3RcIj5cblx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGEtbGlzdC1pdGVtIFwiICsgKHRoaXMuX19jaGVja2VkKGl0ZW0sIGluZGV4KSA/ICdhY3RpdmVkJyA6ICcnKX0ga2V5PXtpbmRleH0gb25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX0+XG5cdFx0XHRcdFx0XHR7dGhpcy5fX2l0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uICh2YWx1ZSwgaXRlbSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMucHJvcHMub25GaWx0ZXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25GaWx0ZXIodmFsdWUsIGl0ZW0sIGluZGV4KTtcblx0XHR9XG5cblx0XHR2YXIgX3RleHQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0aWYoX3RleHQuaW5kZXhPZih2YWx1ZSkgIT0gLTEpe1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fVxuXHR9LFxuXHRfX29uSW5wdXRTZWFyY2g6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdGlmKF92YWx1ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZXMgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCk9PnRoaXMuX19vbkZpbHRlcihfdmFsdWUsIGl0ZW0sIGluZGV4KSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlcyA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlYXJjaC1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxTZWFyY2hJbnB1dCBvbkVudGVyPXt0aGlzLl9fb25JbnB1dFNlYXJjaH0gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJMaXN0KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWdJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiAodGhpcy5wcm9wcy52YWx1ZXx8JycpLnNwbGl0KCcsJykuZmlsdGVyKCh2YWx1ZSk9PnZhbHVlKVxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19wYXJzZUdldFZhbHVlKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuX19wYXJzZVNldFZhbHVlKHZhbHVlKSwgdGhpcztcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGUgPT0gMTMgJiYgX3ZhbHVlKXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSAnJztcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbktleVVwICYmIHRoaXMucHJvcHMub25LZXlVcChldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGUgPT0gMTMgJiYgX3ZhbHVlKXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuam9pbignLCcpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgdGhpcyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSAnJztcblx0XHR9XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSA4ICYmICFfdmFsdWUpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wb3AoKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5qb2luKCcsJyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdFx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXHRcdH1cblx0fSxcblx0X19vblJvb3RDbGljazogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zdGF0ZS5pbnB1dC5mb2N1cygpO1xuXHR9LFxuXHRfX29uVGFnRGVsZXRlOiBmdW5jdGlvbiAoaW5kZXgpe1xuXHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fdGFnUmVuZGVyOiBmdW5jdGlvbih0YWcsIGluZGV4KXtcblx0XHRyZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGFnXCIga2V5PXtpbmRleH0+XG5cdFx0XHR7dGFnfVxuXHRcdFx0PHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX29uVGFnRGVsZXRlKGluZGV4KX0gdGl0bGU9XCLliKDpmaTlhYPntKBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidHJhc2gtYWx0XCIgY2xhc3NOYW1lPVwicmVtb3ZlLWljb24gc3ZnLWlubGluZS0tZmEgZmEtdHJhc2gtYWx0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMiA0NjRhNDggNDggMCAwIDAgNDggNDhoMjg4YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjEyOEgzMnptMjcyLTI1NmExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwek00MzIgMzJIMzEybC05LjQtMTguN0EyNCAyNCAwIDAgMCAyODEuMSAwSDE2Ni44YTIzLjcyIDIzLjcyIDAgMCAwLTIxLjQgMTMuM0wxMzYgMzJIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdDwvc3Bhbj47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLl9fb25Sb290Q2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhZy1pbnB1dCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLm1hcCh0aGlzLl9fdGFnUmVuZGVyKVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgcmVmPXsoaW5wdXQpPT50aGlzLnN0YXRlLmlucHV0ID0gaW5wdXR9IGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiBvbktleURvd249e3RoaXMuX19vbktleURvd259IG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwidGFnLWlucHV0XCJcblx0XHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdFx0dHlwZT17dGhpcy5wcm9wcy50eXBlfHwndGV4dCd9XG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfVxuXHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuX19vbkZvY3VzfVxuXHRcdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0XHRvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGV4dGFyZWEnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhdHRyczoge30sXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgJydcblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vcGxhY2Vob2xkZXI9XCJleC4mIzEzOyYjMTA7dGVzdDFAdGVzdC5jb20mIzEzOyYjMTA7dGVzdDJAdGVzdC5jb20mIzEzOyYjMTA7Li4uXCJcblx0XHR2YXIgX3ZhbHVlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWU7XG5cdFx0Ly9jb25zb2xlLmxvZyhfdmFsdWUucmVwbGFjZSgvXFx1MDAwQS9nLCAnXFxuJykpO1xuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB2YWx1ZSwgdGhpcztcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGV4dGFyZWFcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfVxuXHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdHsuLi50aGlzLnByb3BzLmF0dHJzfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfHwnJ31cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0b25CbHVyPXt0aGlzLl9fb25CbHVyfVxuXHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnSW5wdXQnOiByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgJ0lucHV0cyc6IHJlcXVpcmUoJy4vSW5wdXRzLmpzJyksXG4gICAgJ1NlYXJjaElucHV0JzogcmVxdWlyZSgnLi9TZWFyY2hJbnB1dC5qcycpLFxuICAgICdTZWFyY2hTZWxlY3QnOiByZXF1aXJlKCcuL1NlYXJjaFNlbGVjdC5qcycpLFxuICAgICdUYWdJbnB1dCc6IHJlcXVpcmUoJy4vVGFnSW5wdXQuanMnKSxcbiAgICAnVGV4dGFyZWEnOiByZXF1aXJlKCcuL1RleHRhcmVhLmpzJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wienJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJ6cmxvYWRlclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9