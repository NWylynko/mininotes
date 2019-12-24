import React from 'react';

export default function ColourCircle({ style, colour, callback }) {

  return (
    <li style={style} className="row">
      <div style={{
        borderRadius: '50%',
        width: 20,
        height: 20,
        background: colour,
        margin: 2
      }} onMouseDown={() => {callback(colour)}}/>
    </li>

  )
}

const colours = ['black', '#40a4d8', '#33beb8', '#b3c500', '#ffcf00', '#f9a228', '#f6621f', '#db3838', '#ee657a', '#a363d9']

export function ColourCircleList({colourSelectCallback}) {

  const colourPickerList = colours.map((item) => {
    return (
      <ColourCircle colour={item} key={item} callback={colourSelectCallback}/>
    )
  })

  return (
    <ul className="rows" style={{listStyleType: "none", margin: 0, padding: 0}}>
      {colourPickerList}
    </ul>
  )
}