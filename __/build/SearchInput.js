"use strict";

var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var popup = require('znui-react-popup');
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