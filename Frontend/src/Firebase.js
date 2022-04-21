// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPvmmDxgUEIpzI_KldrlCDawCtTBqChVs",
  authDomain: "public-exchange.firebaseapp.com",
  projectId: "public-exchange",
  storageBucket: "public-exchange.appspot.com",
  messagingSenderId: "1007645430725",
  appId: "1:1007645430725:web:0fbefa1b36d82b84b9f1ac",
  measurementId: "G-YDXNY2KE1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { auth, provider };
