import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          name="title"
          value={title}
          placeholder="Title"
          onChange={updateTitle}
        />
        <textarea
          name="content"
          value={content}
          placeholder="Take a note..."
          rows="3"
          onChange={updateContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
