import * as firebase from 'firebase/app';

import "firebase/database";
import "firebase/auth";
//import "firebase/storage"

import firebaseConfig from './config.json'; // file with firebase api 

firebase.initializeApp(firebaseConfig);

export default firebase
