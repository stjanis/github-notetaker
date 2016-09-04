import React, {PropTypes} from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

// use tylermcginnis as username for test
const Notes = (props) => {
  return (
    <div>
      <h3>Notes for {props.username}</h3>
      <AddNote
        username={props.username}
        addNote={props.addNote}
      />
      <span className="loader"></span>
      <NotesList notes={props.notes} />
    </div>
  );
};

Notes.propTypes = {
  username: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired
}

export default Notes;
