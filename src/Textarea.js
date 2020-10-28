var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRTextarea',
	getDefaultProps: function (){
		return {
			attrs: {},
			className: ''
		};
	},
	getInitialState: function (){
		return {
			value: this.props.value || this.props.defaultValue || ''
		};
	},
	getValue: function () {
		//placeholder="ex.&#13;&#10;test1@test.com&#13;&#10;test2@test.com&#13;&#10;..."
		var _value = ReactDOM.findDOMNode(this).value;
		//console.log(_value.replace(/\u000A/g, '\n'));
		return _value;
	},
	setValue: function (value) {
		return ReactDOM.findDOMNode(this).value = value, this;
	},
	__onChange: function (event){
		event.value = event.target.value;
		this.state.value = event.target.value;
		this.forceUpdate();
		this.props.onChange && this.props.onChange(event, this);
	},
	__onFocus: function (event){
		event.value = event.target.value;
		this.state.value = event.target.value;
		this.forceUpdate();
		this.props.onFocus && this.props.onFocus(event, this);
	},
	__onBlur: function (event){
		event.value = event.target.value;
		this.state.value = event.target.value;
		this.forceUpdate();
		this.props.onBlur && this.props.onBlur(event, this);
	},
	__onKeyUp: function (event){
		event.value = event.target.value;
		this.state.value = event.target.value;
		this.forceUpdate();
		if(event.nativeEvent.keyCode==13){
			this.props.onEnter && this.props.onEnter(event, this);
		}

		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	render: function(){
		return (
			<textarea className={znui.react.classname("zr-textarea", this.props.className)}
				required={this.props.required}
				style={this.props.style}
				{...this.props.attrs}
				name={this.props.name}
				value={this.state.value||''}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				readOnly={this.props.readonly}
				onBlur={this.__onBlur}
				onFocus={this.__onFocus}
				onKeyUp={this.__onKeyUp}
				onChange={this.__onChange} />
		);
	}
});
