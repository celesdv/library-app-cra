import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig); // initialize app
export const db = getFirestore(); // this gets the firestore database

//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//

export const registerUser = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
};

//### LOGIN USER WITH FIREBASE AUTHENTICATION ###//

export const loginUser = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
};

//### LOGOUT USER ###//
export const logoutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Saliste Correctamente');
    }).catch((error) => {
      alert('Algo salió mal :(');
      const errorCode = error.code;
      console.log(errorCode);
    });
};