import firebase from './fire';

// var database = firebase.database();

export function doAnonSignIn() {
  firebase.auth().signInAnonymously().catch(function(error) {
    console.log(error)
  });
}

export function onSignIn(success, error) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      success(user)
    } else {
      error()
    }
  });
}

export function createNewBoard() {

}

export function getNotes(id, callback) {
  firebase.database().ref('board/' + id).on('value', (snapshot) => {
    callback(snapshot.val())
  });
}

export function addNote(text, colour, id, x, y) {
  firebase.database().ref('board/' + id).push({
    text: text, colour,
    time: firebase.database.ServerValue.TIMESTAMP,
    x, y
  });
}