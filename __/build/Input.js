"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

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
    return {
      value: this.__formatValue(this.props.value || this.props.defaultValue)
    };
  },
  __formatValue: function __formatValue(value) {
    if (value) {
      switch (this.props.type) {
        case 'month':
          return value.substring(0, 7);

        case 'date':
          return value.substring(0, 10);

        case 'datetime-local':
          return value.split(' ').join('T').substring(0, 16);
      }
    }

    return value || '';
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
    event.value = this.__formatValue(event.target.value);
    this.setState({
      value: event.target.value
    });
    this.props.onChange && this.props.onChange(event, this);
  },
  __onFocus: function __onFocus(event) {
    event.value = this.__formatValue(event.target.value);
    this.props.onFocus && this.props.onFocus(event, this);
  },
  __onBlur: function __onBlur(event) {
    event.value = this.__formatValue(event.target.value);
    this.props.onBlur && this.props.onBlur(event, this);
  },
  __onKeyUp: function __onKeyUp(event) {
    event.value = this.__formatValue(event.target.value);

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
      value: this.state.value || '',
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