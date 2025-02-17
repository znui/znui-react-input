"use strict";

var React = znui.React || require('react');
var SearchInput = require('./SearchInput');
var loader = require('znui-react-loader');
module.exports = React.createClass({
  displayName: 'ZRSearchSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      valueKey: 'zxnz_UUID',
      textKey: 'zxnz_Label'
    };
  },
  getInitialState: function getInitialState() {
    var _value = this.props.value;
    if (this.props.multiple) {
      if (typeof _value == 'string') {
        _value = _value.split(',').filter(function (item) {
          if (item) {
            return true;
          }
        });
      }
      if (_value == null) {
        _value = [];
      }
    }
    return {
      data: null,
      values: null,
      value: _value
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadData();
  },
  __loadData: function __loadData() {
    zn.data.request(this.props.data).then(function (data) {
      if (data.code == 200) {
        data = data.result;
        this.setState({
          data: data.slice(0),
          values: data
        });
      }
    }.bind(this));
  },
  __onItemClick: function __onItemClick(event, item) {
    var _value = item[this.props.valueKey];
    if (this.props.multiple) {
      if (this.state.value.indexOf(_value) == -1) {
        this.state.value.push(_value);
      } else {
        this.state.value.splice(this.state.value.indexOf(_value), 1);
      }
    } else {
      this.state.value = _value;
    }
    event.value = this.state.value;
    this.forceUpdate();
    this.props.onChange && this.props.onChange(event, item, this);
    this.props.onClick && this.props.onClick(item);
  },
  __checked: function __checked(item, index) {
    var _value = item[this.props.valueKey];
    if (!_value) {
      return false;
    }
    if (this.props.multiple) {
      if (this.state.value.indexOf(_value) != -1) {
        return true;
      }
    } else if (this.state.value == _value) {
      return true;
    }
    return false;
  },
  __itemRender: function __itemRender(item, index) {
    var _element = znui.react.createReactElement(this.props.itemRender, {
      data: item,
      index: index,
      owner: this
    }, this.props.context);
    if (!_element) {
      _element = item[this.props.textKey];
    }
    return _element;
  },
  __renderList: function __renderList() {
    if (!this.state.values) {
      return /*#__PURE__*/React.createElement(loader.Loading, {
        content: "\u52A0\u8F7D\u4E2D ... "
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "data-list"
    }, this.state.values.map(function (item, index) {
      var _this = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "data-list-item " + (this.__checked(item, index) ? 'actived' : ''),
        key: index,
        onClick: function onClick(event) {
          return _this.__onItemClick(event, item);
        }
      }, this.__itemRender(item, index));
    }.bind(this)));
  },
  __onFilter: function __onFilter(value, item, index) {
    if (this.props.onFilter) {
      return this.props.onFilter(value, item, index);
    }
    var _text = item[this.props.textKey];
    if (_text.indexOf(value) != -1) {
      return item;
    }
  },
  __onInputSearch: function __onInputSearch(event) {
    var _this2 = this;
    var _value = event.value;
    if (_value) {
      this.state.values = this.state.data.filter(function (item, index) {
        return _this2.__onFilter(_value, item, index);
      });
    } else {
      this.state.values = this.state.data;
    }
    this.forceUpdate();
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-search-select", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(SearchInput, {
      onEnter: this.__onInputSearch
    }), this.__renderList());
  }
});