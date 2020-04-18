var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRTagInput',
	getDefaultProps: function (){
		return {
			className: '',
			disabled: false,
			readonly: null
		};
	},
	getInitialState: function (){
		return {
			value: []
		};
	},
	getValue: function () {
		return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
	},
	setValue: function (value) {
		return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
	},
	__onKeyUp: function (event){
		var _value = event.target.innerText;
		if(event.nativeEvent.keyCode == 13 && _value){
			event.stopPropagation();
			return event.target.innerHTML = '';
		}
		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	__onKeyDown: function (event){
		var _value = event.target.innerText;
		if(event.nativeEvent.keyCode == 13 && _value){
			event.stopPropagation();
			this.state.value.push(_value);
			this.forceUpdate();
			event.value = this.state.value;
			this.props.onEnter && this.props.onEnter(event, this);
			this.props.onChange && this.props.onChange(event, this);
			return event.target.innerHTML = '';
		}
	},
	__onRootClick: function (){
		this.state.input.focus();
	},
	__tagRender: function(tag, index){
		return <span className="tag" key={index}>{tag}</span>;
	},
	render: function(){
		return (
			<div onClick={this.__onRootClick} className={znui.react.classname('zr-tag-input', this.props.className)}>
				{
					this.state.value.map(this.__tagRender)
				}
				<div ref={(input)=>this.state.input = input} className="tag-input" contentEditable="true" onKeyDown={this.__onKeyDown} onKeyUp={this.__onKeyUp} />
				{
					/**
						<input className="tag-input"
					required={this.props.required}
					style={this.props.style}
					name={this.props.name}
					type={this.props.type||'text'}
					defaultValue={this.props.defaultValue||this.props.value}
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					readOnly={this.props.readonly}
					onChange={this.__onChange}
					onFocus={this.__onFocus}
					onBlur={this.__onBlur}
					onKeyUp={this.__onKeyUp} />
					 */
				}
			</div>
		);
	}
});
