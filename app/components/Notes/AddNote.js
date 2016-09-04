import React, {PropTypes} from 'react';

// const AddNote = (props) => {
//   // ref - nametag that you give to an input field so you can access that value later
//   function setRef(ref) {
//     this.note = ref;
//   };
//   return (
//     <div className="input-group">
//       <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
//     </div>
//   );
// };
//
// AddNote.propTypes = {
//   username: PropTypes.string.isRequired,
//   addNote: PropTypes.func.isRequired
// };

// @TODO - refactoring
const AddNote = React.createClass ({
  propTypes: {
    username: PropTypes.string.isRequired,
    addNote: PropTypes.func.isRequired
  },
  setRef: function(ref) {
    this.note = ref;
  },
  handleSubmit: function() {
    let newNote = this.note.value;
    this.note.value = "";
    this.props.addNote(newNote);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }
});

export default AddNote;
