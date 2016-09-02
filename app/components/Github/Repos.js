import React from 'react';

const Repos = (props) => {
  return (
    <div>
      <p>REPOS</p>
      <p>{props.repos}</p>
    </div>
  );
};

// propTypes allow to validate the props
// that are being passed in, make sure if they have
// right type and if they are required.
// This allow to make sure that our components are used in a way
// they are intended to be used
Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
