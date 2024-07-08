// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-53922.firebaseapp.com",
  projectId: "mern-estate-53922",
  storageBucket: "mern-estate-53922.appspot.com",
  messagingSenderId: "103884180941",
  appId: "1:103884180941:web:c96d12401b18915a83c884",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
