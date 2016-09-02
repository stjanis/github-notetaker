import React, {PropTypes} from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <p>USER PROFILE!</p>
      <p>Username: {props.username}</p>
      <p>Bio: {props.bio.name}</p>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
}

export default UserProfile;
