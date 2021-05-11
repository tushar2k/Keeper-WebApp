import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState(false);
  const note = {
    title: "",
    content: "",
  };

  function updateTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }
  function updateContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }
  function onSubmitHandler(event) {
    note.title = title;
    note.content = content;
    setContent("");
    setTitle("");
    // console.log(note);
    props.addItem(note);
    event.preventDefault();
  }

  function updateClick() {
    setClicked(true);
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="create-note">
        {clicked && (
          <input
            name="title"
            value={title}
            placeholder="Title"
            onChange={updateTitle}
          />
        )}
        <textarea
          name="content"
          onClick={updateClick}
          value={content}
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
          onChange={updateContent}
        />
        <Zoom in={clicked}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
