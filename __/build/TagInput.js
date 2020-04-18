"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

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