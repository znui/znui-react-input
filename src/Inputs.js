var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
module.exports = znui.react.createClass({
	displayName:'Inputs',
	getDefaultProps: function (){
		return {
			data: [],
			split: '/'
		}
	},
	getInitialState: function (){
		return {
			value: this.props.value
		};
	},
	getValue: function () {
		var _values = [],
			_value = null;
		for(var key in this.refs){
			_value = ReactDOM.findDOMNode(this.refs[key]).value;
			if(_value){
				_values.push(_value);
			}
		}

		return _values.join(this.props.split);
	},
	setValue: function (value) {
		var _values = value.split(this.props.split);
		Object.keys(this.refs).forEach(function (key, index){
			if(_values[index]){
				ReactDOM.findDOMNode(this.refs[key]).value = _values[index];
			}
		}.bind(this));

		return this.setState({
			value: value
		}), this;
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-inputs', this.props.className)} style={this.props.style}>
				{
					(this.props.data||[]).map(function (item, index){
						return <input ref={index} key={index} placeholder={item} type="text" />
					})
				}
			</div>
		);
	}
});
