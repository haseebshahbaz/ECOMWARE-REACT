// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCq9swGNApqw5rX9E17pOl8gEld009BZsI",
  authDomain: "blogwebsite-f21ef.firebaseapp.com",
  projectId: "blogwebsite-f21ef",
  storageBucket: "blogwebsite-f21ef.appspot.com",
  messagingSenderId: "429957489618",
  appId: "1:429957489618:web:b4c5e15cb903279e7c9e0b",
  measurementId: "G-WJP2ZWZSFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };