import React, { useState } from 'react';
import MousePos from './components/mousePos'
import Note from './components/note'
import './App.css';

export default function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showNewNote, setShowNewNote] = useState(false)

  function submitNote(text) {
    setShowNewNote(false)
    console.log(text)
  }

  return (
    <div onMouseDown={() => {setShowNewNote(true)}}>
      <MousePos setMousePos={setMousePos} enabled={!showNewNote}>

        <Note 
        style={{
          position: "absolute",
          top: mousePos.y,
          left: mousePos.x,
        }} 
        hidden={!showNewNote} 
        mode={'edit'}
        time={Date.now()}
        cancelCallback={() => {setShowNewNote(false)}}
        submitCallback={submitNote}
        />

      </MousePos>
    </div>
  );
}
