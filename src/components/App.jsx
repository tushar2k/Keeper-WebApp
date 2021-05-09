import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((thisNote) => 
        <Note key={thisNote.key} title={thisNote.title} content={thisNote.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;
