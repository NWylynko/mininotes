import firebase from './fire';

// var database = firebase.database();

export function doAnonSignIn() {
  firebase.auth().signInAnonymously().catch(function(error) {
    console.log(error)
  });
}

export function createNewBoard() {

}

export function getNotes(id, callback) {
  id = sanitizeID(id)
  firebase.database().ref('board/' + id).on('value', (snapshot) => {
    callback(snapshot.val())
  });
}

export function addNote(text, id, x, y) {
  id = sanitizeID(id)
  firebase.database().ref('board/' + id).push({
    text: text,
    time: firebase.database.ServerValue.TIMESTAMP,
    x, y
  });
}

function sanitizeID(id) {
  id = id.replace('/', '-')
  if (!(id)) {id = 0}
  return id
}