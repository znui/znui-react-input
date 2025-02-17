"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var TYPES = {
  email: 'email',
  tel: 'tel',
  id: 'text'
};
var ID = {
  checkCode: function checkCode(val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var code = val.substring(17);
    if (p.test(val)) {
      var sum = 0;
      for (var i = 0; i < 17; i++) {
        sum += val[i] * factor[i];
      }
      if (parity[sum % 11] == code.toUpperCase()) {
        return true;
      }
    }
    return false;
  },
  checkDate: function checkDate(val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
      var year = val.substring(0, 4);
      var month = val.substring(4, 6);
      var date = val.substring(6, 8);
      var date2 = new Date(year + "-" + month + "-" + date);
      if (date2 && date2.getMonth() == parseInt(month) - 1) {
        return true;
      }
    }
    return false;
  },
  checkProv: function checkProv(val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门"
    };
    if (pattern.test(val)) {
      if (provs[val]) {
        return true;
      }
    }
    return false;
  },
  checkID: function checkID(val) {
    if (val && this.checkCode(val)) {
      var date = val.substring(6, 14);
      if (this.checkDate(date)) {
        if (this.checkProv(val.substring(0, 2))) {
          return true;
        }
      }
    }
    return false;
  }
};
module.exports = React.createClass(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
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
    var _value = this.props.value;
    if ((_value === null || _value === undefined) && this.props.defaultValue !== null) {
      _value = this.props.defaultValue;
    }
    return {
      style: {},
      value: this.__formatValue(_value)
    };
  },
  componentWillUpdate: function componentWillUpdate(props, state) {
    if (this.props.syncDefaultValue && props.defaultValue != state.value) {
      this.setState({
        value: props.defaultValue
      });
    }
  },
  __formatValue: function __formatValue(value) {
    if (value) {
      switch (this.props.type) {
        case 'month':
          value = value.substring(0, 7);
          break;
        case 'date':
          value = value.substring(0, 10);
          break;
        case 'datetime-local':
          value = value.split(' ').join('T').substring(0, 16);
          break;
      }
    }
    if (this.props.required) {
      if (!this.validate(value)) {
        return '';
      }
    }
    if (value === null) {
      return '';
    }
    return value;
  },
  validate: function validate(value) {
    var _validate = this.props.validate || this.props.type;
    if (typeof _validate == 'function') {
      if (_validate(value, this) === false) {
        return false;
      }
    } else if (typeof _validate == 'string') {
      switch (_validate) {
        case 'email':
          if (!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(value)) {
            return false;
          }
          break;
        case 'tel':
          if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
            return false;
          }
          break;
        case 'id':
          if (!ID.checkID(value)) {
            return false;
          }
          break;
      }
    }
    return true;
  },
  componentDidMount: function componentDidMount() {}
}, "componentWillUpdate", function componentWillUpdate(newProps, newState, newContext) {
  if (newProps.value != newState.value) {
    this.setState({
      value: newProps.value
    });
  }
}), "getValue", function getValue() {
  return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
}), "setValue", function setValue(value) {
  return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
}), "__parseGetValue", function __parseGetValue(value) {
  if (this.props.type == 'number') {
    value = +value;
  }
  if (this.props.type == 'date') {
    if (!value) {
      return null;
    }
  }
  return value || '';
}), "__parseSetValue", function __parseSetValue(value) {
  return this.__formatValue(value);
}), "__onChange", function __onChange(event) {
  this.setState({
    value: event.target.value
  });
  var _value = this.__formatValue(event.target.value);
  if (this.props.attrs) {
    if (this.props.attrs.max && _value > this.props.attrs.max) {
      _value = this.props.attrs.max;
    }
    if (this.props.attrs.min != null && _value < this.props.attrs.min) {
      _value = this.props.attrs.min;
    }
  }
  event.input = this;
  event.value = _value;
  event.validate = _value;
  this.props.onChange && this.props.onChange(event, this);
}), "__onFocus", function __onFocus(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  this.props.onFocus && this.props.onFocus(event, this);
}), "__onBlur", function __onBlur(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  this.props.onBlur && this.props.onBlur(event, this);
}), "__onKeyUp", function __onKeyUp(event) {
  var _value = this.__formatValue(event.target.value);
  event.value = _value;
  event.validate = _value;
  if (event.nativeEvent.keyCode == 13) {
    this.props.onEnter && this.props.onEnter(event, this);
  }
  this.props.onKeyUp && this.props.onKeyUp(event, this);
}), "render", function render() {
  var _type = TYPES[this.props.type] || this.props.type || 'text';
  return /*#__PURE__*/React.createElement("input", _extends({
    className: znui.react.classname('zr-input', this.props.className),
    required: this.props.required,
    style: znui.react.style(this.props.style, this.state.style)
  }, this.props.attrs, {
    name: this.props.name,
    type: _type,
    value: this.state.value,
    placeholder: this.props.placeholder,
    disabled: this.props.disabled,
    readOnly: this.props.readonly,
    onChange: this.__onChange,
    onFocus: this.__onFocus,
    onBlur: this.__onBlur,
    onKeyUp: this.__onKeyUp
  }));
}));