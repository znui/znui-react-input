require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var inputs = require('../../src/index');

znui.react.createApplication({
    render: <div className="form-container">
        <inputs.Input onChange={(event)=>console.log(event.value)} />
        <inputs.Input name="name"/>
        <inputs.Input name="name" type="date" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="datetime-local" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="time" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="week" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="month" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="datetime-local" value="2018-06-12 19:30:30"/>
        <inputs.Input name="name" type="datetime-local" value="2018-06-12 19:30:30"/>
        <inputs.SearchInput name="name" options={['name', 'field', 'content']}/>
        <inputs.TagInput name="name"/>
        <inputs.Textarea onChange={(event)=>console.log(event.value)} />
    </div>
});