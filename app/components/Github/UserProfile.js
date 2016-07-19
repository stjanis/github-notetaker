import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <p>USER PROFILE!</p>
      <p>Username: {props.username}</p>
      <p>Bio: {props.bio.name}</p>
    </div>
  );
};

export default UserProfile;
