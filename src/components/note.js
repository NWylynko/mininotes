import React, { useState, useEffect } from 'react';
import timeFormatter from '../tools/time'
import TextareaAutosize from 'react-autosize-textarea';
import { ColourCircleList } from './colourcircle'

import { backgroundColor } from "../tools/colours"

export default function Note({ time, mode, proptext, propcolour = 'black', style, hidden, cancelCallback, submitCallback }) {

  const [text, setText] = useState(proptext)
  const [textColour, setTextColour] = useState(propcolour)

  useEffect(() => {
    if (hidden) {
      setText('')
      setTextColour('black')
    }
  }, [hidden])


  function noteWidth() {
    if (mode === 'view') {
      if (text) {
        if (text.length <= 35) {
          return 'auto'
        } else {
          return 300
        }
      }
    } else {
      return 300
    }
  }

  return (
    <div style={style} hidden={hidden}>
      <div style={{
        border: '3px solid black',
        padding: 10,
        width: noteWidth(),
        height: 'auto',
        borderRadius: 5,

      }}>
        <p style={{ color: 'grey', fontSize: 10, margin: 0 }}>{timeFormatter(time)}</p>

        <NewNote 
          hidden={mode !== 'edit'} 
          textColour={textColour}
          setTextColour={setTextColour}
          text={text}
          setText={setText}
          submitCallback={submitCallback}
          cancelCallback={cancelCallback}
          />

        <div hidden={mode !== 'view'}>
          <p style={{ margin: 0, fontSize: 16, color: textColour }}>{text}</p>
        </div>

      </div>
    </div>
  )
}

function NewNote({ hidden, textColour, setTextColour, text, setText, submitCallback, cancelCallback}) {

  if (hidden) {
    return (null)
  } else {
    return (
      <>
        <TextareaAutosize
          style={{ color: textColour, fontSize: 16, width: 300, borderWidth: 0, resize: 'none', padding: 0, outline: 0, backgroundColor }}
          value={text}
          onChange={(e) => { setText(e.target.value); }}
          autoFocus
          rows={2}
          placeholder={'write something special'}
        />
        <ColourCircleList colourSelectCallback={setTextColour} />
  
        <button
          style={{ border: 0, padding: 4, margin: 2, borderRadius: 2, }}
          onClick={() => { submitCallback(text, textColour) }}>
          <span role="img" aria-label="submit">✔️</span>
        </button>
        <button
          style={{ border: 0, padding: 4, margin: 2, borderRadius: 2, }}
          onClick={cancelCallback}>
          <span role="img" aria-label="cancel">❌</span>
        </button>
      </>
    )
  }

}