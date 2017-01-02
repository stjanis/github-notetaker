import React, {Component} from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

// first we need to define base URL for Rebase
const base = Rebase.createClass({
  apiKey: "",
  authDomain: "",
  databaseURL: 'https://github-note-taker.firebaseio.com/',
  storageBucket: ""
});
// this will return bunch of methods for better
// interfacing with firebase

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [1, 2, 3],
      bio: {},
      repos: []
    };
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
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentWillUnmount() {
    // remove binding if we leave page, switch username etc.
    base.removeBinding(this.ref);
  }

  // set up a listener to new user, whenever we receive new props
  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });
    // bindToState allows to bind a property on your state (specifically this.notes property)
    // to an endpoint in firabase
    // 1. property - endpoint in firabase, you want to bind to
    // 2. property - options (for more check: https://github.com/tylermcginnis/re-base#bindtostateendpoint-options)

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
    // https://github.com/tylermcginnis/re-base#postendpoint-options
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
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
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    );
  }
}

export default Profile;
