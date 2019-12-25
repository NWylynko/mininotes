import React, { useState, useEffect, useCallback } from 'react';
import timeFormatter from '../tools/time'
import TextareaAutosize from 'react-autosize-textarea';
import { ColourCircleList, colours } from './colourcircle'

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
        border: '3px solid ' + textColour,
        padding: 10,
        width: noteWidth(),
        height: 'auto',
        borderRadius: 5,
        backgroundColor: 'white'

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

function NullFunc() {
  //pass
}

function NewNote({ hidden, textColour, setTextColour, text, setText, submitCallback = NullFunc, cancelCallback = NullFunc }) {

  const [metaDown, setMetaDown] = useState(false)

  const escFunction = useCallback((event) => {

    if (event.key === 'Escape') {
      cancelCallback()
    }

    if (event.key === 'Enter') {
      submitCallback(text, textColour)
    }

    if (event.key === 'Meta') {
      setMetaDown(!metaDown)
    }

    if (metaDown) {
      if (event.key === '!') {
        // 1
        setTextColour(colours[0])
      } else if (event.key === '@') {
        // 2
        setTextColour(colours[1])
      } else if (event.key === '#') {
        // 3
        setTextColour(colours[2])
      } else if (event.key === '$') {
        // 4
        setTextColour(colours[3])
      } else if (event.key === '%') {
        // 5
        setTextColour(colours[4])
      } else if (event.key === '^') {
        // 6
        setTextColour(colours[5])
      } else if (event.key === '&') {
        // 7
        setTextColour(colours[6])
      } else if (event.key === '*') {
        // 8
        setTextColour(colours[7])
      } else if (event.key === '(') {
        // 9
        setTextColour(colours[8])
      } else if (event.key === ')') {
        // 10
        setTextColour(colours[9])
      } else if (event.key === '_') {
        // 10
        partyMode(0)
      }

    }

    function partyMode(i) {
      console.log(colours[i])
      setTimeout(() => {
        i++
        if (i >= colours.length) {
          i = 0
        }
        setTextColour(colours[i])
        partyMode(i)
      }, 250)
    }

  }, [cancelCallback, submitCallback, text, textColour, metaDown, setTextColour]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  if (hidden) {
    return (null)
  } else {
    return (
      <>
        <TextareaAutosize
          style={{ color: textColour, fontSize: 16, width: 300, borderWidth: 0, resize: 'none', padding: 0, outline: 0 }}
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