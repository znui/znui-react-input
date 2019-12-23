"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = znui.react.createClass({
  displayName: 'Input',
  getDefaultProps: function getDefaultProps() {
    return {
      attrs: {},
      className: '',
      disabled: false,
      readonly: null
    };
  },
  getValue: function getValue() {
    var _value = ReactDOM.findDOMNode(this).value;

    if (this.props.attrs && this.props.attrs.type == 'number') {
      _value = +_value;
    }

    if (this.props.attrs && this.props.attrs.type == 'date') {
      if (!_value) {
        return null;
      }
    }

    return _value;
  },
  setValue: function setValue(value) {
    if (this.props.attrs && this.props.attrs.type == 'date' && value) {
      value = value.split(' ')[0];
    }

    return ReactDOM.findDOMNode(this).value = value, this;
  },
  __onChange: function __onChange(event) {
    this.props.onChange && this.props.onChange(event.target.value, this, event);
  },
  __onBlur: function __onBlur(event) {
    this.props.onBlur && this.props.onBlur(event.target.value, this, event);
  },
  __onKeyUp: function __onKeyUp(event) {
    if (event.nativeEvent.keyCode == 13) {
      this.props.onEnter && this.props.onEnter(event, this);
    }

    this.props.onKeyUp && this.props.onKeyUp(event, this);
  },
  render: function render() {
    return React.createElement("input", _extends({
      className: znui.react.classname('zr-input', this.props.className),
      required: this.props.required,
      style: this.props.style
    }, this.props.attrs, {
      name: this.props.name,
      type: this.props.attrs.type || 'text',
      defaultValue: this.props.value,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      readOnly: this.props.readonly,
      onChange: this.__onChange,
      onBlur: this.__onBlur,
      onKeyUp: this.__onKeyUp
    }));
  }
});