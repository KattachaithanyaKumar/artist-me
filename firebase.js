// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB68EZvzwZ2TibtzjU0oNc_SfH6E5ije0",
  authDomain: "artist-me.firebaseapp.com",
  projectId: "artist-me",
  storageBucket: "artist-me.appspot.com",
  messagingSenderId: "240897119895",
  appId: "1:240897119895:web:fa73b68d5101af53befbd2"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig)

const auth = getAuth();

export {auth};