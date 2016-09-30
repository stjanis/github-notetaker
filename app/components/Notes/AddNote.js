import React, {PropTypes, Component} from 'react';

class AddNote extends Component {
  setRef(ref) {
    this.note = ref;
  }

  handleSubmit() {
    let newNote = this.note.value;
    this.note.value = "";
    this.props.addNote(newNote);
  }

  // set correct context for "this" in onClick and ref (by => function in this case)
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: PropTypes.string.isRequired,
  addNote: PropTypes.func.isRequired
}

export default AddNote;
