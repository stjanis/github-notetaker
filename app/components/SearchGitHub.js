import React, {Component} from 'react';
import {Router} from 'react-router';

class SearchGitHub extends Component {
  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit() {
    // set username value from usernameRef
    let username = this.usernameRef.value;
    // reset val to empty string
    this.usernameRef.value = '';
    // pushState allows transition to new route
    this.props.history.pushState(null, '/profile/' + username);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchGitHub;
