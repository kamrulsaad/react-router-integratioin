// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9LvgOiEEz_1MksapF5cA8Pd1bgj6MFQw",
  authDomain: "router-integration.firebaseapp.com",
  projectId: "router-integration",
  storageBucket: "router-integration.appspot.com",
  messagingSenderId: "677974001560",
  appId: "1:677974001560:web:50dda7764ebc5491c10ded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;