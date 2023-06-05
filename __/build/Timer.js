"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      seconds: this.props.seconds || 120
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.state.timer = setInterval(function () {
      if (_this.state.seconds) {
        _this.setState({
          seconds: _this.state.seconds - 1
        });
      } else {
        window.clearInterval(_this.state.timer);
        _this.state.timer = null;

        _this.setState({
          second: 0
        });

        _this.props.onEnd && _this.props.onEnd();
      }
    }, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.state.timer) {
      window.clearInterval(this.state.timer);
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("span", {
      className: 'zr-input-timer ' + (this.props.className || '')
    }, "\u8FD8\u5269 ", this.state.seconds, " \u79D2");
  }
});