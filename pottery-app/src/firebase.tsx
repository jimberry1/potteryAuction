import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAcEI-5NRGHWOJT6zt8dnNU9SnklyaP3zc',
  authDomain: 'craftartfair.firebaseapp.com',
  projectId: 'craftartfair',
  storageBucket: 'craftartfair.appspot.com',
  messagingSenderId: '827159294520',
  appId: '1:827159294520:web:2be324f96c5348de7e2ccd',
  measurementId: 'G-3V85GTYCPR',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

export { auth, firebaseApp, storage };
export default db;
