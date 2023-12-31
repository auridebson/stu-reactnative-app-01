import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbB1tyUCjWkh5mLJG91wQZRrbPhSZGxJY",
  authDomain: "kravmaga-71876.firebaseapp.com",
  databaseURL: "https://kravmaga-71876-default-rtdb.firebaseio.com",
  projectId: "kravmaga-71876",
  storageBucket: "kravmaga-71876.appspot.com",
  messagingSenderId: "885030406244",
  appId: "1:885030406244:web:93ea5576274768ae383771",
  measurementId: "G-0887Y5E741"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)

