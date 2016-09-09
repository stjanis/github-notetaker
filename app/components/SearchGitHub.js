import React from 'react';
let Router = require('react-router');

const SearchGitHub = React.createClass({
  mixins: [Router.History],
  getRef: function(ref) {
    this.usernameRef = ref;
  },
  handleSubmit: function() {
    // set username value from usernameRef
    let username = this.usernameRef.value;
    // reset val to empty string
    this.usernameRef.value = '';
    // pushState allows transition to new route
    this.history.pushState(null, '/profile/' + username);
  },
  render: function() {
    console.log(Router.history);
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    );
  }
});

export default SearchGitHub;
