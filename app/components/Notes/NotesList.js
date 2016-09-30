import React from 'react';

const NotesList = ({notes}) => {
  let notesLi = notes.map((note, index) =>
    <li className="list-group-item" key={index}>{note['.value']}</li>
  );
  return (
    <ul className="list-group">
      {notesLi}
    </ul>
  );
};

export default NotesList;
