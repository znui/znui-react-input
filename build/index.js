"use strict";

require('znui-react');

module.exports = znui.react.registerComponent('input', {
  components: {
    'Input': require('./Input.js'),
    'Inputs': require('./Inputs.js'),
    'Textarea': require('./Textarea.js')
  }
}).components();