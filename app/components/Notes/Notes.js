import React, {PropTypes} from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

// use tylermcginnis as username for test
const Notes = ({username, addNote, notes}) => {
  return (
    <div>
      <h3>Notes for {username}</h3>
      <AddNote
        username={username}
        addNote={addNote}
      />
      <span className="loader"></span>
      <NotesList notes={notes} />
    </div>
  );
};

Notes.propTypes = {
  username: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired
}

export default Notes;
