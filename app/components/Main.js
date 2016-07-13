import React from 'react';

// create new React component
// stateless component
const Main = (props) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          MENU
        </div>
      </nav>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default Main;
