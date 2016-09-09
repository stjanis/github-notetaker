import React, {PropTypes} from 'react';

const UserProfile = (props) => {
  console.log(props.bio);
  return (
    <div>
      <p>USER PROFILE!</p>
      <p>Username: {props.username}</p>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
}

export default UserProfile;
