import React, { useState, useEffect } from 'react';
import MousePos from './components/mousePos'
import Note from './components/note'
import { addNote, getNotes } from "./firebase"

export default function Board() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showNewNote, setShowNewNote] = useState(false)
  const [dataList, setDataList] = useState(null)

  const id = window.location.pathname

  useEffect(() => {
    getNotes(id, (data) => {

      if (data) {
        let dataList = Object.values(data) // convert object into array of objects

        setDataList(dataList.map((item) =>
          <Note
            key={item.time}
            style={{
              position: "absolute",
              top: item.y,
              left: item.x,
            }}
            // hidden={true}
            mode={'view'}
            time={item.time}
            proptext={item.text}
          />
        ));
      }

    })
  }, [id])

  function submitNote(text) {
    setShowNewNote(false)
    console.log(text)
    addNote(text, id, mousePos.x, mousePos.y)
  }

  return (
    <div onMouseDown={() => { setShowNewNote(true) }}>
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
          cancelCallback={() => { setShowNewNote(false) }}
          submitCallback={submitNote}
        />
        {dataList}
      </MousePos>
    </div>

  );
}
