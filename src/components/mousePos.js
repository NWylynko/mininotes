import React from 'react';

export default function MousePos({ children, setMousePos, enabled }) {

  function onMouseClick(e) {
    if (enabled) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    
  }

  return (
    <div className="App" onMouseDown={onMouseClick}>
      {children}
    </div>
  );
}

// onMouseMove.bind(this)