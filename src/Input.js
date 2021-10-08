var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var TYPES = {
	email: 'email',
	tel: 'tel',
	id: 'text'
};

var ID = {
	checkCode: function (val) {
        var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
        var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
        var code = val.substring(17);
        if(p.test(val)) {
            var sum = 0;
            for(var i=0;i<17;i++) {
                sum += val[i]*factor[i];
            }
            if(parity[sum % 11] == code.toUpperCase()) {
                return true;
            }
        }
        return false;
    },
	checkDate: function (val) {
        var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
        if(pattern.test(val)) {
            var year = val.substring(0, 4);
            var month = val.substring(4, 6);
            var date = val.substring(6, 8);
            var date2 = new Date(year+"-"+month+"-"+date);
            if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
                return true;
            }
        }
        return false;
    },
	checkProv: function (val) {
        var pattern = /^[1-9][0-9]/;
        var provs = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};
        if(pattern.test(val)) {
            if(provs[val]) {
                return true;
            }
        }
        return false;
    },
	checkID: function (val) {
        if(val && this.checkCode(val)) {
            var date = val.substring(6,14);
            if(this.checkDate(date)) {
                if(this.checkProv(val.substring(0,2))) {
                    return true;
                }
            }
        }
        return false;
    }
};

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
	getInitialState: function (){
		var _value = this.props.value;
		if((_value === null || _value === undefined) && this.props.defaultValue !== null){
			_value = this.props.defaultValue;
		}

		return {
			value: this.__formatValue(_value)
		};
	},
	__formatValue: function (value){
		if(value){
			switch(this.props.type){
				case 'month':
					value = value.substring(0,7);
					break;
				case 'date':
					value = value.substring(0,10);
					break;
				case 'datetime-local':
					value = value.split(' ').join('T').substring(0,16);
					break;
			}
		}

		if(this.props.required) {
			if(!this.validate(value)) {
				return '';
			}
		}

		if(value === null){
			return '';
		}

		return value;
	},
	validate: function (value){
		var _validate = this.props.validate || this.props.type;

		if(typeof _validate == 'function') {
			if(_validate(value, this) === false) {
				return false;
			}
		}else if(typeof _validate == 'string'){
			switch(_validate){
				case 'email':
					if(!(/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(value))){
						return false; 
					}
					break;
				case 'tel':
					if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))){
						return false; 
					}
					break;
				case 'id':
					if(!(ID.checkID(value))){
						return false; 
					}
					break;
			}
		}
		
		return true;
	},
	componentDidMount: function (){

	},
	getValue: function () {
		return this.__parseGetValue(ReactDOM.findDOMNode(this).value);
	},
	setValue: function (value) {
		return ReactDOM.findDOMNode(this).value = this.__parseSetValue(value), this;
	},
	__parseGetValue: function (value){
		if(this.props.type=='number'){
			value = +value;
		}

		if(this.props.type=='date'){
			if(!value){
				return null;
			}
		}

		return value || '';
	},
	__parseSetValue: function (value){
		return this.__formatValue(value);
	},
	__onChange: function (event){
		this.setState({
			value: event.target.value
		});
		var _value = this.__formatValue(event.target.value);
		event.value = _value;
		event.validate = _value;

		this.props.onChange && this.props.onChange(event, this);
	},
	__onFocus: function (event){
		var _value = this.__formatValue(event.target.value);
		event.value = _value;
		event.validate = _value;

		this.props.onFocus && this.props.onFocus(event, this);
	},
	__onBlur: function (event){
		var _value = this.__formatValue(event.target.value);
		event.value = _value;
		event.validate = _value;

		this.props.onBlur && this.props.onBlur(event, this);
	},
	__onKeyUp: function (event){
		var _value = this.__formatValue(event.target.value);
		event.value = _value;
		event.validate = _value;
		if(event.nativeEvent.keyCode==13){
			this.props.onEnter && this.props.onEnter(event, this);
		}

		this.props.onKeyUp && this.props.onKeyUp(event, this);
	},
	render: function(){
		var _type = TYPES[this.props.type] || this.props.type || 'text';
		return (
			<input className={znui.react.classname('zr-input', this.props.className)}
				required={this.props.required}
				style={this.props.style}
				{...this.props.attrs}
				name={this.props.name}
				type={_type}
				value={this.state.value}
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
