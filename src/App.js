import React, { useState } from 'react';
import MousePos from './components/mousePos'
import './App.css';

export default function App() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <MousePos setMousePos={setMousePos}>
        <p style={{
          position: "absolute",
          top: mousePos.y,
          left: mousePos.x,
        }}>bro</p>

      </MousePos>
    </div>
  );
}
