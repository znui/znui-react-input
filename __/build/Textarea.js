"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
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