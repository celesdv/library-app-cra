import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import Swal from "sweetalert2";

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
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export const logoutUser = () => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            Toast.fire({
                icon: "success",
                title: "Log Out successfully!",
            });
        })
        .catch((error) => {
            Toast.fire({
                icon: "error",
                title: "Something went wrong! :(",
            });
            const errorCode = error.code;
            console.log(errorCode);
        });
};
