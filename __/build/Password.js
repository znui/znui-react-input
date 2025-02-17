"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
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