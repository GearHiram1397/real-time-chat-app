import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {GoogleAuthProvider} from "firebase/auth";

/* Initializing the firebase app. */
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAprO92GPKC_AfcthG3C3AmNaLQUzyWpwg",
  authDomain: "chat-app-7b33e.firebaseapp.com",
  projectId: "chat-app-7b33e",
  storageBucket: "chat-app-7b33e.appspot.com",
  messagingSenderId: "248826220884",
  appId: "1:248826220884:web:13b5df22d83b1b69bd38c1"
});

/* Creating a new instance of the firestore database and a new instance of the GoogleAuthProvider. */
const db = getFirestore();
const provider = new GoogleAuthProvider();

/* Exporting the db and provider variables so that they can be used in other files. */
export { db, provider }