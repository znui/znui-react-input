"use strict";

var React = znui.React || require('react');
var Loading = require('./Loading');
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      disabled: false,
      loading: false,
      loadingText: null
    };
  },
  __click: function __click(e) {
    if (this.__disabled()) {
      return;
    }
    if (this.props.hash) {
      window.location.hash = "#" + this.props.hash;
    }
    this.props.onClick && this.props.onClick(e, this);
  },
  loading: function loading(value, loadingText) {
    if (value) {
      this.setState({
        disabled: true,
        loading: true,
        loadingText: loadingText
      });
    } else {
      this.setState({
        disabled: false,
        loading: false,
        loadingText: null
      });
    }
  },
  __disabled: function __disabled() {
    return this.props.disabled || this.state.disabled;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-input-button ' + (this.props.className || '') + (this.__disabled() ? ' disabled' : ''),
      onClick: this.__click,
      "data-zr-popup-tooltip": this.__disabled() ? this.props.tooltip : ''
    }, !!this.props.children && (this.state.loadingText || this.props.children), !this.props.children && (this.state.loadingText || this.props.label), this.state.loading && /*#__PURE__*/React.createElement(Loading, null));
  }
});