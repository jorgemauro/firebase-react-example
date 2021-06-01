import firebase from 'firebase';
import firebaseConfig from './FirebaseConfig'

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const actionCodeSettings ={
    url: 'http://localhost:3000/signupverify',
    handleCodeInApp: true,
  };