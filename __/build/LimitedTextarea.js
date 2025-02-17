"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
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