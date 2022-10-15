// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCHep5v4QfgUTT8erG63aNVNETrsDckkAk",

  authDomain: "spotify-ab39b.firebaseapp.com",

  projectId: "spotify-ab39b",

  storageBucket: "spotify-ab39b.appspot.com",

  messagingSenderId: "238190843900",

  appId: "1:238190843900:web:723d87479387fb2fac8479",

  measurementId: "G-PHH0MDSB9E"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();