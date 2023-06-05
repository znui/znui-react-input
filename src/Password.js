var React = znui.React || require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			equal: true,
			errorMessage: this.props.errorMessage || '密码不匹配',
			type: 'password',
			value: this.props.value || ''
		};
	},
	__onChange: function (e){
		var _value = e.target.value, _equal = null;
		e.value = _value;
		if(this.props.password) {
			if(this.props.password == _value) {
				_equal = true;
			}else{
				_equal = false;
			}
			e.equal = _equal;
		}
		this.setState({
			value: _value,
			equal: _equal
		}, ()=>{
			this.props.onChange && this.props.onChange(e, _value, this.props);
		});
	},
	__onTypeChange: function (){
		if(this.state.type == 'password') {
			this.state.type = 'text';
		}else{
			this.state.type = 'password';
		}
		this.forceUpdate();
	},
	__errorMsg: function (){
		if(this.props.password && !this.state.equal) {
			return <div className='error-msg'>{this.state.errorMessage}</div>;
		}
	},
	render: function(){
		return (
			<div className={'zr-input-password ' + (this.props.className || '') + (this.state.active?' active':'')}>
				<input {...this.props} className='input' type={this.state.type} value={this.state.value} onChange={this.__onChange} />
				<i onClick={this.__onTypeChange} className={'exchange-icon fa ' + (this.state.type=='password' ? 'fa-eye' : 'fa-eye-slash')} />
				{ this.__errorMsg() }
			</div>
		);
	}
});