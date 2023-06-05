"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var Timer = require('./Timer');

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