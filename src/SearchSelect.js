var React = znui.React || require('react');
var SearchInput = require('./SearchInput');
var loader = require('znui-react-loader');

module.exports = React.createClass({
	displayName:'ZRSearchSelect',
	getDefaultProps: function (){
		return {
			valueKey: 'zxnz_UUID',
			textKey: 'zxnz_Label'
		};
	},
	getInitialState: function(){
		var _value = this.props.value;
		if(this.props.multiple){
			if(typeof _value == 'string') {
				_value = _value.split(',').filter(function (item){
					if(item){
						return true;
					}
				});
			}
			if(_value == null){
				_value = [];
			}
		}

		return {
			data: null,
			values: null,
			value: _value
		};
	},
	componentDidMount: function (){
		this.__loadData();
	},
	__loadData: function (){
		zn.data.request(this.props.data).then(function (data){
			if(data.code == 200){
				data = data.result;
				this.setState({
					data: data.slice(0),
					values: data
				});
			}
		}.bind(this));
	},
	__onItemClick: function (event, item){
		var _value = item[this.props.valueKey];
		if(this.props.multiple){
			if(this.state.value.indexOf(_value) == -1){
				this.state.value.push(_value);
			}else{
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
	__checked: function (item, index){
		var _value = item[this.props.valueKey];
		if(!_value){
			return false;
		}
		if(this.props.multiple){
			if(this.state.value.indexOf(_value) != -1) {
				return true;
			}
		} else if(this.state.value == _value) {
			return true;
		}
		
		return false;
	},
	__itemRender: function (item, index){
		var _element = znui.react.createReactElement(this.props.itemRender, {
			data: item,
			index: index,
			owner: this
		}, this.props.context);

		if(!_element) {
			_element = item[this.props.textKey];
		}

		return _element;
	},
	__renderList: function (){
		if(!this.state.values){
			return <loader.Loading content="加载中 ... " />;
		}
		
		return <div className="data-list">
			{
				this.state.values.map(function (item, index){
					return <div className={"data-list-item " + (this.__checked(item, index) ? 'actived' : '')} key={index} onClick={(event)=>this.__onItemClick(event, item)}>
						{this.__itemRender(item, index)}
					</div>
				}.bind(this))
			}
		</div>
	},
	__onFilter: function (value, item, index){
		if(this.props.onFilter){
			return this.props.onFilter(value, item, index);
		}

		var _text = item[this.props.textKey];
		if(_text.indexOf(value) != -1){
			return item;
		}
	},
	__onInputSearch: function (event){
		var _value = event.value;
		if(_value) {
			this.state.values = this.state.data.filter((item, index)=>this.__onFilter(_value, item, index));
		}else{
			this.state.values = this.state.data;
		}
		
		this.forceUpdate();
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-search-select", this.props.className)} style={this.props.style}>
				<SearchInput onEnter={this.__onInputSearch} />
				{this.__renderList()}
			</div>
		);
	}
});
