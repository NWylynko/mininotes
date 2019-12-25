import React from 'react';
import './App.css';
import Board from './Board'
import { backgroundColor } from "./tools/colours"
import { Helmet } from "react-helmet";
import { feature, name, id } from './tools/id';
import corkBackground from './imgs/cork.jpg';

export default function App() {

  console.log("feature: " + feature())
  console.log("id: " + id())
  console.log("name: " + name())

  return (
    <Background feature={feature()}>
      <Helmet>
        <title>MiniNotes - {name() ? name() : 'home'}</title>
      </Helmet>

      <Board />
    </Background>

  );

}

function Background({ feature, children }) {
  switch (feature) {
    case 'cork':
      return (
        <>
          <div style={{
            backgroundImage: `url(${corkBackground})`
          }} className="App">
            {children}
          </div>
        </>
      )
    default:
      return (
        <>
          <div style={{
            backgroundColor
          }} className="App">
            {children}
          </div>
        </>
      )
  }
}