// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaqAdgXrniehAdMPxRoDvRuKvoA9n4NCc",
  authDomain: "reacttp-687e4.firebaseapp.com",
  projectId: "reacttp-687e4",
  storageBucket: "reacttp-687e4.firebasestorage.app",
  messagingSenderId: "273771703965",
  appId: "1:273771703965:web:6935032cb46befc8ba2e74",
  measurementId: "G-90F5HDZQHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };