import React from 'react';
import './App.css';
import Board from './Board'
import { backgroundColor } from "./tools/colours"

export default function App() {

  return (
    <div style={{
        backgroundColor
      }} className="App">
      <Board />
    </div>
    
  );

}
