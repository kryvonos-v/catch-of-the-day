import Rebase from 're-base';
import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdl_akbZ0bJAgxsTNKCRmkkVQEu6gMS2M",
  authDomain: "catch-of-the-day-kryvonos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kryvonos-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "catch-of-the-day-kryvonos",
  storageBucket: "catch-of-the-day-kryvonos.appspot.com",
  messagingSenderId: "336686913980",
  appId: "1:336686913980:web:1438d62a9c5f32464b33b9"
});

export const base = Rebase.createClass(firebaseApp.database());
