var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./src/Calendar');

ReactDOM.render(
  <div>
    <h1>Calendar example</h1>
    <Calendar />
  </div>,
  document.getElementById('root')
);
