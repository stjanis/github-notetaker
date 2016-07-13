import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';

// stateful component
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: "Janis Stipnieks"
      },
      repos: ['a', 'b', 'c']
    }
  }
  render() {
    //this.props - everything that's been passed to profile.js component
    console.log(this.props);
    // ..params.username - because "username" is what we specified in routes
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default Profile;
