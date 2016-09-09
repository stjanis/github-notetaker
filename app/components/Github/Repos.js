import React, {PropTypes} from 'react';

const Repos = (props) => {
  console.log(props.repos);
  return (
    <div>
      <p>REPOS</p>
    </div>
  );
};

// propTypes allow to validate the props
// that are being passed in, make sure if they have
// right type and if they are required.
// This allow to make sure that our components are used in a way
// they are intended to be used
Repos.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
}

export default Repos;
