import React, {PropTypes} from 'react';

const UserProfile = (props) =>
  <div>
    {props.bio.avatar_url && <li className="list-group-item"> <img src={props.bio.avatar_url} className="img-rounded img-responsive"/></li>}
    {props.bio.name && <li className="list-group-item">Name: {props.bio.name}</li>}
    {props.bio.login && <li className="list-group-item">Username: {props.bio.login}</li>}
    {props.bio.email && <li className="list-group-item">Email: {props.bio.email}</li>}
    {props.bio.location && <li className="list-group-item">Location: {props.bio.location}</li>}
    {props.bio.company && <li className="list-group-item">Company: {props.bio.company}</li>}
    {props.bio.followers && <li className="list-group-item">Followers: {props.bio.followers}</li>}
    {props.bio.following && <li className="list-group-item">Following: {props.bio.following}</li>}
    {props.bio.following && <li className="list-group-item">Public Repos: {props.bio.public_repos}</li>}
    {props.bio.blog && <li className="list-group-item">Blog: <a href={props.bio.blog}> {props.bio.blog}</a></li>}
  </div>;

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
}

export default UserProfile;
