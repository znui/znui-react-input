require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var inputs = require('../../src/index');

znui.react.createApplication({
    render: <div className="form-container">
        <inputs.Input onChange={(event)=>console.log(event.value)} />
        <inputs.Input name="name"/>
        <inputs.Textarea onChange={(event)=>console.log(event.value)} />
    </div>
});