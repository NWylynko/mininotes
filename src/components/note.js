import React, { useState, useEffect } from 'react';
import timeFormatter from '../tools/time'
import TextareaAutosize from 'react-autosize-textarea';

export default function Note({ time, mode, proptext, style, hidden, cancelCallback, submitCallback }) {

  const [text, setText] = useState(proptext)

  useEffect(() => {
    if(hidden) {
      setText('')
    }
  }, [hidden])

  return (
    <div style={style} hidden={hidden}>
      <div style={{
        border: '3px solid black',
        padding: 10,
        width: 300,
        height: 'auto',
        borderRadius: 5,

      }}>
        <p style={{ color: 'grey', fontSize: 10, margin: 0 }}>{timeFormatter(time)}</p>
        <div hidden={mode !== 'edit'}>
          <TextareaAutosize
            style={{ fontSize: 16, width: 300, borderWidth: 0, resize: 'none', padding: 0, outline: 0 }}
            value={text}
            onChange={(e) => { setText(e.target.value); }}
            autoFocus
            rows={2}
            placeholder={'write something special'}
          />
          <button 
            style={{ border: 0, padding: 4, margin: 2, borderRadius: 2, }} 
            onClick={() => { submitCallback(text) }}>
            <span role="img" aria-label="submit">✔️</span>
          </button>
          <button 
            style={{ border: 0, padding: 4, margin: 2, borderRadius: 2, }} 
            onClick={cancelCallback}>
            <span role="img" aria-label="cancel">❌</span>
          </button>
        </div>

        <div hidden={mode !== 'view'}>
          <p style={{ margin: 0, fontSize: 16, }}>{text}</p>
        </div>

      </div>
    </div>
  )
}