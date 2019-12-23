
require('znui-react');
var React = require('react');
var ReactDOM = require('react-dom');

require('../src/index.less');
var inputs = require('../src/index.js');
require('./index.less');

ReactDOM.render(
    <div>
        <inputs.Input />
        <inputs.Inputs />
        <inputs.Textarea />
    </div>,
    document.getElementById('container'),
);