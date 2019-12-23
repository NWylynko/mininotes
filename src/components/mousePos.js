import React from 'react';

export default function MousePos({ children, setMousePos }) {

  function onMouseMove(e) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className="App" onMouseMove={onMouseMove.bind(this)}>
      {children}
    </div>
  );
}