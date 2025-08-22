// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "viveks-portfolio-c12i9",
  "appId": "1:433819442581:web:4ce275f212dba305626a9c",
  "storageBucket": "viveks-portfolio-c12i9.firebasestorage.app",
  "apiKey": "AIzaSyDE9zYoD23EYcxrFR6cN-zV4GNGFYia_7g",
  "authDomain": "viveks-portfolio-c12i9.firebaseapp.com",
  "messagingSenderId": "433819442581"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
