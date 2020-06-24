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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L2RldmVsb3BtZW50L2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vVGFnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vVGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJhdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJnZXRWYWx1ZSIsIl9fcGFyc2VHZXRWYWx1ZSIsImZpbmRET01Ob2RlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIl9fcGFyc2VTZXRWYWx1ZSIsInByb3BzIiwidHlwZSIsInNwbGl0IiwiX19vbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Iiwib25DaGFuZ2UiLCJfX29uRm9jdXMiLCJvbkZvY3VzIiwiX19vbkJsdXIiLCJvbkJsdXIiLCJfX29uS2V5VXAiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJvbkVudGVyIiwib25LZXlVcCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwicmVxdWlyZWQiLCJzdHlsZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImRhdGEiLCJnZXRJbml0aWFsU3RhdGUiLCJfdmFsdWVzIiwiX3ZhbHVlIiwia2V5IiwicmVmcyIsInB1c2giLCJqb2luIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpbmRleCIsImJpbmQiLCJzZXRTdGF0ZSIsIl9fb25JbnB1dENoYW5nZSIsIml0ZW0iLCJtYXAiLCJwb3B1cCIsImZvY3VzZWQiLCJjb25zb2xlIiwibG9nIiwiX19vbk9wdEl0ZW1DbGljayIsIm9wdCIsIm9wdGlvbiIsIl9fb3B0SXRlbVJlbmRlciIsIl9faWNvbkNsaWNrUmVuZGVyIiwib3B0aW9ucyIsIl9fcmVuZGVyT3B0aW9ucyIsIm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQiLCJwb3BvdmVyIiwiX19pY29uQ2xpY2siLCJzdGF0ZSIsImlubmVyVGV4dCIsInN0b3BQcm9wYWdhdGlvbiIsImlubmVySFRNTCIsIl9fb25LZXlEb3duIiwiZm9yY2VVcGRhdGUiLCJfX29uUm9vdENsaWNrIiwiaW5wdXQiLCJmb2N1cyIsIl9fdGFnUmVuZGVyIiwidGFnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FB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QUUsS0FBS1MsS0FBTCxDQUFXbUIsUUFEdEI7QUFFQyxXQUFLLEVBQUUsS0FBS25CLEtBQUwsQ0FBV29CO0FBRm5CLE9BR0ssS0FBS3BCLEtBQUwsQ0FBV1YsS0FIaEI7QUFJQyxVQUFJLEVBQUUsS0FBS1UsS0FBTCxDQUFXcUIsSUFKbEI7QUFLQyxXQUFLLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0gsS0FMbkI7QUFNQyxrQkFBWSxFQUFFLEtBQUtHLEtBQUwsQ0FBV3NCLFlBQVgsSUFBeUIsS0FBS3RCLEtBQUwsQ0FBV0gsS0FObkQ7QUFPQyxpQkFBVyxFQUFFLEtBQUtHLEtBQUwsQ0FBV3VCLFdBUHpCO0FBUUMsY0FBUSxFQUFFLEtBQUt2QixLQUFMLENBQVdSLFFBUnRCO0FBU0MsY0FBUSxFQUFFLEtBQUtRLEtBQUwsQ0FBV1AsUUFUdEI7QUFVQyxZQUFNLEVBQUUsS0FBS2dCLFFBVmQ7QUFXQyxhQUFPLEVBQUUsS0FBS0YsU0FYZjtBQVlDLGFBQU8sRUFBRSxLQUFLSSxTQVpmO0FBYUMsY0FBUSxFQUFFLEtBQUtSO0FBYmhCLE9BREQ7QUFnQkE7QUF0RGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFsQixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixXQUFTSCxtQkFBTyxDQUFDLDhCQUFELENBREg7QUFFYixZQUFVQSxtQkFBTyxDQUFDLGdDQUFELENBRko7QUFHYixpQkFBZUEsbUJBQU8sQ0FBQywwQ0FBRCxDQUhUO0FBSWIsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRCxDQUpOO0FBS2IsY0FBWUEsbUJBQU8sQ0FBQyxvQ0FBRDtBQUxOLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsNkJBQTZCLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBBbGVydCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkFsZXJ0JyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICBvbkNsaWNrOiBudWxsLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogJ+ehruiupCdcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcbiAgX19vbkNsaWNrOiBmdW5jdGlvbiBfX29uQ2xpY2soaXRlbSwgaW5kZXgpIHtcbiAgICBpdGVtLmluZGV4ID0gaW5kZXg7XG5cbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soaXRlbSwgdGhpcyk7XG5cbiAgICBfcmVzdWx0ID0gaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhpdGVtLCB0aGlzKTtcblxuICAgIGlmIChfcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgem4uZGVidWcoJ2FsZXJ0LmNsb3NlJyk7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLWFsZXJ0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtaW5uZXJcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LXRpdGxlXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlKSwgdGhpcy5wcm9wcy5jb250ZW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1jb250ZW50XCJcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWJ0bnNcIlxuICAgIH0sIHRoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBjbGFzc05hbWU6IFwiYWxlcnQtYnRuXCIsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLl9fb25DbGljayhpdGVtLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGl0ZW0udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKSkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBBbGVydDogQWxlcnQsXG4gIGFsZXJ0OiBmdW5jdGlvbiBhbGVydChjb250ZW50LCB0aXRsZSwgY2FsbGJhY2ssIHByb3BzKSB7XG4gICAgdmFyIF9hbGVydCA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIF9leHRlbmRzKHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBvbkNsaWNrOiBjYWxsYmFja1xuICAgIH0sIHByb3BzKSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiBfYWxlcnQ7XG4gIH0sXG4gIGNvbmZpcm06IGZ1bmN0aW9uIGNvbmZpcm0oY29udGVudCwgdGl0bGUsIF9jb25maXJtMiwgY2FuY2VsLCBvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zID0gem4uZXh0ZW5kKHtcbiAgICAgIGNhbmNlbDogJ+WPlua2iCcsXG4gICAgICBjb25maXJtOiAn56Gu5a6aJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgdmFyIF9jb25maXJtID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwge1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6IF9vcHRpb25zLmNhbmNlbCxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IGNhbmNlbCAmJiBjYW5jZWwoX2NvbmZpcm0pO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfY29uZmlybS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6IF9vcHRpb25zLmNvbmZpcm0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBfY29uZmlybTIgJiYgX2NvbmZpcm0yKF9jb25maXJtKTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX2NvbmZpcm0uZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIF9jb25maXJtO1xuICB9LFxuICBwcm9tcHQ6IGZ1bmN0aW9uIHByb21wdChhcmd2KSB7XG4gICAgdmFyIF9hcmd2ID0gem4uZXh0ZW5kKHtcbiAgICAgIHRpdGxlOiBhcmd2LnRpdGxlLFxuICAgICAgY29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1pbnB1dFwiLFxuICAgICAgICBvbkNoYW5nZTogYXJndi5vbkNoYW5nZSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgIH0pLFxuICAgICAgY29uZmlybTogYXJndi5jb25maXJtLFxuICAgICAgY2FuY2VsOiBhcmd2LmNhbmNlbFxuICAgIH0sIGFyZ3YpO1xuXG4gICAgdmFyIF9wcm9tcHQgPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7XG4gICAgICBjb250ZW50OiBfYXJndi5jb250ZW50LFxuICAgICAgdGl0bGU6IF9hcmd2LnRpdGxlLFxuICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgdGV4dDogX2FyZ3YuY2FuY2VsVGV4dCB8fCAn5Y+W5raIJyxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCwgYWxlcnQpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IF9hcmd2LmNhbmNlbCAmJiBfYXJndi5jYW5jZWwoZXZlbnQsIGFsZXJ0KTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX3Byb21wdC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6IF9hcmd2LmNvbmZpcm1UZXh0IHx8ICfnoa7lrponLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50LCBhbGVydCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gX2FyZ3YuY29uZmlybSAmJiBfYXJndi5jb25maXJtKGV2ZW50LCBhbGVydCk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9wcm9tcHQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KSwge1xuICAgICAgXCJjbGFzc1wiOiAnbW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXknXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIF9wcm9tcHQ7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIG1vZGFsID0gcmVxdWlyZSgnLi9Nb2RhbCcpLm1vZGFsO1xuXG52YXIgRGlhbG9nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSRGlhbG9nJyxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICB9O1xuICB9LFxuICBfX29uQ2xvc2U6IGZ1bmN0aW9uIF9fb25DbG9zZShldmVudCkge1xuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsb3NlICYmIHRoaXMucHJvcHMub25DbG9zZShldmVudCwgdGhpcyk7XG5cbiAgICBpZiAoX3Jlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtZGlhbG9nJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICBcImRhdGEtZm9jdXNcIjogdGhpcy5wcm9wcy5mb2N1c1xuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctaGVhZGVyXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkaWFsb2ctdGl0bGVcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUpLCB0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgb25DbGljazogdGhpcy5fX29uQ2xvc2UsXG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLWNsb3NlXCJcbiAgICB9LCBcInhcIikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiZGlhbG9nLWJvZHlcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBEaWFsb2c6IERpYWxvZyxcbiAgZGlhbG9nOiBmdW5jdGlvbiBkaWFsb2coYXJndiwgaWZQdXNoKSB7XG4gICAgdmFyIF9kaWFsb2cgPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywgYXJndiksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGlmUHVzaCk7XG5cbiAgICByZXR1cm4gX2RpYWxvZztcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgcG9wb3ZlciA9IHJlcXVpcmUoJy4vUG9wb3ZlcicpLnBvcG92ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBEcm9wZG93bjogUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnWlJEcm9wZG93bicsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIGV2ZW50VHlwZTogJ2NsaWNrJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsIHRoaXMuX19ldmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgICB9LFxuICAgIGdldFBhcmVudDogZnVuY3Rpb24gZ2V0UGFyZW50KHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3pyLXBvcHVwLWRyb3Bkb3duJykpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfX2V2ZW50SGFuZGxlcjogZnVuY3Rpb24gX19ldmVudEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF90YXJnZXQgPSB0aGlzLmdldFBhcmVudChldmVudC50YXJnZXQpLFxuICAgICAgICAgIF9wb3BvdmVyID0gem4uZXh0ZW5kKHt9LCB0aGlzLnByb3BzLnBvcG92ZXIpO1xuXG4gICAgICBpZiAoX3RhcmdldCAmJiBfcG9wb3ZlciAmJiBfcG9wb3Zlci5yZW5kZXIpIHtcbiAgICAgICAgdmFyIF9yZW5kZXIgPSBfcG9wb3Zlci5yZW5kZXI7XG5cbiAgICAgICAgaWYgKHpuLmlzKF9yZW5kZXIsICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgaWYgKCFfcmVuZGVyLnByb3RvdHlwZSB8fCAhX3JlbmRlci5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgICAgICAgICBfcmVuZGVyID0gX3JlbmRlcihldmVudCwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9yZW5kZXIpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBfcG9wb3Zlci5yZW5kZXIgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBfcG9wb3Zlci5yZW5kZXI7XG4gICAgICAgICAgcG9wb3Zlci5yZW5kZXIoX3JlbmRlciwgem4uZXh0ZW5kKHtcbiAgICAgICAgICAgIHJlc2V0OiB0cnVlLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdGFyZ2V0OiBfdGFyZ2V0XG4gICAgICAgICAgfSwgX3BvcG92ZXIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtZHJvcGRvd25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBMb2FkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJMb2FkZXInLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIHRpdGxlOiAnTG9hZGluZyAuLi4gJ1xuICAgIH07XG4gIH0sXG4gIF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gX19yZW5kZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRpdGxlKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJsb2FkZXJcIixcbiAgICAgICAgXCJkYXRhLWxvYWRlclwiOiBcInNwaW5uZXJcIlxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiXG4gICAgICB9LCB0aGlzLnByb3BzLnRpdGxlKSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbG9hZGVyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHpudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSlcbiAgICB9LCB0aGlzLl9fcmVuZGVyQ29udGVudCgpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIGxvYWRlcjogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoYXJndikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBhcmd2KSwge1xuICAgICAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5JyxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2xvYWRlciA9IF9yZWY7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9LFxuICAgICAgbG9hZGluZzogZnVuY3Rpb24gbG9hZGluZyh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUoe1xuICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgTW9kYWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJNb2RhbCcsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyk7XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmRlc3Ryb3koY2FsbGJhY2spO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkIHx8IHRoaXMuc3RhdGUuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUoX2RvbSk7XG5cbiAgICBpZiAoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoX2RvbSAmJiBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblxuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgdGhpcy5zdGF0ZS5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn0pO1xuO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1vZGFsOiBNb2RhbCxcbiAgbW9kYWw6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLW1vZGFsLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tb2RhbHMgPSBbXTtcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShjb250ZW50LCBvcHRpb25zLCBpZlB1c2gpIHtcbiAgICAgICAgdmFyIF9tb2RhbCA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIG9wdGlvbnMsIGNvbnRlbnQpLCB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIFwiY2xhc3NcIjogem51aS5jbGFzc25hbWUoJ3pyLXBvcHVwLW1vZGFsJywgb3B0aW9uc1tcImNsYXNzXCJdKSxcbiAgICAgICAgICBzdHlsZTogem51aS5zdHlsZShvcHRpb25zLnN0eWxlKVxuICAgICAgICB9LCB0aGlzLl9kb20pKTtcblxuICAgICAgICB6bi5kZWJ1ZygnTW9kYWwgY3JlYXRlZCgnICsgKHRoaXMuX21vZGFscy5sZW5ndGggKyAxKSArICcpOiAnLCBfbW9kYWwpO1xuXG4gICAgICAgIGlmIChpZlB1c2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5fbW9kYWxzLnB1c2goX21vZGFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfbW9kYWw7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICB6bi5kZWJ1ZygnTW9kYWwgY2xvc2UoJyArIHRoaXMuX21vZGFscy5sZW5ndGggKyAnKTogJyk7XG5cbiAgICAgICAgdmFyIF9tb2RhbCA9IHRoaXMuX21vZGFscy5wb3AoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9tb2RhbHMpO1xuXG4gICAgICAgIGlmIChfbW9kYWwpIHtcbiAgICAgICAgICBpZiAoX21vZGFsLnN0YXRlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoZGVsYXksIGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX21vZGFsLmRlc3Ryb3koY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbW9kYWwuZGVzdHJveShjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgY2xvc2VBbGw6IGZ1bmN0aW9uIGNsb3NlQWxsKGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLl9tb2RhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZShkZWxheSwgdGhpcy5jbG9zZUFsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBzaXplOiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kYWxzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUWVBFX0lDT05TID0ge1xuICBoZWFydDogJ000NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45eicsXG4gIHNlY29uZGFyeTogJ000NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHonLFxuICBzdWNjZXNzOiAnTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicsXG4gIHdhcm5pbmc6ICdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6JyxcbiAgZXJyb3I6ICdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6JyxcbiAgaW5mbzogJ00yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6J1xufTtcbnZhciBOb3RpZmllciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUk5vdGlmaWNhdGlvbicsXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxNTAwKTtcbiAgfSxcbiAgb3V0OiBmdW5jdGlvbiBvdXQoKSB7XG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXG4gICAgX2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1ub3RpZmllciBub3RpZmljYXRpb24taW4nLCB0aGlzLnByb3BzLnR5cGUpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImljb25cIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcbiAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICBkOiBUWVBFX0lDT05TW3RoaXMucHJvcHMudHlwZSB8fCAnaW5mbyddXG4gICAgfSkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIlxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2xvc2UgZmEgZmEtdGltZXNcIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMub3V0XG4gICAgfSkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBOb3RpZmllcjogTm90aWZpZXIsXG4gIG5vdGlmaWVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogJ3pyLXBvcHVwLW5vdGlmaWVyLWNvbnRhaW5lcidcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb3BlbjogZnVuY3Rpb24gb3Blbih0eXBlLCBjb250ZW50LCBkZWxheSkge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWVyLCB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgICB9KSwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCB0aGlzLl9kb20pKTtcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3N1Y2Nlc3MnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCd3YXJuaW5nJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdlcnJvcicsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBpbmZvOiBmdW5jdGlvbiBpbmZvKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgUG9wb3ZlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlBvcG92ZXInLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGlkZGVuSGVpZ2h0OiA1LFxuICAgICAgY2xvc2VhYmxlOiBmYWxzZSxcbiAgICAgIHBvcG92ZXJXaWR0aDogbnVsbCxcbiAgICAgIHBvcG92ZXJIZWlnaHQ6IG51bGxcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyb3dDbGFzc05hbWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZXZlbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50VHlwZSA9IHRoaXMucHJvcHMuZXZlbnQudHlwZSB8fCB0aGlzLnByb3BzLmV2ZW50O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXG4gICAgICB0aGlzLl9kb20uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudFR5cGUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25Db250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXG4gICAgICAgIGlmIChfcmVzdWx0ID09PSB0cnVlKSB7Ly9ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpLCB0cnVlKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uUG9wb3ZlckRpZE1vdW50ICYmIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQodGhpcyk7XG4gIH0sXG4gIF9faXNNYXRjaFBhcmVudDogZnVuY3Rpb24gX19pc01hdGNoUGFyZW50KHRhcmdldCwgcGFyZW50KSB7XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09ICdCT0RZJyB8fCB0YXJnZXQudGFnTmFtZSA9PSAnSFRNTCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0ICE9PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pc01hdGNoUGFyZW50KHRhcmdldC5wYXJlbnROb2RlLCBwYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX19vbldpbmRvd0NsaWNrOiBmdW5jdGlvbiBfX29uV2luZG93Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX19pc01hdGNoUGFyZW50KGV2ZW50LnRhcmdldCwgdGhpcy5fZG9tKSkge1xuICAgICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50ICYmIHRoaXMucHJvcHMub25XaW5kb3dPdXRzaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXG4gICAgICBpZiAoX3Jlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKFwiUG9wb3Zlcjogb24gd2luZG93IG91dHNpZGUgY29udGFpbmVyIGV2ZW50XCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXG4gICAgICBpZiAoX3Jlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKFwiUG9wb3Zlcjogb24gd2luZG93IGluc2lkZSBjb250YWluZXIgZXZlbnRcIik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UodGFnKSB7XG4gICAgLy96bi5pbmZvKCdQb3BvdmVyLmNsb3NlOicsIHRhZyk7XG4gICAgaWYgKHRoaXMuX2RvbSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLCB0aGlzLl9fb25XaW5kb3dDbGljaywgZmFsc2UpO1xuXG4gICAgICBpZiAodGhpcy5fZG9tLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5fZG9tLnBhcmVudE5vZGUuc3R5bGUgPSAnJztcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9kb20ucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RvbSA9IG51bGw7XG4gICAgICB0aGlzLl9ldmVudFR5cGUgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgZml4UG9zaXRpb246IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKHRhcmdldCkge1xuICAgIHZhciBfcG9wb3ZlciA9IHRoaXMuX2RvbTtcblxuICAgIHZhciBfdCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuICAgICAgICBfcG9wb3ZlcldpZHRoID0gdGhpcy5wcm9wcy5wb3BvdmVyV2lkdGggfHwgX3Qud2lkdGgsXG4gICAgICAgIF9wb3BvdmVySGVpZ2h0ID0gdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0IHx8IHpuLmRvbS5nZXRQb3NpdGlvbihfcG9wb3ZlcikuaGVpZ2h0LFxuICAgICAgICBfbGVmdCA9IG51bGwsXG4gICAgICAgIF90b3AgPSBudWxsLFxuICAgICAgICBfYXJyb3dDbGFzc05hbWVzID0gW107XG5cbiAgICBpZiAoX3BvcG92ZXJXaWR0aCA9PSAnMTAwJScpIHtcbiAgICAgIF9wb3BvdmVyV2lkdGggPSBfdC53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoX3BvcG92ZXJIZWlnaHQgPCB0aGlzLnByb3BzLmhpZGRlbkhlaWdodCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkhpZGRlbiAmJiB0aGlzLnByb3BzLm9uSGlkZGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF90LnggKyBfcG9wb3ZlcldpZHRoID4gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoKSB7XG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1yaWdodCcpO1xuXG4gICAgICBfbGVmdCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBfdC54IC0gX3Qud2lkdGg7XG4gICAgICBfcG9wb3Zlci5zdHlsZS5yaWdodCA9IF9sZWZ0ICsgJ3B4JztcbiAgICAgIF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX2xlZnQgPSBfdC54O1xuXG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1sZWZ0Jyk7XG5cbiAgICAgIF9wb3BvdmVyLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKF90LnkgKyBfcG9wb3ZlckhlaWdodCA+IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQpIHtcbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbScpO1xuXG4gICAgICBfdG9wID0gX3QuaGVpZ2h0ICsgMTA7XG4gICAgICBfcG9wb3Zlci5zdHlsZS5ib3R0b20gPSBfdG9wICsgJ3B4JztcbiAgICAgIF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90b3AgPSBfdC55ICsgX3QuaGVpZ2h0ICsgMTA7XG5cbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLXRvcCcpO1xuXG4gICAgICBfcG9wb3Zlci5zdHlsZS50b3AgPSBfdG9wICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVyV2lkdGgpIHtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLndpZHRoID0gX3BvcG92ZXJXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCkge1xuICAgICAgaWYgKF9wb3BvdmVyLm9mZnNldEhlaWdodCAhPSBfcG9wb3ZlckhlaWdodCkge1xuICAgICAgICBfcG9wb3Zlci5zdHlsZS5oZWlnaHQgPSBfcG9wb3ZlckhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3BvcG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnem4tYW5pbWF0ZS1zY2FsZS11cCcpO1xuXG4gICAgX3BvcG92ZXIuY2xhc3NOYW1lID0gX3BvcG92ZXIuY2xhc3NOYW1lICsgJyAnICsgX2Fycm93Q2xhc3NOYW1lcy5qb2luKCcgJyk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3N0eWxlID0ge307XG5cbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQpIHtcbiAgICAgIF9zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXBvcG92ZXIgenItYXJyb3cgenItYXJyb3ctY29sb3Itd2hpdGUnLCB0aGlzLnN0YXRlLmFycm93Q2xhc3NOYW1lKVxuICAgIH0sIHRoaXMucHJvcHMuY2xvc2VhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicG9wb3Zlci1jbG9zZSB6ci1ob3Zlci1zZWxmLWxvYWRpbmdcIixcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jbG9zZSgnc2VsZiBjbG9zZScpO1xuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXNcIixcbiAgICAgIGNsYXNzTmFtZTogXCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLFxuICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIGQ6IFwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiXG4gICAgfSkpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogKHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5zdHlsZSksIF9zdHlsZSlcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUG9wb3ZlcjogUG9wb3ZlcixcbiAgcG9wb3Zlcjogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtcG9wb3Zlci1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVzZXQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCd6bi5wb3BvdmVyOnJlbmRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcG92ZXIgPSBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcG92ZXIsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9KSksIHRoaXMuX2RvbSksIHRoaXMuX3BvcG92ZXI7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKHRhZykge1xuICAgICAgICBpZiAodGhpcy5fcG9wb3Zlcikge1xuICAgICAgICAgIHRoaXMuX3BvcG92ZXIuY2xvc2UodGFnKTtcblxuICAgICAgICAgIHRoaXMuX3BvcG92ZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9hc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJUb2FzdCcsXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLm91dCwgdGhpcy5wcm9wcy5kZWxheSB8fCAxODAwKTtcbiAgfSxcbiAgb3V0OiBmdW5jdGlvbiBvdXQoKSB7XG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIF9kb20uY2xhc3NMaXN0LmFkZCgndG9hc3Qtb3V0Jyk7XG5cbiAgICBfZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblxuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSwgZmFsc2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtdG9hc3QgdG9hc3QtaW4nLCB0aGlzLnByb3BzLnR5cGUpXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVG9hc3Q6IFRvYXN0LFxuICB0b2FzdDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtdG9hc3QtY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb3BlbjogZnVuY3Rpb24gb3Blbih0eXBlLCBjb250ZW50LCBkZWxheSkge1xuICAgICAgICB2YXIgX2RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9hc3QsIHtcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICAgIH0pLCBfZG9tKTtcblxuICAgICAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQoX2RvbSk7XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uIHdhcm5pbmcoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignZGFuZ2VyJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8oY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignaW5mbycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBUb29sdGlwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSVG9vbHRpcCcsXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcnJvd0NsYXNzTmFtZTogJydcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdGhpcy5maXhQb3NpdGlvbih0aGlzLnByb3BzLnRhcmdldCk7XG4gIH0sXG4gIGZpeFBvc2l0aW9uOiBmdW5jdGlvbiBmaXhQb3NpdGlvbih0YXJnZXQpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXhQb3NpdGlvbiB0YXJnZXQgaXMgbnVsbC4nKTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbVdpZHRoID0gdGhpcy5fZG9tLm9mZnNldFdpZHRoLFxuICAgICAgICBfZG9tSGVpZ2h0ID0gdGhpcy5fZG9tLm9mZnNldEhlaWdodCxcbiAgICAgICAgX3RhcmdldCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuICAgICAgICBfbGVmdCA9IG51bGwsXG4gICAgICAgIF90b3AgPSBudWxsLFxuICAgICAgICBfY2xhc3NOYW1lID0gJyc7XG5cbiAgICBpZiAoX3RhcmdldC54ICsgX2RvbVdpZHRoID4gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCkge1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBfbGVmdCA9IF90YXJnZXQueCArIChfdGFyZ2V0LndpZHRoIC0gX2RvbVdpZHRoKSAvIDI7XG4gICAgfVxuXG4gICAgaWYgKF90YXJnZXQueSArIF9kb21IZWlnaHQgPiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkge1xuICAgICAgX3RvcCA9IF90YXJnZXQueSAtIF9kb21IZWlnaHQgLSAxNjtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgKyBfdGFyZ2V0LmhlaWdodCArIDE2O1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tdG9wJztcbiAgICB9XG5cbiAgICBpZiAoX2xlZnQgPCAwKSB7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1sZWZ0JztcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC54ICsgX3RhcmdldC53aWR0aCArIDQ7XG4gICAgICBfdG9wID0gX3RhcmdldC55ICsgNDtcbiAgICB9XG5cbiAgICB0aGlzLl9kb20uc3R5bGUudG9wID0gX3RvcCArICdweCc7XG4gICAgdGhpcy5fZG9tLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG4gICAgX2NsYXNzTmFtZSAmJiB0aGlzLl9kb20uY2xhc3NMaXN0LmFkZChfY2xhc3NOYW1lKTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlICYmIHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKF9kb20pO1xuXG4gICAgaWYgKF9yZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKF9kb20gJiYgX2RvbS5wYXJlbnROb2RlKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3kgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTtcblxuICAgIGlmICh6bi5pcyhjYWxsYmFjaywgJ2Z1bmN0aW9uJykpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLXRvb2x0aXAgenItYXJyb3cgenItYXJyb3ctY29sb3ItYmxhY2sgenItYXJyb3ctcGxhY2VtZW50LWNlbnRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRvb2x0aXA6IFRvb2x0aXAsXG4gIHRvb2x0aXA6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLXRvb2x0aXAtY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIF9fb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uIF9fb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93LnJlc2l6aW5nJyk7XG4gICAgICB9LFxuICAgICAgX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZTogZnVuY3Rpb24gX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PSAnQk9EWScgfHwgdGFyZ2V0LnRhZ05hbWUgPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXpyLXBvcHVwLXRvb2x0aXAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSh0YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX19vbldpbmRvd01vdXNlT3ZlcjogZnVuY3Rpb24gX19vbldpbmRvd01vdXNlT3ZlcihldmVudCkge1xuICAgICAgICB2YXIgX3RhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIF92YWx1ZSA9IHRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZShfdGFyZ2V0KTtcblxuICAgICAgICBpZiAoX3RhcmdldCAmJiBfdmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCAmJiB0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCAhPT0gX3RhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5yZW5kZXIoX3ZhbHVlLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IF90YXJnZXRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXInKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXApIHtcbiAgICAgICAgICB0aGlzLl90b29sdGlwLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rvb2x0aXAgPSBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9KSksIHRoaXMuX2RvbSk7XG4gICAgICB9LFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwKSB7XG4gICAgICAgICAgaWYgKHpuLmlzKGNhbGxiYWNrLCAnc3RyaW5nJykgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICB6bi5kZWJ1ZyhjYWxsYmFjayk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9kb20pO1xuXG4gICAgICAgICAgdGhpcy5fdG9vbHRpcC5kZXN0cm95KGNhbGxiYWNrKTtcblxuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB6bi5kZWVwQXNzaWducyh7fSwgcmVxdWlyZSgnLi9BbGVydCcpLCByZXF1aXJlKCcuL0RpYWxvZycpLCByZXF1aXJlKCcuL0Ryb3Bkb3duJyksIHJlcXVpcmUoJy4vTG9hZGVyJyksIHJlcXVpcmUoJy4vTW9kYWwnKSwgcmVxdWlyZSgnLi9Ob3RpZmllcicpLCByZXF1aXJlKCcuL1BvcG92ZXInKSwgcmVxdWlyZSgnLi9Ub2FzdCcpLCByZXF1aXJlKCcuL1Rvb2x0aXAnKSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIhZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSl0W25dPWVbbl19KHRoaXMsZnVuY3Rpb24obil7dmFyIG89e307ZnVuY3Rpb24gcih0KXtpZihvW3RdKXJldHVybiBvW3RdLmV4cG9ydHM7dmFyIGU9b1t0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIG5bdF0uY2FsbChlLmV4cG9ydHMsZSxlLmV4cG9ydHMsciksZS5sPSEwLGUuZXhwb3J0c31yZXR1cm4gci5tPW4sci5jPW8sci5kPWZ1bmN0aW9uKHQsZSxuKXtyLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gci5kKGUsXCJhXCIsZSksZX0sci5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxyLnA9XCJcIixyKHIucz00KX0oW2Z1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKCl7dC5leHBvcnRzPXRoaXMuUmVhY3R9KCl9LGZ1bmN0aW9uKHQsZSl7IWZ1bmN0aW9uKCl7dC5leHBvcnRzPXRoaXMuUmVhY3RET019KCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj16bnVpLlJlYWN0fHxuKDApLGk9em51aS5SZWFjdERPTXx8bigxKSxzPXIuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJNb2RhbFwiLGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe3JldHVybntkZXN0cm95ZWQ6ITF9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3RoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCYmdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpfSxjbG9zZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kZXN0cm95KHQpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9faXNNb3VudGVkfHx0aGlzLnN0YXRlLmRlc3Ryb3llZClyZXR1cm4hMTt2YXIgZT1pLmZpbmRET01Ob2RlKHRoaXMpO2lmKCExPT09KHRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlJiZ0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShlKSkpcmV0dXJuITE7ZSYmZS5wYXJlbnROb2RlLnBhcmVudE5vZGUmJihlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnBhcmVudE5vZGUpLGkudW5tb3VudENvbXBvbmVudEF0Tm9kZShlLnBhcmVudE5vZGUpKSx0JiZ0KCksdGhpcy5zdGF0ZS5kZXN0cm95ZWQ9ITAsdGhpcy5wcm9wcy5vbkRlc3Ryb3kmJnRoaXMucHJvcHMub25EZXN0cm95KCl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCxudWxsLHRoaXMucHJvcHMuY2hpbGRyZW4pfX0pO3QuZXhwb3J0cz17TW9kYWw6cyxtb2RhbDp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtbW9kYWwtY29udGFpbmVyXCJ9KSx0aGlzLl9tb2RhbHM9W119LGNyZWF0ZTpmdW5jdGlvbih0LGUsbil7dmFyIG89aS5yZW5kZXIoci5jcmVhdGVFbGVtZW50KHMsZSx0KSx6bi5kb20uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzczp6bnVpLmNsYXNzbmFtZShcInpyLXBvcHVwLW1vZGFsXCIsZS5jbGFzcyksc3R5bGU6em51aS5zdHlsZShlLnN0eWxlKX0sdGhpcy5fZG9tKSk7cmV0dXJuIHpuLmRlYnVnKFwiTW9kYWwgY3JlYXRlZChcIisodGhpcy5fbW9kYWxzLmxlbmd0aCsxKStcIik6IFwiLG8pLCExIT09biYmdGhpcy5fbW9kYWxzLnB1c2gobyksb30sY2xvc2U6ZnVuY3Rpb24odCxlKXt6bi5kZWJ1ZyhcIk1vZGFsIGNsb3NlKFwiK3RoaXMuX21vZGFscy5sZW5ndGgrXCIpOiBcIik7dmFyIG49dGhpcy5fbW9kYWxzLnBvcCgpO2lmKG4pe2lmKG4uc3RhdGUuZGVzdHJveWVkKXJldHVybiB0aGlzLmNsb3NlKHQsZSk7dD9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIG4uZGVzdHJveShlKX0sdCk6bi5kZXN0cm95KGUpfXJldHVybiB0aGlzfSxjbG9zZUFsbDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fbW9kYWxzLmxlbmd0aCYmdGhpcy5jbG9zZSh0LHRoaXMuY2xvc2VBbGwpLHRoaXN9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9kYWxzLmxlbmd0aH19fSl9fSxmdW5jdGlvbih0LGUsbil7ZnVuY3Rpb24gbygpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHI9em51aS5SZWFjdHx8bigwKSxpPXpudWkuUmVhY3RET018fG4oMSkscz1yLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSUG9wb3ZlclwiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybntoaWRkZW5IZWlnaHQ6NSxjbG9zZWFibGU6ITEscG9wb3ZlcldpZHRoOm51bGwscG9wb3ZlckhlaWdodDpudWxsfX0sZ2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJue2Fycm93Q2xhc3NOYW1lOlwiXCJ9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3RoaXMuX2RvbT1pLmZpbmRET01Ob2RlKHRoaXMpLHRoaXMucHJvcHMuZXZlbnQmJih0aGlzLl9ldmVudFR5cGU9dGhpcy5wcm9wcy5ldmVudC50eXBlfHx0aGlzLnByb3BzLmV2ZW50LHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSx0aGlzLl9fb25XaW5kb3dDbGljaywhMSksdGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZXZlbnRUeXBlLGZ1bmN0aW9uKHQpe3RoaXMucHJvcHMub25Db250YWluZXJFdmVudCYmdGhpcy5wcm9wcy5vbkNvbnRhaW5lckV2ZW50KHQsdGhpcyl9LmJpbmQodGhpcyksITApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KX0uYmluZCh0aGlzKSwwKSksdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCYmdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKX0sX19pc01hdGNoUGFyZW50OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIXR8fFwiQk9EWVwiIT10LnRhZ05hbWUmJlwiSFRNTFwiIT10LnRhZ05hbWUmJih0PT09ZXx8dGhpcy5fX2lzTWF0Y2hQYXJlbnQodC5wYXJlbnROb2RlLGUpKX0sX19vbldpbmRvd0NsaWNrOmZ1bmN0aW9uKHQpe3RoaXMuX19pc01hdGNoUGFyZW50KHQudGFyZ2V0LHRoaXMuX2RvbSk/ITA9PT0odGhpcy5wcm9wcy5vbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50JiZ0aGlzLnByb3BzLm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQodCx0aGlzKSkmJnRoaXMuY2xvc2UoXCJQb3BvdmVyOiBvbiB3aW5kb3cgaW5zaWRlIGNvbnRhaW5lciBldmVudFwiKTohMCE9PSh0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50JiZ0aGlzLnByb3BzLm9uV2luZG93T3V0c2lkZUNvbnRhaW5lckV2ZW50KHQsdGhpcykpJiZ0aGlzLmNsb3NlKFwiUG9wb3Zlcjogb24gd2luZG93IG91dHNpZGUgY29udGFpbmVyIGV2ZW50XCIpfSxjbG9zZTpmdW5jdGlvbigpe3RoaXMuX2RvbSYmKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50VHlwZSx0aGlzLl9fb25XaW5kb3dDbGljaywhMSksdGhpcy5fZG9tLnBhcmVudE5vZGUmJih0aGlzLl9kb20ucGFyZW50Tm9kZS5zdHlsZT1cIlwiLGkudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9kb20ucGFyZW50Tm9kZSkpLHRoaXMuX2RvbT1udWxsLHRoaXMuX2V2ZW50VHlwZT1udWxsKX0sZml4UG9zaXRpb246ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fZG9tLG49em4uZG9tLmdldFBvc2l0aW9uKHQpLG89dGhpcy5wcm9wcy5wb3BvdmVyV2lkdGh8fG4ud2lkdGgscj10aGlzLnByb3BzLnBvcG92ZXJIZWlnaHR8fHpuLmRvbS5nZXRQb3NpdGlvbihlKS5oZWlnaHQsaT1udWxsLHM9bnVsbCxhPVtdO1wiMTAwJVwiPT1vJiYobz1uLndpZHRoKSxyPHRoaXMucHJvcHMuaGlkZGVuSGVpZ2h0P3RoaXMucHJvcHMub25IaWRkZW4mJnRoaXMucHJvcHMub25IaWRkZW4oKToobi54K28+d2luZG93LnNjcmVlbi5hdmFpbFdpZHRoPyhhLnB1c2goXCJ6ci1hcnJvdy1wbGFjZW1lbnQtcmlnaHRcIiksaT1kb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLW4ueC1uLndpZHRoLGUuc3R5bGUucmlnaHQ9aStcInB4XCIsZS5wYXJlbnROb2RlLnN0eWxlLnJpZ2h0PVwiMHB4XCIpOihpPW4ueCxhLnB1c2goXCJ6ci1hcnJvdy1wbGFjZW1lbnQtbGVmdFwiKSxlLnN0eWxlLmxlZnQ9aStcInB4XCIpLG4ueStyPndpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ/KGEucHVzaChcInpyLWFycm93LWRpcmVjdGlvbi1ib3R0b21cIikscz1uLmhlaWdodCsxMCxlLnN0eWxlLmJvdHRvbT1zK1wicHhcIixlLnBhcmVudE5vZGUuc3R5bGUuYm90dG9tPVwiMHB4XCIpOihzPW4ueStuLmhlaWdodCsxMCxhLnB1c2goXCJ6ci1hcnJvdy1kaXJlY3Rpb24tdG9wXCIpLGUuc3R5bGUudG9wPXMrXCJweFwiKSx0aGlzLnByb3BzLnBvcG92ZXJXaWR0aCYmKGUuc3R5bGUud2lkdGg9bytcInB4XCIpLHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCYmZS5vZmZzZXRIZWlnaHQhPXImJihlLnN0eWxlLmhlaWdodD1yK1wicHhcIiksZS5zdHlsZS52aXNpYmlsaXR5PVwidmlzaWJsZVwiLGEucHVzaChcInpuLWFuaW1hdGUtc2NhbGUtdXBcIiksZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUrXCIgXCIrYS5qb2luKFwiIFwiKSl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT17fTtyZXR1cm4gdGhpcy5wcm9wcy5oZWlnaHQ/ZS5tYXhIZWlnaHQ9dGhpcy5wcm9wcy5oZWlnaHQrXCJweFwiOmUuaGVpZ2h0PVwiYXV0b1wiLHIuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1wb3BvdmVyIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlXCIsdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSl9LHRoaXMucHJvcHMuY2xvc2VhYmxlJiZyLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIsb25DbGljazpmdW5jdGlvbigpe3JldHVybiB0LmNsb3NlKFwic2VsZiBjbG9zZVwiKX19LHIuY3JlYXRlRWxlbWVudChcInN2Z1wiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsZm9jdXNhYmxlOlwiZmFsc2VcIixcImRhdGEtcHJlZml4XCI6XCJmYXNcIixjbGFzc05hbWU6XCJzdmctaW5saW5lLS1mYSBmYS1jaGVjayBmYS13LTE2IFwiLHJvbGU6XCJpbWdcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCA1MTIgNTEyXCJ9LHIuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZmlsbDpcImN1cnJlbnRDb2xvclwiLGQ6XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCJ9KSkpLHIuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJwb3BvdmVyLWNvbnRlbnRcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6KHpuLmV4dGVuZCh7fSx0aGlzLnByb3BzLnN0eWxlKSxlKX0sdGhpcy5wcm9wcy5jb250ZW50KSl9fSk7dC5leHBvcnRzPXtQb3BvdmVyOnMscG9wb3Zlcjp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtcG9wb3Zlci1jb250YWluZXJcIn0pfSxyZW5kZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZSYmZS5yZXNldCYmdGhpcy5jbG9zZShcInpuLnBvcG92ZXI6cmVuZGVyXCIpLHRoaXMuX3BvcG92ZXI9aS5yZW5kZXIoci5jcmVhdGVFbGVtZW50KHMsbyh7fSxlLHtjb250ZW50OnR9KSksdGhpcy5fZG9tKSx0aGlzLl9wb3BvdmVyfSxjbG9zZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcG9wb3ZlciYmKHRoaXMuX3BvcG92ZXIuY2xvc2UodCksdGhpcy5fcG9wb3Zlcj1udWxsKSx0aGlzfX19KX19LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9em4uZGVlcEFzc2lnbnMoe30sbig1KSxuKDYpLG4oNyksbig4KSxuKDIpLG4oOSksbigzKSxuKDEwKSxuKDExKSl9LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiByKCl7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYodFtvXT1uW29dKX1yZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgYT16bnVpLlJlYWN0fHxuKDApLGM9bigyKS5tb2RhbCxsPWEuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJBbGVydFwiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybnt0aXRsZTpcIlwiLGNvbnRlbnQ6bnVsbCxvbkNsaWNrOm51bGwsYnV0dG9uczpbe3RleHQ6XCLnoa7orqRcIn1dfX0sX19vbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dC5pbmRleD1lO3RoaXMucHJvcHMub25DbGljayYmdGhpcy5wcm9wcy5vbkNsaWNrKHQsdGhpcyk7ITEhPT0odC5vbkNsaWNrJiZ0Lm9uQ2xpY2sodCx0aGlzKSkmJih6bi5kZWJ1ZyhcImFsZXJ0LmNsb3NlXCIpLGMuY2xvc2UoKSl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtYWxlcnRcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZX0sYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcImFsZXJ0LWlubmVyXCJ9LHRoaXMucHJvcHMudGl0bGUmJmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJhbGVydC10aXRsZVwifSx0aGlzLnByb3BzLnRpdGxlKSx0aGlzLnByb3BzLmNvbnRlbnQmJmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJhbGVydC1jb250ZW50XCJ9LHRoaXMucHJvcHMuY29udGVudCkpLGEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJhbGVydC1idG5zXCJ9LHRoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiBhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7a2V5OmUsY2xhc3NOYW1lOlwiYWxlcnQtYnRuXCIsb25DbGljazpmdW5jdGlvbigpe3JldHVybiBuLl9fb25DbGljayh0LGUpfX0sdC50ZXh0KX0uYmluZCh0aGlzKSkpKX19KTt0LmV4cG9ydHM9e0FsZXJ0OmwsYWxlcnQ6ZnVuY3Rpb24odCxlLG4sbyl7cmV0dXJuIGMuY3JlYXRlKGEuY3JlYXRlRWxlbWVudChsLHIoe2NvbnRlbnQ6dCx0aXRsZTplLG9uQ2xpY2s6bn0sbykpLHtjbGFzczpcIm1vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5XCJ9LCExKX0sY29uZmlybTpmdW5jdGlvbih0LGUsbixvLHIpe3ZhciBpPXpuLmV4dGVuZCh7Y2FuY2VsOlwi5Y+W5raIXCIsY29uZmlybTpcIuehruWumlwifSxyKSxzPWMuY3JlYXRlKGEuY3JlYXRlRWxlbWVudChsLHtjb250ZW50OnQsdGl0bGU6ZSxidXR0b25zOlt7dGV4dDppLmNhbmNlbCxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuITEhPT0obyYmbyhzKSkmJnMuZGVzdHJveSgpLCExfX0se3RleHQ6aS5jb25maXJtLG9uQ2xpY2s6ZnVuY3Rpb24oKXtyZXR1cm4hMSE9PShuJiZuKHMpKSYmcy5kZXN0cm95KCksITF9fV19KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwifSwhMSk7cmV0dXJuIHN9LHByb21wdDpmdW5jdGlvbih0KXt2YXIgbj16bi5leHRlbmQoe3RpdGxlOnQudGl0bGUsY29udGVudDphLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLHtjbGFzc05hbWU6XCJhbGVydC1pbnB1dFwiLG9uQ2hhbmdlOnQub25DaGFuZ2UsdHlwZTpcInRleHRcIn0pLGNvbmZpcm06dC5jb25maXJtLGNhbmNlbDp0LmNhbmNlbH0sdCksbz1jLmNyZWF0ZShhLmNyZWF0ZUVsZW1lbnQobCx7Y29udGVudDpuLmNvbnRlbnQsdGl0bGU6bi50aXRsZSxidXR0b25zOlt7dGV4dDpuLmNhbmNlbFRleHR8fFwi5Y+W5raIXCIsb25DbGljazpmdW5jdGlvbih0LGUpe3JldHVybiExIT09KG4uY2FuY2VsJiZuLmNhbmNlbCh0LGUpKSYmby5kZXN0cm95KCksITF9fSx7dGV4dDpuLmNvbmZpcm1UZXh0fHxcIuehruWumlwiLG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXtyZXR1cm4hMSE9PShuLmNvbmZpcm0mJm4uY29uZmlybSh0LGUpKSYmby5kZXN0cm95KCksITF9fV19KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwifSwhMSk7cmV0dXJuIG99fX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj1uKDIpLm1vZGFsLGk9by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkRpYWxvZ1wiLGdldERlZmF1bHRQcm9wczpmdW5jdGlvbigpe3JldHVybnt0aXRsZTpcIlwiLGNvbnRlbnQ6bnVsbH19LF9fb25DbG9zZTpmdW5jdGlvbih0KXshMSE9PSh0aGlzLnByb3BzLm9uQ2xvc2UmJnRoaXMucHJvcHMub25DbG9zZSh0LHRoaXMpKSYmci5jbG9zZSgpfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gby5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTp6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWRpYWxvZ1wiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlLFwiZGF0YS1mb2N1c1wiOnRoaXMucHJvcHMuZm9jdXN9LG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctaGVhZGVyXCJ9LHRoaXMucHJvcHMudGl0bGUmJm8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJkaWFsb2ctdGl0bGVcIn0sdGhpcy5wcm9wcy50aXRsZSksdGhpcy5wcm9wcy5jbG9zZWFibGUmJm8uY3JlYXRlRWxlbWVudChcInNwYW5cIix7b25DbGljazp0aGlzLl9fb25DbG9zZSxjbGFzc05hbWU6XCJkaWFsb2ctY2xvc2VcIn0sXCJ4XCIpKSxvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiZGlhbG9nLWJvZHlcIn0sdGhpcy5wcm9wcy5jb250ZW50KSl9fSk7dC5leHBvcnRzPXtEaWFsb2c6aSxkaWFsb2c6ZnVuY3Rpb24odCxlKXtyZXR1cm4gci5jcmVhdGUoby5jcmVhdGVFbGVtZW50KGksdCkse2NsYXNzOlwibW9kYWwtbWlkZGxlIG1vZGFsLW92ZXJsYXlcIn0sZSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPXpudWkuUmVhY3R8fG4oMCkscj16bnVpLlJlYWN0RE9NfHxuKDEpLGk9bigzKS5wb3BvdmVyO3QuZXhwb3J0cz17RHJvcGRvd246by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUkRyb3Bkb3duXCIsZ2V0RGVmYXVsdFByb3BzOmZ1bmN0aW9uKCl7cmV0dXJue2Rpc2FibGVkOiExLGV2ZW50VHlwZTpcImNsaWNrXCJ9fSxjb21wb25lbnREaWRNb3VudDpmdW5jdGlvbigpe3IuZmluZERPTU5vZGUodGhpcykuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnByb3BzLmV2ZW50VHlwZSx0aGlzLl9fZXZlbnRIYW5kbGVyLCExKX0sY29tcG9uZW50V2lsbFVubW91bnQ6ZnVuY3Rpb24oKXtyLmZpbmRET01Ob2RlKHRoaXMpLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudFR5cGUsdGhpcy5fX2V2ZW50SGFuZGxlciwhMSl9LGdldFBhcmVudDpmdW5jdGlvbih0KXtyZXR1cm4gdC5jbGFzc0xpc3QuY29udGFpbnMoXCJ6ci1wb3B1cC1kcm9wZG93blwiKT90OnRoaXMuZ2V0UGFyZW50KHQucGFyZW50Tm9kZSl9LF9fZXZlbnRIYW5kbGVyOmZ1bmN0aW9uKHQpe2lmKCF0aGlzLnByb3BzLmRpc2FibGVkKXt2YXIgZT10aGlzLmdldFBhcmVudCh0LnRhcmdldCksbj16bi5leHRlbmQoe30sdGhpcy5wcm9wcy5wb3BvdmVyKTtpZihlJiZuJiZuLnJlbmRlcil7dmFyIG89bi5yZW5kZXI7em4uaXMobyxcImZ1bmN0aW9uXCIpJiYoby5wcm90b3R5cGUmJm8ucHJvdG90eXBlLnJlbmRlcnx8KG89byh0LHRoaXMpKSksbyYmKHQuc3RvcFByb3BhZ2F0aW9uKCksbi5yZW5kZXI9bnVsbCxkZWxldGUgbi5yZW5kZXIsaS5yZW5kZXIobyx6bi5leHRlbmQoe3Jlc2V0OiEwLGV2ZW50OnQsdGFyZ2V0OmV9LG4pKSl9fX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1kcm9wZG93blwiLHRoaXMucHJvcHMuY2xhc3NOYW1lKSxzdHlsZTp0aGlzLnByb3BzLnN0eWxlfSx0aGlzLnByb3BzLmNoaWxkcmVuKX19KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz16bnVpLlJlYWN0fHxuKDApLHI9bigyKS5tb2RhbCxpPW8uY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJMb2FkZXJcIixnZXREZWZhdWx0UHJvcHM6ZnVuY3Rpb24oKXtyZXR1cm57Y29udGVudDpudWxsLHRpdGxlOlwiTG9hZGluZyAuLi4gXCJ9fSxfX3JlbmRlckNvbnRlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcm9wcy5jb250ZW50P3RoaXMucHJvcHMuY29udGVudDp0aGlzLnByb3BzLnRpdGxlP28uY3JlYXRlRWxlbWVudChvLkZyYWdtZW50LG51bGwsby5jcmVhdGVFbGVtZW50KFwiaVwiLHtjbGFzc05hbWU6XCJsb2FkZXJcIixcImRhdGEtbG9hZGVyXCI6XCJzcGlubmVyXCJ9KSxvLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInRpdGxlXCJ9LHRoaXMucHJvcHMudGl0bGUpKTp2b2lkIDB9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiBvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtbG9hZGVyXCIsdGhpcy5wcm9wcy5jbGFzc05hbWUpLHN0eWxlOnpudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9LHRoaXMuX19yZW5kZXJDb250ZW50KCkpfX0pO3QuZXhwb3J0cz17TG9hZGVyOmksbG9hZGVyOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7Y3JlYXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuX2xvYWRlciYmdGhpcy5fbG9hZGVyLmRlc3Ryb3koKSxyLmNyZWF0ZShvLmNyZWF0ZUVsZW1lbnQoaSx0KSx7Y2xhc3M6XCJtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheVwiLHJlZjpmdW5jdGlvbih0KXtyZXR1cm4gZS5fbG9hZGVyPXR9fSwhMSl9LGxvYWRpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY3JlYXRlKHt0aXRsZTp0fSl9LGNsb3NlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xvYWRlciYmdGhpcy5fbG9hZGVyLmRlc3Ryb3koKSx0aGlzfX19KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz16bnVpLlJlYWN0fHxuKDApLHI9em51aS5SZWFjdERPTXx8bigxKSxpPXtoZWFydDpcIk00NjIuMyA2Mi42QzQwNy41IDE1LjkgMzI2IDI0LjMgMjc1LjcgNzYuMkwyNTYgOTYuNWwtMTkuNy0yMC4zQzE4Ni4xIDI0LjMgMTA0LjUgMTUuOSA0OS43IDYyLjZjLTYyLjggNTMuNi02Ni4xIDE0OS44LTkuOSAyMDcuOWwxOTMuNSAxOTkuOGMxMi41IDEyLjkgMzIuOCAxMi45IDQ1LjMgMGwxOTMuNS0xOTkuOGM1Ni4zLTU4LjEgNTMtMTU0LjMtOS44LTIwNy45elwiLHNlY29uZGFyeTpcIk00NDggMEg2NEMyOC43IDAgMCAyOC43IDAgNjR2Mjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0aDk2djg0YzAgOS44IDExLjIgMTUuNSAxOS4xIDkuN0wzMDQgNDE2aDE0NGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NHpcIixzdWNjZXNzOlwiTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxelwiLHdhcm5pbmc6XCJNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6XCIsZXJyb3I6XCJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6XCIsaW5mbzpcIk0yMCA0MjQuMjI5aDIwVjI3OS43NzFIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwVjIxMmMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgxMTJjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2MjEyLjIyOWgyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMFY0OTJjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjBIMjBjLTExLjA0NiAwLTIwLTguOTU0LTIwLTIwdi00Ny43NzFjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjB6TTk2IDBDNTYuMjM1IDAgMjQgMzIuMjM1IDI0IDcyczMyLjIzNSA3MiA3MiA3MiA3Mi0zMi4yMzUgNzItNzJTMTM1Ljc2NCAwIDk2IDB6XCJ9LHM9by5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6XCJaUk5vdGlmaWNhdGlvblwiLGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsdGhpcy5wcm9wcy5kZWxheXx8MTUwMCl9LG91dDpmdW5jdGlvbigpe3ZhciB0PXIuZmluZERPTU5vZGUodGhpcyk7dC5jbGFzc0xpc3QuYWRkKFwibm90aWZpY2F0aW9uLW91dFwiKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixmdW5jdGlvbigpe3QucGFyZW50Tm9kZS5wYXJlbnROb2RlJiYodC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5wYXJlbnROb2RlKSxyLnVubW91bnRDb21wb25lbnRBdE5vZGUodC5wYXJlbnROb2RlKSl9LCExKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC1ub3RpZmllciBub3RpZmljYXRpb24taW5cIix0aGlzLnByb3BzLnR5cGUpfSxvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiaWNvblwifSxvLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLGZvY3VzYWJsZTpcImZhbHNlXCIsXCJkYXRhLXByZWZpeFwiOlwiZmFzXCIsY2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZSxyb2xlOlwiaW1nXCIseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHZpZXdCb3g6XCIwIDAgNTEyIDUxMlwifSxvLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2ZpbGw6XCJjdXJyZW50Q29sb3JcIixkOmlbdGhpcy5wcm9wcy50eXBlfHxcImluZm9cIl19KSkpLG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJjb250ZW50XCJ9LHRoaXMucHJvcHMuY29udGVudCksby5jcmVhdGVFbGVtZW50KFwiaVwiLHtjbGFzc05hbWU6XCJjbG9zZSBmYSBmYS10aW1lc1wiLG9uQ2xpY2s6dGhpcy5vdXR9KSl9fSk7dC5leHBvcnRzPXtOb3RpZmllcjpzLG5vdGlmaWVyOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC1ub3RpZmllci1jb250YWluZXJcIn0pfSxvcGVuOmZ1bmN0aW9uKHQsZSxuKXtyLnJlbmRlcihvLmNyZWF0ZUVsZW1lbnQocyx7dHlwZTp0LGNvbnRlbnQ6ZSxkZWxheTpufSksem4uZG9tLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7fSx0aGlzLl9kb20pKX0sc3VjY2VzczpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJzdWNjZXNzXCIsdCxlKX0sd2FybmluZzpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJ3YXJuaW5nXCIsdCxlKX0sZXJyb3I6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5vcGVuKFwiZXJyb3JcIix0LGUpfSxpbmZvOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcImluZm9cIix0LGUpfX19KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj16bnVpLlJlYWN0fHxuKDApLGk9em51aS5SZWFjdERPTXx8bigxKSxzPXIuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOlwiWlJUb2FzdFwiLGNvbXBvbmVudERpZE1vdW50OmZ1bmN0aW9uKCl7d2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsdGhpcy5wcm9wcy5kZWxheXx8MTgwMCl9LG91dDpmdW5jdGlvbigpe3ZhciB0PWkuZmluZERPTU5vZGUodGhpcyk7dC5jbGFzc0xpc3QuYWRkKFwidG9hc3Qtb3V0XCIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLGZ1bmN0aW9uKCl7dC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5wYXJlbnROb2RlKSxpLnVubW91bnRDb21wb25lbnRBdE5vZGUodC5wYXJlbnROb2RlLnBhcmVudE5vZGUpfSwhMSl9LHJlbmRlcjpmdW5jdGlvbigpe3JldHVybiByLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnpudWkucmVhY3QuY2xhc3NuYW1lKFwienItcG9wdXAtdG9hc3QgdG9hc3QtaW5cIix0aGlzLnByb3BzLnR5cGUpfSx0aGlzLnByb3BzLmNvbnRlbnQpfX0pO3QuZXhwb3J0cz17VG9hc3Q6cyx0b2FzdDp6bi5DbGFzcyh7c3RhdGljOiEwLG1ldGhvZHM6e2luaXQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209em4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIse2NsYXNzOlwienItcG9wdXAtdG9hc3QtY29udGFpbmVyXCJ9KX0sb3BlbjpmdW5jdGlvbih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnJlbmRlcihyLmNyZWF0ZUVsZW1lbnQocyx7dHlwZTp0LGNvbnRlbnQ6ZSxkZWxheTpufSksbyksdGhpcy5fZG9tLmFwcGVuZENoaWxkKG8pfSxzdWNjZXNzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcInN1Y2Nlc3NcIix0LGUpfSx3YXJuaW5nOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcIndhcm5pbmdcIix0LGUpfSxlcnJvcjpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLm9wZW4oXCJkYW5nZXJcIix0LGUpfSxpbmZvOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMub3BlbihcImluZm9cIix0LGUpfX19KX19LGZ1bmN0aW9uKHQsZSxzKXsoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbigpe3JldHVybihuPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG89em51aS5SZWFjdHx8cygwKSxyPXpudWkuUmVhY3RET018fHMoMSksaT1vLmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTpcIlpSVG9vbHRpcFwiLGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe3JldHVybnthcnJvd0NsYXNzTmFtZTpcIlwifX0sY29tcG9uZW50RGlkTW91bnQ6ZnVuY3Rpb24oKXt0aGlzLl9kb209ci5maW5kRE9NTm9kZSh0aGlzKSx0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KX0sZml4UG9zaXRpb246ZnVuY3Rpb24odCl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiZml4UG9zaXRpb24gdGFyZ2V0IGlzIG51bGwuXCIpO3ZhciBlPXRoaXMuX2RvbS5vZmZzZXRXaWR0aCxuPXRoaXMuX2RvbS5vZmZzZXRIZWlnaHQsbz16bi5kb20uZ2V0UG9zaXRpb24odCkscj1udWxsLGk9bnVsbCxzPVwiXCI7cj1vLngrZT5kb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoP28ud2lkdGgtZTpvLngrKG8ud2lkdGgtZSkvMixzPW8ueStuPmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0PyhpPW8ueS1uLTE2LFwienItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbVwiKTooaT1vLnkrby5oZWlnaHQrMTYsXCJ6ci1hcnJvdy1kaXJlY3Rpb24tdG9wXCIpLHI8MCYmKHM9XCJ6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdFwiLHI9by54K28ud2lkdGgrNCxpPW8ueSs0KSx0aGlzLl9kb20uc3R5bGUudG9wPWkrXCJweFwiLHRoaXMuX2RvbS5zdHlsZS5sZWZ0PXIrXCJweFwiLHMmJnRoaXMuX2RvbS5jbGFzc0xpc3QuYWRkKHMpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9faXNNb3VudGVkKXJldHVybiExO3ZhciBlPXIuZmluZERPTU5vZGUodGhpcyk7aWYoITE9PT0odGhpcy5wcm9wcy5vbkRlc3Ryb3lCZWZvcmUmJnRoaXMucHJvcHMub25EZXN0cm95QmVmb3JlKGUpKSlyZXR1cm4hMTtlJiZlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSx0aGlzLnByb3BzLm9uRGVzdHJveSYmdGhpcy5wcm9wcy5vbkRlc3Ryb3koKSx6bi5pcyh0LFwiZnVuY3Rpb25cIikmJnQoKX0scmVuZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSksc3R5bGU6dGhpcy5wcm9wcy5zdHlsZX0sdGhpcy5wcm9wcy5jb250ZW50KX19KTt0LmV4cG9ydHM9e1Rvb2x0aXA6aSx0b29sdGlwOnpuLkNsYXNzKHtzdGF0aWM6ITAsbWV0aG9kczp7aW5pdDpmdW5jdGlvbigpe3RoaXMuX2RvbT16bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIix7Y2xhc3M6XCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwifSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIix0aGlzLl9fb25XaW5kb3dNb3VzZU92ZXIuYmluZCh0aGlzKSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9fb25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSwhMSl9LF9fb25XaW5kb3dSZXNpemU6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKFwiem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cucmVzaXppbmdcIil9LF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWU6ZnVuY3Rpb24odCl7aWYodClyZXR1cm5cIkJPRFlcIiE9dC50YWdOYW1lJiZcIkhUTUxcIiE9dC50YWdOYW1lJiYodC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKFwiZGF0YS16ci1wb3B1cC10b29sdGlwXCIpP3QuZ2V0QXR0cmlidXRlKFwiZGF0YS16ci1wb3B1cC10b29sdGlwXCIpOnRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZSh0LnBhcmVudE5vZGUpKX0sX19vbldpbmRvd01vdXNlT3ZlcjpmdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldCxuPXRoaXMuX19maW5kWlJQb3B1cFRvb2x0aXBWYWx1ZShlKTtlJiZuPyh0aGlzLl90b29sdGlwJiZ0aGlzLl90b29sdGlwLnByb3BzLnRhcmdldCE9PWUmJnRoaXMuY2xvc2UoXCJ6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5tb3VzZW92ZXJcIiksdGhpcy5yZW5kZXIobix7dGFyZ2V0OmV9KSk6dGhpcy5jbG9zZShcInpudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlclwiKX0scmVuZGVyOmZ1bmN0aW9uKHQsZSl7dGhpcy5fdG9vbHRpcCYmdGhpcy5fdG9vbHRpcC5kZXN0cm95KCksdGhpcy5fdG9vbHRpcD1yLnJlbmRlcihvLmNyZWF0ZUVsZW1lbnQoaSxuKHt9LGUse2NvbnRlbnQ6dH0pKSx0aGlzLl9kb20pfSxjbG9zZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fdG9vbHRpcCYmKHpuLmlzKHQsXCJzdHJpbmdcIikmJmUmJmUuZW52LHIudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9kb20pLHRoaXMuX3Rvb2x0aXAuZGVzdHJveSh0KSx0aGlzLl90b29sdGlwPW51bGwpLHRoaXN9fX0pfX0pLmNhbGwodGhpcyxzKDEyKSl9LGZ1bmN0aW9uKHQsZSl7dmFyIG4sbyxyPXQuZXhwb3J0cz17fTtmdW5jdGlvbiBpKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBzKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGEoZSl7aWYobj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigobj09PWl8fCFuKSYmc2V0VGltZW91dClyZXR1cm4gbj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIG4oZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG4uY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUsMCl9fX0hZnVuY3Rpb24oKXt0cnl7bj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6aX1jYXRjaCh0KXtuPWl9dHJ5e289XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpzfWNhdGNoKHQpe289c319KCk7dmFyIGMsbD1bXSxwPSExLHU9LTE7ZnVuY3Rpb24gZCgpe3AmJmMmJihwPSExLGMubGVuZ3RoP2w9Yy5jb25jYXQobCk6dT0tMSxsLmxlbmd0aCYmaCgpKX1mdW5jdGlvbiBoKCl7aWYoIXApe3ZhciB0PWEoZCk7cD0hMDtmb3IodmFyIGU9bC5sZW5ndGg7ZTspe2ZvcihjPWwsbD1bXTsrK3U8ZTspYyYmY1t1XS5ydW4oKTt1PS0xLGU9bC5sZW5ndGh9Yz1udWxsLHA9ITEsZnVuY3Rpb24oZSl7aWYobz09PWNsZWFyVGltZW91dClyZXR1cm4gY2xlYXJUaW1lb3V0KGUpO2lmKChvPT09c3x8IW8pJiZjbGVhclRpbWVvdXQpcmV0dXJuIG89Y2xlYXJUaW1lb3V0LGNsZWFyVGltZW91dChlKTt0cnl7byhlKX1jYXRjaCh0KXt0cnl7cmV0dXJuIG8uY2FsbChudWxsLGUpfWNhdGNoKHQpe3JldHVybiBvLmNhbGwodGhpcyxlKX19fSh0KX19ZnVuY3Rpb24gbSh0LGUpe3RoaXMuZnVuPXQsdGhpcy5hcnJheT1lfWZ1bmN0aW9uIGYoKXt9ci5uZXh0VGljaz1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZigxPGFyZ3VtZW50cy5sZW5ndGgpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO2wucHVzaChuZXcgbSh0LGUpKSwxIT09bC5sZW5ndGh8fHB8fGEoaCl9LG0ucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHIudGl0bGU9XCJicm93c2VyXCIsci5icm93c2VyPSEwLHIuZW52PXt9LHIuYXJndj1bXSxyLnZlcnNpb249XCJcIixyLnZlcnNpb25zPXt9LHIub249ZixyLmFkZExpc3RlbmVyPWYsci5vbmNlPWYsci5vZmY9ZixyLnJlbW92ZUxpc3RlbmVyPWYsci5yZW1vdmVBbGxMaXN0ZW5lcnM9ZixyLmVtaXQ9ZixyLnByZXBlbmRMaXN0ZW5lcj1mLHIucHJlcGVuZE9uY2VMaXN0ZW5lcj1mLHIubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybltdfSxyLmJpbmRpbmc9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHIuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHIuY2hkaXI9ZnVuY3Rpb24odCl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxyLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fV0pKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsInJlcXVpcmUoJ3pudWktcmVhY3QnKTtcbmlmKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJlcXVpcmUoJy4vX18vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9idWlsZC9pbmRleC5qcycpO1xuICAgIH1lbHNle1xuICAgICAgICByZXF1aXJlKCcuL19fL2Rpc3QvcHJvZHVjdGlvbi9pbmRleC5zdHlsZS5idW5kbGUuY3NzJyk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguYnVuZGxlLmpzJyk7XG4gICAgfVxufWVsc2Uge1xuICAgIHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LnN0eWxlLmJ1bmRsZS5jc3MnKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX18vZGlzdC9wcm9kdWN0aW9uL2luZGV4LmJ1bmRsZS5qcycpO1xufSIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGF0dHJzOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19wYXJzZUdldFZhbHVlKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuX19wYXJzZVNldFZhbHVlKHZhbHVlKSwgdGhpcztcblx0fSxcblx0X19wYXJzZUdldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nbnVtYmVyJyl7XG5cdFx0XHR2YWx1ZSA9ICt2YWx1ZTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J2RhdGUnKXtcblx0XHRcdGlmKCF2YWx1ZSl7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0X19wYXJzZVNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nZGF0ZScgJiYgdmFsdWUpe1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkZvY3VzOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkJsdXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ey4uLnRoaXMucHJvcHMuYXR0cnN9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dHlwZT17dGhpcy5wcm9wcy50eXBlfHwndGV4dCd9XG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9XG5cdFx0XHRcdG9uRm9jdXM9e3RoaXMuX19vbkZvY3VzfVxuXHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUklucHV0cycsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c3BsaXQ6ICcvJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBfdmFsdWVzID0gW10sXG5cdFx0XHRfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIHRoaXMucmVmcyl7XG5cdFx0XHRfdmFsdWUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNba2V5XSkudmFsdWU7XG5cdFx0XHRpZihfdmFsdWUpe1xuXHRcdFx0XHRfdmFsdWVzLnB1c2goX3ZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlcy5qb2luKHRoaXMucHJvcHMuc3BsaXQpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0dmFyIF92YWx1ZXMgPSB2YWx1ZS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0KTtcblx0XHRPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSwgaW5kZXgpe1xuXHRcdFx0aWYoX3ZhbHVlc1tpbmRleF0pe1xuXHRcdFx0XHRSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNba2V5XSkudmFsdWUgPSBfdmFsdWVzW2luZGV4XTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSksIHRoaXM7XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWVzID0gKHRoaXMucHJvcHMudmFsdWV8fCcnKS5zcGxpdCh0aGlzLnByb3BzLnNwbGl0KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1pbnB1dHMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmRhdGF8fFtdKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdFx0XHRcdHJldHVybiA8aW5wdXQgdmFsdWU9e192YWx1ZXNbaW5kZXhdfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX29uSW5wdXRDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gcmVmPXtpbmRleH0ga2V5PXtpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHR5cGU9XCJ0ZXh0XCIgLz5cblx0XHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlNlYXJjaElucHV0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXR0cnM6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlYWRvbmx5OiBudWxsLFxuXHRcdFx0Zm9jdXNlZDogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9fcGFyc2VHZXRWYWx1ZShSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB0aGlzLl9fcGFyc2VTZXRWYWx1ZSh2YWx1ZSksIHRoaXM7XG5cdH0sXG5cdF9fcGFyc2VHZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J251bWJlcicpe1xuXHRcdFx0dmFsdWUgPSArdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdkYXRlJyl7XG5cdFx0XHRpZighdmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fcGFyc2VTZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih0aGlzLnByb3BzLmF0dHJzICYmIHRoaXMucHJvcHMuYXR0cnMudHlwZT09J2RhdGUnICYmIHZhbHVlKXtcblx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdF9fb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb2N1c2VkOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGZvY3VzZWQ6IGZhbHNlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdGNvbnNvbGUubG9nKGV2ZW50LnZhbHVlKTtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRvcHRpb246IG9wdFxuXHRcdH0pO1xuXHR9LFxuXHRfX29wdEl0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxsaSBvbkNsaWNrPXsoKT0+dGhpcy5fX29uT3B0SXRlbUNsaWNrKGl0ZW0sIGluZGV4KX0ga2V5PXtpbmRleH0+e2l0ZW19PC9saT47XG5cdH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPHVsIGNsYXNzTmFtZT1cInpyLXNlYXJjaC1pbnB1dC1vcHRpb25zXCI+XG5cdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLm9wdGlvbnN9IGl0ZW1SZW5kZXI9e3RoaXMuX19vcHRJdGVtUmVuZGVyfSAvPlxuXHRcdDwvdWw+O1xuXHR9LFxuXHRfX3JlbmRlck9wdGlvbnM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8cG9wdXAuRHJvcGRvd24gY2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyLFxuXHRcdFx0XHRcdG9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi12YWx1ZVwiPnt0aGlzLnN0YXRlLm9wdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiY2FyZXQtZG93blwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhcmV0LWRvd24gZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzEuMyAxOTJoMjU3LjNjMTcuOCAwIDI2LjcgMjEuNSAxNC4xIDM0LjFMMTc0LjEgMzU0LjhjLTcuOCA3LjgtMjAuNSA3LjgtMjguMyAwTDE3LjIgMjI2LjFDNC42IDIxMy41IDEzLjUgMTkyIDMxLjMgMTkyelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0PC9wb3B1cC5Ecm9wZG93bj47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1zZWFyY2gtaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vcHRpb25zICYmIHRoaXMuX19yZW5kZXJPcHRpb25zKClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIHNlYXJjaC1pY29uIGZhLXNlYXJjaCBmYS13LTE2IGljb25cIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MDUgNDQyLjdMNDA1LjMgMzQzYy00LjUtNC41LTEwLjYtNy0xNy03SDM3MmMyNy42LTM1LjMgNDQtNzkuNyA0NC0xMjhDNDE2IDkzLjEgMzIyLjkgMCAyMDggMFMwIDkzLjEgMCAyMDhzOTMuMSAyMDggMjA4IDIwOGM0OC4zIDAgOTIuNy0xNi40IDEyOC00NHYxNi4zYzAgNi40IDIuNSAxMi41IDcgMTdsOTkuNyA5OS43YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDI4LjMtMjguM2M5LjQtOS40IDkuNC0yNC42LjEtMzR6TTIwOCAzMzZjLTcwLjcgMC0xMjgtNTcuMi0xMjgtMTI4IDAtNzAuNyA1Ny4yLTEyOCAxMjgtMTI4IDcwLjcgMCAxMjggNTcuMiAxMjggMTI4IDAgNzAuNy01Ny4yIDEyOC0xMjggMTI4elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgdHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0XHRcdHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfVxuXHRcdFx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9XG5cdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhZ0lucHV0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRcdHJlYWRvbmx5OiBudWxsXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IFtdXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSAxMyAmJiBfdmFsdWUpe1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleURvd246IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSAxMyAmJiBfdmFsdWUpe1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlLnB1c2goX3ZhbHVlKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0XHRcdHJldHVybiBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gJyc7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm9vdENsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnN0YXRlLmlucHV0LmZvY3VzKCk7XG5cdH0sXG5cdF9fdGFnUmVuZGVyOiBmdW5jdGlvbih0YWcsIGluZGV4KXtcblx0XHRyZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGFnXCIga2V5PXtpbmRleH0+e3RhZ308L3NwYW4+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgb25DbGljaz17dGhpcy5fX29uUm9vdENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWctaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5tYXAodGhpcy5fX3RhZ1JlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0XHQ8ZGl2IHJlZj17KGlucHV0KT0+dGhpcy5zdGF0ZS5pbnB1dCA9IGlucHV0fSBjbGFzc05hbWU9XCJ0YWctaW5wdXRcIiBjb250ZW50RWRpdGFibGU9XCJ0cnVlXCIgb25LZXlEb3duPXt0aGlzLl9fb25LZXlEb3dufSBvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiXG5cdFx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdFx0bmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuXHRcdFx0XHRcdHR5cGU9e3RoaXMucHJvcHMudHlwZXx8J3RleHQnfVxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX1cblx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9IC8+XG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRleHRhcmVhJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXR0cnM6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly9wbGFjZWhvbGRlcj1cImV4LiYjMTM7JiMxMDt0ZXN0MUB0ZXN0LmNvbSYjMTM7JiMxMDt0ZXN0MkB0ZXN0LmNvbSYjMTM7JiMxMDsuLi5cIlxuXHRcdHZhciBfdmFsdWUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZTtcblx0XHQvL2NvbnNvbGUubG9nKF92YWx1ZS5yZXBsYWNlKC9cXHUwMDBBL2csICdcXG4nKSk7XG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHZhbHVlLCB0aGlzO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbkJsdXI6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uS2V5VXA6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZT09MTMpe1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5vbktleVVwICYmIHRoaXMucHJvcHMub25LZXlVcChldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10ZXh0YXJlYVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0ey4uLnRoaXMucHJvcHMuYXR0cnN9XG5cdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuXHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdG9uS2V5VXA9e3RoaXMuX19vbktleVVwfVxuXHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0lucHV0JzogcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgICdJbnB1dHMnOiByZXF1aXJlKCcuL0lucHV0cy5qcycpLFxuICAgICdTZWFyY2hJbnB1dCc6IHJlcXVpcmUoJy4vU2VhcmNoSW5wdXQuanMnKSxcbiAgICAnVGFnSW5wdXQnOiByZXF1aXJlKCcuL1RhZ0lucHV0LmpzJyksXG4gICAgJ1RleHRhcmVhJzogcmVxdWlyZSgnLi9UZXh0YXJlYS5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInpyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=