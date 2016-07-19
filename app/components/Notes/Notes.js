import React from 'react';
import NotesList from './NotesList';

const Notes = (props) => {
  return (
    <div>
      <h3>Notes for {props.username}</h3>
      <NotesList notes={props.notes} />
    </div>
  );
};

export default Notes;
