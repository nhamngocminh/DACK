// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO2GKoaJq0K7xLKbZ8lJjnDq6NvIrslNk",
  authDomain: "blog-e52e0.firebaseapp.com",
  projectId: "blog-e52e0",
  storageBucket: "blog-e52e0.appspot.com",
  messagingSenderId: "833659342355",
  appId: "1:833659342355:web:ec14fc57bb7d154d4f39e6",
  measurementId: "G-38078KBGQM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);