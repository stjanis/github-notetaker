let React = require('react');
// ReactDOM - tells to render component on client, not on server
let ReactDOM = require('react-dom');

// React.createClass - creates new React component
let Main = React.createClass({
  // render specifies what the UI looks for the specific element
  render: function() {
    return (
      <div>Hello world!</div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
