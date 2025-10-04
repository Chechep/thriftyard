// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,          // "AIzaSyB0pBlw1ordJ0mzveQBihhknD9d1Jaxys0"
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,  // "thriftyard-1.firebaseapp.com"
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,    // "thriftyard-1"
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // "thriftyard-1.appspot.com"
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // "563611869667"
  appId: import.meta.env.VITE_FIREBASE_APP_ID,            // "1:563611869667:web:2bca49ec594cdd753980d6"
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID // "G-RC2TGCRHVE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
