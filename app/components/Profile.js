import React from 'react';
import Router from 'react-router';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          Repos Component
        </div>
        <div className="col-md-4">
          Notes Component
        </div>
      </div>
    );
  }
}

export default Profile;
