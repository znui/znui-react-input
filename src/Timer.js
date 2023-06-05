var React = znui.React || require('react');

module.exports = React.createClass({
	getInitialState: function (){
		return {
			seconds: this.props.seconds || 120
		};
	},
	componentDidMount: function (){
		this.state.timer = setInterval(() => {
			if(this.state.seconds){
				this.setState({
					seconds: this.state.seconds - 1
				});
			}else{
				window.clearInterval(this.state.timer);
				this.state.timer = null;
				this.setState({
					second: 0
				});
				this.props.onEnd && this.props.onEnd();
			}
		}, 1000);
	},
	componentWillUnmount: function (){
		if(this.state.timer) {
			window.clearInterval(this.state.timer);
		}
	},
	render: function(){
		return (
			<span className={'zr-input-timer ' + (this.props.className || '')}>
				还剩 {this.state.seconds} 秒
			</span>
		);
	}
});