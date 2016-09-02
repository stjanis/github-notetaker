import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

// stateful component
// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: [1, 2, 3],
//       bio: {
//         name: "Janis Stipnieks"
//       },
//       repos: ['a', 'b', 'c']
//     }
//   };
//   componentDidMount() {
//     console.log('yes, it did mount');
//   };
//   render() {
//     //this.props - everything that's been passed to profile.js component
//     console.log(this.props);
//     // ..params.username - because "username" is what we specified in routes
//     return (
//       <div className="row">
//         <div className="col-md-4">
//           <UserProfile username={this.props.params.username} bio={this.state.bio} />
//         </div>
//         <div className="col-md-4">
//           <Repos repos={this.state.repos} />
//         </div>
//         <div className="col-md-4">
//           <Notes notes={this.state.notes} />
//         </div>
//       </div>
//     );
//   };
// }

const Profile = React.createClass ({
  // will take current instance and add (mixin) some new functionality into it
  // in other words - it takes "this" keyword of current class and adds few react fire mixin methods onto that class
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: "Janis Stipnieks"
      },
      repos: ['a', 'b', 'c']
    }
  },
  // componentDidMount will be called right after component is mounted
  // here we can do all out ajax requests, firebase.. etc
  // so when component mounts the below callback will be called
  componentDidMount: function() {
    // we create new instance of firebase and pass it the url where our project is located
    this.ref = new Firebase('https://github-note-taker.firebaseio.com');
    let childRef = this.ref.child(this.props.params.username);
    // bindAsArray method added with ReactFireMixin
    // it takes 2 arguments - 1. refernce to firebase. 2. properto of the state we want to bind the firebase to
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    // we don't want to add all firebase listeners and never get rid of those
    // unbind will remove that listener, so it's not trying to updated our state even if the component has moved on
    this.unbind('notes');
  },
  render: function() {
    console.log(this.state);
    //this.props - everything that's been passed to profile.js component
    // ..params.username - because "username" is what we specified in routes

    // to find everything that's been passed to component => console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

export default Profile;
