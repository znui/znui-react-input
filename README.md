# znui-react-input
Input component.

[![npm](https://img.shields.io/npm/v/znui-react-input.svg)](https://www.npmjs.com/package/znui-react-input)
[![npm](https://img.shields.io/npm/dm/znui-react-input.svg)](https://www.npmjs.com/package/znui-react-input)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-input/example/www/index.html)

## Installation

```bash
npm install znui-react-input -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');

var inputs = require('znui-react-input');


znui.react.createApplication({
    render: <div className="form-container">
        <inputs.Input onChange={(event)=>console.log(event.value)} />
        <inputs.Input name="name"/>
        <inputs.Textarea onChange={(event)=>console.log(event.value)} />
    </div>
});
```

## License

MIT