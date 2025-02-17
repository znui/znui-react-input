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