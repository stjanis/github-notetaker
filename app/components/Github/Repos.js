import React, {PropTypes} from 'react';

const Repos = ({repos}) => {
  let reposLi = repos.map((repo, index) =>
    <li className="list-group-item" key={index}>
      {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
      {repo.description && <p>{repo.description}</p>}
    </li>
  );
  return (
    <div>
      <h3>User Repos</h3>
      <ul className="list-group">
        {reposLi}
      </ul>
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
