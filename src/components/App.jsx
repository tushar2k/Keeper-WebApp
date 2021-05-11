import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevValues) => {
      return prevValues.filter((x, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote} />
      {notes.map((x, index) => (
        <Note
          key={index}
          id={index}
          deleteItem={deleteNote}
          title={x.title}
          content={x.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
