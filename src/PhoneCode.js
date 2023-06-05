var React = znui.React || require('react');
var Timer = require('./Timer');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			value: '',
			seconds: 0
		};
	},
	__onChange: function (e){
		var _value = e.target.value;
		e.value = _value;
		this.setState({
			errorMessage: null,
			value: _value
		}, ()=>{
			this.props.onChange && this.props.onChange(e, _value, this.props);
		});
	},
	__errorMsg: function (){
		if(this.state.errorMessage) {
			return <div className='error-msg'>{this.state.errorMessage}</div>;
		}
	},
	__clickSendBtn: function (){
		if(this.props.phone) {
			zn.data.post(this.props.api, {
				data: {
					phone: this.props.phone
				}
			}).then((data)=>{
				if(data.code == 200){
					this.setState({ seconds: 120 });
					zr.popup.notifier.success("验证码发送成功，请注意查收。");
				}
			});
		}else{
			if(this._input) {
				this._input.focus();
			}
			this.setState({ errorMessage: '请先填写手机号' });
		}
	},
	render: function(){
		return (
			<div className={'zr-input-phone-code ' + (this.props.className || '')}>
				<input ref={(ref)=>this._input = ref} {...this.props} className='input' type={this.state.type} value={this.state.value} onChange={this.__onChange} />
				<div className='code-btn'>
					{
						this.state.seconds ? <Timer seconds={this.state.seconds} onEnd={()=>this.setState({ seconds: 0 })} /> : <span className='send-code' onClick={this.__clickSendBtn}>发送验证码</span>
					}
				</div>
				{ this.__errorMsg() }
			</div>
		);
	}
});