import React, { useState, useEffect } from 'react';
import MousePos from './components/mousePos'
import Note from './components/note'
import { addNote, getNotes } from "./firebase"

export default function Board() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showNewNote, setShowNewNote] = useState(false)
  const [dataList, setDataList] = useState(null)
  const [loading, setLoading] = useState(true)

  const id = window.location.pathname

  useEffect(() => {
    getNotes(id, (data) => {

      setLoading(false)

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
    // console.log(text)
    if (text) {
      addNote(text, id, mousePos.x, mousePos.y)
    }

  }

  if (loading) {
    return (
      <div style={{
        textAlign: "center"
      }}>
        <p>Loading...</p>
        <p>1.0.5</p>
      </div>
    )
  } else {
    return (
      <>
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
  
          </MousePos>
  
        </div>
        {dataList}
      </>
    );
  }
  
}
