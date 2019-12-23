import React, { useState } from 'react';
import './App.css';
import Board from './Board'
import firebase from "./firebase/fire"
import { doAnonSignIn } from "./firebase"

export default function App() {

  const [showBoard, setShowBoard] = useState(false)

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // var uid = user.uid;
      // console.log(uid)

      setShowBoard(true)

    } else {
      // User is signed out.
    }
  });

  doAnonSignIn()

  // console.log(window.location.pathname)

  if (showBoard) {
    return (
      <Board />
    );
  } else {
    return (
      <>
        <p>Loading...</p>
        <p>v1.0.3</p>
      </>
    )
  }

}
