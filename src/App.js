import React from 'react';
import './App.css';
import Board from './Board'
import { backgroundColor } from "./tools/colours"
import { Helmet } from "react-helmet";


export default function App() {

  function ID() {
    const base = window.location.pathname.replace("/", "")

    if (base) {
      return base
    } else {
      return 'home'
    }

  }

  return (
    <div style={{
      backgroundColor
       }} className="App">

      <Helmet>
        <title>MiniNotes - {ID()}</title>
      </Helmet>

      <Board />
    </div>

  );

}
