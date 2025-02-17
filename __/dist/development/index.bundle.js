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
      //zn.debug('alert.close');
      modal.close();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-alert alert-in', this.props.className),
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
  getInitialState: function getInitialState() {
    return {
      fullscreen: false
    };
  },
  __onClose: function __onClose(event) {
    var _result = this.props.onClose && this.props.onClose(event, this);

    if (_result !== false) {
      var _dom = ReactDOM.findDOMNode(this);

      _dom.classList.add('dialog-out');

      _dom.addEventListener("animationend", function () {
        modal.close();
      }, false);
    }
  },
  __renderFullscreen: function __renderFullscreen() {
    var _this = this;

    if (this.state.fullscreen) {
      return /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return _this.setState({
            fullscreen: false
          });
        },
        className: "full-screen"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "window-restore",
        className: "svg-inline--fa fa-window-restore fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"
      })));
    } else {
      return /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return _this.setState({
            fullscreen: true
          });
        },
        className: "full-screen"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "far",
        "data-icon": "window-maximize",
        className: "svg-inline--fa fa-window-maximize fa-w-16 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z"
      })));
    }
  },
  __headerRender: function __headerRender() {
    if (this.props.header) {
      return znui.react.createReactElement(this.props.header, this.props);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "dialog-header"
    }, this.props.title && /*#__PURE__*/React.createElement("div", {
      className: "dialog-title"
    }, this.props.title), /*#__PURE__*/React.createElement("div", {
      className: "btns"
    }, this.props.fullscreen && this.__renderFullscreen(), this.props.closeable && /*#__PURE__*/React.createElement("span", {
      onClick: this.__onClose,
      className: "dialog-close"
    }, "x")));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-popup-dialog dialog-in', this.props.className, this.props.autoWidth ? 'auto-width' : 'min-width'),
      style: this.props.style,
      "data-focus": this.props.focus,
      "data-fullscreen": this.state.fullscreen
    }, this.__headerRender(), /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("dialog-body", this.props.contentClassName),
      style: this.props.contentStyle
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
    closePopover: function closePopover() {
      if (this._popover) {
        this._popover.close();
      }

      return this;
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
          this.closePopover();
          this._popover = popover.render(_render, zn.extend({
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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        if (typeof title == 'string') {
          return this.create({
            title: title
          });
        } else if (_typeof(title) == 'object') {
          return this.create(title);
        }
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
        }, this._dom)); //zn.debug('Modal created(' + (this._modals.length + 1) + '): ', _modal);


        if (ifPush !== false) {
          this._modals.push(_modal);
        }

        return _modal;
      },
      close: function close(delay, callback) {
        //zn.debug('Modal close(' + this._modals.length + '): ');
        var _modal = this._modals.pop();

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
        if (this && this._modals.length) {
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
  info: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z',
  message: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
};
var Notifier = React.createClass({
  displayName: 'ZRNotification',
  componentDidMount: function componentDidMount() {
    if (this.props.delay != 0) {
      this._timeout = window.setTimeout(this.out, this.props.delay || 3000);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  },
  out: function out() {
    var _dom = ReactDOM.findDOMNode(this);

    _dom.classList.add('notification-out');

    _dom.addEventListener("animationend", function () {
      if (this._timeout) {
        window.clearTimeout(this._timeout);
      }

      if (_dom.parentNode && _dom.parentNode.parentNode) {
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
    }, this.props.content), this.props.delay === 0 && /*#__PURE__*/React.createElement("i", {
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
        var _ref = /*#__PURE__*/React.createElement(Notifier, {
          type: type,
          content: content,
          delay: delay
        });

        ReactDOM.render(_ref, zn.dom.createElement('div', {}, this._dom));
        return _ref;
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
      },
      message: function message(content, delay) {
        return this.open('message', content, delay);
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
      stopPropagation: false,
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

    this._dom.addEventListener(this.props.event.type, this.__eventListener, false);

    setTimeout(function () {
      this.fixPosition(this.props.target);
    }.bind(this), 0);
    this.props.onPopoverDidMount && this.props.onPopoverDidMount(this);
  },
  __eventListener: function __eventListener(event) {
    var _result = this.props.onContainerEvent && this.props.onContainerEvent(event, this);

    if (this.props.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (_result !== false) {
      this.close();
    }
  },
  close: function close(callback) {
    if (!this._dom) return;
    var _dom = this._dom;

    _dom.classList.add('popover-out');

    _dom.removeEventListener(this.props.event.type, this.__eventListener, false);

    _dom.addEventListener("animationend", function () {
      if (_dom.parentNode && _dom.parentNode.parentNode) {
        _dom.parentNode.parentNode.removeChild(_dom.parentNode);

        ReactDOM.unmountComponentAtNode(_dom.parentNode);
        callback && callback();
      }
    }, false);
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

    _arrowClassNames.push('zr-animate-scale-up');

    _popover.className = _popover.className + ' ' + _arrowClassNames.join(' ');
  },
  __onContentScroll: function __onContentScroll(event) {
    this.props.onContentScroll && this.props.onContentScroll(event, this);
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
      className: znui.react.classname('zr-popup-popover popover-in zr-arrow zr-arrow-color-white', this.state.arrowClassName)
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
      onScroll: this.__onContentScroll,
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
        this._popovers = {};
      },
      __resolveAllPopover: function __resolveAllPopover(target, values) {
        values = values || [];

        if (target) {
          if (target.tagName == 'BODY') return values;

          if (target.getAttribute) {
            if (target.getAttribute("data-popover-id")) {
              values.push(target.getAttribute("data-popover-id"));
            }

            if (target.getAttribute("data-popover-ref-ids")) {
              values = values.concat(target.getAttribute("data-popover-ref-ids"));
            }
          }

          return this.__resolveAllPopover(target.parentNode, values);
        }

        return values;
      },
      __initWindowEvent: function __initWindowEvent(options) {
        var _this2 = this;

        var _type = options.event.type;
        window.__znui_react_popup_events__ = window.__znui_react_popup_events__ || [];

        if (window.__znui_react_popup_events__.indexOf(_type) === -1) {
          window.__znui_react_popup_events__.push(_type);

          window.addEventListener(_type, function (event) {
            return _this2.__onWindowClick(event, options);
          }, false);
        }
      },
      __onWindowClick: function __onWindowClick(event, options) {
        this.closeTarget(event.target);
      },
      render: function render(content, options) {
        var _this3 = this;

        if (options) {
          if (options.reset) {
            this.closeTarget(options.target);
          }

          if (options.event) {
            this.__initWindowEvent(options);
          }
        }

        var _id = zn.uuid(),
            _refids = this.__resolveAllPopover(options.event.target),
            _attrs = {
          "data-popover-id": _id
        };

        if (_refids.length) {
          _attrs["data-popover-ref-ids"] = _refids.join(',');
        }

        var _dom = zn.dom.createElement('div', _attrs, this._dom);

        var _popover = ReactDOM.render( /*#__PURE__*/React.createElement(Popover, _extends({}, options, {
          content: content,
          onContentScroll: function onContentScroll(event, popover) {
            _this3.closeTarget(event.target);
          }
        })), _dom);

        return this._popovers[_id] = _popover, _popover;
      },
      closeTarget: function closeTarget(target) {
        var _popovers = this.__resolveAllPopover(target, []) || [];

        for (var key in this._popovers) {
          if (_popovers.indexOf(key) === -1) {
            this._popovers[key].close();

            this._popovers[key] = null;
            delete this._popovers[key];
          }
        }
      },
      closeAll: function closeAll(tag) {
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
          if (zn.is(callback, 'string') && process && process.env && "development" == 'development') {//zn.debug(callback);
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

__webpack_require__(/*! znui-react */ "znui-react");
__webpack_require__(/*! ./__/dist/production/index.style.bundle.css */ "../node_modules/znui-react-popup/__/dist/production/index.style.bundle.css");
module.exports = znui.react.loadedComponents[__webpack_require__(/*! ./package.json */ "../node_modules/znui-react-popup/package.json").name] = __webpack_require__(/*! ./__/build/index.js */ "../node_modules/znui-react-popup/__/build/index.js");

/***/ }),

/***/ "../node_modules/znui-react-popup/package.json":
/*!*****************************************************!*\
  !*** ../node_modules/znui-react-popup/package.json ***!
  \*****************************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, email, license, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"znui-react-popup\",\"version\":\"2.0.10\",\"description\":\"Web popup component.\",\"main\":\"index.js\",\"scripts\":{\"clean-example\":\"rimraf ./example/www\",\"clean-exports\":\"rimraf ./__/build/ && rimraf ./__/dist/\",\"zr.start\":\"rimraf ./example/www && webpack-dev-server --config ./example/development.js --znui-react.path ../../ --watch\",\"zr.example\":\"rimraf ./example/www && webpack --config ./example/production.js --znui-react.path ../../\",\"zr.prod.dist\":\"rimraf ./__/dist/production && webpack --config ./__/production.js --znui-react.path ../../ --uglify\",\"zr.prod.dist.watch\":\"rimraf ./__/dist/production && webpack --config ./__/production.js --znui-react.path ../../  --uglify --watch\",\"zr.prod.build\":\"rimraf ./__/build && babel src -d __/build/\",\"zr.prod.build.watch\":\"rimraf ./__/build && babel src -d __/build/ --watch\",\"zr.dev.dist\":\"rimraf ./__/dist/development && webpack --config ./__/development.js --znui-react.path ../../\",\"zr.dev.dist.watch\":\"rimraf ./__/dist/development && webpack --config ./__/development.js --znui-react.path ../../ --watch\",\"zr.release\":\"npm run zr.prod.build && npm run zr.prod.dist && npm run zr.dev.dist\",\"zr.release.watch\":\"npm run zr.prod.build.watch && npm run zr.prod.dist.watch && npm run zr.dev.dist.watch\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/znui/znui-react-popup.git\"},\"keywords\":[\"web component\",\"popup\"],\"author\":\"yangyxu\",\"email\":\"xuyy0618@qq.com\",\"license\":\"MIT\",\"devDependencies\":{\"znui-react\":\"latest\"}}");

/***/ }),

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var Loading = __webpack_require__(/*! ./Loading */ "./Loading.js");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      disabled: false,
      loading: false,
      loadingText: null
    };
  },
  __click: function __click(e) {
    if (this.__disabled()) {
      return;
    }
    if (this.props.hash) {
      window.location.hash = "#" + this.props.hash;
    }
    this.props.onClick && this.props.onClick(e, this);
  },
  loading: function loading(value, loadingText) {
    if (value) {
      this.setState({
        disabled: true,
        loading: true,
        loadingText: loadingText
      });
    } else {
      this.setState({
        disabled: false,
        loading: false,
        loadingText: null
      });
    }
  },
  __disabled: function __disabled() {
    return this.props.disabled || this.state.disabled;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-input-button ' + (this.props.className || '') + (this.__disabled() ? ' disabled' : ''),
      onClick: this.__click,
      "data-zr-popup-tooltip": this.__disabled() ? this.props.tooltip : ''
    }, !!this.props.children && (this.state.loadingText || this.props.children), !this.props.children && (this.state.loadingText || this.props.label), this.state.loading && /*#__PURE__*/React.createElement(Loading, null));
  }
});

/***/ }),

/***/ "./Input.js":
/*!******************!*\
  !*** ./Input.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
module.exports = React.createClass(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
      style: {},
      value: this.__formatValue(_value)
    };
  },
  componentWillUpdate: function componentWillUpdate(props, state) {
    if (this.props.syncDefaultValue && props.defaultValue != state.value) {
      this.setState({
        value: props.defaultValue
      });
    }
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
  componentDidMount: function componentDidMount() {}
}, "componentWillUpdate", function componentWillUpdate(newProps, newState, newContext) {
  if (newProps.value != newState.value) {
    this.setState({
      value: newProps.value
    });
  }
}), "getValue", function getValue() {
  return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
}), "setValue", function setValue(value) {
  return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
}), "__parseGetValue", function __parseGetValue(value) {
  if (this.props.type == 'number') {
    value = +value;
  }
  if (this.props.type == 'date') {
    if (!value) {
      return null;
    }
  }
  return value || '';
}), "__parseSetValue", function __parseSetValue(value) {
  return this.__formatValue(value);
}), "__onChange", function __onChange(event) {
  this.setState({
    value: event.target.value
  });
  var _value = this.__formatValue(event.target.value);
  if (this.props.attrs) {
    if (this.props.attrs.max && _value > this.props.attrs.max) {
      _value = this.props.attrs.max;
    }
    if (this.props.attrs.min != null && _value < this.props.attrs.min) {
      _value = this.props.attrs.min;
    }
  }
  event.input = this;
  event.value = _value;
  event.validate = _value;
  this.props.onChange && this.props.onChange(event, this);
}), "__onFocus", function __onFocus(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  this.props.onFocus && this.props.onFocus(event, this);
}), "__onBlur", function __onBlur(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  this.props.onBlur && this.props.onBlur(event, this);
}), "__onKeyUp", function __onKeyUp(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  if (event.nativeEvent.keyCode == 13) {
    this.props.onEnter && this.props.onEnter(event, this);
  }
  this.props.onKeyUp && this.props.onKeyUp(event, this);
}), "render", function render() {
  var _type = TYPES[this.props.type] || this.props.type || 'text';
  return /*#__PURE__*/React.createElement("input", _extends({
    className: znui.react.classname('zr-input', this.props.className),
    required: this.props.required,
    style: znui.react.style(this.props.style, this.state.style)
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
}));

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

/***/ "./LimitedTextarea.js":
/*!****************************!*\
  !*** ./LimitedTextarea.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    var _value = this.props.value || '';
    return {
      value: _value,
      length: _value.length
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value;
    if (_value.length > this.props.max) {
      return;
    }
    e.value = _value;
    this.setState({
      value: _value,
      length: _value.length
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-limited-textarea ' + (this.state.length == this.props.max ? 'full' : '')
    }, /*#__PURE__*/React.createElement("textarea", _extends({}, this.props, {
      value: this.state.value,
      onChange: this.__onChange
    })), this.props.max && /*#__PURE__*/React.createElement("div", {
      className: "limit"
    }, /*#__PURE__*/React.createElement("span", {
      className: "length"
    }, this.state.length), " / ", /*#__PURE__*/React.createElement("span", {
      className: "max"
    }, this.props.max)));
  }
});

/***/ }),

/***/ "./Loading.js":
/*!********************!*\
  !*** ./Loading.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-input-loading ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "lds-ring"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)));
  }
});

/***/ }),

/***/ "./Password.js":
/*!*********************!*\
  !*** ./Password.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      equal: true,
      errorMessage: this.props.errorMessage || '密码不匹配',
      type: 'password',
      value: this.props.value || ''
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value,
      _equal = null;
    e.value = _value;
    if (this.props.password) {
      if (this.props.password == _value) {
        _equal = true;
      } else {
        _equal = false;
      }
      e.equal = _equal;
    }
    this.setState({
      value: _value,
      equal: _equal
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  __onTypeChange: function __onTypeChange() {
    if (this.state.type == 'password') {
      this.state.type = 'text';
    } else {
      this.state.type = 'password';
    }
    this.forceUpdate();
  },
  __errorMsg: function __errorMsg() {
    if (this.props.password && !this.state.equal) {
      return /*#__PURE__*/React.createElement("div", {
        className: "error-msg"
      }, this.state.errorMessage);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-input-password ' + (this.props.className || '') + (this.state.active ? ' active' : '')
    }, /*#__PURE__*/React.createElement("input", _extends({}, this.props, {
      className: "input",
      type: this.state.type,
      value: this.state.value,
      onChange: this.__onChange
    })), /*#__PURE__*/React.createElement("i", {
      onClick: this.__onTypeChange,
      className: 'exchange-icon fa ' + (this.state.type == 'password' ? 'fa-eye' : 'fa-eye-slash')
    }), this.__errorMsg());
  }
});

/***/ }),

/***/ "./PhoneCode.js":
/*!**********************!*\
  !*** ./PhoneCode.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var Timer = __webpack_require__(/*! ./Timer */ "./Timer.js");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      value: '',
      seconds: 0
    };
  },
  __onChange: function __onChange(e) {
    var _this = this;
    var _value = e.target.value;
    e.value = _value;
    this.setState({
      errorMessage: null,
      value: _value
    }, function () {
      _this.props.onChange && _this.props.onChange(e, _value, _this.props);
    });
  },
  __errorMsg: function __errorMsg() {
    if (this.state.errorMessage) {
      return /*#__PURE__*/React.createElement("div", {
        className: "error-msg"
      }, this.state.errorMessage);
    }
  },
  __clickSendBtn: function __clickSendBtn() {
    var _this2 = this;
    if (this.props.phone) {
      zn.data.post(this.props.api, {
        data: {
          phone: this.props.phone
        }
      }).then(function (data) {
        if (data.code == 200) {
          _this2.setState({
            seconds: 120
          });
          zr.popup.notifier.success("验证码发送成功，请注意查收。");
        }
      });
    } else {
      if (this._input) {
        this._input.focus();
      }
      this.setState({
        errorMessage: '请先填写手机号'
      });
    }
  },
  render: function render() {
    var _this3 = this;
    return /*#__PURE__*/React.createElement("div", {
      className: 'zr-input-phone-code ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("input", _extends({
      ref: function ref(_ref) {
        return _this3._input = _ref;
      }
    }, this.props, {
      className: "input",
      type: this.state.type,
      value: this.state.value,
      onChange: this.__onChange
    })), /*#__PURE__*/React.createElement("div", {
      className: "code-btn"
    }, this.state.seconds ? /*#__PURE__*/React.createElement(Timer, {
      seconds: this.state.seconds,
      onEnd: function onEnd() {
        return _this3.setState({
          seconds: 0
        });
      }
    }) : /*#__PURE__*/React.createElement("span", {
      className: "send-code",
      onClick: this.__clickSendBtn
    }, "\u53D1\u9001\u9A8C\u8BC1\u7801")), this.__errorMsg());
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

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    var _value = ReactDOM.findDOMNode(this).value;
    //console.log(_value.replace(/\u000A/g, '\n'));
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

/***/ "./Timer.js":
/*!******************!*\
  !*** ./Timer.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      seconds: this.props.seconds || 120
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;
    this.state.timer = setInterval(function () {
      if (_this.state.seconds) {
        _this.setState({
          seconds: _this.state.seconds - 1
        });
      } else {
        window.clearInterval(_this.state.timer);
        _this.state.timer = null;
        _this.setState({
          second: 0
        });
        _this.props.onEnd && _this.props.onEnd();
      }
    }, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.state.timer) {
      window.clearInterval(this.state.timer);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("span", {
      className: 'zr-input-timer ' + (this.props.className || '')
    }, "\u8FD8\u5269 ", this.state.seconds, " \u79D2");
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
  Button: __webpack_require__(/*! ./Button.js */ "./Button.js"),
  Input: __webpack_require__(/*! ./Input.js */ "./Input.js"),
  Inputs: __webpack_require__(/*! ./Inputs.js */ "./Inputs.js"),
  Timer: __webpack_require__(/*! ./Timer.js */ "./Timer.js"),
  Loading: __webpack_require__(/*! ./Loading.js */ "./Loading.js"),
  Password: __webpack_require__(/*! ./Password.js */ "./Password.js"),
  PhoneCode: __webpack_require__(/*! ./PhoneCode.js */ "./PhoneCode.js"),
  SearchInput: __webpack_require__(/*! ./SearchInput.js */ "./SearchInput.js"),
  SearchSelect: __webpack_require__(/*! ./SearchSelect.js */ "./SearchSelect.js"),
  TagInput: __webpack_require__(/*! ./TagInput.js */ "./TagInput.js"),
  Textarea: __webpack_require__(/*! ./Textarea.js */ "./Textarea.js"),
  LimitedTextarea: __webpack_require__(/*! ./LimitedTextarea.js */ "./LimitedTextarea.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0FsZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL01vZGFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9idWlsZC9Ob3RpZmllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvX18vYnVpbGQvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy96bnVpLXJlYWN0LXBvcHVwL19fL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvem51aS1yZWFjdC1wb3B1cC9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3pudWktcmVhY3QtcG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0lucHV0LmpzIiwid2VicGFjazovLy8uL0lucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9MaW1pdGVkVGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9QYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9QaG9uZUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vU2VhcmNoU2VsZWN0LmpzIiwid2VicGFjazovLy8uL1RhZ0lucHV0LmpzIiwid2VicGFjazovLy8uL1RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL1RpbWVyLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpybG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIkxvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImRpc2FibGVkIiwibG9hZGluZyIsImxvYWRpbmdUZXh0IiwiX19jbGljayIsImUiLCJfX2Rpc2FibGVkIiwicHJvcHMiLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJvbkNsaWNrIiwidmFsdWUiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY2xhc3NOYW1lIiwidG9vbHRpcCIsImNoaWxkcmVuIiwibGFiZWwiLCJSZWFjdERPTSIsIlRZUEVTIiwiZW1haWwiLCJ0ZWwiLCJpZCIsIklEIiwiY2hlY2tDb2RlIiwidmFsIiwicCIsImZhY3RvciIsInBhcml0eSIsImNvZGUiLCJzdWJzdHJpbmciLCJ0ZXN0Iiwic3VtIiwiaSIsInRvVXBwZXJDYXNlIiwiY2hlY2tEYXRlIiwicGF0dGVybiIsInllYXIiLCJtb250aCIsImRhdGUiLCJkYXRlMiIsIkRhdGUiLCJnZXRNb250aCIsInBhcnNlSW50IiwiY2hlY2tQcm92IiwicHJvdnMiLCJjaGVja0lEIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0RGVmYXVsdFByb3BzIiwiYXR0cnMiLCJyZWFkb25seSIsIl92YWx1ZSIsInVuZGVmaW5lZCIsImRlZmF1bHRWYWx1ZSIsIl9fZm9ybWF0VmFsdWUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwic3luY0RlZmF1bHRWYWx1ZSIsInR5cGUiLCJzcGxpdCIsImpvaW4iLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwiX3ZhbGlkYXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJuZXdQcm9wcyIsIm5ld1N0YXRlIiwibmV3Q29udGV4dCIsImdldFZhbHVlIiwiX19wYXJzZUdldFZhbHVlIiwiZmluZERPTU5vZGUiLCJzZXRWYWx1ZSIsIl9fcGFyc2VTZXRWYWx1ZSIsIl9fb25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm1heCIsIm1pbiIsImlucHV0Iiwib25DaGFuZ2UiLCJfX29uRm9jdXMiLCJvbkZvY3VzIiwiX19vbkJsdXIiLCJvbkJsdXIiLCJfX29uS2V5VXAiLCJuYXRpdmVFdmVudCIsImtleUNvZGUiLCJvbkVudGVyIiwib25LZXlVcCIsIl90eXBlIiwiX2V4dGVuZHMiLCJyZWFjdCIsImNsYXNzbmFtZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwiZGF0YSIsIl92YWx1ZXMiLCJrZXkiLCJyZWZzIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJiaW5kIiwiX19vbklucHV0Q2hhbmdlIiwiaXRlbSIsIm1hcCIsIl90aGlzIiwicmVmIiwibGVuZ3RoIiwiZXF1YWwiLCJlcnJvck1lc3NhZ2UiLCJfZXF1YWwiLCJwYXNzd29yZCIsIl9fb25UeXBlQ2hhbmdlIiwiZm9yY2VVcGRhdGUiLCJfX2Vycm9yTXNnIiwiYWN0aXZlIiwiVGltZXIiLCJzZWNvbmRzIiwiX19jbGlja1NlbmRCdG4iLCJfdGhpczIiLCJwaG9uZSIsInpuIiwicG9zdCIsImFwaSIsInRoZW4iLCJ6ciIsInBvcHVwIiwibm90aWZpZXIiLCJzdWNjZXNzIiwiX2lucHV0IiwiZm9jdXMiLCJfdGhpczMiLCJvbkVuZCIsImZvY3VzZWQiLCJfX29uT3B0SXRlbUNsaWNrIiwib3B0Iiwib3B0aW9uIiwiX19vcHRJdGVtUmVuZGVyIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJEYXRhVmlldyIsIm9wdGlvbnMiLCJpdGVtUmVuZGVyIiwiX19yZW5kZXJPcHRpb25zIiwiRHJvcGRvd24iLCJwb3BvdmVyIiwib25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCIsIl9faWNvbkNsaWNrIiwiZm9jdXNhYmxlIiwicm9sZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJkIiwiU2VhcmNoSW5wdXQiLCJsb2FkZXIiLCJ2YWx1ZUtleSIsInRleHRLZXkiLCJtdWx0aXBsZSIsImZpbHRlciIsInZhbHVlcyIsIl9fbG9hZERhdGEiLCJyZXF1ZXN0IiwicmVzdWx0Iiwic2xpY2UiLCJfX29uSXRlbUNsaWNrIiwiaW5kZXhPZiIsInNwbGljZSIsIl9fY2hlY2tlZCIsIl9faXRlbVJlbmRlciIsIl9lbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50Iiwib3duZXIiLCJjb250ZXh0IiwiX19yZW5kZXJMaXN0IiwiY29udGVudCIsIl9fb25GaWx0ZXIiLCJvbkZpbHRlciIsIl90ZXh0IiwiX19vbklucHV0U2VhcmNoIiwiaW5uZXJUZXh0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5uZXJIVE1MIiwiX19vbktleURvd24iLCJwb3AiLCJfX29uUm9vdENsaWNrIiwiX19vblRhZ0RlbGV0ZSIsIl9fdGFnUmVuZGVyIiwidGFnIiwidGl0bGUiLCJjb250ZW50RWRpdGFibGUiLCJvbktleURvd24iLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNlY29uZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQnV0dG9uIiwiSW5wdXQiLCJJbnB1dHMiLCJQYXNzd29yZCIsIlBob25lQ29kZSIsIlNlYXJjaFNlbGVjdCIsIlRhZ0lucHV0IiwiVGV4dGFyZWEiLCJMaW1pdGVkVGV4dGFyZWEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SUFBRSxHQUFDLGVBQy9ELEVBQUMsSUFBSSxDQUFDSixLQUFLLENBQUM4RyxPQUFPLEVBQUMsU0FDbEIsQ0FBQztFQUVUO0FBQ0QsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDcENGaEksTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDYjhNLE1BQU0sRUFBRWpOLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQztFQUM5QmtOLEtBQUssRUFBRWxOLG1CQUFPLENBQUMsOEJBQVksQ0FBQztFQUM1Qm1OLE1BQU0sRUFBRW5OLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQztFQUM5QmlJLEtBQUssRUFBRWpJLG1CQUFPLENBQUMsOEJBQVksQ0FBQztFQUM1QkMsT0FBTyxFQUFFRCxtQkFBTyxDQUFDLGtDQUFjLENBQUM7RUFDaENvTixRQUFRLEVBQUVwTixtQkFBTyxDQUFDLG9DQUFlLENBQUM7RUFDbENxTixTQUFTLEVBQUVyTixtQkFBTyxDQUFDLHNDQUFnQixDQUFDO0VBQ3BDc0ssV0FBVyxFQUFFdEssbUJBQU8sQ0FBQywwQ0FBa0IsQ0FBQztFQUN4Q3NOLFlBQVksRUFBRXROLG1CQUFPLENBQUMsNENBQW1CLENBQUM7RUFDMUN1TixRQUFRLEVBQUV2TixtQkFBTyxDQUFDLG9DQUFlLENBQUM7RUFDbEN3TixRQUFRLEVBQUV4TixtQkFBTyxDQUFDLG9DQUFlLENBQUM7RUFDbEN5TixlQUFlLEVBQUV6TixtQkFBTyxDQUFDLGtEQUFzQjtBQUNuRCxDQUFDLEM7Ozs7Ozs7Ozs7O0FDYkQsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWxELGFBQWEsNkJBQTZCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBNUMsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIEFsZXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSQWxlcnQnLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiAn56Gu6K6kJ1xuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBfX29uQ2xpY2s6IGZ1bmN0aW9uIF9fb25DbGljayhpdGVtLCBpbmRleCkge1xuICAgIGl0ZW0uaW5kZXggPSBpbmRleDtcblxuICAgIHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtLCB0aGlzKTtcblxuICAgIF9yZXN1bHQgPSBpdGVtLm9uQ2xpY2sgJiYgaXRlbS5vbkNsaWNrKGl0ZW0sIHRoaXMpO1xuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAvL3puLmRlYnVnKCdhbGVydC5jbG9zZScpO1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1hbGVydCBhbGVydC1pbicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWlubmVyXCJcbiAgICB9LCB0aGlzLnByb3BzLnRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIHRoaXMucHJvcHMuY29udGVudCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiYWxlcnQtY29udGVudFwiXG4gICAgfSwgdGhpcy5wcm9wcy5jb250ZW50KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJhbGVydC1idG5zXCJcbiAgICB9LCB0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgY2xhc3NOYW1lOiBcImFsZXJ0LWJ0blwiLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fX29uQ2xpY2soaXRlbSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9LCBpdGVtLnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSkpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQWxlcnQ6IEFsZXJ0LFxuICBhbGVydDogZnVuY3Rpb24gYWxlcnQoY29udGVudCwgdGl0bGUsIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBfYWxlcnQgPSBtb2RhbC5jcmVhdGUoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCBfZXh0ZW5kcyh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgb25DbGljazogY2FsbGJhY2tcbiAgICB9LCBwcm9wcykpLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gX2FsZXJ0O1xuICB9LFxuICBjb25maXJtOiBmdW5jdGlvbiBjb25maXJtKGNvbnRlbnQsIHRpdGxlLCBfY29uZmlybTIsIGNhbmNlbCwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyA9IHpuLmV4dGVuZCh7XG4gICAgICBjYW5jZWw6ICflj5bmtognLFxuICAgICAgY29uZmlybTogJ+ehruWumidcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHZhciBfY29uZmlybSA9IG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBidXR0b25zOiBbe1xuICAgICAgICB0ZXh0OiBfb3B0aW9ucy5jYW5jZWwsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBjYW5jZWwgJiYgY2FuY2VsKF9jb25maXJtKTtcblxuICAgICAgICAgIGlmIChfcmV0dXJuICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgX2NvbmZpcm0uZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBfb3B0aW9ucy5jb25maXJtLFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgIHZhciBfcmV0dXJuID0gX2NvbmZpcm0yICYmIF9jb25maXJtMihfY29uZmlybSk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9jb25maXJtLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiBfY29uZmlybTtcbiAgfSxcbiAgcHJvbXB0OiBmdW5jdGlvbiBwcm9tcHQoYXJndikge1xuICAgIHZhciBfYXJndiA9IHpuLmV4dGVuZCh7XG4gICAgICB0aXRsZTogYXJndi50aXRsZSxcbiAgICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiYWxlcnQtaW5wdXRcIixcbiAgICAgICAgb25DaGFuZ2U6IGFyZ3Yub25DaGFuZ2UsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICB9KSxcbiAgICAgIGNvbmZpcm06IGFyZ3YuY29uZmlybSxcbiAgICAgIGNhbmNlbDogYXJndi5jYW5jZWxcbiAgICB9LCBhcmd2KTtcblxuICAgIHZhciBfcHJvbXB0ID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwge1xuICAgICAgY29udGVudDogX2FyZ3YuY29udGVudCxcbiAgICAgIHRpdGxlOiBfYXJndi50aXRsZSxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6IF9hcmd2LmNhbmNlbFRleHQgfHwgJ+WPlua2iCcsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQsIGFsZXJ0KSB7XG4gICAgICAgICAgdmFyIF9yZXR1cm4gPSBfYXJndi5jYW5jZWwgJiYgX2FyZ3YuY2FuY2VsKGV2ZW50LCBhbGVydCk7XG5cbiAgICAgICAgICBpZiAoX3JldHVybiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9wcm9tcHQuZGVzdHJveSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiBfYXJndi5jb25maXJtVGV4dCB8fCAn56Gu5a6aJyxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCwgYWxlcnQpIHtcbiAgICAgICAgICB2YXIgX3JldHVybiA9IF9hcmd2LmNvbmZpcm0gJiYgX2FyZ3YuY29uZmlybShldmVudCwgYWxlcnQpO1xuXG4gICAgICAgICAgaWYgKF9yZXR1cm4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfcHJvbXB0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSksIHtcbiAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5J1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiBfcHJvbXB0O1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBtb2RhbCA9IHJlcXVpcmUoJy4vTW9kYWwnKS5tb2RhbDtcblxudmFyIERpYWxvZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUkRpYWxvZycsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjb250ZW50OiBudWxsXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgX19vbkNsb3NlOiBmdW5jdGlvbiBfX29uQ2xvc2UoZXZlbnQpIHtcbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25DbG9zZSAmJiB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsIHRoaXMpO1xuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBfZG9tLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1vdXQnKTtcblxuICAgICAgX2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIF9fcmVuZGVyRnVsbHNjcmVlbjogZnVuY3Rpb24gX19yZW5kZXJGdWxsc2NyZWVuKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5mdWxsc2NyZWVuKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXJcIixcbiAgICAgICAgXCJkYXRhLWljb25cIjogXCJ3aW5kb3ctcmVzdG9yZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwic3ZnLWlubGluZS0tZmEgZmEtd2luZG93LXJlc3RvcmUgZmEtdy0xNiBcIixcbiAgICAgICAgcm9sZTogXCJpbWdcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgICBkOiBcIk00NjQgMEgxNDRjLTI2LjUgMC00OCAyMS41LTQ4IDQ4djQ4SDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMzIwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00OGg0OGMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTk2IDQ2NEg0OFYyNTZoMzIwdjIwOHptOTYtOTZoLTQ4VjE0NGMwLTI2LjUtMjEuNS00OC00OC00OEgxNDRWNDhoMzIwdjMyMHpcIlxuICAgICAgfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgIFwiZGF0YS1wcmVmaXhcIjogXCJmYXJcIixcbiAgICAgICAgXCJkYXRhLWljb25cIjogXCJ3aW5kb3ctbWF4aW1pemVcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInN2Zy1pbmxpbmUtLWZhIGZhLXdpbmRvdy1tYXhpbWl6ZSBmYS13LTE2IFwiLFxuICAgICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCJcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgIGQ6IFwiTTQ2NCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg0MTZjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6bTAgMzk0YzAgMy4zLTIuNyA2LTYgNkg1NGMtMy4zIDAtNi0yLjctNi02VjE5Mmg0MTZ2MjM0elwiXG4gICAgICB9KSkpO1xuICAgIH1cbiAgfSxcbiAgX19oZWFkZXJSZW5kZXI6IGZ1bmN0aW9uIF9faGVhZGVyUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlYWRlcikge1xuICAgICAgcmV0dXJuIHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaGVhZGVyLCB0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1oZWFkZXJcIlxuICAgIH0sIHRoaXMucHJvcHMudGl0bGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy10aXRsZVwiXG4gICAgfSwgdGhpcy5wcm9wcy50aXRsZSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJidG5zXCJcbiAgICB9LCB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gJiYgdGhpcy5fX3JlbmRlckZ1bGxzY3JlZW4oKSwgdGhpcy5wcm9wcy5jbG9zZWFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX19vbkNsb3NlLFxuICAgICAgY2xhc3NOYW1lOiBcImRpYWxvZy1jbG9zZVwiXG4gICAgfSwgXCJ4XCIpKSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKCd6ci1wb3B1cC1kaWFsb2cgZGlhbG9nLWluJywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuYXV0b1dpZHRoID8gJ2F1dG8td2lkdGgnIDogJ21pbi13aWR0aCcpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICBcImRhdGEtZm9jdXNcIjogdGhpcy5wcm9wcy5mb2N1cyxcbiAgICAgIFwiZGF0YS1mdWxsc2NyZWVuXCI6IHRoaXMuc3RhdGUuZnVsbHNjcmVlblxuICAgIH0sIHRoaXMuX19oZWFkZXJSZW5kZXIoKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcImRpYWxvZy1ib2R5XCIsIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZSksXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5jb250ZW50U3R5bGVcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRGlhbG9nOiBEaWFsb2csXG4gIGRpYWxvZzogZnVuY3Rpb24gZGlhbG9nKGFyZ3YsIGlmUHVzaCkge1xuICAgIHZhciBfZGlhbG9nID0gbW9kYWwuY3JlYXRlKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIGFyZ3YpLCB7XG4gICAgICBcImNsYXNzXCI6ICdtb2RhbC1taWRkbGUgbW9kYWwtb3ZlcmxheSdcbiAgICB9LCBpZlB1c2gpO1xuXG4gICAgcmV0dXJuIF9kaWFsb2c7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIHBvcG92ZXIgPSByZXF1aXJlKCcuL1BvcG92ZXInKS5wb3BvdmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRHJvcGRvd246IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1pSRHJvcGRvd24nLFxuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBldmVudFR5cGU6ICdjbGljaydcbiAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hZGRFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnRUeXBlLCB0aGlzLl9fZXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgfSxcbiAgICBnZXRQYXJlbnQ6IGZ1bmN0aW9uIGdldFBhcmVudCh0YXJnZXQpIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd6ci1wb3B1cC1kcm9wZG93bicpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VQb3BvdmVyOiBmdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gICAgICBpZiAodGhpcy5fcG9wb3Zlcikge1xuICAgICAgICB0aGlzLl9wb3BvdmVyLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgX19ldmVudEhhbmRsZXI6IGZ1bmN0aW9uIF9fZXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGFyZ2V0ID0gdGhpcy5nZXRQYXJlbnQoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICBfcG9wb3ZlciA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5wb3BvdmVyKTtcblxuICAgICAgaWYgKF90YXJnZXQgJiYgX3BvcG92ZXIgJiYgX3BvcG92ZXIucmVuZGVyKSB7XG4gICAgICAgIHZhciBfcmVuZGVyID0gX3BvcG92ZXIucmVuZGVyO1xuXG4gICAgICAgIGlmICh6bi5pcyhfcmVuZGVyLCAnZnVuY3Rpb24nKSkge1xuICAgICAgICAgIGlmICghX3JlbmRlci5wcm90b3R5cGUgfHwgIV9yZW5kZXIucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICAgICAgX3JlbmRlciA9IF9yZW5kZXIoZXZlbnQsIHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfcmVuZGVyKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgX3BvcG92ZXIucmVuZGVyID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgX3BvcG92ZXIucmVuZGVyO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3BvdmVyKCk7XG4gICAgICAgICAgdGhpcy5fcG9wb3ZlciA9IHBvcG92ZXIucmVuZGVyKF9yZW5kZXIsIHpuLmV4dGVuZCh7XG4gICAgICAgICAgICByZXNldDogdHJ1ZSxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIHRhcmdldDogX3RhcmdldFxuICAgICAgICAgIH0sIF9wb3BvdmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXBvcHVwLWRyb3Bkb3duXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgbW9kYWwgPSByZXF1aXJlKCcuL01vZGFsJykubW9kYWw7XG5cbnZhciBMb2FkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJMb2FkZXInLFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogbnVsbCxcbiAgICAgIHRpdGxlOiAnTG9hZGluZyAuLi4gJ1xuICAgIH07XG4gIH0sXG4gIF9fcmVuZGVyQ29udGVudDogZnVuY3Rpb24gX19yZW5kZXJDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRpdGxlKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJsb2FkZXJcIixcbiAgICAgICAgXCJkYXRhLWxvYWRlclwiOiBcInNwaW5uZXJcIlxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiXG4gICAgICB9LCB0aGlzLnByb3BzLnRpdGxlKSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbG9hZGVyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHpudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSlcbiAgICB9LCB0aGlzLl9fcmVuZGVyQ29udGVudCgpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTG9hZGVyOiBMb2FkZXIsXG4gIGxvYWRlcjogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoYXJndikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZXIpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkZXIuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsLmNyZWF0ZSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBhcmd2KSwge1xuICAgICAgICAgIFwiY2xhc3NcIjogJ21vZGFsLW1pZGRsZSBtb2RhbC1vdmVybGF5JyxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2xvYWRlciA9IF9yZWY7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9LFxuICAgICAgbG9hZGluZzogZnVuY3Rpb24gbG9hZGluZyh0aXRsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2YodGl0bGUpID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgIHRoaXMuX2xvYWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBNb2RhbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUk1vZGFsJyxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3llZDogZmFsc2VcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzdHJveShjYWxsYmFjayk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQgfHwgdGhpcy5zdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblxuICAgIGlmIChfcmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChfZG9tICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBfZG9tLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfZG9tLnBhcmVudE5vZGUpO1xuXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB0aGlzLnN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3kgJiYgdGhpcy5wcm9wcy5vbkRlc3Ryb3koKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufSk7XG47XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTW9kYWw6IE1vZGFsLFxuICBtb2RhbDogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtbW9kYWwtY29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21vZGFscyA9IFtdO1xuICAgICAgfSxcbiAgICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGNvbnRlbnQsIG9wdGlvbnMsIGlmUHVzaCkge1xuICAgICAgICB2YXIgX21vZGFsID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgb3B0aW9ucywgY29udGVudCksIHpuLmRvbS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiB6bnVpLmNsYXNzbmFtZSgnenItcG9wdXAtbW9kYWwnLCBvcHRpb25zW1wiY2xhc3NcIl0pLFxuICAgICAgICAgIHN0eWxlOiB6bnVpLnN0eWxlKG9wdGlvbnMuc3R5bGUpXG4gICAgICAgIH0sIHRoaXMuX2RvbSkpOyAvL3puLmRlYnVnKCdNb2RhbCBjcmVhdGVkKCcgKyAodGhpcy5fbW9kYWxzLmxlbmd0aCArIDEpICsgJyk6ICcsIF9tb2RhbCk7XG5cblxuICAgICAgICBpZiAoaWZQdXNoICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuX21vZGFscy5wdXNoKF9tb2RhbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX21vZGFsO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy96bi5kZWJ1ZygnTW9kYWwgY2xvc2UoJyArIHRoaXMuX21vZGFscy5sZW5ndGggKyAnKTogJyk7XG4gICAgICAgIHZhciBfbW9kYWwgPSB0aGlzLl9tb2RhbHMucG9wKCk7XG5cbiAgICAgICAgaWYgKF9tb2RhbCkge1xuICAgICAgICAgIGlmIChfbW9kYWwuc3RhdGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZShkZWxheSwgY2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfbW9kYWwuZGVzdHJveShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tb2RhbC5kZXN0cm95KGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBjbG9zZUFsbDogZnVuY3Rpb24gY2xvc2VBbGwoZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMgJiYgdGhpcy5fbW9kYWxzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoZGVsYXksIHRoaXMuY2xvc2VBbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgc2l6ZTogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFscy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVFlQRV9JQ09OUyA9IHtcbiAgaGVhcnQ6ICdNNDYyLjMgNjIuNkM0MDcuNSAxNS45IDMyNiAyNC4zIDI3NS43IDc2LjJMMjU2IDk2LjVsLTE5LjctMjAuM0MxODYuMSAyNC4zIDEwNC41IDE1LjkgNDkuNyA2Mi42Yy02Mi44IDUzLjYtNjYuMSAxNDkuOC05LjkgMjA3LjlsMTkzLjUgMTk5LjhjMTIuNSAxMi45IDMyLjggMTIuOSA0NS4zIDBsMTkzLjUtMTk5LjhjNTYuMy01OC4xIDUzLTE1NC4zLTkuOC0yMDcuOXonLFxuICBzZWNvbmRhcnk6ICdNNDQ4IDBINjRDMjguNyAwIDAgMjguNyAwIDY0djI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NGg5NnY4NGMwIDkuOCAxMS4yIDE1LjUgMTkuMSA5LjdMMzA0IDQxNmgxNDRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWNjRjMC0zNS4zLTI4LjctNjQtNjQtNjR6JyxcbiAgc3VjY2VzczogJ00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLFxuICB3YXJuaW5nOiAnTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicsXG4gIGVycm9yOiAnTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eicsXG4gIGluZm86ICdNMjAgNDI0LjIyOWgyMFYyNzkuNzcxSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMFYyMTJjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoMTEyYzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxMi4yMjloMjBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjBWNDkyYzAgMTEuMDQ2LTguOTU0IDIwLTIwIDIwSDIwYy0xMS4wNDYgMC0yMC04Ljk1NC0yMC0yMHYtNDcuNzcxYzAtMTEuMDQ2IDguOTU0LTIwIDIwLTIwek05NiAwQzU2LjIzNSAwIDI0IDMyLjIzNSAyNCA3MnMzMi4yMzUgNzIgNzIgNzIgNzItMzIuMjM1IDcyLTcyUzEzNS43NjQgMCA5NiAweicsXG4gIG1lc3NhZ2U6ICdNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40eidcbn07XG52YXIgTm90aWZpZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnWlJOb3RpZmljYXRpb24nLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGVsYXkgIT0gMCkge1xuICAgICAgdGhpcy5fdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMub3V0LCB0aGlzLnByb3BzLmRlbGF5IHx8IDMwMDApO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgIH1cbiAgfSxcbiAgb3V0OiBmdW5jdGlvbiBvdXQoKSB7XG4gICAgdmFyIF9kb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIF9kb20uY2xhc3NMaXN0LmFkZCgnbm90aWZpY2F0aW9uLW91dCcpO1xuXG4gICAgX2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfZG9tLnBhcmVudE5vZGUgJiYgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX2RvbS5wYXJlbnROb2RlKTtcblxuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF9kb20ucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtbm90aWZpZXIgbm90aWZpY2F0aW9uLWluJywgdGhpcy5wcm9wcy50eXBlKVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJpY29uXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICBjbGFzc05hbWU6IHpudWkucmVhY3QuY2xhc3NuYW1lKFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZDogVFlQRV9JQ09OU1t0aGlzLnByb3BzLnR5cGUgfHwgJ2luZm8nXVxuICAgIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCJcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpLCB0aGlzLnByb3BzLmRlbGF5ID09PSAwICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiY2xvc2UgZmEgZmEtdGltZXNcIixcbiAgICAgIG9uQ2xpY2s6IHRoaXMub3V0XG4gICAgfSkpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBOb3RpZmllcjogTm90aWZpZXIsXG4gIG5vdGlmaWVyOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogJ3pyLXBvcHVwLW5vdGlmaWVyLWNvbnRhaW5lcidcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb3BlbjogZnVuY3Rpb24gb3Blbih0eXBlLCBjb250ZW50LCBkZWxheSkge1xuICAgICAgICB2YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWVyLCB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgICB9KTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoX3JlZiwgem4uZG9tLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCB0aGlzLl9kb20pKTtcbiAgICAgICAgcmV0dXJuIF9yZWY7XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2Vzcyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdzdWNjZXNzJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IGZ1bmN0aW9uIHdhcm5pbmcoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignd2FybmluZycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignZXJyb3InLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhjb250ZW50LCBkZWxheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCdpbmZvJywgY29udGVudCwgZGVsYXkpO1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIG1lc3NhZ2UoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbignbWVzc2FnZScsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBQb3BvdmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSUG9wb3ZlcicsXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoaWRkZW5IZWlnaHQ6IDUsXG4gICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgY2xvc2VhYmxlOiBmYWxzZSxcbiAgICAgIHBvcG92ZXJXaWR0aDogbnVsbCxcbiAgICAgIHBvcG92ZXJIZWlnaHQ6IG51bGxcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyb3dDbGFzc05hbWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdGhpcy5fZG9tLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5ldmVudC50eXBlLCB0aGlzLl9fZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uKHRoaXMucHJvcHMudGFyZ2V0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIHRoaXMucHJvcHMub25Qb3BvdmVyRGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vblBvcG92ZXJEaWRNb3VudCh0aGlzKTtcbiAgfSxcbiAgX19ldmVudExpc3RlbmVyOiBmdW5jdGlvbiBfX2V2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25Db250YWluZXJFdmVudCAmJiB0aGlzLnByb3BzLm9uQ29udGFpbmVyRXZlbnQoZXZlbnQsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKF9yZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2RvbSkgcmV0dXJuO1xuICAgIHZhciBfZG9tID0gdGhpcy5fZG9tO1xuXG4gICAgX2RvbS5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLW91dCcpO1xuXG4gICAgX2RvbS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMuZXZlbnQudHlwZSwgdGhpcy5fX2V2ZW50TGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIF9kb20uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2RvbS5wYXJlbnROb2RlICYmIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShfZG9tLnBhcmVudE5vZGUpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgZml4UG9zaXRpb246IGZ1bmN0aW9uIGZpeFBvc2l0aW9uKHRhcmdldCkge1xuICAgIHZhciBfcG9wb3ZlciA9IHRoaXMuX2RvbTtcblxuICAgIHZhciBfdCA9IHpuLmRvbS5nZXRQb3NpdGlvbih0YXJnZXQpLFxuICAgICAgICBfcG9wb3ZlcldpZHRoID0gdGhpcy5wcm9wcy5wb3BvdmVyV2lkdGggfHwgX3Qud2lkdGgsXG4gICAgICAgIF9wb3BvdmVySGVpZ2h0ID0gdGhpcy5wcm9wcy5wb3BvdmVySGVpZ2h0IHx8IHpuLmRvbS5nZXRQb3NpdGlvbihfcG9wb3ZlcikuaGVpZ2h0LFxuICAgICAgICBfbGVmdCA9IG51bGwsXG4gICAgICAgIF90b3AgPSBudWxsLFxuICAgICAgICBfYXJyb3dDbGFzc05hbWVzID0gW107XG5cbiAgICBpZiAoX3BvcG92ZXJXaWR0aCA9PSAnMTAwJScpIHtcbiAgICAgIF9wb3BvdmVyV2lkdGggPSBfdC53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAoX3BvcG92ZXJIZWlnaHQgPCB0aGlzLnByb3BzLmhpZGRlbkhlaWdodCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkhpZGRlbiAmJiB0aGlzLnByb3BzLm9uSGlkZGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF90LnggKyBfcG9wb3ZlcldpZHRoID4gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoKSB7XG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1yaWdodCcpO1xuXG4gICAgICBfbGVmdCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBfdC54IC0gX3Qud2lkdGg7XG4gICAgICBfcG9wb3Zlci5zdHlsZS5yaWdodCA9IF9sZWZ0ICsgJ3B4JztcbiAgICAgIF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX2xlZnQgPSBfdC54O1xuXG4gICAgICBfYXJyb3dDbGFzc05hbWVzLnB1c2goJ3pyLWFycm93LXBsYWNlbWVudC1sZWZ0Jyk7XG5cbiAgICAgIF9wb3BvdmVyLnN0eWxlLmxlZnQgPSBfbGVmdCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKF90LnkgKyBfcG9wb3ZlckhlaWdodCA+IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQpIHtcbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLWJvdHRvbScpO1xuXG4gICAgICBfdG9wID0gX3QuaGVpZ2h0ICsgMTA7XG4gICAgICBfcG9wb3Zlci5zdHlsZS5ib3R0b20gPSBfdG9wICsgJ3B4JztcbiAgICAgIF9wb3BvdmVyLnBhcmVudE5vZGUuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90b3AgPSBfdC55ICsgX3QuaGVpZ2h0ICsgMTA7XG5cbiAgICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYXJyb3ctZGlyZWN0aW9uLXRvcCcpO1xuXG4gICAgICBfcG9wb3Zlci5zdHlsZS50b3AgPSBfdG9wICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVyV2lkdGgpIHtcbiAgICAgIF9wb3BvdmVyLnN0eWxlLndpZHRoID0gX3BvcG92ZXJXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucG9wb3ZlckhlaWdodCkge1xuICAgICAgaWYgKF9wb3BvdmVyLm9mZnNldEhlaWdodCAhPSBfcG9wb3ZlckhlaWdodCkge1xuICAgICAgICBfcG9wb3Zlci5zdHlsZS5oZWlnaHQgPSBfcG9wb3ZlckhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3BvcG92ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIF9hcnJvd0NsYXNzTmFtZXMucHVzaCgnenItYW5pbWF0ZS1zY2FsZS11cCcpO1xuXG4gICAgX3BvcG92ZXIuY2xhc3NOYW1lID0gX3BvcG92ZXIuY2xhc3NOYW1lICsgJyAnICsgX2Fycm93Q2xhc3NOYW1lcy5qb2luKCcgJyk7XG4gIH0sXG4gIF9fb25Db250ZW50U2Nyb2xsOiBmdW5jdGlvbiBfX29uQ29udGVudFNjcm9sbChldmVudCkge1xuICAgIHRoaXMucHJvcHMub25Db250ZW50U2Nyb2xsICYmIHRoaXMucHJvcHMub25Db250ZW50U2Nyb2xsKGV2ZW50LCB0aGlzKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfc3R5bGUgPSB7fTtcblxuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgX3N0eWxlLm1heEhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgX3N0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItcG9wdXAtcG9wb3ZlciBwb3BvdmVyLWluIHpyLWFycm93IHpyLWFycm93LWNvbG9yLXdoaXRlJywgdGhpcy5zdGF0ZS5hcnJvd0NsYXNzTmFtZSlcbiAgICB9LCB0aGlzLnByb3BzLmNsb3NlYWJsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInBvcG92ZXItY2xvc2UgenItaG92ZXItc2VsZi1sb2FkaW5nXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xvc2UoJ3NlbGYgY2xvc2UnKTtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICBcImRhdGEtcHJlZml4XCI6IFwiZmFzXCIsXG4gICAgICBjbGFzc05hbWU6IFwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2sgZmEtdy0xNiBcIixcbiAgICAgIHJvbGU6IFwiaW1nXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICBkOiBcIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIlxuICAgIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIG9uU2Nyb2xsOiB0aGlzLl9fb25Db250ZW50U2Nyb2xsLFxuICAgICAgY2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZShcInBvcG92ZXItY29udGVudFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogKHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcy5zdHlsZSksIF9zdHlsZSlcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUG9wb3ZlcjogUG9wb3ZlcixcbiAgcG9wb3Zlcjogem4uQ2xhc3Moe1xuICAgIFwic3RhdGljXCI6IHRydWUsXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZG9tID0gem4uZG9tLmNyZWF0ZVJvb3RFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBcImNsYXNzXCI6IFwienItcG9wdXAtcG9wb3Zlci1jb250YWluZXJcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcG9wb3ZlcnMgPSB7fTtcbiAgICAgIH0sXG4gICAgICBfX3Jlc29sdmVBbGxQb3BvdmVyOiBmdW5jdGlvbiBfX3Jlc29sdmVBbGxQb3BvdmVyKHRhcmdldCwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBbXTtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09ICdCT0RZJykgcmV0dXJuIHZhbHVlcztcblxuICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9wb3Zlci1pZFwiKSkge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3BvdmVyLWlkXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcG92ZXItcmVmLWlkc1wiKSkge1xuICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvcG92ZXItcmVmLWlkc1wiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19yZXNvbHZlQWxsUG9wb3Zlcih0YXJnZXQucGFyZW50Tm9kZSwgdmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9LFxuICAgICAgX19pbml0V2luZG93RXZlbnQ6IGZ1bmN0aW9uIF9faW5pdFdpbmRvd0V2ZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90eXBlID0gb3B0aW9ucy5ldmVudC50eXBlO1xuICAgICAgICB3aW5kb3cuX196bnVpX3JlYWN0X3BvcHVwX2V2ZW50c19fID0gd2luZG93Ll9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXyB8fCBbXTtcblxuICAgICAgICBpZiAod2luZG93Ll9fem51aV9yZWFjdF9wb3B1cF9ldmVudHNfXy5pbmRleE9mKF90eXBlKSA9PT0gLTEpIHtcbiAgICAgICAgICB3aW5kb3cuX196bnVpX3JlYWN0X3BvcHVwX2V2ZW50c19fLnB1c2goX3R5cGUpO1xuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoX3R5cGUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fX29uV2luZG93Q2xpY2soZXZlbnQsIG9wdGlvbnMpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9fb25XaW5kb3dDbGljazogZnVuY3Rpb24gX19vbldpbmRvd0NsaWNrKGV2ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2xvc2VUYXJnZXQoZXZlbnQudGFyZ2V0KTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUYXJnZXQob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9faW5pdFdpbmRvd0V2ZW50KG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfaWQgPSB6bi51dWlkKCksXG4gICAgICAgICAgICBfcmVmaWRzID0gdGhpcy5fX3Jlc29sdmVBbGxQb3BvdmVyKG9wdGlvbnMuZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgIF9hdHRycyA9IHtcbiAgICAgICAgICBcImRhdGEtcG9wb3Zlci1pZFwiOiBfaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3JlZmlkcy5sZW5ndGgpIHtcbiAgICAgICAgICBfYXR0cnNbXCJkYXRhLXBvcG92ZXItcmVmLWlkc1wiXSA9IF9yZWZpZHMuam9pbignLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9kb20gPSB6bi5kb20uY3JlYXRlRWxlbWVudCgnZGl2JywgX2F0dHJzLCB0aGlzLl9kb20pO1xuXG4gICAgICAgIHZhciBfcG9wb3ZlciA9IFJlYWN0RE9NLnJlbmRlciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIG9uQ29udGVudFNjcm9sbDogZnVuY3Rpb24gb25Db250ZW50U2Nyb2xsKGV2ZW50LCBwb3BvdmVyKSB7XG4gICAgICAgICAgICBfdGhpczMuY2xvc2VUYXJnZXQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKSwgX2RvbSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcG92ZXJzW19pZF0gPSBfcG9wb3ZlciwgX3BvcG92ZXI7XG4gICAgICB9LFxuICAgICAgY2xvc2VUYXJnZXQ6IGZ1bmN0aW9uIGNsb3NlVGFyZ2V0KHRhcmdldCkge1xuICAgICAgICB2YXIgX3BvcG92ZXJzID0gdGhpcy5fX3Jlc29sdmVBbGxQb3BvdmVyKHRhcmdldCwgW10pIHx8IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9wb3BvdmVycykge1xuICAgICAgICAgIGlmIChfcG9wb3ZlcnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcG9wb3ZlcnNba2V5XS5jbG9zZSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9wb3BvdmVyc1trZXldID0gbnVsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wb3BvdmVyc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsb3NlQWxsOiBmdW5jdGlvbiBjbG9zZUFsbCh0YWcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BvcG92ZXIpIHtcbiAgICAgICAgICB0aGlzLl9wb3BvdmVyLmNsb3NlKHRhZyk7XG5cbiAgICAgICAgICB0aGlzLl9wb3BvdmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIFRvYXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1pSVG9hc3QnLFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5vdXQsIHRoaXMucHJvcHMuZGVsYXkgfHwgMTgwMCk7XG4gIH0sXG4gIG91dDogZnVuY3Rpb24gb3V0KCkge1xuICAgIHZhciBfZG9tID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBfZG9tLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LW91dCcpO1xuXG4gICAgX2RvbS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9kb20ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20ucGFyZW50Tm9kZSk7XG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX2RvbS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXBvcHVwLXRvYXN0IHRvYXN0LWluJywgdGhpcy5wcm9wcy50eXBlKVxuICAgIH0sIHRoaXMucHJvcHMuY29udGVudCk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRvYXN0OiBUb2FzdCxcbiAgdG9hc3Q6IHpuLkNsYXNzKHtcbiAgICBcInN0YXRpY1wiOiB0cnVlLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RvbSA9IHpuLmRvbS5jcmVhdGVSb290RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgXCJjbGFzc1wiOiBcInpyLXBvcHVwLXRvYXN0LWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4odHlwZSwgY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgdmFyIF9kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvYXN0LCB7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgICB9KSwgX2RvbSk7XG5cbiAgICAgICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKF9kb20pO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoY29udGVudCwgZGVsYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbignc3VjY2VzcycsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ3dhcm5pbmcnLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2RhbmdlcicsIGNvbnRlbnQsIGRlbGF5KTtcbiAgICAgIH0sXG4gICAgICBpbmZvOiBmdW5jdGlvbiBpbmZvKGNvbnRlbnQsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oJ2luZm8nLCBjb250ZW50LCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgVG9vbHRpcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdaUlRvb2x0aXAnLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyb3dDbGFzc05hbWU6ICcnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuZml4UG9zaXRpb24odGhpcy5wcm9wcy50YXJnZXQpO1xuICB9LFxuICBmaXhQb3NpdGlvbjogZnVuY3Rpb24gZml4UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZml4UG9zaXRpb24gdGFyZ2V0IGlzIG51bGwuJyk7XG4gICAgfVxuXG4gICAgdmFyIF9kb21XaWR0aCA9IHRoaXMuX2RvbS5vZmZzZXRXaWR0aCxcbiAgICAgICAgX2RvbUhlaWdodCA9IHRoaXMuX2RvbS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIF90YXJnZXQgPSB6bi5kb20uZ2V0UG9zaXRpb24odGFyZ2V0KSxcbiAgICAgICAgX2xlZnQgPSBudWxsLFxuICAgICAgICBfdG9wID0gbnVsbCxcbiAgICAgICAgX2NsYXNzTmFtZSA9ICcnO1xuXG4gICAgaWYgKF90YXJnZXQueCArIF9kb21XaWR0aCA+IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIF9sZWZ0ID0gX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2xlZnQgPSBfdGFyZ2V0LnggKyAoX3RhcmdldC53aWR0aCAtIF9kb21XaWR0aCkgLyAyO1xuICAgIH1cblxuICAgIGlmIChfdGFyZ2V0LnkgKyBfZG9tSGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIF90b3AgPSBfdGFyZ2V0LnkgLSBfZG9tSGVpZ2h0IC0gMTY7XG4gICAgICBfY2xhc3NOYW1lID0gJ3pyLWFycm93LWRpcmVjdGlvbi1ib3R0b20nO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdG9wID0gX3RhcmdldC55ICsgX3RhcmdldC5oZWlnaHQgKyAxNjtcbiAgICAgIF9jbGFzc05hbWUgPSAnenItYXJyb3ctZGlyZWN0aW9uLXRvcCc7XG4gICAgfVxuXG4gICAgaWYgKF9sZWZ0IDwgMCkge1xuICAgICAgX2NsYXNzTmFtZSA9ICd6ci1hcnJvdy1kaXJlY3Rpb24tbGVmdCc7XG4gICAgICBfbGVmdCA9IF90YXJnZXQueCArIF90YXJnZXQud2lkdGggKyA0O1xuICAgICAgX3RvcCA9IF90YXJnZXQueSArIDQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZG9tLnN0eWxlLnRvcCA9IF90b3AgKyAncHgnO1xuICAgIHRoaXMuX2RvbS5zdHlsZS5sZWZ0ID0gX2xlZnQgKyAncHgnO1xuICAgIF9jbGFzc05hbWUgJiYgdGhpcy5fZG9tLmNsYXNzTGlzdC5hZGQoX2NsYXNzTmFtZSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX2RvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZSAmJiB0aGlzLnByb3BzLm9uRGVzdHJveUJlZm9yZShfZG9tKTtcblxuICAgIGlmIChfcmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChfZG9tICYmIF9kb20ucGFyZW50Tm9kZSkge1xuICAgICAgX2RvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9kb20pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25EZXN0cm95ICYmIHRoaXMucHJvcHMub25EZXN0cm95KCk7XG5cbiAgICBpZiAoem4uaXMoY2FsbGJhY2ssICdmdW5jdGlvbicpKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1wb3B1cC10b29sdGlwIHpyLWFycm93IHpyLWFycm93LWNvbG9yLWJsYWNrIHpyLWFycm93LXBsYWNlbWVudC1jZW50ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICB9LCB0aGlzLnByb3BzLmNvbnRlbnQpO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBUb29sdGlwOiBUb29sdGlwLFxuICB0b29sdGlwOiB6bi5DbGFzcyh7XG4gICAgXCJzdGF0aWNcIjogdHJ1ZSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB0aGlzLl9kb20gPSB6bi5kb20uY3JlYXRlUm9vdEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIFwiY2xhc3NcIjogXCJ6ci1wb3B1cC10b29sdGlwLWNvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fX29uV2luZG93TW91c2VPdmVyLmJpbmQodGhpcyksIHRydWUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fX29uV2luZG93UmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBfX29uV2luZG93UmVzaXplOiBmdW5jdGlvbiBfX29uV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLmNsb3NlKCd6bnVpLnJlYWN0LnBvcHVwLnRvb2x0aXA6IHdpbmRvdy5yZXNpemluZycpO1xuICAgICAgfSxcbiAgICAgIF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWU6IGZ1bmN0aW9uIF9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0JPRFknIHx8IHRhcmdldC50YWdOYW1lID09ICdIVE1MJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtenItcG9wdXAtdG9vbHRpcCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS16ci1wb3B1cC10b29sdGlwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUodGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9fb25XaW5kb3dNb3VzZU92ZXI6IGZ1bmN0aW9uIF9fb25XaW5kb3dNb3VzZU92ZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90YXJnZXQgPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBfdmFsdWUgPSB0aGlzLl9fZmluZFpSUG9wdXBUb29sdGlwVmFsdWUoX3RhcmdldCk7XG5cbiAgICAgICAgaWYgKF90YXJnZXQgJiYgX3ZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXAgJiYgdGhpcy5fdG9vbHRpcC5wcm9wcy50YXJnZXQgIT09IF90YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoJ3pudWkucmVhY3QucG9wdXAudG9vbHRpcDogd2luZG93Lm1vdXNlb3ZlcicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVuZGVyKF92YWx1ZSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBfdGFyZ2V0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgnem51aS5yZWFjdC5wb3B1cC50b29sdGlwOiB3aW5kb3cubW91c2VvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwKSB7XG4gICAgICAgICAgdGhpcy5fdG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b29sdGlwID0gUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgfSkpLCB0aGlzLl9kb20pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcCkge1xuICAgICAgICAgIGlmICh6bi5pcyhjYWxsYmFjaywgJ3N0cmluZycpICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50Jykgey8vem4uZGVidWcoY2FsbGJhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5fZG9tKTtcblxuICAgICAgICAgIHRoaXMuX3Rvb2x0aXAuZGVzdHJveShjYWxsYmFjayk7XG5cbiAgICAgICAgICB0aGlzLl90b29sdGlwID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gem4uZGVlcEFzc2lnbnMoe30sIHJlcXVpcmUoJy4vQWxlcnQnKSwgcmVxdWlyZSgnLi9EaWFsb2cnKSwgcmVxdWlyZSgnLi9Ecm9wZG93bicpLCByZXF1aXJlKCcuL0xvYWRlcicpLCByZXF1aXJlKCcuL01vZGFsJyksIHJlcXVpcmUoJy4vTm90aWZpZXInKSwgcmVxdWlyZSgnLi9Qb3BvdmVyJyksIHJlcXVpcmUoJy4vVG9hc3QnKSwgcmVxdWlyZSgnLi9Ub29sdGlwJykpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwicmVxdWlyZSgnem51aS1yZWFjdCcpO1xucmVxdWlyZSgnLi9fXy9kaXN0L3Byb2R1Y3Rpb24vaW5kZXguc3R5bGUuYnVuZGxlLmNzcycpO1xubW9kdWxlLmV4cG9ydHMgPSB6bnVpLnJlYWN0LmxvYWRlZENvbXBvbmVudHNbcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKS5uYW1lXSA9IHJlcXVpcmUoJy4vX18vYnVpbGQvaW5kZXguanMnKTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTG9hZGluZyA9IHJlcXVpcmUoJy4vTG9hZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0bG9hZGluZzogZmFsc2UsIFxuXHRcdFx0bG9hZGluZ1RleHQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZSl7XG5cdFx0aWYodGhpcy5fX2Rpc2FibGVkKCkpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BzLmhhc2gpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjXCIgKyB0aGlzLnByb3BzLmhhc2g7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZSwgdGhpcyk7XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgbG9hZGluZ1RleHQpe1xuXHRcdGlmKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRcdGxvYWRpbmdUZXh0OiBsb2FkaW5nVGV4dFxuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZ1RleHQ6IG51bGxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19kaXNhYmxlZDogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlZDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9eyd6ci1pbnB1dC1idXR0b24gJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAodGhpcy5fX2Rpc2FibGVkKCk/JyBkaXNhYmxlZCc6JycpfSBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9IGRhdGEtenItcG9wdXAtdG9vbHRpcD17dGhpcy5fX2Rpc2FibGVkKCk/dGhpcy5wcm9wcy50b29sdGlwOicnfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2hpbGRyZW4gJiYgKHRoaXMuc3RhdGUubG9hZGluZ1RleHQgfHwgdGhpcy5wcm9wcy5jaGlsZHJlbikgfVxuXHRcdFx0XHR7ICF0aGlzLnByb3BzLmNoaWxkcmVuICYmKCB0aGlzLnN0YXRlLmxvYWRpbmdUZXh0IHx8IHRoaXMucHJvcHMubGFiZWwpfVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxMb2FkaW5nIC8+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgVFlQRVMgPSB7XG5cdGVtYWlsOiAnZW1haWwnLFxuXHR0ZWw6ICd0ZWwnLFxuXHRpZDogJ3RleHQnXG59O1xuXG52YXIgSUQgPSB7XG5cdGNoZWNrQ29kZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgcCA9IC9eWzEtOV1cXGR7NX0oMTh8MTl8MjApXFxkezJ9KCgwWzEtOV0pfCgxWzAtMl0pKSgoWzAtMl1bMS05XSl8MTB8MjB8MzB8MzEpXFxkezN9WzAtOVh4XSQvO1xuICAgICAgICB2YXIgZmFjdG9yID0gWyA3LCA5LCAxMCwgNSwgOCwgNCwgMiwgMSwgNiwgMywgNywgOSwgMTAsIDUsIDgsIDQsIDIgXTtcbiAgICAgICAgdmFyIHBhcml0eSA9IFsgMSwgMCwgJ1gnLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyIF07XG4gICAgICAgIHZhciBjb2RlID0gdmFsLnN1YnN0cmluZygxNyk7XG4gICAgICAgIGlmKHAudGVzdCh2YWwpKSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8MTc7aSsrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IHZhbFtpXSpmYWN0b3JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwYXJpdHlbc3VtICUgMTFdID09IGNvZGUudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXHRjaGVja0RhdGU6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXigxOHwxOXwyMClcXGR7Mn0oKDBbMS05XSl8KDFbMC0yXSkpKChbMC0yXVsxLTldKXwxMHwyMHwzMHwzMSkkLztcbiAgICAgICAgaWYocGF0dGVybi50ZXN0KHZhbCkpIHtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gdmFsLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgICAgIHZhciBtb250aCA9IHZhbC5zdWJzdHJpbmcoNCwgNik7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IHZhbC5zdWJzdHJpbmcoNiwgOCk7XG4gICAgICAgICAgICB2YXIgZGF0ZTIgPSBuZXcgRGF0ZSh5ZWFyK1wiLVwiK21vbnRoK1wiLVwiK2RhdGUpO1xuICAgICAgICAgICAgaWYoZGF0ZTIgJiYgZGF0ZTIuZ2V0TW9udGgoKSA9PSAocGFyc2VJbnQobW9udGgpIC0gMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblx0Y2hlY2tQcm92OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL15bMS05XVswLTldLztcbiAgICAgICAgdmFyIHByb3ZzID0gezExOlwi5YyX5LqsXCIsMTI6XCLlpKnmtKVcIiwxMzpcIuays+WMl1wiLDE0Olwi5bGx6KW/XCIsMTU6XCLlhoXokpnlj6RcIiwyMTpcIui+veWugVwiLDIyOlwi5ZCJ5p6XXCIsMjM6XCLpu5HpvpnmsZ8gXCIsMzE6XCLkuIrmtbdcIiwzMjpcIuaxn+iLj1wiLDMzOlwi5rWZ5rGfXCIsMzQ6XCLlronlvr1cIiwzNTpcIuemj+W7ulwiLDM2Olwi5rGf6KW/XCIsMzc6XCLlsbHkuJxcIiw0MTpcIuays+WNl1wiLDQyOlwi5rmW5YyXIFwiLDQzOlwi5rmW5Y2XXCIsNDQ6XCLlub/kuJxcIiw0NTpcIuW5v+ilv1wiLDQ2Olwi5rW35Y2XXCIsNTA6XCLph43luoZcIiw1MTpcIuWbm+W3nVwiLDUyOlwi6LS15beeXCIsNTM6XCLkupHljZdcIiw1NDpcIuilv+iXjyBcIiw2MTpcIumZleilv1wiLDYyOlwi55SY6IKDXCIsNjM6XCLpnZLmtbdcIiw2NDpcIuWugeWkj1wiLDY1Olwi5paw55aGXCIsNzE6XCLlj7Dmub5cIiw4MTpcIummmea4r1wiLDgyOlwi5r6z6ZeoXCJ9O1xuICAgICAgICBpZihwYXR0ZXJuLnRlc3QodmFsKSkge1xuICAgICAgICAgICAgaWYocHJvdnNbdmFsXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXHRjaGVja0lEOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmKHZhbCAmJiB0aGlzLmNoZWNrQ29kZSh2YWwpKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IHZhbC5zdWJzdHJpbmcoNiwxNCk7XG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrRGF0ZShkYXRlKSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tQcm92KHZhbC5zdWJzdHJpbmcoMCwyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSSW5wdXQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhdHRyczoge30sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdFx0cmVhZG9ubHk6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQpICYmIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSBudWxsKXtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHR2YWx1ZTogdGhpcy5fX2Zvcm1hdFZhbHVlKF92YWx1ZSlcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnRXaWxsVXBkYXRlOiBmdW5jdGlvbiAocHJvcHMsc3RhdGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuc3luY0RlZmF1bHRWYWx1ZSAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT0gc3RhdGUudmFsdWUpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19mb3JtYXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRpZih2YWx1ZSl7XG5cdFx0XHRzd2l0Y2godGhpcy5wcm9wcy50eXBlKXtcblx0XHRcdFx0Y2FzZSAnbW9udGgnOlxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsNyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsMTApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkYXRldGltZS1sb2NhbCc6XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpLmpvaW4oJ1QnKS5zdWJzdHJpbmcoMCwxNik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0aWYoIXRoaXMudmFsaWRhdGUodmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZih2YWx1ZSA9PT0gbnVsbCl7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR2YXIgX3ZhbGlkYXRlID0gdGhpcy5wcm9wcy52YWxpZGF0ZSB8fCB0aGlzLnByb3BzLnR5cGU7XG5cblx0XHRpZih0eXBlb2YgX3ZhbGlkYXRlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGlmKF92YWxpZGF0ZSh2YWx1ZSwgdGhpcykgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9ZWxzZSBpZih0eXBlb2YgX3ZhbGlkYXRlID09ICdzdHJpbmcnKXtcblx0XHRcdHN3aXRjaChfdmFsaWRhdGUpe1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdFx0aWYoISgvXlxcdysoKC5cXHcrKXwoLVxcdyspKUBbQS1aYS16MC05XSsoKC58LSlbQS1aYS16MC05XSspLltBLVphLXowLTldKyQvLnRlc3QodmFsdWUpKSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGVsJzpcblx0XHRcdFx0XHRpZighKC9eMSgzfDR8NXw2fDd8OHw5KVxcZHs5fSQvLnRlc3QodmFsdWUpKSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaWQnOlxuXHRcdFx0XHRcdGlmKCEoSUQuY2hlY2tJRCh2YWx1ZSkpKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTsgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdGNvbXBvbmVudFdpbGxVcGRhdGU6IGZ1bmN0aW9uIChuZXdQcm9wcyxuZXdTdGF0ZSxuZXdDb250ZXh0KXtcblx0XHRpZihuZXdQcm9wcy52YWx1ZSAhPSBuZXdTdGF0ZS52YWx1ZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1Byb3BzLnZhbHVlIH0pO1xuXHRcdH1cblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX3BhcnNlR2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy50eXBlPT0nbnVtYmVyJyl7XG5cdFx0XHR2YWx1ZSA9ICt2YWx1ZTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnR5cGU9PSdkYXRlJyl7XG5cdFx0XHRpZighdmFsdWUpe1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUgfHwgJyc7XG5cdH0sXG5cdF9fcGFyc2VTZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHRyZXR1cm4gdGhpcy5fX2Zvcm1hdFZhbHVlKHZhbHVlKTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5fX2Zvcm1hdFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycykge1xuXHRcdFx0aWYodGhpcy5wcm9wcy5hdHRycy5tYXggJiYgX3ZhbHVlID4gdGhpcy5wcm9wcy5hdHRycy5tYXgpIHtcblx0XHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5hdHRycy5tYXg7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnByb3BzLmF0dHJzLm1pbiAhPSBudWxsICYmIF92YWx1ZSA8IHRoaXMucHJvcHMuYXR0cnMubWluKSB7XG5cdFx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuYXR0cnMubWluO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC5pbnB1dCA9IHRoaXM7XG5cdFx0ZXZlbnQudmFsdWUgPSBfdmFsdWU7XG5cdFx0ZXZlbnQudmFsaWRhdGUgPSBfdmFsdWU7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMuX19mb3JtYXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdGV2ZW50LnZhbHVlID0gX3ZhbHVlO1xuXHRcdGV2ZW50LnZhbGlkYXRlID0gX3ZhbHVlO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLl9fZm9ybWF0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRldmVudC52YWx1ZSA9IF92YWx1ZTtcblx0XHRldmVudC52YWxpZGF0ZSA9IF92YWx1ZTtcblxuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLl9fZm9ybWF0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRldmVudC52YWx1ZSA9IF92YWx1ZTtcblx0XHRldmVudC52YWxpZGF0ZSA9IF92YWx1ZTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdHlwZSA9IFRZUEVTW3RoaXMucHJvcHMudHlwZV0gfHwgdGhpcy5wcm9wcy50eXBlIHx8ICd0ZXh0Jztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGlucHV0IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWlucHV0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfVxuXHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdHsuLi50aGlzLnByb3BzLmF0dHJzfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdHR5cGU9e190eXBlfVxuXHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX1cblx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSSW5wdXRzJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRzcGxpdDogJy8nXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF92YWx1ZXMgPSBbXSxcblx0XHRcdF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5yZWZzKXtcblx0XHRcdF92YWx1ZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1trZXldKS52YWx1ZTtcblx0XHRcdGlmKF92YWx1ZSl7XG5cdFx0XHRcdF92YWx1ZXMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWVzLmpvaW4odGhpcy5wcm9wcy5zcGxpdCk7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHR2YXIgX3ZhbHVlcyA9IHZhbHVlLnNwbGl0KHRoaXMucHJvcHMuc3BsaXQpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5LCBpbmRleCl7XG5cdFx0XHRpZihfdmFsdWVzW2luZGV4XSl7XG5cdFx0XHRcdFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1trZXldKS52YWx1ZSA9IF92YWx1ZXNbaW5kZXhdO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KSwgdGhpcztcblx0fSxcblx0X19vbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF92YWx1ZXMgPSAodGhpcy5wcm9wcy52YWx1ZXx8JycpLnNwbGl0KHRoaXMucHJvcHMuc3BsaXQpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLWlucHV0cycsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuZGF0YXx8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxpbnB1dCB2YWx1ZT17X3ZhbHVlc1tpbmRleF19IG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLl9fb25JbnB1dENoYW5nZShldmVudCwgaXRlbSwgaW5kZXgpfSByZWY9e2luZGV4fSBrZXk9e2luZGV4fSBwbGFjZWhvbGRlcj17aXRlbX0gdHlwZT1cInRleHRcIiAvPlxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnO1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0bGVuZ3RoOiBfdmFsdWUubGVuZ3RoXG5cdFx0fTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGUpe1xuXHRcdHZhciBfdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRpZihfdmFsdWUubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZS52YWx1ZSA9IF92YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHRsZW5ndGg6IF92YWx1ZS5sZW5ndGhcblx0XHR9LCAoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIF92YWx1ZSwgdGhpcy5wcm9wcyk7XG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyd6ci1saW1pdGVkLXRleHRhcmVhICcgKyAodGhpcy5zdGF0ZS5sZW5ndGggPT0gdGhpcy5wcm9wcy5tYXg/J2Z1bGwnOicnKX0+XG5cdFx0XHRcdDx0ZXh0YXJlYSB7Li4udGhpcy5wcm9wc30gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tYXggJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xpbWl0Jz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdsZW5ndGgnPnt0aGlzLnN0YXRlLmxlbmd0aH08L3NwYW4+IC8gPHNwYW4gY2xhc3NOYW1lPSdtYXgnPnt0aGlzLnByb3BzLm1heH08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXsnenItaW5wdXQtbG9hZGluZyAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZXF1YWw6IHRydWUsXG5cdFx0XHRlcnJvck1lc3NhZ2U6IHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlIHx8ICflr4bnoIHkuI3ljLnphY0nLFxuXHRcdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG5cdFx0fTtcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGUpe1xuXHRcdHZhciBfdmFsdWUgPSBlLnRhcmdldC52YWx1ZSwgX2VxdWFsID0gbnVsbDtcblx0XHRlLnZhbHVlID0gX3ZhbHVlO1xuXHRcdGlmKHRoaXMucHJvcHMucGFzc3dvcmQpIHtcblx0XHRcdGlmKHRoaXMucHJvcHMucGFzc3dvcmQgPT0gX3ZhbHVlKSB7XG5cdFx0XHRcdF9lcXVhbCA9IHRydWU7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0X2VxdWFsID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRlLmVxdWFsID0gX2VxdWFsO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHRlcXVhbDogX2VxdWFsXG5cdFx0fSwgKCk9Pntcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBfdmFsdWUsIHRoaXMucHJvcHMpO1xuXHRcdH0pO1xuXHR9LFxuXHRfX29uVHlwZUNoYW5nZTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS50eXBlID09ICdwYXNzd29yZCcpIHtcblx0XHRcdHRoaXMuc3RhdGUudHlwZSA9ICd0ZXh0Jztcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc3RhdGUudHlwZSA9ICdwYXNzd29yZCc7XG5cdFx0fVxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19lcnJvck1zZzogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5wYXNzd29yZCAmJiAhdGhpcy5zdGF0ZS5lcXVhbCkge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tc2cnPnt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnenItaW5wdXQtcGFzc3dvcmQgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAodGhpcy5zdGF0ZS5hY3RpdmU/JyBhY3RpdmUnOicnKX0+XG5cdFx0XHRcdDxpbnB1dCB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT17dGhpcy5zdGF0ZS50eXBlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoYW5nZX0gLz5cblx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5fX29uVHlwZUNoYW5nZX0gY2xhc3NOYW1lPXsnZXhjaGFuZ2UtaWNvbiBmYSAnICsgKHRoaXMuc3RhdGUudHlwZT09J3Bhc3N3b3JkJyA/ICdmYS1leWUnIDogJ2ZhLWV5ZS1zbGFzaCcpfSAvPlxuXHRcdFx0XHR7IHRoaXMuX19lcnJvck1zZygpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vVGltZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHNlY29uZHM6IDBcblx0XHR9O1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZSl7XG5cdFx0dmFyIF92YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdGUudmFsdWUgPSBfdmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlcnJvck1lc3NhZ2U6IG51bGwsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlXG5cdFx0fSwgKCk9Pntcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBfdmFsdWUsIHRoaXMucHJvcHMpO1xuXHRcdH0pO1xuXHR9LFxuXHRfX2Vycm9yTXNnOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSkge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tc2cnPnt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrU2VuZEJ0bjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5waG9uZSkge1xuXHRcdFx0em4uZGF0YS5wb3N0KHRoaXMucHJvcHMuYXBpLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRwaG9uZTogdGhpcy5wcm9wcy5waG9uZVxuXHRcdFx0XHR9XG5cdFx0XHR9KS50aGVuKChkYXRhKT0+e1xuXHRcdFx0XHRpZihkYXRhLmNvZGUgPT0gMjAwKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogMTIwIH0pO1xuXHRcdFx0XHRcdHpyLnBvcHVwLm5vdGlmaWVyLnN1Y2Nlc3MoXCLpqozor4HnoIHlj5HpgIHmiJDlip/vvIzor7fms6jmhI/mn6XmlLbjgIJcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0aWYodGhpcy5faW5wdXQpIHtcblx0XHRcdFx0dGhpcy5faW5wdXQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6ICfor7flhYjloavlhpnmiYvmnLrlj7cnIH0pO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J3pyLWlucHV0LXBob25lLWNvZGUgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyl9PlxuXHRcdFx0XHQ8aW5wdXQgcmVmPXsocmVmKT0+dGhpcy5faW5wdXQgPSByZWZ9IHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29kZS1idG4nPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2Vjb25kcyA/IDxUaW1lciBzZWNvbmRzPXt0aGlzLnN0YXRlLnNlY29uZHN9IG9uRW5kPXsoKT0+dGhpcy5zZXRTdGF0ZSh7IHNlY29uZHM6IDAgfSl9IC8+IDogPHNwYW4gY2xhc3NOYW1lPSdzZW5kLWNvZGUnIG9uQ2xpY2s9e3RoaXMuX19jbGlja1NlbmRCdG59PuWPkemAgemqjOivgeeggTwvc3Bhbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IHRoaXMuX19lcnJvck1zZygpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJTZWFyY2hJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGF0dHJzOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbCxcblx0XHRcdGZvY3VzZWQ6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXG5cdFx0fTtcblx0fSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fX3BhcnNlR2V0VmFsdWUoUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUpO1xuXHR9LFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlID0gdGhpcy5fX3BhcnNlU2V0VmFsdWUodmFsdWUpLCB0aGlzO1xuXHR9LFxuXHRfX3BhcnNlR2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdudW1iZXInKXtcblx0XHRcdHZhbHVlID0gK3ZhbHVlO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuYXR0cnMgJiYgdGhpcy5wcm9wcy5hdHRycy50eXBlPT0nZGF0ZScpe1xuXHRcdFx0aWYoIXZhbHVlKXtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX3BhcnNlU2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hdHRycyAmJiB0aGlzLnByb3BzLmF0dHJzLnR5cGU9PSdkYXRlJyAmJiB2YWx1ZSl7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJylbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRfX29uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLl9fcGFyc2VHZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zm9jdXNlZDogdHJ1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uQmx1cjogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IHRoaXMuX19wYXJzZUdldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRmb2N1c2VkOiBmYWxzZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gdGhpcy5fX3BhcnNlR2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZihldmVudC5uYXRpdmVFdmVudC5rZXlDb2RlPT0xMyl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uS2V5VXAgJiYgdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbk9wdEl0ZW1DbGljazogZnVuY3Rpb24gKG9wdCwgaW5kZXgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0b3B0aW9uOiBvcHRcblx0XHR9KTtcblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8bGkgb25DbGljaz17KCk9PnRoaXMuX19vbk9wdEl0ZW1DbGljayhpdGVtLCBpbmRleCl9IGtleT17aW5kZXh9PntpdGVtfTwvbGk+O1xuXHR9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ6ci1zZWFyY2gtaW5wdXQtb3B0aW9uc1wiPlxuXHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5vcHRpb25zfSBpdGVtUmVuZGVyPXt0aGlzLl9fb3B0SXRlbVJlbmRlcn0gLz5cblx0XHQ8L3VsPjtcblx0fSxcblx0X19yZW5kZXJPcHRpb25zOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPHBvcHVwLkRyb3Bkb3duIGNsYXNzTmFtZT1cImZpbHRlci1vcHRcIiBcblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcixcblx0XHRcdFx0XHRvbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tdmFsdWVcIj57dGhpcy5zdGF0ZS5vcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImNhcmV0LWRvd25cIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj5cblx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnpcIj48L3BhdGg+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdDwvcG9wdXAuRHJvcGRvd24+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItc2VhcmNoLWlucHV0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub3B0aW9ucyAmJiB0aGlzLl9fcmVuZGVyT3B0aW9ucygpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBzZWFyY2gtaWNvbiBmYS1zZWFyY2ggZmEtdy0xNiBpY29uXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTA1IDQ0Mi43TDQwNS4zIDM0M2MtNC41LTQuNS0xMC42LTctMTctN0gzNzJjMjcuNi0zNS4zIDQ0LTc5LjcgNDQtMTI4QzQxNiA5My4xIDMyMi45IDAgMjA4IDBTMCA5My4xIDAgMjA4czkzLjEgMjA4IDIwOCAyMDhjNDguMyAwIDkyLjctMTYuNCAxMjgtNDR2MTYuM2MwIDYuNCAyLjUgMTIuNSA3IDE3bDk5LjcgOTkuN2M5LjQgOS40IDI0LjYgOS40IDMzLjkgMGwyOC4zLTI4LjNjOS40LTkuNCA5LjQtMjQuNi4xLTM0ek0yMDggMzM2Yy03MC43IDAtMTI4LTU3LjItMTI4LTEyOCAwLTcwLjcgNTcuMi0xMjggMTI4LTEyOCA3MC43IDAgMTI4IDU3LjIgMTI4IDEyOCAwIDcwLjctNTcuMiAxMjgtMTI4IDEyOHpcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiIHR5cGU9XCJzZWFyY2hcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XG5cdFx0XHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0XHRcdG5hbWU9e3RoaXMucHJvcHMubmFtZX1cblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV8fHRoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRcdFx0cmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZG9ubHl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5fX29uRm9jdXN9XG5cdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuX19vbkJsdXJ9XG5cdFx0XHRcdFx0XHRvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTZWFyY2hJbnB1dCA9IHJlcXVpcmUoJy4vU2VhcmNoSW5wdXQnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSU2VhcmNoU2VsZWN0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnLFxuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdGlmKHRoaXMucHJvcHMubXVsdGlwbGUpe1xuXHRcdFx0aWYodHlwZW9mIF92YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRfdmFsdWUgPSBfdmFsdWUuc3BsaXQoJywnKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pe1xuXHRcdFx0XHRcdGlmKGl0ZW0pe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmKF92YWx1ZSA9PSBudWxsKXtcblx0XHRcdFx0X3ZhbHVlID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHR2YWx1ZXM6IG51bGwsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX19sb2FkRGF0YSgpO1xuXHR9LFxuXHRfX2xvYWREYXRhOiBmdW5jdGlvbiAoKXtcblx0XHR6bi5kYXRhLnJlcXVlc3QodGhpcy5wcm9wcy5kYXRhKS50aGVuKGZ1bmN0aW9uIChkYXRhKXtcblx0XHRcdGlmKGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEuc2xpY2UoMCksXG5cdFx0XHRcdFx0dmFsdWVzOiBkYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cdH0sXG5cdF9fb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSl7XG5cdFx0dmFyIF92YWx1ZSA9IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0aWYodGhpcy5wcm9wcy5tdWx0aXBsZSl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnZhbHVlLmluZGV4T2YoX3ZhbHVlKSA9PSAtMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUucHVzaChfdmFsdWUpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpLCAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IF92YWx1ZTtcblx0XHR9XG5cblx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaXRlbSwgdGhpcyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhpdGVtKTtcblx0fSxcblx0X19jaGVja2VkOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfdmFsdWUgPSBpdGVtW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGlmKCFfdmFsdWUpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0aGlzLnByb3BzLm11bHRpcGxlKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihfdmFsdWUpICE9IC0xKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLnZhbHVlID09IF92YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaXRlbVJlbmRlciwge1xuXHRcdFx0ZGF0YTogaXRlbSxcblx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdG93bmVyOiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCkge1xuXHRcdFx0X2VsZW1lbnQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9lbGVtZW50O1xuXHR9LFxuXHRfX3JlbmRlckxpc3Q6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLnZhbHVlcyl7XG5cdFx0XHRyZXR1cm4gPGxvYWRlci5Mb2FkaW5nIGNvbnRlbnQ9XCLliqDovb3kuK0gLi4uIFwiIC8+O1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRhLWxpc3RcIj5cblx0XHRcdHtcblx0XHRcdFx0dGhpcy5zdGF0ZS52YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGEtbGlzdC1pdGVtIFwiICsgKHRoaXMuX19jaGVja2VkKGl0ZW0sIGluZGV4KSA/ICdhY3RpdmVkJyA6ICcnKX0ga2V5PXtpbmRleH0gb25DbGljaz17KGV2ZW50KT0+dGhpcy5fX29uSXRlbUNsaWNrKGV2ZW50LCBpdGVtKX0+XG5cdFx0XHRcdFx0XHR7dGhpcy5fX2l0ZW1SZW5kZXIoaXRlbSwgaW5kZXgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9LmJpbmQodGhpcykpXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uICh2YWx1ZSwgaXRlbSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMucHJvcHMub25GaWx0ZXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25GaWx0ZXIodmFsdWUsIGl0ZW0sIGluZGV4KTtcblx0XHR9XG5cblx0XHR2YXIgX3RleHQgPSBpdGVtW3RoaXMucHJvcHMudGV4dEtleV07XG5cdFx0aWYoX3RleHQuaW5kZXhPZih2YWx1ZSkgIT0gLTEpe1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fVxuXHR9LFxuXHRfX29uSW5wdXRTZWFyY2g6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXHRcdGlmKF92YWx1ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZXMgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCk9PnRoaXMuX19vbkZpbHRlcihfdmFsdWUsIGl0ZW0sIGluZGV4KSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLnZhbHVlcyA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXNlYXJjaC1zZWxlY3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxTZWFyY2hJbnB1dCBvbkVudGVyPXt0aGlzLl9fb25JbnB1dFNlYXJjaH0gLz5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJMaXN0KCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWdJbnB1dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0XHRyZWFkb25seTogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiAodGhpcy5wcm9wcy52YWx1ZXx8JycpLnNwbGl0KCcsJykuZmlsdGVyKCh2YWx1ZSk9PnZhbHVlKVxuXHRcdH07XG5cdH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19wYXJzZUdldFZhbHVlKFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnZhbHVlKTtcblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS52YWx1ZSA9IHRoaXMuX19wYXJzZVNldFZhbHVlKHZhbHVlKSwgdGhpcztcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGUgPT0gMTMgJiYgX3ZhbHVlKXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSAnJztcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbktleVVwICYmIHRoaXMucHJvcHMub25LZXlVcChldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0O1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGUgPT0gMTMgJiYgX3ZhbHVlKXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wdXNoKF92YWx1ZSk7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRldmVudC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUuam9pbignLCcpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVudGVyICYmIHRoaXMucHJvcHMub25FbnRlcihldmVudCwgdGhpcyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHRcdFx0cmV0dXJuIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSAnJztcblx0XHR9XG5cdFx0aWYoZXZlbnQubmF0aXZlRXZlbnQua2V5Q29kZSA9PSA4ICYmICFfdmFsdWUpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5zdGF0ZS52YWx1ZS5wb3AoKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdGV2ZW50LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS5qb2luKCcsJyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW50ZXIgJiYgdGhpcy5wcm9wcy5vbkVudGVyKGV2ZW50LCB0aGlzKTtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdFx0XHRyZXR1cm4gZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXHRcdH1cblx0fSxcblx0X19vblJvb3RDbGljazogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zdGF0ZS5pbnB1dC5mb2N1cygpO1xuXHR9LFxuXHRfX29uVGFnRGVsZXRlOiBmdW5jdGlvbiAoaW5kZXgpe1xuXHRcdHRoaXMuc3RhdGUudmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fdGFnUmVuZGVyOiBmdW5jdGlvbih0YWcsIGluZGV4KXtcblx0XHRyZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGFnXCIga2V5PXtpbmRleH0+XG5cdFx0XHR7dGFnfVxuXHRcdFx0PHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX29uVGFnRGVsZXRlKGluZGV4KX0gdGl0bGU9XCLliKDpmaTlhYPntKBcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidHJhc2gtYWx0XCIgY2xhc3NOYW1lPVwicmVtb3ZlLWljb24gc3ZnLWlubGluZS0tZmEgZmEtdHJhc2gtYWx0IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zMiA0NjRhNDggNDggMCAwIDAgNDggNDhoMjg4YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjEyOEgzMnptMjcyLTI1NmExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwek00MzIgMzJIMzEybC05LjQtMTguN0EyNCAyNCAwIDAgMCAyODEuMSAwSDE2Ni44YTIzLjcyIDIzLjcyIDAgMCAwLTIxLjQgMTMuM0wxMzYgMzJIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdDwvc3Bhbj47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBvbkNsaWNrPXt0aGlzLl9fb25Sb290Q2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhZy1pbnB1dCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnZhbHVlLm1hcCh0aGlzLl9fdGFnUmVuZGVyKVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgcmVmPXsoaW5wdXQpPT50aGlzLnN0YXRlLmlucHV0ID0gaW5wdXR9IGNsYXNzTmFtZT1cInRhZy1pbnB1dFwiIGNvbnRlbnRFZGl0YWJsZT1cInRydWVcIiBvbktleURvd249e3RoaXMuX19vbktleURvd259IG9uS2V5VXA9e3RoaXMuX19vbktleVVwfSAvPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwidGFnLWlucHV0XCJcblx0XHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cblx0XHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdFx0dHlwZT17dGhpcy5wcm9wcy50eXBlfHwndGV4dCd9XG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXx8dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cblx0XHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uQ2hhbmdlfVxuXHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuX19vbkZvY3VzfVxuXHRcdFx0XHRcdG9uQmx1cj17dGhpcy5fX29uQmx1cn1cblx0XHRcdFx0XHRvbktleVVwPXt0aGlzLl9fb25LZXlVcH0gLz5cblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGV4dGFyZWEnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhdHRyczoge30sXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUgfHwgJydcblx0XHR9O1xuXHR9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vcGxhY2Vob2xkZXI9XCJleC4mIzEzOyYjMTA7dGVzdDFAdGVzdC5jb20mIzEzOyYjMTA7dGVzdDJAdGVzdC5jb20mIzEzOyYjMTA7Li4uXCJcblx0XHR2YXIgX3ZhbHVlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWU7XG5cdFx0Ly9jb25zb2xlLmxvZyhfdmFsdWUucmVwbGFjZSgvXFx1MDAwQS9nLCAnXFxuJykpO1xuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcykudmFsdWUgPSB2YWx1ZSwgdGhpcztcblx0fSxcblx0X19vbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnN0YXRlLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX29uRm9jdXM6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9fb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19vbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc3RhdGUudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdGlmKGV2ZW50Lm5hdGl2ZUV2ZW50LmtleUNvZGU9PTEzKXtcblx0XHRcdHRoaXMucHJvcHMub25FbnRlciAmJiB0aGlzLnByb3BzLm9uRW50ZXIoZXZlbnQsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvcHMub25LZXlVcCAmJiB0aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGV4dGFyZWFcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfVxuXHRcdFx0XHRyZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cblx0XHRcdFx0c3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG5cdFx0XHRcdHsuLi50aGlzLnByb3BzLmF0dHJzfVxuXHRcdFx0XHRuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG5cdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfHwnJ31cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuXHRcdFx0XHRyZWFkT25seT17dGhpcy5wcm9wcy5yZWFkb25seX1cblx0XHRcdFx0b25CbHVyPXt0aGlzLl9fb25CbHVyfVxuXHRcdFx0XHRvbkZvY3VzPXt0aGlzLl9fb25Gb2N1c31cblx0XHRcdFx0b25LZXlVcD17dGhpcy5fX29uS2V5VXB9XG5cdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25DaGFuZ2V9IC8+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWNvbmRzOiB0aGlzLnByb3BzLnNlY29uZHMgfHwgMTIwXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc3RhdGUudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlY29uZHMpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzZWNvbmRzOiB0aGlzLnN0YXRlLnNlY29uZHMgLSAxXG5cdFx0XHRcdH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc3RhdGUudGltZXIpO1xuXHRcdFx0XHR0aGlzLnN0YXRlLnRpbWVyID0gbnVsbDtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c2Vjb25kOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRW5kICYmIHRoaXMucHJvcHMub25FbmQoKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwKTtcblx0fSxcblx0Y29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUudGltZXIpIHtcblx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuc3RhdGUudGltZXIpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyd6ci1pbnB1dC10aW1lciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG5cdFx0XHRcdOi/mOWJqSB7dGhpcy5zdGF0ZS5zZWNvbmRzfSDnp5Jcblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBCdXR0b246IHJlcXVpcmUoJy4vQnV0dG9uLmpzJyksXG4gICAgSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQuanMnKSxcbiAgICBJbnB1dHM6IHJlcXVpcmUoJy4vSW5wdXRzLmpzJyksXG4gICAgVGltZXI6IHJlcXVpcmUoJy4vVGltZXIuanMnKSxcbiAgICBMb2FkaW5nOiByZXF1aXJlKCcuL0xvYWRpbmcuanMnKSxcbiAgICBQYXNzd29yZDogcmVxdWlyZSgnLi9QYXNzd29yZC5qcycpLFxuICAgIFBob25lQ29kZTogcmVxdWlyZSgnLi9QaG9uZUNvZGUuanMnKSxcbiAgICBTZWFyY2hJbnB1dDogcmVxdWlyZSgnLi9TZWFyY2hJbnB1dC5qcycpLFxuICAgIFNlYXJjaFNlbGVjdDogcmVxdWlyZSgnLi9TZWFyY2hTZWxlY3QuanMnKSxcbiAgICBUYWdJbnB1dDogcmVxdWlyZSgnLi9UYWdJbnB1dC5qcycpLFxuICAgIFRleHRhcmVhOiByZXF1aXJlKCcuL1RleHRhcmVhLmpzJyksXG4gICAgTGltaXRlZFRleHRhcmVhOiByZXF1aXJlKCcuL0xpbWl0ZWRUZXh0YXJlYS5qcycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInpyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wienJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==