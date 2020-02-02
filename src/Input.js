var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRInput',
	getDefaultProps: function (){
		return {
			attrs: {},
			className: '',
			disabled: false,
			readonly: null
		};
	},
	getValue: function () {
		return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
	},
	setValue: function (value) {
		return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
	},
	__parseGetValue: function (value){
		if(this.props.attrs && this.props.attrs.type=='number'){
			value = +value;
		}

		if(this.props.attrs && this.props.attrs.type=='date'){
			if(!value){
				return null;
			}
		}

		return value;
	},
	__parseSetValue: function (value){
		if(this.props.attrs && this.props.attrs.type=='date' && value){
			value = value.split(' ')[0];
		}

		return value;
	},
	__onChange: function (event){
		event.value = this.__parseGetValue(event.target.value);
		this.props.onChange && this.props.onChange(event, this);
	},
	__onFocus: function (event){
		event.value = this.__parseGetValue(event.target.value);
		this.props.onFocus && this.props.onFocus(event, this);
	},
	__onBlur: function (event){
		event.value = this.__parseGetValue(event.target.value);
		this.props.onBlur && this.props.onBlur(event, this);
	},
	__onKeyUp: function (event){
		event.value = this.__parseGetValue(event.target.value);
		if(event.nativeEvent.keyCode==13){
			this.props.onEnter && this.props.onEnter(event, this);
		}

		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	render: function(){
		return (
			<input className={znui.react.classname('zr-input', this.props.className)}
				required={this.props.required}
				style={this.props.style}
				{...this.props.attrs}
				name={this.props.name}
				type={this.props.type||'text'}
				value={this.props.value}
				defaultValue={this.props.defaultValue||this.props.value}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				readOnly={this.props.readonly}
				onChange={this.__onChange}
				onFocus={this.__onFocus}
				onBlur={this.__onBlur}
				onKeyUp={this.__onKeyUp} />
		);
	}
});
