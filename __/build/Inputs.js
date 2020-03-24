"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

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