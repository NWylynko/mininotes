import React, { useState } from 'react';

export default function Note() {

  // const testtext =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ipsum eu vulputate commodo. Phasellus ac neque et sapien sagittis pretium non et velit. Nunc dui ipsum, fringilla a nulla auctor, condimentum efficitur erat. In congue ac nulla sollicitudin dictum. Sed interdum metus ipsum. Sed facilisis, purus non fringilla dictum, odio nibh varius neque, eget dignissim ante ligula at ante. Nunc non aliquet odio. Cras accumsan porta sapien in bibendum. Proin placerat eu lectus faucibus lobortis. Fusce vel risus ac mi aliquam porta non ac diam. Nulla dui nisi, luctus eget ante auctor, consequat semper tellus. Morbi felis erat, feugiat ut consectetur quis, commodo id erat. Pellentesque a egestas sapien. Proin aliquet blandit enim quis mollis."
  const testtext = 'hey'

  const [mode] = useState('edit')
  const [text, setText] = useState(testtext)
  const [noteHeight, setNoteHeight] = useState(customNoteHeight())

  function customNoteHeight() {
    if (text.length > 120) {
      return(120 + (Math.floor((text.length - 120) / 16) * 16))
    } else {
      return(100)
    }
  }

  return (
    <div style={{
      border: '3px solid black',
      padding: 10,
      width: 300,
      height: noteHeight,
      borderRadius: 5,
      
    }}>
      <div hidden={mode !== 'edit'}>
        <textarea
          style={{ fontSize: 16, width: 300, height: noteHeight, borderWidth: 0, resize: 'none', padding: 0, outline: 0 }}
          value={text}
          onChange={(e) => {setText(e.target.value); console.log(e.target.value.length); setNoteHeight(customNoteHeight())}}
          autoFocus
          
        />
      </div>
      <div hidden={mode !== 'view'}>
        <p style={{margin: 0, fontSize: 16,}}>{text}</p>
      </div>
    </div>
  )
}