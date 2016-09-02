import React, {PropTypes} from 'react';
import NotesList from './NotesList';

// use tylermcginnis as username for test
const Notes = (props) => {
  return (
    <div>
      <h3>Notes for {props.username}</h3>
      <NotesList notes={props.notes} />
    </div>
  );
};

Notes.propTypes = {
  username: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired
}

export default Notes;
