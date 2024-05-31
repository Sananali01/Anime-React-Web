// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDE58Ogfsk-GOqmQCve3yzaWNIX6EV_5GM",
    authDomain: "anime-fusion-web-app.firebaseapp.com",
    databaseURL: "https://anime-fusion-web-app-default-rtdb.firebaseio.com",
    projectId: "anime-fusion-web-app",
    storageBucket: "anime-fusion-web-app.appspot.com",
    messagingSenderId: "9819052182",
    appId: "1:9819052182:web:ea8aff963e4e618ce20ab7",
    measurementId: "G-CKP6VB6TR9"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
