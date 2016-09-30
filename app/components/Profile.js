import React, {Component} from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';

class Profile extends Component {
  getInitialState() {
    return {
      notes: [1, 2, 3],
      bio: {},
      repos: []
    }
  }

  // componentDidMount will be called right after component is mounted
  // here we can do all out ajax requests, firebase.. etc
  // so when component mounts the below callback will be called
  componentDidMount() {

    this.init(this.props.params.username);
  }

  // when component will receive new props, the defined
  // callback function will be invoked
  componentWillReceiveProps(nextProps) {

    this.init(nextProps.params.username);
  }

  componentWillUnmount: function() {

  }

  // set up a listener to new user, whenever we receive new props
  init(username) {
    let childRef = this.ref.child(username);
    // bindAsArray method added with ReactFireMixin
    // it takes 2 arguments - 1. refernce to firebase. 2. properto of the state we want to bind the firebase to
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
    .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
      // for reference on this keyword check:
      // egghead.io/playlists/the-this-key-word-250c37d9
  }

  handleAddNote(newNote) {
    
  }

  render() {
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
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }
}

export default Profile;
