
require('znui-react');
var React = require('react');
var ReactDOM = require('react-dom');

require('../src/index.less');
var inputs = require('../src/index.js');
require('./index.less');

ReactDOM.render(
    <div>
        <inputs.Input onChange={(event)=>console.log(event.value)} />
        <inputs.Input name="name"/>
        <inputs.Textarea onChange={(event)=>console.log(event.value)} />
    </div>,
    document.getElementById('container'),
);