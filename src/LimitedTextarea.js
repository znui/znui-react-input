var React = znui.React || require('react');

module.exports = React.createClass({
	getInitialState: function (){
		var _value = this.props.value || '';
		return {
			value: _value,
			length: _value.length
		};
	},
	__onChange: function (e){
		var _value = e.target.value;
		if(_value.length > this.props.max) {
			return;
		}
		e.value = _value;
		this.setState({
			value: _value,
			length: _value.length
		}, ()=>{
			this.props.onChange && this.props.onChange(e, _value, this.props);
		});
	},
	render: function(){
		return (
			<div className={'zr-limited-textarea ' + (this.state.length == this.props.max?'full':'')}>
				<textarea {...this.props} value={this.state.value} onChange={this.__onChange} />
				{ 
					this.props.max && (
						<div className='limit'>
							<span className='length'>{this.state.length}</span> / <span className='max'>{this.props.max}</span>
						</div>
					)
				}
			</div>
		);
	}
});