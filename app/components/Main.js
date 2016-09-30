import React from 'react';
import SearchGitHub from './SearchGitHub';

// create new React component
// stateless component
const Main = (props) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGitHub />
        </div>
      </nav>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Main;

// profiles:
// jakelingwall
// tylermcginnis
